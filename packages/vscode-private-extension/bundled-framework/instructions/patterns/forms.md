# 02 - Form Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining forms within Angular applications.

Forms are the primary mechanism for user interaction in enterprise systems. Every form shall provide a consistent, accessible, predictable, and repository-aligned user experience.

The objective is to ensure that all forms, whether simple filters or complex business workflows, behave consistently across the application.

---

# 2. Scope

This pattern applies to:

- Create Forms
- Edit Forms
- Filter Forms
- Search Panels
- Dialog Forms
- Wizard Forms
- Side Panel Forms
- Settings Forms
- Dynamic Forms

This includes:

- Input controls
- Date controls
- Dropdowns
- Checkboxes
- Radio buttons
- Toggle switches
- File selectors
- Validation
- Form layouts
- Submission
- Reset behaviour

---

# 3. Repository First Principle

Before implementing any form:

Analyze the repository.

Identify:

- Existing form components
- Shared field components
- Existing validators
- Existing layout system
- Existing CSS templates
- Existing spacing rules
- Existing form containers
- Existing date picker implementation
- Existing dropdown implementation

Reuse existing implementations.

Never introduce a second form architecture.

---

# 4. Form Philosophy

Forms exist to collect business information.

Users should immediately understand:

- What information is required.
- What information is optional.
- How information should be entered.
- Why validation failed.
- How to successfully complete the workflow.

Forms should minimize cognitive load.

---

# 5. Form Discovery

Before creating new controls determine:

- Does an identical control already exist?
- Does a shared validator exist?
- Does a reusable component exist?
- Does a shared layout exist?
- Does the repository provide a standard CSS template?

Always reuse before creating.

---

# 6. Layout Pattern

Forms shall inherit the repository layout.

Maintain consistency for:

- Grid structure
- Field spacing
- Label spacing
- Section spacing
- Margins
- Alignment

Never manually position controls when reusable layouts exist.

---

# 7. Field Pattern

Each field shall contain:

- Label
- Input control
- Validation message
- Optional helper text

Field composition shall remain consistent throughout the application.

---

# 8. Input Controls

Reuse repository implementations for:

- Text fields
- Number fields
- Email fields
- Password fields
- Text areas

Maintain:

- Height
- Width
- Border radius
- Typography
- Padding
- Focus state

---

# 9. Date Controls

Reuse the repository's date picker implementation.

Maintain:

- Calendar icon placement
- Input height
- Placeholder visibility
- Label alignment
- Compact sizing
- Responsive behaviour

The calendar icon shall appear inside the input when that is the repository standard.

Do not create custom date picker layouts.

---

# 10. Dropdown Controls

Dropdowns shall:

- Match repository styling.
- Match field height.
- Match typography.
- Match spacing.
- Preserve existing search behaviour.
- Preserve existing keyboard navigation.

---

# 11. Validation Pattern

Validation shall:

- Execute consistently.
- Display immediately according to repository behaviour.
- Preserve entered values.
- Clearly communicate corrective action.

Never silently reject user input.

---

# 12. Submission Pattern

Submission shall:

- Validate first.
- Prevent duplicate submissions.
- Display loading state.
- Disable controls where appropriate.
- Display success or failure feedback.

Submission shall remain predictable.

---

# 13. Reset Pattern

Reset behaviour shall:

- Restore default values.
- Clear validation.
- Preserve repository behaviour.
- Reset dependent controls correctly.

---

# 14. Responsive Behaviour

Forms shall remain usable across supported screen sizes.

Reuse repository breakpoints.

Avoid creating independent responsive layouts.

---

# 15. Accessibility

Forms shall support:

- Keyboard navigation.
- Labels.
- Focus management.
- Screen readers.
- Validation announcements.

Accessibility shall never regress.

---

# 16. Performance

Avoid:

- Duplicate validators.
- Duplicate state.
- Unnecessary change detection.
- Expensive template expressions.

Reuse existing form infrastructure.

---

# 17. Engineering Contracts

## Compact Filter Contract

If a form is used inside a table filter:

The AI shall verify:

✓ Field height matches adjacent controls.

✓ Calendar icon aligns with other suffix icons.

✓ Placeholder text is fully visible.

✓ Label spacing matches repository filters.

✓ Controls align horizontally.

✓ No field causes row height expansion.

---

## Dialog Form Contract

If the form is inside a dialog:

Verify:

✓ Dialog width matches repository.

✓ Actions remain fixed.

✓ Validation does not shift layout.

✓ Focus remains inside dialog.

✓ Scrolling behaves consistently.

---

## Search Form Contract

Search controls shall:

- Preserve debounce.
- Preserve existing styling.
- Integrate with filters.
- Reset correctly.

---

# 18. Testing

Verify:

- Rendering
- Validation
- Submission
- Reset
- Loading
- Error handling
- Accessibility
- Responsive behaviour
- Existing workflows

---

# 19. Review Checklist

Before completing implementation verify:

✓ Repository form analyzed.

✓ Existing controls reused.

✓ Existing validators reused.

✓ Layout preserved.

✓ Validation preserved.

✓ Date controls consistent.

✓ Dropdowns consistent.

✓ Accessibility preserved.

✓ Performance preserved.

✓ Unit tests updated.

---

# 20. Non-Negotiable Rules

The AI shall never:

- Create duplicate form components.

- Introduce inconsistent spacing.

- Break validation.

- Break keyboard navigation.

- Create custom date picker behaviour.

- Ignore repository CSS templates.

- Duplicate validators.

- Break existing form workflows.

---

# 21. Guiding Principle

A new form shall appear as though it has always existed within the application.

Every field, validator, layout decision, and interaction shall be derived from the repository's existing implementation, ensuring consistency, usability, accessibility, and long-term maintainability.

The AI shall treat forms as reusable business infrastructure rather than isolated UI implementations.