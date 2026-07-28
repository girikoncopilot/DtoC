### 03 - Angular Template Standards
 
**Version:** 1.1
 
**Status:** Stable
 
**Classification:** Angular Engineering Standard
 
---
 
# 1. Purpose
 
This document defines the engineering standards for Angular HTML templates and SCSS styling.
 
Templates are responsible for rendering the user interface.
 
SCSS is responsible for implementing the application's visual language.
 
Neither should contain business logic.
 
The objective is to ensure every implementation appears as though it was created by the original development team.
 
---
 
# 2. Scope
 
These standards apply to:
 
- Angular HTML Templates

- Component SCSS

- Angular Material Components

- Tables

- Forms

- Dialogs

- Upload Controls

- Preview Dialogs

- Dashboards

- Filters

- Search

- Responsive Layouts
 
---
 
# 3. Template Philosophy
 
Templates describe **what the user sees**.
 
They do not determine **how the business behaves**.
 
Templates should remain:
 
- Declarative

- Predictable

- Accessible

- Consistent

- Maintainable
 
Business logic belongs outside HTML.
 
---
 
# 4. Repository First Principle
 
Before writing any HTML or SCSS:
 
Search the repository.
 
Locate existing implementations of:
 
- Similar pages

- Similar components

- Similar tables

- Similar dialogs

- Similar upload controls

- Similar preview implementations

- Similar forms

- Similar filters

- Similar dashboards
 
The repository defines the implementation standard.
 
Never invent new UI patterns when equivalent implementations already exist.
 
---
 
# 5. Repository CSS Standards (Mandatory)
 
The repository's shared CSS/SCSS implementation is the authoritative source for all visual styling.
 
Before creating or modifying component SCSS, locate and analyze:
 
- Global styles.scss

- Theme files

- Angular Material theme overrides

- Shared variables

- Shared mixins

- Shared utility classes

- Shared component styles

- Design tokens

- Typography definitions

- Layout utilities

- Existing SCSS for similar components
 
The AI shall summarize the discovered styling approach before implementation.
 
The summary shall include:
 
- Typography system

- Color palette

- Spacing scale

- Grid system

- Layout utilities

- Form styling

- Table styling

- Dialog styling

- Responsive breakpoints

- Angular Material overrides
 
These standards become the source of truth for all styling decisions.
 
---
 
# 6. CSS Reuse Policy
 
Always reuse repository styling before introducing new SCSS.
 
Priority:
 
1. Existing utility class

2. Existing shared component class

3. Existing SCSS variable

4. Existing design token

5. Existing mixin

6. Existing Angular Material override

7. Existing responsive utility
 
Only if none exist may new SCSS be introduced.
 
New SCSS shall remain component-scoped.
 
---
 
# 7. CSS Decision Matrix
 
Need styling?
 
↓
 
Search repository styles.
 
↓
 
Existing class?
 
↓
 
YES
 
↓
 
Reuse class.
 
↓
 
NO
 
↓
 
Existing variable?
 
↓
 
YES
 
↓
 
Reuse variable.
 
↓
 
NO
 
↓
 
Existing mixin?
 
↓
 
YES
 
↓
 
Reuse mixin.
 
↓
 
NO
 
↓
 
Existing design token?
 
↓
 
YES
 
↓
 
Reuse token.
 
↓
 
NO
 
↓
 
Create minimal component-scoped SCSS.
 
↓
 
Document why.
 
---
 
# 8. Angular Material Standards
 
Angular Material shall be treated as the foundation—not the final implementation.
 
Repository implementations override Angular Material defaults.
 
Before introducing any Material component:
 
Search for an existing implementation.
 
Reuse:
 
- HTML

- Wrapper structure

- SCSS

- Material overrides
 
Never rely solely on framework defaults if repository standards differ.
 
---
 
# 9. Layout Standards
 
Layouts shall remain visually balanced.
 
Maintain:
 
- Column alignment

- Row alignment

- Toolbar alignment

- Grid consistency

- Equal spacing

- Observed sizing relationships between adjacent controls

- Observed grouping relationships between related controls

