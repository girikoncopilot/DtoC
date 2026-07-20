# AI Engineering Framework

## Runtime Layer

### Hooks

# 04 - Before Review Hook

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Checkpoint

---

# Purpose

Validate that all prerequisite runtime artifacts required for review exist before the Reviewer Agent is executed.

This Hook prevents engineering review from starting before validation has completed.

---

# Runtime Position

This Hook executes immediately before:

Reviewer Agent

---

# Required Artifacts

The following artifacts shall exist:

✓ RepositoryAnalysis

✓ FeatureSpecification

✓ ContextResolution

✓ ImplementationPlan

✓ ImplementationSummary

✓ ValidationReport

---

# Validation Procedure

Verify the existence of:

RepositoryAnalysis

↓

FeatureSpecification

↓

ContextResolution

↓

ImplementationPlan

↓

ImplementationSummary

↓

ValidationReport

If all required artifacts exist:

Allow execution of the Reviewer Agent.

Otherwise:

Stop runtime execution.

---

# Failure Conditions

Review shall not begin if any of the following are missing:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- ValidationReport

---

# Failure Response

When validation fails:

1. Stop runtime execution.

2. Report all missing artifacts.

3. Do not execute the Reviewer Agent.

4. Preserve all previously generated artifacts.

---

# Success Response

When validation succeeds:

1. Approve runtime transition.

2. Allow the Reviewer Agent to execute.

No additional runtime actions shall be performed by this Hook.

---

# Runtime Rules

This Hook shall:

- Validate only artifact existence.
- Execute automatically.
- Produce deterministic results.
- Prevent invalid runtime transitions.

This Hook shall not:

- Generate missing artifacts.
- Modify existing artifacts.
- Execute runtime agents.
- Evaluate engineering quality.

---

# Inputs

Available runtime artifacts.

---

# Outputs

Runtime Decision:

- PASS

or

- FAIL

When FAIL, include the list of missing prerequisite artifacts.

---

# Success Criteria

The Hook is successful when:

✓ Review never starts without RepositoryAnalysis.

✓ Review never starts without FeatureSpecification.

✓ Review never starts without ContextResolution.

✓ Review never starts without ImplementationPlan.

✓ Review never starts without ImplementationSummary.

✓ Review never starts without ValidationReport.

✓ Runtime integrity is preserved.

---

# Non-Negotiable Rules

This Hook shall never:

- Skip validation.

- Auto-generate missing artifacts.

- Ignore missing prerequisites.

- Continue runtime after failure.

- Execute the Reviewer Agent.

---

# Guiding Principle

Engineering review shall begin only after implementation has been independently validated.

This Hook guarantees that review decisions are based on a complete engineering record, ensuring consistency, traceability, and confidence in the final outcome.