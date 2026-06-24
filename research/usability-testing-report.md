# Usability Testing Report — CareOS Portal v1.0

## Study Overview
- **Method:** Moderated remote usability testing
- **Participants:** 8 participants (3 personas represented)
- **Tools:** Figma prototype, Zoom, FullStory
- **Date:** November 2024
- **Facilitator:** Sanath Kumar, Senior UI/UX Designer

---

## Tasks Tested

| Task | Completion Rate | Avg Time | Errors |
|------|----------------|----------|--------|
| Find deductible balance | 100% | 22s | 0 |
| Schedule a specialist appointment | 75% | 4m 12s | 2.1 avg |
| Ask AI copilot a benefits question | 87.5% | 1m 8s | 0.5 avg |
| File a claim | 50% | 8m 45s | 4.3 avg |
| Find in-network provider | 62.5% | 3m 30s | 1.8 avg |

---

## Key Findings

### Finding 1 — CRITICAL: Claim filing is too complex
**Severity:** High  
**Observation:** 4 of 8 participants failed to complete claim filing. Primary failure: couldn't find the upload button for itemized bills (below the fold, low contrast label).  
**Quote:** *"I kept looking for a 'submit a bill' button. I didn't realize 'file a claim' meant the same thing."*  
**Recommendation:** Rename CTA to "Submit a Bill for Reimbursement", move upload above the fold, increase button contrast to 7:1.

### Finding 2 — HIGH: AI copilot trust gap
**Severity:** Medium-High  
**Observation:** 3 participants hesitated to trust AI answers about coverage. Eleanor (senior persona) explicitly asked "Is this a real person?"  
**Quote:** *"I don't want to make a doctor's appointment based on what a bot tells me."*  
**Recommendation:** Add confidence indicator, source citation ("Based on your 2024 Cigna PPO plan"), and "Speak to a human" escalation button.

### Finding 3 — MEDIUM: Appointment scheduling — too many steps
**Severity:** Medium  
**Observation:** Participants expected to see available time slots after selecting a doctor. Current flow requires 3 additional steps.  
**Quote:** *"Why can't I just pick a time right here?"*  
**Recommendation:** Inline calendar slot picker on provider card. Reduce steps from 6 to 3.

### Finding 4 — LOW: Dashboard data overload
**Severity:** Low  
**Observation:** 2 participants felt the dashboard had too much information, didn't know where to look first.  
**Quote:** *"There's a lot going on. What's the most important thing I should do?"*  
**Recommendation:** Add "Next recommended action" card at top of dashboard. Implement visual hierarchy with primary CTA per section.

---

## Accessibility Audit Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| Color contrast (AA) | ✅ Pass | All text 4.5:1+ |
| Keyboard navigation | ✅ Pass | All interactive elements reachable |
| Screen reader (NVDA) | ⚠️ Partial | AI copilot streaming not announced |
| Focus indicators | ✅ Pass | 2px blue outline on all elements |
| Touch targets | ✅ Pass | Minimum 44x44px |
| Reduced motion | ⚠️ Partial | Animations not suppressed with prefers-reduced-motion |

---

## Iteration Log

| Version | Changes | Impact |
|---------|---------|--------|
| v1.0 | Initial prototype | — |
| v1.1 | Renamed claim CTA, moved upload above fold | Completion +25% |
| v1.2 | Added AI confidence indicator + human escalation | Trust rating +40% |
| v1.3 | Inline appointment time slots | Task time −62% |
| v1.4 | Dashboard priority card | Orientation time −35% |

---

## Net Promoter Score (Post-Test)
- **Overall NPS:** +42 (Good)
- **AI Copilot NPS:** +38
- **Ease of use rating:** 4.1/5
