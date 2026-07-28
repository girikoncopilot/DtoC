## 02 - Design Intelligence Engine
**Version:** 1.0
**Status:** Stable
**Classification:** Core Framework Standard
 
---
 
# 1. Purpose
 
The Design Intelligence Engine defines how the AI interprets Figma files, screenshots, wireframes, and mockups as engineering inputs.
 
Its responsibility is to transform visual artifacts into traceable implementation requirements without inventing undocumented behavior.
 
Design intelligence complements business intelligence.
 
It does not replace Jira when Jira is available.
 
---
 
# 2. Objectives
 
The Design Intelligence Engine shall ensure that:
 
- Every relevant visual requirement is identified.
- Every observable interaction state is documented.
- Every design ambiguity is captured.
- Every design-derived requirement is traceable.
- Design evidence is separated from implementation assumptions.
 
---
 
# 3. Inputs
 
Possible inputs include:
 
- Figma links
- Figma frames
- Figma annotations
- Screenshot attachments
- Custom screenshots
- Wireframes
- Mockups
- Redlines
- Design documents
- Jira image attachments

If multiple design artifacts conflict, the conflict shall be documented explicitly.

Design artifacts are optional unless the task depends on them or they are explicitly referenced as required evidence.
 
---
 
# 4. Retrieval Contract
 
If a design artifact is provided, the AI shall inspect all relevant visible information before planning begins.

If the artifact is a Figma link or a Figma reference discovered through Jira, the AI shall use the Figma MCP or equivalent connected retrieval mechanism when available.

For Figma-driven UI work, the required MCP flow is:

1. Run `get_design_context` first for the exact node or nodes being implemented.
2. If the response is too large, incomplete, or truncated, run `get_metadata` and then re-run `get_design_context` only for the required node set.
3. Run `get_screenshot` for the exact node variant being implemented.
4. Only after both `get_design_context` and `get_screenshot` are available may assets be downloaded or implementation begin.
5. Translate the MCP output into repository conventions, components, tokens, and framework patterns.
6. Validate the final implementation against the Figma screenshot for 1:1 visual and behavioral fidelity before completion.

If the Figma link originated from Jira and is relevant to the task, the AI shall preserve auditable retrieval evidence showing:

- Jira source location of the link
- Figma MCP retrieval attempt
- Retrieved frame, node, or preview result when successful
- Failure reason when unsuccessful

If the artifact is an image attached directly to Jira, the AI shall retrieve the image itself or a rendered preview through the Jira MCP or equivalent connected Jira integration when available.

The AI shall not treat an unresolved Figma link as sufficient design analysis.

The AI shall not treat a retrieved Figma link title, pasted summary, or partial MCP response as sufficient when `get_design_context` and `get_screenshot` were required but not completed.

The AI shall not treat Jira attachment metadata alone as sufficient image analysis when the visual content affects implementation.

The AI shall not skip Jira MCP attachment retrieval merely because the Jira text and attachment filename are available.

When a connector can provide rendered previews, image references, frame metadata, or node metadata, those retrieval capabilities shall be used before implementation begins.
 
This includes:
 
- Layout structure
- Component hierarchy
- Titles and labels
- Field ordering
- Buttons and actions
- Visible validation
- Empty states
- Loading states
- Error states
- Responsive clues
- Annotation callouts
- Frame identifiers
- Node identifiers when relevant
- Image or preview references needed to match the design faithfully
- Jira attachment image content when relevant
- Cropping or scaling clues visible in the attachment

When the design source originates from Jira, the AI shall preserve traceability between:

- Jira artifact or field
- Retrieved Figma reference
- Resolved frame or node
- Resulting implementation requirement

When the source is a Jira image attachment, traceability shall preserve:

- Jira attachment reference
- Retrieved image or preview
- Observed visual requirement
- Resulting implementation requirement
 
If the design artifact is partial, blurred, cropped, stale, or contradictory, the AI shall report the limitation.
 
The AI shall never fabricate hidden design states.

If no design artifact is provided and no design dependency is stated, the workflow shall not fail solely due to the absence of design inputs.

If a relevant Figma artifact exists for UI work and the required MCP flow was not executed, design analysis is incomplete.
 
---
 
# 5. Reading Strategy
 
Design artifacts shall be analyzed in four passes.
 
## Pass 1 — Screen Understanding
 
Determine:
 
- What screen or flow is being shown?
- What user goal does the screen support?
- What primary actions are visible?
 
## Pass 2 — Interaction Understanding
 
Identify:
 
- Inputs
- Actions
- Visual states
- Validation behavior
- Navigation cues
- Conditional visibility
 
## Pass 3 — Structural Understanding
 
Determine:
 
- Reusable UI patterns
- Likely component boundaries
- Data presentation structure
- Responsive expectations
- Accessibility implications visible from the design
- Relative sizing relationships between adjacent controls
- Spacing relationships between grouped controls
- Whether controls are compact grouped elements or full-width stretched elements
 
## Pass 4 — Verification
 
Review the design again and confirm:
 
- No visible requirement was overlooked
- No visual state was ignored
- No assumption replaced missing evidence
- Observed sizing, spacing, and grouping relationships were preserved in the implementation plan
 
---
 
# 6. Requirement Normalization
 
Every design-derived requirement shall be converted into a measurable requirement.
 
Examples:
 
REQ-DES-001
 
Display the upload dropzone above the attachment list.
 
REQ-DES-002
 
Show helper text beneath the description field.
 
REQ-DES-003
 
Open image preview inside the shared dialog pattern.
 
Requirements shall describe expected behavior, not raw implementation details.
 
---
 
# 7. Ambiguity Handling
 
Common design ambiguities include:
 
- Hidden hover states
- Missing mobile version
- Cropped screenshots
- Conflicting screenshots
- Missing error state
- Missing loading state
- Missing empty state
- Unclear spacing priority
- Unclear interaction target
 
Every ambiguity shall include:
 
- Description
- Potential impact
- Recommended clarification
 
If the ambiguity materially affects implementation correctness, implementation shall not proceed until clarified.
 
---
 
# 8. Traceability
 
Every design-derived requirement shall reference its source.
 
Accepted source labels include:
 
- Figma Frame
- Figma Annotation
- Screenshot
- Wireframe
- Mockup
 
Business requirements and design requirements shall remain traceable independently when both exist.
 
---
 
# 9. Exit Criteria
 
The Design Intelligence Engine is complete only when:
 
✓ Relevant visual requirements have been extracted.
 
✓ Observable states have been documented.
 
✓ Ambiguities have been recorded.
 
✓ Traceability to design sources exists.
 
✓ No critical design dependency has been ignored.
 
---
 
# 10. Guiding Principle
 
Design artifacts are engineering evidence.
 
They shall be interpreted rigorously, traced explicitly, and never replaced with guesswork.
