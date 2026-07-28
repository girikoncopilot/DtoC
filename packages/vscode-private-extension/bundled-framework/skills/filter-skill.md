# 04 - Filtering Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Filtering

---

# 2. Purpose

The Filtering Skill provides all engineering knowledge required for implementing filtering capabilities within the repository.

The Filtering Skill does not define filtering implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Data filtering
- Advanced filters
- Quick filters
- Filter panels
- Multi-select filters
- Date filters
- Status filters
- Category filters
- Range filters
- Dynamic filters

The Filtering Skill shall activate whenever users refine displayed data using one or more filtering criteria.

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

- filtering.md

Load any additional dependencies declared by the Filtering Pattern.

---

# 7. Repository Context

Analyze:

- Existing filter components
- Shared filter panels
- Existing filter services
- Existing state management
- Existing query parameter handling
- Existing reusable filter controls
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Filtering Skill includes:

✓ Single filters

✓ Multi-filter combinations

✓ Dynamic filters

✓ Filter panels

✓ Date filters

✓ Range filters

✓ Filter persistence

✓ Filter testing

The Filtering Skill does not automatically include:

✗ Search

✗ Sorting

✗ Tables

✗ Reports

✗ Dashboard

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Filtering Skill enables downstream agents to:

- Plan filtering implementations.
- Implement filtering functionality.
- Validate filtering behavior.
- Review filtering quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Filtering Skill is successful when:

✓ Required filtering standards loaded.

✓ Repository filtering assets identified.

✓ Existing reusable filtering components leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Filtering Skill shall never:

- Define filtering engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Filtering Skill provides a deterministic mechanism for loading all engineering knowledge required for filtering-related work while preserving the Instructions Layer as the authoritative source of engineering standards.