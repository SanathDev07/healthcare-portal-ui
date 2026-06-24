# 🏥 CareOS — Enterprise Healthcare Member Portal

> **A full-stack UI/UX showcase** — enterprise healthcare portal with an AI-powered Benefits Copilot, built to demonstrate end-to-end product design and implementation skills.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Design System](https://img.shields.io/badge/Design%20System-Custom-2563eb?style=flat)
![WCAG](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-16a34a?style=flat)
![AI](https://img.shields.io/badge/AI-Agentic%20Copilot-8b5cf6?style=flat)

---

## 🎯 Problem Statement

Healthcare portals are notoriously hard to use. Members can't find basic coverage information, claim filing is a multi-step maze, and insurance jargon creates anxiety. **The result:** 60%+ of members call support for questions the portal should answer.

**CareOS** reimagines the member experience — clear, calm, and intelligent.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🧭 **Member Dashboard** | Health activity charts, benefits usage, upcoming appointments, smart alerts |
| 📅 **Appointment Management** | Book, reschedule, cancel — in-person and virtual visits |
| 🛡️ **Benefits Navigator** | Visual deductible/OOP tracking, coverage details, plan year summary |
| 🤖 **AI Benefits Copilot** | Conversational AI for benefits questions — streaming responses, confidence indicators, human escalation |
| ♿ **Accessibility-First** | WCAG 2.1 AA compliant — skip links, ARIA, keyboard nav, focus management |
| 📐 **Design System** | Custom token-based design system — colors, typography, spacing, components |

---

## 🎨 Design Process

### Research → Design → Test → Iterate

```
Discovery          →    Design           →    Validate
─────────────────       ───────────────       ──────────────
User interviews (12)    Wireframes            Usability tests (8)
Survey (200+)           High-fi mockups       A/B testing
Competitive audit       Design system         Accessibility audit
Journey mapping         Prototype             Iteration
```

**📁 Full research artifacts in `/research`:**
- [`personas.md`](./research/personas.md) — 3 detailed user personas with behavioral patterns
- [`journey-map.md`](./research/journey-map.md) — End-to-end claim filing journey with pain points
- [`usability-testing-report.md`](./research/usability-testing-report.md) — 8-participant study with findings and iterations

**📁 Engineering specs in `/docs`:**
- [`accessibility-audit.md`](./docs/accessibility-audit.md) — Full WCAG 2.1 audit with remediation log
- [`design-handoff-spec.md`](./docs/design-handoff-spec.md) — Complete component specs for engineering

---

## 🤖 Agentic AI UX Design

The AI Benefits Copilot demonstrates key patterns for designing trustworthy AI interfaces:

| Pattern | Implementation |
|---------|---------------|
| **Typing indicator** | 3-dot animation while AI processes — sets expectations |
| **Confidence badge** | % score shown per response — transparent about AI certainty |
| **Trust disclaimer** | Non-blocking banner — positions AI as assistant, not authority |
| **Human escalation** | Always-visible "Talk to a human" option — critical for healthcare |
| **Feedback loop** | 👍/👎 on every response — trains improvement |
| **Fallback state** | Graceful degradation when AI can't answer confidently |

---

## 🏗️ Project Structure

```
healthcare-portal-ui/
├── src/
│   ├── components/
│   │   ├── ui/          # Design system: Card, Button, Badge, StatCard, ProgressBar
│   │   └── layout/      # Sidebar navigation
│   ├── pages/           # Dashboard, AICopilot, Appointments, Benefits
│   ├── styles/          # Design tokens, global styles, animations
│   └── App.jsx
├── research/
│   ├── personas.md              # User research personas
│   ├── journey-map.md           # Claims journey map
│   └── usability-testing-report.md
├── docs/
│   ├── accessibility-audit.md   # WCAG 2.1 AA audit
│   └── design-handoff-spec.md   # Engineering specs
└── design/                      # Figma screenshots & mockups
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/SanathDev07/healthcare-portal-ui.git
cd healthcare-portal-ui
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📊 Key UX Outcomes (Usability Study)

| Metric | Before | After |
|--------|--------|-------|
| Claim filing completion | 50% | 75% |
| Support call volume | Baseline | -24% (projected) |
| Appointment booking time | 4m 12s | 1m 35s |
| AI copilot trust rating | — | 4.1/5 |
| WCAG AA compliance | 76% | 94% |

---

## 🛠️ Tech Stack

**Design:** Figma · Design Tokens · Atomic Design  
**Frontend:** React 18 · JavaScript · CSS Custom Properties  
**Data Viz:** Recharts  
**Icons:** Lucide React  
**AI Pattern:** Streaming response UX · Confidence indicators · Fallback states  

---

## 👤 About

**Sanath Kumar** — UI/UX Designer & Agentic AI Specialist  
6+ years designing enterprise digital experiences across healthcare (Cigna), insurance (Geico), and financial services (Bank of America).

[LinkedIn](https://linkedin.com/in/sanathkumar) · [Portfolio](https://github.com/SanathDev07) · sanathreddy918@gmail.com

---

*This project is a portfolio showcase demonstrating UI/UX design process, component architecture, AI interaction design, and accessibility implementation.*
