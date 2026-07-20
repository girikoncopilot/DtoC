# 02 - Context Loading Engine

**Version:** 1.1

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI selects, loads, and prioritizes engineering knowledge before implementation begins.

The objective of Context Loading is to provide the AI with only the information required for the current Jira story.

Loading unnecessary engineering context increases reasoning complexity, introduces irrelevant implementation guidance, and may lead to inconsistent solutions.

Context Loading ensures that only relevant knowledge participates in the engineering process.

---

# 2. Engineering Philosophy

Not every engineering document is relevant to every implementation.

The AI shall activate only the documentation required to successfully implement the Jira.

Engineering knowledge shall be loaded progressively rather than simultaneously.

Every loaded document must have a justified purpose.

Context Loading shall use all engineering context that is available within the current execution environment.

---

# 3. Loading Lifecycle

Context Loading begins after Feature Detection.

Feature Detection

↓

Determine Required Context

↓

Load Core Standards

↓

Load Technology Standards

↓

Load Engineering Patterns

↓

Load Repository Context

↓

Inspect Available External Context

↓

Pass Context to Planning Engine

Planning shall never begin before Context Loading is complete.

---

# 4. Core Context

The following documents shall always be loaded.

- Core Role
- Core Workflow
- Jira Intelligence
- Repository Intelligence
- Planning Engine
- Implementation Engine
- Testing Engine
- Validation Engine
- Output Engine

Load Design Intelligence whenever Figma, screenshots, wireframes, mockups, or other visual requirement artifacts are provided.

Core standards provide the foundation for every engineering task.

---

# 5. Technology Context

Load only the technology standards relevant to the repository.

Example:

Angular Repository

↓

Load Angular Standards

↓

Load Angular UI Guidelines

↓

Load Angular Performance

↓

Load Angular Testing

Do not load standards for technologies that are not present in the repository.

---

# 6. Engineering Pattern Context

Engineering Pattern documents shall be loaded only when the corresponding capability has been detected.

Examples

Capability

Table

↓

Load

Table Pattern

Capability

Search

↓

Load

Search Pattern

Capability

Upload

↓

Load

Upload Pattern

Capability

Authentication

↓

Load

Authentication Pattern

Patterns that are unrelated to the Jira shall remain inactive.

---

# 7. Repository Context

After framework documents have been selected, analyze the repository.

Identify:

- Existing components
- Existing services
- Existing modules
- Existing styling
- Existing utilities
- Existing APIs
- Existing tests
- Existing documentation

Repository knowledge supplements framework knowledge.

Repository evidence always has higher implementation priority than assumptions.

---

# 8. External Engineering Context

Engineering tasks may include additional context outside the repository.

Examples include:

- Jira attachments
- Uploaded Jira images
- UI screenshots
- Design mockups
- Figma references resolved through connected tools or MCP integrations
- Linked documentation
- PDFs
- Architecture diagrams
- API specifications

When these artifacts are available within the current execution environment, they shall be analyzed together with the Jira description.

When Jira attachments or uploaded Jira images are present, Context Loading shall ensure the Jira MCP or equivalent connected Jira integration is used to retrieve the attachment content before planning begins.

When a relevant Figma reference is available, Context Loading shall ensure the required Figma MCP flow is executed before planning begins:

- `get_design_context`
- `get_metadata` when needed
- `get_screenshot`

Planning shall not begin for Figma-driven UI work until the required Figma MCP retrieval sequence has completed or failed explicitly.

When implementing UI features, visual artifacts should be used to understand:

- Layout
- Component hierarchy
- Field ordering
- Alignment
- Spacing
- Typography
- Icons
- Visual grouping
- Interaction expectations

If external artifacts are unavailable or inaccessible, continue using the available Jira content, repository evidence, and framework standards unless the missing artifact is required for safe implementation.

Do not assume information that cannot be observed.

---

# 9. Context Prioritization

When multiple sources provide guidance, apply the following priority.

1. Jira Acceptance Criteria

2. Available External Engineering Context

3. Existing Repository

4. Core Standards

5. Technology Standards

6. Engineering Patterns

7. Generated Reasoning

Lower-priority context shall never override higher-priority context.

If visual artifacts are available and conflict with Jira Acceptance Criteria, the Acceptance Criteria take precedence.

Report ambiguities rather than making assumptions.

---

# 10. Progressive Context Loading

Context shall be loaded in stages.

Stage 1

Business Context

and Design Context when available

↓

Stage 2

Core Standards

↓

Stage 3

Technology Standards

↓

Stage 4

Engineering Patterns

↓

Stage 5

Repository Analysis

↓

Stage 6

External Context Review

↓

Stage 7

Planning

The AI shall avoid loading unnecessary information before it is needed.

---

# 11. Context Validation

Before Planning begins verify:

✓ Required Core documents loaded.

✓ Correct Technology loaded.

✓ Required Engineering Patterns loaded.

✓ Available external context reviewed when relevant.

✓ Repository analyzed.

✓ Unrelated documents excluded.

Planning shall not proceed with incomplete context.

---

# 11. Context Optimization

The AI shall minimize active engineering context.

Examples:

Adding a table column

Load:

✓ Core

✓ Angular

✓ Table Pattern

Do Not Load:

✗ Upload

✗ Dashboard

✗ Reports

✗ Authentication

Only essential engineering knowledge shall participate.

---

# 12. Missing Context

If required engineering knowledge cannot be located:

The AI shall:

- Continue using available framework standards.
- Continue using repository evidence.
- Identify assumptions.
- Highlight uncertainty.
- Request clarification only when implementation cannot proceed safely.

Missing context shall never be silently ignored.

---

# 13. Context Isolation

Each Engineering Pattern shall remain isolated.

Example:

Loading Upload Pattern shall not automatically activate Report Pattern.

Loading Table Pattern shall not activate Dashboard Pattern.

Patterns participate only when required.

---

# 14. Engineering Rules

The AI shall:

- Load only required context.
- Prioritize repository knowledge.
- Exclude unrelated standards.
- Prevent unnecessary reasoning.
- Keep implementation focused.

Context Loading shall remain deterministic.

---

# 15. Non-Negotiable Rules

The AI shall never:

- Load every Engineering Pattern by default.

- Ignore repository architecture.

- Skip Core Standards.

- Mix unrelated technology standards.

- Allow unnecessary context to influence implementation.

- Begin planning before Context Loading completes.

---

# 16. Success Criteria

Context Loading is successful when:

✓ Required engineering knowledge has been loaded.

✓ Unrelated documentation remains inactive.

✓ Repository context has been analyzed.

✓ Planning receives only relevant engineering information.

✓ Engineering reasoning remains focused and deterministic.

---

# 17. Guiding Principle

Effective engineering begins with effective context.

The AI shall activate only the engineering knowledge necessary for the current Jira story, ensuring that implementation remains focused, efficient, repository-aligned, and free from unnecessary architectural influence.
