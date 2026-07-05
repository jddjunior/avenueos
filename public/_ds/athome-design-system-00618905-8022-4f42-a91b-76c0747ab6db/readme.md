# AtHome (@Home) — Design System

> The agentic, online HVAC sales tool. The "Carvana of HVAC."

AtHome replaces the expensive, adversarial in-home HVAC sales visit with a calm, guided online
journey. A homeowner answers a few friendly questions; AtHome's AI sizes the right system for
their house, space, and budget; and they get an honest, all-in quote with financing — no five
trucks in the driveway, no pressure. For HVAC businesses it's a multi-tenant SaaS (white-labeled
to their brand) plus an agency-run **marketplace** of verified, filterable leads and jobs.
Stripe takes a set percentage at each lead/sale. HVAC is the first vertical; Roofing, Solar and
other high-dollar home services follow.

**Products represented in this system**
1. **Consumer Journey** — the guided online quote flow (white-labeled per tenant).
2. **Business Portal** — the HVAC owner's back office: pipeline, revenue, scheduling, payments,
   and first-principles integrations (Jobber, Housecall Pro, Stripe, PayPal, financing, permits).
3. **Marketplace** — the agency brand where businesses buy exclusive leads/jobs, filterable by
   ZIP, job type, customer type, and intent.

**Sources.** This system was authored from the product brief only — no codebase, Figma, or
existing brand assets were attached. All visual decisions (the @Home wordmark, the light blue
palette, type pairing) are original to this system and open to revision.

**Direction.** Light, cool, and confident — **Apple's restraint × Zillow's friendly cards × the
trust of a serious A/C brand.** White surfaces, cool gray for structure, near-black for words,
and exactly one decisive blue saved for the next action.

---

## Content fundamentals

The voice is **a knowledgeable friend, not a salesperson.** Plain, warm, confident. We cut
through an industry that feels unethical and confusing, so clarity and honesty are the brand.

- **Friend-speak, never marketing-speak or technobabble.** Say "The right system for your home,"
  not "Maximize your home's climate efficiency." Specs (SEER2, tonnage) appear only as quiet
  supporting detail in mono type — never as the headline.
- **Person:** "you" and "we." We talk _with_ the customer ("We matched this to your home"),
  never _at_ them.
- **Casing:** Sentence case everywhere — headlines, buttons, labels. The only uppercase is the
  small tracked eyebrow/overline (`Step 2 of 4 · System`).
- **No emoji. No fake urgency, no exclamation spam, no countdown pressure.** Honesty is the
  pitch. One light human aside is fine ("no five trucks in your driveway").
- **Numbers are reassuring, not scary.** Prices are all-in and labeled "all-in price" /
  "locked for 30 days." Included items literally say "Included," not "$0."
- **Examples**
  - Headline: *"The right system for your home."*
  - Sub: *"We matched this to your 1,850 sq ft home in Austin — quiet, efficient, and not a
    dollar oversized."*
  - Button: *"Get my quote"*, *"Book my install"*
  - Owner-side stays plain and operational: *"Connect the tools you already run on. No double entry."*

---

## Visual foundations

**Principle — one confident blue.** White and Slate gray carry all the structure; near-black
carries the words; and a single **Blue** (`#0A6CF0`) is reserved for the thing we want you to do
next (primary action, selected state, the key number, links). A quiet **Sky** cyan is available
for occasional "cooling" cues. Restraint is the brand — it's what makes it feel premium and calm.

- **Color.** Blue `#0A6CF0` is brand/primary. Slate is a *cool* gray neutral ramp; the page
  background is `--slate-50` (`#F7F9FC`) — clean and cool, never warm cream. Secondary actions
  use a deeper navy-blue (`--accent` = `--blue-700`). Semantic status uses distinct
  green/amber/red, with blue doubling as "info." Always reference semantic aliases
  (`--brand`, `--accent`, `--text-strong`, `--surface-card`) over raw ramps.
- **Type.** Display + UI: **Manrope** (clean, precise, modern — SF-adjacent without being Inter),
  600–800 for headings with tight negative tracking, 400–500 for body at 1.5 line-height. Mono:
  **Spline Sans Mono** for permit IDs, tonnage, SEER values, and price figures. *(See font
  substitution note below.)*
- **Backgrounds.** Predominantly white cards on a cool `--slate-50` page. The consumer journey
  adds barely-there radial washes of `--blue-50` / `--sky-50` in opposite corners — a hint of
  cool, never a loud gradient. No textures. Use real photography or image placeholders when
  imagery is needed; avoid heavy gradients on UI chrome.
- **Cards.** White (`--surface-card`), `1px` Slate border (`--border-subtle`), **moderate radius**
  (`--radius-lg` = 16px), very subtle cool shadow (`--shadow-xs`/`sm`, built on slate-900, never
  pure black). Interactive cards lift `-3px` and deepen shadow slightly on hover.
