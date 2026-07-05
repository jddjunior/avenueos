/* @ds-bundle: {"format":3,"namespace":"AtHomeDesignSystem_006189","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SelectableCard","sourcePath":"components/core/SelectableCard.jsx"},{"name":"Stepper","sourcePath":"components/core/Stepper.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f19046d12fb2","components/core/Badge.jsx":"97b2d20964aa","components/core/Button.jsx":"5e94e94d6900","components/core/Card.jsx":"2204900e6af4","components/core/Checkbox.jsx":"1472e59ba6a7","components/core/Icon.jsx":"0e1d77f6df00","components/core/Input.jsx":"1aef0809c676","components/core/SelectableCard.jsx":"609b97c51d23","components/core/Stepper.jsx":"8bfc3a0d914d","components/core/Switch.jsx":"63f501aa12ab","screens.jsx":"8a8be951b4bb","ui_kits/business/screens.jsx":"019bfd0efed7","ui_kits/consumer/screens.jsx":"8fddf69c6fac","ui_kits/marketplace/screens.jsx":"4e52a5e479c9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AtHomeDesignSystem_006189 = window.AtHomeDesignSystem_006189 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AtHome Avatar — round user/company mark. Image or initials fallback. */
function Avatar({
  src,
  name = "",
  size = 40,
  tone = "brand",
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
  const tones = {
    brand: {
      bg: "var(--brand-soft)",
      fg: "var(--brand-soft-fg)"
    },
    accent: {
      bg: "var(--accent-soft)",
      fg: "var(--accent-soft-fg)"
    },
    neutral: {
      bg: "var(--slate-200)",
      fg: "var(--slate-700)"
    }
  };
  const c = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-sans)",
      fontSize: size * 0.38,
      fontWeight: "var(--weight-bold)",
      border: "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome Badge — compact status / category pill.
 * Tones: neutral, brand, accent, success, warning, danger, info.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  size = "md",
  dot = false,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      soft: "var(--slate-100)",
      softFg: "var(--slate-700)",
      solid: "var(--slate-600)"
    },
    brand: {
      soft: "var(--brand-soft)",
      softFg: "var(--brand-soft-fg)",
      solid: "var(--brand)"
    },
    accent: {
      soft: "var(--accent-soft)",
      softFg: "var(--accent-soft-fg)",
      solid: "var(--accent)"
    },
    success: {
      soft: "var(--success-soft)",
      softFg: "var(--success-fg)",
      solid: "var(--success)"
    },
    warning: {
      soft: "var(--warning-soft)",
      softFg: "var(--warning-fg)",
      solid: "var(--warning)"
    },
    danger: {
      soft: "var(--danger-soft)",
      softFg: "var(--danger-fg)",
      solid: "var(--danger)"
    },
    info: {
      soft: "var(--info-soft)",
      softFg: "var(--info-fg)",
      solid: "var(--info)"
    }
  };
  const c = map[tone] || map.neutral;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: sm ? 20 : 24,
      padding: sm ? "0 8px" : "0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      background: solid ? c.solid : c.soft,
      color: solid ? "#fff" : c.softFg,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: solid ? "#fff" : c.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome Button — the primary action primitive.
 * Variants: primary (ember), secondary (teal), outline, ghost, danger.
 * Sizes: sm, md, lg. Optional leading/trailing icon nodes.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: "var(--field-height-sm)",
      padding: "0 14px",
      font: "var(--text-sm)",
      radius: "var(--radius-sm)",
      gap: "6px"
    },
    md: {
      height: "var(--field-height)",
      padding: "0 20px",
      font: "var(--text-md)",
      radius: "var(--radius-md)",
      gap: "8px"
    },
    lg: {
      height: "var(--field-height-lg)",
      padding: "0 28px",
      font: "var(--text-lg)",
      radius: "var(--radius-lg)",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-default)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-snug)",
      lineHeight: 1,
      borderRadius: s.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: "-2px"
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: "-2px"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome Card — the standard surface container.
 * White surface, soft warm shadow, generous radius. `interactive`
 * adds hover lift. `pad` controls inner padding scale.
 */
