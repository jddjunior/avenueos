/**
 * Self-healing session manager for AvenueOS Managed Agents.
 * Handles stream reconnection, exponential backoff, circuit breakers,
 * and fallback routing when primary sessions fail.
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Circuit Breaker ──────────────────────────────────────────────────────────

type CircuitState = "closed" | "open" | "half-open";

interface CircuitBreaker {
  state: CircuitState;
  failures: number;
  lastFailure: number;
  successCount: number;
}

const CIRCUIT_THRESHOLD = 5;        // failures before opening
const CIRCUIT_RESET_MS  = 60_000;   // 1 min before trying half-open
const CIRCUIT_PROBE_OK  = 2;        // successes in half-open to close

const circuits = new Map<string, CircuitBreaker>();

function getCircuit(agentId: string): CircuitBreaker {
  if (!circuits.has(agentId)) {
    circuits.set(agentId, { state: "closed", failures: 0, lastFailure: 0, successCount: 0 });
  }
  return circuits.get(agentId)!;
}

function recordSuccess(agentId: string): void {
  const cb = getCircuit(agentId);
  if (cb.state === "half-open") {
    cb.successCount++;
    if (cb.successCount >= CIRCUIT_PROBE_OK) {
      cb.state = "closed";
      cb.failures = 0;
      cb.successCount = 0;
    }
  } else {
    cb.failures = 0;
  }
}

function recordFailure(agentId: string): void {
  const cb = getCircuit(agentId);
  cb.failures++;
  cb.lastFailure = Date.now();
  cb.successCount = 0;
  if (cb.failures >= CIRCUIT_THRESHOLD) {
    cb.state = "open";
  }
}

function isCircuitOpen(agentId: string): boolean {
  const cb = getCircuit(agentId);
  if (cb.state === "open") {
    if (Date.now() - cb.lastFailure >= CIRCUIT_RESET_MS) {
      cb.state = "half-open";
      return false;
    }
    return true;
  }
  return false;
}

// ─── Retry with Exponential Backoff ──────────────────────────────────────────

async function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

interface RetryOptions {
  maxAttempts?: number;
  baseDelayMs?: number;
  maxDelayMs?: number;
  jitter?: boolean;
}

async function withRetry<T>(
  fn: () => Promise<T>,
  agentId: string,
  opts: RetryOptions = {}
): Promise<T> {
  const { maxAttempts = 4, baseDelayMs = 2_000, maxDelayMs = 30_000, jitter = true } = opts;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    if (isCircuitOpen(agentId)) {
      throw new Error(`Circuit open for agent ${agentId} — skipping to fallback`);
    }
    try {
      const result = await fn();
      recordSuccess(agentId);
      return result;
    } catch (err) {
      recordFailure(agentId);
      if (attempt === maxAttempts) throw err;

      const base = Math.min(baseDelayMs * 2 ** (attempt - 1), maxDelayMs);
      const delay = jitter ? base * (0.5 + Math.random() * 0.5) : base;
      console.warn(`[SessionManager] attempt ${attempt}/${maxAttempts} failed for ${agentId}, retrying in ${Math.round(delay)}ms`, err);
      await sleep(delay);
    }
  }
  throw new Error("unreachable");
}

// ─── Session Lifecycle ────────────────────────────────────────────────────────

export interface SessionConfig {
  agentId: string;
  tenantId: string;
  taskId: string;
  messages: Anthropic.Beta.BetaMessageParam[];
  fallbackAgentId?: string;
}

export interface SessionResult {
  output: string;
  sessionId: string;
  agentId: string;
  attempts: number;
  usedFallback: boolean;
}

export async function runSession(config: SessionConfig): Promise<SessionResult> {
  const { agentId, tenantId, taskId, messages, fallbackAgentId } = config;
  let attempts = 0;
  let usedFallback = false;

  async function tryRun(targetAgentId: string): Promise<SessionResult> {
    return withRetry(
      async () => {
        attempts++;
        const session = await client.beta.agents.sessions.create(targetAgentId, {
          // @ts-ignore — beta SDK shape; initial_messages accepted per Managed Agents docs
          initial_messages: messages,
          metadata: { tenant_id: tenantId, task_id: taskId },
        });

        let outputText = "";
        const stream = session.stream();

        for await (const event of stream) {
          if (event.type === "message_delta") {
            for (const block of event.delta?.content ?? []) {
              if (block.type === "text") outputText += block.text;
            }
          }
          if (event.type === "session_error") {
            throw new Error(`Session error: ${event.error?.message ?? "unknown"}`);
          }
        }

        return {
          output: outputText,
          sessionId: session.id,
          agentId: targetAgentId,
          attempts,
          usedFallback,
        };
      },
      targetAgentId
    );
  }

  try {
    return await tryRun(agentId);
  } catch (primaryErr) {
    if (fallbackAgentId) {
      console.warn(`[SessionManager] Primary agent ${agentId} failed, routing to fallback ${fallbackAgentId}`);
      usedFallback = true;
      return await tryRun(fallbackAgentId);
    }
    throw primaryErr;
  }
}

// ─── Dead Letter Queue ────────────────────────────────────────────────────────

export interface DeadLetter {
  taskId: string;
  tenantId: string;
  agentId: string;
  error: string;
  timestamp: number;
  payload: unknown;
}

const deadLetterQueue: DeadLetter[] = [];

export function enqueueDeadLetter(entry: DeadLetter): void {
  deadLetterQueue.push(entry);
  console.error("[DLQ] Task permanently failed:", entry.taskId, entry.error);
}

export function drainDeadLetterQueue(): DeadLetter[] {
  const items = [...deadLetterQueue];
  deadLetterQueue.length = 0;
  return items;
}

// ─── Health Check ─────────────────────────────────────────────────────────────

export function getCircuitStatus(): Record<string, CircuitBreaker> {
  const result: Record<string, CircuitBreaker> = {};
  for (const [id, cb] of circuits.entries()) {
    result[id] = { ...cb };
  }
  return result;
}
