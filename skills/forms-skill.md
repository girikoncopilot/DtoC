# 01 - Forms Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Forms

---

# 2. Purpose

The Forms Skill provides all engineering knowledge required for creating, modifying, validating, and maintaining forms within the repository.

The Forms Skill does not contain form implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Create Form
- Edit Form
- View Form
- Form Validation
- Form Submission
- Form Reset
- Form Wizard
- Dynamic Form
- Form Fields
- Form Controls
- Form Error Handling

The Forms Skill shall activate whenever user interaction relies on structured data entry.

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
- angular-forms.md
- angular-ui-guidelines.md
- angular-testing.md

Load only if available within the framework.

---

# 6. Required Engineering Patterns

Load:

03-Engineering-Patterns/

- forms.md

Load any additional form-related pattern dependencies declared by the Forms Pattern.

---

# 7. Repository Context

Analyze:

- Existing form components
- Shared form controls
- Shared validators
- Existing error handling
- Existing form services
- Existing UI templates
- Existing CSS templates

Repository reuse shall be prioritized.

---

# 8. Capability Boundaries

The Forms Skill includes:

✓ Form creation

✓ Form modification

✓ Validation

✓ Submission

✓ Error handling

✓ Form testing

The Forms Skill does not automatically include:

✗ Uploads

✗ Tables

✗ Authentication

✗ Dashboard

✗ Reports

Additional capabilities require separate Skills.

---

# 9. Expected Outputs

The Forms Skill enables downstream agents to:

- Plan form implementations.
- Implement forms.
- Validate forms.
- Review forms.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Forms Skill is successful when:

✓ Required form standards loaded.

✓ Repository form patterns identified.

✓ Existing form assets reused.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Forms Skill shall never:

- Define form standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate code.

- Expand into unrelated capabilities.

The Instructions Layer remains the source of truth.

---

# 12. Guiding Principle

The Forms Skill provides a deterministic mechanism for loading all engineering knowledge required for form-related work while preserving the Instructions Layer as the single source of truth.