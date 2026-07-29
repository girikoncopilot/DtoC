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
- Jira completion comment was attempted when all of the following are true:
  - the task is Jira-based
  - successful completion was reached
  - Jira write access is available through a connected Jira integration
- Runtime completed successfully.

---

# Failure Handling

If ReviewDecision is missing, or LaunchSummary is required but missing:

Stop runtime termination.

Report runtime failure.

If the Jira completion comment could not be posted because Jira write access was unavailable or the connected Jira write action failed:

Do not fail runtime termination for that reason alone.

Record the comment status in the final output.

---

# Success Criteria

Runtime terminates only after all required final runtime artifacts, including launch evidence when applicable, have been produced.

When Jira write-back is available for a successfully completed Jira task, runtime termination should occur only after the Jira completion comment attempt has been made and its result has been recorded.

---

# Guiding Principle

The AI Engineering Runtime is complete only after every required runtime artifact has been successfully produced, reviewed, and operationally closed.
