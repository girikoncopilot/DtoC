# 03 - Search Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Search

---

# 2. Purpose

The Search Skill provides all engineering knowledge required for implementing search functionality within the repository.

The Search Skill does not define search implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Search
- Global search
- Table search
- Keyword search
- Quick search
- Autocomplete
- Typeahead
- Search input
- Live search
- Search results

The Search Skill shall activate whenever users locate data through text-based search.

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

- search.md

Load any additional dependencies declared by the Search Pattern.

---

# 7. Repository Context

Analyze:

- Existing search components
- Shared search services
- Existing search inputs
- Existing autocomplete implementations
- Existing API search patterns
- Existing debounce utilities
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Search Skill includes:

✓ Search input

✓ Keyword search

✓ Global search

✓ Live search

✓ Autocomplete

✓ Typeahead

✓ Search testing

The Search Skill does not automatically include:

✗ Filtering

✗ Sorting

✗ Tables

✗ Dashboard

✗ Reports

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Search Skill enables downstream agents to:

- Plan search implementations.
- Implement search functionality.
- Validate search behavior.
- Review search quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Search Skill is successful when:

✓ Required search standards loaded.

✓ Repository search assets identified.

✓ Existing search implementations reused.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Search Skill shall never:

- Define search engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Search Skill provides a deterministic mechanism for loading all engineering knowledge required for search-related work while preserving the Instructions Layer as the authoritative source of engineering standards.