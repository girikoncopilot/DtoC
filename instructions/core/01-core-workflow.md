## 01 - Core Workflow
**Version:** 1.0  
**Status:** Stable  
**Classification:** Core Framework Standard
 
---
 
# 1. Purpose
 
This document defines the mandatory engineering workflow that shall be followed for every software engineering task executed using the AI Engineering Framework.
 
Where **00-Core-Role** defines *how the AI must think*, this document defines *how the AI must execute work*.
 
Every engineering task—regardless of size, technology, or complexity—shall follow this workflow.
 
No phase may be skipped unless explicitly instructed by the user.
 
---
 
# 2. Workflow Overview
 
Every task follows the same lifecycle.
 
```
Receive Task
      │
      ▼
Understand Request
      │
      ▼
Retrieve Requirement Sources
      │
      ▼
Requirement Intelligence
      │
      ▼
Repository Intelligence
      │
      ▼
Planning
      │
      ▼
Implementation
      │
      ▼
Testing
      │
      ▼
Validation
      │
      ▼
Delivery
```
 
Each phase has mandatory inputs, activities, outputs, and exit criteria.
 
---
 
# 3. Phase 1 — Task Intake
 
## Objective
 
Understand what work has been requested.
 
---
 
## Inputs
 
Possible inputs include:
 
- Jira Key
- User instructions
- Design documents
- Wireframes
- Figma
- Existing implementation
- Bug reports
- Screenshots
- Stack traces
- API specifications

These inputs are optional unless the task explicitly depends on them.

If an input is not provided and the task does not require it, the workflow shall continue without penalty.

If an input is provided, it shall be reviewed and shall not be ignored.
 
---
 
## Activities
 
Determine:
 
- What is being requested?
- Is it a feature?
- Is it a bug fix?
- Is it a refactor?
- Is it an enhancement?
- Is it an investigation?
 
Determine available information.
 
Identify missing information.
 
---
 
## Outputs
 
- Task Classification
- Available Inputs
- Missing Inputs
 
---
 
## Exit Criteria
 
The requested work is clearly understood.
 
---
 
# 4. Phase 2 — Requirement Intelligence
 
## Objective
 
Understand exactly what the business requires.
 
Jira is the primary business source of truth when provided.

Figma, screenshots, wireframes, and other design artifacts are authoritative design evidence for layout, visual intent, interaction details, and state representation when provided.
 
---
 
## Activities
 
Retrieve every available requirement source.

Do not require attachments, Figma, screenshots, or supporting documents for tasks that can be implemented safely without them.

When Jira is available retrieve:
 
- Summary
- Description
- Acceptance Criteria
- Technical Notes
- Comments
- Attachments
- Linked Stories
- External design and image references
- Uploaded image attachments and their previewable content when relevant

When design inputs are available retrieve:

- Figma links
- Figma frames
- Figma annotations
- Wireframes
- Screenshots
- Attached mockups
- Visual state references
- Jira image attachments

When a requirement source references external visual artifacts such as Figma, or contains uploaded image attachments such as Jira images, the appropriate MCP or connected retrieval tool shall be called to resolve the actual design/image content before analysis continues.

Do not rely solely on plain text links when the exact visual output depends on the referenced design artifact.
 
Read everything completely.
 
Never skim.
 
Extract:
 
- Business objective
- Functional requirements
- Non-functional requirements
- Validation rules
- Edge cases
- Constraints
- Visual requirements
- Interaction requirements
- State-specific expectations

Separate:
 
Business Requirements
 
from
 
Implementation Details.

If multiple requirement sources conflict, record the conflict explicitly and request clarification when the conflict blocks safe implementation.

If an attachment or design artifact is referenced by the Jira, acceptance criteria, or user request as required evidence, it becomes mandatory for correct analysis.
 
---
 
## Outputs
 
- Requirement Matrix
- Business Rule List
- Acceptance Criteria List
- Constraints
- Ambiguities
 
---
 
## Exit Criteria
 
Every requirement has been identified.
 
No implementation assumptions remain.
 
---
 
# 5. Phase 3 — Repository Intelligence
 
## Objective
 
Understand the existing application before modifying it.
 
---
 
## Activities
 
Locate:
 
- Components
- Services
- Models
- Interfaces
- Utilities
- Directives
- Pipes
- Validators
- Dialogs
- Shared UI
- Existing patterns
- Unit tests
 
Search for similar features.
 
Identify reusable implementations.
 
Understand:
 
- Component hierarchy
- Event flow
- API interactions
- State management
- Styling conventions
- Folder organization
 
Document repository evidence.
 
---
 
## Outputs
 
Repository Analysis Report
 
Reusable Components
 
Affected Files
 
Dependency Map
 
Risk Assessment
 
---
 
## Exit Criteria
 
The AI understands how the existing solution works.
 
---
 
# 6. Phase 4 — Planning
 
## Objective
 
Create an implementation strategy before writing code.
 
---
 
## Activities
 
Determine:
 
Files to modify
 
Files to create
 
Existing implementations to reuse
 
Potential risks
 
Regression risks
 
Testing strategy
 
Accessibility considerations
 
Performance considerations
 
Provide engineering justification for every modification.
 
---
 
## Outputs
 
Implementation Plan
 
Risk Matrix
 
Reuse Matrix
 
