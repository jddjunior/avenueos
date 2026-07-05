# AvenueOS Design System

The dark, dense, electric command center for **Branch Avenue's** product portfolio. AvenueOS is the operator's cockpit — one interface to **launch, organize, understand, and operate** every product, tenant, and site across five verticals. It is the deliberate visual inverse of the consumer products it manages: where those are light, calm, and approachable, AvenueOS is dark, information-dense, and built for operators who want to see everything at once and act fast.

**Reference feel:** Linear × Vercel Dashboard × Bloomberg Terminal restraint.

## The five products AvenueOS operates

- **AtHome** — Agentic online HVAC sales ("Carvana of HVAC")
- **GRAFT** — Pay-per-lead/call performance marketing agency
- **Dealership Platform** — Website platform for car dealerships
- **Ship/Tow Marketplace** — Car shipping & tow service marketplace
- **Agency Site Factory** — SiteSwan-like SEO/CRO site builder

## AvenueOS's four jobs

1. **Launch** — Spin up tenants, products, sites from one place.
2. **Organize** — Every product, tenant, and site in one hierarchy.
3. **Understand** — SEO/CRO intelligence at macro and micro levels.
4. **Operate** — An agentic layer that monitors, flags anomalies, runs cross-tenant experiments, and applies winning patterns with human approval.

## Sources

This system was built from a written **Design System Blueprint** (provided June 24, 2026) — there was no attached codebase or Figma file. All tokens, type, layout, and component specs derive from that document. If a codebase or Figma becomes available, reconcile the UI-kit recreations against the real source.

---

## CONTENT FUNDAMENTALS

**Voice: direct, technical, efficient. A tool for operators, not consumers.**

- **Casing:** Sentence case everywhere — except uppercase tracked eyebrows (section labels, KPI labels) at 11px / 600 / 0.08em.
- **Terseness:** "Revenue" not "Total revenue generated." "24 tenants" not "You currently have 24 tenants."
- **Active verbs for actions:** Deploy, Launch, Pause, Archive, Approve. Never "Submit" or "Confirm."
- **Status is factual:** "3 sites degraded" — not "Warning: some sites may need attention."
- **No first/second person fluff.** No "Welcome back," no "Great job." State facts, offer actions.
- **No emoji. No exclamation marks. No conversational filler.** The data speaks.
- **Timestamps:** relative when recent ("2m ago," "yesterday"), absolute when historical ("Jan 14, 2026").
- **Numbers:** comma-separated thousands, 1 decimal for percentages, currency with 2 decimals. All set in mono with tabular figures.

Example copy: *"Dealership CVR down 18% across 6 tenants in 24h."* · *"Hero variant B winning +9.2% on graft-roofing-fl — apply to 4 tenants?"* · *"247 tenants · synced 2m ago."*

---

## VISUAL FOUNDATIONS

**Dark canvas, electric signals. Density without chaos. One electric accent per view.**

