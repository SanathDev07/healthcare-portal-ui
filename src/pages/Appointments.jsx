import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui';
import { Calendar, Clock, MapPin, Video, Phone, Plus, Search, Filter } from 'lucide-react';

const appointments = [
  { id: 1, doctor: 'Dr. Sarah Chen', specialty: 'Primary Care', date: 'Jan 15, 2025', time: '10:00 AM', type: 'In-Person', status: 'confirmed', location: '1234 Medical Center Dr, Dallas TX', avatar: 'SC', color: '#3b82f6' },
  { id: 2, doctor: 'Dr. Marcus Webb', specialty: 'Cardiology', date: 'Jan 22, 2025', time: '2:30 PM', type: 'Virtual', status: 'confirmed', location: 'Video Call', avatar: 'MW', color: '#14b8a6' },
  { id: 3, doctor: 'Dr. Priya Nair', specialty: 'Dermatology', date: 'Feb 3, 2025', time: '11:15 AM', type: 'In-Person', status: 'pending', location: '5678 Health Blvd, Plano TX', avatar: 'PN', color: '#8b5cf6' },
];

const past = [
  { id: 4, doctor: 'Dr. Sarah Chen', specialty: 'Primary Care', date: 'Dec 10, 2024', time: '9:00 AM', type: 'In-Person', status: 'completed', avatar: 'SC', color: '#3b82f6' },
  { id: 5, doctor: 'Dr. James Liu', specialty: 'Ophthalmology', date: 'Nov 18, 2024', time: '3:00 PM', type: 'In-Person', status: 'completed', avatar: 'JL', color: '#f59e0b' },
];

function ApptCard({ appt, isPast }) {
  return (
    <Card hoverable style={{ marginBottom: 'var(--space-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
        <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-xl)', background: appt.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: appt.color, fontWeight: 700, fontSize: 'var(--font-size-base)', flexShrink: 0 }}>
          {appt.avatar}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-gray-900)', fontSize: 'var(--font-size-base)' }}>{appt.doctor}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginTop: 2 }}>{appt.specialty}</div>
            </div>
            <Badge variant={appt.status === 'confirmed' ? 'success' : appt.status === 'pending' ? 'warning' : 'gray'} dot>
              {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
            </Badge>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-5)', marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
              <Calendar size={14} color="var(--color-primary-500)" /> {appt.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
              <Clock size={14} color="var(--color-teal-500)" /> {appt.time}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
              {appt.type === 'Virtual' ? <Video size={14} color="var(--color-teal-500)" /> : <MapPin size={14} color="var(--color-gray-400)" />}
              {appt.location || appt.type}
            </span>
          </div>
          {!isPast && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              {appt.type === 'Virtual' && <Button variant="teal" size="sm" icon={Video}>Join Call</Button>}
              <Button variant="secondary" size="sm">Reschedule</Button>
              <Button variant="ghost" size="sm">Cancel</Button>
            </div>
          )}
          {isPast && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              <Button variant="secondary" size="sm">View Summary</Button>
              <Button variant="ghost" size="sm">Book Follow-up</Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Appointments() {
  const [tab, setTab] = useState('upcoming');

  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: 900 }} className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-8)' }}>
        <div>
          <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--color-gray-900)' }}>Appointments</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>Manage your upcoming and past visits</p>
        </div>
        <Button variant="primary" icon={Plus}>Schedule New</Button>
      </div>

      {/* Search */}
      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 'var(--space-3)', background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '10px 16px' }}>
          <Search size={16} color="var(--color-gray-400)" />
          <input placeholder="Search by doctor or specialty..." style={{ border: 'none', outline: 'none', flex: 1, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-800)', fontFamily: 'var(--font-sans)' }} />
        </div>
        <Button variant="secondary" icon={Filter}>Filter</Button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 'var(--space-1)', background: 'var(--color-gray-100)', borderRadius: 'var(--radius-lg)', padding: 4, width: 'fit-content', marginBottom: 'var(--space-6)' }}>
        {['upcoming', 'past'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '8px 20px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
            fontSize: 'var(--font-size-sm)', fontWeight: 600,
            background: tab === t ? 'white' : 'transparent',
            color: tab === t ? 'var(--color-gray-900)' : 'var(--color-gray-500)',
            boxShadow: tab === t ? 'var(--shadow-sm)' : 'none',
            transition: 'all var(--transition-fast)',
          }}>
            {t.charAt(0).toUpperCase() + t.slice(1)} {t === 'upcoming' ? `(${appointments.length})` : `(${past.length})`}
          </button>
        ))}
      </div>

      {(tab === 'upcoming' ? appointments : past).map(a => <ApptCard key={a.id} appt={a} isPast={tab === 'past'} />)}
    </div>
  );
}
