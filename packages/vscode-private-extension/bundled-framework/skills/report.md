# 12 - Reports Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Reports

---

# 2. Purpose

The Reports Skill provides all engineering knowledge required for implementing reports, report generation, analytical views, exports, and business reporting capabilities within the repository.

The Reports Skill does not define report implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Reports
- Report generation
- Business reports
- Analytical reports
- Export reports
- Printable reports
- Report filters
- Report scheduling
- Report summary
- Data analysis

The Reports Skill shall activate whenever structured business information is generated for analysis, presentation, export, or printing.

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

- reports.md

Load any additional dependencies declared by the Reports Pattern.

---

# 7. Repository Context

Analyze:

- Existing report pages
- Existing report services
- Existing export implementations
- Existing report templates
- Existing chart components
- Existing printing functionality
- Existing reporting APIs
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Reports Skill includes:

✓ Report pages

✓ Report generation

✓ Report summaries

✓ Data visualization integration

✓ Export integration

✓ Printable reports

✓ Report testing

The Reports Skill does not automatically include:

✗ Dashboard

✗ Authentication

✗ Uploads

✗ Forms unrelated to reporting

✗ User Management

These capabilities require separate Skills or Engineering Patterns.

---

# 9. Expected Outputs

The Reports Skill enables downstream agents to:

- Plan report implementations.
- Implement reporting functionality.
- Validate report behavior.
- Review report quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Reports Skill is successful when:

✓ Required reporting standards loaded.

✓ Repository reporting assets identified.

✓ Existing reusable reporting implementations leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Reports Skill shall never:

- Define reporting engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Replace existing reporting architecture without explicit Jira requirements.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Reports Skill provides a deterministic mechanism for loading all engineering knowledge required for reporting-related work while preserving the Instructions Layer as the authoritative source of engineering standards.