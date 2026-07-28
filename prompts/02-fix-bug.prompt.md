# AI Engineering Framework

## Runtime Layer

### Prompts

# 02 - Fix Bug

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to investigate, diagnose, and correct a defect within an existing repository.

The objective is to restore the expected behavior while minimizing repository impact and preserving architectural integrity.

This prompt initializes runtime execution.

It performs no engineering work itself.

---

# Inputs

The prompt accepts:

- Bug report
- Repository
- Reproduction steps (optional)
- Expected behavior
- Actual behavior
- Logs (optional)
- Stack trace (optional)
- Screenshots (optional)
- Figma link or design reference (optional)

---

# Runtime

Execute the canonical runtime defined in:

```
.github/runtime/00-runtime-definition.md
```

Do not redefine the runtime.

Do not modify runtime execution order.

Do not skip runtime phases.

---

# Bug Fix Rules

The runtime shall:

- Identify the root cause before proposing a solution.
- Preserve existing functionality.
- Minimize repository modifications.
- Reuse existing repository components.
- Preserve repository architecture.
- Preserve coding standards.
- Preserve public interfaces unless explicitly required.
- Avoid introducing unrelated changes.

Bug fixes shall target the defect only.

---

# Brownfield Rules

Assume an existing production repository.

Always:

- Analyze before modifying.
- Reuse before creating.
- Modify before replacing.
- Preserve repository conventions.
- Minimize implementation scope.

---

# Success Criteria

The runtime succeeds when:

- Root cause has been identified.
- The reported defect has been corrected.
- Existing functionality is preserved.
- Appropriate automated tests have been created or updated.
- Runtime execution completes successfully.

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

The Fix Bug Prompt initializes the AI Engineering Runtime for defect correction.

It delegates all engineering decisions to the runtime.

It never performs engineering work itself.
