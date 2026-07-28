# AI Engineering Framework

## 03 - Engineering Patterns

### 15 - Authentication Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining authentication and authorization functionality within Angular applications.

Authentication establishes user identity.

Authorization determines what authenticated users are permitted to access.

Every authentication implementation shall provide a secure, consistent, repository-aligned, and maintainable solution while preserving existing security architecture.

---

# 2. Scope

This pattern applies to:

- Login
- Logout
- Session Management
- JWT Authentication
- OAuth Authentication
- Route Guards
- Permission Checks
- Role-Based Access Control (RBAC)
- Token Refresh
- Multi-factor Authentication (if supported)
- User Identity
- Access Control

---

# 3. Pattern Activation

Apply this pattern only when the Jira includes:

- Login
- Logout
- Authentication
- Authorization
- Permissions
- Roles
- Access Control
- Session
- Token
- JWT
- OAuth
- Route Guards
- User Identity

Do not activate this pattern for features that merely consume authenticated APIs without changing authentication behavior.

---

# 4. Repository First Principle

Before implementing authentication:

Analyze the repository.

Identify:

- Existing authentication service
- Existing authorization service
- Existing guards
- Existing interceptors
- Existing token management
- Existing permission model
- Existing session handling
- Existing routing

Reuse existing security infrastructure.

Never introduce a second authentication architecture.

---

# 5. Authentication Philosophy

Authentication is infrastructure.

Business features should consume authentication.

They should never redefine authentication.

Authentication should remain centralized, predictable, and reusable.

---

# 6. Repository Discovery

Determine:

- Existing login flow
- Existing logout flow
- Existing token storage
- Existing route guards
- Existing permission service
- Existing interceptor
- Existing refresh token mechanism

Reuse before creating.

---

# 7. Authentication Lifecycle

Authentication shall follow:

User Action

↓

Credential Validation

↓

Authentication Request

↓

Identity Verification

↓

Token Generation

↓

Session Creation

↓

Permission Resolution

↓

Application Access

Reuse the repository lifecycle.

---

# 8. Authorization

Authorization shall determine:

- Accessible routes
- Accessible features
- Accessible actions
- Accessible APIs
- Accessible UI components

Authorization decisions shall remain centralized.

---

# 9. Route Protection

Reuse existing route guards.

Protect:

- Pages
- Child Routes
- Lazy Modules
- Administrative Features

Never duplicate guard logic.

---

# 10. Token Management

Reuse repository implementation.

Support:

- Access Tokens
- Refresh Tokens
- Token Expiration
- Secure Storage
- Automatic Refresh

Token lifecycle shall remain consistent.

---

# 11. Session Management

Session handling shall support:

- Session creation
- Session expiration
- Session renewal
- Logout
- Timeout handling

Session state shall remain synchronized across the application.

---

# 12. Permission Management

Permissions shall:

- Follow repository model.
- Be centrally managed.
- Be reusable.
- Avoid hardcoded values.

Permission logic shall never be duplicated.

---

# 13. UI Integration

Authentication shall integrate naturally with:

- Navigation
- Menus
- Buttons
- Protected Actions
- Dialogs
- Dashboard Widgets

UI visibility shall reflect authorization rules.

---

# 14. Error Handling

Handle:

- Invalid credentials
- Expired tokens
- Unauthorized requests
- Forbidden requests
- Session expiration
- Network failures

Provide meaningful recovery actions.

---

# 15. Security

Never:

- Store secrets in code.
- Expose tokens.
- Bypass repository authentication.
- Hardcode credentials.
- Skip permission checks.

Repository security standards are mandatory.

---

# 16. Accessibility

Authentication workflows shall support:

- Keyboard navigation
- Screen readers
- Accessible validation
- Focus management
- Error announcements

Accessibility shall never regress.

---

# 17. Performance

Avoid:

- Duplicate authentication requests
- Duplicate permission checks
- Unnecessary token refreshes
- Duplicate interceptors

Reuse repository infrastructure.

---

# 18. Engineering Contracts

## Login Contract

Verify:

✓ Existing authentication service reused.

✓ Existing validation reused.

✓ Existing session handling reused.

✓ Existing navigation reused.

---

## Authorization Contract

Verify:

✓ Existing permission service reused.

✓ Existing guards reused.

✓ Existing roles reused.

✓ Existing access control preserved.

---

## Session Contract

Verify:

✓ Existing token management reused.

✓ Existing refresh strategy reused.

✓ Existing logout behavior preserved.

✓ Existing timeout handling preserved.

---

# 19. Testing

Verify:

- Login
- Logout
- Invalid credentials
- Expired session
- Unauthorized access
- Route guards
- Permission checks
- Token refresh
- Accessibility
- Regression scenarios

---

# 20. Review Checklist

Before completing implementation verify:

✓ Existing authentication reused.

✓ Existing authorization reused.

✓ Existing guards reused.

✓ Existing interceptors reused.

✓ Existing permissions reused.

✓ Existing session management reused.

✓ Existing accessibility preserved.

✓ Security preserved.

✓ Unit tests updated.

---

# 21. Non-Negotiable Rules

The AI shall never:

- Create a second authentication framework.

- Duplicate permission logic.

- Hardcode credentials.

- Bypass authorization.

- Ignore repository guards.

- Replace repository security infrastructure.

- Break existing authentication workflows.

- Introduce security regressions.

---

# 22. Guiding Principle

Authentication is shared application infrastructure.

Every authentication implementation shall extend the repository's existing security architecture, preserve authorization rules, maintain session consistency, and provide secure, predictable behavior across the application.

The AI shall treat authentication as reusable infrastructure rather than feature-specific logic.