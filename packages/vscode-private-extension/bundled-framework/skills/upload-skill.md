# 08 - Uploads Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Uploads

---

# 2. Purpose

The Uploads Skill provides all engineering knowledge required for implementing file upload capabilities within the repository.

The Uploads Skill does not define upload implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- File upload
- Image upload
- Document upload
- Multiple file upload
- Drag and drop upload
- File attachment
- Import files
- Upload progress
- File validation
- Upload retry

The Uploads Skill shall activate whenever users upload files into the application.

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

- uploads.md

Load any additional dependencies declared by the Upload Pattern.

---

# 7. Repository Context

Analyze:

- Existing upload components
- Shared upload services
- Existing file validation utilities
- Existing upload APIs
- Existing drag-and-drop implementations
- Existing progress indicators
- Existing CSS templates

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Uploads Skill includes:

✓ Single file upload

✓ Multiple file upload

✓ Drag and drop upload

✓ File validation

✓ Upload progress

✓ Upload retry

✓ Upload testing

The Uploads Skill does not automatically include:

✗ File preview

✗ Forms

✗ Authentication

✗ Dashboard

✗ Reports

These capabilities require separate Skills.

---

# 9. Expected Outputs

The Uploads Skill enables downstream agents to:

- Plan upload implementations.
- Implement upload functionality.
- Validate upload behavior.
- Review upload quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Uploads Skill is successful when:

✓ Required upload standards loaded.

✓ Repository upload assets identified.

✓ Existing reusable upload implementations leveraged.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Uploads Skill shall never:

- Define upload engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Uploads Skill provides a deterministic mechanism for loading all engineering knowledge required for upload-related work while preserving the Instructions Layer as the authoritative source of engineering standards.