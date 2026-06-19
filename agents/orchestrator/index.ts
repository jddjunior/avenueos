/**
 * AvenueOS Master Orchestrator
 *
 * Entry point for all agent-driven marketing tasks.
 * Coordinates specialist agents (SEO, Ads, CRO, Web, Call, Report) with:
 *   - Orchestration oversight (coordinator pattern)
 *   - Triple-check validation before committing any output
 *   - Self-healing sessions with circuit breakers + fallback
 *   - Multi-tenant routing with rate limiting and context isolation
 *   - GitHub version control via Managed Agents GitHub resource
 *   - Builder.io content updates via skill-equipped agents
 *   - Prompt caching for tenant context (avoids re-loading 100s of tenant configs)
 */

import Anthropic from "@anthropic-ai/sdk";
import { tripleCheck } from "./triple-check.js";
import {
  runSession,
  enqueueDeadLetter,
  getCircuitStatus,
} from "./session-manager.js";
import {
  TenantConfig,
  AgentTask,
  cacheTenant,
  getTenantContext,
  checkRateLimit,
  enqueueTask,
  dequeueTask,
  getQueueLength,
  resolveAgentId,
  getOrchestratorAgentId,
  getValidatorAgentId,
} from "./multi-tenant.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Agent Registration ────────────────────────────────────────────────────────

/**
 * One-time setup: creates all Managed Agents and stores their IDs in env.
 * Run this ONCE during deployment — do NOT call on every request.
 * Agent IDs are stored as environment variables and reused across sessions.
 */
