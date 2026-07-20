# Angular Jira Task

**Version:** 1.0

**Status:** Stable

**Classification:** Framework Entry Point

---

# Purpose

This document serves as the primary entry point for implementing Angular Jira stories using the AI Engineering Framework.

It does not define engineering standards.

It does not define Angular standards.

It does not define implementation patterns.

Its responsibility is to orchestrate the framework by executing the engineering lifecycle defined throughout the framework.

---

# Primary Objective

For every Jira story, produce a production-ready implementation that:

- Satisfies every acceptance criterion.
- Preserves the existing repository architecture.
- Reuses existing implementations wherever possible.
- Maintains engineering consistency.
- Prevents regressions.
- Produces maintainable, production-quality code.

---

# Framework Execution Order

For every Jira, execute the framework in the following order.

## Phase 1 — Core

Load and follow:

- 00-core-role.md
- 01-core-workflow.md
- 02-jira-intelligence.md
- 02-design-intelligence.md when Figma, screenshots, wireframes, or mockups are provided
- 03-repository-intelligence.md
- 04-planning-engine.md
- 05-implementation-engine.md
- 06-testing-engine.md
- 07-validation-engine.md
- 08-output-engine.md

---

## Phase 2 — Feature Detection

Execute:

01-feature-detection-engine.md

Determine:

- Required engineering capabilities.
- Required business workflows.
- Required dependencies.
- Required exclusions.

---

## Phase 3 — Context Loading

Execute:

02-context-loading-engine.md

Load only:

- Required Angular Standards.
- Required Engineering Patterns.
- Required repository context.

Do not activate unrelated framework documents.

---

## Phase 4 — Repository Analysis

Analyze the repository.

Identify:

- Existing architecture.
- Existing components.
- Existing services.
- Existing APIs.
- Existing styling.
- Existing tests.
- Existing reusable implementations.

Repository evidence has higher priority than assumptions.

---

## Phase 5 — Planning

Execute:

03-planning-engine.md

Produce a structured engineering implementation plan before writing code.

---

## Phase 6 — Implementation

Execute:

04-execution-engine.md

Implement the approved engineering plan.

Reuse existing repository implementations.

Modify only the files required by the Jira.

---

## Phase 7 — Validation

Execute:

05-validation-engine.md

Validate:

- Acceptance criteria.
- Repository consistency.
- Engineering standards.
- Performance.
- Accessibility.
- Regression risk.
- Testing.

---

## Phase 8 — Self Review

Execute:

06-self-review-engine.md

Review the completed implementation as though performing a senior engineering pull request review.

Revise implementation if required before delivery.

---

## Phase 9 — Compile And Run

After approval and review, automatically:

- compile the Angular repository using the repository-native build command
- run the application using the repository-native serve command
- expose the running application through `ngrok` when the environment and project support it
- record the commands used, launch status, and preview access details

Runtime completion shall not be claimed without launch evidence when automatic compile/run is part of the requested workflow.

---

# Engineering Priorities

When conflicts occur, apply the following priority order.

1. Jira Acceptance Criteria

2. Existing Repository Architecture

3. Core Engineering Standards

4. Angular Standards

5. Engineering Patterns

6. Personal Implementation Preference

Higher-priority decisions shall always override lower-priority decisions.

---

# Repository Rules

The AI shall:

- Extend before replacing.
- Reuse before creating.
- Preserve architecture.
- Preserve styling.
- Preserve business workflows.
- Preserve accessibility.
- Preserve performance.

The repository is the source of truth.

---

# Framework Rules

The AI shall never:

- Skip framework phases.
- Skip repository analysis.
- Skip planning.
- Skip validation.
- Skip self-review.
- Create duplicate implementations.
- Modify unrelated functionality.
- Ignore repository conventions.

---

# Expected Deliverable

Every completed Jira implementation shall include:

- Engineering summary.
- Implementation summary.
- Files modified.
- Acceptance criteria coverage.
- Testing summary.
- Validation summary.
- Self-review approval.
- Compile/run summary when automatic launch is enabled.

The implementation shall be production-ready.

---

# Guiding Principle

The AI Engineering Framework is an engineering methodology rather than a prompt.

The AI shall execute the complete framework lifecycle for every Jira story, making deliberate engineering decisions, preserving repository integrity, and delivering production-ready software through disciplined analysis, planning, implementation, validation, and review.
