/**
 * AvenueOS Agent Setup Script
 *
 * Run ONCE during deployment to create all Managed Agents and print their IDs.
 * Store the printed IDs as environment variables in your deployment environment.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... npx ts-node agents/setup.ts
 *   # or with Bun:
 *   ANTHROPIC_API_KEY=sk-... bun agents/setup.ts
 */

import { registerAgents } from "./orchestrator/index.js";

async function main() {
  console.log("AvenueOS Agent Setup\n" + "=".repeat(40));
  console.log("Creating Managed Agents...\n");

  try {
    const ids = await registerAgents();

    console.log("\n" + "=".repeat(40));
    console.log("SUCCESS — Add these to your .env / deployment secrets:\n");

    for (const [key, id] of Object.entries(ids)) {
      console.log(`${key}=${id}`);
    }

    console.log("\nIMPORTANT: Agents are persistent objects.");
    console.log("Do NOT re-run this script unless you need to create new agents.");
    console.log("Re-running with existing env vars will reuse existing agents.\n");
  } catch (err) {
    console.error("Setup failed:", err);
    process.exit(1);
  }
}

main();
