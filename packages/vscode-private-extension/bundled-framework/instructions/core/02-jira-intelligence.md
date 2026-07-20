## 02 - Jira Intelligence Engine
**Version:** 1.0
**Status:** Stable
**Classification:** Core Framework Standard
 
---
 
# 1. Purpose
 
The Jira Intelligence Engine defines how the AI transforms a Jira story into a complete engineering specification.
 
Jira is the primary source of business truth within the AI Engineering Framework.

When Figma designs, screenshots, wireframes, or attached mockups are provided, they shall be analyzed as supporting requirement evidence and as the primary source of visual and interaction intent.
 
The objective of this module is not merely to read a Jira ticket, but to understand the underlying business intent, normalize the requirements, identify constraints, detect ambiguities, establish traceability, and prepare the implementation phase.
 
Implementation must never begin until this module has successfully completed.
 
---
 
# 2. Objectives
 
The Jira Intelligence Engine shall ensure that:
 
- Every business requirement is identified.
- Every acceptance criterion is captured.
- Every business rule is extracted.
- Every dependency is documented.
- Every ambiguity is identified.
- Every implementation requirement is traceable.
- No undocumented assumptions enter implementation.
 
---
 
# 3. Inputs
 
Possible inputs include:
 
Primary Inputs
 
- Jira Story
- Epic
- Parent Story
- Linked Stories
 
Supporting Inputs
 
- Acceptance Criteria
- Technical Notes
- Developer Notes
- Product Owner Comments
- QA Comments
- Attachments
- Screenshots
- Wireframes
- Figma Designs
- External Documents

If multiple sources conflict, document the conflict rather than assuming correctness.

Supporting inputs are not universally mandatory.

If they are not provided and the Jira remains sufficiently clear, analysis shall continue.

If they are provided, referenced, or required to resolve acceptance criteria, they become mandatory evidence for correct analysis.

 
---
 
# 4. Jira Retrieval Contract
 
If a Jira identifier is provided:
 
The AI shall retrieve:
 
- Summary
- Description
- Acceptance Criteria
- Comments
- Attachments
- Linked Issues
- Subtasks
- Technical Notes
- Labels
- Components
- Priority
- Story Points (if relevant)
- Acceptance criteria source fields
- Relevant custom fields that may contain acceptance criteria or technical notes
- External design references contained in the Jira
- Linked Figma URLs or identifiers when present in description, comments, attachments, or linked documentation
- Image references required to interpret the Jira correctly
- Image attachments uploaded directly to Jira when present
- Attachment metadata required to resolve downloadable or previewable image content

Jira retrieval shall use the Jira MCP or equivalent connected Jira integration when available.

Jira retrieval shall inspect Figma links and visual references in:

- Description
- Acceptance Criteria
- Acceptance criteria source fields
- Custom fields
- Comments
- Attachments
- Linked documentation
- Rich text or Atlassian Document Format link nodes
- Smart links, inline cards, or embedded URLs when present
 
The AI shall not begin analysis until retrieval is complete.
 
If retrieval fails:
 
Stop.
 
Explain the reason.
 
Request user intervention.
 
Never continue with partial Jira information.

Attachments shall be retrieved when present.

If an attachment is an image or contains visual requirement evidence, the AI shall retrieve the actual image content or preview representation rather than relying only on filename, mime type, or attachment metadata.

If a Jira image attachment exists, the AI shall call the Jira MCP or equivalent connected Jira tool to fetch the attachment image, preview, or binary-backed visual representation before requirement analysis is considered complete.

If no attachments exist, this shall not be treated as a failure condition by itself.

Attachment classifications shall support:

- direct_image
- conversion_required
- non_visual
- unsupported
- unavailable

If Jira content contains Figma references, image references, linked visual artifacts, or uploaded image attachments, the Jira retrieval step shall surface those references explicitly for downstream design retrieval.

