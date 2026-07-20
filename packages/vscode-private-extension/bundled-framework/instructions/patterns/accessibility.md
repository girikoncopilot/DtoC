# AI Engineering Framework

## 03 - Engineering Patterns

### 16 - Accessibility Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Cross-Cutting Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing and maintaining accessibility throughout Angular applications.

Accessibility is not an optional enhancement or a separate feature.

It is a quality attribute that applies to every user interface, interaction, workflow, and business capability implemented within the repository.

The objective is to ensure that applications are usable by the widest possible range of users while preserving repository consistency and maintainability.

---

# 2. Scope

This pattern applies to every user interface including:

- Forms
- Tables
- Dialogs
- Upload Components
- Preview Components
- Dashboards
- Reports
- Navigation
- Menus
- Buttons
- Charts
- Authentication
- Search
- Filters
- Sorting
- Pagination

Accessibility applies regardless of feature complexity.

---

# 3. Pattern Activation

Accessibility shall be evaluated whenever a Jira modifies or introduces user-facing functionality.

This pattern does not need explicit mention in the Jira.

If a feature introduces or modifies a user interaction, accessibility must be considered.

---

# 4. Repository First Principle

Before implementing accessibility improvements:

Analyze the repository.

Identify:

- Existing accessibility practices
- Shared accessibility utilities
- Existing ARIA usage
- Existing keyboard navigation
- Existing focus management
- Existing screen reader support
- Existing semantic HTML structure

Reuse repository implementations.

Never introduce conflicting accessibility patterns.

---

# 5. Accessibility Philosophy

Accessibility is part of functional correctness.

A feature is not considered complete if it excludes users who rely on:

- Keyboard navigation
- Screen readers
- Assistive technologies
- High zoom levels
- Reduced motion preferences
- Alternative input devices

Accessibility shall be built into the implementation rather than added afterwards.

---

# 6. Repository Discovery

Determine:

- Existing accessibility helpers
- Existing reusable directives
- Existing keyboard interactions
- Existing focus utilities
- Existing accessibility testing

Reuse before creating.

---

# 7. Semantic Structure

Prefer semantic HTML over generic containers whenever appropriate.

Examples include:

- Buttons for actions
- Labels for form controls
- Tables for tabular data
- Lists for collections
- Headings for page hierarchy

Avoid using generic elements where semantic elements are more appropriate.

---

# 8. Keyboard Navigation

Every interactive element shall be operable using the keyboard.

Verify:

- Logical tab order
- Visible focus indicators
- Keyboard shortcuts (if supported)
- Escape behavior where appropriate
- Arrow key navigation where repository standard exists

Keyboard users shall not be blocked from completing business workflows.

---

# 9. Focus Management

Focus shall be managed intentionally.

Examples:

Dialogs

↓

Move focus into dialog

Dialog Close

↓

Return focus to triggering element

Validation Error

↓

Move focus to first invalid control (if repository standard)

Focus shall never become trapped unintentionally.

---

# 10. Screen Reader Support

Ensure:

- Meaningful labels
- Descriptive button text
- Form field associations
- Accessible error messages
- Meaningful announcements for dynamic content

Avoid relying solely on visual information.

---

# 11. Forms

Reuse Form Pattern.

Verify:

- Labels associated with controls
- Validation announced appropriately
- Required fields communicated
- Helper text accessible
- Error messages understandable

---

# 12. Tables

Reuse Table Pattern.

Verify:

- Table headers correctly associated
- Sort state communicated
- Filter controls accessible
- Action buttons labeled
- Empty states announced where appropriate

---

# 13. Dialogs

Reuse Dialog Pattern.

Verify:

- Focus enters dialog
- Focus returns after close
- Dialog title announced
- Escape behavior follows repository standards
- Background interaction prevented where required

---

# 14. Uploads and Preview

Reuse Upload Pattern and Preview Pattern.

Verify:

- Upload controls accessible
- Progress communicated
- Preview controls labeled
- Unsupported files communicated clearly

---

# 15. Color and Visual Indicators

Do not rely solely on color to communicate information.

Where color conveys meaning, provide an additional indicator such as:

- Text
- Icons
- Labels
- Patterns

Visual information shall remain understandable to all users.

---

# 16. Responsive Accessibility

Accessibility shall be preserved across supported screen sizes.

Verify:

- Zoom up to repository-supported levels
- Mobile accessibility
- Tablet accessibility
- Orientation changes

Responsive layouts shall not reduce accessibility.

---

# 17. Error Handling

Errors shall:

- Be understandable
- Be announced when appropriate
- Explain corrective action
- Preserve user-entered information whenever possible

Avoid vague or technical messages.

---

# 18. Performance

Accessibility improvements shall not introduce unnecessary performance degradation.

Reuse repository infrastructure.

Avoid duplicate accessibility implementations.

---

# 19. Engineering Contracts

## Keyboard Contract

Verify:

✓ Every interactive element reachable by keyboard.

✓ Focus order logical.

✓ Focus indicators visible.

✓ Keyboard interactions consistent with repository.

---

## Screen Reader Contract

Verify:

✓ Controls labeled.

✓ Dynamic content announced where appropriate.

✓ Tables understandable.

✓ Dialogs announced correctly.

---

## Form Accessibility Contract

Verify:

✓ Labels associated.

✓ Validation accessible.

✓ Required fields communicated.

✓ Errors understandable.

---

# 20. Testing

Verify:

- Keyboard navigation
- Focus management
- Screen reader compatibility
- Form accessibility
- Table accessibility
- Dialog accessibility
- Responsive accessibility
- Error messaging
- Regression scenarios

Accessibility verification shall be included in feature testing.

---

# 21. Review Checklist

Before completing implementation verify:

✓ Existing accessibility patterns reused.

✓ Existing focus behavior preserved.

✓ Existing keyboard navigation preserved.

✓ Existing semantic structure preserved.

✓ Existing labels maintained.

✓ Existing screen reader support preserved.

✓ Responsive accessibility verified.

✓ Unit tests updated where applicable.

---

# 22. Non-Negotiable Rules

The AI shall never:

- Remove existing accessibility support.

- Replace semantic HTML with generic elements without justification.

- Introduce inaccessible custom controls.

- Remove keyboard support.

- Hide important information from assistive technologies.

- Break existing focus management.

- Ignore accessibility during feature implementation.

Accessibility is a mandatory engineering requirement.

---

# 23. Guiding Principle

Accessibility is a fundamental characteristic of high-quality software.

Every implementation shall preserve and improve accessibility while remaining consistent with repository standards, business requirements, and user expectations.

The AI shall treat accessibility as a cross-cutting engineering responsibility that applies to every feature, workflow, and interaction rather than as a separate implementation task.