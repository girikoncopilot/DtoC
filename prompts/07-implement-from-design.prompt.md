# AI Engineering Framework

## Runtime Layer

### Prompts

# 07 - Implement From Design

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to implement a feature from Figma, screenshots, wireframes, or mockups.

This prompt is used when design artifacts are the primary implementation driver, with or without a Jira ticket.

---

# Required Input

Provide:

- Repository
- Figma link, screenshots, wireframes, or mockups
- Business requirements or Jira Ticket (optional but recommended)
- Additional supporting documentation (optional)

When Jira is not provided, design artifacts and user instructions become the primary requirement sources.

When Jira is provided, Jira remains the primary business source and design artifacts remain the primary visual source.

---

# Runtime Execution

Execute the full runtime.

During Requirement Intelligence:

- Analyze business inputs
- Analyze design inputs
- Normalize design-derived requirements
- Document ambiguities before planning

Do not begin planning until both business and design analysis are complete.

---

# Runtime Rules

The runtime shall:

- Treat Figma and screenshots as engineering evidence
- Retrieve Figma references through the Figma MCP or equivalent connected tool when available
- Extract visible states and interaction expectations
- Document missing design states explicitly
- Stop when critical design ambiguity blocks safe implementation
- Preserve repository architecture and patterns

Do not invent undocumented visual behavior.

---

# Expected Output

The runtime shall produce the canonical runtime artifacts:

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

# Success Criteria

The implementation is successful when:

- Business requirements are satisfied
- Design intent is preserved
- Acceptance criteria are satisfied when provided
- Repository consistency is preserved
- Validation passes
- Review is approved

---

# Guiding Principle

Design artifacts are not inspiration.

They are requirement inputs that shall be analyzed, normalized, traced, and implemented with the same rigor as any other engineering source.