The AI shall not conclude that no relevant Figma link exists until acceptance criteria fields, relevant custom fields, and rich-text/ADF link structures have been inspected.

The AI shall not rely on the Jira text alone when the Jira points to external visual sources that materially affect implementation.

If Jira contains a Figma link relevant to the requested UI or workflow, Jira analysis is not complete until a Figma MCP retrieval attempt has occurred and the outcome is explicitly recorded as one of:

- Retrieved through Figma MCP
- Inaccessible
- Not relevant to the requested change

For UI Jira work, a discovered relevant Figma link shall trigger a mandatory Figma MCP retrieval attempt.

The runtime shall not skip the attempt merely because Jira text, attachments, or repository context appear sufficient.

---

# 4A. Design Input Retrieval Contract

If Figma links, screenshots, wireframes, visual attachments, or Jira image attachments are provided:

The AI shall retrieve or inspect the design artifact using the appropriate connected tool or MCP integration when available.

Jira-hosted image attachments shall be retrieved through the Jira MCP first.

For Figma inputs discovered directly or through Jira, the AI shall call the Figma MCP or equivalent connector to retrieve the design data rather than relying only on pasted text or link titles.

The AI shall retrieve or inspect:

- Frame names
- Relevant screens
- Component states
- Layout relationships
- Visible annotations
- Text content shown in the design
- Visual hierarchy
- Interaction notes if present
- Screenshot context and labels
- Rendered image or preview references when available
- Node or frame identifiers required for traceability
- Image references needed to reproduce the intended UI precisely
- Jira attachment image previews or rendered content
- Attachment captions, filenames, and placement context when relevant

If Jira is the source of the Figma reference, the retrieval flow shall be:

Jira retrieval

↓

Extract Figma or image reference

↓

Figma MCP or visual connector retrieval

↓

Requirement and design analysis

The runtime shall record evidence that the Figma MCP retrieval step actually occurred when the link is relevant.

If the task is a UI Jira and the relevant discovered Figma link was not attempted through Figma MCP, Jira Intelligence shall fail and Phase 2 shall not complete.

If Jira is the source of an uploaded image attachment, the retrieval flow shall be:

Jira retrieval

↓

Extract attachment reference

↓

Jira MCP attachment retrieval

↓

Requirement and design analysis

The AI shall not ignore provided visual evidence.

If no design artifact is provided and none is required by the Jira or user request, implementation may continue using the remaining validated requirement sources.

If a referenced design artifact is unavailable, incomplete, cropped, or contradictory:

Stop if the missing information prevents safe implementation.

Explain:

- What is missing
- Why it matters
- What artifact is required to continue

Never invent visual behavior that was expected to come from the design source.
 
---
 
# 5. Jira Reading Strategy
 
The Jira must be read in four passes.
 
---
 
## Pass 1 — Business Understanding
 
Read without thinking about implementation.
 
Determine:
 
What business problem exists?
 
Who experiences it?
 
Why is this work being requested?
 
What outcome does the business expect?
 
Do not think about Angular.
 
Do not think about code.
 
Only understand the business.
 
---
 
## Pass 2 — Functional Understanding
 
Identify:
 
User interactions
 
Expected behaviors
 
Inputs
 
Outputs
 
Validation
 
Permissions
 
Workflows
 
Edge cases
 
Exceptions
 
---
 
## Pass 3 — Technical Understanding
 
Determine:
 
Affected modules
 
Potential APIs
 
Possible UI areas
 
Data impacts
 
Architecture impacts
 
Potential testing impacts
 
Potential accessibility impacts
 
Potential performance impacts
 
---
 
## Pass 4 — Verification
 
Read the Jira one final time.
 
Confirm that nothing has been overlooked.
 
Many implementation defects originate from skipping this verification pass.

If design inputs are provided, the same four-pass analysis shall be applied to those artifacts:

- Business intent pass
- Functional behavior pass
- Visual and interaction pass
- Verification pass

