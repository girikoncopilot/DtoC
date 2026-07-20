# 08 - Angular Forms

**Version:** 1.0

**Status:** Stable

**Classification:** Angular Engineering Standard

---

# 1. Purpose

This document defines the engineering standards for designing, extending, and maintaining forms within Angular applications.

Forms are the primary interface between users and business processes. They must provide a predictable, accessible, and consistent experience while preserving the repository's existing architecture, UI standards, and business logic.

This document applies to:

- Create forms
- Edit forms
- Search forms
- Filter forms
- Dialog forms
- Wizard forms
- Inline editing
- Table filter rows
- Upload forms

---

# 2. Repository First Principle

Before creating or modifying any form:

Analyze the repository.

Identify:

- Existing form implementations
- Shared form components
- Existing field layouts
- Existing validators
- Existing form styles
- Existing SCSS templates
- Existing date controls
- Existing dropdown implementations
- Existing autocomplete implementations
- Existing upload controls

The repository's implementation is the primary reference.

Reuse existing form patterns wherever possible.

Do not introduce a new form architecture.

---

# 3. Form Philosophy

A form is a structured representation of business data.

The form shall:

- Collect data accurately
- Prevent invalid input
- Guide users through completion
- Preserve business rules
- Maintain visual consistency
- Support accessibility
- Remain responsive

Forms should simplify business processes rather than expose technical implementation.

---

# 4. Form Architecture

Follow the repository's established form architecture.

Determine whether the application uses:

- Reactive Forms
- Template-driven Forms
- Custom Form Controls
- Shared Form Components

Continue using the existing approach.

Do not migrate between form architectures unless explicitly required.

---

# 5. Form Structure

Organize forms logically.

Group related fields together.

Separate unrelated information into distinct sections.

Avoid excessively long forms.

Maintain consistent spacing and alignment.

Field order should follow the natural business workflow.

---

# 6. Existing Component Reuse

Before creating a new control:

Search the repository for an existing implementation.

Examples include:

- Date Picker
- Dropdown
- Multi-select
- Autocomplete
- Search Box
- Upload Control
- Rich Text Editor
- Toggle
- Checkbox
- Radio Group
- Numeric Input

Reuse existing components whenever possible.

Avoid duplicate implementations.

---

# 7. Field Consistency

Equivalent fields shall behave identically throughout the application.

Examples:

Every Date field should:

- Use the same date picker
- Use the same display format
- Use the same placeholder
- Use the same validation
- Use the same icon placement

Every Search field should:

- Behave consistently
- Use consistent styling
- Use the same clear behavior

Consistency reduces user learning effort.

---

# 8. Labels and Placeholders

Labels shall clearly describe the business meaning of the field.

Placeholders provide examples, not labels.

Avoid ambiguous terminology.

Maintain consistent capitalization throughout the application.

---

# 9. Validation

Validation rules originate from business requirements.

Implement:

- Required validation
- Length validation
- Format validation
- Range validation
- Business rule validation

Reuse existing validators whenever possible.

Validation messages shall be clear, specific, and actionable.

---

# 10. Error Presentation

Display validation feedback close to the affected field.

Avoid generic error messages.

Errors should explain:

- What is wrong
- Why it is wrong
- How the user can correct it

The form shall never enter an inconsistent state after validation fails.

---

# 11. Date Controls

Before implementing any date field:

Search for an existing compact date input within the repository.

Reuse:

- HTML structure
- SCSS
- Calendar toggle implementation
- Placeholder format
- Input spacing

Do not compose a new date picker using default Angular Material components if an existing implementation exists.

If a new implementation is unavoidable:

- Calendar icon shall render inside the input.
- Placeholder must remain fully visible.
- Icon shall not overflow the field.
- Input padding shall reserve icon space.
- Date controls shall align with adjacent controls.

Default framework styling shall not override the application's design system.

---

# 12. Dropdowns and Selection Controls

Reuse existing dropdown implementations.

Support:

- Keyboard navigation
- Search (where applicable)
- Multi-select (if required)
- Disabled state
- Loading state
- Empty state

Dropdown behavior shall remain consistent throughout the application.

---

# 13. Search and Filter Forms

Search forms shall integrate with:

- Sorting
- Filtering
- Pagination

Search criteria shall not unexpectedly reset existing filters unless explicitly required.

Filter controls shall preserve existing application behavior.

---

# 14. Responsive Layout

Forms shall adapt to different screen sizes while preserving usability.

Maintain:

- Consistent spacing
- Logical grouping
- Readable labels
- Accessible controls

Preserve the observed sizing, spacing, and grouping relationships from approved design evidence.

Do not allow default equal-width stretching to replace a visibly compact grouped control row unless the repository already uses that pattern for the same form context.

Responsive behavior shall follow the repository's existing layout system.

---

# 15. Accessibility

Forms shall support:

- Keyboard navigation
- Screen readers
- Visible focus indicators
- Semantic labels
- ARIA attributes where appropriate

Accessibility shall never regress when extending existing forms.

---

# 16. Performance

Avoid:

- Duplicate validators
- Duplicate subscriptions
- Recreating form controls unnecessarily
- Expensive template expressions

Reuse shared validators and existing form utilities.

---

# 17. Unit Testing

Every form modification shall include unit tests where applicable.

Tests should verify:

- Initial state
- Validation
- Required fields
- User interaction
- Error messages
- Business rules
- Submission behavior
- Disabled state
- Edge cases

Existing tests shall continue passing.

---

# 18. Review Checklist

Before implementation verify:

✓ Existing form analyzed.

✓ Existing controls reused.

✓ Existing validators reused.

✓ Existing styles reused.

✓ Business rules preserved.

✓ Validation implemented.

✓ Accessibility maintained.

✓ Responsive layout preserved.

✓ Performance maintained.

✓ Unit tests added or updated.

---

# 19. Non-Negotiable Rules

The AI shall never:

- Replace the repository's form architecture.
- Introduce inconsistent field behavior.
- Duplicate validators.
- Create new controls when reusable ones exist.
- Use default framework styling when repository styling exists.
- Break existing validation.
- Change unrelated form behavior.
- Introduce accessibility regressions.

---

# 20. Guiding Principle

A form should feel familiar regardless of where it appears in the application.

Every field, validator, interaction, and layout decision should reinforce consistency with the repository's existing design system and business workflows.

The highest measure of success is that users cannot distinguish newly implemented forms from those originally built by the development team.
 
