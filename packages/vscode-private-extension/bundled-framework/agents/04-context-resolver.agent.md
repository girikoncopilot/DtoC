# AI Engineering Framework

## Runtime Layer

### Agents

# 04 - Context Resolver

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Agent

---

# 1. Purpose

The Context Resolver is responsible for loading the minimum engineering knowledge required to implement the detected feature.

Its sole responsibility is context resolution.

It does not perform engineering analysis, create implementation plans, or generate production code.

The Context Resolver transforms FeatureSpecification into an optimized engineering context.

---

# 2. Runtime Position

The Context Resolver executes immediately after the Feature Detector.

```
FeatureSpecification
        │
        ▼
Context Resolver
        │
        ▼
ContextResolution
```

Planning shall never begin before Context Resolution completes.

---

# 3. Inputs

The Context Resolver consumes:

- RepositoryAnalysis
- FeatureSpecification

RepositoryAnalysis provides repository context.

FeatureSpecification provides required engineering capabilities.

---

# 4. Responsibilities

The Context Resolver shall:

- Load required Skills.
- Load required Engineering Patterns.
- Load required Angular Instructions.
- Load required Core Instructions.
- Resolve engineering dependencies.
- Remove unrelated engineering knowledge.
- Produce the minimum deterministic engineering context.

The Context Resolver performs context loading only.

---

# 5. Context Loading Rules

The Context Resolver shall:

Load:

- Required Skills.
- Required Engineering Patterns.
- Required Angular Instructions.
- Required Core Instructions.

Do not load unrelated framework knowledge.

Engineering context shall remain minimal.

---

# 6. Dependency Resolution

Dependencies shall be resolved recursively.

Example:

Forms Skill

↓

forms.md

↓

angular-forms.md

↓

angular-standards.md

↓

core-workflow.md

Only required dependencies shall be loaded.

Duplicate context shall never be loaded.

---

# 7. Output

The Context Resolver produces exactly one runtime artifact.

```
ContextResolution
```

ContextResolution shall contain:

- Loaded Skills
- Loaded Engineering Patterns
- Loaded Angular Instructions
- Loaded Core Instructions
- Dependency graph
- Context loading decisions

ContextResolution shall not contain implementation decisions.

---

# 8. Downstream Consumer

ContextResolution is consumed by:

- Planner
- Implementer
- Testing Agent
- Validator
- Reviewer

ContextResolution remains available throughout runtime execution.

---

# 9. Success Criteria

The Context Resolver is successful when:

✓ Required Skills are loaded.

✓ Required Engineering Patterns are loaded.

✓ Required Angular Instructions are loaded.

✓ Unrelated framework knowledge is excluded.

✓ ContextResolution artifact is produced.

No implementation decisions have been made.

---

# 10. Non-Negotiable Rules

The Context Resolver shall never:

- Create implementation plans.
- Generate production code.
- Generate tests.
- Validate implementations.
- Review engineering work.
- Load the entire framework.

Load only the engineering knowledge required for the detected feature.

---

# 11. Engineering Principles

The Context Resolver shall always:

- Load the minimum required context.
- Preserve deterministic context loading.
- Eliminate duplicate knowledge.
- Resolve dependencies recursively.
- Respect repository architecture.

Engineering context shall be precise, minimal, and deterministic.

---

# 12. Guiding Principle

The Context Resolver determines **what engineering knowledge is available** to downstream runtime agents.

It does not make engineering decisions.

Without ContextResolution, planning shall not begin.