Design review shall identify screen states, spacing expectations, visible validations, empty states, loading states, error states, and responsive implications whenever those are observable.
 
---
 
# 6. Requirement Normalization
 
Jira stories are frequently written in natural language.
 
Natural language must be transformed into engineering requirements.
 
Each requirement must satisfy three properties:
 
Independent
 
Measurable
 
Traceable
 
Example
 
Poor
 
> User should be able to manage notes.
 
Normalized
 
REQ-001
 
Display Note Type column.
 
REQ-002
 
Allow sorting.
 
REQ-003
 
Allow filtering.
 
REQ-004
 
Display existing tags.
 
REQ-005
 
Update Note Type after tag changes.
 
Normalized requirements become the foundation of implementation.

Visual requirements extracted from Figma or screenshots shall also be normalized into traceable requirements.

Example

REQ-006

Display the status badge above the title on mobile.

REQ-007

Use a two-column layout on desktop for the summary and metadata sections.

REQ-008

Show inline validation text beneath the attachment field.
 
---
 
# 7. Requirement Extraction
 
Every requirement shall receive a unique identifier.
 
Example
 
REQ-001
 
REQ-002
 
REQ-003
 
...
 
Each requirement shall contain:
 
Identifier
 
Title
 
Description
 
Business Purpose
 
Affected Feature
 
Priority
 
Dependencies
 
Acceptance Criteria
 
Status
 
Requirements shall remain atomic.

Where the requirement originates from a design artifact, the source shall be recorded explicitly.

Example sources:

- Jira Description
- Jira Comment
- Figma Frame
- Screenshot
- Attachment

Traceability shall preserve both business origin and visual origin where applicable.
 
One requirement should describe one behavior.
 
Never merge unrelated behaviors into a single requirement.
 
---
 
# 8. Requirement Classification
 
Each requirement shall be classified into one or more engineering domains.
 
Possible classifications include:
 
Business Logic
 
Presentation
 
User Interface
 
Accessibility
 
Validation
 
Data
 
API
 
Security
 
Permissions
 
Performance
 
Reporting
 
Navigation
 
Search
 
Sorting
 
Filtering
 
State Management
 
Testing
 
Documentation
 
Example
 
REQ-008
 
Display Note Type Column
 
Classification
 
- User Interface
- Data Presentation
- Testing
 
This classification determines which implementation modules will be required later.
 
---
 
# 9. Business Rule Intelligence
 
Business rules describe what must always remain true.
 
Business rules are independent of Angular.
 
Examples
 
Maximum upload size
 
Allowed file types
 
Default values
 
Permissions
 
Sorting order
 
Visibility rules
 
Validation rules
 
Display rules
 
Business rules must be extracted separately from implementation instructions.
 
Example
 
Business Rule
 
"Only uploaded files can be previewed."
 
Implementation
 
Angular Preview Dialog
 
The business rule remains constant even if implementation changes.
 
---
 
# 10. Acceptance Criteria Intelligence
 
Acceptance Criteria are mandatory verification checkpoints.
 
Each criterion shall be:
 
Assigned an identifier.
 
Example
 
AC-001
 
AC-002
 
AC-003
 
...
 
Each Acceptance Criterion shall map to one or more requirements.
 
Example
 
REQ-004
 
↓
 
AC-003
 
↓
 
UT-008
 
↓
 
Validation Item 3
 
This traceability enables complete engineering verification.
 
Acceptance Criteria shall never be merged.
 
Each criterion must remain independently verifiable.
 
---
 
# 11. Constraint Intelligence
 
Identify every implementation constraint.
 
Constraints may include:
 
Existing APIs
 
Existing Architecture
 
Performance Requirements
 
Accessibility Requirements
 
Repository Standards
 
Browser Compatibility
 
Security Policies
 
Technology Restrictions
 
UI Guidelines
 
Constraints are not optional.
 
Implementation must respect every documented constraint.
 
If a requirement conflicts with an existing constraint:
 
Document the conflict.
 
