/* @ds-bundle: {"format":3,"namespace":"ToiletPlusDesignSystem_5215f9","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"RatingBadge","sourcePath":"components/core/RatingBadge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"GuaranteeCard","sourcePath":"components/marketing/GuaranteeCard.jsx"},{"name":"ReviewCard","sourcePath":"components/marketing/ReviewCard.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"9062bf3b558e","components/buttons/Button.jsx":"5e2355e1e184","components/core/Badge.jsx":"ab2c227b24ca","components/core/Card.jsx":"020077e6b624","components/core/RatingBadge.jsx":"e172635232a6","components/forms/Input.jsx":"f2d11189e018","components/forms/Select.jsx":"971ff54cdce7","components/marketing/GuaranteeCard.jsx":"901119b33340","components/marketing/ReviewCard.jsx":"60b2fa710bae","components/marketing/ServiceCard.jsx":"d223519c84d1","site/ClassicBottom.jsx":"c6596b5c146a","site/ClassicKit.jsx":"36e41607edc9","site/ClassicMid.jsx":"ea97cdc08df6","site/ClassicProcessClub.jsx":"536ee73cb8d3","site/ClassicTop.jsx":"0d15d543edad","site/GetStartedPage.jsx":"89fcdfde5696","site/ServiceArea.jsx":"2cebba82b9f5","site/ServicesPage.jsx":"6ad8aeb70dd9","site/SiteBookingModal.jsx":"d89a91881488","site/SiteFooter.jsx":"b7f8cda519f6","site/SiteGuarantees.jsx":"b582f0686932","site/SiteHeader.jsx":"a9d2ab4ec4d1","site/SiteHero.jsx":"25edb335bda4","site/SiteReviews.jsx":"712379ef4881","site/SiteServices.jsx":"379908a2cd8a","site/SiteSpecStrip.jsx":"c49af010865a","ui_kits/booking/BookingFunnel.jsx":"72078d21ad1d","ui_kits/booking/Ticket.jsx":"058b50df4532","ui_kits/booking/funnel-data.js":"58e648209213","ui_kits/website/BookingModal.jsx":"cdae8b6ea2c5","ui_kits/website/Footer.jsx":"208ca82695b3","ui_kits/website/Guarantees.jsx":"b582f0686932","ui_kits/website/Header.jsx":"6090a25af8e8","ui_kits/website/Hero.jsx":"0505a614353d","ui_kits/website/Reviews.jsx":"73483037c8ba","ui_kits/website/Services.jsx":"20bc6d13b316","ui_kits/website/SpecStrip.jsx":"c49af010865a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ToiletPlusDesignSystem_5215f9 = window.ToiletPlusDesignSystem_5215f9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toilet Plus logo lockup — vector "+" mark with a red water-droplet,
 * plus the Archivo wordmark. Use `tone="dark"` on navy/photo backgrounds.
 */
function Logo({
  tone = 'light',
  showWordmark = true,
  size = 36,
  href,
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  const markFill = onDark ? '#FFFFFF' : 'url(#tpMarkG)';
  const plusFill = onDark ? '#0B3D7E' : '#FFFFFF';
  const mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 72 72",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "tpMarkG",
    x1: "8",
    y1: "8",
    x2: "64",
    y2: "64",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1466CC"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0B3D7E"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "64",
    height: "64",
    rx: "16",
    fill: markFill
  }), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "18",
    width: "10",
    height: "36",
    rx: "5",
    fill: plusFill
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "31",
    width: "36",
    height: "10",
    rx: "5",
    fill: plusFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M53 14c0 4.4-3.1 7-6.5 7S40 18.4 40 14c0-3.3 4.2-7.8 5.9-9.5a.8.8 0 0 1 1.2 0C48.8 6.2 53 10.7 53 14Z",
    fill: "#FF4D4D"
  }));
  const inner = /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.32,
      ...style
    }
  }, rest), mark, showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: size * 0.82,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: onDark ? '#FFFFFF' : 'var(--text-strong)'
    }
  }, "Toilet", /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? 'var(--color-accent)' : 'var(--color-primary)'
    }
  }, "+")));
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        textDecoration: 'none',
        display: 'inline-flex'
      }
    }, inner);
  }
  return inner;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject a component's CSS once per document. Lets DS components carry real
   :hover / :active / :focus-visible / :disabled states while staying self-contained. */
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}
const BTN_CSS = `
.tp-btn{
  --_bg:var(--color-primary); --_fg:#fff; --_bd:transparent; --_shadow:none;
  font-family:var(--font-body); font-weight:700; letter-spacing:.005em;
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  border:var(--border-2) solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-md); cursor:pointer; text-decoration:none; white-space:nowrap;
  box-shadow:var(--_shadow); transition:transform var(--dur-fast) var(--ease-out),
    background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out),
    border-color var(--dur-fast) var(--ease-out); user-select:none;
}
.tp-btn:hover{ background:var(--_bgH,var(--_bg)); border-color:var(--_bdH,var(--_bd)); }
.tp-btn:active{ transform:translateY(1px); }
.tp-btn:focus-visible{ outline:none; box-shadow:var(--focus-ring), var(--_shadow); }
.tp-btn[disabled]{ opacity:.5; cursor:not-allowed; transform:none; }
.tp-btn svg{ width:1.15em; height:1.15em; flex:none; }

/* sizes */
.tp-btn--sm{ font-size:14px; padding:8px 16px; }
.tp-btn--md{ font-size:16px; padding:12px 22px; }
.tp-btn--lg{ font-size:18px; padding:16px 30px; }

/* variants */
.tp-btn--primary{ --_bg:var(--color-primary); --_bgH:var(--color-primary-hover); --_shadow:var(--shadow-sm); }
.tp-btn--accent{ --_bg:var(--color-accent); --_bgH:var(--color-accent-hover); --_shadow:var(--shadow-sm); }
.tp-btn--navy{ --_bg:var(--blue-900); --_bgH:var(--blue-800); --_shadow:var(--shadow-sm); }
.tp-btn--outline{ --_bg:transparent; --_fg:var(--color-primary); --_bd:var(--border-strong); --_bgH:var(--surface-muted); --_bdH:var(--color-primary); }
.tp-btn--ghost{ --_bg:transparent; --_fg:var(--text-strong); --_bd:transparent; --_bgH:var(--surface-sunken); }
.tp-btn--on-dark{ --_bg:#fff; --_fg:var(--blue-900); --_bgH:var(--gray-100); }
.tp-btn--block{ display:flex; width:100%; }
`;

/**
 * Primary action control. `accent` is reserved for emergency / "call now" urgency.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  as,
  className = '',
  children,
  ...rest
}) {
  useStyleOnce('tp-btn-styles', BTN_CSS);
  const Tag = as || (rest.href ? 'a' : 'button');
  const cls = `tp-btn tp-btn--${variant} tp-btn--${size}${block ? ' tp-btn--block' : ''}${className ? ' ' + className : ''}`;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)'
  },
  navy: {
    bg: 'var(--blue-900)',
    fg: '#fff'
  },
  accent: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)'
  },
  green: {
    bg: 'var(--green-50)',
    fg: 'var(--green-500)'
  },
  amber: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-500)'
  },
  gray: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-600)'
  },
  solid: {
    bg: 'var(--color-primary)',
    fg: '#fff'
  }
};

/** Small status / qualifier stamp — "LICENSED", "24/7", "SAME-DAY".
 *  Sharp, mono, uppercase — reads like an equipment/spec label. */
function Badge({
  tone = 'blue',
  icon,
  size = 'md',
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  const pad = size === 'sm' ? '3px 8px' : '5px 10px';
  const fs = size === 'sm' ? 10.5 : 11.5;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      padding: pad,
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface card — hairline border, cool-tinted shadow, soft radius.
 *  `hover` adds a lift on pointer-over (for clickable cards). */
function Card({
  hover = false,
  pad = 24,
  as = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    onMouseEnter: hover ? () => setOver(true) : undefined,
    onMouseLeave: hover ? () => setOver(false) : undefined,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: over ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: pad,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: over ? 'translateY(-3px)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/RatingBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stars({
  value = 5,
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    },
    "aria-label": `${value} out of 5 stars`
  }, [0, 1, 2, 3, 4].map(i => {
    const fill = Math.min(1, Math.max(0, value - i));
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `st${i}-${value}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "#FFB400"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "#E0E6F0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z",
      fill: `url(#st${i}-${value})`
    }));
  }));
}

