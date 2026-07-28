# 13 - Accessibility Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Accessibility

---

# 2. Purpose

The Accessibility Skill provides all engineering knowledge required for implementing accessible user interfaces and interactions within the repository.

The Accessibility Skill does not define accessibility implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Accessibility
- WCAG compliance
- Screen reader support
- Keyboard navigation
- Focus management
- Color contrast
- Accessible forms
- Accessible tables
- ARIA attributes
- Semantic HTML
- Accessibility audit
- Accessibility improvements

The Accessibility Skill shall activate whenever the implementation requires accessible user experiences or compliance with accessibility standards.

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

- accessibility.md

Load any additional dependencies declared by the Accessibility Pattern.

---

# 7. Repository Context

Analyze:

- Existing accessibility implementations
- Shared accessible components
- Existing focus management
- Existing keyboard interactions
- Existing ARIA usage
- Existing accessibility utilities
- Existing UI conventions

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Accessibility Skill includes:

✓ Keyboard accessibility

✓ Screen reader compatibility

✓ Focus management

✓ Semantic HTML

✓ ARIA implementation

✓ Accessible navigation

✓ Accessibility testing

The Accessibility Skill does not automatically include:

✗ Forms

✗ Tables

✗ Uploads

✗ Authentication

✗ Dashboard

✗ Reports

These capabilities require their own Skills.

The Accessibility Skill applies accessibility standards to those capabilities when they are also loaded.

---

# 9. Expected Outputs

The Accessibility Skill enables downstream agents to:

- Plan accessibility improvements.
- Implement accessible user experiences.
- Validate accessibility requirements.
- Review accessibility compliance.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Accessibility Skill is successful when:

✓ Required accessibility standards loaded.

✓ Repository accessibility conventions identified.

✓ Existing accessible components reused.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Accessibility Skill shall never:

- Define accessibility engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Accessibility Skill provides a deterministic mechanism for loading all engineering knowledge required for accessibility-related work while preserving the Instructions Layer as the authoritative source of engineering standards.