function Card({
  children,
  interactive = false,
  pad = "md",
  elevation = "sm",
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-6)",
    lg: "var(--space-7)"
  };
  const shadows = {
    flat: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: shadows[elevation] ?? shadows.sm,
      padding: pads[pad] ?? pads.md,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = shadows[elevation] ?? shadows.sm;
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AtHome Checkbox — labeled, blue when checked. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange?.(!checked),
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--brand)" : "var(--surface-card)",
      border: `1.5px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, rest), checked ? "✓" : ""), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome Icon — thin wrapper over Lucide icons.
 * Renders an <i data-lucide> placeholder; call lucide.createIcons()
 * after mount (the design-system cards & UI kits do this) to swap in SVGs.
 * Lucide is AtHome's chosen icon set: 1.75px stroke, rounded caps, calm.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color,
      ["--lucide-stroke-width"]: strokeWidth,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome Input — labeled text field with optional helper / error.
 * Friendly rounded field, warm focus ring.
 */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  size = "md",
  style = {},
  containerStyle = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const heights = {
    sm: "var(--field-height-sm)",
    md: "var(--field-height)",
    lg: "var(--field-height-lg)"
  };
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      height: heights[size] || heights.md,
      padding: "0 14px",
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--danger)" : focused ? "var(--ring)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focused ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-strong)",
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger-fg)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SelectableCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AtHome SelectableCard — the friendly "pick one" tile used all through
 * the consumer journey (which service? which system tier? which budget?).
 * Shows an icon/media slot, title, description, optional price, and a
 * selected state with blue ring + check.
 */
function SelectableCard({
  title,
  description,
  media,
  price,
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      position: "relative",
      textAlign: "left",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "var(--space-5)",
      background: "var(--surface-card)",
      border: `2px solid ${selected ? "var(--brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-lg)",
      boxShadow: selected ? "var(--shadow-md)" : "var(--shadow-xs)",
      cursor: "pointer",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      if (!selected) e.currentTarget.style.borderColor = "var(--border-strong)";
    },
    onMouseLeave: e => {
      if (!selected) e.currentTarget.style.borderColor = "var(--border-default)";
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      width: 22,
      height: 22,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: selected ? "var(--brand)" : "transparent",
      border: selected ? "none" : "2px solid var(--border-default)",
      color: "#fff",
      fontSize: 13,
      fontWeight: 700,
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, selected ? "✓" : ""), media && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-soft)",
      color: "var(--brand)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, media), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-snug)",
      paddingRight: 24
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-snug)"
    }
  }, description), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--accent)"
    }
  }, price));
}
Object.assign(__ds_scope, { SelectableCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SelectableCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stepper.jsx
try { (() => {
/**
 * AtHome Stepper — horizontal progress for the guided consumer journey.
 * Pass `steps` (array of labels) and the active index. Completed steps
 * fill blue; the current step is ringed; future steps are muted.
 */
function Stepper({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current;
    const active = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-bold)",
        background: done ? "var(--brand)" : active ? "var(--surface-card)" : "var(--slate-100)",
        color: done ? "#fff" : active ? "var(--brand)" : "var(--text-faint)",
        border: active ? "2px solid var(--brand)" : "2px solid transparent",
        boxShadow: active ? "var(--focus-ring)" : "none",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, done ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        whiteSpace: "nowrap"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        margin: "0 8px",
        marginBottom: 22,
        borderRadius: 2,
        background: i < current ? "var(--brand)" : "var(--slate-200)",
        transition: "background var(--dur-slow) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AtHome Switch — on/off toggle. Blue when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  style = {},
  ...rest
}) {
  const dims = size === "sm" ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 46,
    h: 26,
    k: 20
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange?.(!checked),
    style: {
      position: "relative",
      width: dims.w,
      height: dims.h,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 0,
      background: checked ? "var(--brand)" : "var(--slate-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.k) / 2,
      left: checked ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-spring)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// screens.jsx
try { (() => {
/* global React */
// Consumer journey screens — the guided online quote flow.
// Exposes screen components on window for index.html to drive.

const {
  useState
} = React;
function money(n) {
  return "$" + n.toLocaleString();
}

// ---- Shared chrome -------------------------------------------------
function JourneyShell({
  step,
  children,
  footer
}) {
  const {
    Stepper
  } = window.AtHomeDesignSystem_006189;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      maxWidth: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      minHeight: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "22px 4px 26px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 11,
      background: "var(--brand)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "@"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      color: "var(--text-strong)",
      letterSpacing: "-0.5px"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Mason Air Co.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Home", "System", "Options", "Quote"],
    current: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, footer));
}

// ---- Step 0: Welcome / address ------------------------------------
function StepWelcome({
  onNext
}) {
  const {
    Button,
    Input,
    Icon,
    Badge
  } = window.AtHomeDesignSystem_006189;
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 0,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 20
      }),
      onClick: onNext
    }, "Start my quote")
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "No pushy sales visit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      marginTop: 16,
      marginBottom: 14,
      color: "var(--text-strong)"
    }
  }, "Let's get your home", /*#__PURE__*/React.createElement("br", null), "comfortable again."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--text-body)",
      marginBottom: 28,
      maxWidth: 400
    }
  }, "Answer a few quick questions and we'll size the right system for your space \u2014 honest pricing, no five trucks and sales people waiting near your driveway."), /*#__PURE__*/React.createElement(Input, {
    label: "Where's home?",
    placeholder: "Street address or ZIP",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    })
  }));
}

// ---- Step 1: What do you need -------------------------------------
function StepService({
  onNext,
  onBack
}) {
  const {
    Button,
    SelectableCard,
    Icon
  } = window.AtHomeDesignSystem_006189;
  const [sel, setSel] = useState(1);
  const opts = [{
    t: "Repair",
    d: "Something's not working right",
    i: "wrench"
  }, {
    t: "Replace my system",
    d: "Old, loud, or always breaking",
    i: "thermometer",
    p: "Most popular"
  }, {
    t: "Brand-new install",
    d: "Addition, new build, or first AC",
    i: "house-plus"
  }, {
    t: "Just maintenance",
    d: "A tune-up to keep things happy",
    i: "shield-check"
  }];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 1,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      onClick: onBack,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 18
      })
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onNext,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 20
      })
    }, "Continue"))
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginBottom: 6
    }
  }, "What brings you in?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      marginBottom: 22
    }
  }, "Pick the one that fits best \u2014 you can change it later."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, opts.map((o, i) => /*#__PURE__*/React.createElement(SelectableCard, {
    key: i,
    title: o.t,
    description: o.d,
    price: o.p,
    media: /*#__PURE__*/React.createElement(Icon, {
      name: o.i
    }),
    selected: sel === i,
    onClick: () => setSel(i)
  }))));
}

// ---- Step 2: AI recommendation ------------------------------------
function StepRecommend({
  onNext,
  onBack
}) {
  const {
    Button,
    Card,
    Badge,
    Icon
  } = window.AtHomeDesignSystem_006189;
  const [tier, setTier] = useState(1);
  const tiers = [{
    name: "Essential",
    sub: "Reliable comfort, lower upfront",
    seer: "14.3 SEER2",
    price: 6480,
    mo: 112
  }, {
    name: "Balanced",
    sub: "Our most-picked efficiency sweet spot",
    seer: "16.0 SEER2",
    price: 8950,
    mo: 154,
    best: true
  }, {
    name: "Peak",
    sub: "Quietest, lowest bills, variable-speed",
    seer: "20.0 SEER2",
    price: 12400,
    mo: 214
  }];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 2,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      onClick: onBack,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 18
      })
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onNext,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 20
      })
    }, "See my quote"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--accent-soft-fg)"
    }
  }, "AtHome sized this for a 1,850 sq ft home in Austin")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      marginBottom: 18
    }
  }, "Here's what fits your house"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    onClick: () => setTier(i),
    elevation: tier === i ? "md" : "flat",
    style: {
      border: tier === i ? "2px solid var(--brand)" : "2px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      color: "var(--text-strong)"
    }
  }, t.name), t.best && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Best value")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, t.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--accent)",
      marginTop: 8,
      letterSpacing: ".02em"
    }
  }, t.seer)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--text-strong)"
    }
  }, money(t.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "or ", money(t.mo), "/mo"))))));
}

// ---- Step 3: Quote + booking --------------------------------------
function StepQuote({
  onBack,
  onDone
}) {
  const {
    Button,
    Card,
    Badge,
    Icon,
    Checkbox
  } = window.AtHomeDesignSystem_006189;
  const [finance, setFinance] = useState(true);
  const lines = [["Balanced 16.0 SEER2 system", 8950], ["Professional install + haul-away", 0], ["Permit & inspection", 0], ["10-yr parts & labor warranty", 0]];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 3,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      onClick: onBack,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 18
      })
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onDone,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar-check",
        size: 19
      })
    }, "Book my install"))
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Locked price \xB7 good for 30 days"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      margin: "14px 0 18px"
    }
  }, "Your honest quote"), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    elevation: "md"
  }, lines.map(([label, amt], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13.5,
      color: amt === 0 ? "var(--success)" : "var(--text-strong)",
      fontWeight: 600
    }
  }, amt === 0 ? "Included" : money(amt)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-strong)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 30,
      color: "var(--brand)"
    }
  }, money(8950)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "16px 18px",
      background: "var(--accent-soft)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: finance,
    onChange: setFinance,
    label: "Spread it out \u2014 $154/mo at 6.9% APR, 0 down"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--accent-soft-fg)",
      marginTop: 8,
      paddingLeft: 32
    }
  }, "Pre-qualify in 60 seconds, no credit hit.")));
}