Do not silently violate either.
 
---
 
# 12. Dependency Intelligence
 
Requirements rarely exist independently.
 
Identify:
 
Business dependencies
 
Technical dependencies
 
UI dependencies
 
API dependencies
 
Repository dependencies
 
Testing dependencies
 
Example
 
Filtering depends on:
 
- Existing data source
 
- Existing API
 
- Existing table component
 
- Existing filter framework
 
Understanding dependencies prevents incomplete implementations.
 
---
 
# 13. Ambiguity Detection
 
The AI must actively search for ambiguity.
 
Examples include:
 
Undefined behavior
 
Missing validation
 
Conflicting comments
 
Incomplete acceptance criteria
 
Unspecified permissions
 
Unclear UI expectations
 
Contradictory screenshots
 
Every ambiguity shall be documented.
 
Every ambiguity shall include:
 
Description
 
Potential impact
 
Recommended clarification
 
The AI shall never resolve ambiguity through assumption.

# 14. Risk Intelligence
 
The AI shall proactively identify implementation risks before planning begins.
 
Risk identification reduces regressions and enables safer implementation.
 
Each identified risk shall include:
 
- Risk Identifier
- Description
- Probability
- Impact
- Mitigation Strategy
- Verification Strategy
 
Example
 
RISK-001
 
Description:
Adding a new sortable column may affect existing default sorting.
 
Probability:
Medium
 
Impact:
High
 
Mitigation:
Reuse the existing table sorting framework rather than introducing custom sorting logic.
 
Verification:
Execute existing sorting tests and validate default sort behavior.
 
Risks should be classified into one or more categories:
 
- Functional
- UI
- Accessibility
- Performance
- Security
- Repository Consistency
- Testing
- Deployment
 
Every high-impact risk must have an associated mitigation plan before implementation begins.
 
---
 
# 15. Requirement Prioritization
 
Not every requirement has equal importance.
 
Every extracted requirement shall receive a priority.
 
Priority Levels
 
## Critical
 
Required for business functionality.
 
Failure prevents delivery.
 
---
 
## High
 
Important functionality expected by users.
 
Failure significantly impacts usability.
 
---
 
## Medium
 
Improves user experience.
 
Failure does not block release.
 
---
 
## Low
 
Enhancement or cosmetic improvement.
 
Failure has minimal business impact.
 
---
 
Priority determines implementation order but never overrides documented dependencies.
 
---
 
# 16. Requirement Traceability Matrix
 
Every requirement shall remain traceable throughout the engineering lifecycle.
 
Traceability ensures that no requirement is forgotten and every implementation can be justified.
 
Each requirement shall map to:
 
- Business Rule(s)
- Acceptance Criteria
- Repository Evidence
- Implementation
- Unit Test(s)
- Validation Result
 
Example
 
| Requirement | Business Rule | Acceptance Criteria | Component | Unit Test | Validation |
|-------------|---------------|---------------------|-----------|-----------|------------|
| REQ-001 | BR-001 | AC-001 | NotesGrid | UT-001 | PASS |
| REQ-002 | BR-002 | AC-002 | NotesFilter | UT-002 | PASS |
 
No implementation shall exist without a corresponding requirement.
 
No requirement shall remain without implementation or documented justification.
 
---
 
# 17. Repository Handoff
 
After Jira analysis is complete, provide a structured handoff to the Repository Intelligence Engine.
 
The handoff shall contain:
 
## Business Summary
 
- Business objective
- User value
- Expected outcome
 
---
 
## Requirement Summary
 
Complete list of extracted requirements.
 
---
 
## Business Rules
 
Complete list of business rules.
 
---
 
## Constraints
 
Complete list of implementation constraints.
 
---
 
## Dependencies
 
Business dependencies
 
Technical dependencies
 
UI dependencies
 
---
 
## Risks
 
Identified risks
 
Mitigation strategies
 
---
 
## Outstanding Ambiguities
 
