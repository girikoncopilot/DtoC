# AI Engineering Framework

## Runtime Layer

### Prompts

# 01 - Implement Jira Prompt

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Implement a Jira feature request by executing the complete AI Engineering Runtime.

---

# Required Input

Provide:

- Jira Ticket
- Repository
- Figma link (optional)
- Screenshots or mockups (optional)
- Additional supporting documentation (optional)

The Jira ticket shall be treated as the primary business requirement.

When Figma, screenshots, or mockups are provided, they shall be treated as authoritative visual evidence and analyzed before implementation begins.

If the Jira or supporting inputs contain Figma references, linked image sources, or uploaded Jira image attachments, the runtime shall retrieve those references or images through the relevant MCP or connected tool before implementation begins.

Uploaded Jira image attachments shall be fetched through the Jira MCP or equivalent connected Jira integration rather than being treated as metadata only.

When relevant Jira visual attachments exist, the runtime shall:

- retrieve attachment metadata without claiming inspection from metadata alone
- invoke visual evidence processing when applicable
- pass resulting DesignRequirements into planning when produced
- pass resulting visual requirements into validation when produced

For UI Jira work, if a relevant Figma link is discovered in Jira, a Figma MCP retrieval attempt is mandatory before Phase 2 may complete.

Jira discovery of relevant Figma links shall include acceptance criteria, acceptance-criteria source fields, relevant custom fields, and rich-text/ADF link content.

For Figma-driven UI work, the required retrieval sequence is:

- `get_design_context`
- `get_metadata` when needed
- `get_screenshot`

Implementation shall not begin until the required Figma MCP retrieval sequence is complete.

---

# Runtime Execution

Execute the runtime in the following order.

## Phase 1

Repository Analyst

↓

Analyze the repository architecture.

Identify:

- Existing architecture
- Existing reusable components
- Existing services
- Existing patterns
- Existing conventions

Produce:

RepositoryAnalysis

---

## Phase 2

Feature Detector

↓

Analyze the Jira ticket.

Identify:

- Business requirements
- Acceptance criteria
- Required capabilities
- Feature scope

Produce:

FeatureSpecification

---

## Phase 3

Context Resolver

↓

Using the Feature Specification:

Determine:

- Required Skills
- Required Angular Instructions
- Required Engineering Patterns
- Required Repository Context

Produce:

ContextResolution

---

## Phase 4

Planner

↓

Using:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution

Produce:

ImplementationPlan

---

## Phase 5

Implementer

↓

Using:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan

Implement the feature.

Produce:

ImplementationSummary

---

## Phase 6

Validator

↓

Using:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary

Produce:

ValidationReport

---

## Phase 7

Reviewer

↓

Using:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- ValidationReport

Produce:

ReviewDecision

---

## Phase 8

Launch Agent

↓

Using:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- ValidationReport
- ReviewDecision

Compile the repository, run the application, and expose it through `ngrok` when supported and required by the task.

Produce:

LaunchSummary

---

# Runtime Rules

Execute every phase sequentially.

Each phase shall consume only the artifacts produced by previous phases.

Do not skip phases.

Do not merge responsibilities between phases.

Before implementation begins, the planned file changes shall be shown for explicit human accept/reject review.

When the task expects working application output, the runtime shall automatically compile the repository, run the application, and expose it through `ngrok` when supported after review completes.

---

# Expected Output

The runtime shall produce:

- RepositoryAnalysis
- FeatureSpecification
- ContextResolution
- ImplementationPlan
- ImplementationSummary
- ValidationReport
- ReviewDecision
- LaunchSummary when automatic compile/run is enabled

---

# Success Criteria

The Jira implementation is successful when:

- All runtime phases complete successfully.
- All acceptance criteria are satisfied.
- Repository architecture is preserved.
- Existing implementations are reused.
- Validation passes.
- Review is approved.
- Launch succeeds when automatic compile/run is enabled.

---

# Non-Negotiable Rules

The runtime shall never:

- Skip repository analysis.

- Skip feature detection.

- Skip context resolution.

- Skip planning.

- Skip validation.

- Skip engineering review.

- Modify the runtime sequence.

---

# Guiding Principle

Implement every Jira feature through the complete AI Engineering Runtime.

Every engineering decision shall be evidence-based, deterministic, and traceable through the runtime artifacts produced during execution.
