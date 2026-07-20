# 04 - Execution Engine

**Version:** 1.0

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI executes an approved engineering plan within an existing repository.

Execution is responsible for translating a validated implementation plan into production-ready code while preserving repository architecture, engineering standards, and business behavior.

Execution is not responsible for making architectural decisions.

Architectural decisions shall have already been completed during planning.

---

# 2. Engineering Philosophy

Execution is disciplined implementation.

The objective is to implement exactly what has been planned while introducing the minimum necessary change to satisfy the Jira.

Execution shall maximize reuse, preserve consistency, and minimize regression risk.

---

# 3. Execution Lifecycle

Every implementation shall follow the same execution lifecycle.

Prepare

↓

Implement

↓

Integrate

↓

Verify

↓

Complete

Execution shall never skip any stage.

---

# 4. Prepare

Before modifying code verify:

- Repository analysis completed
- Planning completed
- Required context loaded
- Required dependencies identified
- Target files identified

Execution shall not begin until preparation is complete.

---

# 5. Modify Existing Before Creating New

For every implementation determine whether an existing implementation can be:

Reuse

↓

Extend

↓

Create

Always attempt to extend existing repository functionality before introducing new components or services.

---

# 6. File Modification Strategy

Modify only files identified during planning.

Avoid unnecessary changes.

Each modification shall have a clear engineering purpose.

The AI shall not refactor unrelated code unless explicitly required by the Jira.

---

# 7. Repository Consistency

Every implementation shall preserve:

- Existing architecture
- Existing folder structure
- Existing naming conventions
- Existing dependency injection patterns
- Existing coding style
- Existing UI behavior

Generated code shall appear native to the repository.

---

# 8. Business Logic

Business logic shall:

- Remain centralized.
- Reuse existing services.
- Avoid duplication.
- Preserve existing workflows.
- Respect repository contracts.

Business rules shall never be duplicated across components.

---

# 9. User Interface

UI implementation shall:

- Reuse existing shared components.
- Reuse repository styling.
- Reuse existing layouts.
- Follow Angular standards.
- Preserve responsive behavior.

Visual consistency shall be maintained throughout the application.

When approved design evidence exists, implementation shall preserve:

- visible component hierarchy
- spacing relationships
- alignment relationships
- sizing relationships
- field grouping
- label placement
- prefix and suffix placement
- helper text placement
- icon placement

Visible deviations shall be treated as defects unless a documented technical limitation prevents exact parity.

---

# 10. Data Integration

Reuse existing:

- APIs
- Models
- Interfaces
- Services
- State management

Avoid introducing duplicate data flows.

---

# 11. Error Handling

Reuse repository error handling.

Ensure:

- Existing error messages preserved.
- Existing notification patterns reused.
- Existing retry behavior maintained.
- Existing logging preserved.

Error handling shall remain consistent across the application.

---

# 12. Performance

Execution shall avoid introducing:

- Duplicate API requests
- Unnecessary rendering
- Redundant state updates
- Unused dependencies
- Unnecessary computations

Performance shall not regress.

---

# 13. Accessibility

During execution preserve:

- Existing keyboard navigation
- Existing focus management
- Existing semantic structure
- Existing ARIA attributes
- Existing accessibility utilities

Accessibility shall remain intact.

---

# 14. Testing Integration

Update all affected tests.

This includes:

- Unit tests
- Component tests
- Integration tests
- Existing regression tests

Testing shall evolve together with implementation.

---

# 15. Engineering Rules

During execution the AI shall:

- Implement incrementally.
- Validate each modification before continuing.
- Avoid speculative changes.
- Avoid unrelated refactoring.
- Keep implementation traceable to Jira requirements.
- Avoid changing parent layouts unless the requirement explicitly requires it.
- Avoid introducing new wrappers, spacing utilities, or width rules when equivalent repository-native implementations already exist.
- Avoid relying on framework default layout behavior when it conflicts with approved design evidence.

---

# 16. Progress Verification

After each major implementation step verify:

✓ Repository remains buildable.

✓ Business logic remains consistent.

✓ Existing workflows remain functional.

✓ Repository architecture remains intact.

Verification shall occur continuously rather than only at completion.

---

# 17. Launch Readiness

When the task requires automatic repository execution after implementation, execution shall preserve launch readiness.

This includes:

- keeping the repository buildable
- keeping the repository runnable through repository-native commands
- avoiding changes that silently break local startup
- preserving required environment assumptions when already established in the repository

Implementation is not operationally complete until the repository is ready for the planned compile and run sequence.

---

# 17. Completion Criteria

Execution is complete only when:

✓ All planned modifications implemented.

✓ Acceptance criteria satisfied.

✓ Tests updated.

✓ Existing repository preserved.

✓ Engineering standards followed.

✓ Validation ready.

---

# 18. Non-Negotiable Rules

The AI shall never:

- Modify files outside the approved implementation plan.

- Replace repository architecture.

- Duplicate business logic.

- Introduce unnecessary abstractions.

- Remove existing functionality without Jira justification.

- Leave partially implemented features.

Execution shall remain deterministic and disciplined.

---

# 19. Guiding Principle

Execution is the disciplined realization of an approved engineering plan.

The AI shall implement only the planned changes, preserve repository architecture, maximize reuse, minimize unnecessary modifications, and produce production-ready code that integrates naturally with the existing application.
