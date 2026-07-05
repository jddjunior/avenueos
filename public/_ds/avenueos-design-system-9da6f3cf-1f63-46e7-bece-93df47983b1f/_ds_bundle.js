/* @ds-bundle: {"format":3,"namespace":"AvenueOSDesignSystem_9da6f3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"KPICard","sourcePath":"components/core/KPICard.jsx"},{"name":"Sparkline","sourcePath":"components/core/Sparkline.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a51f4d109a99","components/core/Card.jsx":"de64e0e181a8","components/core/Input.jsx":"c57e2eb931d6","components/core/KPICard.jsx":"a18b67b36f1a","components/core/Sparkline.jsx":"592384398146","components/core/StatusBadge.jsx":"d1b98dd294f8","components/data/DataTable.jsx":"24234371a5ba","components/data/ProgressBar.jsx":"f50e4bc26fcf","components/navigation/Tabs.jsx":"132bb6692e46","ui_kits/avenueos/AiGatewayScreen.jsx":"eff1a183abc1","ui_kits/avenueos/BillingScreen.jsx":"8977e699f229","ui_kits/avenueos/CommandPalette.jsx":"32cee657155d","ui_kits/avenueos/CroOverviewScreen.jsx":"26f1e47822b7","ui_kits/avenueos/DashboardScreen.jsx":"4f4094271d93","ui_kits/avenueos/EventsScreen.jsx":"06e0f6ff9645","ui_kits/avenueos/ExperimentsScreen.jsx":"c13a90e19fde","ui_kits/avenueos/Icon.jsx":"251e81f6ba43","ui_kits/avenueos/IntegrationsScreen.jsx":"2c013db91bb1","ui_kits/avenueos/KitData.js":"2a4bacc979e8","ui_kits/avenueos/ProductDetailScreen.jsx":"3ea32d286ed3","ui_kits/avenueos/SeoOverviewScreen.jsx":"a602159d7100","ui_kits/avenueos/Sidebar.jsx":"165a004137a8","ui_kits/avenueos/TenantDetailScreen.jsx":"7791e3328089","ui_kits/avenueos/TenantsScreen.jsx":"ba90943216c2","ui_kits/avenueos/TopBar.jsx":"fa7fb3e5ba0b","ui_kits/avenueos/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AvenueOSDesignSystem_9da6f3 = window.AvenueOSDesignSystem_9da6f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AvenueOS Button — compact action control.
 * variant: primary (electric green), secondary (ghost/outline), danger (red), subtle (muted ghost)
 * size: sm | md
 */
function Button({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 28,
      padding: '0 10px',
      fontSize: 12
    },
    md: {
      height: 34,
      padding: '0 14px',
      fontSize: 13
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#06140A',
      border: '1px solid var(--accent)',
      fontWeight: 600
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)',
      fontWeight: 500
    },
    subtle: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      fontWeight: 500
    },
    danger: {
      background: 'transparent',
      color: 'var(--status-error)',
      border: '1px solid var(--status-error)',
      fontWeight: 500
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.height,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      letterSpacing: 'var(--tracking-label)',
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      if (variant === 'primary' && !disabled) e.currentTarget.style.background = 'var(--accent)';
    },
    onMouseEnter: e => {
      if (variant === 'primary' && !disabled) e.currentTarget.style.background = 'var(--accent-hover)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AvenueOS Card — content container. --surface bg, hairline border, 8px radius, no shadow.
 * Hover elevates to --surface-raised when `interactive`.
 */
function Card({
  children,
  interactive = false,
  padded = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: padded ? 'var(--space-5)' : 0,
      transition: 'background var(--duration-normal) var(--ease-out), border-color var(--duration-normal) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.background = 'var(--surface-raised)';
        e.currentTarget.style.borderColor = 'var(--border-default)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.background = 'var(--surface)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AvenueOS Input — dark field, subtle border, green focus ring.
 * Optional leading icon and mono mode for numeric entry.
 */
function Input({
  value,
  onChange,
  placeholder = '',
  iconLeft = null,
  mono = false,
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const h = size === 'sm' ? 30 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: h,
      padding: '0 var(--space-3)',
      background: 'var(--surface-raised)',
      border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-default)'}`,
      boxShadow: focused ? '0 0 0 3px var(--accent-muted)' : 'none',
      borderRadius: 'var(--radius-md)',
      transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      opacity: disabled ? 0.4 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: mono ? 0 : 'var(--tracking-label)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Sparkline.jsx
try { (() => {
/**
 * AvenueOS Sparkline — inline SVG mini-chart for table cells / KPI tiles.
 * trend: 'up' (green) | 'down' (red) | 'flat' (gray) — or auto from first/last if omitted.
 */
function Sparkline({
  data = [],
  width = 72,
  height = 24,
  trend = null,
  strokeWidth = 1.5,
  fill = true
}) {
  if (!data || data.length < 2) {
    return /*#__PURE__*/React.createElement("svg", {
      width: width,
      height: height
    });
  }
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = strokeWidth;
  const stepX = (width - pad * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - (v - min) / range) * (height - pad * 2);
    return [x, y];
  });
  const dir = trend || (data[data.length - 1] >= data[0] ? 'up' : 'down');
  const color = dir === 'up' ? 'var(--status-success)' : dir === 'down' ? 'var(--status-error)' : 'var(--text-muted)';
  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${points[points.length - 1][0].toFixed(1)},${height} L${points[0][0].toFixed(1)},${height} Z`;
  const gid = 'spark-' + Math.random().toString(36).slice(2, 8);
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, fill && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gid})`
  })), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/core/KPICard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AvenueOS KPICard — large mono number, eyebrow label, optional trend + sparkline.
 * trend: number (percentage). Positive = green up, negative = red down.
 */
function KPICard({
  label,
  value,
  unit = '',
  trend = null,
  spark = null,
  accent = false,
  style = {},
  ...rest
}) {
  const up = trend != null && trend >= 0;
  const trendColor = trend == null ? 'var(--text-muted)' : up ? 'var(--status-success)' : 'var(--status-error)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      border: `1px solid ${accent ? 'var(--accent)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 1,
      color: accent ? 'var(--accent)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginLeft: 2
    }
  }, unit)), spark && /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: spark,
    width: 72,
    height: 28,
    trend: up ? 'up' : trend != null ? 'down' : 'flat'
  })), trend != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: trendColor,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500
    }
  }, up ? '▲' : '▼', " ", Math.abs(trend).toFixed(1), "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "vs last 30d")));
}
Object.assign(__ds_scope, { KPICard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KPICard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AvenueOS StatusBadge — dot + label. Functional status, not decoration.
 * status: success | warning | error | info | live | neutral
 */
function StatusBadge({
  status = 'neutral',
  children,
  style = {},
  ...rest
}) {
  const map = {
    success: {
      color: 'var(--status-success)',
      bg: 'var(--status-success-muted)',
      label: 'Healthy'
    },
    live: {
      color: 'var(--accent)',
      bg: 'var(--accent-muted)',
      label: 'Live'
    },
    warning: {
      color: 'var(--status-warning)',
      bg: 'var(--status-warning-muted)',
      label: 'Degraded'
    },
    error: {
      color: 'var(--status-error)',
      bg: 'var(--status-error-muted)',
      label: 'Down'
    },
    info: {
      color: 'var(--status-info)',
      bg: 'var(--status-info-muted)',
      label: 'Info'
    },
    neutral: {
      color: 'var(--text-muted)',
      bg: 'var(--surface-raised)',
      label: 'Idle'
    }
  };
  const s = map[status] || map.neutral;
  const pulse = status === 'live';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 22,
      padding: '0 var(--space-2) 0 var(--space-2)',
      background: s.bg,
      color: s.color,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.color,
      boxShadow: pulse ? `0 0 0 0 ${s.color}` : 'none',
      animation: pulse ? 'avos-pulse 1.6s var(--ease-out) infinite' : 'none',
      flexShrink: 0
    }
  }), children || s.label, /*#__PURE__*/React.createElement("style", null, `@keyframes avos-pulse {
        0% { box-shadow: 0 0 0 0 rgba(57,255,20,0.5); }
        70% { box-shadow: 0 0 0 5px rgba(57,255,20,0); }
        100% { box-shadow: 0 0 0 0 rgba(57,255,20,0); }
      }
      @media (prefers-reduced-motion: reduce) { span { animation: none !important; } }`));
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * AvenueOS DataTable — dense data display. Sortable columns, sticky header,
 * alternating row tints, hover highlight, inline cell renderers.
 *
 * columns: [{ key, label, align?, mono?, width?, render?(row) }]
 * rows: array of objects
 */
function DataTable({
  columns = [],
  rows = [],
  onRowClick = null,
  style = {}
}) {
  const [sort, setSort] = React.useState({
    key: null,
    dir: 1
  });
  const sorted = React.useMemo(() => {
    if (!sort.key) return rows;
    const col = columns.find(c => c.key === sort.key);
    if (!col) return rows;
    return [...rows].sort((a, b) => {
      const av = a[sort.key],
        bv = b[sort.key];
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv)) * sort.dir;
    });
  }, [rows, sort, columns]);
  const toggleSort = key => setSort(s => s.key === key ? {
    key,
    dir: -s.dir
  } : {
    key,
    dir: 1
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    onClick: () => c.sortable !== false && toggleSort(c.key),
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      background: 'var(--surface)',
      textAlign: c.align || 'left',
      padding: '10px var(--space-4)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: sort.key === c.key ? 'var(--text-body)' : 'var(--text-muted)',
      borderBottom: '1px solid var(--border-default)',
      cursor: c.sortable === false ? 'default' : 'pointer',
      whiteSpace: 'nowrap',
      width: c.width || 'auto',
      userSelect: 'none'
    }
  }, c.label, sort.key === c.key && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      marginLeft: 6
    }
  }, sort.dir === 1 ? '↑' : '↓'))))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? ri,
    onClick: () => onRowClick && onRowClick(row),
    style: {
      background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--duration-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)';
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '11px var(--space-4)',
      fontSize: 13,
      fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontVariantNumeric: c.mono ? 'tabular-nums' : 'normal',
      color: c.strong ? 'var(--text-strong)' : 'var(--text-body)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    }
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
/**
 * AvenueOS ProgressBar — thin track, green fill. Capacity / completion.
 * value 0–100. color override for status fills.
 */
function ProgressBar({
  value = 0,
  color = 'var(--accent)',
  height = 6,
  showLabel = false,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums',
      minWidth: 38,
      textAlign: 'right'
    }
  }, pct.toFixed(0), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * AvenueOS Tabs — underline style, green active indicator.
 * tabs: [{ id, label }]. value/onChange controlled.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 10px',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        letterSpacing: 'var(--tracking-label)',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--duration-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--accent)',
        borderRadius: 'var(--radius-pill)',
        opacity: active ? 1 : 0,
        transition: 'opacity var(--duration-fast) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/AiGatewayScreen.jsx
