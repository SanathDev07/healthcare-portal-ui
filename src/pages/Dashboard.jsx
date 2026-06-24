import React from 'react';
import { Card, StatCard, Badge, Button, ProgressBar } from '../components/ui';
import { Heart, Shield, Pill, Calendar, ChevronRight, AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { month: 'Jul', steps: 7200, sleep: 6.8 },
  { month: 'Aug', steps: 8100, sleep: 7.2 },
  { month: 'Sep', steps: 7600, sleep: 6.9 },
  { month: 'Oct', steps: 9200, sleep: 7.5 },
  { month: 'Nov', steps: 8700, sleep: 7.1 },
  { month: 'Dec', steps: 10200, sleep: 7.8 },
];

const alerts = [
  { type: 'warning', icon: AlertCircle, text: 'Annual wellness exam due in 2 weeks', action: 'Schedule Now' },
  { type: 'success', icon: CheckCircle, text: 'Flu shot claim approved — $0 cost to you', action: 'View Details' },
  { type: 'primary', icon: Clock, text: 'Prescription refill reminder: Metformin', action: 'Refill Now' },
];

const upcomingAppts = [
  { doctor: 'Dr. Sarah Chen', specialty: 'Primary Care', date: 'Jan 15', time: '10:00 AM', type: 'In-Person' },
  { doctor: 'Dr. Marcus Webb', specialty: 'Cardiology', date: 'Jan 22', time: '2:30 PM', type: 'Virtual' },
];

export default function Dashboard({ onNavigate }) {
  return (
    <div style={{ padding: 'var(--space-8)', maxWidth: 1200, animation: 'fadeIn 0.3s ease' }} className="animate-fade-in">

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--color-gray-900)' }}>
          Good morning, Sanath 👋
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-1)' }}>
          Here's your health summary for today — Wednesday, December 2024
        </p>
      </div>

      {/* Alerts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
        {alerts.map((alert, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
            padding: 'var(--space-4) var(--space-5)',
            background: alert.type === 'warning' ? 'var(--color-warning-50)' : alert.type === 'success' ? 'var(--color-success-50)' : 'var(--color-primary-50)',
            borderRadius: 'var(--radius-xl)',
            border: `1px solid ${alert.type === 'warning' ? '#fde68a' : alert.type === 'success' ? '#bbf7d0' : '#bfdbfe'}`,
            animation: `fadeIn 0.3s ease ${i * 0.1}s both`
          }}>
            <alert.icon size={18} color={alert.type === 'warning' ? 'var(--color-warning-600)' : alert.type === 'success' ? 'var(--color-success-600)' : 'var(--color-primary-600)'} />
            <span style={{ flex: 1, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-700)', fontWeight: 500 }}>{alert.text}</span>
            <Button variant="secondary" size="sm">{alert.action}</Button>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}>
        <StatCard label="Plan Deductible" value="$847" sub="of $1,500 used" icon={Shield} color="primary" />
        <StatCard label="Active Prescriptions" value="3" sub="2 refills pending" icon={Pill} color="teal" />
        <StatCard label="Upcoming Visits" value="2" sub="Next: Jan 15" icon={Calendar} color="warning" />
        <StatCard label="Health Score" value="84" sub="Good standing" icon={Heart} color="success" trend={6} />
      </div>

      {/* Charts + Appointments */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>

        {/* Activity Chart */}
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
            <div>
              <h2 style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>Health Activity</h2>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Daily steps — last 6 months</p>
            </div>
            <Badge variant="success" dot>On Track</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={healthData}>
              <defs>
                <linearGradient id="stepsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 13 }} />
              <Area type="monotone" dataKey="steps" stroke="#3b82f6" strokeWidth={2.5} fill="url(#stepsGrad)" dot={{ r: 4, fill: '#3b82f6' }} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)' }}>
            <h2 style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>Upcoming</h2>
            <button onClick={() => onNavigate('appointments')} style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary-600)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>View all <ChevronRight size={12} /></button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {upcomingAppts.map((appt, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4)', background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--color-primary-500), var(--color-teal-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
                  {appt.doctor.split(' ')[1][0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-900)' }}>{appt.doctor}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>{appt.specialty}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                    <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-gray-700)' }}>{appt.date} · {appt.time}</span>
                    <Badge variant={appt.type === 'Virtual' ? 'teal' : 'primary'}>{appt.type}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" style={{ width: '100%', marginTop: 'var(--space-4)', justifyContent: 'center' }} onClick={() => onNavigate('appointments')}>
            Schedule Appointment
          </Button>
        </Card>
      </div>

      {/* Benefits Usage */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
          <div>
            <h2 style={{ fontWeight: 700, color: 'var(--color-gray-900)' }}>Benefits Usage</h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>2024 plan year · Resets Jan 1</p>
          </div>
          <Button variant="ghost" size="sm" icon={TrendingUp} onClick={() => onNavigate('benefits')}>Full Details</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-8)' }}>
          <ProgressBar label="Deductible" value={847} max={1500} color="primary" />
          <ProgressBar label="Out-of-Pocket Max" value={1240} max={5000} color="teal" />
          <ProgressBar label="FSA Balance" value={680} max={2750} color="success" />
        </div>
      </Card>
    </div>
  );
}