// ---- Step 4: Confirmation -----------------------------------------
function StepDone({
  onRestart
}) {
  const {
    Button,
    Card,
    Icon,
    Avatar
  } = window.AtHomeDesignSystem_006189;
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 3,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      fullWidth: true,
      onClick: onRestart
    }, "Start over")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      background: "var(--success-soft)",
      color: "var(--success)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 38,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      marginBottom: 10
    }
  }, "You're booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-body)",
      maxWidth: 360,
      marginBottom: 24
    }
  }, "Thursday, June 25 \xB7 8\u201310 AM. We'll text you when your installer is on the way."), /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marcus Hale",
    tone: "brand",
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, "Marcus Hale"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Lead installer \xB7 Mason Air Co.")), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 22,
    color: "var(--accent)"
  }))));
}
Object.assign(window, {
  StepWelcome,
  StepService,
  StepRecommend,
  StepQuote,
  StepDone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business/screens.jsx
try { (() => {
/* global React */
// HVAC business portal — desktop back office for the owner/operator.
const {
  useState
} = React;
const NS = () => window.AtHomeDesignSystem_006189;
const money = n => "$" + n.toLocaleString();
function Sidebar({
  active,
  onNav
}) {
  const {
    Icon
  } = NS();
  const items = [["dashboard", "Dashboard", "layout-dashboard"], ["pipeline", "Leads & Jobs", "kanban"], ["marketplace", "Buy Leads", "shopping-bag"], ["schedule", "Schedule", "calendar"], ["payments", "Payments", "credit-card"], ["integrations", "Integrations", "plug"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 232,
      flex: "none",
      background: "var(--surface-card)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 14px",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "4px 8px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 10,
      background: "var(--brand)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "@"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      color: "var(--text-strong)",
      letterSpacing: "-0.5px"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--accent-soft-fg)",
      background: "var(--accent-soft)",
      padding: "2px 7px",
      borderRadius: 999,
      marginLeft: "auto"
    }
  }, "PRO")), items.map(([id, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "10px 12px",
      marginBottom: 2,
      border: "none",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      textAlign: "left",
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      fontWeight: active === id ? 600 : 500,
      background: active === id ? "var(--brand-soft)" : "transparent",
      color: active === id ? "var(--brand-soft-fg)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19
  }), label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 8px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--slate-200)",
      color: "var(--slate-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 13,
      fontFamily: "var(--font-sans)"
    }
  }, "MA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Mason Air Co."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)"
    }
  }, "Austin, TX"))));
}
function Topbar({
  title
}) {
  const {
    Icon,
    Button
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      height: 68,
      flex: "none",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 9,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "New job")));
}
function Stat({
  label,
  value,
  delta,
  tone,
  icon
}) {
  const {
    Card,
    Icon,
    Badge
  } = NS();
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-soft)",
      color: "var(--brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), delta && /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      color: "var(--text-strong)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, label));
}
function DashboardView() {
  const {
    Card,
    Badge,
    Avatar,
    Icon
  } = NS();
  const jobs = [["Dana Rivera", "System replace · Balanced 16 SEER2", "Thu 8–10 AM", "scheduled", money(8950)], ["Theo Brooks", "AC repair · No cooling", "Today 2–4 PM", "en route", money(420)], ["Lena Ortiz", "New install · 2.5 ton", "Quote sent", "quoted", money(6480)], ["Sam Whitfield", "Maintenance · Tune-up", "Fri 11 AM", "scheduled", money(189)]];
  const toneFor = {
    scheduled: "info",
    "en route": "warning",
    quoted: "neutral",
    won: "success"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 22,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Revenue this month",
    value: money(184200),
    delta: "+18%",
    tone: "success",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Open jobs",
    value: "12",
    delta: "3 today",
    tone: "info",
    icon: "wrench"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Close rate",
    value: "64%",
    delta: "+9%",
    tone: "success",
    icon: "target"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Avg. ticket",
    value: money(7340),
    delta: "",
    tone: "neutral",
    icon: "receipt"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "Today & upcoming"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-link)",
      fontWeight: 600
    }
  }, "View all")), jobs.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "15px 22px",
      borderBottom: i < jobs.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: j[0],
    tone: "neutral",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, j[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, j[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-body)",
      width: 110,
      textAlign: "right"
    }
  }, j[2]), /*#__PURE__*/React.createElement(Badge, {
    tone: toneFor[j[3]],
    dot: true
  }, j[3]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)",
      width: 84,
      textAlign: "right"
    }
  }, j[4])))));
}
function IntegrationsView() {
  const {
    Card,
    Switch,
    Badge,
    Icon
  } = NS();
  const rows = [["Jobber", "Sync customers, jobs & invoices", true, "briefcase"], ["Housecall Pro", "Two-way schedule & dispatch sync", true, "truck"], ["Stripe", "Card payments & marketplace payouts", true, "credit-card"], ["PayPal", "Alternate checkout for deposits", false, "wallet"], ["Wisetack Financing", "Real-time consumer pre-qualification", true, "badge-dollar-sign"], ["Permit Portal (TX)", "Auto-submit permits & track inspections", false, "file-check"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      overflow: "auto",
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Connect the tools you already run on. AtHome keeps everything in sync \u2014 no double entry."), rows.map(([name, desc, on, icon], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      color: "var(--text-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, name), on && /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm"
  }, "Connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, desc)), /*#__PURE__*/React.createElement(SwitchWrap, {
    on: on
  }))));
}
function SwitchWrap({
  on
}) {
  const {
    Switch
  } = NS();
  const [v, setV] = useState(on);
  return /*#__PURE__*/React.createElement(Switch, {
    checked: v,
    onChange: setV
  });
}
Object.assign(window, {
  Sidebar,
  Topbar,
  DashboardView,
  IntegrationsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/consumer/screens.jsx
try { (() => {
/* global React */
// Consumer journey — a guided online version of the in-home sales presentation.
// Flow: Welcome → AI Home Inspection → Learn (video education) → Compare
//       (brands/features) → Add-ons (upsells) → Tailored Quote → Booked.

const {
  useState
} = React;
const NS = () => window.AtHomeDesignSystem_006189;
function money(n) {
  return "$" + n.toLocaleString();
}

// Shared add-on catalog (value-framed upsells)
const ADDONS = [{
  id: "thermo",
  name: "Smart thermostat",
  value: "Trims bills ~8% and learns your schedule",
  price: 220,
  icon: "thermometer",
  mo: false
}, {
  id: "purify",
  name: "Whole-home air purification",
  value: "Cuts allergens, dust & airborne viruses",
  price: 1150,
  icon: "wind",
  mo: false
}, {
  id: "ducts",
  name: "Duct sealing & balancing",
  value: "Stop paying to cool your attic",
  price: 680,
  icon: "git-merge",
  mo: false
}, {
  id: "warranty",
  name: "Extended 10-yr labor",
  value: "Zero surprise repair bills for a decade",
  price: 540,
  icon: "shield-check",
  mo: false
}, {
  id: "plan",
  name: "Comfort maintenance plan",
  value: "2 tune-ups/yr — keeps your warranty valid",
  price: 18,
  icon: "calendar-check",
  mo: true
}];
window.AH_ADDONS = ADDONS;
const SYSTEMS = [{
  id: 0,
  brand: "Goodman",
  tier: "Essential",
  sub: "Reliable, budget-friendly comfort",
  seer: "14.3",
  stages: "Single-stage",
  db: "72 dB",
  price: 6480,
  mo: 112,
  feats: ["Solid cooling & heating", "10-yr parts warranty", "Great value per dollar"]
}, {
  id: 1,
  brand: "Carrier",
  tier: "Balanced",
  sub: "Our most-picked efficiency sweet spot",
  seer: "16.0",
  stages: "Two-stage",
  db: "66 dB",
  price: 8950,
  mo: 154,
  best: true,
  feats: ["Two-stage = steadier temps", "Quieter operation", "Humidity control", "Lower monthly bills"]
}, {
  id: 2,
  brand: "Trane",
  tier: "Peak",
  sub: "Quietest, lowest bills, variable-speed",
  seer: "20.0",
  stages: "Variable-speed",
  db: "57 dB",
  price: 12400,
  mo: 214,
  feats: ["Variable-speed precision", "Whisper-quiet 57 dB", "Best efficiency (20 SEER2)", "Premium humidity control", "12-yr warranty"]
}];
window.AH_SYSTEMS = SYSTEMS;

// ---- Shared chrome -------------------------------------------------
function JourneyShell({
  step,
  scroll = true,
  children,
  footer
}) {
  const {
    Stepper
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      maxWidth: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      height: 812,
      background: "var(--surface-card)",
      borderRadius: 28,
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 0",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20,
      letterSpacing: "-0.04em",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, "@"), "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.22em",
      color: "var(--brand)",
      marginTop: 5
    }
  }, "HVAC"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--success)"
    }
  }), "Mason Air Co.")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ["Home", "Inspect", "Learn", "System", "Quote"],
    current: step
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: scroll ? "auto" : "hidden",
      padding: "6px 24px 12px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px 20px",
      flex: "none",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-card)"
    }
  }, footer));
}
function NavRow({
  onBack,
  onNext,
  nextLabel = "Continue",
  nextIcon = "arrow-right"
}) {
  const {
    Button,
    Icon
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, onBack && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: onBack,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onNext,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: nextIcon,
      size: 19
    })
  }, nextLabel));
}

