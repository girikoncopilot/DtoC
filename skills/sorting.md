# 05 - Sorting Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Sorting

---

# 2. Purpose

The Sorting Skill provides all engineering knowledge required for implementing data sorting capabilities within the repository.

The Sorting Skill does not define sorting implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Data sorting
- Ascending sort
- Descending sort
- Multi-column sorting
- Custom sorting
- Sort controls
- Sort persistence
- Default ordering
- User-defined ordering

The Sorting Skill shall activate whenever users control the order in which data is presented.

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

- sorting.md

Load any additional dependencies declared by the Sorting Pattern.

---

# 7. Repository Context

Analyze:

- Existing sorting components
- Shared sort controls
- Existing sorting utilities
- Existing query parameter handling
- Existing state management
- Existing table integrations
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Sorting Skill includes:

✓ Ascending sorting

✓ Descending sorting

✓ Multi-field sorting

✓ Default sort order

✓ User-controlled sorting

✓ Sort persistence

✓ Sorting tests

The Sorting Skill does not automatically include:

✗ Search

✗ Filtering

✗ Tables

✗ Reports

✗ Dashboard

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Sorting Skill enables downstream agents to:

- Plan sorting implementations.
- Implement sorting functionality.
- Validate sorting behavior.
- Review sorting quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Sorting Skill is successful when:

✓ Required sorting standards loaded.

✓ Repository sorting assets identified.

✓ Existing reusable sorting implementations leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Sorting Skill shall never:

- Define sorting engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Sorting Skill provides a deterministic mechanism for loading all engineering knowledge required for sorting-related work while preserving the Instructions Layer as the authoritative source of engineering standards.