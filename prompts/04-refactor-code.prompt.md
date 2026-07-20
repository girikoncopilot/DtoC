# AI Engineering Framework

## Runtime Layer

### Prompts

# 04 - Refactor Code

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to refactor existing repository code while preserving functional behavior.

Refactoring improves code quality, maintainability, readability, performance, or architecture without changing externally observable behavior.

This prompt initializes runtime execution.

It performs no engineering work itself.

---

# Inputs

The prompt accepts:

- Refactoring objective
- Target files or modules (optional)
- Repository
- Screenshots illustrating current UI or desired cleanup (optional)
- Figma link or design reference when refactoring UI structure (optional)

Examples:

- Improve readability
- Remove code duplication
- Simplify complex logic
- Improve performance
- Modernize implementation
- Improve maintainability

---

# Runtime

Execute the canonical runtime defined in:

.github/runtime/00-runtime-definition.md

Do not redefine the runtime.

Do not alter runtime execution order.

---

# Refactoring Rules

Refactoring shall:

- Preserve existing functionality.
- Preserve business behavior.
- Preserve public APIs unless explicitly requested.
- Preserve repository architecture.
- Preserve repository conventions.
- Preserve coding standards.

Do not introduce new features.

Do not fix unrelated defects unless explicitly requested.

Do not perform speculative refactoring.

---

# Brownfield Rules

Assume an existing production repository.

Always:

- Analyze before modifying.
- Reuse before creating.
- Preserve architectural consistency.
- Minimize repository changes.
- Follow existing engineering patterns.

---

# Success Criteria

The runtime succeeds when:

- Functional behavior is preserved.
- Code quality has improved.
- Repository conventions remain intact.
- Runtime completes successfully.

---

# Expected Runtime Artifacts

Execution shall produce the canonical runtime artifacts:

- RepositoryAnalysis
- BusinessRequirements
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- TestSummary
- ValidationReport
- ReviewDecision

---

# Guiding Principle

The Refactor Code Prompt initializes the AI Engineering Runtime for repository refactoring.

It does not define engineering behavior.

It delegates all engineering decisions to the runtime.
