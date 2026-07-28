# 06 - Pagination Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Pagination

---

# 2. Purpose

The Pagination Skill provides all engineering knowledge required for implementing pagination within the repository.

The Pagination Skill does not define pagination implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Pagination
- Server-side pagination
- Client-side pagination
- Infinite scrolling
- Cursor pagination
- Page navigation
- Page size selection
- Lazy loading
- Virtual scrolling
- Paged data retrieval

The Pagination Skill shall activate whenever data is divided into multiple pages or progressively loaded.

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

- pagination.md

Load any additional dependencies declared by the Pagination Pattern.

---

# 7. Repository Context

Analyze:

- Existing pagination components
- Shared pagination services
- Existing list implementations
- Existing table implementations
- Existing API pagination strategy
- Existing virtual scrolling utilities
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Pagination Skill includes:

✓ Client-side pagination

✓ Server-side pagination

✓ Infinite scrolling

✓ Cursor pagination

✓ Page navigation

✓ Page size selection

✓ Pagination testing

The Pagination Skill does not automatically include:

✗ Tables

✗ Search

✗ Filtering

✗ Sorting

✗ Dashboard

✗ Reports

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Pagination Skill enables downstream agents to:

- Plan pagination implementations.
- Implement pagination functionality.
- Validate pagination behavior.
- Review pagination quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Pagination Skill is successful when:

✓ Required pagination standards loaded.

✓ Repository pagination assets identified.

✓ Existing reusable pagination implementations leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Pagination Skill shall never:

- Define pagination engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Pagination Skill provides a deterministic mechanism for loading all engineering knowledge required for pagination-related work while preserving the Instructions Layer as the authoritative source of engineering standards.