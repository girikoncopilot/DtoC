# AI Engineering Framework

## Runtime Layer

### Hooks

# 05 - Before Completion Hook

**Version:** 1.0

**Status:** Stable

---

# Purpose

Verify the runtime completed successfully before terminating execution.

---

# Runtime Position

Launch Agent
        ↓
Before Completion Hook
        ↓
Runtime Complete

---

# Required Artifacts

✓ RepositoryAnalysis

✓ BusinessRequirements

✓ FeatureSpecification

✓ ContextResolution

✓ ImplementationPlan

✓ ImplementationSummary

✓ TestSummary

✓ ValidationReport

✓ ReviewDecision

✓ LaunchSummary when automatic compile/run is required

---

# Validation Rules

Verify:

- Engineering review completed.
- ReviewDecision exists.
- LaunchSummary exists when automatic compile/run is required.
- Runtime completed successfully.

---

# Failure Handling

If ReviewDecision is missing, or LaunchSummary is required but missing:

Stop runtime termination.

Report runtime failure.

---

# Success Criteria

Runtime terminates only after all required final runtime artifacts, including launch evidence when applicable, have been produced.

---

# Guiding Principle

The AI Engineering Runtime is complete only after every required runtime artifact has been successfully produced, reviewed, and operationally closed.
