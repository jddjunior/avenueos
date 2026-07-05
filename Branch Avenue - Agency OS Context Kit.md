# Branch Avenue — Agency OS Context Kit

**Purpose of this document.** This is the portable context brief for Branch Avenue — paste it into any Claude chat or Cowork session that needs to understand what the agency actually is, how it operates, what it's built on, and how it makes money. It describes the *real* business, not a hypothetical. Everything downstream — marketing pages, the design system, sales collateral — should trace back to what's written here.

**Relationship to the design system files.** The AvenueOS design system guide (bound in this project) illustrates its console with five example SaaS products (AtHome, GRAFT, a dealership platform, a shipping marketplace, an agency site factory) — that was scaffolding to visualize a multi-tenant operator console, not Branch Avenue's real client roster. **This document supersedes that framing.** The real AvenueOS is the software Branch Avenue uses to run its own agency: one AI-orchestrated system overseeing SOPs, delivery work, CRO, analytics, and revenue across every real client. The visual language (Initial OS console, "agents propose, humans dispose," violet = AI, the audit-trail pattern) still applies — it just now points at real tenants and real tools instead of illustrative ones.

---

## 1. What Branch Avenue is

Branch Avenue is a full-stack digital growth agency: we build the website, then make it rank, convert, and scale with paid media — and an AI-orchestrated operating layer (**AvenueOS**) runs underneath the whole thing, watched by human strategists who approve every consequential move.

The thesis: most agencies are a bundle of disconnected vendors (a web shop, an SEO freelancer, an ads guy, a CRO consultant) who don't talk to each other and bill you four different ways. Branch Avenue is one team, one system of record, and — increasingly — one AI layer that watches all four disciplines at once and proposes the next move before the client has to ask.

**The four service lines, in delivery order for a new client:**
1. **Website** — design + build the asset everything else runs on.
2. **SEO** — make it findable.
3. **CRO** — make it convert.
4. **Ads** — pour paid budget into what's already proven to work.

Underneath all four: **AvenueOS**, the AI stack + human strategists that monitor, propose, and (with approval) execute changes across every client, every day.

---

## 2. AvenueOS — the orchestration layer

AvenueOS is not a hypothetical console for imaginary products. It is the **real internal platform** Branch Avenue's team and AI agents use to run every client account. It has four jobs:

1. **Standard Operating Procedure (SOP) enforcement** — every recurring task (technical SEO audit, monthly CRO experiment cycle, ad budget review, content publishing checklist) is a defined workflow in AvenueOS, not tribal knowledge in someone's head. New team members and new AI agents both onboard against the same SOP library.
2. **Development orchestration** — tracks every open dev task (GitHub PRs, Sanity content models, Webflow/WordPress site changes) per tenant, with status visible to the account strategist.
3. **CRO & analytics** — the experiment engine (see §5.4) and the analytics rollup (traffic, funnel, revenue attribution) per tenant and in aggregate across the portfolio.
4. **Lead/call/appointment/revenue ledger** — the billing nervous system. Every billable event (a phone call, a form-fill lead, a booked appointment, a dollar of client revenue under rev-share) is captured once, attributed to a channel, and flows straight into invoicing. This is what makes performance-based pricing (§6) operationally possible instead of a monthly manual reconciliation nightmare.

**The human-in-the-loop pattern (unchanged from the design system):** agents continuously monitor all four service lines and the ledger. They *propose* — a CRO test to launch, a budget reallocation, a technical SEO fix, a low-value lead to flag for billing dispute. A strategist reviews and approves, rejects, or edits before anything ships or any dollar moves. Every action leaves an audit-trail entry: who/what proposed it, who approved it, when it deployed, and whether it's reversible.

---

## 3. Customer types / verticals served

Branch Avenue serves six buyer types. They share the four service lines but differ in urgency, vocabulary, and what "winning" looks like — see `voice.md` in the design system for the full lexicon per type.

| Vertical | What they need most | Primary billing fit |
|---|---|---|
| **Startups** | Fast, credible web presence + initial SEO foundation before they have brand or budget for heavy ads | Flat build fee + light retainer |
| **Dealerships** | Multi-rooftop sites, inventory feeds, high call/lead volume, strict OEM compliance | Retainer + per-lead / per-call |
| **Contractor professionals with employees** (HVAC, plumbing, electrical, etc.) | Booked jobs, not just leads; crews need a full schedule, not a lead spreadsheet | Per-appointment / per-booked-job, sometimes rev-share |
| **Franchises / multi-location** | One brand standard, corporate visibility into every location, controlled local variation | Retainer (per-location) + rollout-wave pricing |
| **Shopify stores** | Conversion and paid media on an existing storefront; less "build the site," more "grow the site" | Rev-share on incremental revenue + CRO/ads retainer |
| **Family-owned businesses** | Trust, simplicity, a team that explains things plainly; often the most price-sensitive, least tech-fluent | Flat retainer, bundled, minimal self-serve tooling |

---

## 4. Tool stack, by service line