try { (() => {
/* global Icon, KitData */
// AvenueOS AI gateway — agentic-layer usage: tokens, model tiering, cost by tenant.
function AiGatewayScreen({
  ds,
  nav
}) {
  const {
    KPICard,
    Card,
    DataTable,
    StatusBadge
  } = ds;
  const D = KitData;
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const totalCost = D.aiUsage.reduce((a, b) => a + b.cost, 0);
  const totalTokens = D.aiUsage.reduce((a, b) => a + b.tokens, 0);
  const totalReq = D.aiUsage.reduce((a, b) => a + b.requests, 0);
  const modelColor = {
    'Haiku 4.5': 'var(--status-info)',
    'Sonnet 4.5': 'var(--accent)',
    'Opus 4.1': '#D97757'
  };
  const cols = [{
    key: 'tenant',
    label: 'Tenant',
    strong: true,
    mono: true,
    render: r => r.tenant
  }, {
    key: 'productId',
    label: 'Product',
    render: r => {
      const p = D.productById(r.productId);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 2,
          background: p.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--text-body)'
        }
      }, p.name));
    }
  }, {
    key: 'model',
    label: 'Model',
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: modelColor[r.model]
      }
    }), r.model)
  }, {
    key: 'tokens',
    label: 'Tokens',
    align: 'right',
    mono: true,
    render: r => (r.tokens / 1e6).toFixed(2) + 'M'
  }, {
    key: 'requests',
    label: 'Requests',
    align: 'right',
    mono: true,
    render: r => r.requests.toLocaleString()
  }, {
    key: 'latency',
    label: 'Avg latency',
    align: 'right',
    mono: true,
    render: r => r.latency + 'ms'
  }, {
    key: 'cost',
    label: 'Cost',
    align: 'right',
    mono: true,
    strong: true,
    render: r => '$' + r.cost.toFixed(2)
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cpu",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "AI gateway")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Agentic-layer usage \xB7 Anthropic API \xB7 token, latency, and cost by tenant")), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "live"
  }, "Gateway healthy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Spend (30d)",
    value: '$' + totalCost.toFixed(0),
    trend: 8.4,
    spark: [4, 5, 5, 6, 7, 7, 8, 9],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Tokens",
    value: (totalTokens / 1e6).toFixed(1) + 'M',
    trend: 6.1,
    spark: [5, 6, 6, 7, 7, 8, 8, 9]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Requests",
    value: (totalReq / 1000).toFixed(1) + 'k',
    trend: 11.2,
    spark: [4, 5, 6, 6, 7, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg latency",
    value: "812",
    unit: "ms",
    trend: -4.2,
    spark: [9, 9, 8, 8, 7, 7, 7, 6]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Usage by tenant"), /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: D.aiUsage,
    onRowClick: r => nav.toTenant(r.tenant)
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...cardTitle,
      marginBottom: 4
    }
  }, "Model tiering"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Requests routed by tier to control cost"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 12,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      marginBottom: 18
    }
  }, D.aiTiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.model,
    style: {
      width: t.share + '%',
      background: t.color
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, D.aiTiers.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.model,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: t.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, t.model), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, t.share, "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Cost / 1k requests"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--accent)'
    }
  }, "$6.42")))));
}
window.AiGatewayScreen = AiGatewayScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/AiGatewayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/BillingScreen.jsx
try { (() => {
/* global Icon, KitData */
// AvenueOS Billing — Stripe Connect. Portfolio MRR, payouts, and per-tenant subscriptions.
function BillingScreen({
  ds,
  nav
}) {
  const {
    KPICard,
    Card,
    DataTable,
    StatusBadge,
    Button
  } = ds;
  const D = KitData;
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const usd = n => '$' + Number(n).toLocaleString('en-US');
  const statusMeta = {
    paid: {
      s: 'success',
      label: 'Paid'
    },
    past_due: {
      s: 'warning',
      label: 'Past due'
    },
    failed: {
      s: 'error',
      label: 'Failed'
    }
  };
  const cols = [{
    key: 'tenant',
    label: 'Tenant',
    strong: true,
    mono: true,
    render: r => r.tenant
  }, {
    key: 'productId',
    label: 'Product',
    render: r => {
      const p = D.productById(r.productId);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 2,
          background: p.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--text-body)'
        }
      }, p.name));
    }
  }, {
    key: 'plan',
    label: 'Plan',
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--text-body)',
        padding: '3px 9px',
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-pill)'
      }
    }, r.plan)
  }, {
    key: 'mrr',
    label: 'MRR',
    align: 'right',
    mono: true,
    strong: true,
    render: r => usd(r.mrr)
  }, {
    key: 'next',
    label: 'Next invoice',
    align: 'right',
    mono: true,
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, r.next)
  }, {
    key: 'status',
    label: 'Status',
    align: 'right',
    render: r => {
      const m = statusMeta[r.status];
      return /*#__PURE__*/React.createElement(StatusBadge, {
        status: m.s
      }, m.label);
    }
  }];
  const byProduct = D.products.map(p => ({
    ...p,
    share: p.mrr
  }));
  const totalMrr = D.products.reduce((a, b) => a + b.mrr, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "credit-card",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Billing")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Stripe Connect \xB7 portfolio revenue, payouts, and subscriptions")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Stripe dashboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Portfolio MRR",
    value: "$1.84M",
    trend: 12.4,
    spark: [3, 5, 4, 8, 7, 9, 11, 12],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Net payout (30d)",
    value: "$1.62M",
    trend: 11.1,
    spark: [4, 5, 5, 7, 7, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Outstanding",
    value: "$15.5k",
    trend: -3.2,
    spark: [6, 6, 5, 5, 5, 4, 4, 4]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Failed charges",
    value: "2",
    trend: 0,
    spark: [1, 2, 1, 2, 1, 2, 2, 2]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Subscriptions"), /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: D.billing,
    onRowClick: r => nav.toTenant(r.tenant)
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...cardTitle,
      marginBottom: 18
    }
  }, "Revenue by product"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, byProduct.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => nav.toProduct(p.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 2,
      background: p.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "$", (p.mrr / 1000).toFixed(0), "k")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.mrr / totalMrr * 100 + '%',
      height: '100%',
      background: p.color,
      borderRadius: 'var(--radius-pill)'
    }
  }))))))));
}
window.BillingScreen = BillingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/BillingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/CommandPalette.jsx
try { (() => {
/* global Icon */
// AvenueOS CommandPalette — cmd+K. Fuzzy search across products, views, actions.
function CommandPalette({
  onClose,
  onNavigate,
  labels
}) {
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(0);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  const items = [{
    id: 'dashboard',
    label: 'Dashboard',
    group: 'Navigate',
    icon: 'layout-dashboard'
  }, {
    id: 'athome',
    label: 'AtHome',
    group: 'Products',
    icon: 'home'
  }, {
    id: 'graft',
    label: 'GRAFT',
    group: 'Products',
    icon: 'target'
  }, {
    id: 'dealership',
    label: 'Dealership',
    group: 'Products',
    icon: 'car'
  }, {
    id: 'shiptow',
    label: 'Ship/Tow',
    group: 'Products',
    icon: 'truck'
  }, {
    id: 'sitefactory',
    label: 'Site Factory',
    group: 'Products',
    icon: 'layout-template'
  }, {
    id: 'seo',
    label: 'SEO overview',
    group: 'Intelligence',
    icon: 'search'
  }, {
    id: 'cro',
    label: 'CRO overview',
    group: 'Intelligence',
    icon: 'trending-up'
  }, {
    id: 'experiments',
    label: 'Experiments',
    group: 'Intelligence',
    icon: 'flask-conical'
  }, {
    id: 'tenants',
    label: 'Tenants',
    group: 'Operations',
    icon: 'layers'
  }, {
    id: 'ai',
    label: 'AI gateway',
    group: 'Operations',
    icon: 'cpu'
  }, {
    id: '__launch',
    label: 'Launch new tenant',
    group: 'Actions',
    icon: 'plus'
  }];
  const filtered = items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()));
  React.useEffect(() => {
    setSel(0);
  }, [q]);
  const onKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel(s => Math.min(s + 1, filtered.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel(s => Math.max(s - 1, 0));
    }
    if (e.key === 'Enter' && filtered[sel]) {
      const it = filtered[sel];
      if (!it.id.startsWith('__')) onNavigate(it.id);else onClose();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 600,
      background: 'rgba(5,8,12,0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '12vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 560,
      maxWidth: '90vw',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: onKey,
    placeholder: "Search tenants, products, actions\u2026",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '2px 6px',
      borderRadius: 4,
      background: 'var(--surface)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-muted)'
    }
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 360,
      overflowY: 'auto',
      padding: 6
    }
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "No matches"), filtered.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onMouseEnter: () => setSel(i),
    onClick: () => {
      if (!it.id.startsWith('__')) onNavigate(it.id);else onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      padding: '9px 12px',
      border: 'none',
      cursor: 'pointer',
      background: i === sel ? 'var(--accent-muted)' : 'transparent',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16,
    color: i === sel ? 'var(--accent)' : 'var(--text-muted)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.group))))));
}
window.CommandPalette = CommandPalette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/CroOverviewScreen.jsx
try { (() => {
/* global Icon, KitData, CrossLinkStrip */
// AvenueOS CRO overview (macro) — portfolio conversion intelligence + the cross-tenant
// experiment engine. Interlinks to products, tenants, SEO, and experiments.
function CroOverviewScreen({
  ds,
  nav
}) {
  const {
    KPICard,
    Card,
    Button,
    StatusBadge
  } = ds;
  const D = KitData;
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const fmt = n => n >= 1e6 ? (n / 1e6).toFixed(2) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(0) + 'k' : String(n);
  const winning = D.experiments.filter(e => e.lift > 0 && (e.status === 'running' || e.status === 'concluded'));
  const pending = D.experiments.filter(e => e.status === 'pending');
  const applied = D.experiments.filter(e => e.status === 'applied');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "CRO overview")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Portfolio conversion intelligence \xB7 funnel, revenue per visitor, and the cross-tenant experiment engine")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "flask-conical",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    }),
    onClick: () => nav.toExperiments()
  }, "All experiments")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg conversion",
    value: "3.12",
    unit: "%",
    trend: 2.1,
    spark: [5, 5, 6, 6, 7, 7, 8, 8],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Revenue / visitor",
    value: "$0.74",
    trend: 4.8,
    spark: [4, 5, 5, 6, 6, 7, 7, 8]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Macro conversions",
    value: "88.6k",
    trend: 3.4,
    spark: [6, 6, 7, 7, 8, 8, 9, 9]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Win rate",
    value: "61",
    unit: "%",
    trend: 9.0,
    spark: [4, 4, 5, 6, 6, 7, 7, 8]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg lift / win",
    value: "+5.4",
    unit: "%",
    trend: 1.2,
    spark: [5, 6, 6, 7, 7, 8, 8, 9]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Portfolio funnel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "All tenants \xB7 30d")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "The leaky bucket \u2014 where the portfolio loses intent. Biggest drop is the optimization target."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, D.funnel.map((f, i) => {
    const drop = i > 0 ? 100 - f.value / D.funnel[i - 1].value * 100 : 0;
    const worst = i === 2; // quote-started drop is biggest
    return /*#__PURE__*/React.createElement("div", {
      key: f.stage,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 110,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-body)',
        flexShrink: 0
      }
    }, f.stage), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 28,
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.pct + '%',
        height: '100%',
        background: i === D.funnel.length - 1 ? 'var(--accent)' : 'rgba(57,255,20,0.16)',
        borderRight: i === D.funnel.length - 1 ? 'none' : '2px solid rgba(57,255,20,0.4)',
        borderRadius: 'var(--radius-sm)',
        transition: 'width var(--duration-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0
      }
    }, fmt(f.value)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 70,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 5,
        flexShrink: 0
      }
    }, worst && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'var(--status-error)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: i === 0 ? 'var(--text-muted)' : worst ? 'var(--status-error)' : 'var(--text-muted)'
      }
    }, i === 0 ? '—' : '−' + drop.toFixed(0) + '%')));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Largest drop-off: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Engaged \u2192 Quote started (\u221257%)"), ". 3 running experiments target this step.")), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Conversion by vertical")), D.products.map(p => {
    const w = Math.min(100, p.cvr / 7 * 100);
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => nav.toProduct(p.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '12px 20px',
        border: 'none',
        borderTop: '1px solid var(--border-subtle)',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--surface-raised)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: p.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 92,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        flexShrink: 0
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 8,
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: w + '%',
        height: '100%',
        background: p.cvr < 2 ? 'var(--status-error)' : p.cvr < 3.5 ? 'var(--status-warning)' : 'var(--accent)',
        borderRadius: 'var(--radius-pill)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, p.cvr.toFixed(2), "%"));
  }))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Page-template performance"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Winning patterns roll up across tenants")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 0,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, D.templates.map((t, i) => {
    const p = D.productById(t.product);
    return /*#__PURE__*/React.createElement("button", {
      key: t.name,
      onClick: () => nav.toProduct(t.product),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '16px 18px',
        border: 'none',
        borderRight: i < D.templates.length - 1 ? '1px solid var(--border-subtle)' : 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--surface-raised)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, p.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 20,
        color: t.trend === 'down' ? 'var(--status-error)' : 'var(--accent)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, t.cvr.toFixed(1), "%"), /*#__PURE__*/React.createElement(Icon, {
      name: t.trend === 'down' ? 'arrow-down-right' : 'arrow-up-right',
      size: 14,
      color: t.trend === 'down' ? 'var(--status-error)' : 'var(--status-success)'
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, t.uses, " tenants"));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 15,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Cross-tenant experiment engine"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toExperiments(),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, "Open experiments \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(EngineColumn, {
    label: "Winning",
    count: winning.length,
    color: "var(--status-success)",
    exps: winning,
    nav: nav,
    ds: ds,
    verb: "Expand rollout"
  }), /*#__PURE__*/React.createElement(EngineColumn, {
    label: "Pending approval",
    count: pending.length,
    color: "var(--status-warning)",
    exps: pending,
    nav: nav,
    ds: ds,
    verb: "Review"
  }), /*#__PURE__*/React.createElement(EngineColumn, {
    label: "Applied",
    count: applied.length,
    color: "var(--accent)",
    exps: applied,
    nav: nav,
    ds: ds,
    verb: "View impact"
  }))), /*#__PURE__*/React.createElement(CrossLinkStrip, {
    icon: "git-merge",
    text: "Conversion drop-off concentrates where SEO indexation is weak. Diagnose traffic quality upstream in SEO.",
    actions: [{
      label: 'Open SEO overview',
      onClick: () => nav.toSeo()
    }]
  }));
}
function EngineColumn({
  label,
  count,
  color,
  exps,
  nav,
  ds,
  verb
}) {
  const {
    Card
  } = ds;
  const D = KitData;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, count)), exps.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      background: 'var(--surface)',
      border: '1px dashed var(--border-default)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "None"), exps.map(e => {
    const p = D.productById(e.productId);
    return /*#__PURE__*/React.createElement(Card, {
      key: e.id,
      interactive: true,
      padded: false,
      onClick: () => nav.toExperiments(e.id),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, p.name, " \xB7 ", e.template)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        lineHeight: 1.35,
        marginBottom: 10
      }
    }, e.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 16,
        fontWeight: 500,
        color: e.lift >= 0 ? 'var(--status-success)' : 'var(--status-error)'
      }
    }, e.lift >= 0 ? '+' : '', e.lift, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, e.sig, "% sig"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--accent)'
      }
    }, verb, " \u2192"))));
  }));
}
window.CroOverviewScreen = CroOverviewScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/CroOverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/DashboardScreen.jsx
try { (() => {
/* global Icon */
// AvenueOS Dashboard — KPI row, product health, agentic alerts, activity feed.
function DashboardScreen({
  ds,
  onOpenProduct,
  nav
}) {
  const {
    KPICard,
    Card,
    StatusBadge,
    Sparkline
  } = ds;
  const products = [{
    id: 'athome',
    name: 'AtHome',
    desc: 'Agentic HVAC sales',
    status: 'live',
    tenants: 84,
    cvr: 4.82,
    mrr: '$612k',
    spark: [4, 6, 5, 8, 7, 9, 11, 12],
    color: 'var(--brand-blue)'
  }, {
    id: 'graft',
    name: 'GRAFT',
    desc: 'Pay-per-lead marketing',
    status: 'live',
    tenants: 31,
    cvr: 6.10,
    mrr: '$488k',
    spark: [7, 8, 7, 10, 11, 12, 13, 14],
    color: '#8B5CF6'
  }, {
    id: 'dealership',
    name: 'Dealership',
    desc: 'Dealer website platform',
    status: 'warning',
    tenants: 46,
    cvr: 2.31,
    mrr: '$341k',
    spark: [9, 8, 8, 7, 6, 5, 5, 4],
    color: '#F59E0B'
  }, {
    id: 'shiptow',
    name: 'Ship/Tow',
    desc: 'Shipping & tow marketplace',
    status: 'live',
    tenants: 22,
    cvr: 3.44,
    mrr: '$208k',
    spark: [3, 4, 4, 5, 6, 6, 7, 8],
    color: '#22C55E'
  }, {
    id: 'sitefactory',
    name: 'Site Factory',
    desc: 'SEO/CRO site builder',
    status: 'error',
    tenants: 64,
    cvr: 1.04,
    mrr: '$193k',
    spark: [6, 5, 5, 4, 3, 2, 2, 1],
    color: '#EC4899'
  }];
  const alerts = [{
    sev: 'warning',
    icon: 'trending-down',
    text: 'Dealership CVR down 18% across 6 tenants in 24h',
    action: 'Investigate',
    go: () => nav && nav.toProduct('dealership')
  }, {
    sev: 'error',
    icon: 'alert-triangle',
    text: 'sitefactory-dental returning 5xx — indexation dropped 40%',
    action: 'View tenant',
    go: () => nav && nav.toTenant('sitefactory-dental')
  }, {
    sev: 'info',
    icon: 'sparkles',
    text: 'Hero variant B winning +9.2% on graft-roofing-fl — apply to 4 tenants?',
    action: 'Review',
    go: () => nav && nav.toExperiments('exp_pricing_anchor')
  }];
  const activity = [{
    icon: 'rocket',
    text: 'Deployed athome-tx-houston',
    meta: 'Jordan · 2m ago',
    color: 'var(--accent)'
  }, {
    icon: 'plus',
    text: 'Provisioned graft-hvac-az',
    meta: 'AI gateway · 14m ago',
    color: 'var(--text-muted)'
  }, {
    icon: 'flask-conical',
    text: 'Concluded exp_cta_color — variant B',
    meta: 'Experiment engine · 1h ago',
    color: 'var(--status-info)'
  }, {
    icon: 'pause',
    text: 'Paused dealer-velocity-ca',
    meta: 'Sam · 3h ago',
    color: 'var(--status-warning)'
  }, {
    icon: 'check',
    text: 'Approved cross-tenant rollout · 4 sites',
    meta: 'Jordan · yesterday',
    color: 'var(--status-success)'
  }];
  const sevColor = {
    warning: 'var(--status-warning)',
    error: 'var(--status-error)',
    info: 'var(--status-info)'
  };
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Portfolio overview"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Five products \xB7 247 tenants \xB7 synced 2m ago")), /*#__PURE__*/React.createElement(ds.Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "Launch tenant")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Portfolio MRR",
    value: "$1.84M",
    trend: 12.4,
    spark: [3, 5, 4, 8, 7, 9, 11, 12],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Active tenants",
    value: "247",
    trend: 4.1,
    spark: [5, 6, 6, 7, 8, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg conversion",
    value: "3.94",
    unit: "%",
    trend: -1.8,
    spark: [6, 6, 5, 5, 4, 4, 4, 4]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Live experiments",
    value: "7",
    trend: 16.7,
    spark: [2, 3, 3, 4, 5, 5, 6, 7]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Product health"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    interactive: true,
    padded: false,
    onClick: () => onOpenProduct(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: p.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.desc)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: p.status
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Tenants",
    value: p.tenants
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "CVR",
    value: p.cvr.toFixed(2) + '%'
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "MRR",
    value: p.mrr,
    strong: true
  }), /*#__PURE__*/React.createElement(Sparkline, {
    data: p.spark,
    width: 72,
    height: 28
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-muted)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Agentic alerts")), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, alerts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 11,
      padding: '13px 16px',
      borderBottom: i < alerts.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 16,
    color: sevColor[a.sev],
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      lineHeight: 1.45
    }
  }, a.text), /*#__PURE__*/React.createElement("button", {
    onClick: a.go,
    style: {
      marginTop: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, a.action, " \u2192")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Recent activity"), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 16px',
      borderBottom: i < activity.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 15,
    color: a.color,
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, a.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, a.meta.split(' · ')[1] || a.meta))))))));
}
function Metric({
  label,
  value,
  strong
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 500,
      color: strong ? 'var(--text-strong)' : 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, label));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/EventsScreen.jsx