// ---- Step 0: Welcome ----------------------------------------------
function StepWelcome({
  onNext
}) {
  const {
    Input,
    Icon,
    Badge
  } = NS();
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 0,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onNext: onNext,
      nextLabel: "Start my walkthrough"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, "A guided walkthrough \u2014 not a sales pitch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      marginTop: 16,
      marginBottom: 12,
      color: "var(--text-strong)",
      letterSpacing: "-0.03em",
      lineHeight: 1.1
    }
  }, "Let's get your home comfortable \u2014 the honest way."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-body)",
      marginBottom: 24,
      lineHeight: 1.5
    }
  }, "We'll inspect your home with you, explain your real options, and build a quote that's actually sized to your house. Takes about 8 minutes."), /*#__PURE__*/React.createElement(Input, {
    label: "Where's home?",
    placeholder: "Street address or ZIP",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      marginTop: 22
    }
  }, [["scan-line", "AI home inspection"], ["play-circle", "Learn as you go"], ["badge-check", "All-in honest price"]].map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, t))))));
}

// ---- Step 1: AI Home Inspection -----------------------------------
function StepInspection({
  onNext,
  onBack
}) {
  const {
    Icon,
    Card,
    Badge
  } = NS();
  const detected = [["home", "1,850 sq ft · 2 stories"], ["calendar", "Built 1998"], ["fan", "Existing 3-ton unit · ~14 yrs"], ["layers", "R-19 attic insulation"], ["thermometer-sun", "8 rooms · 2 zones"], ["plug-zap", "200A panel · electric-ready"]];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 1,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: "Looks right \u2014 continue"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--brand-soft-fg)",
      background: "var(--brand-soft)",
      padding: "6px 12px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14
  }), "AI home inspection"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "14px 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "We took a look at your home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 18,
      lineHeight: 1.5
    }
  }, "From your address, satellite, and public records \u2014 confirm anything that's off so your quote is exact."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 150,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 16,
      background: "linear-gradient(135deg, var(--slate-200), var(--slate-300))",
      display: "flex",
      alignItems: "flex-end",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(10,108,240,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(10,108,240,.18) 1px, transparent 1px)",
      backgroundSize: "26px 26px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(11,18,32,.72)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600,
      padding: "5px 10px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "scan-line",
    size: 13
  }), "Scanning"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 12.5,
      color: "var(--slate-700)",
      fontWeight: 600,
      background: "rgba(255,255,255,.85)",
      padding: "5px 10px",
      borderRadius: 8
    }
  }, "123 Oak Hollow Dr")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, detected.map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "11px 12px",
      border: "1px solid var(--border-subtle)",
      borderRadius: 12,
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--text-strong)",
      fontWeight: 600,
      lineHeight: 1.25
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 16,
      padding: "14px 16px",
      background: "var(--brand-soft)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--brand-soft-fg)",
      fontWeight: 600
    }
  }, "Quote accuracy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "Add a photo of your unit to reach 99%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      color: "var(--brand)"
    }
  }, "94%"))));
}

