# AI Engineering Framework

## 03 - Engineering Patterns

### 07 - Sorting Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining sorting functionality within Angular applications.

Sorting enables users to organize business information in meaningful ways while preserving repository consistency, application performance, accessibility, and user workflow.

Sorting shall be treated as a business capability rather than a UI event.

---

# 2. Scope

This pattern applies to:

- Table Sorting
- Grid Sorting
- List Sorting
- Dashboard Sorting
- Report Sorting
- Client-side Sorting
- Server-side Sorting
- Single-column Sorting
- Multi-column Sorting (if supported)

This pattern governs:

- Sort state
- Sort indicators
- API integration
- Default ordering
- State persistence
- User interaction

---

# 3. Pattern Dependencies

Depends on:

- Table Pattern
- Search Pattern
- Filter Pattern
- Angular Performance
- Angular Testing

May integrate with:

- Dashboard Pattern
- Report Pattern

---

# 4. Repository First Principle

Before implementing sorting:

Analyze the repository.

Identify:

- Existing sorting implementation
- Existing directives
- Existing APIs
- Existing sort icons
- Existing state management
- Existing pagination behavior

Reuse the repository implementation.

Never introduce a second sorting architecture.

---

# 5. Sorting Philosophy

Sorting exists to improve information discoverability.

Users should always understand:

- Which column is sorted.
- Current sort direction.
- Default sort order.
- Whether sorting is active.

Sorting should always produce predictable results.

---

# 6. Sorting Discovery

Before implementation determine:

- Client-side or server-side sorting?
- Existing reusable sorting utilities?
- Existing sort model?
- Existing API contract?
- Repository default ordering?

Reuse existing implementations whenever possible.

---

# 7. Sorting Lifecycle

Sorting shall follow:

User Action

↓

Validate Column

↓

Determine Direction

↓

Update Sort State

↓

Execute Sort

↓

Refresh View

↓

Preserve User Context

The lifecycle shall remain consistent across the application.

---

# 8. Default Sorting

Default sorting shall follow:

1. Jira requirements.
2. Existing repository behavior.
3. Business requirements.

Never introduce arbitrary default sorting.

---

# 9. Sort Indicators

Sort indicators shall:

- Match repository design.
- Clearly indicate active column.
- Clearly indicate direction.
- Update immediately after sorting.

Visual consistency is mandatory.

---

# 10. Sort State

Sort state shall remain synchronized across:

- Table
- Search
- Filtering
- Pagination
- API requests

The repository shall remain the source of truth.

---

# 11. Search Integration

Sorting shall preserve:

- Active search query
- Search results
- Search state

Sorting shall never unexpectedly clear search.

---

# 12. Filter Integration

Sorting shall preserve:

- Active filters
- Filter state
- Filter chips
- Filter selections

Filtering and sorting shall work together without conflict.

---

# 13. Pagination Integration

Sorting shall integrate with pagination according to repository behavior.

Examples:

- Reset to first page after sorting (if repository standard)
- Preserve page size
- Preserve page state where appropriate

Follow the repository implementation.

---

# 14. API Integration

For server-side sorting:

Reuse existing request models.

Reuse existing API parameters.

Do not invent new API contracts unless required.

---

# 15. Accessibility

Sorting shall support:

- Keyboard navigation
- Screen readers
- Accessible sort announcements
- Focus preservation

Accessibility shall never regress.

---

# 16. Performance

Avoid:

- Duplicate sorting
- Duplicate API requests
- Full dataset sorting when unnecessary
- Excessive change detection

Reuse cached state where appropriate.

---

# 17. Error Handling

Handle:

- Invalid sort fields
- API failures
- Unsupported sorting
- Network interruptions

Sorting failures shall preserve the existing view.

---

# 18. Engineering Contracts

## Grid Sorting Contract

Verify:

✓ Existing sorting reused.

✓ Existing sort icons reused.

✓ Existing API reused.

✓ Existing state preserved.

✓ Existing pagination behavior preserved.

---

## Client-side Sorting Contract

Verify:

✓ Stable sorting.

✓ Existing data reused.

✓ No unnecessary copies.

✓ Existing filters preserved.

---

## Server-side Sorting Contract

Verify:

✓ Existing request model reused.

✓ Existing endpoint reused.

✓ Existing loading state reused.

✓ Existing error handling reused.

---

# 19. Testing

Verify:

- Ascending sorting
- Descending sorting
- Default sorting
- Sorting with filters
- Sorting with search
- Sorting with pagination
- API failures
- Accessibility
- Regression scenarios

---

# 20. Review Checklist

Before completing implementation verify:

✓ Existing sorting implementation reused.

✓ Existing API reused.

✓ Existing indicators preserved.

✓ Existing search preserved.

✓ Existing filters preserved.

✓ Existing pagination preserved.

✓ Existing accessibility preserved.

✓ Performance preserved.

✓ Unit tests updated.

---

# 21. Non-Negotiable Rules

The AI shall never:

- Create a second sorting implementation.
- Reset search unexpectedly.
- Reset filters unexpectedly.
- Ignore repository sorting behavior.
- Introduce inconsistent sort indicators.
- Break pagination.
- Duplicate sorting logic.
- Ignore accessibility.

---

# 22. Guiding Principle

Sorting is a business interaction, not merely a column click.

Every implementation shall preserve repository behavior, integrate naturally with search, filtering, pagination, and APIs, and provide a consistent, predictable experience across the application.

The AI shall treat sorting as reusable engineering infrastructure rather than isolated table logic.