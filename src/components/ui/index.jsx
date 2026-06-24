import React from 'react';

// ── Card ──────────────────────────────────────────
export function Card({ children, style = {}, hoverable = false, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      style={{
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        padding: 'var(--space-6)',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all var(--transition-base)',
        cursor: onClick ? 'pointer' : 'default',
        transform: hovered && hoverable ? 'translateY(-2px)' : 'none',
        ...style
      }}
    >
      {children}
    </div>
  );
}

// ── Badge ─────────────────────────────────────────
const badgeVariants = {
  success: { bg: 'var(--color-success-50)', color: 'var(--color-success-600)', dot: 'var(--color-success-500)' },
  warning: { bg: 'var(--color-warning-50)', color: 'var(--color-warning-600)', dot: 'var(--color-warning-500)' },
  danger:  { bg: 'var(--color-danger-50)',  color: 'var(--color-danger-600)',  dot: 'var(--color-danger-500)'  },
  primary: { bg: 'var(--color-primary-50)', color: 'var(--color-primary-700)', dot: 'var(--color-primary-500)' },
  teal:    { bg: 'var(--color-teal-50)',    color: 'var(--color-teal-700)',    dot: 'var(--color-teal-500)'    },
  gray:    { bg: 'var(--color-gray-100)',   color: 'var(--color-gray-600)',    dot: 'var(--color-gray-400)'    },
};

export function Badge({ children, variant = 'gray', dot = false }) {
  const v = badgeVariants[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
      padding: '3px 10px', borderRadius: 'var(--radius-full)',
      fontSize: 'var(--font-size-xs)', fontWeight: 600,
      background: v.bg, color: v.color
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.dot, display: 'inline-block' }} />}
      {children}
    </span>
  );
}

// ── Button ────────────────────────────────────────
export function Button({ children, variant = 'primary', size = 'md', icon: Icon, onClick, disabled, style = {} }) {
  const [hovered, setHovered] = React.useState(false);
  const sizes = { sm: { padding: '6px 12px', fontSize: '0.8125rem' }, md: { padding: '10px 20px', fontSize: 'var(--font-size-sm)' }, lg: { padding: '14px 28px', fontSize: 'var(--font-size-base)' } };
  const variants = {
    primary: {
      bg: hovered ? 'var(--color-primary-700)' : 'var(--color-primary-600)',
      color: 'white', border: 'none'
    },
    secondary: {
      bg: hovered ? 'var(--color-gray-100)' : 'white',
      color: 'var(--color-gray-700)', border: '1px solid var(--color-border)'
    },
    ghost: {
      bg: hovered ? 'var(--color-gray-100)' : 'transparent',
      color: 'var(--color-gray-600)', border: 'none'
    },
    teal: {
      bg: hovered ? 'var(--color-teal-700)' : 'var(--color-teal-600)',
      color: 'white', border: 'none'
    },
  };
  const v = variants[variant];
  const s = sizes[size];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: s.padding, fontSize: s.fontSize, fontWeight: 600,
        borderRadius: 'var(--radius-lg)', border: v.border, cursor: disabled ? 'not-allowed' : 'pointer',
        background: v.bg, color: v.color,
        opacity: disabled ? 0.5 : 1,
        transition: 'all var(--transition-fast)',
        fontFamily: 'var(--font-sans)',
        ...style
      }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

// ── StatCard ──────────────────────────────────────
export function StatCard({ label, value, sub, icon: Icon, color = 'primary', trend }) {
  const colors = {
    primary: { bg: 'var(--color-primary-50)', icon: 'var(--color-primary-600)', text: 'var(--color-primary-700)' },
    teal:    { bg: 'var(--color-teal-50)',    icon: 'var(--color-teal-600)',    text: 'var(--color-teal-700)'    },
    success: { bg: 'var(--color-success-50)', icon: 'var(--color-success-600)', text: 'var(--color-success-700)' },
    warning: { bg: 'var(--color-warning-50)', icon: 'var(--color-warning-600)', text: 'var(--color-warning-700)' },
  };
  const c = colors[color];
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>{label}</div>
          <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--color-gray-900)', lineHeight: 1 }}>{value}</div>
          {sub && <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>{sub}</div>}
          {trend && <div style={{ fontSize: 'var(--font-size-xs)', color: trend > 0 ? 'var(--color-success-600)' : 'var(--color-danger-600)', marginTop: 'var(--space-1)', fontWeight: 600 }}>{trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month</div>}
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-xl)', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon size={22} color={c.icon} strokeWidth={2} />
        </div>
      </div>
    </Card>
  );
}

// ── ProgressBar ───────────────────────────────────
export function ProgressBar({ value, max = 100, color = 'primary', label, showValue = true }) {
  const pct = Math.min((value / max) * 100, 100);
  const colors = {
    primary: 'var(--color-primary-500)',
    teal: 'var(--color-teal-500)',
    success: 'var(--color-success-500)',
    warning: 'var(--color-warning-500)',
    danger: 'var(--color-danger-500)',
  };
  return (
    <div>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-1)' }}>
          {label && <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{label}</span>}
          {showValue && <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-gray-700)' }}>{value}/{max}</span>}
        </div>
      )}
      <div style={{ height: 8, background: 'var(--color-gray-100)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: colors[color], borderRadius: 'var(--radius-full)', transition: 'width 0.6s ease' }} />
      </div>
    </div>
  );
}
