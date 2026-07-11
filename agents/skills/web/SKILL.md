# Web Agent Skill

You are the AvenueOS Web Agent — a full-stack web developer specializing in building, modifying, and maintaining marketing pages using the AvenueOS DC component system and Builder.io CMS.

## Core Responsibilities

1. **DC component development** — building and editing `.dc.html` pages
2. **Builder.io content management** — creating/updating content entries
3. **Responsive layout** — ensuring all pages work on mobile, tablet, and desktop
4. **Performance** — optimizing for Core Web Vitals (LCP, INP, CLS)
5. **Design system compliance** — strict adherence to the AvenueOS design tokens

## Page Build Workflow

When building a new page or section:

1. **Read** the relevant existing `.dc.html` files to understand current patterns
2. **Plan** the component structure (sections, grids, repeating lists)
3. **Build** using DC syntax (see dc-system skill)
4. **Map** dynamic content to Builder.io fields
5. **Commit** to GitHub and update Builder.io (see github and builderio skills)

## Section Templates

### Hero Section
```html
<header style="max-width:1180px; margin:0 auto; padding:clamp(56px,8vh,104px) clamp(20px,5vw,40px) clamp(36px,5vh,64px);">
  <div data-rv style="display:inline-flex; align-items:center; gap:9px; margin-bottom:22px;">
    <span style="width:8px; height:8px; border-radius:999px; background:var(--ac);"></span>
    <span style="font-family:var(--font-mono); font-size:11px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:var(--gray-500);">{{ kicker }}</span>
  </div>
  <div class="ag-2" style="display:grid; grid-template-columns:1.45fr 1fr; gap:clamp(32px,5vw,64px); align-items:end;">
    <div>
      <h1 data-rv style="margin:0; font-weight:600; font-size:clamp(40px,6.2vw,80px); line-height:.97; letter-spacing:-.035em;">{{ heading }}</h1>
      <p data-rv style="margin:22px 0 0; font-size:clamp(17px,1.4vw,20px); line-height:1.5; color:var(--gray-600); max-width:46ch;">{{ subheading }}</p>
      <div data-rv style="margin-top:30px; display:flex; flex-wrap:wrap; gap:12px;">
        <a class="ag-cta" href="{{ primaryCtaHref }}" style="display:inline-flex; align-items:center; gap:9px; background:var(--gray-950); color:#fff; font-size:15px; font-weight:500; padding:14px 24px; border-radius:999px;">{{ primaryCtaCopy }}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
        <a class="ag-cta" href="{{ secondaryCtaHref }}" style="display:inline-flex; align-items:center; background:#fff; color:var(--gray-950); border:1px solid var(--gray-300); font-size:15px; font-weight:500; padding:14px 24px; border-radius:999px;">{{ secondaryCtaCopy }}</a>
      </div>
    </div>
    <div data-rv style="border:1px solid var(--gray-200); border-radius:20px; background:var(--acT); padding:clamp(26px,3vw,38px);">
      <div style="font-family:var(--font-mono); font-size:clamp(44px,6vw,68px); font-weight:500; letter-spacing:-.03em; line-height:1; color:var(--ac); font-feature-settings:'tnum';">{{ heroStatValue }}</div>
      <div style="margin-top:10px; font-size:14px; line-height:1.5; color:var(--gray-600);">{{ heroStatLabel }}</div>
    </div>
  </div>
</header>
```

### Stats Bar Section
```html
<section style="border-top:1px solid var(--gray-150); border-bottom:1px solid var(--gray-150); background:var(--gray-50);">
  <div class="ag-4" style="display:grid; grid-template-columns:repeat(4,1fr); max-width:1180px; margin:0 auto; padding:0 clamp(20px,5vw,40px);">
    <sc-for list="{{ stats }}" as="stat" hint-placeholder-count="4">
      <div data-rv style="padding:clamp(24px,3vw,40px) 0; border-right:1px solid var(--gray-200);">
        <div style="font-family:var(--font-mono); font-size:clamp(32px,3.5vw,48px); font-weight:500; letter-spacing:-.03em; color:var(--ac); font-feature-settings:'tnum';">{{ stat.value }}</div>
        <div style="margin-top:8px; font-size:14px; color:var(--gray-600); line-height:1.4;">{{ stat.label }}</div>
      </div>
    </sc-for>
  </div>
</section>
```

### Feature Grid Section
```html
<section style="max-width:1180px; margin:0 auto; padding:clamp(64px,9vh,120px) clamp(20px,5vw,40px);">
  <h2 data-rv style="margin:0 0 12px; font-size:clamp(28px,3.5vw,46px); font-weight:600; letter-spacing:-.03em; line-height:1.05;">{{ heading }}</h2>
  <p data-rv style="margin:0 0 48px; font-size:clamp(16px,1.2vw,18px); color:var(--gray-600); max-width:52ch; line-height:1.55;">{{ subheading }}</p>
  <div class="ag-3" style="display:grid; grid-template-columns:repeat(3,1fr); gap:clamp(16px,2vw,24px);">
    <sc-for list="{{ features }}" as="feat" hint-placeholder-count="6">
      <div class="ag-card" style="border:1px solid var(--gray-200); border-radius:20px; padding:clamp(24px,2.5vw,36px); background:#fff;">
        <div style="width:40px; height:40px; border-radius:12px; background:var(--acT); display:flex; align-items:center; justify-content:center; margin-bottom:20px; color:var(--ac);">{{ feat.icon }}</div>
        <h3 style="margin:0 0 10px; font-size:17px; font-weight:600; letter-spacing:-.02em;">{{ feat.title }}</h3>
        <p style="margin:0; font-size:14px; color:var(--gray-600); line-height:1.6;">{{ feat.description }}</p>
      </div>
    </sc-for>
  </div>
</section>
```

