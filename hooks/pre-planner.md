# AI Engineering Framework

## Runtime Layer

### Hooks

# 01 - Before Planning Hook

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Hook

---

# Purpose

The Before Planning Hook verifies that all prerequisite runtime artifacts required by the Planner exist.

The hook protects runtime integrity.

It performs no engineering work.

---

# Runtime Position

Repository Analyst
        ↓
Jira Analyst
        ↓
Feature Detector
        ↓
Context Resolver
        ↓
Before Planning Hook
        ↓
Planner

---

# Required Artifacts

The following runtime artifacts must exist:

✓ RepositoryAnalysis

✓ BusinessRequirements

✓ FeatureSpecification

✓ ContextResolution

---

# Validation Rules

Verify:

- All required artifacts exist.
- Artifacts are complete.
- Runtime order has been respected.
- No artifact has been skipped.

---

# Failure Handling

If any required artifact is missing:

- Stop runtime execution.
- Report missing artifacts.
- Do not invoke the Planner.

---

# Success Criteria

Planning may begin only when all prerequisite artifacts exist.

---

# Guiding Principle

The Before Planning Hook protects runtime integrity by preventing planning from executing with incomplete engineering context.