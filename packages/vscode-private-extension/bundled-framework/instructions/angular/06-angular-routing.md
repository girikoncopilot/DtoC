# 06 - Angular Routing

**Version:** 1.0

**Status:** Stable

**Classification:** Angular Engineering Standard

---

# 1. Purpose

This document defines the engineering standards for routing in Angular applications.

Routing connects features, enables navigation, protects application boundaries, and supports deep linking while preserving the repository's existing routing architecture.

Routing must remain predictable, scalable, and consistent with the application's established navigation patterns.

---

# 2. Scope

These standards apply to:

- Application Routes
- Feature Routes
- Lazy Loaded Modules
- Standalone Route Configurations
- Child Routes
- Route Guards
- Route Resolvers
- Breadcrumbs
- Deep Links
- Navigation
- Route Parameters
- Query Parameters

---

# 3. Repository First Principle

Before modifying routing:

Analyze the repository.

Identify:

- Routing architecture
- Lazy loading strategy
- Module organization
- Standalone routing usage
- Route naming conventions
- Guard implementations
- Resolver implementations
- Breadcrumb implementation
- Navigation services

The existing routing strategy is the source of truth.

Do not introduce a different routing architecture.

---

# 4. Routing Philosophy

Routes describe navigation.

They should not contain business logic.

Routing defines:

- How users enter a feature
- How users leave a feature
- Which data is required
- Which permissions are required

Business decisions belong elsewhere.

---

# 5. Route Organization

Routes shall be organized by feature.

Avoid grouping unrelated routes.

Prefer:

Feature

↓

Child Features

↓

Dialogs (if routed)

↓

Details

↓

History

↓

Settings

Maintain repository structure.

---

# 6. Lazy Loading

Follow the repository's existing lazy loading strategy.

If lazy loading is already used:

Continue using it.

If features are eagerly loaded:

Do not convert them unless required by the Jira.

Do not introduce inconsistent loading behavior.

---

# 7. Navigation

Navigation shall be intentional.

Prefer existing navigation helpers or services.

Avoid constructing URLs manually.

Use route configuration rather than hardcoded paths whenever possible.

---

# 8. Route Parameters

Use route parameters only for resource identification.

Examples:

- Note Id
- Ticket Id
- User Id
- Dashboard Id

Do not pass complex business state through route parameters.

---

# 9. Query Parameters

Use query parameters for transient UI state.

Examples:

- Filters
- Search
- Sorting
- Pagination
- Selected Tab

Query parameters should support bookmarking and sharing.

---

# 10. Deep Linking

Every feature that supports direct navigation shall preserve its state when accessed via URL.

Users should be able to:

- Bookmark
- Refresh
- Share

without losing context.

---

# 11. Route Guards

Guards protect navigation.

They may verify:

- Authentication
- Authorization
- Feature access
- Unsaved changes

Guards shall not perform business workflows.

Reuse existing guard implementations whenever possible.

---

# 12. Route Resolvers

Resolvers prepare data before navigation.

Use resolvers only when the repository already follows this pattern or when explicitly required.

Resolvers should not duplicate service logic.

---

# 13. Breadcrumbs

If the repository supports breadcrumbs:

Reuse the existing implementation.

Do not introduce a new breadcrumb mechanism.

Breadcrumb labels shall remain consistent with feature naming.

---

# 14. Navigation Consistency

Navigation behavior shall remain predictable.

Back navigation

Forward navigation

Browser refresh

Deep linking

Bookmarking

must all function correctly.

---

# 15. Error Handling

Handle invalid routes gracefully.

Support:

- Not Found
- Unauthorized
- Invalid Parameters
- Missing Resources

Do not expose runtime exceptions to users.

---

# 16. Performance

Routing shall minimize unnecessary work.

Avoid:

- Duplicate data loading
- Duplicate route definitions
- Unnecessary redirects
- Nested routing complexity

Reuse existing feature boundaries.

---

# 17. Accessibility

Navigation shall support:

- Keyboard users
- Screen readers
- Focus restoration
- Meaningful page titles

Route changes should not reduce accessibility.

---

# 18. Testing Expectations

Routing tests should verify:

- Route accessibility
- Guards
- Resolvers
- Parameter handling
- Query parameters
- Navigation
- Redirects
- Error routes

Mock dependencies where appropriate.

---

# 19. Review Checklist

Before implementation verify:

✓ Existing routing architecture analyzed.

✓ Existing navigation reused.

✓ Existing guards reused.

✓ Existing resolvers reused.

✓ Lazy loading preserved.

✓ Deep linking supported.

✓ Query parameters preserved.

✓ No unnecessary route restructuring.

✓ Routing tests updated.

---

# 20. Non-Negotiable Rules

The AI shall never:

- Replace the repository's routing architecture.
- Introduce a second navigation pattern.
- Hardcode routes when configuration exists.
- Convert eager routes to lazy routes without requirement.
- Introduce duplicate route definitions.
- Place business logic inside routing.

---

# 21. Guiding Principle

Routing is part of the application's architecture.

The AI shall extend the repository's existing routing strategy rather than introducing a new one.

Users should experience navigation that is predictable, consistent, secure, and indistinguishable from the rest of the application.
 