### Color
- **Dark only — no light mode.** `--canvas` (#0A0E14) is the body. Information lives on elevated surfaces.
- **Three elevation levels:** canvas (deepest) → `--surface` (#121820, cards) → `--surface-raised` (#1A2230, modals, dropdowns, hover). Elevation is built from **background + opacity, not shadow.**
- **Electric green (`#39FF14`)** is the single signal color. It marks the **one focal action or key metric per view** — a CTA, a live status, a spiking metric. If everything glows, nothing glows. Everything else is grayscale or muted.
- **Status is color, functionally:** green = healthy/live, amber = degraded, red = down, blue = info. Never decorative.
- **Brand blue (`#0A6CF0`)** is reserved for AtHome's product identity — it never appears as a UI accent.
- **No gradients on chrome.** Gradients appear only in data-viz heatmaps and the faint area fill under sparklines.

### Type
- **Inter** for everything — display (700–800, -0.025em), headings (600, -0.02em), body (400), labels (500), eyebrows (600, 0.08em uppercase).
- **JetBrains Mono** for ALL numerical/technical data — revenue, rates, counts, event IDs, timestamps, API keys — with **tabular figures** so columns align.
- Both from Google Fonts (self-host `.woff2` for production).

### Spacing & layout
- **4px base scale** (`--space-1`…`--space-16`). Density is a feature; whitespace is earned, not defaulted to.
- **Desktop-first:** fixed **240px sidebar** (collapsible to 64px) + main content area. Sticky top bar (56px) with breadcrumbs, cmd+K search, user.
- **CSS grid/flex with `gap`** for all layout — no floats, no margin hacks, no inline flow for UI groups.

### Radii, borders, shadow
- **Crisp radii** — cards 8px, inputs/buttons 6px, small controls 4px, pills fully round. This is a tool, not a consumer product (AtHome uses 12–16px; AvenueOS is sharper).
- **Hairline borders:** `--border-subtle` (#1E2A3A) for most edges, `--border-default` (#2A3648) when stronger separation is needed.
- **Shadows are minimal** — `--shadow-sm/md/lg` exist for modals and the command palette only. Opacity layers do the elevation work.
- **Cards:** `--surface` background, 1px `--border-subtle`, 8px radius, no shadow. Interactive cards lift to `--surface-raised` on hover.

### Motion
- **Purposeful, never decorative.** 100–200ms, `ease-out` (`cubic-bezier(0.16,1,0.3,1)`). Panels slide, data fades, toggles are instant.
- **No bounce, no spring, no infinite decorative loops** (the lone exception: the subtle pulse on a `live` status dot).
- **Hover:** cards/rows → `--surface-raised`; primary buttons → `--accent-hover`.
- **Press:** buttons `scale(0.97)` for ~100ms.
- **Focus:** electric-green ring (border + `--accent-muted` glow) — visible on keyboard nav.
- **Disabled:** 40% opacity, no pointer events.
- **Respect `prefers-reduced-motion: reduce`** — disable transitions and animations.

### Transparency & blur
- Sparing. The sticky top bar uses a translucent canvas + `blur(12px)`. The command-palette / modal backdrop uses `rgba(5,8,12,0.6)` + `blur(4px)`. Chrome is otherwise opaque.

### Data visualization
- **Sparklines:** inline SVG mini-charts in cells — green up, red down, gray flat, with a soft area fill.
- **KPI cards:** large mono number (28–32px), uppercase eyebrow label, optional trend arrow + percentage.
- Axes/grid use `--text-muted`; series default to green / blue / gray. Tooltips on `--surface-raised`.

---

## ICONOGRAPHY

- **Lucide** is the icon system — **1.5px stroke, rounded caps**, sized 14–18px in the UI. Loaded from CDN (`unpkg.com/lucide@latest`); the `Icon.jsx` wrapper in the AvenueOS kit renders `<i data-lucide="…">` and calls `lucide.createIcons()`. *(CDN-linked per the blueprint's spec — not a substitution.)*
- Icons serve **navigation and status only** — never decoration. Nav items, status indicators, action affordances.
- **No emoji** anywhere — labels, status, toasts, empty states. **No unicode glyphs as icons** (the only typographic marks used as indicators are the ▲ ▼ trend arrows and ↑ ↓ sort carets, set in mono).
- Empty states get a short text prompt + an action button — never an illustration.

> If you self-host instead of CDN, pull the Lucide subset actually used (command, home, target, car, truck, layout-template, search, trending-up, flask-conical, layers, activity, cpu, credit-card, bell, chevron-right, plus, rocket, sparkles, alert-triangle, settings-2, globe, chevrons-up-down) into `assets/`.

---

## INDEX — what's in this system

**Global entry:** `styles.css` — links fonts + all tokens. Consumers import this one file.

**Tokens** (`tokens/`)
- `fonts.css` — Inter + JetBrains Mono (@import Google Fonts)
- `colors.css` — canvas/surfaces, borders, text, accent, status, brand
- `typography.css` — families, sizes, weights, tracking, leading
- `spacing.css` — 4px scale, radii, shadows, layout, motion, z-index

**Components** (React primitives — `window.AvenueOSDesignSystem_9da6f3`)
- `core/` — **Button**, **StatusBadge**, **Card**, **Input**, **KPICard**, **Sparkline**
- `data/` — **DataTable**, **ProgressBar**
- `navigation/` — **Tabs**

**UI kit** (`ui_kits/avenueos/`) — interactive operator cockpit, fully interlinked (one shared dataset; every vertical, tenant, page, and experiment clicks through to its relatives)
- `index.html` — click-through shell (sidebar nav, cmd+K palette, holistic cross-screen routing)
- `KitData.js` — single source of truth (products, tenants, experiments, pages, funnel, templates, integrations, events, AI usage, billing)
- `Sidebar.jsx`, `TopBar.jsx`, `CommandPalette.jsx`, `Icon.jsx`
- `DashboardScreen.jsx` — KPI row, product health, agentic alerts (deep-link), activity feed
- `ProductDetailScreen.jsx` — tenant table with filters, sparklines, capacity bars
- `TenantDetailScreen.jsx` — micro metrics, conversion funnel, SEO performance, experiments, Payload CMS access, per-tenant integrations, events, deploy history
- `SeoOverviewScreen.jsx` — macro organic: visibility trajectory, ranking distribution, traffic by vertical, AI-answer share, gaining/losing pages
- `CroOverviewScreen.jsx` — macro conversion: portfolio funnel, RPV, page-template performance, the cross-tenant experiment engine
- `ExperimentsScreen.jsx` — portfolio A/B tests, significance, approve/reject/expand, detail drawer
- `IntegrationsScreen.jsx` — agency-wide connection catalog (Search Atlas, Vercel, Humblytics, Stripe Connect, Anthropic, EventBridge, …) grouped by category
- `TenantsScreen.jsx` — all tenants across products + per-tenant integration matrix
- `EventsScreen.jsx` — EventBridge stream, filterable log
- `AiGatewayScreen.jsx` — token usage, model tiering, cost by tenant
- `BillingScreen.jsx` — Stripe Connect MRR, payouts, subscriptions

**Foundation cards** (`guidelines/`) — specimen cards for the Design System tab (colors, type, spacing, radii, elevation).

**SKILL.md** — Agent-Skill manifest for downloading into Claude Code.
