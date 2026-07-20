# 10 - Authentication Skill

**Version:** 1.0

**Status:** Stable

**Classification:** Capability Manifest

---

# 1. Capability

Authentication

---

# 2. Purpose

The Authentication Skill provides all engineering knowledge required for implementing authentication workflows within the repository.

The Authentication Skill does not define authentication implementation standards.

It loads the standards defined within the Instructions Layer.

---

# 3. Activation Conditions

Activate when Jira requirements involve:

- Login
- Logout
- Authentication
- User Sign In
- Session Management
- Token Management
- JWT Authentication
- OAuth Authentication
- Authentication Guard
- Protected Routes
- Password Reset
- Change Password
- Refresh Token
- Remember Me

The Authentication Skill shall activate whenever user identity verification or authenticated access is required.

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
- angular-routing.md
- angular-ui-guidelines.md
- angular-testing.md

Load only if available within the framework.

---

# 6. Required Engineering Patterns

Load:

03-Engineering-Patterns/

- authentication.md

Load any additional dependencies declared by the Authentication Pattern.

---

# 7. Repository Context

Analyze:

- Existing authentication services
- Existing route guards
- Existing interceptors
- Existing login components
- Existing session management
- Existing token handling
- Existing user context implementation
- Existing authentication APIs

Repository reuse shall always be prioritized.

---

# 8. Capability Boundaries

The Authentication Skill includes:

✓ Login

✓ Logout

✓ Session management

✓ Route guards

✓ Token handling

✓ Authentication interceptors

✓ Password reset

✓ Authentication testing

The Authentication Skill does not automatically include:

✗ Authorization

✗ User Management

✗ Dashboard

✗ Reports

✗ Forms unrelated to authentication

These capabilities require separate Skills or engineering patterns.

---

# 9. Expected Outputs

The Authentication Skill enables downstream agents to:

- Plan authentication implementations.
- Implement authentication functionality.
- Validate authentication behavior.
- Review authentication quality.

The Skill itself produces no implementation artifacts.

---

# 10. Success Criteria

The Authentication Skill is successful when:

✓ Required authentication standards loaded.

✓ Repository authentication assets identified.

✓ Existing authentication implementation reused.

✓ No unrelated framework knowledge loaded.

---

# 11. Non-Negotiable Rules

The Authentication Skill shall never:

- Define authentication engineering standards.

- Duplicate Angular guidance.

- Duplicate Engineering Patterns.

- Generate production code.

- Replace existing authentication architecture without explicit Jira requirements.

- Expand into unrelated capabilities.

The Instructions Layer remains the single source of truth.

---

# 12. Guiding Principle

The Authentication Skill provides a deterministic mechanism for loading all engineering knowledge required for authentication-related work while preserving the Instructions Layer as the authoritative source of engineering standards.