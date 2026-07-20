# AI Engineering Framework

## Runtime Layer

### Prompts

# 05 - Review Pull Request

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to perform a structured engineering review of an existing Pull Request.

The objective is to evaluate implementation quality, repository consistency, engineering standards, and readiness for approval.

This prompt initializes runtime execution.

It performs no engineering work itself.

---

# Inputs

The prompt accepts:

- Pull Request
- Repository
- Changed files
- Pull Request description
- Related Jira (optional)
- Review comments (optional)

---

# Runtime

Execute the Review Runtime defined by the AI Engineering Framework.

Review execution shall begin after repository analysis.

The runtime shall execute:

Repository Analyst

↓

Reviewer

↓

ReviewDecision

Do not execute implementation activities.

Do not modify repository files.

Do not generate production code.

---

# Review Rules

The runtime shall:

- Understand the repository architecture.
- Analyze all modified files.
- Verify repository conventions.
- Verify engineering standards.
- Verify coding consistency.
- Identify architectural violations.
- Identify maintainability concerns.
- Identify security concerns.
- Identify performance concerns.
- Identify opportunities for repository reuse.

The review shall remain objective and evidence-based.

---

# Brownfield Rules

Assume an existing production repository.

Always:

- Preserve repository architecture.
- Respect existing conventions.
- Review within repository context.
- Avoid subjective recommendations.
- Base every finding on repository evidence.

---

# Success Criteria

The runtime succeeds when:

- All modified files have been reviewed.
- Repository consistency has been evaluated.
- Engineering findings have been documented.
- A ReviewDecision has been produced.

---

# Expected Runtime Artifacts

Execution shall produce the runtime artifacts required for the Review Runtime.

The final runtime artifact shall be:

```
ReviewDecision
```

---

# Guiding Principle

The Review Pull Request Prompt initializes the AI Engineering Runtime for engineering review.

It evaluates completed engineering work.

It never performs implementation activities.