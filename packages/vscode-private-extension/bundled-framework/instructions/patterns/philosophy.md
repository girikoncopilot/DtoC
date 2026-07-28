# 00 - Pattern Philosophy

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Standard

---

# 1. Purpose

This document defines the philosophy, lifecycle, and application of Engineering Patterns within the AI Engineering Framework.

Engineering Patterns represent reusable implementation knowledge derived from the repository, business requirements, and previous engineering solutions.

Patterns are not features.

Patterns are reusable solutions to recurring engineering problems.

The objective is to enable the AI to recognize implementation problems, discover existing repository solutions, and apply consistent engineering decisions across multiple Jira stories without requiring feature-specific instructions.

---

# 2. What is an Engineering Pattern?

An Engineering Pattern is a repeatable implementation approach that solves a recurring problem while preserving:

- Repository architecture
- Business rules
- UI consistency
- Performance
- Accessibility
- Maintainability
- Existing engineering practices

A pattern defines **how** a category of problems should be solved.

It does not define **what** business functionality should be implemented.

Business requirements always originate from the Jira.

Patterns describe the engineering approach used to satisfy those requirements.

---

# 3. Pattern Hierarchy

Engineering Patterns exist below the Core Framework and Angular Standards.

Decision hierarchy shall always be:

Jira

↓

Core Framework

↓

Angular Standards

↓

Engineering Patterns

↓

Repository Implementation

↓

Generated Code

Higher levels always take precedence over lower levels.

A pattern shall never override a Jira requirement.

---

# 4. Repository First Principle

Every pattern begins with repository discovery.

Before applying any engineering pattern:

Search the repository.

Identify:

- Existing implementation
- Existing reusable component
- Existing service
- Existing utility
- Existing CSS
- Existing interaction model
- Existing testing approach

If an equivalent implementation exists:

Reuse it.

Do not create a second implementation.

The repository is always the primary implementation reference.

---

# 5. Pattern Discovery

Before implementation, identify which engineering patterns apply.

A single Jira may require multiple patterns.

Examples:

Notes Grid

↓

Table Pattern

↓

Sorting Pattern

↓

Filtering Pattern

↓

Search Pattern

↓

Accessibility Pattern

↓

Testing Pattern

Patterns are composable.

The AI shall identify all applicable patterns before implementation begins.

---

# 6. Pattern Composition

Engineering problems rarely belong to a single category.

Patterns shall work together.

Example:

Upload Document

may require:

- Upload Pattern
- Preview Pattern
- Dialog Pattern
- Authentication Pattern
- Accessibility Pattern

No individual pattern operates in isolation.

The AI shall combine patterns while preserving repository consistency.

---

# 7. Repository Discovery Before Construction

When implementing functionality:

The AI shall first determine whether the repository already contains:

- Component
- Directive
- Service
- Pipe
- Utility
- SCSS
- Layout
- Business logic
- Unit tests

Existing implementations shall always be preferred over new implementations.

Construction begins only after discovery is complete.

---

# 8. Pattern Responsibilities

Patterns define engineering decisions.

Examples include:

Tables

- Column alignment
- Width consistency
- Responsive behavior
- Actions
- Loading
- Empty states

Forms

- Validation
- Layout
- Labels
- Date controls
- Field consistency

Uploads

- Validation
- Progress
- Retry
- Preview eligibility

Preview

- Image preview
- PDF preview
- Independent actions

Search

- Debouncing
- API integration
- State preservation

Sorting

- Stable sorting
- Indicators
- Integration with filtering

Filtering

- Multiple filters
- Date filters
- Search interaction

Patterns never define business workflows.

---

# 9. Pattern Consistency

Equivalent engineering problems shall produce equivalent implementations.

Examples:

Every upload workflow should behave consistently.

Every date filter should behave consistently.

Every sortable table should behave consistently.

Every preview interaction should behave consistently.

Users should never experience different behaviors for equivalent functionality.

---

# 10. Pattern Evolution

Patterns are living engineering standards.

When a better engineering solution is established within the repository:

The pattern shall evolve.

Patterns should improve over time.

Previous implementations should remain valid unless the repository itself evolves.

Engineering Patterns shall reflect repository maturity.

---

# 11. Conflict Resolution

When multiple patterns apply:

Resolve conflicts using the following priority:

1. Jira Requirements

2. Existing Repository Implementation

3. Core Framework

4. Angular Standards

5. Engineering Patterns

6. General Framework Knowledge

Never resolve conflicts by introducing inconsistent behavior.

If uncertainty remains:

Request clarification.

Do not guess.

---

# 12. Performance

Patterns shall encourage reuse.

Avoid:

- Duplicate implementations
- Duplicate business logic
- Duplicate UI
- Duplicate API calls
- Duplicate styling

Patterns should reduce engineering effort over time.

---

# 13. Testing

Every pattern shall define its own testing expectations.

Tests shall verify:

- Business behavior
- Repository integration
- User interaction
- Error handling
- Accessibility
- Edge cases

Patterns are incomplete without verification.

---

# 14. Documentation

Engineering Patterns shall be:

- Clear
- Reusable
- Technology aware
- Repository aware
- Independent

A pattern should be understandable without referencing a specific Jira.

---

# 15. Review Checklist

Before applying any pattern verify:

✓ Applicable patterns identified.

✓ Repository analyzed.

✓ Existing implementation reused.

✓ Business rules preserved.

✓ Repository consistency maintained.

✓ Architecture respected.

✓ Performance preserved.

✓ Accessibility maintained.

✓ Unit testing planned.

---

# 16. Non-Negotiable Rules

The AI shall never:

- Apply a pattern without repository analysis.

- Replace an existing repository implementation with a new one unnecessarily.

- Apply patterns that contradict Jira requirements.

- Duplicate engineering solutions.

- Mix unrelated patterns without justification.

- Break repository consistency.

- Treat patterns as feature specifications.

Patterns are engineering guidance—not business requirements.

---

# 17. Guiding Principle

Engineering Patterns transform isolated implementations into reusable engineering knowledge.

Every solved problem should strengthen the framework.

The AI shall treat every implementation as an opportunity to reuse proven solutions, preserve repository consistency, and reduce future engineering effort.

The success of an Engineering Pattern is measured by its ability to solve many different Jira stories using one consistent engineering approach while remaining indistinguishable from the repository's existing implementation.