Any unresolved questions requiring clarification.
 
The Repository Intelligence Engine must consume this information before code analysis begins.
 
---
 
# 18. Engineering Readiness Assessment
 
Before planning begins, determine whether sufficient information exists to proceed.
 
Verify:
 
✓ Business objective understood
 
✓ Requirements extracted
 
✓ Acceptance criteria identified
 
✓ Business rules extracted
 
✓ Constraints documented
 
✓ Dependencies identified
 
✓ Risks assessed
 
✓ Ambiguities resolved or documented
 
If any mandatory information is missing, planning shall not begin.
 
---
 
# 19. Deliverables
 
Upon completion of the Jira Intelligence Engine, produce the following deliverables.
 
## Requirement Matrix
 
Every normalized requirement.
 
---
 
## Business Rule Catalogue
 
Every extracted business rule.
 
---
 
## Acceptance Criteria Catalogue
 
Every acceptance criterion.
 
---
 
## Constraint Register
 
Every documented implementation constraint.
 
---
 
## Dependency Register
 
All business and technical dependencies.
 
---
 
## Risk Register
 
Complete list of implementation risks.
 
---
 
## Ambiguity Report
 
Outstanding clarification requests.
 
---
 
## Engineering Readiness Report
 
Statement confirming whether implementation may begin.
 
---
 
# 20. Failure Handling
 
The Jira Intelligence Engine shall fail safely.
 
Failure conditions include:

- Jira retrieval unsuccessful.
- Missing acceptance criteria.
- Contradictory business requirements.
- Incomplete business objective.
- Missing referenced attachments.
- Missing required design artifacts.
- Conflicting screenshots.
- Relevant Jira-discovered Figma link not attempted through Figma MCP for UI work.
- Unresolved implementation blockers.
 
When failure occurs:
 
Stop further processing.
 
Explain:
 
- What failed.
- Why it failed.
- Impact on implementation.
- Required action to continue.
 
Never compensate for missing information by making assumptions.
 
---
 
# 21. AI Self-Validation
 
Before exiting this phase, perform an internal review.
 
Questions:
 
- Have I read the complete Jira?
- Have I overlooked any requirement?
- Did I separate business rules from implementation?
- Have I identified every acceptance criterion?
- Have I documented all constraints?
- Have I captured dependencies?
- Have I identified implementation risks?
- Have I documented ambiguities?
- Can every future code change be traced back to a requirement?
 
If any answer is "No" or "Unknown", repeat the analysis before proceeding.
 
---
 
# 22. Exit Criteria
 
The Jira Intelligence Engine is complete only when all of the following are true:
 
✓ Every requirement has a unique identifier.
 
✓ Every requirement has been normalized.
 
✓ Every business rule has been extracted.
 
✓ Every acceptance criterion has been identified.
 
✓ Every dependency has been documented.
 
✓ Every constraint has been recorded.
 
✓ Every implementation risk has been assessed.
 
✓ Every ambiguity has been documented.
 
✓ A complete Requirement Traceability Matrix exists.
 
✓ An Engineering Readiness Report has been generated.
 
Only then may the Repository Intelligence Engine begin.
 
---
 
# 23. Non-Negotiable Rules
 
The AI shall never:
 
- Skip Jira retrieval when a Jira key is provided.
- Ignore acceptance criteria.
- Merge unrelated requirements.
- Invent undocumented business behavior.
- Ignore conflicting information.
- Begin implementation before analysis is complete.
- Treat comments as higher priority than documented requirements.
- Ignore referenced attachments or designs.
- Proceed with unresolved critical ambiguities.
 
---
 
# 24. Guiding Principle
 
A Jira story is not merely a task description.
 
It is the authoritative definition of the business problem to be solved.
 
The responsibility of the Jira Intelligence Engine is to transform that business problem into a complete, traceable, and implementation-ready engineering specification.

Implementation quality is determined by the quality of analysis.

 
Better Jira intelligence leads to better software.
 
