/**
 * AvenueOS Task Runner
 *
 * CLI tool for submitting a task to the orchestrator.
 *
 * Usage:
 *   bun agents/run-task.ts \
 *     --tenant=tenant123 \
 *     --channel=seo \
 *     --instruction="Optimize the hero section title tag and meta description for the automotive landing page."
 *
 * Required env vars:
 *   ANTHROPIC_API_KEY
 *   AVENUEOS_ORCHESTRATOR_AGENT_ID
 *   AVENUEOS_SEO_AGENT_ID (+ other channel agent IDs)
 *   AVENUEOS_VALIDATOR_AGENT_ID
 */

import { orchestrate, OrchestratorOptions } from "./orchestrator/index.js";
import type { TenantConfig, AgentTask } from "./orchestrator/multi-tenant.js";

// Example tenant loader — replace with your actual data layer (DB, API, etc.)
async function loadTenant(tenantId: string): Promise<TenantConfig> {
  // In production, fetch from your database or config service
  // This is a sample config for local testing
  const sampleTenants: Record<string, TenantConfig> = {
    demo_automotive: {
      id: "demo_automotive",
      name: "City Auto Group",
      vertical: "automotive",
      builderIoSpaceId: process.env.DEMO_BUILDER_SPACE_ID ?? "REPLACE_WITH_SPACE_ID",
      builderIoApiKey: process.env.DEMO_BUILDER_API_KEY ?? "REPLACE_WITH_API_KEY",
      githubOwner: "jddjunior",
      githubRepo: "avenueos",
      githubBranch: "tenant/demo_automotive/staging",
      primaryDomain: "https://cityautogroup.example.com",
      accentColor: "#275ea0",
      accentTint: "#eaf1fb",
      priorityLane: "normal",
    },
    demo_contractor: {
      id: "demo_contractor",
      name: "Premier Plumbing Co.",
      vertical: "contractors",
      builderIoSpaceId: process.env.DEMO_BUILDER_SPACE_ID ?? "REPLACE_WITH_SPACE_ID",
      builderIoApiKey: process.env.DEMO_BUILDER_API_KEY ?? "REPLACE_WITH_API_KEY",
      githubOwner: "jddjunior",
      githubRepo: "avenueos",
      githubBranch: "tenant/demo_contractor/staging",
      primaryDomain: "https://premierplumbing.example.com",
      accentColor: "#166848",
      accentTint: "#ecf5f0",
      priorityLane: "normal",
    },
  };

  const tenant = sampleTenants[tenantId];
  if (!tenant) throw new Error(`Unknown tenant: ${tenantId}`);
  return tenant;
}

// Parse CLI args
function parseArgs(): { tenantId: string; channel: AgentTask["channel"]; instruction: string } {
  const args: Record<string, string> = {};
  for (const arg of process.argv.slice(2)) {
    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    args[key] = rest.join("=");
  }

  const tenantId = args.tenant;
  const channel = args.channel as AgentTask["channel"];
  const instruction = args.instruction;

  if (!tenantId || !channel || !instruction) {
    console.error("Usage: bun agents/run-task.ts --tenant=<id> --channel=<seo|ads|cro|web|call|report> --instruction=\"<task>\"");
    process.exit(1);
  }

  const validChannels: AgentTask["channel"][] = ["seo", "ads", "cro", "web", "call", "report"];
  if (!validChannels.includes(channel)) {
    console.error(`Invalid channel: ${channel}. Must be one of: ${validChannels.join(", ")}`);
    process.exit(1);
  }

  return { tenantId, channel, instruction };
}

async function main() {
  const { tenantId, channel, instruction } = parseArgs();
  const tenant = await loadTenant(tenantId);

  console.log(`\nAvenueOS Task Runner`);
  console.log("=".repeat(40));
  console.log(`Tenant: ${tenant.name} (${tenantId})`);
  console.log(`Channel: ${channel.toUpperCase()}`);
  console.log(`Instruction: ${instruction}\n`);

  const task: Omit<AgentTask, "id" | "createdAt"> = {
    tenantId,
    channel,
    instruction,
    priority: 1,
  };

  const opts: OrchestratorOptions = { tenant, task };

  console.log("Dispatching to orchestrator...\n");
  const result = await orchestrate(opts);

  console.log("=".repeat(40));
  console.log(`Result:\n`);
  console.log(`  Task ID:       ${result.taskId}`);
  console.log(`  Approved:      ${result.approved ? "✓ YES" : "✗ NO — needs human review"}`);
  console.log(`  Score:         ${result.validationScore}/100`);
  console.log(`  Revisions:     ${result.revisions}`);
  console.log(`  Used fallback: ${result.usedFallback}`);
  console.log(`  Duration:      ${result.durationMs}ms`);
  console.log(`  Session ID:    ${result.sessionId}`);
  console.log(`  Agent ID:      ${result.agentId}`);
  console.log(`\nOutput:\n`);
  console.log(result.output);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