/** Trust badge — star rating + score + review count. Mirrors the "Google rating" chip. */
function RatingBadge({
  value = 4.9,
  count = 2148,
  label = 'Google Reviews',
  size = 'md',
  style,
  ...rest
}) {
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: big ? 12 : 9,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 'var(--radius-pill)',
      padding: big ? '10px 18px' : '7px 14px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: big ? 22 : 18,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, value.toFixed(1)), /*#__PURE__*/React.createElement(Stars, {
    value: value,
    size: big ? 18 : 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: big ? 13.5 : 12,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, count.toLocaleString(), " ", label));
}
Object.assign(__ds_scope, { RatingBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RatingBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD_CSS = `
.tp-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.tp-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.tp-field__req{ color:var(--color-accent); }
.tp-field__ctrl{ position:relative; display:flex; align-items:center; }
.tp-input{
  width:100%; font-family:var(--font-body); font-size:16px; color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-strong);
  border-radius:var(--radius-md); padding:12px 14px; line-height:1.3;
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.tp-input::placeholder{ color:var(--text-faint); }
.tp-input:hover{ border-color:var(--gray-400); }
.tp-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--focus-ring); }
.tp-input--has-icon{ padding-left:42px; }
.tp-field__icon{ position:absolute; left:14px; color:var(--text-muted); display:flex; pointer-events:none; }
.tp-field__icon svg{ width:18px; height:18px; }
.tp-field--error .tp-input{ border-color:var(--color-accent); }
.tp-field__hint{ font-size:12px; color:var(--text-muted); }
.tp-field--error .tp-field__hint{ color:var(--color-accent); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (typeof document === 'undefined' || document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/** Labeled text input with optional leading icon, hint and error state. */
function Input({
  label,
  required,
  icon,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  useStyleOnce('tp-field-styles', FIELD_CSS);
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: `tp-field${error ? ' tp-field--error' : ''}`,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tp-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__req"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "tp-field__ctrl"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: `tp-input${icon ? ' tp-input--has-icon' : ''}`
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled native select, styled to match Input (shares .tp-field styles). */
function Select({
  label,
  required,
  hint,
  error,
  id,
  children,
  style,
  ...rest
}) {
  const fid = id || (label ? 'tp-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: `tp-field${error ? ' tp-field--error' : ''}`,
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tp-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__req"
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "tp-field__ctrl"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "tp-input",
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 40,
      cursor: 'pointer',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236A7689' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center'
    }
  }, rest), children)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: "tp-field__hint"
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/GuaranteeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A promise/guarantee block — icon on a navy or blue chip, title, one-line proof.
 *  Use for "Upfront pricing", "Same-day service", "Licensed & insured". */
function GuaranteeCard({
  icon,
  title,
  children,
  tone = 'blue',
  style,
  ...rest
}) {
  const navy = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      background: navy ? 'transparent' : 'var(--surface-card)',
      border: navy ? '1px solid var(--border-on-dark)' : '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      boxShadow: navy ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: navy ? 'rgba(255,255,255,0.12)' : 'var(--blue-50)',
      color: navy ? '#fff' : 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '2px 0 5px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: navy ? '#fff' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: navy ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { GuaranteeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/GuaranteeCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stars({
  value = 5
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    },
    "aria-label": `${value} of 5`
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: i < value ? '#FFB400' : '#E0E6F0'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z"
  }))));
}

/** Customer review card — stars, quote, and author with location. */
function ReviewCard({
  rating = 5,
  quote,
  author,
  location,
  source = 'Google',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Stars, {
    value: rating
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      flex: 'none',
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15
    }
  }, (author || '?').charAt(0)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, location, location && source ? ' · ' : '', source))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single plumbing service — flat spec-card with a mono index, line icon,
 *  plain-talk copy and a rule-divided link. Top accent bar slides in on hover. */
function ServiceCard({
  icon,
  title,
  index,
  children,
  href = '#',
  linkLabel = 'Learn more',
  style,
  ...rest
}) {
  const [over, setOver] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setOver(true),
    onMouseLeave: () => setOver(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textDecoration: 'none',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '28px 26px 22px',
      overflow: 'hidden',
      boxShadow: over ? 'var(--shadow-md)' : 'none',
      borderColor: over ? 'var(--blue-300)' : 'var(--border-soft)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 4,
      width: over ? '100%' : '38px',
      background: 'var(--color-primary)',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      display: 'flex'
    },
    "aria-hidden": "true"
  }, icon), index && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-faint)',
      letterSpacing: '.04em'
    }
  }, index)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em',
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-soft)',
      paddingTop: 14,
      marginTop: 4,
      fontSize: 13,
      fontWeight: 700,
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '.05em',
      color: over ? 'var(--color-primary)' : 'var(--text-strong)',
      transition: 'color var(--dur-base) var(--ease-out)'
    }
  }, linkLabel, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: over ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// site/ClassicBottom.jsx
try { (() => {
/* Classic home — Video reviews, Careers, Coupon, Service area map, Bottom CTA.
   Exposes TPClassicVideoReviews, TPClassicCareers, TPClassicCoupon, TPClassicArea, TPClassicCTA */
(function () {
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const {
    PhotoFrame,
    RedBanner,
    Slab
  } = window.TPClassicKit;

  /* ---------- VIDEO / FEATURED REVIEWS ---------- */
  function VideoReviews() {
    const {
      m,
      t
    } = window.TPKit.bp(window.TPKit.useVW());
    const CARDS = [['Family Owned & Operated', 'Owner spotlight', 'A locally owned shop where the person who answers the phone knows the techs by name.'], ['Thank You, Tampa Bay', 'Customer story', 'Fifteen years of neighbors trusting us with their homes \u2014 and telling their friends.'], ['Exceptional Work & Service', 'Job walkthrough', 'See a same-day water heater swap, start to spotless finish, in under three minutes.']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-muted)',
        padding: m ? '56px 0' : '88px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement(RedBanner, {
      tail: 'Since 2009'
    }, 'Providing service beyond your satisfaction'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : t ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: 24
      }
    }, CARDS.map(([title, label, body]) => React.createElement('div', {
      key: title,
      style: {
        background: '#fff',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement(PhotoFrame, {
      icon: 'Play',
      label,
      ratio: '16 / 10',
      tone: 'navy'
    }), React.createElement('span', {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-accent)'
      }
    }, React.createElement(Icon, {
      name: 'Play',
      size: 24,
      color: '#fff'
    }))), React.createElement('div', {
      style: {
        padding: '20px 22px 24px'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2,
        marginBottom: 10
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 15,
      height: 15,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: 'var(--text-strong)',
        textTransform: 'uppercase',
        letterSpacing: '.01em',
        marginBottom: 6
      }
    }, title), React.createElement('p', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, body)))))));
  }

  /* ---------- CAREERS ---------- */
  function Careers() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m,
      t
    } = window.TPKit.bp(window.TPKit.useVW());
    const CARDS = [['Award', '15+ Years in Business', 'A stable, locally owned shop with a backlog of loyal customers \u2014 not a churn-and-burn franchise.'], ['Home', 'Family Owned & Operated', 'Decisions get made by people who answer to this community, not a private-equity spreadsheet.'], ['BadgeDollarSign', 'Fair Pay, Fair Pricing', 'Techs do the job right the first time because they\u2019re paid to \u2014 no commission-quota games.']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-page)',
        padding: m ? '60px 0' : '90px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        marginBottom: 14
      }
    }, React.createElement(Stamp, {
      tone: 'blue',
      style: {
        justifyContent: 'center'
      }
    }, 'Now hiring')), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginBottom: m ? 36 : 48
      }
    }, React.createElement(Slab, {
      size: 50
    }, 'Make every job ', React.createElement('span', {
      style: {
        color: 'var(--color-accent)'
      }
    }, 'one you\u2019re proud of')), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.65,
        color: 'var(--text-muted)',
        maxWidth: 620,
        margin: '16px auto 0'
      }
    }, 'Join a family-owned Tampa Bay shop known for doing right by customers and crew alike. Competitive pay, real benefits, and the tools to do the job properly.')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : t ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: 22,
        marginBottom: 40
      }
    }, CARDS.map(([icon, title, body]) => React.createElement('div', {
      key: title,
      style: {
        background: 'var(--surface-muted)',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-md)',
        padding: '28px 26px',
        textAlign: 'center'
      }
    }, React.createElement('span', {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 24,
      color: 'var(--color-primary)'
    })), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        color: 'var(--text-strong)',
        marginBottom: 8
      }
    }, title), React.createElement('p', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, body)))), React.createElement('div', {
      style: {
        textAlign: 'center'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      }),
      href: '#'
    }, 'Apply today'))));
  }

  /* ---------- COUPON / INSTANT SAVINGS ---------- */
  function Coupon() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('section', {
      style: {
        background: 'var(--surface-muted)',
        padding: m ? '56px 0' : '80px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '0.8fr 1.2fr',
        gap: 0,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-soft)',
        boxShadow: 'var(--shadow-md)'
      }
    }, React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff',
        padding: m ? '36px 28px' : '48px 40px'
      }
    }, React.createElement(Stamp, {
      tone: 'onDark'
    }, 'Coupons'), React.createElement(Slab, {
      size: 46,
      color: '#fff',
      style: {
        marginTop: 14
      }
    }, 'Instant', React.createElement('br'), 'savings'), React.createElement('p', {
      style: {
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-on-dark-muted)',
        margin: '16px 0 0',
        maxWidth: 280
      }
    }, 'New customer? Stack these with any flat-rate quote \u2014 mention the code when you book.')),
    // coupon ticket
    React.createElement('div', {
      style: {
        position: 'relative',
        background: '#fff',
        padding: m ? '32px 28px' : '44px 44px',
        display: 'flex',
        flexDirection: m ? 'column' : 'row',
        alignItems: 'center',
        gap: m ? 24 : 36,
        ...blueprint('rgba(7,30,61,0.035)', 24)
      }
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        flex: 'none'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: 'var(--color-accent)'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: m ? 72 : 96,
        lineHeight: 0.85,
        letterSpacing: '-0.03em'
      }
    }, '$30'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        marginTop: 6
      }
    }, 'OFF')), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, 'Water softener install')), React.createElement('div', {
      style: {
        display: m ? 'none' : 'block',
        width: 1,
        alignSelf: 'stretch',
        borderLeft: '2px dashed var(--border-strong)'
      }
    }), React.createElement('div', {
      style: {
        textAlign: m ? 'center' : 'left'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        color: 'var(--text-strong)',
        marginBottom: 6
      }
    }, 'New customer offer'), React.createElement('p', {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        lineHeight: 1.5,
        margin: '0 0 16px'
      }
    }, 'Code ', React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-primary)',
        fontWeight: 700
      }
    }, 'SOFT30'), ' \u00B7 one per household.'), React.createElement(Button, {
      variant: 'accent',
      size: 'md',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 16
      }),
      href: 'get-started.html'
    }, 'Claim this deal'))))));
  }

  /* ---------- SERVICE AREA + MAP ---------- */
  function Area() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    const COL1 = ['Hillsborough County', 'Pinellas County', 'Pasco County', 'South Tampa & Hyde Park', 'St. Petersburg', 'Clearwater & Largo'];
    const COL2 = ['Brandon & Riverview', 'Wesley Chapel', 'Palm Harbor & Dunedin', 'Carrollwood & Westchase', 'Apollo Beach & Ruskin', 'Land O\u2019 Lakes'];
    const PINS = [['28%', '30%'], ['44%', '22%'], ['62%', '38%'], ['36%', '54%'], ['54%', '64%'], ['70%', '58%'], ['46%', '78%'], ['24%', '46%']];
    const Item = t => React.createElement('div', {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 0'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: 16,
      color: 'var(--color-primary)'
    }), React.createElement('span', {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, t));
    return React.createElement('section', {
      id: 'area',
      style: {
        background: 'var(--surface-page)',
        padding: m ? '60px 0' : '90px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '0.85fr 1.15fr',
        gap: m ? 36 : 48,
        alignItems: 'center'
      }
    }, React.createElement('div', null, React.createElement(Slab, {
      size: 50
    }, 'Reliable service ', React.createElement('span', {
      style: {
        color: 'var(--color-primary)'
      }
    }, 'in your area')), React.createElement('p', {
      style: {
        fontSize: 16,
        lineHeight: 1.65,
        color: 'var(--text-muted)',
        margin: '16px 0 22px',
        maxWidth: 420
      }
    }, 'Locally based across Tampa Bay, so a truck is usually minutes away. If you\u2019re on this list, same-day is the norm.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 28px',
        marginBottom: 26
      }
    }, React.createElement('div', null, COL1.map(Item)), React.createElement('div', null, COL2.map(Item))), React.createElement(Button, {
      variant: 'primary',
      size: 'md',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 17
      }),
      href: 'get-started.html'
    }, 'Schedule service')),
    // map panel
    React.createElement('div', {
      style: {
        position: 'relative',
        aspectRatio: '4 / 3',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #EAF3FF, #D2E5FF)',
        border: '1px solid var(--border-soft)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(20,102,204,0.10)', 28)
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        left: '50%',
        top: '46%',
        transform: 'translate(-50%,-50%)',
        width: '46%',
        height: '52%',
        background: 'rgba(20,102,204,0.12)',
        border: '1.5px dashed var(--color-primary)',
        borderRadius: '46% 46% 50% 50% / 40% 40% 60% 60%'
      }
    }), PINS.map(([l, t], i) => React.createElement('span', {
      key: i,
      style: {
        position: 'absolute',
        left: l,
        top: t,
        transform: 'translate(-50%,-100%)',
        color: i === 3 ? 'var(--color-accent)' : 'var(--color-primary)'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: i === 3 ? 30 : 22,
      color: i === 3 ? 'var(--color-accent)' : 'var(--color-primary)'
    }))), React.createElement('div', {
      style: {
        position: 'absolute',
        left: 16,
        bottom: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--color-primary)',
        fontWeight: 600
      }
    }, 'Tampa Bay coverage')))));
  }

  /* ---------- BOTTOM CTA ---------- */
  function CTA({
    onBook
  }) {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(160deg, #0B3D7E 0%, #071E3D 80%)',
        color: '#fff',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 32)
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 900,
        margin: '0 auto',
        padding: m ? '56px 20px' : '72px 24px',
        textAlign: 'center'
      }
    }, React.createElement(Slab, {
      size: 40,
      color: '#fff',
      style: {
        letterSpacing: '-0.01em'
      }
    }, 'Trouble below? Call Toilet Plus at ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, '(813) 240-7867')), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.6,
        color: 'var(--text-on-dark-muted)',
        margin: '18px auto 28px',
        maxWidth: 640
      }
    }, 'Full-service plumbing for Tampa Bay, FL \u2014 you can count on us. We also serve St. Petersburg, Clearwater, Brandon, Wesley Chapel, and beyond.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      }),
      href: 'tel:8132407867'
    }, 'Call (813) 240-7867'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: onBook
    }, 'Schedule online'))));
  }
  Object.assign(window, {
    TPClassicVideoReviews: VideoReviews,
    TPClassicCareers: Careers,
    TPClassicCoupon: Coupon,
    TPClassicArea: Area,
    TPClassicCTA: CTA
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ClassicBottom.jsx", error: String((e && e.message) || e) }); }

// site/ClassicKit.jsx
try { (() => {
/* Classic-homepage shared helpers (photo placeholders, red banner, etc.)
   Loaded after _kit.jsx. Exposes window.TPClassicKit.* */
(function () {
  const {
    Icon,
    blueprint
  } = window.TPKit;

  /* On-brand photo placeholder. A navy/blue spec-sheet frame with a centered
     icon and a contact-sheet caption — marks where a real photo drops in,
     in the brand's blueprint visual language. */
  function PhotoFrame({
    icon = 'Camera',
    label,
    ratio = '4 / 3',
    tone = 'navy',
    radius = 'var(--radius-md)',
    style
  }) {
    const bg = tone === 'blue' ? 'linear-gradient(150deg, #1466CC 0%, #0B3D7E 100%)' : 'linear-gradient(150deg, #0B3D7E 0%, #071E3D 100%)';
    return React.createElement('div', {
      style: {
        position: 'relative',
        aspectRatio: ratio,
        width: '100%',
        overflow: 'hidden',
        borderRadius: radius,
        background: bg,
        ...style
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.06)', 26)
      }
    }),
    // corner ticks
    React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 12,
        border: '1px dashed rgba(255,255,255,0.16)',
        borderRadius: 4,
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        color: 'rgba(255,255,255,0.55)'
      }
    }, React.createElement('span', {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 24,
      color: '#fff'
    }))), label && React.createElement('span', {
      style: {
        position: 'absolute',
        left: 16,
        bottom: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, React.createElement('span', {
      style: {
        width: 6,
        height: 6,
        background: 'var(--color-accent)',
        borderRadius: '50%'
      }
    }), label));
  }

  /* Wide red pill banner used as a section header ("Providing service beyond
     your satisfaction"). Center-aligned, script-accented tail optional. */
  function RedBanner({
    children,
    tail
  }) {
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: m ? 30 : 44
      }
    }, React.createElement('div', {
      style: {
        background: 'var(--color-accent)',
        color: '#fff',
        borderRadius: 'var(--radius-pill)',
        padding: m ? '12px 24px' : '15px 40px',
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 10,
        boxShadow: 'var(--shadow-accent)',
        maxWidth: '100%',
        textAlign: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: m ? 16 : 22,
        letterSpacing: '.01em',
        textTransform: 'uppercase'
      }
    }, children), tail && React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: m ? 15 : 21,
        opacity: 0.95
      }
    }, tail)));
  }

  /* Big condensed all-caps display headline (the reference's hero/section style).
     Auto-scales down on tablet / phone so fixed px sizes stay readable. */
  function Slab({
    children,
    size = 64,
    color = 'var(--text-strong)',
    style
  }) {
    const vw = window.TPKit.useVW();
    const eff = vw < 560 ? Math.max(24, Math.round(size * 0.52)) : vw < 860 ? Math.round(size * 0.72) : vw < 1100 ? Math.round(size * 0.88) : size;
    return React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: eff,
        lineHeight: 0.96,
        letterSpacing: '-0.02em',
        textTransform: 'uppercase',
        color,
        margin: 0,
        ...style
      }
    }, children);
  }
  window.TPClassicKit = {
    PhotoFrame,
    RedBanner,
    Slab
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ClassicKit.jsx", error: String((e && e.message) || e) }); }

// site/ClassicMid.jsx
try { (() => {
/* Classic home — Testimonials, navy "why us" section, "We Value Your Time".
   Exposes window.TPClassicTestimonials, window.TPClassicWhy, window.TPClassicValue */
(function () {
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const {
    PhotoFrame,
    RedBanner,
    Slab
  } = window.TPClassicKit;

  /* ---------- CLIENT TESTIMONIALS ---------- */
  function Testimonials() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    const REVIEWS = [['Replaced our water heater same day. The plumber explained everything, gave a flat price up front, and left the closet cleaner than he found it.', 'Karen R.', 'St. Petersburg'], ['Called at 9pm with water under the sink. A real person picked up, a tech was out by 7am, and the bill matched the quote exactly.', 'Marcus D.', 'Brandon']];
    return React.createElement('section', {
      id: 'reviews',
      style: {
        background: 'var(--surface-muted)',
        padding: m ? '56px 0 64px' : '88px 0 96px'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement(RedBanner, {
      tail: 'Since 2009'
    }, 'Providing service beyond your satisfaction'), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginBottom: 40
      }
    }, React.createElement(Slab, {
      size: 38
    }, 'Client testimonials'), React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 16,
      height: 16,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), '4.9 on Google \u00B7 2,148 reviews')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: 24,
        marginBottom: 36
      }
    }, REVIEWS.map(([quote, author, loc]) => React.createElement('figure', {
      key: author,
      style: {
        background: '#fff',
        border: '1px solid var(--border-soft)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        padding: '28px 30px',
        margin: 0
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2,
        marginBottom: 14
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 17,
      height: 17,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), React.createElement('blockquote', {
      style: {
        margin: 0,
        fontSize: 16.5,
        lineHeight: 1.6,
        color: 'var(--text-body)'
      }
    }, '\u201C', quote, '\u201D'), React.createElement('figcaption', {
      style: {
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1px solid var(--border-soft)',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800
      }
    }, author[0]), React.createElement('span', null, React.createElement('span', {
      style: {
        display: 'block',
        fontWeight: 700,
        color: 'var(--text-strong)',
        fontSize: 14.5
      }
    }, author), React.createElement('span', {
      style: {
        display: 'block',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, loc, ' \u00B7 Google')))))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        justifyContent: 'center'
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'md',
      href: '#reviews',
      iconLeft: React.createElement(Icon, {
        name: 'MessageSquare',
        size: 17
      })
    }, 'Read reviews'), React.createElement(Button, {
      variant: 'outline',
      size: 'md',
      href: '#',
      iconLeft: React.createElement(Icon, {
        name: 'PenLine',
        size: 17
      })
    }, 'Leave a review'))));
  }

  /* ---------- NAVY: WHY US + FEATURE CARDS ---------- */
  function Why() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    const FEATURES = [['Zap', 'Same-Day Service', 'We schedule fast and arrive in a tight window, so you\u2019re not stuck waiting around all day for a plumber to show.'], ['Tag', 'Straightforward Pricing', 'You see the flat price before we touch a tool. No hourly meter, no surprise line items, no \u201Cwhile we\u2019re here.\u201D'], ['CreditCard', 'Customer Financing', 'Approved financing on bigger jobs means a failed water heater never has to wait for the next paycheck.']];
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(160deg, #0B3D7E 0%, #071E3D 80%)',
        color: '#fff',
        padding: m ? '60px 0' : '90px 0',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.045)', 32)
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '0.9fr 1.1fr',
        gap: m ? 36 : 56,
        alignItems: 'center'
      }
    },
    // team photo
    React.createElement(PhotoFrame, {
      icon: 'Users',
      label: 'Our crew',
      ratio: '5 / 4',
      tone: 'blue',
      style: {
        boxShadow: 'var(--shadow-xl)'
      }
    }),
    // features
    React.createElement('div', null, React.createElement(Stamp, {
      tone: 'onDark'
    }, 'Why Toilet Plus'), React.createElement(Slab, {
      size: 44,
      color: '#fff',
      style: {
        margin: '14px 0 28px',
        maxWidth: 460
      }
    }, 'Plumbing without the runaround'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, FEATURES.map(([icon, title, body]) => React.createElement('div', {
      key: title,
      style: {
        display: 'flex',
        gap: 16,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-md)',
        padding: '18px 20px'
      }
    }, React.createElement('span', {
      style: {
        flex: 'none',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 21,
      color: '#fff'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: '#fff'
      }
    }, title), React.createElement('div', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        marginTop: 3
      }
    }, body))))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 28
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      href: 'get-started.html'
    }, 'Schedule Service'), React.createElement('a', {
      href: 'tel:8132407867',
      style: {
        color: '#fff',
        textDecoration: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: 15,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 16,
      color: 'var(--color-accent)'
    }), '(813) 240-7867'))))));
  }

  /* ---------- WE VALUE YOUR TIME ---------- */
  function Value() {
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    const SERVICES_L = ['24-hour emergency service', 'Water heater service & install', 'Tankless water heaters', 'Drain cleaning & rooter', 'Repiping & re-routes', 'Whole-home water filtration'];
    const SERVICES_R = ['Drain cleaning & replacement', 'Faucet & fixture replacement', 'Leak & slab-leak detection', 'Toilet & bidet installs', 'Sewer & main-line service', 'Water softeners'];
    const Item = t => React.createElement('div', {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '11px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement('span', {
      style: {
        flex: 'none',
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'var(--blue-50)',
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Check',
      size: 13,
      stroke: 3
    })), React.createElement('span', {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, t));
    return React.createElement('section', {
      style: {
        background: 'var(--surface-page)',
        padding: m ? '56px 0' : '96px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 0.7fr',
        gap: m ? 36 : 56,
        alignItems: 'start'
      }
    }, React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        marginBottom: 24
      }
    }, React.createElement(Slab, {
      size: 56
    }, 'We value ', React.createElement('span', {
      style: {
        color: 'var(--color-accent)'
      }
    }, 'your time')), React.createElement('span', {
      style: {
        flex: 'none',
        position: 'relative',
        width: 78,
        height: 78,
        borderRadius: '50%',
        background: 'var(--color-accent)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-accent)',
        transform: 'rotate(-6deg)'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 22,
        lineHeight: 1
      }
    }, '45'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 8.5,
        letterSpacing: '.1em'
      }
    }, 'MIN ETA'))), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        maxWidth: 540,
        margin: '0 0 28px'
      }
    }, 'When the water\u2019s rising, the last thing you need is a four-hour arrival window. We run a tight local schedule and keep you posted by text from \u201Con our way\u201D to \u201Call done\u201D \u2014 because your day shouldn\u2019t stop for ours.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: '0 36px'
      }
    }, React.createElement('div', null, SERVICES_L.map(Item)), React.createElement('div', null, SERVICES_R.map(Item)))), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, React.createElement(PhotoFrame, {
      icon: 'Wrench',
      label: 'On the job',
      ratio: '3 / 4',
      tone: 'navy'
    }), React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff',
        borderRadius: 'var(--radius-md)',
        padding: '20px 22px'
      }
    }, React.createElement(Stamp, {
      tone: 'onDark'
    }, 'Our promise'), React.createElement('p', {
      style: {
        margin: '10px 0 0',
        fontSize: 15,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)'
      }
    }, 'On time, or we take ', React.createElement('strong', {
      style: {
        color: '#fff'
      }
    }, '$50 off'), ' the job. That\u2019s how seriously we take your schedule.'))))));
  }
  Object.assign(window, {
    TPClassicTestimonials: Testimonials,
    TPClassicWhy: Why,
    TPClassicValue: Value
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ClassicMid.jsx", error: String((e && e.message) || e) }); }

// site/ClassicProcessClub.jsx
try { (() => {
/* Classic home — Process steps, Club membership, Financing band.
   Exposes window.TPClassicProcess, window.TPClassicClub, window.TPClassicFinancing */
(function () {
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const {
    PhotoFrame,
    Slab
  } = window.TPClassicKit;

  /* ---------- PROCESS: WHAT TO EXPECT ---------- */
  function Process() {
    const {
      m,
      t
    } = window.TPKit.bp(window.TPKit.useVW());
    const STEPS = [['Search', 'Evaluation', 'A licensed tech diagnoses the real problem on-site \u2014 and shows you exactly what they find.'], ['ListChecks', 'Options', 'We lay out repair-vs-replace options, each with a flat price. You pick what fits your home and budget.'], ['ThumbsUp', 'Approval', 'Nothing happens until you approve the quote. No work, no charge, until you say go.'], ['BadgeCheck', '5-Star Finish', 'We do the work, clean up like we were never there, and stand behind it with a written warranty.']];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-muted)',
        padding: m ? '60px 0' : '90px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        textAlign: 'center',
        marginBottom: m ? 36 : 52
      }
    }, React.createElement(Stamp, {
      tone: 'blue',
      style: {
        justifyContent: 'center'
      }
    }, 'The Toilet Plus Process'), React.createElement(Slab, {
      size: 46,
      style: {
        margin: '16px 0 0'
      }
    }, 'What you can expect ', React.createElement('span', {
      style: {
        color: 'var(--color-primary)'
      }
    }, 'working with us'))), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : t ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: m || t ? '40px 24px' : 0,
        position: 'relative'
      }
    }, STEPS.map(([icon, title, body], i) => React.createElement('div', {
      key: title,
      style: {
        textAlign: 'center',
        padding: '0 22px',
        borderLeft: !m && !t && i ? '1px solid var(--border-strong)' : 'none'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative',
        width: 76,
        height: 76,
        margin: '0 auto 18px',
        borderRadius: '50%',
        border: '2px solid var(--color-primary)',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-sm)'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 28,
      color: 'var(--color-primary)'
    }), React.createElement('span', {
      style: {
        position: 'absolute',
        top: -8,
        right: 6,
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--color-accent)',
        color: '#fff',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, i + 1)), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        color: 'var(--text-strong)',
        textTransform: 'uppercase',
        letterSpacing: '.01em',
        marginBottom: 8
      }
    }, title), React.createElement('p', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-muted)',
        margin: 0
      }
    }, body))))));
  }

  /* ---------- TOILET PLUS CLUB ---------- */
  function Club() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    const PERKS = ['Two priority plumbing inspections a year', 'Front-of-line scheduling \u2014 members jump the queue', 'Priority dispatch on emergencies', '15% off every repair & service call', 'No after-hours or weekend trip fees', 'Transferable if you sell your home'];
    return React.createElement('section', {
      style: {
        background: 'var(--surface-page)',
        padding: m ? '60px 0' : '90px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 40 : 56,
        alignItems: 'center'
      }
    },
    // truck photo + price tag
    React.createElement('div', {
      style: {
        position: 'relative'
      }
    }, React.createElement(PhotoFrame, {
      icon: 'Truck',
      label: 'Toilet Plus van',
      ratio: '4 / 3',
      tone: 'navy',
      style: {
        boxShadow: 'var(--shadow-lg)'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        top: -22,
        left: -18,
        background: 'var(--color-accent)',
        color: '#fff',
        borderRadius: 'var(--radius-md)',
        padding: '14px 20px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-accent)',
        transform: 'rotate(-4deg)'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 34,
        lineHeight: 1
      }
    }, '$149'), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        opacity: 0.9
      }
    }, 'per year'))), React.createElement('div', null, React.createElement(Stamp, {
      tone: 'accent'
    }, 'Membership'), React.createElement(Slab, {
      size: 50,
      style: {
        margin: '14px 0 16px'
      }
    }, 'The Toilet Plus ', React.createElement('span', {
      style: {
        color: 'var(--color-primary)'
      }
    }, 'Club')), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.65,
        color: 'var(--text-body)',
        margin: '0 0 22px',
        maxWidth: 480
      }
    }, 'One flat yearly membership that pays for itself the first time you need us \u2014 priority service, real discounts, and zero trip fees.'), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: '12px 24px',
        marginBottom: 28
      }
    }, PERKS.map(p => React.createElement('div', {
      key: p,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, React.createElement(Icon, {
      name: 'CheckCircle2',
      size: 18,
      color: 'var(--green-500)'
    }), React.createElement('span', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.4,
        color: 'var(--text-body)'
      }
    }, p)))), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      }),
      href: 'get-started.html'
    }, 'Join the club')))));
  }

  /* ---------- FINANCING BAND ---------- */
  function Financing() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'var(--color-accent)',
        color: '#fff',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.09)', 30)
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: m ? '44px 20px' : '56px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: m ? 28 : 40,
        flexWrap: 'wrap'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 720
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 12
      }
    }, React.createElement('span', {
      style: {
        width: 4,
        height: 30,
        background: '#fff',
        display: 'inline-block'
      }
    }), React.createElement(Slab, {
      size: 38,
      color: '#fff'
    }, 'Financing for your plumbing needs')), React.createElement('p', {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.92)',
        margin: 0
      }
    }, 'A failed water heater or a slab leak never picks a convenient week. We offer flexible, approval-in-minutes financing so you can fix it right today and pay over time \u2014 with options to fit your budget.')), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, React.createElement('span', {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'PiggyBank',
      size: 30,
      color: '#fff'
    })), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      }),
      href: 'get-started.html'
    }, 'See your options'))));
  }
  Object.assign(window, {
    TPClassicProcess: Process,
    TPClassicClub: Club,
    TPClassicFinancing: Financing
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ClassicProcessClub.jsx", error: String((e && e.message) || e) }); }

// site/ClassicTop.jsx
try { (() => {
/* Classic home — Hero, trust strip, and "Top-Rated" intro with service cards.
   Exposes window.TPClassicHero, window.TPClassicIntro */
(function () {
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const {
    PhotoFrame,
    Slab
  } = window.TPClassicKit;

  /* ---------- HERO ---------- */
  function Hero({
    onBook
  }) {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(160deg, #0B3D7E 0%, #071E3D 78%)',
        color: '#fff',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 34)
      }
    }),
    // faded photo bleed on the right (hidden on phones so it never crowds the copy)
    !m && React.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '42%',
        opacity: 0.5,
        maskImage: 'linear-gradient(90deg, transparent, #000 55%)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 55%)'
      }
    }, React.createElement(PhotoFrame, {
      icon: 'Truck',
      radius: 0,
      ratio: 'auto',
      style: {
        height: '100%'
      }
    })), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: m ? '60px 20px 64px' : '96px 24px 104px'
      }
    }, React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        marginBottom: 26
      }
    }, React.createElement(Stamp, {
      tone: 'accent'
    }, '24/7 Emergency Service'), React.createElement('span', {
      style: {
        width: 1,
        height: 14,
        background: 'var(--border-on-dark)'
      }
    }), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Tampa Bay & Beyond')), React.createElement(Slab, {
      size: 92,
      color: '#fff',
      style: {
        maxWidth: 820
      }
    }, 'Done right.', React.createElement('br'), React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'Done once.')), React.createElement('p', {
      style: {
        fontSize: m ? 17 : 20,
        lineHeight: 1.5,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 560,
        margin: '24px 0 34px'
      }
    }, 'Full-service plumbing for Tampa Bay, St. Petersburg, Clearwater and the surrounding counties \u2014 dependable, upfront, and on-time.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 36
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: onBook
    }, 'Schedule Service'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      }),
      href: 'tel:8132407867'
    }, '(813) 240-7867')), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 18,
      height: 18,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        color: '#fff',
        fontWeight: 600
      }
    }, '4.9'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-on-dark-muted)'
      }
    }, '/ 2,148 Google reviews'))),
    // trust strip
    React.createElement('div', {
      style: {
        position: 'relative',
        borderTop: '1px solid var(--border-on-dark)',
        background: 'rgba(5,21,43,0.55)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)'
      }
    }, [['Zap', 'Same-Day Service', 'Most calls handled the day you book.'], ['Home', 'Family Owned & Operated', 'Locally run since 2009 \u2014 not a franchise.'], ['Clock', '24/7 Emergency Response', 'Real dispatchers answer, holidays included.']].map(([icon, title, sub], i) => React.createElement('div', {
      key: title,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: m ? '20px 4px' : '24px 28px',
        borderLeft: !m && i ? '1px solid var(--border-on-dark)' : 'none',
        borderTop: m && i ? '1px solid var(--border-on-dark)' : 'none'
      }
    }, React.createElement('span', {
      style: {
        flex: 'none',
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 22,
      color: '#fff'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        fontSize: 17,
        letterSpacing: '.01em'
      }
    }, title), React.createElement('div', {
      style: {
        color: 'var(--text-on-dark-muted)',
        fontSize: 13.5,
        lineHeight: 1.4,
        marginTop: 2
      }
    }, sub)))))));
  }

  /* ---------- TOP-RATED INTRO + SERVICE CARDS ---------- */
  function Intro({
    onBook
  }) {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m,
      t
    } = window.TPKit.bp(window.TPKit.useVW());
    const CARDS = [['Drain Cleaning & Rooter', 'Waves', 'services.html#svc-01'], ['Water Heater Replacement', 'Flame', 'services.html#svc-02'], ['Leak Detection', 'Search', 'services.html#svc-03'], ['Whole-Home Filtration', 'Droplets', 'services.html#svc-04']];
    return React.createElement('section', {
      id: 'why',
      style: {
        background: 'var(--surface-page)',
        padding: m ? '56px 0' : '96px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1fr 1fr',
        gap: m ? 32 : 56,
        alignItems: 'start',
        marginBottom: m ? 40 : 56
      }
    }, React.createElement('div', null, React.createElement(Stamp, {
      tone: 'accent'
    }, 'Top-Rated'), React.createElement(Slab, {
      size: 52,
      style: {
        margin: '16px 0 0'
      }
    }, 'Plumbing services in ', React.createElement('span', {
      style: {
        color: 'var(--color-primary)'
      }
    }, 'Tampa Bay'), ' & the nearby areas'), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: 26,
        color: 'var(--color-accent)',
        marginTop: 10
      }
    }, 'Since 2009')), React.createElement('div', null, React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        margin: 0
      }
    }, 'Looking for reliable plumbers you can actually reach? Toilet Plus has served Tampa Bay and the surrounding counties since 2009. Call us at (813) 240-7867 for a fast, dependable answer.'), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.7,
        color: 'var(--text-body)',
        margin: '16px 0 0'
      }
    }, 'Whether it\u2019s a midnight burst pipe, a slow-moving drain, a water heater on its last day, or a remodel you want done right \u2014 we show up on time, explain your options in plain English, and quote a flat rate before any work begins. No surprises, no upsells.'), React.createElement('div', {
      style: {
        marginTop: 22
      }
    }, React.createElement(Button, {
      variant: 'primary',
      size: 'md',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 17
      }),
      href: 'services.html'
    }, 'Browse all services')))),
    // 4 service photo cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: m ? '1fr 1fr' : t ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: 22
      }
    }, CARDS.map(([title, icon, href]) => React.createElement('a', {
      key: title,
      href,
      style: {
        textDecoration: 'none',
        display: 'block'
      }
    }, React.createElement('div', {
      style: {
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border-soft)',
        boxShadow: 'var(--shadow-sm)',
        background: '#fff'
      }
    }, React.createElement(PhotoFrame, {
      icon,
      ratio: '4 / 3',
      tone: 'blue'
    }), React.createElement('div', {
      style: {
        background: 'var(--color-accent)',
        color: '#fff',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 14.5,
        letterSpacing: '.01em',
        textTransform: 'uppercase'
      }
    }, title), React.createElement(Icon, {
      name: 'ArrowUpRight',
      size: 16,
      color: '#fff'
    }))))))));
  }
  Object.assign(window, {
    TPClassicHero: Hero,
    TPClassicIntro: Intro
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ClassicTop.jsx", error: String((e && e.message) || e) }); }

// site/GetStartedPage.jsx
try { (() => {
/* Get Started — "Plus" the AI dispatcher: chat intake + live work-order ticket. window.TPGetStartedPage */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const JOBS = [['Clogged or slow drain', 'Droplets', '$89\u2013$240', 'Drain cleaning'], ['Water heater \u2014 no hot water', 'Flame', '$149\u2013$1,900', 'Water heater'], ['Leak or burst pipe', 'Waves', '$129\u2013$900', 'Leak detection'], ['Sewer / main line backup', 'Pipette', '$199\u2013$1,400', 'Sewer & main line'], ['Toilet, faucet or fixture', 'ShowerHead', '$79\u2013$420', 'Fixtures'], ['Something else', 'Wrench', 'Quoted on site', 'General plumbing']];
  const URGENCY = [['Emergency \u2014 today', 'Today, 2:00\u20134:00 PM', 'Clock'], ['This week', 'Thu, 9:00\u201311:00 AM', 'Calendar'], ['Just planning ahead', 'Your pick of window', 'CalendarRange']];

  // ---- chat bubble ----
  function Bubble({
    from,
    children
  }) {
    const me = from === 'me';
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: me ? 'flex-end' : 'flex-start',
        gap: 10
      }
    }, !me && React.createElement('span', {
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        borderRadius: 9,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
      }
    }, React.createElement(Icon, {
      name: 'Bot',
      size: 17,
      color: '#fff'
    })), React.createElement('div', {
      style: {
        maxWidth: '78%',
        padding: '12px 15px',
        fontSize: 15,
        lineHeight: 1.5,
        borderRadius: me ? '12px 12px 3px 12px' : '12px 12px 12px 3px',
        background: me ? 'var(--color-primary)' : '#fff',
        color: me ? '#fff' : 'var(--text-body)',
        border: me ? 'none' : '1px solid var(--border-strong)'
      }
    }, children));
  }
  function Typing() {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, React.createElement('span', {
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        borderRadius: 9,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Bot',
      size: 17,
      color: '#fff'
    })), React.createElement('div', {
      style: {
        padding: '14px 16px',
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: '12px 12px 12px 3px',
        display: 'flex',
        gap: 5
      }
    }, [0, 1, 2].map(i => React.createElement('span', {
      key: i,
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--gray-400)',
        animation: 'tpblink 1s ' + i * 0.18 + 's infinite'
      }
    }))));
  }

  // ---- live work-order ticket field ----
  function Field({
    label,
    value,
    icon,
    accent
  }) {
    const filled = !!value;
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement('span', {
      style: {
        flex: 'none',
        color: filled ? accent ? 'var(--color-accent)' : 'var(--color-primary)' : 'var(--gray-300)'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 17
    })), React.createElement('div', {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), React.createElement('div', {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        color: filled ? 'var(--text-strong)' : 'var(--gray-300)',
        marginTop: 2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, filled ? value : '\u2014')));
  }
  function GetStartedPage() {
    const {
      Button,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const [msgs, setMsgs] = useState([{
      from: 'plus',
      text: 'Hey \u2014 I\u2019m Plus, the dispatcher here. Tell me what\u2019s going on and I\u2019ll line up a licensed plumber, a real arrival window, and a flat-rate price before anyone touches a wrench.'
    }, {
      from: 'plus',
      text: 'First up: what\u2019s the trouble?'
    }]);
    const [stage, setStage] = useState('job'); // job -> zip -> urgency -> contact -> done
    const [typing, setTyping] = useState(false);
    const [order, setOrder] = useState({});
    const [zip, setZip] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const scrollRef = useRef();
    useEffect(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [msgs, typing, stage]);
    const say = (from, text) => setMsgs(m => [...m, {
      from,
      text
    }]);
    const plusReply = (lines, after) => {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMsgs(m => [...m, ...lines.map(t => ({
          from: 'plus',
          text: t
        }))]);
        if (after) after();
      }, 750);
    };
    const pickJob = j => {
      say('me', j[0]);
      setOrder(o => ({
        ...o,
        job: j[3],
        jobIcon: j[1],
        estimate: j[2]
      }));
      setStage('typing');
      plusReply(['Got it \u2014 ' + j[3].toLowerCase() + '. We do those same-day. What\u2019s your ZIP so I can find the nearest truck?'], () => setStage('zip'));
    };
    const submitZip = () => {
      if (zip.trim().length < 4) return;
      say('me', zip.trim());
      setOrder(o => ({
        ...o,
        zip: zip.trim()
      }));
      setStage('typing');
      plusReply(['You\u2019re in our core area \u2014 nice. How soon do you need someone out?'], () => setStage('urgency'));
    };
    const pickUrgency = u => {
      say('me', u[0]);
      setOrder(o => ({
        ...o,
        urgency: u[0],
        plumber: 'Marcus T. \u00B7 4.9\u2605 \u00B7 1.2 mi',
        window: u[1]
      }));
      setStage('typing');
      plusReply(['Done. Nearest licensed plumber is Marcus (4.9\u2605, 1.2 miles out). Soonest window: ' + u[1] + '.', 'Flat-rate estimate for this is locked in the ticket on the right \u2014 you approve it before any work starts. Where do I text the confirmation?'], () => setStage('contact'));
    };
    const submitContact = () => {
      if (name.trim().length < 2 || phone.trim().length < 7) return;
      say('me', name.trim() + ' \u00B7 ' + phone.trim());
      setOrder(o => ({
        ...o,
        contact: name.trim(),
        phone: phone.trim()
      }));
      setStage('typing');
      plusReply(['Locked in, ' + name.trim().split(' ')[0] + '. Marcus is confirmed and you\u2019ll get a text from (813) 240-7867 with live arrival tracking. See the ticket \u2014 that\u2019s your visit. \uD83D\uDD27'], () => setStage('done'));
    };
    return React.createElement('main', null,
    // page hero strip
    React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 80%)',
        color: '#fff',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 32),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '52px 24px 40px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 16
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, '00'), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Get started')), React.createElement('h1', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        lineHeight: 0.98,
        letterSpacing: '-0.03em',
        margin: '0 0 14px',
        maxWidth: 720
      }
    }, 'Talk to ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'Plus.'), ' Booked in a minute.'), React.createElement('p', {
      style: {
        fontSize: 17.5,
        lineHeight: 1.5,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 560,
        margin: 0
      }
    }, 'Our dispatcher triages the job, finds the nearest licensed plumber, and locks a flat-rate price \u2014 before anyone shows up.'))),
    // chat + ticket
    React.createElement('section', {
      style: {
        background: 'var(--surface-muted)',
        padding: '48px 0 96px'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1.35fr 0.85fr',
        gap: 28,
        alignItems: 'start'
      }
    },
    // CHAT
    React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: 620
      }
    }, React.createElement('div', {
      style: {
        padding: '14px 20px',
        borderBottom: '1px solid var(--border-soft)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'var(--blue-900)',
        color: '#fff'
      }
    }, React.createElement('span', {
      style: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Bot',
      size: 19,
      color: '#fff'
    })), React.createElement('div', {
      style: {
        flex: 1
      }
    }, React.createElement('div', {
      style: {
        fontWeight: 700,
        fontSize: 15
      }
    }, 'Plus \u2014 Toilet Plus dispatch'), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.06em',
        color: 'var(--blue-300)',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, React.createElement('span', {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--green-500)',
        display: 'inline-block'
      }
    }), 'ONLINE \u00B7 REPLIES IN SECONDS'))),
    // scroll area
    React.createElement('div', {
      ref: scrollRef,
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        background: 'var(--surface-page)'
      }
    }, msgs.map((m, i) => React.createElement(Bubble, {
      key: i,
      from: m.from === 'me' ? 'me' : 'plus'
    }, m.text)), typing && React.createElement(Typing, null)),
    // input / quick replies
    React.createElement('div', {
      style: {
        borderTop: '1px solid var(--border-soft)',
        padding: '14px 16px',
        background: '#fff',
        minHeight: 64
      }
    }, stage === 'job' && React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, JOBS.map(j => React.createElement('button', {
      key: j[0],
      onClick: () => pickJob(j),
      style: chipStyle
    }, React.createElement(Icon, {
      name: j[1],
      size: 15,
      color: 'var(--color-primary)'
    }), j[0]))), stage === 'zip' && React.createElement('form', {
      onSubmit: e => {
        e.preventDefault();
        submitZip();
      },
      style: {
        display: 'flex',
        gap: 10
      }
    }, React.createElement('input', {
      value: zip,
      onChange: e => setZip(e.target.value),
      placeholder: 'Enter your ZIP code\u2026',
      autoFocus: true,
      style: textInputStyle
    }), React.createElement(Button, {
      variant: 'primary',
      type: 'submit',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 17
      })
    }, 'Send')), stage === 'urgency' && React.createElement('div', {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, URGENCY.map(u => React.createElement('button', {
      key: u[0],
      onClick: () => pickUrgency(u),
      style: chipStyle
    }, React.createElement(Icon, {
      name: u[2],
      size: 15,
      color: 'var(--color-primary)'
    }), u[0]))), stage === 'contact' && React.createElement('form', {
      onSubmit: e => {
        e.preventDefault();
        submitContact();
      },
      style: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, React.createElement('input', {
      value: name,
      onChange: e => setName(e.target.value),
      placeholder: 'Your name',
      autoFocus: true,
      style: {
        ...textInputStyle,
        flex: '1 1 130px'
      }
    }), React.createElement('input', {
      value: phone,
      onChange: e => setPhone(e.target.value),
      placeholder: 'Mobile number',
      style: {
        ...textInputStyle,
        flex: '1 1 130px'
      }
    }), React.createElement(Button, {
      variant: 'accent',
      type: 'submit'
    }, 'Confirm')), (stage === 'typing' || typing) && React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)',
        padding: '8px 2px',
        letterSpacing: '.04em'
      }
    }, 'Plus is finding your plumber\u2026'), stage === 'done' && React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--green-600)',
        fontWeight: 600,
        fontSize: 14.5
      }
    }, React.createElement(Icon, {
      name: 'CheckCheck',
      size: 18,
      color: 'var(--green-500)'
    }), 'Visit confirmed \u2014 watch your phone for tracking.'))),
    // TICKET
    React.createElement('div', {
      style: {
        position: 'sticky',
        top: 100
      }
    }, React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff',
        padding: '14px 22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Icon, {
      name: 'ClipboardList',
      size: 15,
      color: 'var(--blue-300)'
    }), 'Work order'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--blue-300)'
      }
    }, '#WO-' + (order.zip || '00000'))), React.createElement('div', {
      style: {
        height: 0,
        borderTop: '2px dashed var(--border-strong)'
      }
    }), React.createElement('div', {
      style: {
        padding: '8px 22px 6px'
      }
    }, React.createElement(Field, {
      label: 'Job',
      value: order.job,
      icon: order.jobIcon || 'Wrench'
    }), React.createElement(Field, {
      label: 'Service ZIP',
      value: order.zip,
      icon: 'MapPin'
    }), React.createElement(Field, {
      label: 'Urgency',
      value: order.urgency,
      icon: 'Clock'
    }), React.createElement(Field, {
      label: 'Assigned plumber',
      value: order.plumber,
      icon: 'BadgeCheck'
    }), React.createElement(Field, {
      label: 'Arrival window',
      value: order.window,
      icon: 'CalendarCheck'
    }), React.createElement(Field, {
      label: 'Flat-rate estimate',
      value: order.estimate,
      icon: 'Tag',
      accent: true
    }), React.createElement(Field, {
      label: 'Text updates to',
      value: order.phone,
      icon: 'Phone'
    })), React.createElement('div', {
      style: {
        padding: '14px 22px 18px',
        background: 'var(--surface-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 14,
      color: 'var(--green-500)'
    }), 'Price approved by you before work begins')), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 16,
        fontSize: 13.5,
        color: 'var(--text-muted)'
      }
    }, 'Rather just call?', React.createElement('a', {
      href: 'tel:8132407867',
      style: {
        color: 'var(--color-primary)',
        fontWeight: 700,
        textDecoration: 'none',
        fontFamily: 'var(--font-mono)'
      }
    }, '(813) 240-7867'))))));
  }
  const chipStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    padding: '9px 13px',
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-md)',
    background: '#fff',
    fontSize: 13.5,
    fontWeight: 600,
    color: 'var(--text-strong)',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)'
  };
  const textInputStyle = {
    flex: 1,
    padding: '11px 14px',
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-md)',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    color: 'var(--text-strong)',
    outline: 'none'
  };
  window.TPGetStartedPage = GetStartedPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/GetStartedPage.jsx", error: String((e && e.message) || e) }); }

// site/ServiceArea.jsx
try { (() => {
/* Service area band — coverage list + ZIP check, spec-sheet style. window.TPServiceArea */
(function () {
  const AREAS = ['South Tampa & Hyde Park', 'St. Petersburg', 'Clearwater & Largo', 'Brandon & Riverview', 'Wesley Chapel', 'Palm Harbor & Dunedin', 'Carrollwood & Westchase', 'Apollo Beach & Ruskin'];
  function ServiceArea() {
    const {
      Button,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Section,
      SectionHead,
      Icon,
      Stamp
    } = window.TPKit;
    return React.createElement(Section, {
      id: 'area',
      tone: 'muted'
    }, React.createElement(SectionHead, {
      index: '04',
      kicker: 'Where we work',
      title: 'Metro plus ',
      accentTitle: '30 miles out.',
      intro: 'Locally based, so a truck is usually close by. Drop your ZIP and we\u2019ll tell you straight whether you\u2019re in range and how soon we can roll.'
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 48,
        alignItems: 'start'
      }
    },
    // coverage grid
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: '#fff'
      }
    }, AREAS.map((a, i) => React.createElement('div', {
      key: a,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '18px 20px',
        borderRight: i % 2 === 0 ? '1px solid var(--border-soft)' : 'none',
        borderBottom: i < AREAS.length - 2 ? '1px solid var(--border-soft)' : 'none'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: 17,
      color: 'var(--color-primary)'
    }), React.createElement('span', {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, a)))),
    // ZIP check card
    React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        padding: '26px 24px'
      }
    }, React.createElement(Stamp, {
      tone: 'blue'
    }, 'Coverage check'), React.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        color: 'var(--text-strong)',
        margin: '14px 0 8px',
        lineHeight: 1.1
      }
    }, 'Are we in your neighborhood?'), React.createElement('p', {
      style: {
        fontSize: 14.5,
        color: 'var(--text-muted)',
        lineHeight: 1.5,
        margin: '0 0 18px'
      }
    }, 'No ZIP gymnastics \u2014 one box, honest answer.'), React.createElement(Input, {
      label: 'ZIP code',
      icon: React.createElement(Icon, {
        name: 'MapPin',
        size: 18
      }),
      placeholder: '33602',
      style: {
        marginBottom: 16
      }
    }), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      href: 'get-started.html',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      })
    }, 'Check my area'), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginTop: 16,
        paddingTop: 14,
        borderTop: '1px solid var(--border-soft)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'Clock',
      size: 14,
      color: 'var(--green-500)'
    }), 'Same-day in most ZIPs'))));
  }
  window.TPServiceArea = ServiceArea;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ServiceArea.jsx", error: String((e && e.message) || e) }); }

// site/ServicesPage.jsx
try { (() => {
/* Services page body — page hero, detailed service rows, flat-rate pricing band. window.TPServicesPage */
(function () {
  const {
    Icon,
    Stamp,
    blueprint
  } = window.TPKit;
  const SERVICES = [['01', 'Droplets', 'Drain Cleaning', 'Slow sink, gurgling shower, or a kitchen line that backs up every holiday? Nine times out of ten it\u2019s grease and buildup \u2014 not something you broke. We snake the line, hydro-jet when it\u2019s stubborn, and run a camera so the clog actually stays gone.', ['Cable & snake up to 100 ft', 'Hydro-jetting for grease & roots', 'Camera inspection of the line', 'Trap & P-trap cleanout'], 'Drain clearing from $89'], ['02', 'Flame', 'Water Heaters', 'No hot water this morning is a bad way to start the day. We diagnose first \u2014 sometimes it\u2019s a $20 part, not a new tank. When it is time to replace, we size it right, swap tank or tankless same day, and haul the old one away.', ['Tank & tankless repair', 'Same-day replacement', 'Right-sizing for your home', 'Old unit haul-away included'], 'Diagnostic from $149 (credited)'], ['03', 'Waves', 'Leak Detection', 'A mystery damp spot or a water bill that jumped for no reason usually means a hidden leak. We trace slab and pinhole leaks with acoustic and pressure testing before they wreck your drywall \u2014 and we open the smallest hole we can.', ['Slab & pinhole leaks', 'Acoustic + pressure testing', 'Drywall-safe access', 'Full repair, not just locate'], 'Leak trace from $129'], ['04', 'Pipette', 'Sewer & Main Line', 'Drains gurgling all over the house at once? That\u2019s the main line talking. We camera-inspect to see exactly what\u2019s down there \u2014 roots, a belly, or a break \u2014 then clear it or spot-repair without trenching your whole yard.', ['Camera inspection & locate', 'Root & grease clearing', 'Spot repair & pipe lining', 'Sewer lateral cleanout'], 'Main line service from $199'], ['05', 'ShowerHead', 'Fixtures & Toilets', 'Running toilet, dripping faucet, wobbly flange, a disposal that just hums \u2014 the small stuff that wastes water and nags at you every day. We knock it out same visit, with parts on the truck.', ['Toilet repair & replace', 'Faucet, valve & flange', 'Garbage disposal swap', 'Wax ring & supply lines'], 'Fixture work from $79'], ['06', 'Gauge', 'Repiping & Water Quality', 'Low pressure, rusty water, or old galvanized pipe on borrowed time? We repipe with modern materials, add filtration or softening, and dial in your pressure so every tap runs clean and strong.', ['Whole-home & partial repipe', 'Galvanized & poly-B swap-out', 'Filtration & softeners', 'Pressure regulation'], 'Free repipe estimate']];
  function Row({
    data,
    i
  }) {
    const [idx, ic, title, body, included, price] = data;
    const flip = i % 2 === 1;
    const content = React.createElement('div', {
      style: {
        maxWidth: 520
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        marginBottom: 16
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, idx), React.createElement(Stamp, {
      tone: 'blue',
      tick: false
    }, 'Service ' + idx)), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 14
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--color-primary)'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 34,
      stroke: 1.75
    })), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 34,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)',
        margin: 0,
        lineHeight: 1.05
      }
    }, title)), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.62,
        color: 'var(--text-body)',
        margin: 0
      }
    }, body));
    const panel = React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        padding: '8px 22px',
        borderBottom: '1px solid var(--border-soft)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        height: 38,
        display: 'flex',
        alignItems: 'center'
      }
    }, 'What\u2019s included'), React.createElement('div', {
      style: {
        padding: '6px 22px 14px'
      }
    }, included.map(it => React.createElement('div', {
      key: it,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement(Icon, {
      name: 'Check',
      size: 17,
      color: 'var(--green-500)'
    }), React.createElement('span', {
      style: {
        fontSize: 14.5,
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, it)))), React.createElement('div', {
      style: {
        padding: '16px 22px',
        background: 'var(--surface-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        letterSpacing: '.02em'
      }
    }, price), React.createElement('a', {
      href: 'get-started.html',
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--color-primary)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, 'Book', React.createElement(Icon, {
      name: 'ArrowRight',
      size: 14
    }))));
    return React.createElement('div', {
      id: 'svc-' + idx,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.15fr 0.85fr',
        gap: 56,
        alignItems: 'center',
        padding: '56px 0',
        borderTop: '1px solid var(--border-strong)'
      }
    }, flip ? [React.createElement('div', {
      key: 'p'
    }, panel), React.createElement('div', {
      key: 'c'
    }, content)] : [content, panel]);
  }
  function PageHero() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 78%)',
        color: '#fff',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 32),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        right: -30,
        bottom: -90,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 300,
        lineHeight: 1,
        color: 'rgba(255,255,255,0.03)',
        pointerEvents: 'none'
      }
    }, '+'), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '64px 24px 72px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 22
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, '00'), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'What we fix')), React.createElement('h1', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 60,
        lineHeight: 0.98,
        letterSpacing: '-0.03em',
        margin: '0 0 20px',
        maxWidth: 760
      }
    }, 'Every job that ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'carries water.')), React.createElement('p', {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 560,
        margin: '0 0 28px'
      }
    }, 'Residential and light-commercial plumbing, all flat-rate. Here\u2019s exactly what each service covers and where the price starts \u2014 no mystery, no meter.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      href: 'tel:8132407867',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      })
    }, 'Call (813) 240-7867'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      href: 'get-started.html',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      })
    }, 'Get started online'))));
  }
  function Pricing() {
    const {
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const POINTS = [['Tag', 'Flat-rate, not hourly', 'You get the full price before any work starts. No clock running while we figure things out.'], ['FileSignature', 'Approve before we start', 'Nothing happens until you say go. The written estimate is the price \u2014 not a starting bid.'], ['ShieldCheck', 'No trip or diagnostic games', 'Diagnostic fees on water heaters and leaks get credited to the repair when you book it.']];
    return React.createElement('section', {
      id: 'pricing',
      style: {
        position: 'relative',
        background: 'var(--surface-navy)',
        color: '#fff',
        padding: '96px 0',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.04)', 32),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        marginBottom: 18
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, '07'), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'How pricing works')), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 44,
        letterSpacing: '-0.02em',
        lineHeight: 1.04,
        margin: '0 0 44px',
        maxWidth: 680
      }
    }, 'You see the number ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'before we touch a wrench.')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        marginBottom: 36
      }
    }, POINTS.map(([icn, t, b], i) => React.createElement('div', {
      key: t,
      style: {
        padding: '30px 26px',
        borderRight: i < 2 ? '1px solid var(--border-on-dark)' : 'none'
      }
    }, React.createElement(Icon, {
      name: icn,
      size: 24,
      color: 'var(--blue-300)'
    }), React.createElement('h4', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 19,
        color: '#fff',
        margin: '16px 0 8px'
      }
    }, t), React.createElement('p', {
      style: {
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        margin: 0
      }
    }, b)))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      href: 'get-started.html',
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      })
    }, 'Get my flat-rate estimate'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-on-dark-muted)'
      }
    }, 'Financing available \u00B7 0% for 12 mo'))));
  }
  function ServicesPage() {
    return React.createElement('main', null, React.createElement(PageHero, null), React.createElement('section', {
      style: {
        background: 'var(--surface-page)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px 64px'
      }
    }, SERVICES.map((s, i) => React.createElement(Row, {
      key: s[0],
      data: s,
      i
    })))), React.createElement(Pricing, null));
  }
  window.TPServicesPage = ServicesPage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ServicesPage.jsx", error: String((e && e.message) || e) }); }

// site/SiteBookingModal.jsx
try { (() => {
/* Booking modal — 3-step flow (job → details → confirmed). window.TPBooking */
(function () {
  const {
    Icon
  } = window.TPKit;
  const {
    useState
  } = React;
  function Step({
    n,
    label,
    active,
    done
  }) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        background: done ? 'var(--green-500)' : active ? 'var(--color-primary)' : 'var(--gray-200)',
        color: done || active ? '#fff' : 'var(--text-muted)'
      }
    }, done ? React.createElement(Icon, {
      name: 'Check',
      size: 15,
      color: '#fff'
    }) : n), React.createElement('span', {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: active || done ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label));
  }
  function Booking({
    onClose
  }) {
    const {
      Button,
      Input,
      Select,
      Badge
    } = window.ToiletPlusDesignSystem_5215f9;
    const [step, setStep] = useState(1);
    const shell = children => React.createElement('div', {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(7,30,61,0.55)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }
    }, React.createElement('div', {
      onClick: e => e.stopPropagation(),
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        width: 'min(560px, 100%)',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: 'var(--shadow-xl)'
      }
    }, children));
    const header = React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 26px 0'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 18
      }
    }, React.createElement(Step, {
      n: 1,
      label: 'Job',
      active: step === 1,
      done: step > 1
    }), React.createElement(Step, {
      n: 2,
      label: 'Details',
      active: step === 2,
      done: step > 2
    }), React.createElement(Step, {
      n: 3,
      label: 'Done',
      active: step === 3,
      done: false
    })), React.createElement('button', {
      onClick: onClose,
      'aria-label': 'Close',
      style: {
        border: 'none',
        background: 'var(--surface-sunken)',
        width: 34,
        height: 34,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'X',
      size: 18
    })));
    if (step === 1) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'What\u2019s going on?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'A quick heads-up is plenty \u2014 we\u2019ll get the details on the call.'), React.createElement(Select, {
        label: 'Type of job',
        required: true,
        style: {
          marginBottom: 16
        }
      }, React.createElement('option', null, 'Clogged or slow drain'), React.createElement('option', null, 'Water heater (no hot water)'), React.createElement('option', null, 'Leak or burst pipe'), React.createElement('option', null, 'Sewer / main line backup'), React.createElement('option', null, 'Toilet, faucet or fixture'), React.createElement('option', null, 'Something else')), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 22,
          flexWrap: 'wrap'
        }
      }, React.createElement(Input, {
        label: 'ZIP code',
        icon: React.createElement(Icon, {
          name: 'MapPin',
          size: 18
        }),
        placeholder: '33602',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Urgency',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Emergency \u2014 today'), React.createElement('option', null, 'This week'), React.createElement('option', null, 'Just planning ahead'))), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(2),
        iconRight: React.createElement(Icon, {
          name: 'ArrowRight',
          size: 18
        })
      }, 'Continue'))]);
    }
    if (step === 2) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'Where do we text you?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'We\u2019ll confirm a real arrival window \u2014 no phone-tag.'), React.createElement(Input, {
        label: 'Your name',
        required: true,
        placeholder: 'Jane from Bayshore Blvd.',
        style: {
          marginBottom: 16
        }
      }), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 16,
          flexWrap: 'wrap'
        }
      }, React.createElement(Input, {
        label: 'Mobile',
        required: true,
        icon: React.createElement(Icon, {
          name: 'Phone',
          size: 18
        }),
        placeholder: '(813) 240-7867',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Best time',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Morning'), React.createElement('option', null, 'Afternoon'), React.createElement('option', null, 'Evening'))), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 12
        }
      }, React.createElement(Button, {
        variant: 'ghost',
        size: 'lg',
        onClick: () => setStep(1),
        iconLeft: React.createElement(Icon, {
          name: 'ArrowLeft',
          size: 18
        })
      }, 'Back'), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(3)
      }, 'Request my visit')))]);
    }
    return shell(React.createElement('div', {
      style: {
        padding: '40px 32px 36px',
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--green-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
      }
    }, React.createElement(Icon, {
      name: 'CheckCheck',
      size: 36,
      color: 'var(--green-500)'
    })), React.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: 'var(--text-strong)',
        margin: '0 0 10px'
      }
    }, 'You\u2019re on the schedule \uD83D\uDD27'), React.createElement('p', {
      style: {
        fontSize: 16,
        color: 'var(--text-body)',
        lineHeight: 1.55,
        margin: '0 auto 22px',
        maxWidth: 380
      }
    }, 'A real dispatcher is reviewing your request now. Watch for a text from ', React.createElement('strong', null, '(813) 240-7867'), ' with your arrival window \u2014 usually within 15 minutes.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        marginBottom: 26,
        flexWrap: 'wrap'
      }
    }, React.createElement(Badge, {
      tone: 'green',
      icon: React.createElement(Icon, {
        name: 'ShieldCheck',
        size: 13
      })
    }, 'Licensed & insured'), React.createElement(Badge, {
      tone: 'blue',
      icon: React.createElement(Icon, {
        name: 'Tag',
        size: 13
      })
    }, 'Upfront pricing')), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      onClick: onClose
    }, 'Done')));
  }
  window.TPBooking = Booking;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteBookingModal.jsx", error: String((e && e.message) || e) }); }

// site/SiteFooter.jsx
try { (() => {
/* Footer. window.TPFooter */
(function () {
  const {
    Icon
  } = window.TPKit;
  const COLS = [['Services', [['Drain Cleaning', 'services.html#svc-01'], ['Water Heaters', 'services.html#svc-02'], ['Leak Detection', 'services.html#svc-03'], ['Sewer & Main Line', 'services.html#svc-04'], ['Repiping', 'services.html#svc-06']]], ['Company', [['About Toilet Plus', 'index.html#why'], ['Our Plumbers', 'index.html#why'], ['Service Area', 'index.html#area'], ['Careers', '#'], ['Reviews', 'index.html#reviews']]], ['Resources', [['Upfront Pricing', 'services.html#pricing'], ['Get Started', 'get-started.html'], ['Financing', '#'], ['Emergency Guide', '#'], ['Contact', '#']]]];
  function Footer() {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      m,
      t
    } = window.TPKit.bp(window.TPKit.useVW());
    return React.createElement('footer', {
      style: {
        background: '#05152B',
        color: 'var(--text-on-dark-muted)'
      }
    },
    // CTA strip
    React.createElement('div', {
      style: {
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '36px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, React.createElement('span', {
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 22,
      color: '#fff'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22
      }
    }, 'Got a plumbing emergency right now?'), React.createElement('div', {
      style: {
        fontSize: 14
      }
    }, 'We answer the phone 24/7 \u2014 holidays included.'))), React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      href: 'tel:8132407867',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      })
    }, '(813) 240-7867'))),
    // columns
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: m ? '44px 24px 32px' : '56px 24px 40px',
        display: 'grid',
        gridTemplateColumns: m ? '1fr' : t ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, React.createElement('div', null, React.createElement(Logo, {
      size: 34,
      tone: 'dark'
    }), React.createElement('p', {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        margin: '16px 0 18px',
        maxWidth: 300
      }
    }, 'Locally owned plumbers serving Tampa Bay and 30 miles out. Upfront pricing, real people, and work we stand behind.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['Facebook', 'Instagram', 'Youtube', 'Star'].map(s => React.createElement('a', {
      key: s,
      href: '#',
      'aria-label': s,
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        border: '1px solid var(--border-on-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: s,
      size: 17
    }))))), COLS.map(([title, links]) => React.createElement('div', {
      key: title
    }, React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 14,
        letterSpacing: '.02em'
      }
    }, title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, links.map(([l, href]) => React.createElement('a', {
      key: l,
      href,
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        fontSize: 14
      }
    }, l)))))),
    // legal
    React.createElement('div', {
      style: {
        borderTop: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontSize: 13
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '\u00A9 2026 Toilet Plus Plumbing \u00B7 Lic. #CFC1428217 \u00B7 Bonded & Insured'), React.createElement('span', {
      style: {
        display: 'flex',
        gap: 20
      }
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Privacy'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Terms'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Accessibility')))));
  }
  window.TPFooter = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// site/SiteGuarantees.jsx
try { (() => {
/* Guarantee band (navy) — numbered "no fine print" promises. window.TPGuarantees */
(function () {
  const ITEMS = [['01', 'Upfront, flat-rate pricing', 'You approve the price before we lift a wrench. No hourly meter running, no surprise line items on the invoice.'], ['02', 'On time, or we call you', 'A real arrival window, and a text when we\u2019re 30 minutes out. Your whole day doesn\u2019t revolve around waiting on us.'], ['03', 'Licensed & background-checked', 'Every plumber is licensed, insured, and vetted. We treat your home like our own mom lives there.'], ['04', '2-year workmanship warranty', 'If something we fixed acts up, we come back and make it right. No fine print, no fight, no re-trip fee.']];
  function Guarantees() {
    const {
      Icon,
      Stamp,
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      id: 'why',
      style: {
        position: 'relative',
        background: 'var(--surface-navy)',
        color: '#fff',
        padding: '100px 0',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.04)', 32),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 56
      }
    },
    // left header
    React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        marginBottom: 18
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, '02'), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'The Toilet Plus promise')), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: '0 0 18px'
      }
    }, 'No surprises. No upsell. ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'Just the fix.')), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.6,
        color: 'var(--text-on-dark-muted)',
        margin: '0 0 26px',
        maxWidth: 420
      }
    }, 'We\u2019re a local shop, not a call-center franchise. Same plumbers, same honest read, and a price we stand behind \u2014 every single visit.'), React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: '#fff',
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px'
      }
    }, React.createElement(Icon, {
      name: 'FileSignature',
      size: 16,
      color: 'var(--blue-300)'
    }), 'Written estimate, every job')),
    // right numbered grid
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, ITEMS.map(([n, t, b], i) => React.createElement('div', {
      key: n,
      style: {
        padding: '26px 24px',
        borderRight: i % 2 === 0 ? '1px solid var(--border-on-dark)' : 'none',
        borderBottom: i < 2 ? '1px solid var(--border-on-dark)' : 'none'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-accent)',
        marginBottom: 12,
        letterSpacing: '.06em'
      }
    }, n), React.createElement('h4', {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: '#fff',
        lineHeight: 1.15
      }
    }, t), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.5,
        color: 'var(--text-on-dark-muted)'
      }
    }, b))))));
  }
  window.TPGuarantees = Guarantees;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteGuarantees.jsx", error: String((e && e.message) || e) }); }

// site/SiteHeader.jsx
try { (() => {
/* Sticky site header with REAL multi-page nav. window.TPSiteHeader
   props: onBook(), current ('home'|'services'|'get-started') for active state. */
(function () {
  const NAV = [['Services', 'services.html', 'services'], ['Why Us', 'index.html#why', null], ['Pricing', 'services.html#pricing', null], ['Reviews', 'index.html#reviews', null], ['Get Started', 'get-started.html', 'get-started']];
  function SiteHeader({
    onBook,
    current
  }) {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon,
      useVW
    } = window.TPKit;
    const {
      useState
    } = React;
    const vw = useVW();
    const mobile = vw < 900;
    const [open, setOpen] = useState(false);
    return React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-soft)'
      }
    },
    // utility strip
    React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: mobile ? 'center' : 'space-between',
        alignItems: 'center',
        fontSize: 13,
        gap: 18
      }
    }, !mobile && React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-on-dark-muted)'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 15,
      color: '#7FE3B0'
    }), 'Licensed, bonded & insured \u00B7 Lic. #CFC1428217'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 18
      }
    }, !mobile && React.createElement('a', {
      href: 'index.html#area',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: 14
    }), 'Find your location'), React.createElement('a', {
      href: 'tel:8132407867',
      style: {
        color: '#fff',
        fontWeight: 700,
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 14,
      color: 'var(--color-accent)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '(813) 240-7867'))))),
    // main bar
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        height: mobile ? 64 : 76,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(Logo, {
      size: mobile ? 32 : 36,
      href: 'index.html'
    }), !mobile && React.createElement('nav', {
      style: {
        display: 'flex',
        gap: 28,
        alignItems: 'center'
      }
    }, NAV.map(([label, href, key]) => {
      const active = key && key === current;
      return React.createElement('a', {
        key: label,
        href,
        style: {
          fontSize: 15,
          fontWeight: 600,
          textDecoration: 'none',
          color: active ? 'var(--color-primary)' : 'var(--text-body)',
          borderBottom: active ? '2px solid var(--color-primary)' : '2px solid transparent',
          paddingBottom: 2
        }
      }, label);
    })), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, !mobile && React.createElement(Button, {
      variant: 'accent',
      size: 'sm',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 16
      }),
      onClick: onBook
    }, 'Book Online'), mobile && React.createElement('button', {
      'aria-label': 'Menu',
      'aria-expanded': open,
      onClick: () => setOpen(o => !o),
      style: {
        border: '1px solid var(--border-strong)',
        background: '#fff',
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-strong)'
      }
    }, React.createElement(Icon, {
      name: open ? 'X' : 'Menu',
      size: 22
    })))),
    // mobile dropdown
    mobile && open && React.createElement('nav', {
      style: {
        borderTop: '1px solid var(--border-soft)',
        background: '#fff',
        padding: '8px 16px 18px',
        display: 'flex',
        flexDirection: 'column'
      }
    }, NAV.map(([label, href, key]) => {
      const active = key && key === current;
      return React.createElement('a', {
        key: label,
        href,
        onClick: () => setOpen(false),
        style: {
          fontSize: 16,
          fontWeight: 600,
          textDecoration: 'none',
          padding: '13px 8px',
          borderBottom: '1px solid var(--border-soft)',
          color: active ? 'var(--color-primary)' : 'var(--text-body)'
        }
      }, label);
    }), React.createElement('div', {
      style: {
        marginTop: 16
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      block: true,
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: () => {
        setOpen(false);
        onBook && onBook();
      }
    }, 'Book Online'))));
  }
  window.TPSiteHeader = SiteHeader;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// site/SiteHero.jsx
try { (() => {
/* Hero — navy band, blueprint grid, editorial headline + work-order quote ticket. window.TPHero */
(function () {
  function Hero({
    onBook
  }) {
    const {
      Button,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon,
      Stamp,
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 72%)',
        color: '#fff',
        overflow: 'hidden'
      }
    },
    // blueprint grid
    React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 32),
        pointerEvents: 'none'
      }
    }),
    // big ghost wordmark watermark
    React.createElement('div', {
      style: {
        position: 'absolute',
        right: -40,
        bottom: -70,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 320,
        lineHeight: 1,
        color: 'rgba(255,255,255,0.03)',
        pointerEvents: 'none',
        letterSpacing: '-0.04em'
      }
    }, '+'), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '76px 24px 88px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 64,
        alignItems: 'center'
      }
    },
    // left
    React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 26,
        paddingBottom: 18,
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement(Stamp, {
      tone: 'accent'
    }, '24/7 Emergency'), React.createElement('span', {
      style: {
        width: 1,
        height: 14,
        background: 'var(--border-on-dark)'
      }
    }), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Licensed #CFC1428217'), React.createElement('span', {
      style: {
        width: 1,
        height: 14,
        background: 'var(--border-on-dark)'
      }
    }), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Same-Day')), React.createElement('h1', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 68,
        lineHeight: 0.98,
        letterSpacing: '-0.03em',
        margin: '0 0 22px',
        color: '#fff'
      }
    }, 'Burst pipe.', React.createElement('br'), 'Slow drain.', React.createElement('br'), React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'We show up fast.')), React.createElement('p', {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 500,
        margin: '0 0 30px'
      }
    }, 'Local, licensed plumbers for drain cleaning, water heaters, leak detection, and sewer lines \u2014 with upfront, flat-rate pricing. Real people, honest answers, no surprise fees.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 28
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      }),
      href: 'tel:8132407867'
    }, 'Call (813) 240-7867'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: onBook
    }, 'Book online')),
    // rating stamp line
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 18,
      height: 18,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13.5,
        color: '#fff',
        fontWeight: 600
      }
    }, '4.9'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-on-dark-muted)'
      }
    }, '/ 2,148 Google reviews'))),
    // right — work-order quote ticket
    React.createElement('div', {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-xl)',
        color: 'var(--text-body)',
        overflow: 'hidden'
      }
    },
    // ticket header bar
    React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff',
        padding: '14px 22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Icon, {
      name: 'ClipboardList',
      size: 15,
      color: 'var(--blue-300)'
    }), 'Quick Quote'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--blue-300)'
      }
    }, 'EST. REPLY \u00B7 15 MIN')),
    // perforation
    React.createElement('div', {
      style: {
        height: 0,
        borderTop: '2px dashed var(--border-strong)',
        margin: '0'
      }
    }), React.createElement('div', {
      style: {
        padding: '24px 22px 26px'
      }
    }, React.createElement('p', {
      style: {
        margin: '0 0 18px',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        lineHeight: 1.5
      }
    }, 'Drop your ZIP and what\u2019s wrong \u2014 a real dispatcher texts back availability in minutes.'), React.createElement(Input, {
      label: 'ZIP code',
      icon: React.createElement(Icon, {
        name: 'MapPin',
        size: 18
      }),
      placeholder: '33602',
      style: {
        marginBottom: 16
      }
    }), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      onClick: onBook,
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      })
    }, 'Check availability'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 18,
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1px solid var(--border-soft)',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 14,
      color: 'var(--green-500)'
    }), 'No spam'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Tag',
      size: 14,
      color: 'var(--green-500)'
    }), 'Flat-rate'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Clock',
      size: 14,
      color: 'var(--green-500)'
    }), '24/7'))))));
  }
  window.TPHero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// site/SiteReviews.jsx
try { (() => {
/* Reviews — editorial header + flat testimonial cards. window.TPReviews */
(function () {
  const REVIEWS = [[5, 'Water heater died on a Sunday and they had hot water back by dinner. Quoted the price before starting \u2014 no games, no Sunday surcharge.', 'Marcus T.', 'South Tampa'], [5, 'Snaked a drain two other companies wanted to replace. Saved me about $1,800 and explained exactly what was going on in the line.', 'Priya R.', 'St. Petersburg'], [5, 'Found a slab leak fast, patched the drywall back, and left the place cleaner than they found it. Genuinely kind crew.', 'Dave & Lin', 'Riverview']];
  function Reviews() {
    const {
      ReviewCard
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Section,
      SectionHead,
      Icon
    } = window.TPKit;
    return React.createElement(Section, {
      id: 'reviews'
    }, React.createElement(SectionHead, {
      index: '03',
      kicker: 'Neighbors, not testimonials',
      title: 'Why folks keep our ',
      accentTitle: 'number saved.',
      intro: 'Real reviews from real service calls around the metro. We read every one \u2014 the good and the "you missed a spot."'
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18,
        marginBottom: 36
      }
    }, REVIEWS.map(([r, q, a, l]) => React.createElement(ReviewCard, {
      key: a,
      rating: r,
      quote: q,
      author: a,
      location: l,
      source: 'Google',
      style: {
        boxShadow: 'none',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)'
      }
    }))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        paddingTop: 24,
        borderTop: '1px solid var(--border-strong)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'Star',
      size: 16,
      color: '#FFB400'
    }), React.createElement('span', null, '4.9 average across 2,148 Google reviews'), React.createElement('a', {
      href: '#',
      style: {
        marginLeft: 'auto',
        color: 'var(--color-primary)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700
      }
    }, 'Read all reviews', React.createElement(Icon, {
      name: 'ArrowRight',
      size: 15
    }))));
  }
  window.TPReviews = Reviews;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteReviews.jsx", error: String((e && e.message) || e) }); }

// site/SiteServices.jsx
try { (() => {
/* Services grid section with left-aligned numbered header. window.TPServices */
(function () {
  const {
    Section,
    SectionHead,
    Icon
  } = window.TPKit;
  const SERVICES = [['01', 'Droplets', 'Drain Cleaning', 'Slow sink or backed-up shower? We snake, hydro-jet, and camera the line so the clog actually stays gone \u2014 not just pushed down.'], ['02', 'Flame', 'Water Heaters', 'No hot water this morning? We repair and replace tank and tankless units, size them right, and haul the old one away.'], ['03', 'Waves', 'Leak Detection', 'Mystery water spot or a spike on the bill? We trace slab and pinhole leaks before they wreck your drywall.'], ['04', 'Pipette', 'Sewer & Main Line', 'Gurgling drains across the house usually means the main. We camera-inspect and clear roots, bellies, and breaks.'], ['05', 'ShowerHead', 'Fixtures & Toilets', 'Running toilet, dripping faucet, wobbly flange \u2014 the small stuff that wastes water and nags at you. Done same day.'], ['06', 'Gauge', 'Repiping & Water Quality', 'Low pressure or rusty water? We repipe old galvanized lines and install filtration so every tap runs clean.']];
  function Services() {
    const {
      ServiceCard
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement(Section, {
      id: 'services',
      tone: 'muted'
    }, React.createElement(SectionHead, {
      index: '01',
      kicker: 'What we fix',
      title: 'Plumbing services, done right ',
      accentTitle: 'the first time.',
      intro: 'From a dripping faucet to a full repipe \u2014 residential and light commercial. If it carries water, we work on it.'
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      }
    }, SERVICES.map(([idx, ic, title, body]) => React.createElement(ServiceCard, {
      key: title,
      index: idx,
      icon: React.createElement(Icon, {
        name: ic,
        size: 30,
        stroke: 1.75
      }),
      title,
      href: 'services.html#svc-' + idx
    }, body))));
  }
  window.TPServices = Services;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteServices.jsx", error: String((e && e.message) || e) }); }

// site/SiteSpecStrip.jsx
try { (() => {
/* Spec stat strip — industrial band of big mono figures. window.TPSpecStrip */
(function () {
  const STATS = [['18', 'yrs', 'In the trade, locally owned'], ['~1', 'hr', 'Average arrival window'], ['12k', '+', 'Jobs done & warrantied'], ['4.9', '\u2605', '2,148 verified reviews']];
  function SpecStrip() {
    const {
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'var(--color-primary)',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.08)', 30),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    }, STATS.map(([n, unit, label], i) => React.createElement('div', {
      key: label,
      style: {
        padding: '34px 28px',
        borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        color: '#fff'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        letterSpacing: '-0.03em',
        lineHeight: 1
      }
    }, n), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 20,
        fontWeight: 600,
        color: 'var(--blue-100)'
      }
    }, unit)), React.createElement('div', {
      style: {
        marginTop: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.78)',
        lineHeight: 1.4
      }
    }, label))))));
  }
  window.TPSpecStrip = SpecStrip;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/SiteSpecStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingFunnel.jsx
try { (() => {
/* Toilet Plus — agentic booking funnel. "Plus", an AI dispatcher, runs a structured
   conversation: ZIP lookup → smart intake & urgency triage → auto-schedule nearest
   plumber → flat-rate auto-quote → confirm. window.TPBookingFunnel */
(function () {
  const {
    useState,
    useRef,
    useEffect
  } = React;
  const FUNNEL_CSS = `
  @keyframes tpFadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
  @keyframes tpBlink { 0%,80%,100% { opacity:.25; } 40% { opacity:1; } }
  .tp-msg { animation: tpFadeUp .28s var(--ease-out) both; }
  .tp-dot { width:6px; height:6px; border-radius:50%; background:var(--gray-400); display:inline-block; animation: tpBlink 1.2s infinite both; }
  .tp-chip { font-family:var(--font-body); font-size:14.5px; font-weight:600; color:var(--text-strong);
    background:#fff; border:1.5px solid var(--border-strong); border-radius:var(--radius-md);
    padding:13px 15px; text-align:left; cursor:pointer; display:flex; align-items:center; gap:11px;
    transition:border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out); }
  .tp-chip:hover { border-color:var(--color-primary); background:var(--blue-50); }
  .tp-chip svg { color:var(--color-primary); }
  .tp-slot { text-align:left; cursor:pointer; background:#fff; border:1.5px solid var(--border-strong);
    border-radius:var(--radius-md); padding:14px 16px; display:flex; align-items:center; justify-content:space-between; gap:12px;
    transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out); }
  .tp-slot:hover { border-color:var(--color-primary); box-shadow:var(--shadow-sm); }
  `;
  function AgentAvatar() {
    return React.createElement('span', {
      style: {
        width: 32,
        height: 32,
        flex: 'none',
        borderRadius: 8,
        background: 'linear-gradient(150deg,#1466CC,#0B3D7E)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 20,
        lineHeight: 1
      }
    }, '+');
  }
  function BookingFunnel() {
    const {
      Button,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon
    } = window.TPKit;
    const D = window.TPFunnelData;
    const [messages, setMessages] = useState([{
      id: 1,
      from: 'agent',
      kind: 'text',
      name: true,
      text: 'Hey \u2014 I\u2019m Plus, the Toilet Plus dispatcher. I\u2019ll get a licensed plumber headed your way in a couple minutes. First up: what\u2019s your ZIP code?'
    }]);
    const [typing, setTyping] = useState(false);
    const [phase, setPhase] = useState('zip');
    const [data, setData] = useState({});
    const [zip, setZip] = useState('');
    const [other, setOther] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const scroller = useRef();
    const idRef = useRef(2);
    useEffect(() => {
      if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
    }, [messages, typing, phase]);
    const nid = () => idRef.current++;
    const pushUser = text => setMessages(m => [...m, {
      id: nid(),
      from: 'user',
      text
    }]);

    // run agent: hide controls, type, then drop messages + advance
    function agent(msgs, nextPhase, patch, delay = 750) {
      setPhase('_wait');
      setTyping(true);
      if (patch) setData(d => ({
        ...d,
        ...patch
      }));
      setTimeout(() => {
        setTyping(false);
        setMessages(m => [...m, ...msgs.map(x => ({
          id: nid(),
          from: 'agent',
          ...x
        }))]);
        setPhase(nextPhase);
      }, delay);
    }

    // --- step handlers ---
    function submitZip() {
      const res = D.lookupZip(zip);
      pushUser(zip || '\u2014');
      if (!res.covered) {
        agent([{
          kind: 'text',
          text: 'Hmm, that doesn\u2019t look like a 5-digit ZIP. Mind trying again?'
        }], 'zip');
        return;
      }
      agent([{
        kind: 'text',
        name: true,
        text: `Good news \u2014 we\u2019ve got crews in ${res.area}. ${res.plumber.name}\u2019s ${res.plumber.crew} runs your block.`
      }, {
        kind: 'note',
        text: `matched nearest licensed pro \u00b7 truck ${res.plumber.truck} \u00b7 \u2605 ${res.plumber.rating}`
      }, {
        kind: 'text',
        text: 'So I can triage it right \u2014 what\u2019s going on over there?'
      }], 'service', {
        zip,
        area: res.area,
        plumber: res.plumber
      });
      setZip('');
    }
    function pickService(id) {
      const s = D.SERVICES[id];
      pushUser(s.label);
      const est = D.estimateFor(id);
      const msgs = [{
        kind: 'text',
        name: true,
        text: s.react
      }, {
        kind: 'text',
        text: s.diagnostic.q
      }];
      agent(msgs, id === 'other' ? 'diagnostic_text' : 'diagnostic', {
        service: id,
        serviceLabel: s.label,
        estimate: est
      });
    }
    function resolveDiagnostic(label, urgency, note) {
      pushUser(label);
      const u = D.URGENCY[urgency] || D.URGENCY.soon;
      const est = data.estimate || D.estimateFor(data.service);
      const slots = D.slotsFor(urgency, data.plumber);
      const msgs = [{
        kind: 'text',
        name: true,
        text: u.read
      }];
      if (note) msgs.push({
        kind: 'note',
        text: note
      });
      msgs.push({
        kind: 'note',
        text: `routing ${data.plumber ? data.plumber.name : 'a pro'} \u00b7 checking today\u2019s board \u00b7 pricing from flat-rate book`
      });
      msgs.push({
        kind: 'estimate',
        est
      });
      msgs.push({
        kind: 'text',
        text: 'Here are the soonest windows I can hold for you \u2014 estimate above is locked before anyone turns a wrench:'
      });
      agent(msgs, 'schedule', {
        diagnostic: label,
        urgency,
        estimate: est,
        slots
      }, 950);
    }
    function submitOther() {
      if (!other.trim()) return;
      // simple urgency heuristic
      const t = other.toLowerCase();
      const urgency = /burst|flood|gushing|sewage|no water|emergency/.test(t) ? 'emergency' : /leak|hot water|backed up/.test(t) ? 'today' : 'soon';
      resolveDiagnostic(other.trim(), urgency, null);
      setOther('');
    }
    function pickSlot(slot) {
      pushUser(slot.when + (slot.eta ? ' \u00b7 ' + slot.eta : ''));
      agent([{
        kind: 'text',
        name: true,
        text: `Locked it in \u2014 ${slot.when}. ${data.plumber.name} will text when they roll out.`
      }, {
        kind: 'text',
        text: 'Last thing and you\u2019re set: who should I send the confirmation to?'
      }], 'contact', {
        slot
      });
    }
    function submitContact() {
      if (!name.trim() || !phone.trim()) return;
      pushUser(`${name} \u00b7 ${phone}`);
      agent([{
        kind: 'text',
        name: true,
        text: `You\u2019re booked, ${name.split(' ')[0]}. ${data.plumber.name} is on the schedule for ${data.slot.when}, and I\u2019ve texted a confirmation to ${phone}.`
      }, {
        kind: 'text',
        text: 'You\u2019ll get an ETA text when they head out, and the flat-rate estimate is honored on arrival. Anything changes, just reply to that text \u2014 I\u2019m on it 24/7.'
      }], 'done', {
        name,
        phone
      });
    }

    // --- render control for current phase ---
    function Control() {
      if (phase === 'zip') {
        return React.createElement('div', {
          style: {
            display: 'flex',
            gap: 10,
            alignItems: 'flex-end'
          }
        }, React.createElement('div', {
          style: {
            flex: 1
          }
        }, React.createElement(Input, {
          label: 'ZIP code',
          icon: React.createElement(Icon, {
            name: 'MapPin',
            size: 18
          }),
          placeholder: 'e.g. 98103',
          value: zip,
          onChange: e => setZip(e.target.value),
          onKeyDown: e => e.key === 'Enter' && submitZip(),
          inputMode: 'numeric',
          maxLength: 5
        })), React.createElement(Button, {
          variant: 'primary',
          size: 'lg',
          onClick: submitZip,
          iconRight: React.createElement(Icon, {
            name: 'ArrowRight',
            size: 18
          })
        }, 'Start'));
      }
      if (phase === 'service') {
        return React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10
          }
        }, D.SERVICE_ORDER.map(id => React.createElement('button', {
          key: id,
          className: 'tp-chip',
          onClick: () => pickService(id)
        }, React.createElement(Icon, {
          name: D.SERVICES[id].icon,
          size: 19
        }), D.SERVICES[id].label)));
      }
      if (phase === 'diagnostic') {
        const opts = D.SERVICES[data.service].diagnostic.options || [];
        return React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, opts.map((o, i) => React.createElement('button', {
          key: i,
          className: 'tp-chip',
          onClick: () => resolveDiagnostic(o.label, o.urgency, o.note)
        }, React.createElement(Icon, {
          name: 'ChevronRight',
          size: 18
        }), o.label)));
      }
      if (phase === 'diagnostic_text') {
        return React.createElement('div', {
          style: {
            display: 'flex',
            gap: 10,
            alignItems: 'flex-end'
          }
        }, React.createElement('div', {
          style: {
            flex: 1
          }
        }, React.createElement(Input, {
          label: 'Tell me what\u2019s going on',
          placeholder: 'e.g. water shut-off valve won\u2019t close',
          value: other,
          onChange: e => setOther(e.target.value),
          onKeyDown: e => e.key === 'Enter' && submitOther()
        })), React.createElement(Button, {
          variant: 'primary',
          size: 'lg',
          onClick: submitOther,
          iconRight: React.createElement(Icon, {
            name: 'ArrowRight',
            size: 18
          })
        }, 'Send'));
      }
      if (phase === 'schedule') {
        return React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }
        }, (data.slots || []).map(s => React.createElement('button', {
          key: s.id,
          className: 'tp-slot',
          onClick: () => pickSlot(s)
        }, React.createElement('span', null, React.createElement('span', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
            fontSize: 15.5,
            color: 'var(--text-strong)'
          }
        }, s.when, s.hot && React.createElement('span', {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '.06em',
            color: 'var(--color-accent)',
            border: '1px solid var(--red-300)',
            borderRadius: 4,
            padding: '2px 5px',
            textTransform: 'uppercase'
          }
        }, 'Soonest')), React.createElement('span', {
          style: {
            display: 'block',
            fontSize: 13,
            color: 'var(--text-muted)',
            marginTop: 3
          }
        }, s.detail)), React.createElement('span', {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }
        }, s.eta && React.createElement('span', {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--color-primary)'
          }
        }, s.eta), React.createElement(Icon, {
          name: 'ArrowRight',
          size: 18,
          color: 'var(--color-primary)'
        })))));
      }
      if (phase === 'contact') {
        return React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, React.createElement('div', {
          style: {
            display: 'flex',
            gap: 12
          }
        }, React.createElement(Input, {
          label: 'Your name',
          placeholder: 'Jane from Maple St.',
          value: name,
          onChange: e => setName(e.target.value),
          style: {
            flex: 1
          }
        }), React.createElement(Input, {
          label: 'Mobile',
          icon: React.createElement(Icon, {
            name: 'Phone',
            size: 18
          }),
          placeholder: '(555) 240-7867',
          value: phone,
          onChange: e => setPhone(e.target.value),
          style: {
            flex: 1
          }
        })), React.createElement(Button, {
          variant: 'primary',
          size: 'lg',
          block: true,
          onClick: submitContact,
          iconRight: React.createElement(Icon, {
            name: 'Check',
            size: 18
          })
        }, 'Confirm booking'), React.createElement('p', {
          style: {
            margin: 0,
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.03em',
            color: 'var(--text-faint)'
          }
        }, 'No charge to book \u00b7 flat-rate quoted before any work'));
      }
      if (phase === 'done') {
        return React.createElement('div', {
          style: {
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap'
          }
        }, React.createElement(Button, {
          variant: 'primary',
          size: 'lg',
          iconLeft: React.createElement(Icon, {
            name: 'CalendarPlus',
            size: 18
          })
        }, 'Add to calendar'), React.createElement(Button, {
          variant: 'outline',
          size: 'lg',
          iconLeft: React.createElement(Icon, {
            name: 'MessageSquare',
            size: 18
          })
        }, 'Text me the ticket'), React.createElement(Button, {
          variant: 'ghost',
          size: 'lg',
          onClick: () => window.location.reload(),
          iconLeft: React.createElement(Icon, {
            name: 'RotateCcw',
            size: 18
          })
        }, 'Start over'));
      }
      return null;
    }

    // --- message renderers ---
    function renderMsg(m) {
      if (m.from === 'user') {
        return React.createElement('div', {
          key: m.id,
          className: 'tp-msg',
          style: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 12
          }
        }, React.createElement('div', {
          style: {
            maxWidth: '78%',
            background: 'var(--color-primary)',
            color: '#fff',
            padding: '11px 15px',
            borderRadius: '14px 14px 4px 14px',
            fontSize: 15,
            lineHeight: 1.45,
            fontWeight: 500
          }
        }, m.text));
      }
      if (m.kind === 'note') {
        return React.createElement('div', {
          key: m.id,
          className: 'tp-msg',
          style: {
            display: 'flex',
            gap: 10,
            margin: '-4px 0 12px 42px'
          }
        }, React.createElement('span', {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 11.5,
            color: 'var(--text-faint)',
            letterSpacing: '.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6
          }
        }, React.createElement('span', {
          style: {
            color: 'var(--color-primary)'
          }
        }, '\u21b3'), m.text));
      }
      if (m.kind === 'estimate') {
        const e = m.est || {};
        return React.createElement('div', {
          key: m.id,
          className: 'tp-msg',
          style: {
            display: 'flex',
            gap: 10,
            marginBottom: 12
          }
        }, React.createElement('span', {
          style: {
            width: 32,
            flex: 'none'
          }
        }), React.createElement('div', {
          style: {
            maxWidth: '82%',
            background: '#fff',
            border: '1px solid var(--border-strong)',
            borderRadius: '4px 14px 14px 14px',
            padding: 16,
            boxShadow: 'var(--shadow-sm)'
          }
        }, React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5,
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: 8
          }
        }, React.createElement(Icon, {
          name: 'Tag',
          size: 14,
          color: 'var(--color-primary)'
        }), 'Flat-rate estimate'), React.createElement('div', {
          style: {
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 30,
            letterSpacing: '-0.02em',
            color: 'var(--text-strong)',
            lineHeight: 1
          }
        }, e.text || 'Quoted on site'), React.createElement('p', {
          style: {
            margin: '8px 0 0',
            fontSize: 13,
            lineHeight: 1.45,
            color: 'var(--text-muted)'
          }
        }, e.note)));
      }
      // agent text
      return React.createElement('div', {
        key: m.id,
        className: 'tp-msg',
        style: {
          display: 'flex',
          gap: 10,
          marginBottom: 12,
          alignItems: 'flex-start'
        }
      }, React.createElement(AgentAvatar, null), React.createElement('div', {
        style: {
          maxWidth: '82%'
        }
      }, m.name && React.createElement('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          marginBottom: 4
        }
      }, React.createElement('span', {
        style: {
          fontWeight: 700,
          fontSize: 13,
          color: 'var(--text-strong)'
        }
      }, 'Plus'), React.createElement('span', {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 9.5,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: '#fff',
          background: 'var(--blue-700)',
          borderRadius: 3,
          padding: '2px 5px'
        }
      }, 'AI Dispatcher')), React.createElement('div', {
        style: {
          background: '#fff',
          border: '1px solid var(--border-soft)',
          padding: '11px 15px',
          borderRadius: '4px 14px 14px 14px',
          fontSize: 15,
          lineHeight: 1.5,
          color: 'var(--text-strong)',
          boxShadow: 'var(--shadow-xs)'
        }
      }, m.text)));
    }
    const stepNo = {
      zip: 1,
      service: 2,
      diagnostic: 3,
      diagnostic_text: 3,
      schedule: 4,
      contact: 5,
      done: 5
    };
    const lastStepRef = useRef(1);
    if (stepNo[phase]) lastStepRef.current = stepNo[phase];
    const curStep = lastStepRef.current;
    return React.createElement('div', {
      style: {
        minHeight: '100vh',
        background: 'var(--surface-muted)',
        display: 'flex',
        flexDirection: 'column'
      }
    },
    // top bar
    React.createElement('header', {
      style: {
        background: '#fff',
        borderBottom: '1px solid var(--border-soft)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1160,
        margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(window.ToiletPlusDesignSystem_5215f9.Logo, {
      size: 30,
      href: '../website/index.html'
    }), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, `Step ${Math.min(curStep, 5)} / 5`), React.createElement('span', {
      style: {
        width: 120,
        height: 5,
        background: 'var(--gray-200)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, React.createElement('span', {
      style: {
        display: 'block',
        height: '100%',
        width: `${Math.min(curStep, 5) / 5 * 100}%`,
        background: 'var(--color-primary)',
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    }))), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 14,
      color: 'var(--color-accent)'
    }), '(555) 240-7867'))),
    // body
    React.createElement('div', {
      style: {
        flex: 1,
        maxWidth: 1160,
        width: '100%',
        margin: '0 auto',
        padding: '28px 24px 40px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 360px',
        gap: 28,
        alignItems: 'start'
      }
    },
    // conversation column
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 160px)'
      }
    }, React.createElement('div', {
      ref: scroller,
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: 4,
        maxHeight: 'calc(100vh - 230px)'
      }
    }, messages.map(renderMsg), typing && React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10,
        marginBottom: 12
      }
    }, React.createElement(AgentAvatar, null), React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-soft)',
        padding: '14px 16px',
        borderRadius: '4px 14px 14px 14px',
        display: 'inline-flex',
        gap: 5,
        boxShadow: 'var(--shadow-xs)'
      }
    }, React.createElement('span', {
      className: 'tp-dot'
    }), React.createElement('span', {
      className: 'tp-dot',
      style: {
        animationDelay: '.2s'
      }
    }), React.createElement('span', {
      className: 'tp-dot',
      style: {
        animationDelay: '.4s'
      }
    })))),
    // control dock
    React.createElement('div', {
      style: {
        marginTop: 16,
        paddingTop: 16,
        borderTop: '1px solid var(--border-soft)'
      }
    }, React.createElement(Control, null))),
    // ticket
    React.createElement(window.TPTicket, {
      data,
      status: phase === 'done' ? 'confirmed' : 'draft',
      ticketNo: 'TP-2049'
    })));
  }

  // inject styles once
  if (!document.getElementById('tp-funnel-css')) {
    const el = document.createElement('style');
    el.id = 'tp-funnel-css';
    el.textContent = FUNNEL_CSS;
    document.head.appendChild(el);
  }
  window.TPBookingFunnel = BookingFunnel;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingFunnel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Ticket.jsx
try { (() => {
/* Live Job Ticket — work-order summary that fills in as the funnel progresses. window.TPTicket */
(function () {
  function Row({
    icon,
    label,
    children,
    filled
  }) {
    const {
      Icon
    } = window.TPKit;
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        padding: '13px 0',
        borderBottom: '1px solid var(--border-soft)'
      }
    }, React.createElement('span', {
      style: {
        color: filled ? 'var(--color-primary)' : 'var(--text-faint)',
        display: 'flex',
        marginTop: 1
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 16
    })), React.createElement('div', {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        marginBottom: 3
      }
    }, label), React.createElement('div', {
      style: {
        fontSize: 14,
        fontWeight: filled ? 600 : 400,
        color: filled ? 'var(--text-strong)' : 'var(--text-faint)',
        lineHeight: 1.35
      }
    }, filled ? children : 'Pending\u2026')));
  }
  function Ticket({
    data,
    status,
    ticketNo
  }) {
    const {
      Icon,
      Badge
    } = {
      Icon: window.TPKit.Icon,
      Badge: window.ToiletPlusDesignSystem_5215f9.Badge
    };
    const confirmed = status === 'confirmed';
    const u = data.urgency && window.TPFunnelData.URGENCY[data.urgency];
    return React.createElement('aside', {
      style: {
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }
    }, React.createElement('div', {
      style: {
        background: '#fff',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }
    },
    // header bar
    React.createElement('div', {
      style: {
        background: confirmed ? 'var(--green-500)' : 'var(--blue-900)',
        color: '#fff',
        padding: '13px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Icon, {
      name: 'ClipboardList',
      size: 15
    }), 'Job Ticket'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        opacity: 0.85
      }
    }, '#' + ticketNo)),
    // perforation
    React.createElement('div', {
      style: {
        borderTop: '2px dashed var(--border-strong)'
      }
    }),
    // status stamp
    React.createElement('div', {
      style: {
        padding: '14px 18px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, 'Status'), confirmed ? React.createElement(Badge, {
      tone: 'green',
      icon: React.createElement(Icon, {
        name: 'CheckCheck',
        size: 13
      })
    }, 'Confirmed') : u ? React.createElement(Badge, {
      tone: u.tone,
      icon: React.createElement(Icon, {
        name: 'Loader',
        size: 13
      })
    }, u.label + ' \u00b7 Draft') : React.createElement(Badge, {
      tone: 'gray'
    }, 'Draft')), React.createElement('div', {
      style: {
        padding: '4px 18px 16px'
      }
    }, React.createElement(Row, {
      icon: 'MapPin',
      label: 'Location',
      filled: !!data.area
    }, data.area ? data.area + ' \u00b7 ' + data.zip : null), React.createElement(Row, {
      icon: 'Wrench',
      label: 'Service',
      filled: !!data.serviceLabel
    }, data.serviceLabel), React.createElement(Row, {
      icon: 'Stethoscope',
      label: 'Details',
      filled: !!data.diagnostic
    }, data.diagnostic), React.createElement(Row, {
      icon: 'HardHat',
      label: 'Assigned plumber',
      filled: !!data.plumber
    }, data.plumber ? React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7
      }
    }, React.createElement('span', {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--blue-100)',
        color: 'var(--blue-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 11,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, data.plumber.initial), data.plumber.name + ' \u00b7 ' + data.plumber.crew) : null), React.createElement(Row, {
      icon: 'CalendarClock',
      label: 'Window',
      filled: !!data.slot
    }, data.slot && data.slot.when + (data.slot.eta ? ' \u00b7 ' + data.slot.eta : '')), React.createElement(Row, {
      icon: 'Tag',
      label: 'Flat-rate estimate',
      filled: !!data.estimate
    }, data.estimate ? React.createElement('span', null, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: 'var(--color-primary)'
      }
    }, data.estimate.text)) : null), React.createElement(Row, {
      icon: 'User',
      label: 'Contact',
      filled: !!data.name
    }, data.name && data.name + (data.phone ? ' \u00b7 ' + data.phone : ''))),
    // confirmed comms timeline
    confirmed && React.createElement('div', {
      style: {
        background: 'var(--green-50)',
        borderTop: '1px solid color-mix(in srgb, var(--green-500) 22%, transparent)',
        padding: '14px 18px'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--green-500)',
        marginBottom: 10,
        fontWeight: 600
      }
    }, 'What happens next'), [['MessageSquare', 'Confirmation text sent now'], ['Navigation', 'ETA text when the plumber rolls out'], ['Star', 'Follow-up + review request after']].map(([ic, t]) => React.createElement('div', {
      key: t,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'center',
        padding: '4px 0',
        fontSize: 13,
        color: 'var(--gray-700)'
      }
    }, React.createElement(window.TPKit.Icon, {
      name: ic,
      size: 14,
      color: 'var(--green-500)'
    }), t)))),
    // trust footer
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        marginTop: 14,
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 5,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 13
    }), 'Encrypted'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 5,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Lock',
      size: 13
    }), 'No spam, ever')));
  }
  window.TPTicket = Ticket;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Ticket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/funnel-data.js
try { (() => {
/* Toilet Plus — booking funnel data: services + diagnostics, flat-rate pricebook,
   ZIP→area routing, plumber roster, and slot generation. window.TPFunnelData */
(function () {
  // --- Service catalog (drives intake chips, diagnostics, urgency & quote) ---
  const SERVICES = {
    clog: {
      id: 'clog',
      icon: 'Droplets',
      label: 'Clogged or slow drain',
      react: 'Drains are our bread and butter \u2014 we\u2019ll have it flowing.',
      diagnostic: {
        q: 'Where\u2019s it backing up?',
        options: [{
          label: 'One sink or tub',
          urgency: 'soon'
        }, {
          label: 'Several drains at once',
          urgency: 'today',
          note: 'multiple fixtures \u2192 likely the main line'
        }, {
          label: 'A toilet',
          urgency: 'soon'
        }]
      },
      price: {
        low: 149,
        high: 325,
        note: 'Flat-rate after a free camera look. Hydro-jetting quoted on site.'
      }
    },
    water_heater: {
      id: 'water_heater',
      icon: 'Flame',
      label: 'No hot water',
      react: 'Cold showers are no way to start a day. Let\u2019s sort the heater.',
      diagnostic: {
        q: 'Tank or tankless \u2014 and is there any water around the base?',
        options: [{
          label: 'Tank, no leak',
          urgency: 'today'
        }, {
          label: 'Tankless, error code',
          urgency: 'today'
        }, {
          label: 'Water pooling at the base',
          urgency: 'urgent',
          note: 'a leaking tank can fail fast'
        }]
      },
      price: {
        low: 185,
        high: 480,
        note: 'Repair flat-rate. Full replacement quoted on site (we size it right).'
      }
    },
    leak: {
      id: 'leak',
      icon: 'Waves',
      label: 'Leak or burst pipe',
      react: 'Water where it shouldn\u2019t be \u2014 let\u2019s stop it before it spreads.',
      diagnostic: {
        q: 'Is water actively running right now?',
        options: [{
          label: 'Yes, actively \u2014 I can\u2019t stop it',
          urgency: 'emergency',
          note: 'active burst \u2192 emergency dispatch'
        }, {
          label: 'A slow drip',
          urgency: 'today'
        }, {
          label: 'Just a stain or damp spot',
          urgency: 'soon'
        }]
      },
      price: {
        low: 165,
        high: 390,
        note: 'Flat-rate diagnosis + repair. Slab/behind-wall leaks quoted after locate.'
      }
    },
    sewer: {
      id: 'sewer',
      icon: 'Pipette',
      label: 'Sewer / main line backup',
      react: 'Main-line trouble is messy but routine for us. We\u2019ll camera it and clear it.',
      diagnostic: {
        q: 'How much of the house is affected?',
        options: [{
          label: 'The whole house / sewage backing up',
          urgency: 'emergency',
          note: 'whole-house backup \u2192 emergency'
        }, {
          label: 'A couple of fixtures',
          urgency: 'today'
        }]
      },
      price: {
        low: 199,
        high: 450,
        note: 'Flat-rate clearing + camera inspection. Root/repair work quoted on site.'
      }
    },
    fixture: {
      id: 'fixture',
      icon: 'ShowerHead',
      label: 'Toilet, faucet or fixture',
      react: 'The small stuff that nags at you \u2014 usually a same-day fix.',
      diagnostic: {
        q: 'What\u2019s it doing?',
        options: [{
          label: 'Running / won\u2019t stop',
          urgency: 'soon'
        }, {
          label: 'Dripping or low pressure',
          urgency: 'soon'
        }, {
          label: 'Wobbly / won\u2019t flush',
          urgency: 'soon'
        }]
      },
      price: {
        low: 129,
        high: 280,
        note: 'Flat-rate per fixture. Parts shown before we install.'
      }
    },
    other: {
      id: 'other',
      icon: 'Wrench',
      label: 'Something else',
      react: 'No problem \u2014 if it carries water, we work on it.',
      diagnostic: {
        q: 'Give me a sentence on what\u2019s going on.',
        options: null // free text
      },
      price: {
        low: 0,
        high: 0,
        note: 'We\u2019ll give you a flat-rate number once the plumber sees it \u2014 always before any work.'
      }
    }
  };
  const SERVICE_ORDER = ['clog', 'water_heater', 'leak', 'sewer', 'fixture', 'other'];

  // --- ZIP → service area + routed crew ---
  const PLUMBERS = [{
    id: 'sam',
    name: 'Sam R.',
    crew: 'Ballard crew',
    initial: 'S',
    rating: 4.9,
    truck: 'TP-07'
  }, {
    id: 'dee',
    name: 'Dee K.',
    crew: 'Northgate crew',
    initial: 'D',
    rating: 4.9,
    truck: 'TP-03'
  }, {
    id: 'mateo',
    name: 'Mateo L.',
    crew: 'Greenwood crew',
    initial: 'M',
    rating: 4.8,
    truck: 'TP-11'
  }];
  const AREAS = {
    '98103': {
      area: 'Wallingford',
      plumber: 'sam'
    },
    '98107': {
      area: 'Ballard',
      plumber: 'sam'
    },
    '98115': {
      area: 'Northgate',
      plumber: 'dee'
    },
    '98125': {
      area: 'Lake City',
      plumber: 'dee'
    },
    '98133': {
      area: 'Greenwood',
      plumber: 'mateo'
    }
  };
  function lookupZip(zip) {
    const hit = AREAS[(zip || '').trim()];
    if (hit) return {
      area: hit.area,
      plumber: PLUMBERS.find(p => p.id === hit.plumber),
      covered: true
    };
    // any other 5-digit zip: covered, round-robin a crew
    if (/^\d{5}$/.test((zip || '').trim())) {
      const p = PLUMBERS[parseInt(zip, 10) % PLUMBERS.length];
      return {
        area: 'your area',
        plumber: p,
        covered: true
      };
    }
    return {
      area: null,
      plumber: null,
      covered: false
    };
  }

  // --- Slot generation by urgency ---
  const URGENCY = {
    emergency: {
      label: 'Emergency',
      tone: 'accent',
      read: 'This is an emergency \u2014 I\u2019m flagging it for priority dispatch right now.'
    },
    urgent: {
      label: 'Urgent',
      tone: 'amber',
      read: 'I\u2019d treat this as urgent so it doesn\u2019t get worse.'
    },
    today: {
      label: 'Today',
      tone: 'blue',
      read: 'We can knock this out today.'
    },
    soon: {
      label: 'Soon',
      tone: 'blue',
      read: 'Not an emergency \u2014 we\u2019ll get you on the schedule quick.'
    }
  };
  function slotsFor(urgency, plumber) {
    const eta = plumber ? plumber.name : 'a plumber';
    if (urgency === 'emergency') {
      return [{
        id: 's0',
        when: 'Right now',
        detail: 'Priority dispatch \u00b7 next 2 hrs',
        eta: '~40 min out',
        hot: true
      }, {
        id: 's1',
        when: 'Today, 2\u20134 PM',
        detail: 'If you\u2019ve stopped the water',
        eta: ''
      }];
    }
    if (urgency === 'urgent' || urgency === 'today') {
      return [{
        id: 's1',
        when: 'Today, 2\u20134 PM',
        detail: eta + ' \u00b7 soonest',
        eta: '~1 hr 15 out',
        hot: urgency === 'urgent'
      }, {
        id: 's2',
        when: 'Today, 4\u20136 PM',
        detail: eta,
        eta: ''
      }, {
        id: 's3',
        when: 'Tomorrow, 8\u201310 AM',
        detail: 'First call of the day',
        eta: ''
      }];
    }
    return [{
      id: 's2',
      when: 'Tomorrow, 8\u201310 AM',
      detail: eta + ' \u00b7 first call',
      eta: ''
    }, {
      id: 's3',
      when: 'Tomorrow, 12\u20132 PM',
      detail: eta,
      eta: ''
    }, {
      id: 's4',
      when: 'Thursday, 9\u201311 AM',
      detail: 'Plan-ahead slot',
      eta: ''
    }];
  }
  function estimateFor(service) {
    const p = SERVICES[service] ? SERVICES[service].price : null;
    if (!p || !p.low && !p.high) return {
      text: 'Quoted on site',
      note: p ? p.note : '',
      low: 0,
      high: 0
    };
    return {
      text: '$' + p.low + '\u2013$' + p.high,
      note: p.note,
      low: p.low,
      high: p.high
    };
  }
  window.TPFunnelData = {
    SERVICES,
    SERVICE_ORDER,
    PLUMBERS,
    AREAS,
    URGENCY,
    lookupZip,
    slotsFor,
    estimateFor
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/funnel-data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingModal.jsx
try { (() => {
/* Booking modal — 3-step flow (job → details → confirmed). window.TPBooking */
(function () {
  const {
    Icon
  } = window.TPKit;
  const {
    useState
  } = React;
  function Step({
    n,
    label,
    active,
    done
  }) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        background: done ? 'var(--green-500)' : active ? 'var(--color-primary)' : 'var(--gray-200)',
        color: done || active ? '#fff' : 'var(--text-muted)'
      }
    }, done ? React.createElement(Icon, {
      name: 'Check',
      size: 15,
      color: '#fff'
    }) : n), React.createElement('span', {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: active || done ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label));
  }
  function Booking({
    onClose
  }) {
    const {
      Button,
      Input,
      Select,
      Badge
    } = window.ToiletPlusDesignSystem_5215f9;
    const [step, setStep] = useState(1);
    const shell = children => React.createElement('div', {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(7,30,61,0.55)',
        backdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }
    }, React.createElement('div', {
      onClick: e => e.stopPropagation(),
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        width: 'min(560px, 100%)',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: 'var(--shadow-xl)'
      }
    }, children));
    const header = React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 26px 0'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 18
      }
    }, React.createElement(Step, {
      n: 1,
      label: 'Job',
      active: step === 1,
      done: step > 1
    }), React.createElement(Step, {
      n: 2,
      label: 'Details',
      active: step === 2,
      done: step > 2
    }), React.createElement(Step, {
      n: 3,
      label: 'Done',
      active: step === 3,
      done: false
    })), React.createElement('button', {
      onClick: onClose,
      'aria-label': 'Close',
      style: {
        border: 'none',
        background: 'var(--surface-sunken)',
        width: 34,
        height: 34,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'X',
      size: 18
    })));
    if (step === 1) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'What\u2019s going on?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'A quick heads-up is plenty \u2014 we\u2019ll get the details on the call.'), React.createElement(Select, {
        label: 'Type of job',
        required: true,
        style: {
          marginBottom: 16
        }
      }, React.createElement('option', null, 'Clogged or slow drain'), React.createElement('option', null, 'Water heater (no hot water)'), React.createElement('option', null, 'Leak or burst pipe'), React.createElement('option', null, 'Sewer / main line backup'), React.createElement('option', null, 'Toilet, faucet or fixture'), React.createElement('option', null, 'Something else')), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 22
        }
      }, React.createElement(Input, {
        label: 'ZIP code',
        icon: React.createElement(Icon, {
          name: 'MapPin',
          size: 18
        }),
        placeholder: '98103',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Urgency',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Emergency \u2014 today'), React.createElement('option', null, 'This week'), React.createElement('option', null, 'Just planning ahead'))), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(2),
        iconRight: React.createElement(Icon, {
          name: 'ArrowRight',
          size: 18
        })
      }, 'Continue'))]);
    }
    if (step === 2) {
      return shell([React.createElement('div', {
        key: 'h'
      }, header), React.createElement('div', {
        key: 'b',
        style: {
          padding: '20px 26px 28px'
        }
      }, React.createElement('h3', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 26,
          color: 'var(--text-strong)',
          margin: '0 0 6px'
        }
      }, 'Where do we text you?'), React.createElement('p', {
        style: {
          fontSize: 15,
          color: 'var(--text-muted)',
          margin: '0 0 20px'
        }
      }, 'We\u2019ll confirm a real arrival window \u2014 no phone-tag.'), React.createElement(Input, {
        label: 'Your name',
        required: true,
        placeholder: 'Jane from Maple St.',
        style: {
          marginBottom: 16
        }
      }), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 16,
          marginBottom: 16
        }
      }, React.createElement(Input, {
        label: 'Mobile',
        required: true,
        icon: React.createElement(Icon, {
          name: 'Phone',
          size: 18
        }),
        placeholder: '(555) 240-7867',
        style: {
          flex: 1
        }
      }), React.createElement(Select, {
        label: 'Best time',
        style: {
          flex: 1
        }
      }, React.createElement('option', null, 'Morning'), React.createElement('option', null, 'Afternoon'), React.createElement('option', null, 'Evening'))), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 12
        }
      }, React.createElement(Button, {
        variant: 'ghost',
        size: 'lg',
        onClick: () => setStep(1),
        iconLeft: React.createElement(Icon, {
          name: 'ArrowLeft',
          size: 18
        })
      }, 'Back'), React.createElement(Button, {
        variant: 'primary',
        size: 'lg',
        block: true,
        onClick: () => setStep(3)
      }, 'Request my visit')))]);
    }
    return shell(React.createElement('div', {
      style: {
        padding: '40px 32px 36px',
        textAlign: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: 'var(--green-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
      }
    }, React.createElement(Icon, {
      name: 'CheckCheck',
      size: 36,
      color: 'var(--green-500)'
    })), React.createElement('h3', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: 'var(--text-strong)',
        margin: '0 0 10px'
      }
    }, 'You\u2019re on the schedule \uD83D\uDD27'), React.createElement('p', {
      style: {
        fontSize: 16,
        color: 'var(--text-body)',
        lineHeight: 1.55,
        margin: '0 auto 22px',
        maxWidth: 380
      }
    }, 'A real dispatcher is reviewing your request now. Watch for a text from ', React.createElement('strong', null, '(555) 240-7867'), ' with your arrival window \u2014 usually within 15 minutes.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        marginBottom: 26,
        flexWrap: 'wrap'
      }
    }, React.createElement(Badge, {
      tone: 'green',
      icon: React.createElement(Icon, {
        name: 'ShieldCheck',
        size: 13
      })
    }, 'Licensed & insured'), React.createElement(Badge, {
      tone: 'blue',
      icon: React.createElement(Icon, {
        name: 'Tag',
        size: 13
      })
    }, 'Upfront pricing')), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      onClick: onClose
    }, 'Done')));
  }
  window.TPBooking = Booking;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer. window.TPFooter */
(function () {
  const {
    Icon
  } = window.TPKit;
  const COLS = [['Services', ['Drain Cleaning', 'Water Heaters', 'Leak Repair', 'Sewer & Main Line', 'Repiping']], ['Company', ['About Toilet Plus', 'Our Plumbers', 'Service Area', 'Careers', 'Reviews']], ['Resources', ['Upfront Pricing', 'Financing', 'Maintenance Tips', 'Emergency Guide', 'Contact']]];
  function Footer() {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement('footer', {
      style: {
        background: '#05152B',
        color: 'var(--text-on-dark-muted)'
      }
    },
    // CTA strip
    React.createElement('div', {
      style: {
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '36px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, React.createElement('span', {
      style: {
        width: 46,
        height: 46,
        borderRadius: 12,
        background: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 22,
      color: '#fff'
    })), React.createElement('div', null, React.createElement('div', {
      style: {
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22
      }
    }, 'Got a plumbing emergency right now?'), React.createElement('div', {
      style: {
        fontSize: 14
      }
    }, 'We answer the phone 24/7 \u2014 holidays included.'))), React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      href: 'tel:5552407867',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      })
    }, '(555) 240-7867'))),
    // columns
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '56px 24px 40px',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 40
      }
    }, React.createElement('div', null, React.createElement(Logo, {
      size: 34,
      tone: 'dark'
    }), React.createElement('p', {
      style: {
        fontSize: 14,
        lineHeight: 1.6,
        margin: '16px 0 18px',
        maxWidth: 300
      }
    }, 'Locally owned plumbers serving the metro and 30 miles out. Upfront pricing, real people, and work we stand behind.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['Facebook', 'Instagram', 'Youtube', 'Star'].map(s => React.createElement('a', {
      key: s,
      href: '#',
      'aria-label': s,
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        border: '1px solid var(--border-on-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }
    }, React.createElement(Icon, {
      name: s,
      size: 17
    }))))), COLS.map(([title, links]) => React.createElement('div', {
      key: title
    }, React.createElement('div', {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 14,
        letterSpacing: '.02em'
      }
    }, title), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, links.map(l => React.createElement('a', {
      key: l,
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        fontSize: 14
      }
    }, l)))))),
    // legal
    React.createElement('div', {
      style: {
        borderTop: '1px solid var(--border-on-dark)'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontSize: 13
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '\u00A9 2026 Toilet Plus Plumbing \u00B7 Lic. #PL-48217 \u00B7 Bonded & Insured'), React.createElement('span', {
      style: {
        display: 'flex',
        gap: 20
      }
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Privacy'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Terms'), React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none'
      }
    }, 'Accessibility')))));
  }
  window.TPFooter = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Guarantees.jsx
try { (() => {
/* Guarantee band (navy) — numbered "no fine print" promises. window.TPGuarantees */
(function () {
  const ITEMS = [['01', 'Upfront, flat-rate pricing', 'You approve the price before we lift a wrench. No hourly meter running, no surprise line items on the invoice.'], ['02', 'On time, or we call you', 'A real arrival window, and a text when we\u2019re 30 minutes out. Your whole day doesn\u2019t revolve around waiting on us.'], ['03', 'Licensed & background-checked', 'Every plumber is licensed, insured, and vetted. We treat your home like our own mom lives there.'], ['04', '2-year workmanship warranty', 'If something we fixed acts up, we come back and make it right. No fine print, no fight, no re-trip fee.']];
  function Guarantees() {
    const {
      Icon,
      Stamp,
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      id: 'why',
      style: {
        position: 'relative',
        background: 'var(--surface-navy)',
        color: '#fff',
        padding: '100px 0',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.04)', 32),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 56
      }
    },
    // left header
    React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 14,
        marginBottom: 18
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-accent)',
        letterSpacing: '.08em'
      }
    }, '02'), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'The Toilet Plus promise')), React.createElement('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 46,
        lineHeight: 1.02,
        letterSpacing: '-0.02em',
        color: '#fff',
        margin: '0 0 18px'
      }
    }, 'No surprises. No upsell. ', React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'Just the fix.')), React.createElement('p', {
      style: {
        fontSize: 16.5,
        lineHeight: 1.6,
        color: 'var(--text-on-dark-muted)',
        margin: '0 0 26px',
        maxWidth: 420
      }
    }, 'We\u2019re a local shop, not a call-center franchise. Same plumbers, same honest read, and a price we stand behind \u2014 every single visit.'), React.createElement('div', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: '#fff',
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px'
      }
    }, React.createElement(Icon, {
      name: 'FileSignature',
      size: 16,
      color: 'var(--blue-300)'
    }), 'Written estimate, every job')),
    // right numbered grid
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        border: '1px solid var(--border-on-dark)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
      }
    }, ITEMS.map(([n, t, b], i) => React.createElement('div', {
      key: n,
      style: {
        padding: '26px 24px',
        borderRight: i % 2 === 0 ? '1px solid var(--border-on-dark)' : 'none',
        borderBottom: i < 2 ? '1px solid var(--border-on-dark)' : 'none'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-accent)',
        marginBottom: 12,
        letterSpacing: '.06em'
      }
    }, n), React.createElement('h4', {
      style: {
        margin: '0 0 8px',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 18,
        color: '#fff',
        lineHeight: 1.15
      }
    }, t), React.createElement('p', {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.5,
        color: 'var(--text-on-dark-muted)'
      }
    }, b))))));
  }
  window.TPGuarantees = Guarantees;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Guarantees.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Sticky site header — utility bar + main nav. Exposes window.TPHeader */
(function () {
  const NAV = ['Services', 'Why Us', 'Service Area', 'Financing', 'Reviews'];
  function Header({
    onBook
  }) {
    const {
      Logo,
      Button
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon
    } = window.TPKit;
    return React.createElement('header', {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-soft)'
      }
    },
    // utility strip
    React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '7px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--text-on-dark-muted)'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 15,
      color: '#7FE3B0'
    }), 'Licensed, bonded & insured · Lic. #PL-48217'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 18
      }
    }, React.createElement('a', {
      href: '#',
      style: {
        color: 'var(--text-on-dark-muted)',
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'MapPin',
      size: 14
    }), 'Find your location'), React.createElement('a', {
      href: 'tel:5552407867',
      style: {
        color: '#fff',
        fontWeight: 700,
        textDecoration: 'none',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Phone',
      size: 14,
      color: 'var(--color-accent)'
    }), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)'
      }
    }, '(555) 240-7867'))))),
    // main bar
    React.createElement('div', {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement(Logo, {
      size: 36,
      href: '#'
    }), React.createElement('nav', {
      style: {
        display: 'flex',
        gap: 28
      }
    }, NAV.map(n => React.createElement('a', {
      key: n,
      href: '#',
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-body)',
        textDecoration: 'none'
      }
    }, n))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'sm',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 16
      }),
      onClick: onBook
    }, 'Book Online'))));
  }
  window.TPHeader = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — navy band, blueprint grid, editorial headline + work-order quote ticket. window.TPHero */
(function () {
  function Hero({
    onBook
  }) {
    const {
      Button,
      Input
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Icon,
      Stamp,
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'linear-gradient(165deg, #0B3D7E 0%, #071E3D 72%)',
        color: '#fff',
        overflow: 'hidden'
      }
    },
    // blueprint grid
    React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.05)', 32),
        pointerEvents: 'none'
      }
    }),
    // big ghost wordmark watermark
    React.createElement('div', {
      style: {
        position: 'absolute',
        right: -40,
        bottom: -70,
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 320,
        lineHeight: 1,
        color: 'rgba(255,255,255,0.03)',
        pointerEvents: 'none',
        letterSpacing: '-0.04em'
      }
    }, '+'), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '76px 24px 88px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 64,
        alignItems: 'center'
      }
    },
    // left
    React.createElement('div', null, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 26,
        paddingBottom: 18,
        borderBottom: '1px solid var(--border-on-dark)'
      }
    }, React.createElement(Stamp, {
      tone: 'accent'
    }, '24/7 Emergency'), React.createElement('span', {
      style: {
        width: 1,
        height: 14,
        background: 'var(--border-on-dark)'
      }
    }), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Licensed #PL-48217'), React.createElement('span', {
      style: {
        width: 1,
        height: 14,
        background: 'var(--border-on-dark)'
      }
    }), React.createElement(Stamp, {
      tone: 'onDark',
      tick: false
    }, 'Same-Day')), React.createElement('h1', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 68,
        lineHeight: 0.98,
        letterSpacing: '-0.03em',
        margin: '0 0 22px',
        color: '#fff'
      }
    }, 'Burst pipe.', React.createElement('br'), 'Slow drain.', React.createElement('br'), React.createElement('span', {
      style: {
        color: 'var(--blue-300)'
      }
    }, 'We show up fast.')), React.createElement('p', {
      style: {
        fontSize: 18,
        lineHeight: 1.55,
        color: 'var(--text-on-dark-muted)',
        maxWidth: 500,
        margin: '0 0 30px'
      }
    }, 'Local, licensed plumbers for drain cleaning, water heaters, leak detection, and sewer lines \u2014 with upfront, flat-rate pricing. Real people, honest answers, no surprise fees.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 28
      }
    }, React.createElement(Button, {
      variant: 'accent',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'Phone',
        size: 18
      }),
      href: 'tel:5552407867'
    }, 'Call (555) 240-7867'), React.createElement(Button, {
      variant: 'on-dark',
      size: 'lg',
      iconLeft: React.createElement(Icon, {
        name: 'CalendarCheck',
        size: 18
      }),
      onClick: onBook
    }, 'Book online')),
    // rating stamp line
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 2
      }
    }, [0, 1, 2, 3, 4].map(i => React.createElement('svg', {
      key: i,
      width: 18,
      height: 18,
      viewBox: '0 0 24 24',
      fill: '#FFB400'
    }, React.createElement('path', {
      d: 'M12 2.4l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.06 1.1-6.47L2.6 9.25l6.5-.95z'
    })))), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13.5,
        color: '#fff',
        fontWeight: 600
      }
    }, '4.9'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-on-dark-muted)'
      }
    }, '/ 2,148 Google reviews'))),
    // right — work-order quote ticket
    React.createElement('div', {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-xl)',
        color: 'var(--text-body)',
        overflow: 'hidden'
      }
    },
    // ticket header bar
    React.createElement('div', {
      style: {
        background: 'var(--blue-900)',
        color: '#fff',
        padding: '14px 22px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement(Icon, {
      name: 'ClipboardList',
      size: 15,
      color: 'var(--blue-300)'
    }), 'Quick Quote'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--blue-300)'
      }
    }, 'EST. REPLY \u00B7 15 MIN')),
    // perforation
    React.createElement('div', {
      style: {
        height: 0,
        borderTop: '2px dashed var(--border-strong)',
        margin: '0'
      }
    }), React.createElement('div', {
      style: {
        padding: '24px 22px 26px'
      }
    }, React.createElement('p', {
      style: {
        margin: '0 0 18px',
        fontSize: 14.5,
        color: 'var(--text-muted)',
        lineHeight: 1.5
      }
    }, 'Drop your ZIP and what\u2019s wrong \u2014 a real dispatcher texts back availability in minutes.'), React.createElement(Input, {
      label: 'ZIP code',
      icon: React.createElement(Icon, {
        name: 'MapPin',
        size: 18
      }),
      placeholder: '98103',
      style: {
        marginBottom: 16
      }
    }), React.createElement(Button, {
      variant: 'primary',
      size: 'lg',
      block: true,
      onClick: onBook,
      iconRight: React.createElement(Icon, {
        name: 'ArrowRight',
        size: 18
      })
    }, 'Check availability'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 18,
        marginTop: 18,
        paddingTop: 16,
        borderTop: '1px solid var(--border-soft)',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'ShieldCheck',
      size: 14,
      color: 'var(--green-500)'
    }), 'No spam'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Tag',
      size: 14,
      color: 'var(--green-500)'
    }), 'Flat-rate'), React.createElement('span', {
      style: {
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: 'Clock',
      size: 14,
      color: 'var(--green-500)'
    }), '24/7'))))));
  }
  window.TPHero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
/* Reviews — editorial header + flat testimonial cards. window.TPReviews */
(function () {
  const REVIEWS = [[5, 'Water heater died on a Sunday and they had hot water back by dinner. Quoted the price before starting \u2014 no games, no Sunday surcharge.', 'Marcus T.', 'Northgate'], [5, 'Snaked a drain two other companies wanted to replace. Saved me about $1,800 and explained exactly what was going on in the line.', 'Priya R.', 'Ballard'], [5, 'Found a slab leak fast, patched the drywall back, and left the place cleaner than they found it. Genuinely kind crew.', 'Dave & Lin', 'Greenwood']];
  function Reviews() {
    const {
      ReviewCard
    } = window.ToiletPlusDesignSystem_5215f9;
    const {
      Section,
      SectionHead,
      Icon
    } = window.TPKit;
    return React.createElement(Section, {
      id: 'reviews'
    }, React.createElement(SectionHead, {
      index: '03',
      kicker: 'Neighbors, not testimonials',
      title: 'Why folks keep our ',
      accentTitle: 'number saved.',
      intro: 'Real reviews from real service calls around the metro. We read every one \u2014 the good and the "you missed a spot."'
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18,
        marginBottom: 36
      }
    }, REVIEWS.map(([r, q, a, l]) => React.createElement(ReviewCard, {
      key: a,
      rating: r,
      quote: q,
      author: a,
      location: l,
      source: 'Google',
      style: {
        boxShadow: 'none',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-md)'
      }
    }))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        paddingTop: 24,
        borderTop: '1px solid var(--border-strong)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: 'Star',
      size: 16,
      color: '#FFB400'
    }), React.createElement('span', null, '4.9 average across 2,148 Google reviews'), React.createElement('a', {
      href: '#',
      style: {
        marginLeft: 'auto',
        color: 'var(--color-primary)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontWeight: 700
      }
    }, 'Read all reviews', React.createElement(Icon, {
      name: 'ArrowRight',
      size: 15
    }))));
  }
  window.TPReviews = Reviews;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Services grid section with left-aligned numbered header. window.TPServices */
(function () {
  const {
    Section,
    SectionHead,
    Icon
  } = window.TPKit;
  const SERVICES = [['01', 'Droplets', 'Drain Cleaning', 'Slow sink or backed-up shower? We snake, hydro-jet, and camera the line so the clog actually stays gone \u2014 not just pushed down.'], ['02', 'Flame', 'Water Heaters', 'No hot water this morning? We repair and replace tank and tankless units, size them right, and haul the old one away.'], ['03', 'Waves', 'Leak Detection', 'Mystery water spot or a spike on the bill? We trace slab and pinhole leaks before they wreck your drywall.'], ['04', 'Pipette', 'Sewer & Main Line', 'Gurgling drains across the house usually means the main. We camera-inspect and clear roots, bellies, and breaks.'], ['05', 'ShowerHead', 'Fixtures & Toilets', 'Running toilet, dripping faucet, wobbly flange \u2014 the small stuff that wastes water and nags at you. Done same day.'], ['06', 'Gauge', 'Repiping & Water Quality', 'Low pressure or rusty water? We repipe old galvanized lines and install filtration so every tap runs clean.']];
  function Services() {
    const {
      ServiceCard
    } = window.ToiletPlusDesignSystem_5215f9;
    return React.createElement(Section, {
      id: 'services',
      tone: 'muted'
    }, React.createElement(SectionHead, {
      index: '01',
      kicker: 'What we fix',
      title: 'Plumbing services, done right ',
      accentTitle: 'the first time.',
      intro: 'From a dripping faucet to a full repipe \u2014 residential and light commercial. If it carries water, we work on it.'
    }), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 18
      }
    }, SERVICES.map(([idx, ic, title, body]) => React.createElement(ServiceCard, {
      key: title,
      index: idx,
      icon: React.createElement(Icon, {
        name: ic,
        size: 30,
        stroke: 1.75
      }),
      title,
      href: '#'
    }, body))));
  }
  window.TPServices = Services;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SpecStrip.jsx
try { (() => {
/* Spec stat strip — industrial band of big mono figures. window.TPSpecStrip */
(function () {
  const STATS = [['18', 'yrs', 'In the trade, locally owned'], ['~1', 'hr', 'Average arrival window'], ['12k', '+', 'Jobs done & warrantied'], ['4.9', '\u2605', '2,148 verified reviews']];
  function SpecStrip() {
    const {
      blueprint
    } = window.TPKit;
    return React.createElement('section', {
      style: {
        position: 'relative',
        background: 'var(--color-primary)',
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        ...blueprint('rgba(255,255,255,0.08)', 30),
        pointerEvents: 'none'
      }
    }), React.createElement('div', {
      style: {
        position: 'relative',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px'
      }
    }, React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    }, STATS.map(([n, unit, label], i) => React.createElement('div', {
      key: label,
      style: {
        padding: '34px 28px',
        borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 4,
        color: '#fff'
      }
    }, React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 52,
        letterSpacing: '-0.03em',
        lineHeight: 1
      }
    }, n), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 20,
        fontWeight: 600,
        color: 'var(--blue-100)'
      }
    }, unit)), React.createElement('div', {
      style: {
        marginTop: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.78)',
        lineHeight: 1.4
      }
    }, label))))));
  }
  window.TPSpecStrip = SpecStrip;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SpecStrip.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RatingBadge = __ds_scope.RatingBadge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.GuaranteeCard = __ds_scope.GuaranteeCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