- Existing margins

- Existing paddings
 
Avoid visually uneven layouts.

Do not allow default full-width stretching to override a visibly compact grouped layout shown in Figma or other approved design evidence.
 
---
 
# 10. Spacing Standards
 
Spacing shall follow the repository spacing system.

Do not invent spacing values.
 
Reuse:
 
- Existing spacing variables

- Utility classes

- Design tokens
 
When introducing new spacing, match the repository rhythm.

Columns within tables shall remain visually balanced.

When design evidence shows compact grouped controls, preserve the observed spacing rhythm and control sizing relationships while using repository spacing tokens or utilities wherever possible.
 
---
 
# 11. Visual Consistency
 
Maintain consistency in:
 
- Typography

- Colors

- Shadows

- Elevation

- Border radius

- Icons

- Buttons

- Inputs

- Cards

- Dialogs

- Tables
 
Visual consistency outweighs isolated perfection.
 
---
 
# 12. Interactive Elements
 
Each interactive element owns exactly one action.
 
Correct:
 
Filename → Preview
 
Download Icon → Download
 
Delete Icon → Delete
 
Menu Icon → Menu
 
Incorrect:
 
Entire row clickable while containing independent actions.
 
Parent containers shall never override child interactions.
 
---
 
# 13. Click Handling
 
Click handlers belong only to the intended interactive element.
 
Never attach click events to layout containers.
 
Stop propagation only when absolutely necessary.
 
Nested click conflicts are prohibited.
 
---
 
# 14. Tables
 
Tables shall reuse existing repository implementations.
 
Maintain:
 
- Existing column widths

- Existing spacing

- Existing typography

- Existing sorting

- Existing filtering

- Existing pagination
 
Do not independently resize one column unless required by the Jira.
 
Any layout adjustment shall preserve overall table balance.
 
---
 
# 15. Forms
 
Reuse existing form structure.
 
Maintain consistency in:
 
- Labels

- Validation

- Required indicators

- Input heights

- Input spacing

- Icon positioning
 
---
 
# 16. Upload & Preview
 
Upload behavior shall follow Jira business rules.
 
If a file type is accepted for upload and the Jira does not explicitly restrict preview, successful upload implies successful preview.
 
Supported preview types shall reuse existing repository preview implementations.
 
Preview interactions shall never interfere with download, delete, or menu actions.
 
---
 
# 17. Accessibility
 
Templates shall support:
 
- Keyboard navigation

- Screen readers

- Semantic HTML

- ARIA

- Focus management

- Logical tab order
 
Accessibility is mandatory.
 
---
 
# 18. Performance
 
Templates shall avoid:
 
- Deep nesting

- Duplicate rendering

- Expensive expressions

- Repeated calculations
 
Use Angular best practices for efficient rendering.
 
---
 
# 19. Template Review Checklist
 
Before implementation verify:
 
✓ Repository HTML analyzed.
 
✓ Repository SCSS analyzed.
 
✓ Global CSS standards reused.
 
✓ Existing variables reused.
 
✓ Existing mixins reused.
 
✓ Existing utilities reused.
 
✓ Angular Material overrides respected.
 
✓ Layout consistency maintained.
 
✓ Interactive elements remain independent.
 
✓ Accessibility preserved.
 
✓ Responsive behavior maintained.
 
✓ No business logic in templates.
 
---
 
# 20. Non-Negotiable Rules
 
The AI shall never:
 
- Ignore repository styling.

- Duplicate global CSS.

- Duplicate utility classes.

- Hard-code colors when variables exist.

- Hard-code spacing when tokens exist.

- Introduce inline styles.

- Use `!important` unless already required by repository standards.

- Break existing visual consistency.

- Override child interactions using parent click handlers.

- Place business logic inside HTML.
 
---
 
# 21. Guiding Principle
 
The repository—not Angular Material—is the primary source of UI truth.
 
Every new template and every new SCSS file shall extend the application's existing design system rather than creating a new one.
 
The objective is for every implementation to be visually, structurally, and behaviorally indistinguishable from the rest of the application.
 
