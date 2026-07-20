# 01 - Table Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining tabular data within Angular applications.

Tables are one of the most frequently modified components in enterprise applications. Every new column, action, filter, or interaction shall integrate seamlessly with the repository's existing table implementation.

The objective is to ensure that all table-related functionality behaves consistently regardless of the feature being implemented.

---

# 2. Scope

This pattern applies to:

- Data Grids
- Tables
- Lists
- Tree Tables
- Master-Detail Tables
- Paginated Tables
- Virtual Scroll Tables
- Reporting Tables
- Dashboard Tables

This pattern also governs:

- Columns
- Actions
- Sorting
- Filtering
- Searching
- Pagination
- Selection
- Loading
- Empty States
- Responsive Behaviour

---

# 3. Repository First Principle

Before modifying any table:

Analyze the repository.

Identify:

- Existing table implementation
- Shared table component
- Shared directives
- Existing SCSS
- Existing column sizing
- Existing spacing
- Existing sorting implementation
- Existing filtering implementation
- Existing search implementation
- Existing pagination
- Existing action columns

Reuse the existing implementation.

Do not create a second table architecture.

---

# 4. Table Philosophy

A table presents structured business information.

It should prioritize:

- Readability
- Discoverability
- Consistency
- Performance
- Accessibility

Every modification shall preserve the user's mental model.

---

# 5. Table Discovery

Before implementation determine:

- Is this an existing table?
- Is this a shared table component?
- Are similar columns already implemented elsewhere?
- Is an existing filter row available?
- Is an existing action column available?

Repository discovery is mandatory.

---

# 6. Column Management

New columns shall:

- Match existing column styling
- Match existing typography
- Match existing spacing
- Match existing alignment
- Match existing header height
- Match existing row height

Columns shall not visually appear different from existing columns.

---

# 7. Column Ordering

Do not reorder existing columns unless explicitly required by the Jira.

New columns shall be inserted only where specified by:

- Jira
- Existing business workflow
- Existing repository conventions

Business flow determines placement.

---

# 8. Column Width Strategy

Column width shall never be arbitrary.

Determine width using the following priority:

1. Existing repository implementation of equivalent columns.

2. Business content requirements.

3. Repository design system.

Column width shall accommodate:

- Header text
- Typical values
- Icons
- Sorting indicators
- Filter controls

Columns shall not truncate information unnecessarily.

---

# 9. Spacing Consistency

Spacing shall remain visually consistent across the entire table.

Maintain consistency for:

- Column gaps
- Cell padding
- Header padding
- Row height
- Filter row
- Action columns

New columns shall inherit repository spacing rather than introducing independent measurements.

Visual balance is mandatory.

---

# 10. Alignment

Headers and cell values shall align consistently.

Examples:

Text

- Left aligned

Numeric values

- Repository standard

Dates

- Repository standard

Status

- Repository standard

Action columns

- Repository standard

Equivalent content shall align identically throughout the application.

---

# 11. Sorting

When sorting is required:

Reuse the repository implementation.

Maintain:

- Existing sort icons
- Existing animation
- Existing interaction
- Existing API integration
- Existing state preservation

Sorting shall never interfere with:

- Filtering
- Searching
- Pagination

---

# 12. Filtering

Filters shall:

- Match repository UI
- Preserve layout
- Preserve spacing
- Integrate with sorting
- Integrate with search
- Support reset behaviour

Date filters shall reuse the repository's compact date filter implementation.

Never compose new filter controls when reusable ones exist.

---

# 13. Searching

Search shall integrate naturally with the table.

Preserve:

- Existing search behaviour
- Existing debounce
- Existing highlighting
- Existing filtering interaction
- Existing pagination

Search shall never unexpectedly clear active filters.

---

# 14. Row Actions

Actions shall remain independent.

Examples:

Preview

↓

Preview

Download

↓

Download

Delete

↓

Delete

Menu

↓

Menu

No action shall override another.

Entire rows shall never become clickable unless explicitly required.

---

# 15. Loading State

Loading shall reuse repository behaviour.

Support:

- Skeletons
- Spinners
- Progressive loading

Loading should preserve table layout.

Avoid layout shifting.

---

# 16. Empty State

Empty tables shall provide meaningful feedback.

Support repository conventions for:

- No records
- No search results
- No filter results
- Initial empty state

Avoid blank interfaces.

---

# 17. Responsive Behaviour

Tables shall remain usable across supported screen sizes.

Reuse repository responsiveness.

Do not introduce a second responsive strategy.

---

# 18. Accessibility

Tables shall preserve:

- Keyboard navigation
- Focus management
- Sort announcements
- Filter accessibility
- Semantic table structure

Accessibility shall never regress.

---

# 19. Performance

Avoid:

- Re-rendering entire tables unnecessarily
- Duplicate sorting
- Duplicate filtering
- Duplicate searches
- Duplicate API calls

Reuse existing state whenever possible.

---

# 20. Testing

Verify:

- Column rendering
- Column order
- Column width
- Sorting
- Filtering
- Searching
- Pagination
- Empty state
- Loading state
- Accessibility
- Existing functionality

Every new column shall include regression verification.

---

# 21. Review Checklist

Before completing implementation verify:

✓ Repository table analyzed.

✓ Existing implementation reused.

✓ Column alignment preserved.

✓ Column spacing preserved.

✓ Width consistent.

✓ Sorting preserved.

✓ Filtering preserved.

✓ Searching preserved.

✓ Accessibility preserved.

✓ Unit tests updated.

---

# 22. Non-Negotiable Rules

The AI shall never:

- Create a second table architecture.

- Introduce inconsistent spacing.

- Introduce arbitrary column widths.

- Break existing sorting.

- Break existing filtering.

- Break existing searching.

- Break existing pagination.

- Make entire rows clickable unless explicitly required.

- Duplicate table logic.

---

# 23. Guiding Principle

A new table feature should feel like it has always belonged in the application.

Every column, interaction, spacing decision, and behavior shall be derived from the repository's existing implementation, ensuring visual consistency, functional predictability, and long-term maintainability.

The AI shall treat tables as shared business infrastructure rather than isolated UI components.