# 03 - Planning Engine

**Version:** 1.0

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI transforms engineering knowledge into a structured implementation plan before modifying the repository.

Planning is the bridge between understanding the problem and implementing the solution.

The objective is to produce a deterministic engineering plan that minimizes risk, maximizes reuse, and preserves repository consistency.

Implementation shall never begin before planning has been completed.

---

# 2. Engineering Philosophy

Engineering begins with planning.

The AI shall understand the complete implementation before modifying any file.

Planning reduces:

- Architectural drift
- Duplicate implementations
- Regression risks
- Unnecessary code generation
- Repository inconsistencies

The implementation should be the execution of a validated plan rather than an exploration of possible solutions.

---

# 3. Planning Lifecycle

Every engineering task shall follow the same planning lifecycle.

Repository Analysis

↓

Identify Affected Areas

↓

Determine Required Changes

↓

Identify Dependencies

↓

Identify Risks

↓

Define Execution Order

↓

Define Validation Strategy

↓

Begin Implementation

---

# 4. Repository Analysis

Before planning begins, analyze the repository to determine:

- Existing feature implementation
- Existing components
- Existing modules
- Existing services
- Existing APIs
- Existing routing
- Existing styling
- Existing testing

Planning shall be based on repository evidence rather than assumptions.

---

# 5. Change Identification

Determine precisely what requires modification.

Examples include:

- Component
- Service
- Module
- Interface
- Model
- API
- Route
- Style
- Test

Only files directly affected by the Jira shall be included in the implementation plan.

---

# 6. Reuse Strategy

For every required change determine whether the functionality should be:

Reuse

↓

Extend

↓

Create

Reuse existing implementations whenever possible.

Creating new functionality is the final option.

---

# 7. Dependency Planning

Identify all engineering dependencies.

Examples:

Feature

↓

API

↓

Service

↓

Component

↓

Template

↓

Styles

↓

Tests

The execution order shall respect dependency relationships.

---

# 8. Risk Assessment

Before implementation identify potential risks.

Examples:

- Shared component modification
- Shared service modification
- Public API changes
- State management changes
- Authentication impact
- Performance impact
- Accessibility impact

High-risk changes require additional validation.

---

# 9. Execution Strategy

Define the implementation sequence.

Typical sequence:

1. Update models or interfaces
2. Update services
3. Update business logic
4. Update components
5. Update templates
6. Update styles
7. Update tests
8. Validate implementation

The sequence may vary based on repository architecture but shall remain logical and deterministic.

---

# 10. Testing Strategy

Determine the required validation before implementation.

Examples:

- Unit tests
- Integration tests
- Component tests
- Existing regression tests
- Manual verification

Testing requirements shall be identified during planning rather than after implementation.

When automatic repository execution is expected after implementation, planning shall also identify:

- Build command
- Run command
- Expected local host and port
- Required environment assumptions
- Expected public preview mechanism such as `ngrok`
- Known blockers to automatic launch

---

# 11. Acceptance Criteria Mapping

Map every Jira acceptance criterion to planned implementation work.

Each acceptance criterion shall have:

- Planned implementation
- Planned validation
- Expected outcome

No acceptance criterion shall remain unplanned.

---

# 11A. Reuse Mapping

When the task is driven by Jira, Figma, screenshots, PRDs, or other requirement sources, planning shall explicitly identify:

- The most similar existing repository feature
- Existing components to reuse
- Existing services to reuse
- Existing styles, utilities, or layout patterns to reuse
- Files to modify
- Files to add only when reuse or extension is not sufficient

The implementation plan shall remain file-by-file and reuse-first.

---

# 11B. Approval Gate

Before implementation begins, planning shall stop and surface:

- Open questions
- Conflicting requirement sources
- Missing required external evidence
- Approval-sensitive changes when explicit human approval is required

Implementation shall not begin until these blockers are resolved or explicitly approved.

---

# 11C. Pre-Implementation Change Approval

After the implementation plan is complete and before implementation begins, the runtime shall present the planned repository changes for human review.

This review shall include, at minimum:

- Files to modify
- Files to create
- Files to delete when applicable
- Reuse map
- High-risk changes
- Acceptance-criteria-to-file mapping when available
- Planned build/run/preview commands when automatic launch is expected

The human reviewer shall be able to:

- Accept the planned change set
- Reject the planned change set
- Request revisions or clarifications

Implementation shall not begin until the planned file changes have been explicitly accepted.

---

# 12. Repository Preservation

Planning shall explicitly preserve:

- Existing architecture
- Existing reusable components
- Existing services
- Existing coding conventions
- Existing UI consistency
- Existing business workflows

The objective is extension rather than replacement.

---

# 13. Plan Validation

Before implementation begins verify:

✓ Repository analyzed.

✓ Required files identified.

✓ Existing reusable components identified.

✓ Dependencies understood.

✓ Risks identified.

✓ Acceptance criteria mapped.

✓ Testing strategy defined.

Planning is complete only after successful validation.

---

# 14. Engineering Rules

The AI shall:

- Plan before coding.
- Modify the minimum number of files.
- Prefer extending existing implementations.
- Minimize architectural impact.
- Keep implementation predictable.
- Consider downstream effects before making changes.

---

# 15. Non-Negotiable Rules

The AI shall never:

- Begin coding without a plan.

- Modify files not required by the Jira.

- Replace reusable implementations unnecessarily.

- Ignore repository dependencies.

- Ignore identified risks.

- Implement features that are outside Jira scope.

---

# 16. Success Criteria

Planning is successful when:

✓ Every required change has been identified.

✓ Every affected file has been planned.

✓ Dependencies have been resolved.

✓ Risks have been documented.

✓ Testing strategy has been defined.

✓ Repository architecture remains preserved.

---

# 17. Guiding Principle

Planning transforms engineering knowledge into an executable implementation strategy.

The AI shall construct a complete, repository-aware implementation plan before modifying code, ensuring that every engineering decision is deliberate, traceable, and aligned with both business requirements and repository architecture.
