/**
 * Multi-tenant router and context cache for AvenueOS.
 *
 * Manages per-tenant isolation across hundreds of client projects:
 * - Tenant context cache with TTL (avoids re-fetching on every task)
 * - Per-tenant Builder.io space + GitHub branch mapping
 * - Rate limiting per tenant (prevent one noisy tenant from starving others)
 * - Task queue with priority lanes
 */

import Anthropic from "@anthropic-ai/sdk";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Vertical = "automotive" | "contractors" | "franchise" | "shopify" | "general";
export type CmsPlatform = "dc" | "builderio" | "wordpress" | "webflow";

export interface TenantConfig {
  id: string;
  name: string;
  vertical: Vertical;
  cmsPlatform: CmsPlatform;
  // Builder.io (used when cmsPlatform === "builderio" or alongside DC)
  builderIoSpaceId?: string;
  builderIoApiKey?: string;
  // WordPress (used when cmsPlatform === "wordpress")
  wordpressBaseUrl?: string;
  wordpressUsername?: string;
  wordpressAppPassword?: string;
  wordpressConsumerKey?: string;      // WooCommerce REST API
  wordpressConsumerSecret?: string;   // WooCommerce REST API
  // Webflow (used when cmsPlatform === "webflow")
  webflowSiteId?: string;
  webflowApiToken?: string;
  githubOwner: string;
  githubRepo: string;
  githubBranch: string;
  primaryDomain: string;
  accentColor: string;
  accentTint: string;
  priorityLane: "high" | "normal" | "low";
}

export interface TenantContext {
  config: TenantConfig;
  cachedAt: number;
  /** Prompt-cache-friendly system prefix for this tenant */
  systemPrefix: string;
}

export interface AgentTask {
  id: string;
  tenantId: string;
  channel: "seo" | "ads" | "cro" | "web" | "call" | "report" | "wordpress" | "webflow";
  instruction: string;
  priority: number;   // lower = higher priority
  createdAt: number;
  metadata?: Record<string, unknown>;
}

// ─── Tenant Cache ─────────────────────────────────────────────────────────────

const CACHE_TTL_MS = 10 * 60 * 1_000; // 10 minutes
const tenantCache = new Map<string, TenantContext>();

export function cacheTenant(config: TenantConfig): TenantContext {
  const systemPrefix = buildSystemPrefix(config);
  const ctx: TenantContext = { config, cachedAt: Date.now(), systemPrefix };
  tenantCache.set(config.id, ctx);
  return ctx;
}

export function getTenantContext(tenantId: string): TenantContext | null {
  const ctx = tenantCache.get(tenantId);
  if (!ctx) return null;
  if (Date.now() - ctx.cachedAt > CACHE_TTL_MS) {
    tenantCache.delete(tenantId);
    return null;
  }
  return ctx;
}

export function evictTenant(tenantId: string): void {
  tenantCache.delete(tenantId);
}

function buildSystemPrefix(cfg: TenantConfig): string {
  const verticalGuide: Record<Vertical, string> = {
    automotive: "Focus on vehicle inventory, test drive CTAs, trade-in offers, and local dealership trust signals.",
    contractors: "Focus on service area coverage, license/insurance trust badges, quote CTAs, and project portfolio.",
    franchise: "Maintain brand consistency with the parent franchisor. Localize for the franchisee's city/region.",
    shopify: "Optimize for e-commerce: product discovery, cart abandonment recovery, upsell, and ROAS.",
    general: "Apply universal digital marketing best practices.",
  };

  const platformLines: Record<CmsPlatform, string> = {
    dc: `Builder.io Space: ${cfg.builderIoSpaceId ?? "N/A"}.`,
    builderio: `Builder.io Space: ${cfg.builderIoSpaceId ?? "N/A"}.`,
    wordpress: [
      `WordPress Base URL: ${cfg.wordpressBaseUrl ?? "N/A"}.`,
      `WordPress Username: ${cfg.wordpressUsername ?? "N/A"}.`,
      cfg.wordpressConsumerKey ? `WooCommerce REST API: consumer key configured.` : "",
    ].filter(Boolean).join("\n"),
    webflow: `Webflow Site ID: ${cfg.webflowSiteId ?? "N/A"}.`,
  };

  return `You are operating for tenant: ${cfg.name} (ID: ${cfg.id}).
Vertical: ${cfg.vertical}. CMS Platform: ${cfg.cmsPlatform}. Domain: ${cfg.primaryDomain}.
${platformLines[cfg.cmsPlatform]}
GitHub: ${cfg.githubOwner}/${cfg.githubRepo} (branch: ${cfg.githubBranch}).
Accent colour: ${cfg.accentColor} (tint: ${cfg.accentTint}).
Vertical guidance: ${verticalGuide[cfg.vertical]}
All file edits must be committed to the tenant's GitHub branch before returning.
Never mix assets, API keys, or content between different tenants.`;
}

