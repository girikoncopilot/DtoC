# AI Engineering Framework

**Version:** 1.0

**Status:** Stable

---

# Purpose

This repository is powered by the AI Engineering Framework.

The framework is the authoritative engineering runtime for all software development tasks.

This framework is optimized for a single brownfield Angular project rather than for broad generic reuse.

Prefer concrete repository-native behavior over abstract generic guidance whenever the two conflict.

Do not use generic software development workflows.

Do not invent your own execution process.

Execute the framework exactly as defined.

---

# Runtime Authority

The AI Engineering Framework is the single source of truth for engineering execution.

If your default reasoning conflicts with this framework:

**The framework always takes precedence.**

Do not:

- Skip runtime phases.
- Merge runtime phases.
- Invent additional runtime phases.
- Replace framework execution with generic AI workflows.
- Optimize away required runtime steps.

Execute the framework exactly as defined.

---

# Framework Architecture

The framework is composed of independent engineering layers.

```
Prompts
    │
    ▼
Runtime
    │
    ▼
Agents
    │
    ▼
Instructions
    │
    ▼
Skills
    │
    ▼
Hooks
```

Each layer has exactly one responsibility.

Responsibilities shall never overlap.

---

# Layer Responsibilities

## Prompts

Prompts are runtime entry points.

Examples:

- Implement Jira
- Fix Bug
- Enhance Feature
- Refactor Code
- Review Pull Request
- Analyze Repository

Prompts initialize runtime execution.

Prompts never perform engineering work.

Prompts may contain project-specific operating constraints, source-priority rules, and fidelity expectations so long as they do not redefine runtime order or bypass runtime agents.

---

## Runtime

The Runtime owns engineering execution.

The Runtime defines:

- execution order
- runtime phases
- runtime artifacts
- runtime hooks
- runtime completion

Execute the appropriate runtime exactly as defined.

Do not redefine runtime execution.

---

## Agents

Agents perform engineering work.

Runtime Agents:

- Repository Analyst
- Jira Analyst
- Feature Detector
- Context Resolver
- Planner
- Implementer
- Testing Agent
- Validator
- Reviewer

Every engineering activity is performed by these agents.

Do not invent additional runtime agents.

---

## Instructions

Instructions define engineering knowledge.

Examples:

- Core Engineering
- Angular Standards
- Angular Forms
- Angular Testing
- Engineering Patterns
- UI Standards

Instructions are the authoritative source of engineering standards.

Never duplicate engineering standards outside the Instructions layer.

---

## Skills

Skills determine which engineering capabilities are required.

Examples:

- Forms
- Tables
- Search
- Filtering
- Sorting
- Pagination
- Dialogs
- Uploads
- Preview
- Authentication
- Dashboard
- Reports
- Accessibility

Skills load the minimum engineering capability required by the feature.

Skills may load one or more Engineering Patterns when required.

Never load unrelated Skills.

---

## Hooks

Hooks validate runtime integrity.

Hooks verify:

- runtime transitions
- required artifacts
- execution integrity
- runtime completion

Hooks never perform engineering work.

Hooks never modify implementation.

---

# Runtime Execution

Execute the appropriate runtime for the requested engineering task.

Examples:

- Implement Jira → Full Runtime
- Fix Bug → Full Runtime
- Enhance Feature → Full Runtime
- Refactor Code → Full Runtime
- Review Pull Request → Review Runtime
- Analyze Repository → Repository Analysis Runtime

Do not redefine runtime execution.

Execute the runtime exactly as defined by the Runtime layer.

For this project, the preferred execution style is:

- requirement source first
- repository reuse first
- file-by-file planning before edits
- design-evidence fidelity before completion
- visible differences treated as defects unless a documented technical limitation prevents parity

---

# Runtime Progress

When reporting progress, report runtime phases.

Do not generate generic implementation progress.

Preferred format:

```
□ Repository Analysis

□ Jira Analysis

□ Feature Detection

□ Context Resolution

□ Planning

□ Implementation

□ Testing

□ Validation

□ Review

□ Runtime Complete
```

Progress shall always mirror runtime execution.

---

# Runtime Artifacts

Every runtime phase produces one or more engineering artifacts.

Examples include:

- RepositoryAnalysis
- BusinessRequirements
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- TestSummary
- ValidationReport
- ReviewDecision

Never execute downstream runtime phases before prerequisite artifacts exist.

---

# Repository Analysis

Every engineering task begins with repository understanding.

Identify:

- Architecture
- Folder structure
- Existing conventions
- Shared components
- Shared services
- Shared utilities
- Existing engineering patterns
- Existing testing strategy

Repository understanding always precedes implementation.

---

# Brownfield Development

Assume every repository is an existing production system unless explicitly stated otherwise.

Always prefer:

1. Existing components
2. Existing services
3. Existing utilities
4. Existing patterns
5. Existing architecture

Never introduce architectural changes without explicit requirements.

Preserve repository consistency.

---

# Capability Loading

Load only the Skills required by the detected feature.

Example:

Employee Form

Load:

- Forms

Do not load:

- Authentication
- Dashboard
- Reports
- Uploads

unless required.

Load the minimum engineering capability necessary.

---

# Engineering Principles

Always:

- Analyze before implementing.
- Reuse before creating.
- Plan before coding.
- Test before validating.
- Validate before reviewing.
- Review before completing.

Never bypass runtime phases.

---

# Runtime Integrity

Do not silently merge runtime phases.

Implementation shall never silently perform:

- Planning
- Validation
- Review

Every runtime phase has a single responsibility.

Respect runtime boundaries.

---

# Repository Reuse

Before creating anything new, search the repository for:

- Existing components
- Existing services
- Existing utilities
- Existing directives
- Existing pipes
- Existing validators
- Existing dialogs
- Existing engineering patterns

Reuse before creating.

---

# Deterministic Engineering

The same inputs shall produce the same engineering decisions.

Avoid:

- speculative implementations
- unnecessary assumptions
- unrelated refactoring
- architectural drift
- inconsistent naming

Engineering decisions shall always be evidence-based.

---

# Runtime Failure

If a required runtime artifact is missing:

Stop execution.

Do not continue.

Do not guess.

Do not fabricate missing context.

Report the missing prerequisite.

---

# Framework Ownership

The Runtime owns:

- engineering execution
- runtime lifecycle
- runtime coordination
- runtime validation

Instructions own:

- engineering standards
- implementation guidance
- framework conventions

Skills own:

- capability loading

Hooks own:

- runtime integrity verification

Prompts own:

- runtime initialization

Responsibilities shall never overlap.

---

# Final Runtime Rule

The AI Engineering Framework is the engineering operating system for this repository.

Every engineering decision shall be made through the framework.

Do not substitute generic software engineering workflows.

Do not bypass runtime phases.

Do not redefine runtime execution.

When uncertainty exists, consult the framework rather than improvising.

Execute the AI Engineering Framework exactly as defined.
