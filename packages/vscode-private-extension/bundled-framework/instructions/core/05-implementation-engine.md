## 05 - Implementation Engine
**Version:** 1.0
**Status:** Stable
**Classification:** Core Framework Standard

---

# 1. Purpose

The Implementation Engine defines how the AI transforms an approved implementation plan into production-ready software.

Implementation is not the act of generating code.

It is the disciplined process of integrating new functionality into an existing system while preserving architecture, business logic, user experience, performance, accessibility, and maintainability.

The objective is to produce software that appears as though it was written by the original engineering team.

---

# 2. Objectives

The Implementation Engine shall:

- Implement every approved requirement.
- Preserve existing functionality.
- Preserve architectural integrity.
- Maximize reuse.
- Minimize repository modifications.
- Prevent regressions.
- Maintain coding standards.
- Maintain UI consistency.
- Produce production-ready code.
- Produce testable code.

---

# 3. Inputs

Implementation begins only after receiving:

- Approved Implementation Plan
- Requirement Matrix
- Business Rule Catalogue
- Acceptance Criteria
- Repository Analysis
- Reuse Matrix
- Risk Register
- Testing Strategy
- Validation Strategy

Missing inputs shall block implementation.

---

# 4. Implementation Philosophy

Implementation is an engineering activity—not a code generation activity.

Every line of code must exist because a documented business requirement requires it.

No implementation shall exist without traceability to the Requirement Matrix.

Implementation must optimize for:

- Correctness
- Simplicity
- Maintainability
- Consistency
- Reliability

---

# 5. Requirement-to-Code Traceability

Before modifying any file, identify:

- Requirement ID(s)
- Business Rule(s)
- Acceptance Criteria
- Planned Modification

Every implementation shall be traceable.

Example:

REQ-003
↓
AC-004
↓
notes.component.html
↓
Add "Note Type" column

No code shall be introduced without a documented requirement.

---

# 6. File Modification Policy

Only modify files identified during the Planning phase.

For each modified file:

Document:

- Purpose
- Reason
- Expected behavior
- Associated requirements

Avoid expanding the scope beyond what is necessary.

---

# 7. Repository-First Principle

Before creating:

- Component
- Service
- Directive
- Pipe
- Utility
- Validator
- Dialog
- Interface
- Model
- SCSS

Search the repository.

If an existing implementation satisfies the requirement:

Reuse it.

If extension is possible:

Extend it.

Create new artifacts only when no suitable implementation exists.

---

# 8. Architecture Preservation

Respect:

- Existing folder structure
- Layer boundaries
- Module organization
- Dependency direction
- State management
- Service ownership
- API contracts

Do not reorganize the architecture unless explicitly required.

---

# 9. Business Logic Integrity

Business logic shall remain in its existing ownership layer.

Avoid moving business rules into:

- Components
- Templates
- Stylesheets

If business logic already exists within services, utilities, or domain layers, extend those implementations rather than duplicating logic.

---

# 10. UI Implementation Standards

UI implementation shall:

- Match existing design patterns.
- Match existing spacing.
- Match typography.
- Match color system.
- Match component behavior.
- Match interaction patterns.

Framework defaults shall never override repository design standards.

If an equivalent implementation already exists, copy its structure and styling before introducing new markup.

---

# 11. User Interaction Integrity

Interactive elements shall remain independent.

Do not attach click handlers to containers containing multiple interactive controls.

Correct:

Filename → Preview

Download Icon → Download

Delete Icon → Delete

Status Icon → Status Action

Incorrect:

Entire row triggers preview and overrides download or delete actions.

Independent user actions must never interfere with one another.

---

# 12. Data Integrity

Maintain existing:

- API contracts
- Request models
- Response models
- Serialization
- Validation
- Error handling

Do not change backend expectations unless explicitly required.

---

# 13. Performance Standards

Avoid:

- Duplicate API calls
- Duplicate state
- Duplicate rendering
- Excessive subscriptions
- Memory leaks
- Unnecessary change detection

Prefer extending existing data flows over introducing parallel ones.

---

# 14. Accessibility Standards

Maintain or improve:

- Keyboard navigation
- Focus order
- Screen reader compatibility
- Semantic HTML
- ARIA attributes
- Color contrast
- Focus visibility

Accessibility regressions are considered implementation defects.

---

# 15. Error Handling

Every new behavior shall handle:

- Invalid input
- Missing data
- API failures
- Permission failures
- Network failures
- Unexpected exceptions

Failures shall degrade gracefully.

No implementation shall introduce runtime crashes.

---

# 16. Code Quality Standards

Generated code shall:

- Follow repository naming conventions.
- Follow formatting conventions.
- Follow architectural conventions.
- Avoid duplicate logic.
- Avoid dead code.
- Avoid commented-out code.
- Avoid unnecessary abstractions.

Code should appear indistinguishable from manually written production code.

---

# 17. Self-Review Before Completion

Before declaring implementation complete, verify:

✓ Every requirement has been implemented.

✓ Every business rule has been respected.

✓ Every acceptance criterion has been satisfied.

✓ Existing functionality remains unchanged.

✓ Repository conventions have been followed.

✓ Existing reusable implementations have been leveraged.

✓ No unrelated code has been modified.

✓ No unnecessary files have been created.

---

# 18. Deliverables

After implementation provide:

## Modified Files

List every modified file.

---

## New Files

List every new file.

---

## Component Changes

Describe component modifications.

---

## Service Changes

Describe service modifications.

---

## HTML Changes

Summarize template updates.

---

## TypeScript Changes

Summarize logic updates.

---

## Styling Changes

Summarize SCSS or CSS modifications.

---

## Requirement Coverage

Map implemented files back to Requirement IDs.

---

## Risks

Document any remaining implementation risks.

---

## Known Limitations

Document any functionality intentionally deferred or not implemented.

---

# 19. Exit Criteria

Implementation is complete only when:

✓ Every planned modification has been completed.

✓ Every requirement has corresponding code.

✓ No unrelated functionality has changed.

✓ Existing architecture has been preserved.

✓ Existing UI behavior has been maintained.

✓ Performance has not degraded.

✓ Accessibility has been maintained.

✓ The implementation is production-ready.

---

# 20. Non-Negotiable Rules

The AI shall never:

- Guess business behavior.
- Skip repository analysis.
- Ignore reusable implementations.
- Duplicate existing logic.
- Introduce unrelated refactoring.
- Break API contracts.
- Violate architecture.
- Introduce regressions knowingly.
- Declare completion without self-review.

---

# 21. Guiding Principle

Implementation is the disciplined execution of an approved engineering plan.

Every code change must be intentional, traceable, justified, and aligned with the existing architecture.

The best implementation is one that solves the business problem while making the smallest safe change to the existing system.