File Modification List
 
---
 
## Exit Criteria
 
A complete implementation strategy exists.
 
---
 
# 7. Phase 5 — Implementation
 
## Objective
 
Implement only the required changes.
 
---
 
## Activities
 
Modify only necessary files.
 
Reuse existing implementations whenever appropriate.
 
Maintain:
 
- Architecture
- Coding standards
- Naming conventions
- UI consistency
- Accessibility
- Performance
 
Avoid:
 
- unrelated refactoring
- unnecessary abstractions
- duplicate logic
- breaking existing behavior
 
Every code modification must satisfy one or more documented requirements.
 
---
 
## Outputs
 
Production-ready implementation.
 
---
 
## Exit Criteria
 
Every documented requirement has been implemented.
 
---
 
# 8. Phase 6 — Testing
 
## Objective
 
Verify implementation correctness.
 
Testing is mandatory.
 
---
 
## Activities
 
Create or update tests where applicable.
 
Testing includes:
 
Unit Tests
 
Component Tests
 
Integration Tests
 
Regression Tests
 
Edge Case Tests
 
Negative Tests
 
Validation Tests
 
Every business rule should be covered by one or more tests.
 
Where practical, every requirement should have traceability to one or more test cases.
 
---
 
## Outputs
 
Updated Test Suite
 
Requirement-to-Test Mapping
 
---
 
## Exit Criteria
 
Tests validate the implemented behaviour.
 
---
 
# 9. Phase 7 — Validation
 
## Objective
 
Verify that implementation satisfies the business requirements without introducing regressions.
 
---
 
## Activities
 
Validate:
 
Every Jira requirement
 
Every acceptance criterion
 
Every business rule
 
UI consistency
 
Accessibility
 
Performance
 
Repository consistency
 
Regression impact
 
Verify:
 
No unrelated functionality changed.
 
No broken workflows.
 
No duplicate implementations.
 
No unnecessary API calls.
 
No architectural violations.
 
---
 
## Validation Checklist
 
✓ Jira satisfied
 
✓ Acceptance criteria satisfied
 
✓ Existing behavior preserved
 
✓ Existing architecture respected
 
✓ Coding standards followed
 
✓ Accessibility maintained
 
✓ Performance maintained
 
✓ Tests passing
 
✓ Production ready
 
---
 
## Outputs
 
Validation Report
 
---
 
## Exit Criteria
 
Implementation is verified.
 
---
 
# 10. Phase 8 — Delivery
 
## Objective
 
Provide a complete engineering summary.
 
---
 
## Deliverables
 
Before presenting the implementation provide:
 
## Requirement Summary
 
- Business objective
- Functional requirements
- Business rules
- Acceptance criteria
 
---
 
## Repository Summary
 
- Existing components reused
- Existing services reused
- Existing utilities reused
 
---
 
## Implementation Summary
 
Files modified
 
Files created
 
Components modified
 
Services modified
 
Models modified
 
SCSS changes
 
HTML changes
 
TypeScript changes
 
---
 
## Testing Summary
 
Tests created
 
Tests updated
 
Requirements covered
 
Known limitations
 
---
 
## Validation Summary
 
Requirements satisfied
 
Acceptance criteria satisfied
 
Regression status
 
Outstanding risks
 
---
 
## Completion Statement
 
State whether:
 
- Implementation is complete.
- Additional clarification is required.
- Known limitations remain.
- Follow-up work is recommended.
 
---
 
# 11. Phase Gates
 
A phase cannot begin until the previous phase has successfully completed.
 
| Current Phase | Must Complete Before |
|---------------|----------------------|
| Requirement Intelligence | Jira Retrieval |
| Repository Intelligence | Requirement Intelligence |
| Planning | Repository Intelligence |
| Implementation | Planning |
| Testing | Implementation |
| Validation | Testing |
| Delivery | Validation |
 
Skipping phases is prohibited unless explicitly instructed.
 
---
 
# 12. Failure Handling
 
If a phase cannot be completed:
 
Stop progression.
 
Explain:
 
- Why the phase failed.
- Which information is missing.
- What is required to continue.
 
Never compensate for missing information with assumptions.
 
---
 
# 13. Continuous Decision Validation
 
Throughout every phase, continuously ask:
 
- Is this required by the Jira?
- Does an implementation already exist?
- Am I preserving existing behavior?
- Is this introducing unnecessary complexity?
- Can this decision be justified with evidence?
- Will another engineer understand this change six months from now?
 
If any answer is "No" or "Unknown," revisit the previous phase before proceeding.
 
---
 
# 14. Workflow Success Criteria
 
The workflow is considered successfully executed only when:
 
✓ Every workflow phase has been completed.
 
✓ Every engineering decision is supported by evidence.
 
✓ Every business requirement has traceability to implementation.
 
✓ Every implementation has traceability to validation.
 
✓ Every validation has traceability to testing.
 
✓ No undocumented behavior has been introduced.
 
✓ The solution integrates naturally into the existing application.
 
✓ The implementation is production-ready.
 
---
 
# 15. Engineering Principle
 
The workflow exists to eliminate guesswork.
 
Following a disciplined engineering process consistently produces better software than relying on intuition or speed.
 
The AI shall always prioritize correctness, traceability, maintainability, and evidence-based decision making over rapid code generation.
