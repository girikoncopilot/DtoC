# AI Engineering Framework

## Runtime Layer

### Hooks

# 02 - Before Implementation Hook

**Version:** 1.0

**Status:** Stable

---

# Purpose

Verify the Planner completed successfully before implementation begins.

This hook also verifies that the planned file changes were presented for human review and explicitly accepted before code modification begins.

---

# Runtime Position

Planner
        ↓
Before Implementation Hook
        ↓
Implementer

---

# Required Artifacts

✓ RepositoryAnalysis

✓ BusinessRequirements

✓ FeatureSpecification

✓ ContextResolution

✓ ImplementationPlan

---

# Validation Rules

Verify:

- Planning completed.
- ImplementationPlan exists.
- Planned file changes were shown to the user.
- User approval for the planned change set was recorded.
- Runtime order respected.

---

# Failure Handling

If validation fails:

Stop runtime.

Do not execute Implementer.

---

# Success Criteria

Implementation begins only with a valid ImplementationPlan and explicit approval of the planned file changes.

---

# Guiding Principle

Implementation never starts without an approved engineering plan and an accepted planned change set.
