# AI Engineering Framework

## Runtime Layer

### Prompts

# 08 - Requirement To Code

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to turn a Jira ticket, Figma design, screenshot, PRD, or pasted requirement into repository-native implementation work.

This prompt is used when one or more requirement sources define a feature, enhancement, or bug fix.

---

# Inputs

The prompt accepts:

- Repository
- Jira Ticket or pasted requirement
- Figma link (optional)
- Screenshot or mockup (optional)
- PRD or supporting document (optional)

When multiple requirement sources are present, Jira remains the primary business source, approved design evidence remains the primary visual source, and the repository remains the primary implementation source.

---

# Runtime

Execute the canonical full runtime defined by the AI Engineering Framework.

Do not redefine runtime phases, artifacts, or execution order.

---

# Prompt-Specific Rules

The runtime shall:

- Produce a requirement-spec style understanding before implementation begins
- Identify the most similar existing repository feature and mirror its structure where appropriate
- Produce a file-by-file implementation plan with reuse mapping before editing code
- Stop for approval when the planning phase identifies open questions or when the task requires explicit human approval before editing
- Show the planned file changes and request explicit accept/reject input before implementation begins
- Treat approved design evidence as canonical for layout, spacing, alignment, sizing, grouping, and component hierarchy
- Use the required Figma MCP retrieval sequence when relevant
- Treat visible differences from the approved design evidence as defects unless a documented technical limitation prevents exact parity
- Automatically compile and run the repository after review when the task expects executable output, using `ngrok` for preview when supported

If multiple images are provided and the source of truth is unclear, request clarification before implementation begins.

The preferred operating sequence for this prompt is:

1. Load repository context and repository rules first
2. Retrieve the requirement from Jira, Figma, screenshots, PRD, or pasted text
3. Produce a requirement-spec style artifact
4. Identify the closest existing repository feature and create a reuse map
5. Produce a file-by-file implementation plan
6. Show the planned file changes and request explicit accept/reject input
7. Stop for approval when blockers or explicit approval requirements exist
8. Implement the smallest repository-native change set
9. Validate visual fidelity, structure, and behavior before completion
10. Compile, run, and publish a preview through `ngrok` when the workflow expects operational output

For UI replication tasks:

- treat the approved visual reference as canonical
- preserve layout, spacing, alignment, sizing, hierarchy, labels, prefixes, suffixes, helper text, and control grouping
- do not let framework defaults override approved design evidence
- treat visible layout differences as defects

---

# Success Criteria

The runtime succeeds when:

- Business requirements are understood and traced
- Repository reuse is maximized
- The implementation plan is explicit
- Validation passes
- Review is approved

---

# Guiding Principle

Requirement sources define what must be built.

The runtime determines how to build it without violating repository architecture, design evidence, or engineering standards.