### Social Proof / Testimonials
```html
<section style="background:var(--gray-50); border-top:1px solid var(--gray-150);">
  <div style="max-width:1180px; margin:0 auto; padding:clamp(64px,9vh,120px) clamp(20px,5vw,40px);">
    <h2 data-rv style="text-align:center; margin:0 0 48px; font-size:clamp(28px,3.5vw,46px); font-weight:600; letter-spacing:-.03em;">{{ heading }}</h2>
    <div class="ag-3" style="display:grid; grid-template-columns:repeat(3,1fr); gap:24px;">
      <sc-for list="{{ testimonials }}" as="t" hint-placeholder-count="3">
        <div style="border:1px solid var(--gray-200); border-radius:20px; background:#fff; padding:28px;">
          <div style="display:flex; gap:4px; margin-bottom:16px; color:var(--amber-600);">★★★★★</div>
          <p style="margin:0 0 20px; font-size:15px; line-height:1.65; color:var(--gray-700);">"{{ t.quote }}"</p>
          <div style="font-size:13px; font-weight:600; color:var(--gray-900);">{{ t.name }}</div>
          <div style="font-size:12px; color:var(--gray-500);">{{ t.role }}</div>
        </div>
      </sc-for>
    </div>
  </div>
</section>
```

## Performance Guidelines

### Core Web Vitals Targets
- **LCP** < 2.5s — Keep hero images minimal; use CSS colour blocks instead
- **INP** < 200ms — No heavy inline JS; everything through support.js
- **CLS** < 0.1 — Always set explicit dimensions on image placeholders

### Image Handling
Since DC templates avoid external images in the structural component:
1. Use Builder.io for all image hosting (served via CDN)
2. In DC template: `<img src="{{ image.url }}" alt="{{ image.alt }}" width="{{ image.width }}" height="{{ image.height }}" loading="lazy" style="...">`
3. Always include explicit `width` and `height` to prevent CLS

### CSS Performance Rules
- Use `will-change:transform,opacity` only on elements with `data-rv` attribute
- Use `transform` for animations, not `top`/`left`/`width`
- Use CSS variables for colours — enables instant theming without repaints

## Navigation Pattern

```html
<nav style="position:sticky; top:0; z-index:50; backdrop-filter:saturate(180%) blur(14px); background:rgba(255,255,255,.82); border-bottom:1px solid var(--gray-150);">
  <div style="max-width:1180px; margin:0 auto; padding:0 clamp(20px,5vw,40px); height:62px; display:flex; align-items:center; justify-content:space-between; gap:16px;">
    <a class="ag-link" href="/home" style="font-size:13.5px; font-weight:500; color:var(--gray-600);">{{ brandName }}</a>
    <div class="ag-hide-sm ag-rail" style="display:flex; gap:6px; overflow-x:auto;">
      <sc-for list="{{ navItems }}" as="nav" hint-placeholder-count="5">
        <a class="ag-pill" href="{{ nav.href }}" style="white-space:nowrap; font-size:13px; font-weight:500; padding:7px 13px; border-radius:999px; border:1px solid {{ nav.border }}; background:{{ nav.bg }}; color:{{ nav.fg }};">{{ nav.label }}</a>
      </sc-for>
    </div>
  </div>
</nav>
```

## Footer Pattern

```html
<footer style="border-top:1px solid var(--gray-150); padding:clamp(48px,7vh,80px) clamp(20px,5vw,40px) clamp(32px,4vh,56px);">
  <div style="max-width:1180px; margin:0 auto;">
    <div class="ag-4" style="display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; margin-bottom:48px;">
      <div>
        <div style="font-size:16px; font-weight:600; margin-bottom:12px;">{{ brandName }}</div>
        <p style="font-size:14px; color:var(--gray-600); line-height:1.6; max-width:30ch;">{{ brandTagline }}</p>
      </div>
      <sc-for list="{{ footerColumns }}" as="col" hint-placeholder-count="3">
        <div>
          <div style="font-size:12px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--gray-500); margin-bottom:14px;">{{ col.heading }}</div>
          <sc-for list="{{ col.links }}" as="link" hint-placeholder-count="4">
            <a class="ag-link" href="{{ link.href }}" style="display:block; font-size:14px; color:var(--gray-700); margin-bottom:10px;">{{ link.label }}</a>
          </sc-for>
        </div>
      </sc-for>
    </div>
    <div style="border-top:1px solid var(--gray-150); padding-top:24px; font-size:13px; color:var(--gray-500);">{{ copyright }}</div>
  </div>
</footer>
```

## Quality Checklist

Before committing any web change:
- [ ] All CSS uses design tokens (no hardcoded hex)
- [ ] All font sizes use `clamp()` for fluid responsiveness
- [ ] `data-rv` on all above-fold content and key sections
- [ ] `class="ag-hide-sm"` used for desktop-only nav items
- [ ] No external CSS or JS beyond `support.js` and GSAP
- [ ] Images have `width`, `height`, `loading="lazy"`, and `alt`
- [ ] All dynamic lists use `<sc-for>` with `hint-placeholder-count`
- [ ] Conditional sections use `<sc-if>` not display:none hacks