// ---- Step 2: Learn (education videos) -----------------------------
function StepLearn({
  onNext,
  onBack
}) {
  const {
    Icon
  } = NS();
  const vids = [["Why the right size matters", "2:14", "Oversized isn't better — here's why", "ruler"], ["Single vs. two-stage vs. variable", "3:01", "What you actually feel day to day", "git-merge"], ["SEER2 & your power bill", "2:30", "How efficiency pays you back", "zap"], ["What a great install looks like", "1:48", "The details cheap installs skip", "wrench"]];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 2,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: "I'm ready to compare"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "A few things worth knowing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 18,
      lineHeight: 1.5
    }
  }, "Short, no-fluff explainers so you can spend confidently \u2014 watch what's useful, skip the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, vids.map(([title, dur, sub, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 13,
      alignItems: "center",
      padding: 10,
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      cursor: "pointer",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 92,
      height: 60,
      flex: "none",
      borderRadius: 10,
      overflow: "hidden",
      background: "linear-gradient(135deg, var(--blue-500), var(--blue-700))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "rgba(255,255,255,.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 15,
    color: "var(--blue-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 5,
      right: 5,
      fontSize: 9.5,
      fontWeight: 700,
      color: "#fff",
      background: "rgba(11,18,32,.6)",
      padding: "1px 5px",
      borderRadius: 5,
      fontFamily: "var(--font-mono)"
    }
  }, dur)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--text-faint)"
  }))))));
}

// ---- Step 3a: Compare brands & systems ----------------------------
function StepCompare({
  system,
  setSystem,
  onNext,
  onBack
}) {
  const {
    Icon,
    Badge
  } = NS();
  const SYS = window.AH_SYSTEMS;
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 3,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: "Continue with this system"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--brand-soft-fg)",
      background: "var(--brand-soft)",
      padding: "6px 12px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14
  }), "Matched to your 1,850 ft\xB2 home"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "14px 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "Compare your options."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 16,
      lineHeight: 1.5
    }
  }, "Three real systems that fit your home \u2014 same trusted install, different comfort and efficiency."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, SYS.map(s => {
    const sel = system === s.id;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSystem(s.id),
      style: {
        textAlign: "left",
        cursor: "pointer",
        padding: 16,
        borderRadius: 16,
        background: "var(--surface-card)",
        border: sel ? "2px solid var(--brand)" : "2px solid var(--border-default)",
        boxShadow: sel ? "var(--shadow-md)" : "none",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 17,
        color: "var(--text-strong)"
      }
    }, s.brand, " \xB7 ", s.tier), s.best && /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm"
    }, "Best match")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, s.sub)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: "none",
        borderRadius: "50%",
        border: sel ? "none" : "2px solid var(--border-default)",
        background: sel ? "var(--brand)" : "transparent",
        color: "#fff",
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, sel ? "✓" : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        margin: "12px 0",
        flexWrap: "wrap"
      }
    }, [["gauge", s.seer + " SEER2"], ["git-merge", s.stages], ["volume-1", s.db]].map(([ic, v], j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 12,
        color: "var(--text-body)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 14,
      color: "var(--brand)"
    }), v))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        marginBottom: 12
      }
    }, s.feats.map((f, j) => /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14,
      color: "var(--success)"
    }), f))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingTop: 10,
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 21,
        color: sel ? "var(--brand)" : "var(--text-strong)"
      }
    }, money(s.price)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "or ", money(s.mo), "/mo")));
  }))));
}

// ---- Step 3b: Add-ons (upsells) -----------------------------------
function StepAddons({
  addons,
  toggle,
  onNext,
  onBack
}) {
  const {
    Icon,
    Switch
  } = NS();
  const extra = window.AH_ADDONS.filter(a => addons[a.id] && !a.mo).reduce((s, a) => s + a.price, 0);
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 3,
    footer: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, "Add-ons selected"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 18,
        color: "var(--text-strong)"
      }
    }, "+", money(extra))), /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: "See my tailored quote"
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "Make it even better."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 16,
      lineHeight: 1.5
    }
  }, "Optional, and genuinely useful. Add what fits \u2014 skip what doesn't. Nothing's pre-checked."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, window.AH_ADDONS.map(a => {
    const on = !!addons[a.id];
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      onClick: () => toggle(a.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 13,
        padding: 14,
        cursor: "pointer",
        borderRadius: 14,
        background: on ? "var(--brand-soft)" : "var(--surface-card)",
        border: on ? "1.5px solid var(--brand)" : "1.5px solid var(--border-subtle)",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flex: "none",
        borderRadius: 11,
        background: on ? "var(--brand)" : "var(--surface-sunken)",
        color: on ? "#fff" : "var(--text-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 700,
        color: "var(--text-strong)",
        letterSpacing: "-0.01em"
      }
    }, a.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 1
      }
    }, a.value)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-strong)",
        marginBottom: 6
      }
    }, a.mo ? money(a.price) + "/mo" : "+" + money(a.price)), /*#__PURE__*/React.createElement(Switch, {
      checked: on,
      onChange: () => toggle(a.id),
      size: "sm"
    })));
  }))));
}

