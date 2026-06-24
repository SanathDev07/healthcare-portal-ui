import React, { useState } from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/ui';
import { Shield, Heart, Eye, Smile, Brain, Activity, ChevronDown, ChevronUp, CheckCircle, XCircle } from 'lucide-react';

const benefits = [
  {
    id: 'medical', icon: Heart, color: '#ef4444', label: 'Medical', status: 'active',
    deductible: { used: 847, max: 1500 },
    oopMax: { used: 1240, max: 5000 },
    coverages: [
      { name: 'Primary Care Visit', covered: true, cost: '$20 copay' },
      { name: 'Specialist Visit', covered: true, cost: '$40 copay' },
      { name: 'Emergency Room', covered: true, cost: '$250 copay' },
      { name: 'Urgent Care', covered: true, cost: '$50 copay' },
      { name: 'Preventive Care', covered: true, cost: '$0 (100% covered)' },
      { name: 'Mental Health', covered: true, cost: '$20 copay' },
      { name: 'Cosmetic Surgery', covered: false, cost: 'Not covered' },
    ]
  },
  {
    id: 'dental', icon: Smile, color: '#3b82f6', label: 'Dental', status: 'active',
    deductible: { used: 50, max: 150 },
    oopMax: { used: 200, max: 1500 },
    coverages: [
      { name: 'Preventive (Cleaning)', covered: true, cost: '$0 (100% covered)' },
      { name: 'Basic Restorative', covered: true, cost: '80% after deductible' },
      { name: 'Major Restorative', covered: true, cost: '50% after deductible' },
      { name: 'Orthodontia', covered: true, cost: '50% up to $1,500 lifetime' },
    ]
  },
  {
    id: 'vision', icon: Eye, color: '#14b8a6', label: 'Vision', status: 'active',
    deductible: { used: 0, max: 0 },
    oopMax: { used: 0, max: 200 },
    coverages: [
      { name: 'Annual Eye Exam', covered: true, cost: '$10 copay' },
      { name: 'Frames', covered: true, cost: '$150 allowance' },
      { name: 'Contact Lenses', covered: true, cost: '$150 allowance' },
      { name: 'LASIK', covered: false, cost: '15% discount only' },
    ]
  },
];

function BenefitCard({ benefit }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = benefit.icon;

  return (
    <Card style={{ marginBottom: 'var(--space-4)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: expanded ? 'var(--space-6)' : 0 }}>
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-xl)', background: benefit.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={22} color={benefit.color} />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-gray-900)', fontSize: 'var(--font-size-lg)' }}>{benefit.label}</div>
            <Badge variant="success" dot>Active · 2024 Plan Year</Badge>
          </div>
        </div>
        <button onClick={() => setExpanded(!expanded)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-gray-500)', padding: 8 }}>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {benefit.deductible.max > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <ProgressBar label="Deductible Used" value={benefit.deductible.used} max={benefit.deductible.max} color="primary" />
          <ProgressBar label="Out-of-Pocket Used" value={benefit.oopMax.used} max={benefit.oopMax.max} color="teal" />
        </div>
      )}

      {expanded && (
        <div style={{ marginTop: 'var(--space-6)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-5)', animation: 'fadeIn 0.2s ease' }}>
          <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-700)', marginBottom: 'var(--space-3)' }}>Coverage Details</div>
          {benefit.coverages.map((c, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: i < benefit.coverages.length - 1 ? '1px solid var(--color-gray-100)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                {c.covered ? <CheckCircle size={16} color="var(--color-success-500)" /> : <XCircle size={16} color="var(--color-danger-400)" />}
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-800)' }}>{c.name}</span>
              </div>
              <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: c.covered ? 'var(--color-gray-700)' : 'var(--color-gray-400)' }}>{c.cost}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

export default function Benefits() {
  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: 900 }} className="animate-fade-in">
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--color-gray-900)' }}>My Benefits</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>2024 plan year · Cigna PPO · Member #CG-2847</p>
      </div>
      {benefits.map(b => <BenefitCard key={b.id} benefit={b} />)}
    </div>
  );
}
