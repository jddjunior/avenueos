/**
 * Triple-check validation pipeline for AvenueOS agent outputs.
 *
 * Three-pass process:
 *   Pass 1 — Agent produces output
 *   Pass 2 — Validator grades the output (correctness + brand + DC syntax)
 *   Pass 3 — Second independent grader cross-validates (different prompt seed)
 *
 * If either grader returns a score below the threshold, the output is rejected
 * and the originating agent is asked to revise with the feedback. Up to
 * MAX_REVISION_CYCLES cycles before escalating to a human or dead-letter queue.
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export interface ValidationRubric {
  dcSyntaxValid: boolean;          // no malformed <x-dc>, <sc-for>, <sc-if> tags
  brandCompliant: boolean;         // tone, colours, font usage correct
  seoCorrect: boolean;             // titles, meta, schema if applicable
  conversionImpact: 1 | 2 | 3 | 4 | 5;   // 1=harmful 3=neutral 5=strong uplift
  factuallyAccurate: boolean;      // no hallucinated claims
  overallScore: number;            // 0–100
  issues: string[];
  suggestions: string[];
}

export interface TripleCheckResult {
  approved: boolean;
  finalOutput: string;
  pass1Score: number;
  pass2Score: number;
  revisions: number;
  rubric: ValidationRubric;
}

const SCORE_THRESHOLD = 75;   // minimum to approve
const MAX_REVISION_CYCLES = 3;

// ─── Grader call ─────────────────────────────────────────────────────────────

async function gradeOutput(
  agentOutput: string,
  taskDescription: string,
  graderSeed: "alpha" | "beta"
): Promise<ValidationRubric> {
  const seedInstruction =
    graderSeed === "alpha"
      ? "Focus on technical correctness, DC component syntax, and SEO signals."
      : "Focus on brand compliance, conversion impact, and factual accuracy. Do not anchor to prior evaluations.";

  const msg = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    thinking: { type: "adaptive" },
    messages: [
      {
        role: "user",
        content: `You are a quality grader for AvenueOS, an AI-powered digital marketing platform.
${seedInstruction}

## Task that was requested
${taskDescription}

## Agent output to evaluate
\`\`\`
${agentOutput}
\`\`\`

## AvenueOS DC Component Rules
- Valid root element: <x-dc> ... </x-dc>
- Loops: <sc-for list="{{ varName }}" as="item"> ... </sc-for>
- Conditionals: <sc-if cond="{{ expr }}"> ... </sc-if>
- Imports: <dc-import src="./ComponentName.dc.html" />
- Template expressions: {{ variableName }}
- No external JS libraries beyond support.js and GSAP
- CSS must use CSS variables: --gray-*, --green-*, --amber-*, --blue-*, --violet-*, --red-*
- Typography: font-family: var(--font-sans) or var(--font-mono)

## Brand Guidelines
- Company: Branch Avenue / AvenueOS
- Tone: professional, confident, data-driven, never pushy
- Primary palette: gray scale with accent colour via CSS var(--ac)
- CTA style: rounded pill buttons, dark background or outlined

Respond with ONLY valid JSON matching this schema (no markdown fences):
{
  "dcSyntaxValid": boolean,
  "brandCompliant": boolean,
  "seoCorrect": boolean,
  "conversionImpact": 1|2|3|4|5,
  "factuallyAccurate": boolean,
  "overallScore": number (0-100),
  "issues": string[],
  "suggestions": string[]
}`,
      },
    ],
  });

  const text = msg.content
    .filter((b) => b.type === "text")
    .map((b) => (b as Anthropic.TextBlock).text)
    .join("");

  try {
    return JSON.parse(text) as ValidationRubric;
  } catch {
    return {
      dcSyntaxValid: false,
      brandCompliant: false,
      seoCorrect: false,
      conversionImpact: 1,
      factuallyAccurate: false,
      overallScore: 0,
      issues: ["Grader returned unparseable response"],
      suggestions: [],
    };
  }
}

// ─── Revision request ─────────────────────────────────────────────────────────

async function requestRevision(
  originalOutput: string,
  rubric: ValidationRubric,
  taskDescription: string,
  validatorAgentId: string
): Promise<string> {
  const session = await (client.beta.agents.sessions as any).create(validatorAgentId, {
    initial_messages: [
      {
        role: "user",
        content: `You previously produced this output for the following task. A quality grader found issues.
Revise your output to address all issues and meet the quality threshold (score ≥ ${SCORE_THRESHOLD}/100).

## Original task
${taskDescription}

## Your previous output
${originalOutput}

## Grader score: ${rubric.overallScore}/100

## Issues found
${rubric.issues.map((i) => `- ${i}`).join("\n")}

## Suggestions
${rubric.suggestions.map((s) => `- ${s}`).join("\n")}

Produce a revised, complete output. Do not include explanation — output only the revised content.`,
      },
    ],
  });

  let revised = "";
  for await (const event of (session as any).stream()) {
    if (event.type === "message_delta") {
      for (const block of event.delta?.content ?? []) {
        if (block.type === "text") revised += block.text;
      }
    }
  }
  return revised;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface TripleCheckOptions {
  agentOutput: string;
  taskDescription: string;
  validatorAgentId: string;
  autoRevise?: boolean;
}

export async function tripleCheck(opts: TripleCheckOptions): Promise<TripleCheckResult> {
  const { taskDescription, validatorAgentId, autoRevise = true } = opts;
  let currentOutput = opts.agentOutput;
  let revisions = 0;

  for (let cycle = 0; cycle <= MAX_REVISION_CYCLES; cycle++) {
    // Pass 2 and 3 — independent graders
    const [rubricAlpha, rubricBeta] = await Promise.all([
      gradeOutput(currentOutput, taskDescription, "alpha"),
      gradeOutput(currentOutput, taskDescription, "beta"),
    ]);

    // Merge: take lower of the two scores (conservative)
    const mergedScore = Math.min(rubricAlpha.overallScore, rubricBeta.overallScore);
    const mergedIssues = [...new Set([...rubricAlpha.issues, ...rubricBeta.issues])];
    const mergedSuggestions = [...new Set([...rubricAlpha.suggestions, ...rubricBeta.suggestions])];

    const mergedRubric: ValidationRubric = {
      dcSyntaxValid: rubricAlpha.dcSyntaxValid && rubricBeta.dcSyntaxValid,
      brandCompliant: rubricAlpha.brandCompliant && rubricBeta.brandCompliant,
      seoCorrect: rubricAlpha.seoCorrect && rubricBeta.seoCorrect,
      conversionImpact: Math.min(rubricAlpha.conversionImpact, rubricBeta.conversionImpact) as 1|2|3|4|5,
      factuallyAccurate: rubricAlpha.factuallyAccurate && rubricBeta.factuallyAccurate,
      overallScore: mergedScore,
      issues: mergedIssues,
      suggestions: mergedSuggestions,
    };

    if (mergedScore >= SCORE_THRESHOLD) {
      return {
        approved: true,
        finalOutput: currentOutput,
        pass1Score: rubricAlpha.overallScore,
        pass2Score: rubricBeta.overallScore,
        revisions,
        rubric: mergedRubric,
      };
    }

    if (!autoRevise || cycle >= MAX_REVISION_CYCLES) {
      return {
        approved: false,
        finalOutput: currentOutput,
        pass1Score: rubricAlpha.overallScore,
        pass2Score: rubricBeta.overallScore,
        revisions,
        rubric: mergedRubric,
      };
    }

    // Request revision from the validator agent acting as a skilled revisor
    currentOutput = await requestRevision(
      currentOutput,
      mergedRubric,
      taskDescription,
      validatorAgentId
    );
    revisions++;
  }

  throw new Error("Triple-check exceeded maximum revision cycles");
}
