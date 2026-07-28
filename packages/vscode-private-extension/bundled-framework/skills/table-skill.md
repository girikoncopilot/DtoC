# 02 - Tables Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Tables

---

# 2. Purpose

The Tables Skill provides all engineering knowledge required for creating, extending, and maintaining data tables within the repository.

The Tables Skill does not define table implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Displaying tabular data
- Data grids
- List views
- Table enhancements
- Row actions
- Column management
- Bulk actions
- Selection
- Pagination
- Table refresh
- Data presentation

The Tables Skill shall activate whenever structured data is presented in rows and columns.

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
- angular-testing.md
- angular-performance.md

Load only if available within the framework.

---

# 6. Required Engineering Patterns

Load:

03-Engineering-Patterns/

- tables.md

Load any additional dependencies declared by the Table Pattern.

---

# 7. Repository Context

Analyze:

- Existing table components
- Shared table templates
- Existing column definitions
- Existing row actions
- Existing pagination utilities
- Existing table services
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Tables Skill includes:

✓ Table creation

✓ Table modification

✓ Column management

✓ Row actions

✓ Bulk actions

✓ Pagination

✓ Table testing

The Tables Skill does not automatically include:

✗ Search

✗ Filtering

✗ Sorting

✗ Uploads

✗ Authentication

✗ Dashboard

These capabilities require their own Skills.

---

# 9. Expected Outputs

The Tables Skill enables downstream agents to:

- Plan table implementations.
- Implement table functionality.
- Validate table behavior.
- Review table quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Tables Skill is successful when:

✓ Required table standards loaded.

✓ Repository table assets identified.

✓ Existing reusable components leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Tables Skill shall never:

- Define table engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Tables Skill provides a deterministic mechanism for loading all engineering knowledge required for table-related work while preserving the Instructions Layer as the authoritative source of engineering standards.