export async function registerAgents(): Promise<Record<string, string>> {
  const agentDefs = [
    {
      envKey: "AVENUEOS_ORCHESTRATOR_AGENT_ID",
      name: "AvenueOS Orchestrator",
      description:
        "Master coordinator for AvenueOS marketing workflows. Routes tasks to specialist sub-agents, enforces triple-check validation, and manages GitHub version control.",
      skillPaths: [
        "agents/skills/dc-system/SKILL.md",
        "agents/skills/builderio/SKILL.md",
        "agents/skills/github/SKILL.md",
      ],
    },
    {
      envKey: "AVENUEOS_SEO_AGENT_ID",
      name: "AvenueOS SEO Agent",
      description: "Handles organic search optimization, meta tags, schema markup, and content strategy.",
      skillPaths: ["agents/skills/dc-system/SKILL.md", "agents/skills/builderio/SKILL.md", "agents/skills/seo/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_ADS_AGENT_ID",
      name: "AvenueOS Ads Agent",
      description: "Manages paid advertising copy, landing page alignment, and performance analysis.",
      skillPaths: ["agents/skills/dc-system/SKILL.md", "agents/skills/builderio/SKILL.md", "agents/skills/ads/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_CRO_AGENT_ID",
      name: "AvenueOS CRO Agent",
      description: "Conversion rate optimization: A/B test ideation, CTA copy, form optimization.",
      skillPaths: ["agents/skills/dc-system/SKILL.md", "agents/skills/builderio/SKILL.md", "agents/skills/cro/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_WEB_AGENT_ID",
      name: "AvenueOS Web Agent",
      description: "Website production: DC component building, Builder.io content management, responsiveness.",
      skillPaths: ["agents/skills/dc-system/SKILL.md", "agents/skills/builderio/SKILL.md", "agents/skills/web/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_CALL_AGENT_ID",
      name: "AvenueOS Call Agent",
      description: "Call tracking, IVR flows, script optimization, and call analytics.",
      skillPaths: ["agents/skills/call/SKILL.md", "agents/skills/dc-system/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_REPORT_AGENT_ID",
      name: "AvenueOS Report Agent",
      description: "KPI aggregation, executive summaries, and client-ready performance reports.",
      skillPaths: ["agents/skills/report/SKILL.md", "agents/skills/github/SKILL.md"],
    },
    {
      envKey: "AVENUEOS_VALIDATOR_AGENT_ID",
      name: "AvenueOS Validator Agent",
      description: "Independent quality grader. Scores agent outputs on correctness, brand compliance, and conversion impact.",
      skillPaths: ["agents/skills/dc-system/SKILL.md", "agents/skills/seo/SKILL.md", "agents/skills/cro/SKILL.md"],
    },
  ];

  const ids: Record<string, string> = {};

  for (const def of agentDefs) {
    if (process.env[def.envKey]) {
      ids[def.envKey] = process.env[def.envKey]!;
      console.log(`[Register] Reusing existing agent ${def.name} (${process.env[def.envKey]})`);
      continue;
    }

    // @ts-ignore — beta API
    const agent = await client.beta.agents.create({
      model: "claude-opus-4-8",
      name: def.name,
      description: def.description,
      thinking: { type: "adaptive" },
      tools: [
        { type: "bash" },
        { type: "file_editor" },
      ],
      resources: [
        {
          type: "github_repository",
          repository: {
            owner: process.env.GITHUB_OWNER ?? "jddjunior",
            name:  process.env.GITHUB_REPO  ?? "avenueos",
          },
        },
      ],
      skills: def.skillPaths.map((path) => ({ path })),
    });

    ids[def.envKey] = agent.id;
    console.log(`[Register] Created agent ${def.name}: ${agent.id}`);
  }

  return ids;
}

// ─── Orchestrate Single Task ──────────────────────────────────────────────────

export interface OrchestratorOptions {
  tenant: TenantConfig;
  task: Omit<AgentTask, "id" | "createdAt">;
  skipValidation?: boolean;
}

export interface OrchestratorResult {
  taskId: string;
  tenantId: string;
  channel: string;
  approved: boolean;
  output: string;
  validationScore: number;
  revisions: number;
  sessionId: string;
  agentId: string;
  usedFallback: boolean;
  durationMs: number;
}

export async function orchestrate(opts: OrchestratorOptions): Promise<OrchestratorResult> {
  const startMs = Date.now();
  const taskId = `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const { tenant, task, skipValidation = false } = opts;

  // Ensure tenant context is cached
  let tenantCtx = getTenantContext(tenant.id);
  if (!tenantCtx) tenantCtx = cacheTenant(tenant);

  // Rate limit check
  if (!checkRateLimit(tenant.id, tenant.priorityLane)) {
    throw new Error(`Rate limit exceeded for tenant ${tenant.id} (lane: ${tenant.priorityLane})`);
  }

  const agentId = resolveAgentId(task.channel);
  const validatorAgentId = getValidatorAgentId();

  // Build messages with tenant system context (prompt-cached via long system prefix)
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    {
      role: "user",
      content: `${tenantCtx.systemPrefix}

## Task
${task.instruction}

## Requirements
- Use the DC component format for any HTML output (see SKILL.md for dc-system)
- Interact with Builder.io using the space ID: ${tenant.builderIoSpaceId}
- Commit all file changes to GitHub: ${tenant.githubOwner}/${tenant.githubRepo} branch ${tenant.githubBranch}
- Return a summary of what was changed and why`,
    },
  ];

  // Run the specialist agent with self-healing
  const sessionResult = await runSession({
    agentId,
    tenantId: tenant.id,
    taskId,
    messages,
    fallbackAgentId: getOrchestratorAgentId(), // orchestrator acts as fallback
  });

  if (skipValidation) {
    return {
      taskId,
      tenantId: tenant.id,
      channel: task.channel,
      approved: true,
      output: sessionResult.output,
      validationScore: -1,
      revisions: 0,
      sessionId: sessionResult.sessionId,
      agentId: sessionResult.agentId,
      usedFallback: sessionResult.usedFallback,
      durationMs: Date.now() - startMs,
    };
  }

  // Triple-check validation
  const validation = await tripleCheck({
    agentOutput: sessionResult.output,
    taskDescription: task.instruction,
    validatorAgentId,
    autoRevise: true,
  });

  if (!validation.approved) {
    // Soft escalation — log but don't dead-letter (output is returned for human review)
    console.warn(
      `[Orchestrator] Task ${taskId} did not pass triple-check ` +
      `(score: ${validation.rubric.overallScore}/100, revisions: ${validation.revisions})`
    );
  }

  return {
    taskId,
    tenantId: tenant.id,
    channel: task.channel,
    approved: validation.approved,
    output: validation.finalOutput,
    validationScore: validation.rubric.overallScore,
    revisions: validation.revisions,
    sessionId: sessionResult.sessionId,
    agentId: sessionResult.agentId,
    usedFallback: sessionResult.usedFallback,
    durationMs: Date.now() - startMs,
  };
}

// ─── Batch Worker (multi-tenant queue drain) ──────────────────────────────────

/**
 * Processes tasks from the priority queue.
 * Run this as a background worker — typically in a long-running process or
 * serverless cron that polls the queue.
 *
 * @param concurrency  Number of tasks to process simultaneously (default 5)
 * @param tenantLoader Async function to load full TenantConfig by ID (from your DB)
 */
export async function processBatch(
  concurrency = 5,
  tenantLoader: (tenantId: string) => Promise<TenantConfig>
): Promise<void> {
  const inFlight = new Set<Promise<void>>();

  while (getQueueLength() > 0 || inFlight.size > 0) {
    while (inFlight.size < concurrency && getQueueLength() > 0) {
      const task = dequeueTask();
      if (!task) break;

      const work = (async () => {
        try {
          const tenant = await tenantLoader(task.tenantId);
          const result = await orchestrate({ tenant, task });
          console.log(
            `[Worker] ✓ ${task.channel.toUpperCase()} task ${task.id} for ${task.tenantId} ` +
            `— score ${result.validationScore}/100 in ${result.durationMs}ms`
          );
        } catch (err) {
          console.error(`[Worker] ✗ Task ${task.id} permanently failed:`, err);
          enqueueDeadLetter({
            taskId: task.id,
            tenantId: task.tenantId,
            agentId: resolveAgentId(task.channel),
            error: String(err),
            timestamp: Date.now(),
            payload: task,
          });
        }
      })();

      inFlight.add(work);
      work.finally(() => inFlight.delete(work));
    }

    // Yield to event loop
    await new Promise((r) => setImmediate(r));
  }
}

// ─── Health / Status ──────────────────────────────────────────────────────────

export function getSystemStatus() {
  return {
    queueLength: getQueueLength(),
    circuits: getCircuitStatus(),
    timestamp: new Date().toISOString(),
  };
}