### 4.1 Website development
| Tool | When we use it |
|---|---|
| **Webflow** | Default choice for marketing-first sites where the client's own team (or ours) needs fast, visual, no-dev-required edits. Best fit: startups, franchises rolling out a repeatable template, family-owned businesses. |
| **Sanity** | Headless CMS paired with a custom or Webflow front end when content volume/structure is complex (large service-area pages, multi-location content, blog at scale) or when a decoupled front end (Next.js) is warranted for performance/SEO control. Best fit: dealership groups, franchises, content-heavy SEO plays. |
| **WordPress** | Legacy sites we inherit, or clients who insist on owning a WP install with a large existing plugin/content investment. We migrate off it when it becomes a growth bottleneck. Best fit: family-owned businesses with an existing WP site, low-complexity Shopify-adjacent content pages. |
| **GitHub** | Source control and CI/CD for every custom-coded build (Next.js/React front ends, backend services, internal tools). All custom dev — regardless of CMS — lives in GitHub with PR review before deploy. |
| **Vercel** | Deployment target for every GitHub-sourced build (custom Next.js/React front ends, Sanity-paired front ends, AvenueOS itself, internal tools). PR merges trigger preview deploys, then a production promote — this is the "deploy" step in the data-flow ledger (§5) and in the AI-agent audit trail (a merged PR isn't live until it's promoted on Vercel). Webflow and WordPress sites are hosted on their own platforms, not Vercel. |

**Decision tree:** Need a fully custom app/backend or a decoupled high-performance front end → GitHub + (Sanity if content-heavy). Need max editing speed for a marketing site with a small team → Webflow. Inheriting/must keep an existing install → WordPress, migrate opportunistically.

### 4.2 SEO
**SearchAtlas** is the SEO system of record: technical site audits, keyword/topical research, content briefs, rank tracking, backlink monitoring, competitor gap analysis. The SEO agent in AvenueOS reads SearchAtlas data continuously and proposes: pages to build, on-page fixes, internal linking changes, content refreshes. A strategist approves before any content ships or technical change deploys (via GitHub PR or CMS publish).

### 4.3 Google Ads management
**SearchAtlas** handles the PPC side where its tooling covers it (keyword-to-ad-group mapping, quality score diagnostics, competitor ad intelligence) alongside **manual management** directly in Google Ads / Google Ads Editor for anything SearchAtlas doesn't fully automate — bid strategy tuning, negative keyword curation, new campaign structure, Performance Max asset groups. The Ads agent monitors spend/ROAS across every tenant and proposes budget reallocation; a strategist approves the shift before it executes in-platform.

### 4.4 CRO
| Tool | Role |
|---|---|
| **Humblytics** | Privacy-first, cookie-light analytics and behavior tracking — funnel drop-off, session recordings/heatmap-style behavior data, the base telemetry the CRO agent reads. |
| **Statsig** | Experimentation engine — A/B/multivariate tests, statistical significance calculation, feature-flag-style rollout of winning variants. This is where "Variant B wins, ship to 100%" actually gets executed and measured. |
| **Custom software** | In-house tooling for anything Humblytics/Statsig don't cover out of the box — e.g. dynamic offer/pricing tests, lead-scoring logic, appointment-booking-flow experiments specific to a vertical (like the contractor booking flow). |

The CRO agent proposes a test hypothesis from Humblytics behavior data, a strategist approves the experiment design, Statsig runs it to significance, and a winning variant is proposed for full rollout — again, approved before it ships.

### 4.5 Frontend & backend development
Custom dev (beyond what Webflow/Sanity/WordPress cover out of the box) is built and version-controlled in GitHub — integrations, custom booking/scheduling flows, inventory feeds, internal dashboards for clients, and AvenueOS itself. This is where "frontend and backend development for all customer types" lives: any bespoke functionality a template can't provide.

### 4.6 AI stack integration
The agent layer (SEO agent, CRO agent, Ads agent, and a general ops/anomaly agent) reads from every tool above, proposes changes, and routes them through the AvenueOS approval queue. This is the layer that lets one strategist oversee many client accounts at once — agents do the continuous watching, humans make the calls that matter.

---

## 5. Data flow — how one dollar gets attributed and billed

```
Visitor lands on client site (Webflow / Sanity+custom / WordPress)
        │
        ▼
Tracking fires (Humblytics + Statsig + SearchAtlas GA/GSC tie-in)
        │
        ▼
Visitor converts: phone CALL · form LEAD · booked APPOINTMENT
        │
        ▼
Event captured once, tagged with source channel (organic / paid / direct)
        │
        ▼
AvenueOS ledger ingests the event → attributes to SEO or Ads spend that drove it
        │
        ├──▶ SEO/CRO/Ads agents analyze pattern → propose next action
        │        │
        │        ▼
        │    Strategist approves in Initial OS approval queue
        │        │
        │        ▼
        │    Action executes: GitHub PR merged + Vercel deploy promoted /
        │    Sanity content published / Statsig variant shipped /
        │    Google Ads budget reallocated
        │        │
        │        └──▶ Result flows back into Humblytics/SearchAtlas → loop continues
        │
        ▼
Billing engine tallies the event against the client's pricing model
(flat retainer draw-down, or a chargeable call/lead/appointment/rev-share unit)
        │
        ▼
Monthly invoice + client-facing executive report generated
```

