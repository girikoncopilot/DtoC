# AI Engineering Framework

## Runtime Layer

### Hooks

# 03 - Before Validation Hook

**Version:** 1.0

**Status:** Stable

---

# Purpose

Verify implementation and testing completed successfully before validation begins.

---

# Runtime Position

Testing Agent
        ↓
Before Validation Hook
        ↓
Validator

---

# Required Artifacts

✓ RepositoryAnalysis

✓ BusinessRequirements

✓ FeatureSpecification

✓ ContextResolution

✓ ImplementationPlan

✓ ImplementationSummary

✓ TestSummary

---

# Validation Rules

Verify:

- Implementation completed.
- Tests completed.
- Runtime order respected.

---

# Failure Handling

If any artifact is missing:

Stop runtime.

Do not execute Validator.

---

# Success Criteria

Validation begins only after implementation and testing have completed.

---

# Guiding Principle

Validation requires complete implementation and testing evidence.