// ---- Step 4: Tailored quote ---------------------------------------
function StepQuote({
  system,
  addons,
  onBack,
  onDone
}) {
  const {
    Icon,
    Checkbox
  } = NS();
  const [finance, setFinance] = useState(true);
  const [book, setBook] = useState(0);
  const sys = window.AH_SYSTEMS[system];
  const picked = window.AH_ADDONS.filter(a => addons[a.id]);
  const oneTime = picked.filter(a => !a.mo);
  const monthly = picked.filter(a => a.mo);
  const total = sys.price + oneTime.reduce((s, a) => s + a.price, 0);
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 4,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: () => onDone(book),
      nextLabel: book === 1 ? "Continue to checkout" : "Pick an inspection time",
      nextIcon: book === 1 ? "arrow-right" : "calendar"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--success-fg)",
      background: "var(--success-soft)",
      padding: "6px 12px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), "Locked price \xB7 good for 30 days"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "14px 0 16px",
      letterSpacing: "-0.02em"
    }
  }, "Your tailored quote."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: 16,
      padding: "6px 18px",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement(Line, {
    label: `${sys.brand} ${sys.tier} — ${sys.seer} SEER2`,
    amount: money(sys.price),
    strong: true,
    border: true
  }), oneTime.map((a, i) => /*#__PURE__*/React.createElement(Line, {
    key: a.id,
    label: a.name,
    amount: "+" + money(a.price),
    border: true
  })), /*#__PURE__*/React.createElement(Line, {
    label: "Professional install + haul-away",
    inc: true,
    border: true
  }), /*#__PURE__*/React.createElement(Line, {
    label: "Permit & inspection",
    inc: true,
    border: monthly.length > 0
  }), monthly.map(a => /*#__PURE__*/React.createElement(Line, {
    key: a.id,
    label: a.name,
    amount: money(a.price) + "/mo",
    accent: true,
    border: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "20px 4px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, "All-in total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 34,
      color: "var(--brand)",
      letterSpacing: "-0.03em"
    }
  }, money(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "14px 16px",
      background: "var(--brand-soft)",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: finance,
    onChange: setFinance,
    label: `Finance it — ${money(Math.round(total / 60))}/mo at 6.9% APR, $0 down`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--brand-soft-fg)",
      marginTop: 8,
      paddingLeft: 32
    }
  }, "Pre-qualify in 60 seconds, no credit hit.")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em",
      margin: "22px 0 12px"
    }
  }, "How would you like to move forward?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(BookOption, {
    selected: book === 0,
    onClick: () => setBook(0),
    icon: "calendar-clock",
    title: "Schedule a free in-home inspection",
    badge: "Most popular",
    badgeTone: "brand",
    desc: "Pick a date & time window. A specialist confirms measurements on-site, then you book the install \u2014 no payment today."
  }), /*#__PURE__*/React.createElement(BookOption, {
    selected: book === 1,
    onClick: () => setBook(1),
    icon: "zap",
    title: "Buy online now",
    badge: "Good for emergencies",
    badgeTone: "warning",
    desc: "Review your unit, check out securely, and lock the soonest install slot \u2014 ideal when you have no heat or AC and can't wait."
  }))));
}
function BookOption({
  selected,
  onClick,
  icon,
  title,
  desc,
  badge,
  badgeTone
}) {
  const {
    Icon,
    Badge
  } = NS();
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-pressed": selected,
    style: {
      textAlign: "left",
      cursor: "pointer",
      display: "flex",
      gap: 13,
      alignItems: "flex-start",
      padding: 15,
      borderRadius: 16,
      background: selected ? "var(--brand-soft)" : "var(--surface-card)",
      border: selected ? "2px solid var(--brand)" : "2px solid var(--border-default)",
      boxShadow: selected ? "var(--shadow-sm)" : "none",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: "none",
      borderRadius: 12,
      background: selected ? "var(--brand)" : "var(--surface-sunken)",
      color: selected ? "#fff" : "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15.5,
      color: "var(--text-strong)",
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement(Badge, {
    tone: badgeTone,
    size: "sm"
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginTop: 4,
      lineHeight: 1.45
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      marginTop: 2,
      borderRadius: "50%",
      border: selected ? "none" : "2px solid var(--border-default)",
      background: selected ? "var(--brand)" : "transparent",
      color: "#fff",
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, selected ? "✓" : ""));
}
function Line({
  label,
  amount,
  inc,
  strong,
  accent,
  border = true
}) {
  const {
    Icon
  } = NS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "13px 0",
      borderBottom: border ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-body)",
      fontWeight: strong ? 700 : 500
    }
  }, label), inc ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12,
      color: "var(--success)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  }), "Included") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13.5,
      fontWeight: 600,
      color: accent ? "var(--brand)" : "var(--text-strong)"
    }
  }, amount));
}

// ---- Pay-now step A: item / unit review ---------------------------
function StepReview({
  system,
  addons,
  onBack,
  onNext
}) {
  const {
    Icon,
    Badge
  } = NS();
  const sys = window.AH_SYSTEMS[system];
  const oneTime = window.AH_ADDONS.filter(a => addons[a.id] && !a.mo);
  const total = sys.price + oneTime.reduce((s, a) => s + a.price, 0);
  const specs = [["Model", `${sys.brand} ${sys.tier}`], ["Cooling capacity", "3.5 ton (42,000 BTU)"], ["Efficiency", `${sys.seer} SEER2`], ["Compressor", sys.stages], ["Sound level", sys.db], ["Refrigerant", "R-454B (low-GWP)"], ["Warranty", "10-yr parts + labor"], ["Footprint", "Fits existing pad"]];
  const fit = [["ruler", "Right-sized for 1,850 ft²", "Matches your Manual-J load — no short-cycling, no oversizing."], ["thermometer-sun", "Solves your hot upstairs", "Two-stage runs longer at low speed to even out your 2nd floor."], ["git-merge", "Reuses your lineset & pad", "Existing connections fit — that's ~$600 less than a full reroute."], ["leaf", "Tuned for a 1998 build", "Paired with your R-19 attic for realistic, honest efficiency gains."]];
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 4,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: "Continue to checkout"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "Exactly what you're getting."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 16,
      lineHeight: 1.5
    }
  }, "The full unit, every spec, and why it fits your home \u2014 no fine print later."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 8,
      background: "radial-gradient(120% 120% at 70% 10%, var(--blue-100), var(--slate-200))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "air-vent",
    size: 74,
    color: "var(--blue-600)",
    strokeWidth: 1.25
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      fontSize: 11,
      fontWeight: 700,
      color: "var(--slate-700)",
      background: "rgba(255,255,255,.85)",
      padding: "5px 10px",
      borderRadius: 8
    }
  }, sys.brand, " 24ANB7 \xB7 3.5 ton"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 12,
      right: 12,
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 10.5,
      fontWeight: 600,
      color: "#fff",
      background: "rgba(11,18,32,.55)",
      padding: "4px 9px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 12
  }), "Product photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      overflow: "hidden",
      margin: "14px 0"
    }
  }, specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "11px 16px",
      background: i % 2 ? "var(--surface-card)" : "var(--surface-sunken)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      margin: "18px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, "Why it fits your home")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, fit.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      padding: 13,
      border: "1px solid var(--border-subtle)",
      borderRadius: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flex: "none",
      borderRadius: 9,
      background: "var(--brand-soft)",
      color: "var(--brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginTop: 2,
      lineHeight: 1.4
    }
  }, d))))), oneTime.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--text-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Add-ons included"), oneTime.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "9px 0",
      fontSize: 13.5,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--success)"
  }), a.name, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "+", money(a.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 12,
      padding: "16px 0 4px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, "All-in total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 30,
      color: "var(--brand)",
      letterSpacing: "-0.03em"
    }
  }, money(total)))));
}

