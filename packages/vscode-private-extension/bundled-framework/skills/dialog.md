# 07 - Dialogs Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Dialogs

---

# 2. Purpose

The Dialogs Skill provides all engineering knowledge required for implementing modal dialogs, confirmation dialogs, popups, and overlay interactions within the repository.

The Dialogs Skill does not define dialog implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Modal dialog
- Confirmation dialog
- Popup
- Overlay
- Form dialog
- Edit dialog
- Create dialog
- Delete confirmation
- Warning dialog
- Information dialog

The Dialogs Skill shall activate whenever user interaction requires a temporary overlay or modal experience.

---

# 4. Required Core Documents

Load:

01-Core/

- Core Role
- Core Workflow
- Planning Engine
- Implementation Engine
- Testing Engine
- Validation Engine

---

# 5. Required Angular Documents

Load:

02-Angular/

- angular-philosophy.md
- angular-standards.md
- angular-ui-guidelines.md
- angular-testing.md

Load only if available within the framework.

---

# 6. Required Engineering Patterns

Load:

03-Engineering-Patterns/

- dialogs.md

Load any additional dependencies declared by the Dialog Pattern.

---

# 7. Repository Context

Analyze:

- Existing dialog components
- Shared modal components
- Existing confirmation dialogs
- Existing overlay services
- Existing dialog utilities
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Dialogs Skill includes:

✓ Modal dialogs

✓ Confirmation dialogs

✓ Information dialogs

✓ Warning dialogs

✓ Form dialogs

✓ Overlay interactions

✓ Dialog testing

The Dialogs Skill does not automatically include:

✗ Forms

✗ Uploads

✗ Authentication

✗ Dashboard

✗ Reports

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Dialogs Skill enables downstream agents to:

- Plan dialog implementations.
- Implement dialog functionality.
- Validate dialog behavior.
- Review dialog quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Dialogs Skill is successful when:

✓ Required dialog standards loaded.

✓ Repository dialog assets identified.

✓ Existing reusable dialog components leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Dialogs Skill shall never:

- Define dialog engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Dialogs Skill provides a deterministic mechanism for loading all engineering knowledge required for dialog-related work while preserving the Instructions Layer as the authoritative source of engineering standards.