Every arrow above is a real system connection, not a manual spreadsheet step — that's what makes performance billing (next section) sustainable at scale.

---

## 6. Pricing & packaging model

Branch Avenue uses a **hybrid model**: a foundation fee for the asset itself, a retainer for ongoing management, and a performance layer that charges for outcomes — mixed per client based on vertical fit (see §3 table).

### 6.1 Foundation (one-time or amortized)
Website build/migration fee — scoped by platform (Webflow vs. Sanity+custom vs. WordPress migration) and by content/page volume. Franchises pay a template-build fee once, then a smaller per-location rollout fee.

### 6.2 Retainer (monthly, flat)
Covers SEO management, CRO program management, ad account stewardship, hosting/maintenance, and strategist time. Tiered by scope (single-location vs. multi-location vs. franchise-wide).

### 6.3 Performance layer (variable, usage-based)
Charged **in addition to or instead of** retainer depending on the deal:
- **Per call** — a tracked, qualifying inbound phone call.
- **Per lead** — a tracked, qualifying form submission.
- **Per appointment** — a lead that converts to a booked/scheduled appointment (the contractor-vertical default — they care about the schedule, not raw leads).
- **Rev share** — a percentage of attributed revenue, used most with Shopify stores and dealerships where transaction value is directly measurable.

### 6.4 Typical blends by vertical
- **Startups:** Foundation + light retainer. No performance layer yet — too early to measure reliably.
- **Dealerships:** Retainer (per rooftop) + per-lead and/or per-call.
- **Contractors:** Retainer + per-appointment (sometimes rev-share once volume is proven).
- **Franchises:** Foundation (template) + per-location retainer, performance layer optional per franchisee.
- **Shopify stores:** Light/no foundation (site exists) + rev-share as the primary line, CRO/ads retainer underneath.
- **Family-owned businesses:** Bundled flat retainer — simplicity over granular billing; they don't want to read a usage invoice.

The AvenueOS ledger (§5) is what makes the performance layer trustworthy — clients can see the underlying call/lead/appointment/revenue events, not just a bill.

---

## 7. Team & roles

| Role | Owns |
|---|---|
| **Account Strategist** | The client relationship; reviews and approves/rejects everything the agent layer proposes for their accounts; signs the monthly executive report. |
| **Web Developer / Platform Engineer** | Custom builds and integrations in GitHub; maintains AvenueOS itself. |
| **Webflow / CMS Specialist** | Webflow and Sanity builds, content modeling, day-to-day site edits. |
| **SEO Specialist** | Runs SearchAtlas workflows, content briefs, technical audits; trains/tunes the SEO agent's proposals. |
| **Paid Media Manager** | Owns Google Ads accounts, SearchAtlas PPC tooling, and manual campaign work; reviews Ads-agent proposals before they reach the strategist. |
| **CRO Analyst** | Designs experiments in Humblytics/Statsig, interprets significance, proposes rollouts. |
| **AI Ops Engineer** | Maintains the agent layer itself — prompts, guardrails, proposal quality, the approval-queue pipeline. |
| **Onboarding / Project Manager** | Runs the sales-to-live handoff (§8) for every new client. |
| **Sales / BDR** | Originates and qualifies new business, matches prospects to the right vertical pricing blend. |

---

## 8. Sales & onboarding process

1. **Lead capture** — prospect fills out the Branch Avenue site or is referred; tagged by likely vertical.
2. **Discovery / build call** — strategist scopes current state (existing site? platform? current SEO/ads spend?) and which of the four service lines they need first.
3. **Proposal** — vertical-matched pricing blend (§6.4) proposed: foundation + retainer + performance layer as applicable.
4. **Contract & technical audit** — legal signed; a technical audit of the existing site/stack (if any) determines migration scope.
5. **Onboarding sprint** — connect the real systems: GitHub repo or Webflow/WordPress access, Sanity content model (if used), SearchAtlas project created, Humblytics/Statsig installed, Google Ads account linked, call-tracking numbers provisioned.
6. **AvenueOS tenant provisioned** — the client becomes a tenant in AvenueOS; SOPs, dashboards, and the approval queue activate for their account.
7. **30/60/90-day plan** — strategist sets the first quarter's milestones (site live → SEO foundation → first CRO tests → ads scaling) — matches the four-service delivery order in §1.
8. **Ongoing operate phase** — steady-state: agents monitor daily, strategist reviews weekly, client gets the executive report monthly (see the "executive tier" report format in the design system's enterprise kit).

---

## 9. Open items / things to confirm as the business evolves

- Exact per-call / per-lead / per-appointment rate cards likely vary by vertical and market — this doc describes the *mechanism*, not the price list itself.
- Call-tracking and lead-qualification rules (what counts as a "qualifying" call/lead) need a written standard so billing disputes are rare.
- As AvenueOS matures, some of the manual Google Ads work may shift further into SearchAtlas automation or a custom bidding layer — revisit the "manual for now" note in §4.3 periodically.