// ---- Pay-now step B: checkout -------------------------------------
function StepCheckout({
  system,
  addons,
  onBack,
  onNext
}) {
  const {
    Icon,
    Input,
    Badge
  } = NS();
  const [pm, setPm] = useState("full");
  const sys = window.AH_SYSTEMS[system];
  const oneTime = window.AH_ADDONS.filter(a => addons[a.id] && !a.mo);
  const total = sys.price + oneTime.reduce((s, a) => s + a.price, 0);
  const mo = Math.round(total / 60);
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 4,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: onNext,
      nextLabel: pm === "full" ? `Pay ${money(total)}` : "Apply & reserve slot",
      nextIcon: pm === "full" ? "lock" : "arrow-right"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "0 0 14px",
      letterSpacing: "-0.02em"
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 14,
      background: "var(--surface-sunken)",
      borderRadius: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: 10,
      background: "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--brand)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "air-vent",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, sys.brand, " ", sys.tier, oneTime.length ? ` + ${oneTime.length} add-on${oneTime.length > 1 ? "s" : ""}` : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "Install incl. \xB7 soonest slot reserved at payment")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "var(--text-strong)"
    }
  }, money(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--text-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Your details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Dana Rivera"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    defaultValue: "dana@email.com",
    containerStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    defaultValue: "(512) 555-4821",
    containerStyle: {
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--text-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "How you'd like to pay"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 16
    }
  }, [["full", "Pay in full", money(total)], ["finance", "Monthly financing", `${money(mo)}/mo`]].map(([id, t, s]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setPm(id),
    style: {
      flex: 1,
      textAlign: "left",
      cursor: "pointer",
      padding: "13px 14px",
      borderRadius: 13,
      background: pm === id ? "var(--brand-soft)" : "var(--surface-card)",
      border: pm === id ? "2px solid var(--brand)" : "2px solid var(--border-default)",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: pm === id ? "var(--brand-soft-fg)" : "var(--text-muted)",
      marginTop: 2,
      fontWeight: 600
    }
  }, s)))), pm === "full" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Card number",
    defaultValue: "4242 4242 4242 4242",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "credit-card",
      size: 16
    }),
    suffix: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 14
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Expiry",
    defaultValue: "09 / 28",
    containerStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    defaultValue: "123",
    containerStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "ZIP",
    defaultValue: "78704",
    containerStyle: {
      width: 96
    }
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      border: "1px solid var(--border-subtle)",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, "Financing by Wisetack"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm"
  }, "Soft check")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--brand)"
    }
  }, money(mo), "/mo"), " \xB7 6.9% APR \xB7 60 mo \xB7 $0 down. Checking eligibility won't affect your credit score. You'll get a decision in seconds.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      marginTop: 16,
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14,
    color: "var(--success)"
  }), "Secured by Stripe \xB7 256-bit encryption")));
}

// ---- Calendar (in-home inspection OR install) ---------------------
function StepCalendar({
  mode = "inspection",
  onBack,
  onNext
}) {
  const {
    Icon
  } = NS();
  const [day, setDay] = useState(25);
  const [win, setWin] = useState(0);
  const windows = ["8–10 AM", "10 AM–12 PM", "12–2 PM", "2–4 PM", "4–6 PM"];
  const offset = new Date(2026, 5, 1).getDay(); // June 2026
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= 30; d++) cells.push(d);
  const isInspect = mode === "inspection";
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 4,
    footer: /*#__PURE__*/React.createElement(NavRow, {
      onBack: onBack,
      onNext: () => onNext({
        day,
        win: windows[win]
      }),
      nextLabel: `Confirm · Jun ${day}, ${windows[win]}`,
      nextIcon: "check"
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--brand-soft-fg)",
      background: "var(--brand-soft)",
      padding: "6px 12px",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isInspect ? "clipboard-check" : "wrench",
    size: 14
  }), isInspect ? "Free in-home inspection" : "Install appointment"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      margin: "14px 0 6px",
      letterSpacing: "-0.02em"
    }
  }, isInspect ? "Pick a time to meet." : "Schedule your install."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginBottom: 18,
      lineHeight: 1.5
    }
  }, isInspect ? "A specialist confirms measurements and answers questions on-site — about 45 minutes, no obligation." : "Choose when your crew arrives. Most installs wrap in a single day."), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, "June 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4,
      textAlign: "center"
    }
  }, ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: "h" + i,
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-faint)",
      padding: "4px 0"
    }
  }, d)), cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const past = d < 24;
    const sel = d === day;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: past,
      onClick: () => setDay(d),
      style: {
        aspectRatio: "1",
        border: "none",
        borderRadius: 9,
        cursor: past ? "default" : "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13.5,
        fontWeight: sel ? 700 : 500,
        background: sel ? "var(--brand)" : "transparent",
        color: sel ? "#fff" : past ? "var(--text-faint)" : "var(--text-strong)",
        opacity: past ? 0.4 : 1
      }
    }, d);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--text-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      margin: "20px 0 12px"
    }
  }, "Arrival window"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, windows.map((w, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setWin(i),
    style: {
      cursor: "pointer",
      padding: "10px 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      background: win === i ? "var(--brand)" : "var(--surface-card)",
      color: win === i ? "#fff" : "var(--text-body)",
      border: win === i ? "1.5px solid var(--brand)" : "1.5px solid var(--border-default)",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, w)))));
}

// ---- Shared success blocks ----------------------------------------
function SmsCard() {
  const {
    Icon,
    Switch
  } = NS();
  const [on, setOn] = useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: 14,
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: "none",
      borderRadius: 10,
      background: "var(--success-soft)",
      color: "var(--success)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-square-text",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "SMS updates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, "Live status to (512) \u2022\u2022\u2022-4821")), /*#__PURE__*/React.createElement(Switch, {
    checked: on,
    onChange: setOn,
    size: "sm"
  }));
}
function AppCard() {
  const {
    Icon
  } = NS();
  const btn = {
    display: "flex",
    alignItems: "center",
    gap: 9,
    flex: 1,
    padding: "11px 14px",
    borderRadius: 12,
    background: "var(--slate-900)",
    color: "#fff",
    cursor: "pointer",
    border: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderRadius: 16,
      background: "var(--brand-soft)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: "none",
      borderRadius: 11,
      background: "var(--brand)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 20
    }
  }, "@"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Get the @Home app"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--brand-soft-fg)"
    }
  }, "Track your install, message your crew, see ETAs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "iPhone")), /*#__PURE__*/React.createElement("button", {
    style: btn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "Android"))));
}

