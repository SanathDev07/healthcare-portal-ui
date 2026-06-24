import React, { useState } from 'react';
import './styles/global.css';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import AICopilot from './pages/AICopilot';
import Appointments from './pages/Appointments';
import Benefits from './pages/Benefits';

const pages = {
  dashboard: Dashboard,
  copilot: AICopilot,
  appointments: Appointments,
  benefits: Benefits,
};

function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: 'var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
        <div style={{ fontSize: 48, marginBottom: 'var(--space-4)' }}>🚧</div>
        <h2 style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--space-2)' }}>{title}</h2>
        <p style={{ fontSize: 'var(--font-size-sm)' }}>Coming soon in next release</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const PageComponent = pages[activePage];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main id="main" style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        {PageComponent
          ? <PageComponent onNavigate={setActivePage} />
          : <PlaceholderPage title={activePage.charAt(0).toUpperCase() + activePage.slice(1)} />
        }
      </main>
    </div>
  );
}
