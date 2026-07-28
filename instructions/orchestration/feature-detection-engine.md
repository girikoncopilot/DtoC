# 01 - Feature Detection Engine

**Version:** 1.0

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI identifies the engineering capabilities required to implement a Jira story.

The objective of Feature Detection is to translate business requirements into engineering capabilities before any repository analysis or code generation begins.

Feature Detection is a reasoning process.

It determines **what** needs to be implemented, not **how** it should be implemented.

---

# 2. Engineering Philosophy

A Jira story describes business requirements.

The AI must convert those requirements into engineering capabilities.

The AI shall never begin implementation without first identifying every required capability.

Capabilities become the foundation for:

- Context Loading
- Repository Discovery
- Planning
- Implementation
- Testing
- Validation

---

# 3. Detection Lifecycle

Every Jira shall pass through the same detection process.

Read Jira

↓

Extract Requirements

↓

Identify Engineering Capabilities

↓

Identify Business Workflows

↓

Determine Dependencies

↓

Determine Exclusions

↓

Pass Results to Context Loading Engine

Feature Detection completes before repository analysis begins.

---

# 4. Business Requirement Extraction

Extract:

- Primary objective
- User action
- Business entity
- UI interaction
- Data interaction
- Validation requirements
- Security requirements
- Performance requirements

Business understanding precedes technical understanding.

Potential relevance signals for optional visual evidence processing include:

- jira_has_image_attachments
- jira_mentions_attached_design
- jira_mentions_screenshot
- ui_feature
- ui_bug
- layout_change
- design_reference_present
- visual_validation_required

---

# 5. Capability Detection

For every Jira determine whether the following capabilities are required.

## Data Presentation

Examples:

- Table
- List
- Grid
- Cards
- Timeline

---

## Data Input

Examples:

- Form
- Wizard
- Stepper
- Inline Editing

---

## Searching

Examples:

- Search
- Quick Search
- Global Search

---

## Filtering

Examples:

- Status Filter
- Date Filter
- Category Filter
- Multi Select
- Advanced Filters

---

## Sorting

Examples:

- Ascending
- Descending
- Multi-column Sorting

---

## Dialogs

Examples:

- Confirmation
- Edit Dialog
- Create Dialog
- Delete Dialog
- Details Dialog

---

## Upload

Examples:

- File Upload
- Image Upload
- Import
- Drag and Drop

---

## Preview

Examples:

- Image Preview
- PDF Preview
- Document Preview
- Video Preview

---

## Dashboard

Examples:

- KPI
- Widgets
- Analytics
- Metrics

---

## Reports

Examples:

- Reports
- Export
- Print
- Analytics

---

## Authentication

Examples:

- Login
- Logout
- Roles
- Permissions
- Route Guards
- Access Control

---

## Accessibility

Accessibility shall be evaluated for every user-facing feature.

---

# 6. Dependency Detection

Capabilities rarely exist independently.

Examples:

Table

↓

Search

↓

Sorting

↓

Filtering

↓

Pagination

Upload

↓

Preview

↓

Dialog

↓

Authentication (if protected)

The AI shall detect all dependent capabilities before implementation.

---

# 7. Exclusion Detection

Equally important is determining what is **not** required.

Examples:

A Jira that adds a new table column shall not activate:

- Upload
- Preview
- Reports
- Dashboard
- Authentication

Only required capabilities shall be activated.

---

# 8. Complexity Assessment

Determine implementation complexity.

Low

Examples:

- Label changes
- New column
- Placeholder update

Medium

Examples:

- New form
- New filter
- New dialog

High

Examples:

- Dashboard
- Multi-step workflow
- Authentication changes
- Reporting engine

Complexity influences planning depth.

---

# 9. Risk Detection

Identify potential risks.

Examples:

- Shared components
- Shared services
- Existing APIs
- Existing business rules
- Security-sensitive functionality
- Performance-sensitive functionality

High-risk capabilities require additional validation.

---

# 10. Output

Feature Detection shall produce a structured capability map.

Example

Engineering Capabilities

✓ Table

✓ Search

✓ Filter

✓ Sorting

Not Required

✗ Upload

✗ Preview

✗ Dashboard

✗ Reports

✗ Authentication

The output shall contain only detected capabilities.

---

# 11. Engineering Rules

The AI shall:

- Detect capabilities before planning.
- Detect dependencies.
- Detect exclusions.
- Detect business workflows.
- Detect implementation risks.
- Avoid assumptions.

Feature Detection shall remain deterministic.

---

# 12. Non-Negotiable Rules

The AI shall never:

- Begin repository analysis before capability detection.
- Activate unrelated engineering patterns.
- Ignore dependent capabilities.
- Assume capabilities without Jira evidence.
- Skip exclusion analysis.

---

# 13. Success Criteria

Feature Detection is successful when:

✓ Every required capability has been identified.

✓ No unnecessary capability has been activated.

✓ Dependencies have been detected.

✓ Risks have been identified.

✓ The output is ready for Context Loading.

---

# 14. Guiding Principle

Feature Detection transforms business language into engineering language.

The AI shall identify only the engineering capabilities required by the Jira, ensuring that subsequent planning, implementation, testing, and validation remain focused, deterministic, and free from unnecessary context.
