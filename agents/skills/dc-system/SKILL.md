# AvenueOS DC Component System

You have deep expertise in the AvenueOS Design Component (DC) system — a proprietary server-rendered HTML templating format used for all AvenueOS marketing pages. This skill defines the complete syntax, conventions, and patterns you must follow when reading, writing, or editing `.dc.html` files.

## File Format

Every `.dc.html` file is a complete HTML document with this shell:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
  <helmet>
    <!-- page-level styles and scripts -->
  </helmet>

  <!-- page markup -->
</x-dc>
</body>
</html>
```

## XML Tags

### `<x-dc>` — Component Root
The outermost container for all DC content. Required. Everything inside is processed by `support.js`.

### `<helmet>` — Head Injection
Children are injected into `<head>` by the runtime. Use for `<style>` and `<script>` tags only.

### `<dc-import>` — Component Import
```html
<dc-import src="./ComponentName.dc.html" />
```
Imports another DC component. The `src` is a relative path. Self-closing tag required.

### `<sc-for>` — List Iteration
```html
<sc-for list="{{ items }}" as="item" hint-placeholder-count="3">
  <div>{{ item.name }}</div>
</sc-for>
```
- `list` — template expression resolving to an array
- `as` — name of the loop variable
- `hint-placeholder-count` — number of skeleton placeholders to show during loading

### `<sc-if>` — Conditional Rendering
```html
<sc-if cond="{{ isVisible }}">
  <div>Only shown when isVisible is truthy</div>
</sc-if>
```

### Template Expressions
Use `{{ variableName }}` or `{{ object.property }}` anywhere in attribute values or text content.

## CSS Variables (Design Tokens)

All styles MUST use these CSS variables — never hardcode hex values:

### Grays
```css
--gray-0: #ffffff
--gray-25: #fbfbfc
--gray-50: #f7f8f9
--gray-100: #f0f1f3
--gray-150: #e8eaed
--gray-200: #dfe2e6
--gray-300: #cbcfd4
--gray-400: #a4a9b0
--gray-500: #787e87
--gray-600: #565c65
--gray-700: #3c424b
--gray-800: #272c33
--gray-900: #181c22
--gray-950: #0e1116
```

### Accent (tenant-specific)
```css
--ac       /* Primary accent colour — set per tenant */
--acT      /* Accent tint background */
```

### Semantic Colors
```css
--green-50 / --green-600 / --green-700
--amber-50 / --amber-600 / --amber-700
--blue-50 / --blue-600
--violet-50 / --violet-600
--red-50 / --red-600
```

### Typography
```css
--font-sans: 'Geist', 'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif
--font-mono: 'Geist Mono', 'JetBrains Mono', ui-monospace, monospace
```

## Layout Utilities (CSS classes)

These utility classes are provided by `support.js`:

| Class | Effect |
|---|---|
| `ag-cta` | CTA button: hover lift + opacity transition |
| `ag-card` | Card: hover lift + border + shadow transition |
| `ag-pill` | Pill: hover background transition |
| `ag-link` | Animated underline on hover |
| `ag-rail` | Horizontal scroll container, hidden scrollbar |
| `ag-hide-sm` | Hidden on screens ≤ 860px |
| `ag-2` | 2-column grid (collapses to 1 on mobile) |
| `ag-3` | 3-column grid (collapses to 1 on mobile) |
| `ag-4` | 4-column grid (collapses to 2 on mobile) |

## Animation

Use `data-rv` attribute on elements that should animate on scroll (reveal animation driven by `support.js`):
```html
<div data-rv style="...">Animated content</div>
```

## Script Libraries

Only these two external scripts are permitted:
- `./support.js` — always in `<head>` (DC runtime + utilities)
- `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js` — for complex animations (in `<helmet>`)

No other external JS libraries.

## Breakpoints

```css
@media (max-width: 860px) { /* mobile */ }
```

Use `clamp()` for fluid sizing: `font-size: clamp(17px, 1.4vw, 20px)`.

## Responsive Grid Pattern

```html
<div class="ag-2" style="display:grid; grid-template-columns:1.45fr 1fr; gap:clamp(32px,5vw,64px);">
  <div><!-- left --></div>
  <div><!-- right --></div>
</div>
```

## Naming Conventions

- Template variables: `camelCase` — e.g., `heroStatValue`, `agentNav`, `oneLiner`
- CSS class names: `ag-*` prefix
- DC file names: `PascalCase.dc.html` — e.g., `Agent-SEO.dc.html`, `Home.dc.html`

## Example: A Complete Section

```html
<section style="max-width:1180px; margin:0 auto; padding:clamp(56px,8vh,96px) clamp(20px,5vw,40px);">
  <div data-rv style="display:inline-flex; align-items:center; gap:9px; margin-bottom:22px;">
    <span style="width:8px; height:8px; border-radius:999px; background:var(--ac);"></span>
    <span style="font-family:var(--font-mono); font-size:11px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:var(--gray-500);">{{ kicker }}</span>
  </div>
  <h2 data-rv style="margin:0 0 16px; font-size:clamp(32px,4vw,52px); font-weight:600; letter-spacing:-.03em; line-height:1.05;">{{ heading }}</h2>
  <p data-rv style="margin:0 0 40px; font-size:clamp(16px,1.2vw,18px); color:var(--gray-600); max-width:52ch; line-height:1.55;">{{ subheading }}</p>
  <div class="ag-3" style="display:grid; grid-template-columns:repeat(3,1fr); gap:24px;">
    <sc-for list="{{ cards }}" as="card" hint-placeholder-count="3">
      <div class="ag-card" style="border:1px solid var(--gray-200); border-radius:16px; padding:28px;">
        <div style="font-size:13px; font-weight:600; color:var(--ac); margin-bottom:10px;">{{ card.label }}</div>
        <div style="font-size:clamp(28px,3vw,40px); font-weight:500; font-family:var(--font-mono); letter-spacing:-.03em;">{{ card.value }}</div>
        <div style="margin-top:8px; font-size:14px; color:var(--gray-600); line-height:1.5;">{{ card.description }}</div>
      </div>
    </sc-for>
  </div>
</section>
```

## Rules

1. ALWAYS use CSS variables — never hardcode `#hex` values
2. ALWAYS use `clamp()` for font sizes and spacing that should be fluid
3. NEVER import external CSS frameworks (Bootstrap, Tailwind, etc.)
4. NEVER use inline `<script>` tags outside `<helmet>`
5. ALWAYS add `data-rv` to hero headings, key stats, and above-fold content
6. ALWAYS close `<dc-import>` as self-closing (`/>`)
7. Use `font-weight:500` or `600` — not `bold`
8. Radii: `border-radius:999px` for pills, `16px`–`24px` for cards, `12px` for small chips
