### 02 - Angular Component Standards

**Version:** 1.0  
**Status:** Stable  
**Classification:** Angular Engineering Standard

---

# 1. Purpose

This document defines the engineering standards for Angular components within the AI Engineering Framework.

A component represents the presentation layer of an Angular application. Its primary responsibility is to render data, capture user interactions, and coordinate with the appropriate services.

Components must remain lightweight, predictable, reusable, and easy to maintain.

---

# 2. Scope

These standards apply to:

- Standalone Components
- Feature Components
- Shared Components
- Dialog Components
- Table Components
- Form Components
- Dashboard Components
- Widget Components
- Layout Components

Every Angular component shall comply with these standards unless explicitly approved otherwise.

---

# 3. Component Philosophy

A component is **not** the place where business decisions are made.

A component exists to:

- Display information.
- Accept user input.
- Emit user intent.
- Coordinate application behavior.

A component should answer:

> **"How should this be displayed?"**

It should never answer:

> **"How should the business work?"**

Business rules belong elsewhere.

---

# 4. Single Responsibility Principle

Every component shall have one clearly defined responsibility.

Examples:

Good

- Notes Table
- File Upload Dialog
- User Card
- Dashboard Widget
- Date Filter

Poor

- Notes Manager
- Dashboard Controller
- Master Component
- Generic Utility Component

If a component requires multiple unrelated responsibilities, split it into smaller components.

---

# 5. Component Classification

Components generally belong to one of the following categories.

## Feature Components

Responsible for a complete feature.

Examples:

- Notes
- Dashboard
- Ticket History

Feature components coordinate other components.

---

## Presentational Components

Responsible only for rendering.

Receive data.

Emit events.

Contain no business logic.

---

## Shared Components

Reusable across multiple modules.

Examples:

- Confirmation Dialog
- File Upload
- Preview Dialog
- Pagination
- Loading Spinner

Shared components should remain generic.

---

## Layout Components

Responsible for page structure.

Examples:

- Header
- Sidebar
- Toolbar
- Shell

They should not own feature logic.

---

# 6. Component Responsibilities

A component may:

- Render UI
- Handle user events
- Manage local UI state
- Call services
- Emit outputs
- Receive inputs
- Display validation
- Coordinate dialogs

A component shall not:

- Contain reusable business logic
- Duplicate service functionality
- Perform unrelated calculations
- Duplicate validation rules
- Own application-wide state

---

# 7. Component Size Guidelines

Components should remain focused.

General guidance:

- Small components are preferred.
- Long methods indicate poor separation.
- Large templates indicate multiple responsibilities.

If the component becomes difficult to understand without scrolling extensively, evaluate whether responsibilities should be divided.

Complexity—not line count—should drive refactoring decisions.

---

# 8. Inputs and Outputs

Use Inputs for data.

Use Outputs for user intent.

Examples:

Input

- Notes
- Selected User
- Configuration
- Permissions

Output

- Save
- Delete
- Preview
- Cancel
- Filter Changed

Outputs should describe intent rather than implementation.

Example:

Good

```
saveClicked
```

Poor

```
callSaveApi
```

---

# 9. Component Communication

Preferred communication hierarchy:

Parent

↓

Input

↓

Child

↓

Output

↓

Parent

Shared state should be coordinated through services or approved state management mechanisms.

Avoid sibling-to-sibling communication.

---

# 10. Lifecycle Usage

Only implement Angular lifecycle hooks when required.

Each lifecycle hook shall have a clear purpose.

Avoid placing unrelated initialization logic inside lifecycle methods.

Initialization should remain organized and readable.

---

# 11. Local State Management

Components may own:

- Loading indicators
- Expanded rows
- Selected tabs
- Open panels
- Temporary UI state

Components shall not own:

- Shared application state
- Business entities duplicated elsewhere
- Cached API responses already managed by services

Local state should remain local.

---

# 12. Service Interaction

Components communicate with services.

Services perform work.

Components coordinate.

Components should not know implementation details of the service.

Prefer expressive service methods.

Good

```
notesService.getNotes()
```

Poor

```
http.get(...)
```

inside the component.

---

# 13. Template Delegation

Complex template logic should be avoided.

Templates should primarily:

- Display values
- Bind properties
- Bind events
- Display conditions
- Iterate collections

Avoid placing business calculations directly inside templates.

Templates should remain declarative.

---

# 14. UI Interaction Standards

Every interactive element shall own exactly one responsibility.

Examples

Filename

→ Preview

Download Icon

→ Download

Delete Icon

→ Delete

Overflow Menu

→ Context Menu

Incorrect

Entire row clickable while containing independent actions.

Interactive behaviors must never interfere with one another.

Nested click conflicts are prohibited.

---

# 15. Component Reuse Strategy

Before creating a component:

Search repository.

↓

Existing component?

↓

Can configure?

↓

Reuse.

↓

Cannot configure?

↓

Extend.

↓

Cannot extend?

↓

Create new component.

New components are the final option.

---

# 16. Error Handling

Components shall display appropriate user feedback.

Examples:

- Validation errors
- Empty states
- Loading states
- Retry actions
- Error messages

Components should never fail silently.

---

# 17. Performance Considerations

Components should minimize unnecessary rendering.

Avoid:

- Duplicate subscriptions
- Repeated expensive calculations
- Unnecessary DOM updates
- Recreating immutable configuration

Performance should be considered during implementation.

---

# 18. Accessibility

Components shall support:

- Keyboard navigation
- Focus management
- Semantic HTML
- Screen readers
- Appropriate labels
- Visible focus indication

Accessibility is a default requirement.

---

# 19. Testing Expectations

Every component should be testable.

Component tests should verify:

- Rendering
- Inputs
- Outputs
- User interactions
- Conditional UI
- Error states
- Accessibility behavior

Tests should focus on observable behavior rather than implementation details.

---

# 20. Component Review Checklist

Before implementation verify:

✓ Component has one responsibility.

✓ Business logic remains outside the component.

✓ Existing components evaluated for reuse.

✓ Inputs and Outputs are appropriately defined.

✓ UI interactions remain independent.

✓ Local state only.

✓ Services coordinate business logic.

✓ Accessibility maintained.

✓ Component remains testable.

✓ Performance considerations addressed.

---

# 21. Non-Negotiable Rules

The AI shall never:

- Create massive "God Components."
- Duplicate existing components.
- Place business logic inside templates.
- Mix unrelated responsibilities.
- Override child interactions using parent click handlers.
- Introduce hidden component dependencies.
- Ignore accessibility.
- Break repository component patterns.

---

# 22. Guiding Principle

A well-engineered Angular component is small, focused, reusable, predictable, and easy to understand.

It should behave as a thin presentation layer that coordinates user interaction while delegating business behavior to the appropriate architectural layer.

Every component should appear as though it was designed by the original development team, integrate naturally into the existing application, and remain maintainable throughout the lifetime of the product.