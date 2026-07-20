# AI Engineering Framework

## Runtime Layer

### Prompts

# 03 - Enhance Feature

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to extend or improve an existing feature within the repository.

Feature enhancement builds upon existing functionality while preserving current behavior, repository architecture, and engineering standards.

This prompt initializes runtime execution.

It performs no engineering work itself.

---

# Inputs

The prompt accepts:

- Feature enhancement request
- Repository
- Existing feature description (optional)
- Business requirements
- Acceptance criteria
- Figma link or design reference (optional)
- Screenshots or mockups (optional)
- Supporting documentation (optional)

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

# Enhancement Rules

The runtime shall:

- Understand the existing feature before modifying it.
- Extend existing functionality instead of replacing it.
- Preserve backward compatibility unless explicitly requested.
- Reuse existing repository components.
- Preserve repository architecture.
- Preserve engineering standards.
- Minimize repository modifications.
- Avoid unnecessary refactoring.

Feature enhancements shall integrate naturally with the existing implementation.

---

# Brownfield Rules

Assume an existing production repository.

Always:

- Analyze before modifying.
- Reuse before creating.
- Extend before replacing.
- Preserve repository conventions.
- Minimize implementation scope.

---

# Success Criteria

The runtime succeeds when:

- Existing functionality remains intact.
- Requested enhancement has been implemented.
- Repository consistency has been preserved.
- Appropriate automated tests have been created or updated.
- Runtime execution completes successfully.

---

# Expected Runtime Artifacts

Execution shall produce the canonical runtime artifacts defined in:

```
.github/runtime/00-runtime-definition.md
```

---

# Guiding Principle

The Enhance Feature Prompt initializes the AI Engineering Runtime for extending existing functionality.

It delegates all engineering decisions to the runtime.

It never performs engineering work itself.
