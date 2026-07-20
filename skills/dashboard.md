# 11 - Dashboard Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Dashboard

---

# 2. Purpose

The Dashboard Skill provides all engineering knowledge required for implementing dashboard pages, summary views, widgets, and business overview screens within the repository.

The Dashboard Skill does not define dashboard implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Dashboard
- Home page
- Landing page
- Summary page
- KPI display
- Business metrics
- Dashboard widgets
- Statistics cards
- Charts
- Dashboard refresh
- Dashboard layout

The Dashboard Skill shall activate whenever multiple business metrics or summarized information are presented within a unified view.

---

# 4. Required Core Documents

Load:

01-Core/

- Core Role
- Core Workflow
- Planning Engine
- Implementation Engine
- Testing Engine
- Validation Engine

---

# 5. Required Angular Documents

Load:

02-Angular/

- angular-philosophy.md
- angular-standards.md
- angular-ui-guidelines.md
- angular-performance.md
- angular-testing.md

Load only if available within the framework.

---

# 6. Required Engineering Patterns

Load:

03-Engineering-Patterns/

- dashboard.md

Load any additional dependencies declared by the Dashboard Pattern.

---

# 7. Repository Context

Analyze:

- Existing dashboard pages
- Existing widget components
- Existing statistic cards
- Existing chart integrations
- Existing dashboard services
- Existing responsive layouts
- Existing navigation patterns
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Dashboard Skill includes:

✓ Dashboard pages

✓ KPI cards

✓ Statistics widgets

✓ Dashboard layout

✓ Dashboard refresh

✓ Responsive dashboard design

✓ Dashboard testing

The Dashboard Skill does not automatically include:

✗ Reports

✗ Authentication

✗ User Management

✗ Uploads

✗ Forms unrelated to dashboard functionality

These capabilities require separate Skills or Engineering Patterns.

---

# 9. Expected Outputs

The Dashboard Skill enables downstream agents to:

- Plan dashboard implementations.
- Implement dashboard functionality.
- Validate dashboard behavior.
- Review dashboard quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Dashboard Skill is successful when:

✓ Required dashboard standards loaded.

✓ Repository dashboard assets identified.

✓ Existing reusable dashboard components leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Dashboard Skill shall never:

- Define dashboard engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Replace existing dashboard architecture without explicit Jira requirements.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Dashboard Skill provides a deterministic mechanism for loading all engineering knowledge required for dashboard-related work while preserving the Instructions Layer as the authoritative source of engineering standards.