- **Corner radii are crisp, not pillowy** (Apple/Zillow): fields 12px, cards 16px, small controls
  6–8px, pills fully round. Confident, not bubbly.
- **Shadows** are tight, cool-tinted, and minimal — lean on hairline borders + light Slate fills
  first; reach for shadow only on raised/floating surfaces. A soft blue glow (`--shadow-brand`)
  sits under the primary CTA only.
- **Borders.** `1px`–`1.5px` Slate. Selected states swap the border to `2px` Blue (no extra
  chrome). Inputs show a blue focus ring (`--focus-ring`).
- **Motion** is calm and confident: `--ease-out` for most transitions (120–360ms), a gentle
  `--ease-spring` reserved for toggles/selection. **No bounce, no gimmick.** Buttons press to
  `scale(0.97)`. Respect reduced-motion.
- **Hover/press.** Hover = subtle lift + shadow (cards) or slightly darker blue
  (`--brand-hover`). Press = `scale(0.97)`. Disabled = 50% opacity, not-allowed.
- **Transparency & blur** are used sparingly — overlay scrims (`--surface-overlay`,
  ~50% slate-900). No frosted-glass everywhere.
- **Layout.** Consumer journey is a single centered ~480px column (mobile-first, app-like).
  Portal/marketplace are fixed-sidebar desktop layouts. Prefer flex/grid with `gap`.
- **Selected/active = Blue.** Across stepper, selectable cards, nav, checkboxes, switches — the
  one consistent "this is chosen" signal is Blue.

---

## Iconography

- **Lucide** is the chosen icon set (loaded from CDN: `unpkg.com/lucide`). It matches the brand:
  **1.75px stroke**, rounded caps/joins, calm and precise. Use the `Icon` component
  (`<Icon name="snowflake" />`) which renders an `<i data-lucide>`; call `lucide.createIcons()`
  after React mounts (every card and UI kit does this).
- Common glyphs in this product: `snowflake`, `thermometer`, `wrench`, `shield-check`,
  `sparkles` (AI sizing), `map-pin`, `calendar`, `lock` (locked price), `credit-card`, `plug`,
  `kanban`, `shopping-bag`, `file-check` (permits).
- **No emoji** anywhere in product UI. No unicode-character icons except the typographic check
  "✓" used inside selection controls (stepper, checkbox, selectable card) for crispness.
- **Logo / brand mark** lives in `assets/` as SVG: `logo-mark.svg` (the blue @ tile),
  `logo-wordmark.svg` (light bg), `logo-wordmark-light.svg` (dark bg). The **@** stands in for
  "At" in AtHome — the brand reads "@Home," with the @ in Blue and "Home" in near-black.

---

## Font substitution — needs your input

No licensed font binaries were provided, so **Manrope** and **Spline Sans Mono** are loaded from
**Google Fonts** (`tokens/fonts.css`) as the closest high-quality matches to the intended
SF-adjacent, clean direction. For production, self-host the `.woff2` files and replace the
`@import` with `@font-face` rules. **If AtHome licenses SF Pro / a custom face, send it and I'll
swap it in.**

---

## File index

```
styles.css                  Global entry — link this one file (import-only)
tokens/
  fonts.css                 Webfont loading (Google Fonts substitution)
  colors.css                Blue / Sky / Slate ramps + semantic aliases
  typography.css            Families (Manrope), scale, weights, tracking
  spacing.css               Spacing, radius, shadow, motion, layout
  base.css                  Light element resets + .ah-eyebrow helper
assets/
  logo-mark.svg, logo-wordmark.svg, logo-wordmark-light.svg
components/core/            React primitives + .d.ts + .prompt.md + core.card.html
  Button, Input, Card, Badge, Avatar, Checkbox, Switch, Stepper, SelectableCard, Icon
guidelines/                 Foundation specimen cards (Type/Colors/Spacing/Brand)
ui_kits/
  consumer/                 Guided quote journey (welcome → AI sizing → quote → booked)
  business/                 HVAC owner back office (dashboard, integrations)
  marketplace/              Agency lead marketplace (filterable, buy via Stripe)
SKILL.md                    Agent Skills entry point
Direction Studies.html      Earlier exploration — A/B/C aesthetic directions
Direction — Light Blue.html The chosen direction, single screen
```

**Components:** Avatar · Badge · Button · Card · Checkbox · Icon · Input · SelectableCard ·
Stepper · Switch. Import via `const { Button } = window.AtHomeDesignSystem_006189` after loading
`_ds_bundle.js`.

**UI kits:** Consumer Journey · Business Portal · Marketplace.

---

## Caveats / open questions

- Fonts are Google Fonts substitutions (see above) — confirm or replace.
- The @Home wordmark is an original first-pass mark; happy to iterate on logo treatment.
- White-label theming is supported in principle via the semantic aliases (override `--brand`,
  `--accent`, `--font-display`, etc. per tenant); a dedicated theming layer can be added next.