try { (() => {
/* global Icon, KitData */
// AvenueOS Events — the EventBridge stream. Filterable cross-tenant event log.
function EventsScreen({
  ds,
  nav
}) {
  const {
    Card,
    Button
  } = ds;
  const D = KitData;
  const [filter, setFilter] = React.useState('all');
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const levelMeta = {
    success: {
      color: 'var(--status-success)',
      icon: 'check-circle'
    },
    info: {
      color: 'var(--status-info)',
      icon: 'circle-dot'
    },
    warning: {
      color: 'var(--status-warning)',
      icon: 'alert-triangle'
    },
    error: {
      color: 'var(--status-error)',
      icon: 'x-circle'
    }
  };
  const filters = [{
    id: 'all',
    label: 'All events'
  }, {
    id: 'success',
    label: 'Success'
  }, {
    id: 'info',
    label: 'Info'
  }, {
    id: 'warning',
    label: 'Warning'
  }, {
    id: 'error',
    label: 'Errors'
  }];
  const rows = D.events.filter(e => filter === 'all' || e.level === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Events")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "EventBridge stream \xB7 all tenants \xB7 1,284 events today")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), " Live"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Export log"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 3,
      alignSelf: 'flex-start'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    style: {
      height: 28,
      padding: '0 14px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      background: filter === f.id ? 'var(--surface-raised)' : 'transparent',
      color: filter === f.id ? 'var(--text-strong)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500
    }
  }, f.label))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, rows.map((e, i) => {
    const m = levelMeta[e.level];
    const p = D.productById(e.productId);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '78px 20px 1.4fr 1.2fr 1fr',
        gap: 14,
        alignItems: 'center',
        padding: '12px 20px',
        borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, e.ts), /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 15,
      color: m.color
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)'
      }
    }, e.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-body)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, e.summary), /*#__PURE__*/React.createElement("button", {
      onClick: () => nav.toTenant(e.tenant),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        justifyContent: 'flex-end',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, e.tenant), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 12,
      color: "var(--text-muted)"
    })));
  })));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/ExperimentsScreen.jsx
