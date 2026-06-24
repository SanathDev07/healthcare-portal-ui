import React from 'react';
import {
  LayoutDashboard, Calendar, Shield, Pill, FileText,
  MessageSquare, Bell, Settings, ChevronRight, Heart
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', badge: null },
  { icon: Calendar, label: 'Appointments', id: 'appointments', badge: '2' },
  { icon: Shield, label: 'Benefits', id: 'benefits', badge: null },
  { icon: Pill, label: 'Prescriptions', id: 'prescriptions', badge: '1' },
  { icon: FileText, label: 'Claims', id: 'claims', badge: null },
  { icon: MessageSquare, label: 'AI Copilot', id: 'copilot', badge: 'NEW' },
];

const bottomItems = [
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside
      style={{
        width: 240,
        background: 'white',
        borderRight: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        flexShrink: 0,
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div style={{
        padding: 'var(--space-6)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex', alignItems: 'center', gap: 'var(--space-3)'
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--color-primary-600), var(--color-teal-500))',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Heart size={18} color="white" fill="white" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'var(--font-size-base)', color: 'var(--color-gray-900)' }}>CareOS</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>Member Portal</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{ flex: 1, padding: 'var(--space-4) var(--space-3)', overflowY: 'auto' }}>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 var(--space-3)', marginBottom: 'var(--space-2)' }}>
          Menu
        </div>
        {navItems.map(({ icon: Icon, label, id, badge }) => {
          const active = activePage === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              aria-current={active ? 'page' : undefined}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                gap: 'var(--space-3)', padding: 'var(--space-3)',
                borderRadius: 'var(--radius-lg)', border: 'none', cursor: 'pointer',
                marginBottom: 'var(--space-1)', textAlign: 'left',
                background: active ? 'var(--color-primary-50)' : 'transparent',
                color: active ? 'var(--color-primary-700)' : 'var(--color-gray-600)',
                fontWeight: active ? 600 : 400,
                fontSize: 'var(--font-size-sm)',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--color-gray-50)'; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 2} />
              <span style={{ flex: 1 }}>{label}</span>
              {badge && (
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  padding: '2px 6px', borderRadius: 'var(--radius-full)',
                  background: badge === 'NEW' ? 'var(--color-teal-500)' : 'var(--color-primary-600)',
                  color: 'white'
                }}>{badge}</span>
              )}
              {active && <ChevronRight size={14} />}
            </button>
          );
        })}
      </nav>

      {/* Bottom Nav */}
      <div style={{ padding: 'var(--space-3)', borderTop: '1px solid var(--color-border)' }}>
        {bottomItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              gap: 'var(--space-3)', padding: 'var(--space-3)',
              borderRadius: 'var(--radius-lg)', border: 'none', cursor: 'pointer',
              marginBottom: 'var(--space-1)', background: 'transparent',
              color: 'var(--color-gray-500)', fontSize: 'var(--font-size-sm)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gray-50)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}

        {/* User Avatar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          padding: 'var(--space-3)', marginTop: 'var(--space-2)',
          background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-teal-500))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700, fontSize: 'var(--font-size-sm)', flexShrink: 0
          }}>S</div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-gray-800)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sanath Kumar</div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Member ID: CG-2847</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