// ─── Per-Tenant Rate Limiter ──────────────────────────────────────────────────

interface RateLimitState {
  tokens: number;
  lastRefill: number;
}

const RATE_LIMITS: Record<TenantConfig["priorityLane"], { capacity: number; refillPerMin: number }> = {
  high:   { capacity: 20, refillPerMin: 20 },
  normal: { capacity: 10, refillPerMin: 10 },
  low:    { capacity: 4,  refillPerMin: 4  },
};

const rateLimitMap = new Map<string, RateLimitState>();

function getRateLimit(tenantId: string, lane: TenantConfig["priorityLane"]): RateLimitState {
  if (!rateLimitMap.has(tenantId)) {
    const { capacity } = RATE_LIMITS[lane];
    rateLimitMap.set(tenantId, { tokens: capacity, lastRefill: Date.now() });
  }
  return rateLimitMap.get(tenantId)!;
}

export function checkRateLimit(tenantId: string, lane: TenantConfig["priorityLane"]): boolean {
  const rl = getRateLimit(tenantId, lane);
  const { capacity, refillPerMin } = RATE_LIMITS[lane];
  const elapsed = (Date.now() - rl.lastRefill) / 60_000;
  rl.tokens = Math.min(capacity, rl.tokens + elapsed * refillPerMin);
  rl.lastRefill = Date.now();

  if (rl.tokens < 1) return false;
  rl.tokens--;
  return true;
}

// ─── Priority Task Queue ──────────────────────────────────────────────────────

const taskQueue: AgentTask[] = [];

export function enqueueTask(task: AgentTask): void {
  taskQueue.push(task);
  taskQueue.sort((a, b) => a.priority - b.priority);
}

export function dequeueTask(): AgentTask | undefined {
  return taskQueue.shift();
}

export function getQueueLength(): number {
  return taskQueue.length;
}

// ─── Channel-to-Agent Mapping ─────────────────────────────────────────────────

type Channel = AgentTask["channel"];
const CHANNEL_AGENT_ENV_KEYS: Record<Channel, string> = {
  seo:       "AVENUEOS_SEO_AGENT_ID",
  ads:       "AVENUEOS_ADS_AGENT_ID",
  cro:       "AVENUEOS_CRO_AGENT_ID",
  web:       "AVENUEOS_WEB_AGENT_ID",
  call:      "AVENUEOS_CALL_AGENT_ID",
  report:    "AVENUEOS_REPORT_AGENT_ID",
  wordpress: "AVENUEOS_WORDPRESS_AGENT_ID",
  webflow:   "AVENUEOS_WEBFLOW_AGENT_ID",
};

export function resolveAgentId(channel: Channel): string {
  const agentId = process.env[CHANNEL_AGENT_ENV_KEYS[channel]];
  if (!agentId) {
    throw new Error(
      `Agent ID for channel "${channel}" is not configured. ` +
      `Set the ${CHANNEL_AGENT_ENV_KEYS[channel]} environment variable.`
    );
  }
  return agentId;
}

export function getOrchestratorAgentId(): string {
  const id = process.env.AVENUEOS_ORCHESTRATOR_AGENT_ID;
  if (!id) throw new Error("AVENUEOS_ORCHESTRATOR_AGENT_ID is not set");
  return id;
}

export function getValidatorAgentId(): string {
  const id = process.env.AVENUEOS_VALIDATOR_AGENT_ID;
  if (!id) throw new Error("AVENUEOS_VALIDATOR_AGENT_ID is not set");
  return id;
}