try { (() => {
/* global Icon, KitData */
// AvenueOS Experiments — active A/B tests across the portfolio. Table with variant
// performance, significance, status, and approve/reject/expand controls. Row → detail panel
// that interlinks to the originating tenant, product, and CRO.
function ExperimentsScreen({
  ds,
  nav,
  focusId
}) {
  const {
    Card,
    StatusBadge,
    Button,
    ProgressBar
  } = ds;
  const D = KitData;
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState(focusId || null);
  const [decisions, setDecisions] = React.useState({});
  React.useEffect(() => {
    if (focusId) setOpen(focusId);
  }, [focusId]);
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const statusMeta = {
    running: {
      badge: 'live',
      label: 'Running'
    },
    concluded: {
      badge: 'success',
      label: 'Concluded'
    },
    pending: {
      badge: 'warning',
      label: 'Pending'
    },
    applied: {
      badge: 'info',
      label: 'Applied'
    }
  };
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'running',
    label: 'Running'
  }, {
    id: 'concluded',
    label: 'Concluded'
  }, {
    id: 'pending',
    label: 'Pending'
  }, {
    id: 'applied',
    label: 'Applied'
  }];
  const rows = D.experiments.filter(e => filter === 'all' || (decisions[e.id] || e.status) === filter);
  const counts = {
    running: D.experiments.filter(e => e.status === 'running').length,
    pending: D.experiments.filter(e => e.status === 'pending').length,
    applied: D.experiments.filter(e => e.status === 'applied').length
  };
  const exp = open ? D.expById(open) : null;
  const decide = (id, status) => setDecisions(d => ({
    ...d,
    [id]: status
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask-conical",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Experiments")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, counts.running, " running \xB7 ", counts.pending, " pending approval \xB7 ", counts.applied, " applied across the portfolio")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "New experiment")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      padding: '12px 18px',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    }
  }, ['Research', 'Hypothesis', 'Test', 'Analyze', 'Apply'].map((s, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: i === 2 ? 'var(--accent)' : 'var(--surface-raised)',
      color: i === 2 ? '#06140A' : 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      fontWeight: 700
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: i === 2 ? 600 : 500,
      color: i === 2 ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, s)), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)',
      margin: '0 12px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--border-subtle)',
      margin: '0 16px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Winning patterns apply with human approval")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 3,
      alignSelf: 'flex-start'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    style: {
      height: 28,
      padding: '0 14px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      background: filter === f.id ? 'var(--surface-raised)' : 'transparent',
      color: filter === f.id ? 'var(--text-strong)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500
    }
  }, f.label))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.4fr 1fr 90px 110px 130px 150px',
      gap: 12,
      padding: '12px 20px',
      ...eyebrow,
      fontSize: 10,
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Experiment"), /*#__PURE__*/React.createElement("span", null, "Product"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Reach"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Lift"), /*#__PURE__*/React.createElement("span", null, "Significance"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Status")), rows.map((e, i) => {
    const p = D.productById(e.productId);
    const st = decisions[e.id] || e.status;
    const sm = statusMeta[st];
    return /*#__PURE__*/React.createElement("button", {
      key: e.id,
      onClick: () => setOpen(e.id),
      style: {
        display: 'grid',
        gridTemplateColumns: '2.4fr 1fr 90px 110px 130px 150px',
        gap: 12,
        alignItems: 'center',
        width: '100%',
        padding: '14px 20px',
        border: 'none',
        borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none',
        background: open === e.id ? 'var(--accent-muted)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left'
      },
      onMouseEnter: ev => {
        if (open !== e.id) ev.currentTarget.style.background = 'var(--surface-raised)';
      },
      onMouseLeave: ev => {
        if (open !== e.id) ev.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, e.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        marginTop: 2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, e.template, " \xB7 ", e.metric)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, p.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-body)'
      }
    }, e.reach), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 14,
        fontWeight: 500,
        color: e.lift >= 0 ? 'var(--status-success)' : 'var(--status-error)'
      }
    }, e.lift >= 0 ? '+' : '', e.lift, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 5,
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: e.sig + '%',
        height: '100%',
        background: e.sig >= 95 ? 'var(--accent)' : 'var(--status-warning)',
        borderRadius: 'var(--radius-pill)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: e.sig >= 95 ? 'var(--text-body)' : 'var(--status-warning)'
      }
    }, e.sig, "%")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: sm.badge
    }, sm.label)));
  })), exp && /*#__PURE__*/React.createElement(ExperimentDrawer, {
    exp: exp,
    ds: ds,
    nav: nav,
    onClose: () => setOpen(null),
    decision: decisions[exp.id],
    onDecide: decide,
    statusMeta: statusMeta
  }));
}
function ExperimentDrawer({
  exp,
  ds,
  nav,
  onClose,
  decision,
  onDecide,
  statusMeta
}) {
  const {
    Button,
    StatusBadge
  } = ds;
  const D = KitData;
  const p = D.productById(exp.productId);
  const st = decision || exp.status;
  const eyebrow = {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const Stat = ({
    label,
    value,
    color
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 17,
      color: color || 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      background: 'rgba(5,8,12,0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 440,
      maxWidth: '92vw',
      height: '100%',
      background: 'var(--surface-raised)',
      borderLeft: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-lg)',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      animation: 'avos-slide-in var(--duration-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes avos-slide-in { from { transform: translateX(24px); opacity: 0; } to { transform: none; opacity: 1; } }`), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: p.color
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toProduct(exp.productId),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p.name, " \xB7 ", exp.template)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 15,
    color: "var(--text-body)"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, exp.name), /*#__PURE__*/React.createElement(StatusBadge, {
    status: statusMeta[st].badge
  }, statusMeta[st].label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 8
    }
  }, "Hypothesis"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      lineHeight: 1.5
    }
  }, exp.hypothesis)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: exp.metric + ' lift',
    value: (exp.lift >= 0 ? '+' : '') + exp.lift + '%',
    color: exp.lift >= 0 ? 'var(--status-success)' : 'var(--status-error)'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Significance",
    value: exp.sig + '%',
    color: exp.sig >= 95 ? 'var(--accent)' : 'var(--status-warning)'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "RPV",
    value: (exp.rpv >= 0 ? '+' : '') + exp.rpv + '%'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Runtime",
    value: exp.runtime
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Reach",
    value: exp.reach + ' sites'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Guardrail",
    value: exp.guardrail,
    color: "var(--text-body)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 10
    }
  }, "Originated on"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toTenant(exp.origin),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '10px 12px',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 15,
    color: p.color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, exp.origin), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      marginBottom: 10
    }
  }, "Tenants affected (", exp.tenantsAffected.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, exp.tenantsAffected.map(tn => /*#__PURE__*/React.createElement("button", {
    key: tn,
    onClick: () => nav.toTenant(tn),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '8px 12px',
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-body)'
    }
  }, tn), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 13,
    color: "var(--text-muted)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, st === 'pending' || st === 'running' || st === 'concluded' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      flex: 1
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    }),
    onClick: () => onDecide(exp.id, 'applied')
  }, "Approve & apply"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "expand",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Expand reach")), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    style: {
      width: '100%'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 15,
      color: "var(--status-error)"
    }),
    onClick: () => onDecide(exp.id, 'concluded')
  }, "Reject")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px',
      background: 'var(--accent-muted)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, "Applied to ", exp.reach, " sites"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toCro(),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, "Impact \u2192")))));
}
window.ExperimentsScreen = ExperimentsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/ExperimentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/Icon.jsx
try { (() => {
/* global lucide */
// Lucide icon wrapper. Loads lucide UMD via index.html, renders <i data-lucide>,
// and re-runs createIcons after mount. 1.5px stroke, rounded caps (set globally).
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.5,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/IntegrationsScreen.jsx
try { (() => {
/* global Icon, KitData */
// Reusable integration logo tile — lettered monogram in the integration's brand color.
function LogoTile({
  integ,
  size = 36
}) {
  const light = integ.color === '#F0F2F5';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      flexShrink: 0,
      background: light ? 'var(--surface-raised)' : integ.color + '22',
      border: `1px solid ${light ? 'var(--border-default)' : integ.color + '55'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: size * 0.42,
      fontWeight: 700,
      color: integ.color,
      letterSpacing: '-0.02em'
    }
  }, integ.name[0]);
}
function IntegStatus({
  status,
  ds
}) {
  const map = {
    connected: {
      s: 'success',
      label: 'Connected'
    },
    available: {
      s: 'neutral',
      label: 'Available'
    },
    error: {
      s: 'error',
      label: 'Action needed'
    },
    syncing: {
      s: 'info',
      label: 'Syncing'
    }
  };
  const m = map[status] || map.available;
  return /*#__PURE__*/React.createElement(ds.StatusBadge, {
    status: m.s
  }, m.label);
}

// AvenueOS Integrations — agency-wide connection catalog.
function IntegrationsScreen({
  ds,
  nav
}) {
  const {
    Card,
    Button,
    StatusBadge
  } = ds;
  const D = KitData;
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const catIcon = {
    'SEO & Search': 'search',
    'Analytics & CRO': 'trending-up',
    'Hosting & Infrastructure': 'server',
    'Payments': 'credit-card',
    'AI': 'cpu',
    'Comms': 'phone',
    'Content': 'database'
  };
  const connected = D.integrations.filter(i => i.status === 'connected').length;
  const needs = D.integrations.filter(i => i.status === 'error').length;
  const available = D.integrations.filter(i => i.status === 'available').length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plug",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Integrations")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Agency-wide connections powering every product and tenant")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "Add integration")), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(StatCell, {
    label: "Connected",
    value: connected,
    color: "var(--status-success)"
  }), /*#__PURE__*/React.createElement(Div, null), /*#__PURE__*/React.createElement(StatCell, {
    label: "Action needed",
    value: needs,
    color: needs ? 'var(--status-error)' : 'var(--text-strong)'
  }), /*#__PURE__*/React.createElement(Div, null), /*#__PURE__*/React.createElement(StatCell, {
    label: "Available",
    value: available,
    color: "var(--text-strong)"
  }), /*#__PURE__*/React.createElement(Div, null), /*#__PURE__*/React.createElement(StatCell, {
    label: "Monthly API spend",
    value: "$440",
    mono: true,
    color: "var(--accent)"
  }))), D.integrationCats.map(cat => {
    const items = D.integrations.filter(i => i.cat === cat);
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: cat,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: catIcon[cat],
      size: 14,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: eyebrow
    }, cat)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14
      }
    }, items.map(integ => /*#__PURE__*/React.createElement(Card, {
      key: integ.id,
      interactive: true,
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(LogoTile, {
      integ: integ
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, integ.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--text-muted)',
        marginTop: 1
      }
    }, integ.scope)), /*#__PURE__*/React.createElement(IntegStatus, {
      status: integ.status,
      ds: ds
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--text-body)',
        lineHeight: 1.45,
        minHeight: 34
      }
    }, integ.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, integ.sync ? integ.status === 'error' ? integ.sync : 'Synced ' + integ.sync : 'Not connected'), integ.status === 'connected' ? /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "settings-2",
        size: 13,
        color: "var(--text-strong)"
      })
    }, "Configure") : integ.status === 'error' ? /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "refresh-cw",
        size: 13,
        color: "var(--status-error)"
      })
    }, "Reconnect") : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Connect"))))));
  }));
  function StatCell({
    label,
    value,
    color,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '16px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...eyebrow,
        fontSize: 10,
        marginBottom: 6
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-mono)',
        fontSize: 22,
        color: color,
        fontVariantNumeric: 'tabular-nums'
      }
    }, value));
  }
  function Div() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: 'var(--border-subtle)'
      }
    });
  }
}
window.LogoTile = LogoTile;
window.IntegStatus = IntegStatus;
window.IntegrationsScreen = IntegrationsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/IntegrationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/KitData.js
try { (() => {
// AvenueOS UI kit — single source of truth. Every screen reads from here so the
// system stays holistic: a vertical, tenant, experiment, or page referenced on one
// screen is the same object everywhere and links through to its relatives.
window.KitData = function () {
  const products = [{
    id: 'athome',
    name: 'AtHome',
    desc: 'Agentic HVAC sales',
    status: 'live',
    color: 'var(--brand-blue)',
    tenants: 84,
    mrr: 612000,
    cvr: 4.61,
    visibility: 38.4,
    visTrend: 5.8,
    organic: 612000,
    indexation: 96.2,
    aiCite: 31.2
  }, {
    id: 'graft',
    name: 'GRAFT',
    desc: 'Pay-per-lead marketing',
    status: 'live',
    color: '#8B5CF6',
    tenants: 31,
    mrr: 488000,
    cvr: 6.10,
    visibility: 44.1,
    visTrend: 8.2,
    organic: 402000,
    indexation: 98.0,
    aiCite: 38.6
  }, {
    id: 'dealership',
    name: 'Dealership',
    desc: 'Dealer website platform',
    status: 'warning',
    color: '#F59E0B',
    tenants: 46,
    mrr: 341000,
    cvr: 2.31,
    visibility: 22.6,
    visTrend: -4.1,
    organic: 288000,
    indexation: 81.4,
    aiCite: 12.4
  }, {
    id: 'shiptow',
    name: 'Ship/Tow',
    desc: 'Shipping & tow marketplace',
    status: 'live',
    color: '#22C55E',
    tenants: 22,
    mrr: 208000,
    cvr: 3.44,
    visibility: 18.9,
    visTrend: 3.1,
    organic: 142000,
    indexation: 92.8,
    aiCite: 19.0
  }, {
    id: 'sitefactory',
    name: 'Site Factory',
    desc: 'SEO/CRO site builder',
    status: 'error',
    color: '#EC4899',
    tenants: 64,
    mrr: 193000,
    cvr: 1.04,
    visibility: 11.2,
    visTrend: -8.4,
    organic: 96000,
    indexation: 64.0,
    aiCite: 6.2
  }];

  // Tenants referenced by SEO/CRO/Experiments — same objects power TenantDetail.
  const tenants = {
    'athome-co-denver': {
      name: 'athome-co-denver',
      productId: 'athome',
      status: 'live',
      cvr: 6.21,
      mrr: 41800,
      traffic: [7, 9, 10, 11, 12, 13, 15],
      deploy: '30m ago',
      cap: 88
    },
    'athome-tx-houston': {
      name: 'athome-tx-houston',
      productId: 'athome',
      status: 'live',
      cvr: 4.82,
      mrr: 24910,
      traffic: [4, 6, 5, 8, 7, 11, 13],
      deploy: '2m ago',
      cap: 72
    },
    'athome-ca-fresno': {
      name: 'athome-ca-fresno',
      productId: 'athome',
      status: 'warning',
      cvr: 2.31,
      mrr: 12050,
      traffic: [9, 8, 8, 6, 5, 5, 4],
      deploy: '4h ago',
      cap: 41
    },
    'graft-roofing-fl': {
      name: 'graft-roofing-fl',
      productId: 'graft',
      status: 'live',
      cvr: 7.04,
      mrr: 51200,
      traffic: [8, 9, 7, 10, 12, 11, 14],
      deploy: '1h ago',
      cap: 84
    },
    'dealer-velocity-ca': {
      name: 'dealer-velocity-ca',
      productId: 'dealership',
      status: 'warning',
      cvr: 1.82,
      mrr: 9400,
      traffic: [9, 8, 8, 7, 6, 5, 5],
      deploy: '3h ago',
      cap: 41
    },
    'sitefactory-dental': {
      name: 'sitefactory-dental',
      productId: 'sitefactory',
      status: 'error',
      cvr: 1.04,
      mrr: 3400,
      traffic: [6, 5, 4, 3, 2, 1, 1],
      deploy: '6h ago',
      cap: 23
    }
  };

  // Cross-tenant experiments. Each ties a CRO insight + SEO signal to the tenants it touches.
  const experiments = [{
    id: 'exp_hero_cta',
    name: 'Hero CTA color → electric',
    productId: 'athome',
    template: 'Quote landing',
    origin: 'athome-co-denver',
    tenantsAffected: ['athome-co-denver', 'athome-tx-houston'],
    reach: 12,
    lift: 9.2,
    metric: 'CVR',
    sig: 98,
    rpv: 4.1,
    guardrail: 'AOV +1.2%',
    runtime: '14d',
    status: 'running',
    hypothesis: 'A high-contrast electric CTA increases quote starts without hurting order value.'
  }, {
    id: 'exp_form_len',
    name: 'Quote form — 3 fields vs 7',
    productId: 'athome',
    template: 'Quote form',
    origin: 'athome-tx-houston',
    tenantsAffected: ['athome-tx-houston'],
    reach: 1,
    lift: -1.4,
    metric: 'Lead rate',
    sig: 71,
    rpv: -0.3,
    guardrail: 'Lead quality −4%',
    runtime: '9d',
    status: 'running',
    hypothesis: 'Fewer fields lift submits but may lower qualified-lead rate — watch guardrail.'
  }, {
    id: 'exp_pricing_anchor',
    name: 'Financing anchor on pricing',
    productId: 'graft',
    template: 'Pricing',
    origin: 'graft-roofing-fl',
    tenantsAffected: ['graft-roofing-fl'],
    reach: 4,
    lift: 4.6,
    metric: 'CVR',
    sig: 95,
    rpv: 3.2,
    guardrail: 'Refunds flat',
    runtime: '21d',
    status: 'concluded',
    hypothesis: 'Anchoring monthly financing raises perceived affordability and conversion.'
  }, {
    id: 'exp_trust_badges',
    name: 'Trust badges above fold',
    productId: 'dealership',
    template: 'Inventory landing',
    origin: 'dealer-velocity-ca',
    tenantsAffected: ['dealer-velocity-ca'],
    reach: 6,
    lift: 2.8,
    metric: 'CVR',
    sig: 89,
    rpv: 1.1,
    guardrail: 'Bounce −3%',
    runtime: '11d',
    status: 'pending',
    hypothesis: 'Surfacing dealer trust signals earlier reduces bounce on inventory pages.'
  }, {
    id: 'exp_sticky_quote',
    name: 'Sticky mobile quote bar',
    productId: 'shiptow',
    template: 'Quote aggregator',
    origin: 'athome-co-denver',
    tenantsAffected: ['athome-co-denver'],
    reach: 8,
    lift: 6.7,
    metric: 'Mobile CVR',
    sig: 99,
    rpv: 5.4,
    guardrail: 'LCP +0.1s',
    runtime: '18d',
    status: 'applied',
    hypothesis: 'A persistent quote CTA on mobile captures intent before scroll-away.'
  }];

  // Top gaining / losing pages (SEO macro → drill to tenant).
  const pages = {
    gaining: [{
      url: '/hvac-repair-houston',
      tenant: 'athome-tx-houston',
      clicks: 8420,
      delta: 34
    }, {
      url: '/emergency-ac-denver',
      tenant: 'athome-co-denver',
      clicks: 6110,
      delta: 28
    }, {
      url: '/roofing-quote-tampa',
      tenant: 'graft-roofing-fl',
      clicks: 5240,
      delta: 22
    }],
    losing: [{
      url: '/used-trucks-bay-area',
      tenant: 'dealer-velocity-ca',
      clicks: 1820,
      delta: -41
    }, {
      url: '/dental-seo-landing',
      tenant: 'sitefactory-dental',
      clicks: 640,
      delta: -38
    }, {
      url: '/financing-calculator',
      tenant: 'dealer-velocity-ca',
      clicks: 1240,
      delta: -19
    }]
  };

  // Ranking distribution buckets, portfolio-wide.
  const ranking = [{
    bucket: '1–3',
    count: 4820,
    color: 'var(--accent)'
  }, {
    bucket: '4–10',
    count: 9140,
    color: 'var(--status-success)'
  }, {
    bucket: '11–20',
    count: 6610,
    color: 'var(--status-info)'
  }, {
    bucket: '21–50',
    count: 5240,
    color: 'var(--text-muted)'
  }, {
    bucket: '51+',
    count: 3110,
    color: 'var(--border-default)'
  }];

  // Portfolio funnel (CRO macro, aggregate across all tenants).
  const funnel = [{
    stage: 'Visitors',
    value: 2840000,
    pct: 100
  }, {
    stage: 'Engaged',
    value: 1136000,
    pct: 40.0
  }, {
    stage: 'Quote started',
    value: 482000,
    pct: 17.0
  }, {
    stage: 'Lead captured',
    value: 198000,
    pct: 7.0
  }, {
    stage: 'Converted',
    value: 88600,
    pct: 3.12
  }];

  // Page-template performance (CRO macro).
  const templates = [{
    name: 'Quote landing',
    product: 'athome',
    cvr: 5.4,
    uses: 84,
    trend: 'up'
  }, {
    name: 'Pricing',
    product: 'graft',
    cvr: 6.9,
    uses: 31,
    trend: 'up'
  }, {
    name: 'Inventory landing',
    product: 'dealership',
    cvr: 2.1,
    uses: 46,
    trend: 'down'
  }, {
    name: 'Quote aggregator',
    product: 'shiptow',
    cvr: 3.6,
    uses: 22,
    trend: 'up'
  }, {
    name: 'Agency template v2',
    product: 'sitefactory',
    cvr: 1.0,
    uses: 64,
    trend: 'down'
  }];
  const productById = id => products.find(p => p.id === id);
  const expById = id => experiments.find(e => e.id === id);

  // ---- Integrations catalog (agency-wide) ----
  const integrations = [{
    id: 'searchatlas',
    name: 'Search Atlas',
    cat: 'SEO & Search',
    desc: 'Rank tracking, site audits, OTTO SEO automation',
    status: 'connected',
    scope: 'Portfolio + per-tenant',
    sync: '4m ago',
    color: '#6D5EF6',
    core: true
  }, {
    id: 'gsc',
    name: 'Google Search Console',
    cat: 'SEO & Search',
    desc: 'First-party impressions, clicks, indexation',
    status: 'connected',
    scope: 'Per-tenant',
    sync: '12m ago',
    color: '#4285F4'
  }, {
    id: 'ahrefs',
    name: 'Ahrefs API',
    cat: 'SEO & Search',
    desc: 'Backlink profile + keyword database',
    status: 'available',
    scope: 'Portfolio',
    sync: null,
    color: '#FF6B35'
  }, {
    id: 'humblytics',
    name: 'Humblytics',
    cat: 'Analytics & CRO',
    desc: 'Privacy-first analytics, funnels, A/B testing',
    status: 'connected',
    scope: 'Portfolio + per-tenant',
    sync: '2m ago',
    color: '#22C55E',
    core: true
  }, {
    id: 'ga4',
    name: 'Google Analytics 4',
    cat: 'Analytics & CRO',
    desc: 'Sessions, conversions, audience segments',
    status: 'available',
    scope: 'Per-tenant',
    sync: null,
    color: '#E8710A'
  }, {
    id: 'vercel',
    name: 'Vercel',
    cat: 'Hosting & Infrastructure',
    desc: 'Next.js 15 hosting, preview + production deploys',
    status: 'connected',
    scope: 'Portfolio',
    sync: '1m ago',
    color: '#F0F2F5',
    core: true
  }, {
    id: 'eventbridge',
    name: 'Amazon EventBridge',
    cat: 'Hosting & Infrastructure',
    desc: 'Cross-tenant event bus',
    status: 'connected',
    scope: 'Portfolio',
    sync: 'live',
    color: '#FF9900'
  }, {
    id: 'redis',
    name: 'Redis',
    cat: 'Hosting & Infrastructure',
    desc: 'Caching + rate limiting',
    status: 'connected',
    scope: 'Portfolio',
    sync: 'live',
    color: '#DC382D'
  }, {
    id: 'stripe',
    name: 'Stripe Connect',
    cat: 'Payments',
    desc: 'Subscriptions, payouts, tenant billing',
    status: 'connected',
    scope: 'Portfolio + per-tenant',
    sync: '8m ago',
    color: '#635BFF',
    core: true
  }, {
    id: 'anthropic',
    name: 'Anthropic API',
    cat: 'AI',
    desc: 'Claude models powering the agentic layer',
    status: 'connected',
    scope: 'Portfolio',
    sync: 'live',
    color: '#D97757'
  }, {
    id: 'twilio',
    name: 'Twilio',
    cat: 'Comms',
    desc: 'Call tracking + lead routing',
    status: 'error',
    scope: 'Per-tenant',
    sync: 'failed 1h ago',
    color: '#F22F46'
  }, {
    id: 'payload',
    name: 'Payload CMS',
    cat: 'Content',
    desc: 'Headless CMS per tenant (v3)',
    status: 'connected',
    scope: 'Per-tenant',
    sync: '2h ago',
    color: '#22C55E'
  }];
  const integrationCats = ['SEO & Search', 'Analytics & CRO', 'Hosting & Infrastructure', 'Payments', 'AI', 'Comms', 'Content'];
  const coreIntegrations = integrations.filter(i => i.core); // matrix columns on Tenants page
  // Which core integrations each tenant has wired up.
  const tenantWired = {
    'athome-co-denver': ['searchatlas', 'humblytics', 'vercel', 'stripe'],
    'athome-tx-houston': ['searchatlas', 'humblytics', 'vercel', 'stripe'],
    'athome-ca-fresno': ['searchatlas', 'vercel', 'stripe'],
    'graft-roofing-fl': ['searchatlas', 'humblytics', 'vercel', 'stripe'],
    'dealer-velocity-ca': ['vercel', 'stripe'],
    'sitefactory-dental': ['vercel']
  };

  // ---- Events (EventBridge stream) ----
  const events = [{
    ts: '14:08:21',
    type: 'deploy.succeeded',
    tenant: 'athome-tx-houston',
    productId: 'athome',
    summary: 'Production deploy a3f91c2',
    level: 'success'
  }, {
    ts: '14:06:02',
    type: 'lead.created',
    tenant: 'athome-co-denver',
    productId: 'athome',
    summary: 'Furnace quote — Sarah M.',
    level: 'info'
  }, {
    ts: '14:03:47',
    type: 'experiment.significant',
    tenant: 'athome-co-denver',
    productId: 'athome',
    summary: 'Hero CTA color reached 98% sig',
    level: 'info'
  }, {
    ts: '13:58:10',
    type: 'call.booked',
    tenant: 'graft-roofing-fl',
    productId: 'graft',
    summary: 'Roofing inspection — $8,400 est',
    level: 'success'
  }, {
    ts: '13:52:33',
    type: 'integration.failed',
    tenant: 'dealer-velocity-ca',
    productId: 'dealership',
    summary: 'Twilio webhook 401 — token expired',
    level: 'error'
  }, {
    ts: '13:49:05',
    type: 'cms.published',
    tenant: 'graft-roofing-fl',
    productId: 'graft',
    summary: 'Pages: /roofing-quote-tampa',
    level: 'info'
  }, {
    ts: '13:41:58',
    type: 'anomaly.flagged',
    tenant: 'sitefactory-dental',
    productId: 'sitefactory',
    summary: 'Indexation dropped 40% in 24h',
    level: 'warning'
  }, {
    ts: '13:33:12',
    type: 'tenant.provisioned',
    tenant: 'graft-hvac-az',
    productId: 'graft',
    summary: 'New tenant via AI gateway',
    level: 'success'
  }, {
    ts: '13:28:44',
    type: 'payment.succeeded',
    tenant: 'athome-tx-houston',
    productId: 'athome',
    summary: 'Subscription $249.00',
    level: 'success'
  }, {
    ts: '13:19:20',
    type: 'experiment.applied',
    tenant: 'athome-co-denver',
    productId: 'athome',
    summary: 'Sticky mobile quote bar → 8 sites',
    level: 'info'
  }];

  // ---- AI gateway usage ----
  const aiUsage = [{
    tenant: 'athome-co-denver',
    productId: 'athome',
    model: 'Sonnet 4.5',
    tokens: 4.82e6,
    cost: 142.10,
    requests: 18420,
    latency: 920
  }, {
    tenant: 'athome-tx-houston',
    productId: 'athome',
    model: 'Sonnet 4.5',
    tokens: 3.10e6,
    cost: 91.40,
    requests: 12880,
    latency: 880
  }, {
    tenant: 'graft-roofing-fl',
    productId: 'graft',
    model: 'Opus 4.1',
    tokens: 2.44e6,
    cost: 188.60,
    requests: 6210,
    latency: 1640
  }, {
    tenant: 'dealer-velocity-ca',
    productId: 'dealership',
    model: 'Haiku 4.5',
    tokens: 1.92e6,
    cost: 12.30,
    requests: 22140,
    latency: 410
  }, {
    tenant: 'sitefactory-dental',
    productId: 'sitefactory',
    model: 'Haiku 4.5',
    tokens: 0.88e6,
    cost: 5.60,
    requests: 9840,
    latency: 380
  }];
  const aiTiers = [{
    model: 'Haiku 4.5',
    share: 58,
    color: 'var(--status-info)'
  }, {
    model: 'Sonnet 4.5',
    share: 34,
    color: 'var(--accent)'
  }, {
    model: 'Opus 4.1',
    share: 8,
    color: '#D97757'
  }];

  // ---- Billing (Stripe Connect) ----
  const billing = [{
    tenant: 'athome-co-denver',
    productId: 'athome',
    plan: 'Scale',
    mrr: 41800,
    status: 'paid',
    next: 'Feb 1'
  }, {
    tenant: 'athome-tx-houston',
    productId: 'athome',
    plan: 'Growth',
    mrr: 24910,
    status: 'paid',
    next: 'Feb 1'
  }, {
    tenant: 'graft-roofing-fl',
    productId: 'graft',
    plan: 'Scale',
    mrr: 51200,
    status: 'paid',
    next: 'Feb 3'
  }, {
    tenant: 'athome-ca-fresno',
    productId: 'athome',
    plan: 'Growth',
    mrr: 12050,
    status: 'past_due',
    next: 'Jan 28'
  }, {
    tenant: 'dealer-velocity-ca',
    productId: 'dealership',
    plan: 'Starter',
    mrr: 9400,
    status: 'paid',
    next: 'Feb 5'
  }, {
    tenant: 'sitefactory-dental',
    productId: 'sitefactory',
    plan: 'Starter',
    mrr: 3400,
    status: 'failed',
    next: 'Jan 26'
  }];
  const integrationById = id => integrations.find(i => i.id === id);
  return {
    products,
    tenants,
    experiments,
    pages,
    ranking,
    funnel,
    templates,
    integrations,
    integrationCats,
    coreIntegrations,
    tenantWired,
    events,
    aiUsage,
    aiTiers,
    billing,
    productById,
    expById,
    integrationById
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/KitData.js", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/ProductDetailScreen.jsx
try { (() => {
/* global Icon */
// AvenueOS Product detail — tenant table for one vertical, with filters.
function ProductDetailScreen({
  ds,
  product,
  onBack,
  onOpenTenant
}) {
  const {
    DataTable,
    StatusBadge,
    Sparkline,
    ProgressBar,
    Button,
    KPICard,
    Input
  } = ds;
  const [filter, setFilter] = React.useState('all');
  const [q, setQ] = React.useState('');
  const allTenants = [{
    id: 1,
    name: 'athome-tx-houston',
    status: 'live',
    cvr: 4.82,
    mrr: 24910,
    traffic: [4, 6, 5, 8, 7, 11, 13],
    deploy: '2m ago',
    cap: 72
  }, {
    id: 2,
    name: 'athome-fl-tampa',
    status: 'live',
    cvr: 5.10,
    mrr: 31200,
    traffic: [8, 9, 7, 10, 12, 11, 14],
    deploy: '1h ago',
    cap: 64
  }, {
    id: 3,
    name: 'athome-ca-fresno',
    status: 'warning',
    cvr: 2.31,
    mrr: 12050,
    traffic: [9, 8, 8, 6, 5, 5, 4],
    deploy: '4h ago',
    cap: 41
  }, {
    id: 4,
    name: 'athome-az-phoenix',
    status: 'live',
    cvr: 4.05,
    mrr: 22400,
    traffic: [5, 6, 7, 7, 8, 9, 10],
    deploy: 'yesterday',
    cap: 58
  }, {
    id: 5,
    name: 'athome-tx-austin',
    status: 'staging',
    cvr: 0.0,
    mrr: 0,
    traffic: [1, 1, 2, 1, 2, 2, 3],
    deploy: '3d ago',
    cap: 12
  }, {
    id: 6,
    name: 'athome-nv-reno',
    status: 'error',
    cvr: 1.04,
    mrr: 3400,
    traffic: [6, 5, 4, 3, 2, 1, 1],
    deploy: '6h ago',
    cap: 23
  }, {
    id: 7,
    name: 'athome-co-denver',
    status: 'live',
    cvr: 6.21,
    mrr: 41800,
    traffic: [7, 9, 10, 11, 12, 13, 15],
    deploy: '30m ago',
    cap: 88
  }, {
    id: 8,
    name: 'athome-ga-atlanta',
    status: 'live',
    cvr: 3.74,
    mrr: 18900,
    traffic: [6, 6, 7, 8, 8, 9, 9],
    deploy: '2h ago',
    cap: 51
  }];
  const statusOf = s => s === 'staging' ? 'info' : s;
  const rows = allTenants.filter(t => filter === 'all' || t.status === filter).filter(t => t.name.includes(q.toLowerCase()));
  const usd = n => '$' + n.toLocaleString('en-US');
  const cols = [{
    key: 'name',
    label: 'Tenant',
    strong: true,
    mono: true
  }, {
    key: 'status',
    label: 'Status',
    render: r => /*#__PURE__*/React.createElement(StatusBadge, {
      status: statusOf(r.status)
    }, r.status === 'staging' ? 'Staging' : undefined)
  }, {
    key: 'traffic',
    label: 'Traffic 7d',
    width: 110,
    sortable: false,
    render: r => /*#__PURE__*/React.createElement(Sparkline, {
      data: r.traffic,
      width: 90,
      height: 24
    })
  }, {
    key: 'cvr',
    label: 'CVR',
    align: 'right',
    mono: true,
    render: r => r.cvr.toFixed(2) + '%'
  }, {
    key: 'mrr',
    label: 'MRR',
    align: 'right',
    mono: true,
    strong: true,
    render: r => usd(r.mrr)
  }, {
    key: 'cap',
    label: 'Capacity',
    width: 140,
    render: r => /*#__PURE__*/React.createElement(ProgressBar, {
      value: r.cap,
      showLabel: true,
      color: r.cap > 80 ? 'var(--status-warning)' : 'var(--accent)'
    })
  }, {
    key: 'deploy',
    label: 'Last deploy',
    align: 'right',
    mono: true,
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, r.deploy)
  }];
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'live',
    label: 'Live'
  }, {
    id: 'warning',
    label: 'Degraded'
  }, {
    id: 'error',
    label: 'Down'
  }, {
    id: 'staging',
    label: 'Staging'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15,
    color: "var(--text-muted)"
  }), " Back to portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: product?.color || 'var(--brand-blue)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, product?.name || 'AtHome'), /*#__PURE__*/React.createElement(StatusBadge, {
    status: product?.status || 'live'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "settings-2",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Configure"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "Deploy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Vertical MRR",
    value: "$612k",
    trend: 9.2,
    spark: [4, 6, 5, 8, 7, 9, 11, 12],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Tenants",
    value: String(allTenants.length),
    trend: 2.4
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg CVR",
    value: "4.61",
    unit: "%",
    trend: 3.1
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Indexed pages",
    value: "38.2k",
    trend: 5.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 3
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setFilter(f.id),
    style: {
      height: 26,
      padding: '0 12px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-sm)',
      background: filter === f.id ? 'var(--surface-raised)' : 'transparent',
      color: filter === f.id ? 'var(--text-strong)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500
    }
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Filter tenants\u2026",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14,
      color: "var(--text-muted)"
    })
  }))), /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows,
    onRowClick: r => onOpenTenant && onOpenTenant(r)
  }));
}
window.ProductDetailScreen = ProductDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/ProductDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/SeoOverviewScreen.jsx
try { (() => {
/* global Icon, KitData */
// AvenueOS SEO overview (macro) — portfolio-wide organic performance, interlinked to
// products (verticals), tenants (pages), CRO, and experiments.
function SeoOverviewScreen({
  ds,
  nav
}) {
  const {
    KPICard,
    Card,
    Sparkline,
    Button,
    StatusBadge
  } = ds;
  const D = KitData;
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const colorFor = id => D.productById(id).color;
  const maxRank = Math.max(...D.ranking.map(r => r.count));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "SEO overview")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Portfolio-wide organic performance \xB7 all five products \xB7 last 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "30 days"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "Search visibility",
    value: "29.8",
    unit: "%",
    trend: 4.2,
    spark: [24, 25, 25, 27, 28, 28, 29, 30],
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Organic sessions",
    value: "1.54M",
    trend: 6.1,
    spark: [5, 6, 6, 7, 8, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Avg position",
    value: "9.2",
    trend: 3.8,
    spark: [12, 11, 11, 10, 10, 9, 9, 9]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Indexation",
    value: "87.4",
    unit: "%",
    trend: -1.2,
    spark: [10, 10, 9, 9, 9, 8, 8, 8]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "AI answer share",
    value: "21.5",
    unit: "%",
    trend: 11.4,
    spark: [3, 4, 5, 6, 7, 8, 9, 11]
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Search visibility trajectory"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    color: "var(--accent)",
    label: "Portfolio"
  }), /*#__PURE__*/React.createElement(Legend, {
    color: "var(--text-muted)",
    label: "Competitor set"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--status-success)'
    }
  }, "+4.2% MoM"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Rolling share of voice \u2014 an early warning for algorithm shifts before traffic moves."), /*#__PURE__*/React.createElement(TrajectoryChart, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Organic by vertical"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Click a product to drill in")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 90px 80px 88px 70px 20px',
      padding: '0 20px 8px',
      gap: 12,
      ...eyebrow,
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Product"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Visibility"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Sessions"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Index"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "AI cite"), /*#__PURE__*/React.createElement("span", null)), D.products.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => nav.toProduct(p.id),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 90px 80px 88px 70px 20px',
      gap: 12,
      alignItems: 'center',
      width: '100%',
      padding: '13px 20px',
      border: 'none',
      borderTop: '1px solid var(--border-subtle)',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: p.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.visibility, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, (p.organic / 1000).toFixed(0), "k"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: p.indexation < 80 ? 'var(--status-warning)' : 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.indexation, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: p.visTrend >= 0 ? 'var(--status-success)' : 'var(--status-error)'
    }
  }, p.aiCite, "%"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    color: "var(--text-muted)"
  })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...cardTitle,
      marginBottom: 4
    }
  }, "Ranking distribution"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "28,920 tracked keywords by position"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, D.ranking.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.bucket,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-body)'
    }
  }, r.bucket), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 18,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.count / maxRank * 100 + '%',
      height: '100%',
      background: r.color,
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.count.toLocaleString())))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Branded vs non-branded"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-body)'
    }
  }, "34% / 66%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PageList, {
    title: "Top gaining pages",
    icon: "trending-up",
    iconColor: "var(--status-success)",
    rows: D.pages.gaining,
    nav: nav,
    eyebrow: eyebrow,
    cardTitle: cardTitle,
    ds: ds
  }), /*#__PURE__*/React.createElement(PageList, {
    title: "Top losing pages",
    icon: "trending-down",
    iconColor: "var(--status-error)",
    rows: D.pages.losing,
    nav: nav,
    eyebrow: eyebrow,
    cardTitle: cardTitle,
    ds: ds
  })), /*#__PURE__*/React.createElement(CrossLinkStrip, {
    icon: "git-merge",
    text: "Losing pages on Dealership & Site Factory correlate with low indexation. Conversion impact is tracked in CRO.",
    actions: [{
      label: 'Open CRO overview',
      onClick: () => nav.toCro()
    }, {
      label: 'Review experiments',
      onClick: () => nav.toExperiments()
    }]
  }));
}
function Legend({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 3,
      borderRadius: 2,
      background: color
    }
  }), " ", label);
}
function TrajectoryChart() {
  const port = [22, 23, 22.5, 24, 25.5, 26, 27, 27.5, 28.5, 29, 29.4, 29.8];
  const comp = [26, 26, 25.5, 25, 25, 24.5, 24, 24, 23.5, 23, 23, 22.8];
  const W = 1180,
    H = 150,
    pad = 6;
  const all = [...port, ...comp];
  const min = Math.min(...all) - 1,
    max = Math.max(...all) + 1;
  const x = i => pad + i * ((W - pad * 2) / (port.length - 1));
  const y = v => pad + (1 - (v - min) / (max - min)) * (H - pad * 2);
  const path = arr => arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${path(port)} L${x(port.length - 1)},${H} L${x(0)},${H} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: H,
    preserveAspectRatio: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "seo-area",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--accent)",
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: 0,
    x2: W,
    y1: H * g,
    y2: H * g,
    stroke: "var(--border-subtle)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#seo-area)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(comp),
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path(port),
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function PageList({
  title,
  icon,
  iconColor,
  rows,
  nav,
  cardTitle,
  ds
}) {
  const {
    Card
  } = ds;
  return /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '16px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: iconColor
  }), /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, title)), rows.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r.url,
    onClick: () => nav.toTenant(r.tenant),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '12px 20px',
      border: 'none',
      borderTop: '1px solid var(--border-subtle)',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-raised)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.url), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, r.tenant)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.clicks.toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: r.delta >= 0 ? 'var(--status-success)' : 'var(--status-error)'
    }
  }, r.delta >= 0 ? '▲' : '▼', Math.abs(r.delta), "%"))));
}
function CrossLinkStrip({
  icon,
  text,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      background: 'var(--accent-muted)',
      border: '1px solid rgba(57,255,20,0.2)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, actions.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    onClick: a.onClick,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent)',
      whiteSpace: 'nowrap'
    }
  }, a.label, " \u2192"))));
}
window.SeoOverviewScreen = SeoOverviewScreen;
window.CrossLinkStrip = CrossLinkStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/SeoOverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/Sidebar.jsx
try { (() => {
/* global Icon */
// AvenueOS Sidebar — fixed 240px, logo, grouped nav, product switcher, tenant context.
function Sidebar({
  active,
  onNavigate
}) {
  const NavItem = ({
    id,
    icon,
    label,
    badge
  }) => {
    const isActive = active === id;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate(id),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        height: 32,
        padding: '0 12px',
        border: 'none',
        cursor: 'pointer',
        background: isActive ? 'var(--accent-muted)' : 'transparent',
        color: isActive ? 'var(--text-strong)' : 'var(--text-body)',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: isActive ? 600 : 500,
        letterSpacing: 'var(--tracking-label)',
        textAlign: 'left',
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!isActive) {
          e.currentTarget.style.background = 'var(--surface)';
          e.currentTarget.style.color = 'var(--text-strong)';
        }
      },
      onMouseLeave: e => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--text-body)';
        }
      }
    }, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 6,
        bottom: 6,
        width: 2,
        background: 'var(--accent)',
        borderRadius: 2
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 16,
      color: isActive ? 'var(--accent)' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, label), badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, badge));
  };
  const Group = ({
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px 6px',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flexShrink: 0,
      height: '100vh',
      background: 'var(--canvas)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--topbar-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '0 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "command",
    size: 15,
    color: "#06140A",
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "AvenueOS")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    id: "dashboard",
    icon: "layout-dashboard",
    label: "Dashboard"
  }), /*#__PURE__*/React.createElement(Group, {
    label: "Products"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "athome",
    icon: "home",
    label: "AtHome",
    badge: "84"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "graft",
    icon: "target",
    label: "GRAFT",
    badge: "31"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "dealership",
    icon: "car",
    label: "Dealership",
    badge: "46"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "shiptow",
    icon: "truck",
    label: "Ship/Tow",
    badge: "22"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "sitefactory",
    icon: "layout-template",
    label: "Site Factory",
    badge: "64"
  }), /*#__PURE__*/React.createElement(Group, {
    label: "Intelligence"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "seo",
    icon: "search",
    label: "SEO overview"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "cro",
    icon: "trending-up",
    label: "CRO overview"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "experiments",
    icon: "flask-conical",
    label: "Experiments",
    badge: "7"
  }), /*#__PURE__*/React.createElement(Group, {
    label: "Operations"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "tenants",
    icon: "layers",
    label: "Tenants"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "events",
    icon: "activity",
    label: "Events"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "ai",
    icon: "cpu",
    label: "AI gateway"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "integrations",
    icon: "plug",
    label: "Integrations"
  }), /*#__PURE__*/React.createElement(NavItem, {
    id: "billing",
    icon: "credit-card",
    label: "Billing"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 12px',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 5,
      background: 'var(--surface-raised)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 13,
    color: "var(--text-body)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "All products"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-muted)'
    }
  }, "247 tenants")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14,
    color: "var(--text-muted)"
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/TenantDetailScreen.jsx
try { (() => {
/* global Icon */
// AvenueOS Tenant detail — single tenant's full picture: site health, leads/calls/conversions,
// CRO funnel, SEO metrics, active experiments, Payload CMS access, events, deploy history.
function TenantDetailScreen({
  ds,
  tenant,
  product,
  onBack
}) {
  const {
    KPICard,
    Card,
    StatusBadge,
    Sparkline,
    ProgressBar,
    Button
  } = ds;
  const [tab, setTab] = React.useState('overview');
  const D = KitData;
  const [wired, setWired] = React.useState(() => (D.tenantWired[(tenant || {}).name] || ['vercel']).slice());
  const toggleIntg = id => setWired(w => w.includes(id) ? w.filter(x => x !== id) : [...w, id]);
  const t = tenant || {
    name: 'athome-tx-houston',
    status: 'live',
    cvr: 4.82,
    mrr: 24910,
    traffic: [4, 6, 5, 8, 7, 11, 13],
    deploy: '2m ago',
    cap: 72
  };
  const statusOf = s => s === 'staging' ? 'info' : s;
  const domain = t.name.replace(/^[a-z]+-/, '').replace(/-/g, '') + '.athome.co';
  const usd = n => '$' + Number(n).toLocaleString('en-US');

  // ---- micro metrics ----
  const funnel = [{
    stage: 'Visitors',
    value: 12480,
    pct: 100
  }, {
    stage: 'Quote started',
    value: 4120,
    pct: 33.0
  }, {
    stage: 'Quote completed',
    value: 2240,
    pct: 17.9
  }, {
    stage: 'Call booked',
    value: 980,
    pct: 7.9
  }, {
    stage: 'Sale closed',
    value: 602,
    pct: 4.82
  }];
  const seo = [{
    label: 'Organic sessions',
    value: '38.2k',
    trend: 5.8,
    spark: [5, 6, 6, 7, 8, 8, 9, 10]
  }, {
    label: 'Indexed pages',
    value: '1,284',
    trend: 2.1,
    spark: [7, 7, 8, 8, 9, 9, 10, 10]
  }, {
    label: 'Avg position',
    value: '8.4',
    trend: 3.4,
    spark: [11, 10, 10, 9, 9, 8, 8, 8]
  }, {
    label: 'Backlinks',
    value: '4,910',
    trend: 1.2,
    spark: [6, 6, 7, 7, 7, 8, 8, 8]
  }];
  const keywords = [{
    kw: 'hvac repair houston',
    pos: 2,
    delta: 3
  }, {
    kw: 'ac replacement tx',
    pos: 5,
    delta: 1
  }, {
    kw: 'furnace install near me',
    pos: 9,
    delta: -2
  }, {
    kw: 'emergency ac repair',
    pos: 4,
    delta: 6
  }];
  const experiments = [{
    name: 'Hero CTA color',
    variant: 'B',
    lift: 9.2,
    sig: 98,
    status: 'running'
  }, {
    name: 'Quote form length',
    variant: 'A',
    lift: -1.4,
    sig: 71,
    status: 'running'
  }, {
    name: 'Pricing anchor',
    variant: 'B',
    lift: 4.6,
    sig: 95,
    status: 'concluded'
  }];
  const collections = [{
    name: 'Pages',
    icon: 'file-text',
    count: 42
  }, {
    name: 'Leads',
    icon: 'user-plus',
    count: 980
  }, {
    name: 'Media',
    icon: 'image',
    count: 318
  }, {
    name: 'Forms',
    icon: 'clipboard-list',
    count: 6
  }];
  const events = [{
    icon: 'rocket',
    text: 'Deployed to production',
    meta: '2m ago',
    color: 'var(--accent)'
  }, {
    icon: 'user-plus',
    text: 'New lead — Sarah M., furnace quote',
    meta: '11m ago',
    color: 'var(--status-info)'
  }, {
    icon: 'phone',
    text: 'Call booked — 614-area, $8,400 est.',
    meta: '38m ago',
    color: 'var(--status-success)'
  }, {
    icon: 'flask-conical',
    text: 'Experiment "Hero CTA color" reached 98% sig',
    meta: '1h ago',
    color: 'var(--status-info)'
  }, {
    icon: 'alert-triangle',
    text: 'LCP regressed to 2.8s on /quote',
    meta: '3h ago',
    color: 'var(--status-warning)'
  }, {
    icon: 'dollar-sign',
    text: 'Sale closed — $9,120 system install',
    meta: '5h ago',
    color: 'var(--status-success)'
  }];
  const deploys = [{
    sha: 'a3f91c2',
    msg: 'Update hero copy + CTA variant B',
    who: 'Jordan',
    when: '2m ago',
    ok: true
  }, {
    sha: '7b21e0d',
    msg: 'Fix quote form validation',
    who: 'AI gateway',
    when: '6h ago',
    ok: true
  }, {
    sha: 'c92f4aa',
    msg: 'Add financing calculator block',
    who: 'Sam',
    when: 'yesterday',
    ok: true
  }, {
    sha: 'e10b773',
    msg: 'Rollback pricing schema migration',
    who: 'Jordan',
    when: '2d ago',
    ok: false
  }];
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15,
    color: "var(--text-muted)"
  }), " Back to ", product?.name || 'AtHome'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 20,
    color: product?.color || 'var(--brand-blue)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, t.name), /*#__PURE__*/React.createElement(StatusBadge, {
    status: statusOf(t.status)
  }, t.status === 'staging' ? 'Staging' : undefined)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 5,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, domain, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 13,
    color: "var(--text-muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "settings-2",
      size: 15,
      color: "var(--text-strong)"
    })
  }, "Configure"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "pause",
      size: 15,
      color: "var(--status-error)"
    })
  }, "Pause"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "Deploy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(KPICard, {
    label: "MRR",
    value: usd(t.mrr),
    trend: 8.1,
    spark: t.traffic,
    accent: true
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Leads (30d)",
    value: "980",
    trend: 12.4,
    spark: [6, 7, 7, 8, 9, 10, 11, 12]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Calls booked",
    value: "312",
    trend: 6.7,
    spark: [4, 5, 5, 6, 6, 7, 7, 8]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "Conversions",
    value: "602",
    trend: 9.0,
    spark: [5, 6, 6, 7, 8, 8, 9, 10]
  }), /*#__PURE__*/React.createElement(KPICard, {
    label: "CVR",
    value: t.cvr.toFixed(2),
    unit: "%",
    trend: 3.1,
    spark: [6, 6, 7, 7, 8, 8, 9, 9]
  })), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement(Health, {
    label: "Uptime",
    value: "99.98%",
    ok: true
  }), /*#__PURE__*/React.createElement(HealthDivider, null), /*#__PURE__*/React.createElement(Health, {
    label: "LCP",
    value: "2.8s",
    warn: true
  }), /*#__PURE__*/React.createElement(HealthDivider, null), /*#__PURE__*/React.createElement(Health, {
    label: "Error rate",
    value: "0.04%",
    ok: true
  }), /*#__PURE__*/React.createElement(HealthDivider, null), /*#__PURE__*/React.createElement(Health, {
    label: "Capacity",
    value: null,
    node: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120,
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: t.cap,
      showLabel: true,
      color: t.cap > 80 ? 'var(--status-warning)' : 'var(--accent)'
    }))
  }), /*#__PURE__*/React.createElement(HealthDivider, null), /*#__PURE__*/React.createElement(Health, {
    label: "Last deploy",
    value: t.deploy
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Conversion funnel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Last 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, funnel.map((f, i) => {
    const drop = i > 0 ? 100 - f.value / funnel[i - 1].value * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: f.stage,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 130,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-body)',
        flexShrink: 0
      }
    }, f.stage), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 26,
        background: 'var(--surface-raised)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: f.pct + '%',
        height: '100%',
        background: i === funnel.length - 1 ? 'var(--accent)' : 'linear-gradient(90deg, var(--surface-raised), rgba(57,255,20,0.18))',
        borderRight: i === funnel.length - 1 ? 'none' : '2px solid rgba(57,255,20,0.4)',
        borderRadius: 'var(--radius-sm)',
        transition: 'width var(--duration-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums',
        flexShrink: 0
      }
    }, f.value.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: i === 0 ? 'var(--text-muted)' : 'var(--status-error)',
        flexShrink: 0
      }
    }, i === 0 ? '—' : '−' + drop.toFixed(0) + '%'));
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "SEO performance"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Organic \xB7 30d")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14,
      marginBottom: 18
    }
  }, seo.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      fontSize: 10,
      marginBottom: 6
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--status-success)'
    }
  }, "\u25B2", s.trend, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: s.spark,
    width: 120,
    height: 22,
    trend: "up"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      fontSize: 10,
      marginBottom: 10
    }
  }, "Top keywords"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, keywords.map(k => /*#__PURE__*/React.createElement("div", {
    key: k.kw,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, k.kw), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "pos"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, k.pos), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: k.delta >= 0 ? 'var(--status-success)' : 'var(--status-error)'
    }
  }, k.delta >= 0 ? '▲' : '▼', Math.abs(k.delta))))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Active experiments"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--accent)'
    }
  }, "3 running")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, experiments.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask-conical",
    size: 16,
    color: e.status === 'concluded' ? 'var(--text-muted)' : 'var(--status-info)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "Variant ", e.variant, " \xB7 ", e.sig, "% sig")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 500,
      color: e.lift >= 0 ? 'var(--status-success)' : 'var(--status-error)'
    }
  }, e.lift >= 0 ? '+' : '', e.lift, "%"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: e.status === 'concluded' ? 'neutral' : 'live'
  }, e.status === 'concluded' ? 'Concluded' : 'Running')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "database",
    size: 15,
    color: "var(--accent)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...cardTitle,
      flex: 1
    }
  }, "Payload CMS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "v3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 14
    }
  }, collections.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '10px 12px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 15,
    color: "var(--text-body)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, c.count.toLocaleString()))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    }),
    style: {
      width: '100%'
    }
  }, "Open admin panel"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Last edit by Sam \xB7 2h ago")), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '16px 18px 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plug",
    size: 15,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...cardTitle,
      flex: 1
    }
  }, "Integrations"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav && nav.toIntegrations(),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, "Manage \u2192")), D.coreIntegrations.map((integ, i) => {
    const on = wired.includes(integ.id);
    return /*#__PURE__*/React.createElement("div", {
      key: integ.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '11px 18px',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(LogoTile, {
      integ: integ,
      size: 28
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, integ.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, integ.cat)), /*#__PURE__*/React.createElement("button", {
      onClick: () => toggleIntg(integ.id),
      title: on ? 'Connected — click to disconnect' : 'Click to connect',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        padding: '0 11px',
        cursor: 'pointer',
        background: on ? 'var(--accent-muted)' : 'transparent',
        border: `1px solid ${on ? 'transparent' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-pill)',
        color: on ? 'var(--accent)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600
      }
    }, on ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12,
      color: "var(--accent)",
      strokeWidth: 2.5
    }), " Connected") : 'Connect'));
  })), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 12px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Recent events")), events.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 11,
      padding: '11px 18px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.icon,
    size: 15,
    color: e.color,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, e.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, e.meta))))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 12px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: cardTitle
  }, "Deploy history")), deploys.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 11,
      padding: '11px 18px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.ok ? 'git-commit-horizontal' : 'rotate-ccw',
    size: 15,
    color: d.ok ? 'var(--status-success)' : 'var(--status-warning)',
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d.sha, " \xB7 ", d.who, " \xB7 ", d.when))))))));
}
function Health({
  label,
  value,
  node,
  ok,
  warn
}) {
  const color = ok ? 'var(--status-success)' : warn ? 'var(--status-warning)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      marginBottom: 6
    }
  }, label), node || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value));
}
function HealthDivider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--border-subtle)'
    }
  });
}
window.TenantDetailScreen = TenantDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/TenantDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/TenantsScreen.jsx
try { (() => {
/* global Icon, KitData, LogoTile */
// AvenueOS Tenants (operations) — every tenant across all five products in one place,
// plus an Integrations area to wire up connections per tenant.
function TenantsScreen({
  ds,
  nav
}) {
  const {
    DataTable,
    StatusBadge,
    Sparkline,
    Button,
    Input
  } = ds;
  const D = KitData;
  const [q, setQ] = React.useState('');
  // local connect state seeded from the dataset
  const [wired, setWired] = React.useState(() => JSON.parse(JSON.stringify(D.tenantWired)));
  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 'var(--tracking-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-sans)'
  };
  const cardTitle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 600,
    color: 'var(--text-strong)',
    margin: 0
  };
  const tenantList = Object.values(D.tenants);
  const statusOf = s => s === 'staging' ? 'info' : s;
  const usd = n => '$' + Number(n).toLocaleString('en-US');
  const rows = tenantList.filter(t => t.name.includes(q.toLowerCase()));
  const cols = [{
    key: 'name',
    label: 'Tenant',
    strong: true,
    mono: true
  }, {
    key: 'productId',
    label: 'Product',
    render: r => {
      const p = D.productById(r.productId);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 2,
          background: p.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--text-body)'
        }
      }, p.name));
    }
  }, {
    key: 'status',
    label: 'Status',
    render: r => /*#__PURE__*/React.createElement(StatusBadge, {
      status: statusOf(r.status)
    }, r.status === 'staging' ? 'Staging' : undefined)
  }, {
    key: 'traffic',
    label: 'Traffic 7d',
    width: 110,
    sortable: false,
    render: r => /*#__PURE__*/React.createElement(Sparkline, {
      data: r.traffic,
      width: 90,
      height: 24
    })
  }, {
    key: 'cvr',
    label: 'CVR',
    align: 'right',
    mono: true,
    render: r => r.cvr.toFixed(2) + '%'
  }, {
    key: 'mrr',
    label: 'MRR',
    align: 'right',
    mono: true,
    strong: true,
    render: r => usd(r.mrr)
  }, {
    key: 'integrations',
    label: 'Integrations',
    align: 'right',
    sortable: false,
    render: r => {
      const n = (wired[r.name] || []).length;
      return /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: n >= 4 ? 'var(--status-success)' : n >= 2 ? 'var(--text-body)' : 'var(--status-warning)'
        }
      }, n, "/", D.coreIntegrations.length);
    }
  }];
  const toggle = (tn, id) => setWired(w => {
    const cur = w[tn] || [];
    return {
      ...w,
      [tn]: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id]
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "layers",
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)'
    }
  }, "Tenants")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, tenantList.length, " of 247 tenants \xB7 across all five products")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15,
      color: "#06140A",
      strokeWidth: 2.25
    })
  }, "Launch tenant")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "All tenants"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Filter tenants\u2026",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14,
      color: "var(--text-muted)"
    })
  }))), /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows,
    onRowClick: r => nav.toTenant(r)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plug",
    size: 15,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: eyebrow
  }, "Tenant integrations"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toIntegrations(),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent)'
    }
  }, "Manage all integrations \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `1.6fr repeat(${D.coreIntegrations.length}, 1fr)`,
      gap: 0,
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      ...eyebrow,
      fontSize: 10
    }
  }, "Tenant"), D.coreIntegrations.map(integ => /*#__PURE__*/React.createElement("div", {
    key: integ.id,
    style: {
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      borderLeft: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(LogoTile, {
    integ: integ,
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, integ.name)))), tenantList.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    style: {
      display: 'grid',
      gridTemplateColumns: `1.6fr repeat(${D.coreIntegrations.length}, 1fr)`,
      gap: 0,
      borderTop: i > 0 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav.toTenant(t),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '12px 20px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 2,
      background: D.productById(t.productId).color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, t.name)), D.coreIntegrations.map(integ => {
    const on = (wired[t.name] || []).includes(integ.id);
    return /*#__PURE__*/React.createElement("div", {
      key: integ.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(t.name, integ.id),
      title: on ? 'Connected — click to disconnect' : 'Click to connect',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        padding: on ? '0 10px' : '0 10px',
        cursor: 'pointer',
        background: on ? 'var(--accent-muted)' : 'transparent',
        border: `1px solid ${on ? 'transparent' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-pill)',
        color: on ? 'var(--accent)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600
      }
    }, on ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12,
      color: "var(--accent)",
      strokeWidth: 2.5
    }), " On") : /*#__PURE__*/React.createElement(React.Fragment, null, "Connect")));
  })))));
}
window.TenantsScreen = TenantsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/TenantsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/TopBar.jsx
try { (() => {
/* global Icon */
// AvenueOS TopBar — sticky breadcrumbs, cmd+K search, user.
function TopBar({
  crumbs = ['Dashboard'],
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 200,
      height: 'var(--topbar-height)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: 'rgba(10,14,20,0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: i === crumbs.length - 1 ? 600 : 500,
      color: i === crumbs.length - 1 ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, c)))), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: 260,
      height: 34,
      padding: '0 12px',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '2px 6px',
      borderRadius: 4,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-muted)'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16,
    color: "var(--text-body)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 7,
      right: 8,
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--status-warning)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "JC"));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/avenueos/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/avenueos/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.KPICard = __ds_scope.KPICard;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
