# AvenueOS Agent Orchestration System

AI-powered marketing agent system for AvenueOS — built on Anthropic Managed Agents with orchestration oversight, triple-check validation, self-healing sessions, and multi-tenant isolation.

## Architecture

```
Orchestrator (coordinator)
│
├── SEO Agent        — on-page SEO, schema, keyword optimization
├── Ads Agent        — Google/Meta ad copy, landing page alignment
├── CRO Agent        — A/B tests, CTAs, form optimization, trust signals
├── Web Agent        — DC component building, Builder.io management
├── Call Agent       — IVR design, call scripts, DNI, call analytics
├── Report Agent     — KPI aggregation, executive reports
│
└── Validator Agent  — independent quality grader (never produces content)
```

### Key Properties

**Orchestration Oversight** — Every task is routed through the master orchestrator. Specialist agents operate within defined skill scopes and report results back through a unified pipeline.

**Triple-Check Validation** — Before any output is committed:
1. Specialist agent produces output
2. Validator Agent grades it (correctness, DC syntax, brand compliance, conversion impact)
3. Second independent grader cross-validates with a different prompt seed
4. If score < 75/100, the agent is asked to revise — up to 3 revision cycles
5. If still below threshold, escalated for human review (not silently dropped)

**Self-Healing Sessions** — The session manager implements:
- Exponential backoff retry (2s → 4s → 8s → 16s, up to 4 attempts)
- Circuit breakers per agent (opens after 5 failures, probes after 60s)
- Automatic fallback to orchestrator agent when specialist circuit is open
- Dead letter queue for permanently failed tasks

**Multi-Tenant Isolation** — The tenant router provides:
- Per-tenant context cache (10-minute TTL, prompt-cache-friendly)
- Token bucket rate limiting per tenant (high/normal/low priority lanes)
- Priority task queue (high-priority tenants served first)
- Tenant-scoped GitHub branch isolation (`tenant/<id>/agent/<task-id>`)

## Skills

Each agent is equipped with SKILL.md files that teach it domain knowledge:

| Skill | Agents | Description |
|---|---|---|
| `dc-system` | All | AvenueOS DC component syntax, CSS tokens, layout utilities |
| `builderio` | Web, SEO, Ads, CRO | Builder.io Content API CRUD, publishing workflow |
| `github` | All | Branch convention, commit format, audit logging |
| `seo` | SEO, Validator | Title formulas, schema markup, heading rules, keywords |
| `ads` | Ads | RSA copy, Meta ads, bid strategies, landing page alignment |
| `cro` | CRO, Validator | CTA frameworks, A/B test proposals, trust signal placement |
| `web` | Web | Section templates, performance rules, responsive patterns |
| `call` | Call | IVR scripts, call analytics, DNI, DC call sections |
| `report` | Report | KPI definitions, JSON report format, narrative guidelines |

## GitHub Version Control

Every agent change is tracked in GitHub:

- **Branch per task**: `tenant/<tenant-id>/agent/<task-id>`
- **PR to staging**: `tenant/<tenant-id>/staging`
- **Merge to production**: `tenant/<tenant-id>/main` (human approval required)
- **Audit log**: `agents/logs/<tenant-id>.jsonl` — JSONL record of every task

## Builder.io Integration

The `builderio` skill teaches agents to:
1. Query content entries by model, URL path, or custom filters
2. Save changes as drafts first
3. Validate draft content
4. Publish only after triple-check approval
5. Update SEO metadata alongside content changes

## Setup

### 1. Install dependencies
```bash
cd avenueos
bun install  # or npm install
```

### 2. Configure environment
```bash
cp agents/config/env.example .env
# Edit .env with your Anthropic API key and Builder.io credentials
```

### 3. Create agents (once per deployment)
```bash
ANTHROPIC_API_KEY=sk-ant-... bun agents/setup.ts
```
Copy the printed agent IDs into your `.env` file or deployment secrets.

### 4. Run a task
```bash
bun agents/run-task.ts \
  --tenant=demo_automotive \
  --channel=seo \
  --instruction="Optimize the meta title and description for the homepage to target 'Ford dealer in Phoenix AZ'."
```

## Multi-Tenant Scale

For processing hundreds of client projects, use the batch worker:

```typescript
import { processBatch, enqueueTask } from "./agents/orchestrator/index.js";

// Enqueue tasks (from your job queue, webhook, or cron)
enqueueTask({
  id: "task_001",
  tenantId: "client_123",
  channel: "seo",
  instruction: "...",
  priority: 1,
  createdAt: Date.now(),
});

// Process with concurrency = 10 parallel sessions
await processBatch(10, async (tenantId) => {
  return fetchTenantFromDatabase(tenantId);
});
```

## File Structure

```
agents/
  config/
    agents.yaml       — Agent definitions and skill mappings
    env.example       — Environment variable template
  logs/
    <tenant-id>.jsonl — Per-tenant audit logs (gitignored in production)
  orchestrator/
    index.ts          — Master orchestrator + agent registration + batch worker
    session-manager.ts — Self-healing sessions + circuit breakers
    triple-check.ts   — Triple-check validation pipeline
    multi-tenant.ts   — Tenant cache, rate limiting, priority queue
  skills/
    dc-system/SKILL.md   — DC component system
    builderio/SKILL.md   — Builder.io Content API
    github/SKILL.md      — GitHub version control
    seo/SKILL.md         — SEO optimization
    ads/SKILL.md         — Paid advertising
    cro/SKILL.md         — Conversion optimization
    web/SKILL.md         — Web development patterns
    call/SKILL.md        — Call tracking & scripts
    report/SKILL.md      — Performance reporting
  package.json
  setup.ts              — One-time agent registration
  run-task.ts           — CLI task runner
  README.md
```