// ---- Success (paid receipt → schedule install, or scheduled) ------
function StepSuccess({
  kind,
  mode,
  appt,
  system,
  addons,
  onScheduleInstall,
  onRestart
}) {
  const {
    Button,
    Icon,
    Avatar,
    Badge
  } = NS();
  const paid = kind === "paid";
  const sys = window.AH_SYSTEMS[system];
  const oneTime = window.AH_ADDONS.filter(a => addons[a.id] && !a.mo);
  const total = sys.price + oneTime.reduce((s, a) => s + a.price, 0);
  return /*#__PURE__*/React.createElement(JourneyShell, {
    step: 4,
    footer: paid ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onScheduleInstall,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 19
      })
    }, "Schedule my install") : /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "lg",
      fullWidth: true,
      onClick: onRestart
    }, "Back to start")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      paddingTop: 14,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      borderRadius: "50%",
      background: "var(--success-soft)",
      color: "var(--success)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      marginBottom: 8,
      letterSpacing: "-0.02em"
    }
  }, paid ? "Payment confirmed." : mode === "install" ? "Install booked." : "Inspection booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      maxWidth: 350,
      margin: "0 auto",
      lineHeight: 1.5
    }
  }, paid ? "A receipt is on its way to dana@email.com. Last step — pick when we install." : `${mode === "install" ? "Your crew arrives" : "Your specialist arrives"} June ${appt?.day || 25}, ${appt?.win || "8–10 AM"}. A confirmation is in your inbox.`)), paid && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      border: "1px solid var(--border-subtle)",
      borderRadius: 14,
      padding: "6px 16px",
      textAlign: "left"
    }
  }, [["Order", "#AH-26-08841"], ["Paid", money(total)], ["Method", "Visa •••• 4242"], ["Date", "Jun 23, 2026"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: i < 3 ? "1px solid var(--border-subtle)" : "none",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontWeight: 600,
      fontFamily: k === "Paid" || k === "Order" ? "var(--font-mono)" : "inherit"
    }
  }, v)))), !paid && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 14,
      border: "1px solid var(--border-subtle)",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marcus Hale",
    tone: "brand",
    size: 46
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15.5,
      color: "var(--text-strong)"
    }
  }, "Marcus Hale"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)"
    }
  }, mode === "install" ? "Lead installer" : "Comfort specialist", " \xB7 Mason Air Co.")), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 21,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement(SmsCard, null), /*#__PURE__*/React.createElement(AppCard, null)));
}
Object.assign(window, {
  StepWelcome,
  StepInspection,
  StepLearn,
  StepCompare,
  StepAddons,
  StepQuote,
  StepReview,
  StepCheckout,
  StepCalendar,
  StepSuccess
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/consumer/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/screens.jsx
try { (() => {
/* global React */
// Agency marketplace — HVAC owners buy verified leads & completed-ready jobs.
const {
  useState
} = React;
const MNS = () => window.AtHomeDesignSystem_006189;
const m = n => "$" + n.toLocaleString();
function FilterRail() {
  const {
    Icon,
    Input,
    Checkbox,
    Badge
  } = MNS();
  const [chk, setChk] = useState({
    replace: true,
    repair: true,
    install: false,
    maint: false
  });
  const t = k => setChk(s => ({
    ...s,
    [k]: !s[k]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 252,
      flex: "none",
      padding: 22,
      borderRight: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      height: "100%",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-strong)",
      marginBottom: 16
    }
  }, "Filters"), /*#__PURE__*/React.createElement(Input, {
    label: "ZIP / radius",
    placeholder: "78701 \xB7 25 mi",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }),
    containerStyle: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--text-muted)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Job type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: chk.replace,
    onChange: () => t("replace"),
    label: "System replace"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: chk.repair,
    onChange: () => t("repair"),
    label: "Repair"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: chk.install,
    onChange: () => t("install"),
    label: "New install"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: chk.maint,
    onChange: () => t("maint"),
    label: "Maintenance"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--text-muted)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Customer type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Homeowner"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Landlord"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Commercial")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--text-muted)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Intent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Ready to buy"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    dot: true
  }, "Financing")));
}
function LeadCard({
  lead,
  onBuy
}) {
  const {
    Card,
    Badge,
    Button,
    Icon
  } = MNS();
  return /*#__PURE__*/React.createElement(Card, {
    pad: "none",
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: lead.hot ? "brand" : "neutral",
    dot: true
  }, lead.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, lead.zip)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--text-strong)"
    }
  }, lead.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, lead.detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: "auto",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    icon: "home",
    label: lead.customer
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "ruler",
    label: lead.size
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "clock",
    label: lead.age
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 18px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-muted)"
    }
  }, "Est. job value"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 18,
      color: "var(--accent)"
    }
  }, m(lead.value))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onBuy(lead),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Buy \xB7 ", m(lead.price))));
}
function Meta({
  icon,
  label
}) {
  const {
    Icon
  } = MNS();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12.5,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    color: "var(--text-faint)"
  }), label);
}
function MarketplaceView() {
  const {
    Icon,
    Badge
  } = MNS();
  const [bought, setBought] = useState(null);
  const leads = [{
    type: "System replace",
    hot: true,
    zip: "78704",
    title: "AC + furnace, 2-story",
    detail: "No cooling upstairs, wants efficiency",
    customer: "Homeowner",
    size: "~2,100 ft²",
    age: "12 min ago",
    value: 9400,
    price: 95
  }, {
    type: "Repair",
    hot: false,
    zip: "78745",
    title: "Compressor not starting",
    detail: "10-yr-old unit, may convert to replace",
    customer: "Homeowner",
    size: "1,450 ft²",
    age: "38 min ago",
    value: 520,
    price: 22
  }, {
    type: "New install",
    hot: true,
    zip: "78660",
    title: "New build, 3.5 ton",
    detail: "Builder-grade swap, ready to schedule",
    customer: "Landlord",
    size: "2,600 ft²",
    age: "1 hr ago",
    value: 11200,
    price: 120
  }, {
    type: "System replace",
    hot: false,
    zip: "78702",
    title: "Heat pump conversion",
    detail: "Pre-qualified for financing",
    customer: "Homeowner",
    size: "1,800 ft²",
    age: "2 hr ago",
    value: 8950,
    price: 88
  }, {
    type: "Maintenance",
    hot: false,
    zip: "78723",
    title: "2-unit tune-up contract",
    detail: "Annual, repeat-customer potential",
    customer: "Commercial",
    size: "—",
    age: "3 hr ago",
    value: 640,
    price: 18
  }, {
    type: "Repair",
    hot: true,
    zip: "78717",
    title: "No heat, newborn at home",
    detail: "Urgent, willing to pay premium",
    customer: "Homeowner",
    size: "1,950 ft²",
    age: "4 min ago",
    value: 780,
    price: 30
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 28px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 21,
      fontWeight: 700
    }
  }, "Lead marketplace"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "Verified, exclusive leads near Austin, TX \xB7 refreshed live")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, leads.length, " available now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 28
    }
  }, bought && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 18px",
      marginBottom: 20,
      background: "var(--success-soft)",
      borderRadius: "var(--radius-md)",
      color: "var(--success-fg)",
      fontSize: 14,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 18
  }), " Lead purchased \u2014 \"", bought.title, "\" is now in your pipeline. We charged ", m(bought.price), " via Stripe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
      gap: 18
    }
  }, leads.map((l, i) => /*#__PURE__*/React.createElement(LeadCard, {
    key: i,
    lead: l,
    onBuy: setBought
  })))));
}
Object.assign(window, {
  FilterRail,
  MarketplaceView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SelectableCard = __ds_scope.SelectableCard;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

})();
