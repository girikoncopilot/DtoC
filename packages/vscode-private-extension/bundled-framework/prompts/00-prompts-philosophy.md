# AI Engineering Framework

## Runtime Layer

### Prompts

# 00 - Prompt Philosophy

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point Specification

---

# Purpose

This document defines the role and responsibilities of the Prompt layer within the AI Engineering Framework.

Prompts are runtime entry points.

They initialize runtime execution.

They do not perform engineering work.

---

# Prompt Philosophy

A Prompt answers one question:

> Which runtime should be executed?

A Prompt does not answer:

- How to implement
- How to validate
- How to review
- Which engineering standards to follow
- Which Skills to load

Those responsibilities belong to the runtime.

---

# Layer Responsibility

The Prompt layer is responsible for:

- Accepting user intent.
- Initializing runtime execution.
- Providing runtime inputs.
- Selecting the appropriate execution path.

The Prompt layer is not responsible for engineering decisions.

---

# Runtime Ownership

Prompts shall never redefine runtime execution.

Runtime execution is defined exclusively by:

```
.github/runtime/00-runtime-definition.md
```

If a Prompt conflicts with the Runtime Definition:

The Runtime Definition always takes precedence.

---

# Prompt Responsibilities

Every Prompt shall:

- Accept task inputs.
- Initialize runtime execution.
- Reference the canonical runtime.
- Preserve runtime integrity.
- Produce no engineering artifacts.

---

# Prompt Restrictions

A Prompt shall never:

- Generate production code.
- Create implementation plans.
- Load Skills.
- Load Engineering Patterns.
- Load Instructions.
- Perform validation.
- Perform review.
- Modify repository files.

Those responsibilities belong to runtime agents.

---

# Prompt Inputs

A Prompt may accept:

- Repository
- Jira
- Bug Report
- Feature Request
- Refactoring Objective
- Pull Request
- Repository Path
- User Instructions

The Prompt shall not interpret these inputs.

It forwards them to the runtime.

---

# Runtime Invocation

Every Prompt shall invoke the canonical runtime defined in:

```
.github/runtime/00-runtime-definition.md
```

The Prompt shall never redefine:

- runtime phases
- runtime order
- runtime artifacts
- runtime hooks

---

# Prompt Types

The framework provides the following runtime entry points:

- Implement Jira
- Fix Bug
- Enhance Feature
- Refactor Code
- Review Pull Request
- Analyze Repository
- Requirement To Code

Every Prompt is an independent runtime entry point.

---

# Prompt Structure

Every Prompt shall contain:

1. Purpose
2. Inputs
3. Runtime Reference
4. Prompt-Specific Rules
5. Success Criteria
6. Guiding Principle

This structure is mandatory.

---

# Brownfield Principle

Unless explicitly stated otherwise:

Assume the repository is an existing production system.

Prompts shall never assume greenfield development.

---

# Engineering Principle

Prompts initialize engineering execution.

They do not participate in engineering execution.

Engineering begins with the Repository Analyst.

---

# Success Criteria

A Prompt is successful when:

- Runtime initialization succeeds.
- Correct runtime inputs are provided.
- Canonical runtime execution begins.

The Prompt performs no further work.

---

# Guiding Principle

Prompts are entry points into the AI Engineering Runtime.

They are not engineering agents.

They are not engineering workflows.

They are not engineering standards.

Their sole responsibility is to initialize the correct runtime.
