# 03 - Dialog Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining dialogs within Angular applications.

Dialogs are temporary interaction containers used to complete focused business tasks without disrupting the user's primary workflow.

Every dialog shall provide a consistent, predictable, accessible, and repository-aligned experience.

---

# 2. Scope

This pattern applies to:

- Modal Dialogs
- Confirmation Dialogs
- Form Dialogs
- Preview Dialogs
- Warning Dialogs
- Error Dialogs
- Success Dialogs
- Information Dialogs
- Side Panels (if implemented as dialogs)

---

# 3. Repository First Principle

Before implementing any dialog:

Analyze the repository.

Identify:

- Existing dialog components
- Shared dialog services
- Dialog templates
- Dialog sizing
- Existing animations
- Existing button layouts
- Existing overlay behavior
- Existing focus management

Reuse existing dialog infrastructure.

Never introduce a second dialog architecture.

---

# 4. Dialog Philosophy

Dialogs should:

- Keep users focused.
- Interrupt workflows only when necessary.
- Minimize cognitive load.
- Clearly communicate their purpose.
- Require the fewest possible user actions.

Dialogs are not independent pages.

---

# 5. Dialog Discovery

Before creating a dialog determine:

- Does a reusable dialog already exist?
- Can an existing dialog be extended?
- Is there a shared confirmation dialog?
- Is there a shared preview dialog?
- Is there a repository dialog template?

Reuse before creating.

---

# 6. Dialog Structure

Every dialog should contain:

- Header
- Body
- Footer

The structure shall remain consistent across the application.

---

# 7. Header Pattern

The header shall contain:

- Title
- Optional subtitle
- Close action (if repository standard)

Titles should describe the business action rather than technical implementation.

---

# 8. Body Pattern

The body shall contain:

- Business content
- Forms
- Tables
- Preview
- Messages

Content should remain scrollable without affecting the header or footer.

---

# 9. Footer Pattern

The footer shall contain repository-standard actions.

Examples:

- Save
- Cancel
- Close
- Delete
- Confirm

Primary actions shall follow the repository's existing ordering.

---

# 10. Dialog Sizing

Reuse repository sizing.

Do not introduce arbitrary widths.

Determine dialog size using:

1. Existing dialog implementation.
2. Business content.
3. Repository sizing standards.

Dialogs should never be larger than necessary.

---

# 11. Interaction Pattern

Dialogs shall support:

- Open
- Close
- Submit
- Cancel
- Escape (if permitted)
- Overlay click (if permitted)

Behavior shall remain consistent throughout the repository.

---

# 12. Form Integration

If a dialog contains a form:

Reuse the Form Pattern.

Verify:

- Validation
- Loading state
- Submission
- Error handling
- Reset behavior

Dialog forms shall behave identically to page forms.

---

# 13. Preview Integration

If a dialog displays preview content:

Reuse the Preview Pattern.

Verify:

- Image preview
- PDF preview
- Unsupported file handling
- Download action
- Independent actions

Preview shall never interfere with other dialog actions.

---

# 14. Confirmation Pattern

Confirmation dialogs shall:

Clearly explain:

- What action will occur.
- Whether it is reversible.
- Consequences of confirmation.

Avoid ambiguous wording.

---

# 15. Loading State

During processing:

- Disable duplicate actions.
- Preserve dialog layout.
- Display loading indicators.
- Prevent accidental multiple submissions.

---

# 16. Error Handling

Errors shall:

- Preserve dialog state.
- Display meaningful feedback.
- Allow recovery where appropriate.
- Avoid unexpected dialog closure.

---

# 17. Accessibility

Dialogs shall support:

- Keyboard navigation.
- Focus trapping.
- Screen readers.
- Meaningful titles.
- Escape behavior (where appropriate).
- Focus restoration when closed.

Accessibility shall never regress.

---

# 18. Performance

Avoid:

- Duplicate dialogs.
- Duplicate API requests.
- Unnecessary rendering.
- Memory leaks.
- Nested dialog chains unless required.

Reuse existing dialog infrastructure.

---

# 19. Engineering Contracts

## Confirmation Dialog Contract

Every confirmation dialog shall verify:

✓ Repository buttons reused.

✓ Primary action clearly identified.

✓ Cancel available.

✓ Business message understandable.

✓ No destructive action executed without confirmation.

---

## Form Dialog Contract

Verify:

✓ Layout matches repository.

✓ Validation preserved.

✓ Buttons aligned.

✓ Loading state implemented.

✓ Dialog closes only after successful completion unless repository specifies otherwise.

---

## Preview Dialog Contract

Verify:

✓ Preview independent from download.

✓ Preview independent from delete.

✓ Unsupported files handled.

✓ PDF and image rendering follow repository standards.

---

# 20. Testing

Verify:

- Dialog opens.
- Dialog closes.
- Focus management.
- Form submission.
- Validation.
- Error handling.
- Loading state.
- Accessibility.
- Business workflow.
- Regression scenarios.

---

# 21. Review Checklist

Before completing implementation verify:

✓ Existing dialog reused.

✓ Existing dialog service reused.

✓ Existing sizing preserved.

✓ Existing button layout preserved.

✓ Existing animations preserved.

✓ Existing accessibility preserved.

✓ Existing error handling preserved.

✓ Existing workflows preserved.

✓ Unit tests updated.

---

# 22. Non-Negotiable Rules

The AI shall never:

- Introduce a second dialog framework.
- Break focus management.
- Close dialogs unexpectedly on errors.
- Duplicate dialog templates.
- Introduce inconsistent button ordering.
- Break accessibility.
- Mix dialog responsibilities.
- Ignore repository dialog standards.

---

# 23. Guiding Principle

A dialog is a focused business interaction, not a standalone page.

Every dialog shall integrate seamlessly with the repository, preserve existing user expectations, maintain accessibility, and support business workflows without introducing unnecessary complexity.

The AI shall treat dialogs as reusable workflow containers that prioritize consistency, clarity, and stability.