# 09 - Preview Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Preview

---

# 2. Purpose

The Preview Skill provides all engineering knowledge required for implementing preview capabilities within the repository.

The Preview Skill does not define preview implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- File preview
- Image preview
- PDF preview
- Document preview
- Media preview
- Preview dialog
- Thumbnail preview
- Attachment preview
- Preview pane
- View uploaded file

The Preview Skill shall activate whenever users need to view content without downloading or editing it.

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

- preview.md

Load any additional dependencies declared by the Preview Pattern.

---

# 7. Repository Context

Analyze:

- Existing preview components
- Shared preview dialogs
- Existing media viewers
- Existing document viewers
- Existing thumbnail generators
- Existing file services
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Preview Skill includes:

✓ Image preview

✓ PDF preview

✓ Document preview

✓ Media preview

✓ Thumbnail preview

✓ Preview dialogs

✓ Preview testing

The Preview Skill does not automatically include:

✗ File upload

✗ Forms

✗ Authentication

✗ Dashboard

✗ Reports

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Preview Skill enables downstream agents to:

- Plan preview implementations.
- Implement preview functionality.
- Validate preview behavior.
- Review preview quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Preview Skill is successful when:

✓ Required preview standards loaded.

✓ Repository preview assets identified.

✓ Existing reusable preview implementations leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Preview Skill shall never:

- Define preview engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Preview Skill provides a deterministic mechanism for loading all engineering knowledge required for preview-related work while preserving the Instructions Layer as the authoritative source of engineering standards.