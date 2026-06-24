# Design Handoff Specification — CareOS Portal

## Overview
This document provides engineering implementation specs for the CareOS healthcare portal design system. All measurements in pixels unless noted.

---

## Design Tokens

### Spacing Scale
```
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48
```

### Type Scale
```
xs: 12px / 1.4 / -0.01em
sm: 14px / 1.5 / -0.01em
base: 16px / 1.6 / 0
lg: 18px / 1.5 / -0.015em
xl: 20px / 1.4 / -0.02em
2xl: 24px / 1.3 / -0.025em
3xl: 30px / 1.2 / -0.03em
```

### Border Radius
```
sm: 6px  (inputs, small chips)
md: 8px  (dropdowns, tooltips)
lg: 12px (buttons, tags)
xl: 16px (cards, modals)
2xl: 24px (large panels)
full: 9999px (badges, avatars)
```

---

## Component Specs

### Button — Primary
```
Height: 40px (md) / 32px (sm) / 48px (lg)
Padding: 10px 20px
Font: 14px / 600 / Inter
Border radius: 12px
Background: #2563eb
Hover: #1d4ed8 (transition: 150ms ease)
Disabled: opacity 0.5
Focus: 2px #3b82f6 outline, 2px offset
Icon gap: 8px
Min width: 80px
```

### Card
```
Background: #ffffff
Border: 1px solid #e5e7eb
Border radius: 16px
Padding: 24px
Shadow: 0 1px 2px rgba(0,0,0,0.05)
Hover shadow: 0 4px 6px rgba(0,0,0,0.1)
Hover transform: translateY(-2px)
Transition: all 200ms ease
```

### Badge
```
Height: 22px
Padding: 3px 10px
Font: 11px / 700 / Inter
Border radius: 9999px
Dot size: 6px
```

### Input
```
Height: 40px
Padding: 10px 16px
Border: 1px solid #e5e7eb
Border radius: 8px
Focus border: 2px solid #3b82f6
Font: 14px / 400
Placeholder: #9ca3af
Error border: #ef4444
Error message: 12px / #dc2626 / below input / 4px gap
```

---

## Interaction States

### Loading / Skeleton
```
Base: #f3f4f6
Shimmer: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)
Animation: shimmer 1.5s infinite
Border radius: match component
```

### AI Streaming Response
```
Show typing indicator (3 dots) immediately on request send
Typing dot animation: translateY(-6px), staggered 0.2s delay each
Replace with streamed text when first token arrives
aria-live="polite" on message container
Announce "Response ready" when stream completes
```

### Page Transitions
```
Entering: opacity 0→1 + translateY(8px→0)
Duration: 300ms
Easing: ease
Respect prefers-reduced-motion: disable all animations
```

---

## Responsive Breakpoints
```
Mobile:  < 640px  — single column, bottom nav
Tablet:  640-1024px — collapsible sidebar
Desktop: > 1024px  — full sidebar (240px fixed)
```

---

## Figma File Structure
```
📁 CareOS Design System
├── 🎨 Foundations (tokens, colors, type)
├── 🧩 Components (buttons, cards, badges, inputs)
├── 📐 Patterns (forms, navigation, data viz)
├── 📱 Pages (dashboard, appointments, benefits, copilot)
└── 🔬 Prototypes (user flows, interactions)
```
