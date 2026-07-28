# 04 - Angular Services

**Version:** 1.0

**Status:** Stable

**Classification:** Angular Engineering Standard

---

# 1. Purpose

This document defines the engineering standards for Angular services within the AI Engineering Framework.

Services own business behavior.

They coordinate application workflows, communicate with external systems, manage reusable business operations, and provide a clean interface between the presentation layer and the domain.

Components consume services.

Services perform work.

---

# 2. Scope

These standards apply to:

- Feature Services
- Shared Services
- API Services
- Facade Services
- Repository Services
- Utility Services
- Dialog Services
- Notification Services
- Authentication Services

---

# 3. Service Philosophy

A service represents reusable application behavior.

Services answer:

> **How does the application perform this business operation?**

Components answer:

> **How does the user interact with it?**

Services never own presentation.

Components never own reusable business logic.

---

# 4. Repository First Principle

Before creating a new service:

Search the repository.

Locate:

- Existing feature services
- Shared services
- API services
- Utility services
- Existing business workflows

Reuse existing services whenever possible.

Creating duplicate services is prohibited.

---

# 5. Service Responsibilities

Services may:

- Retrieve data
- Persist data
- Transform data
- Coordinate workflows
- Execute business rules
- Manage caching
- Expose reusable operations
- Coordinate dialogs (through dedicated dialog services)
- Coordinate notifications

Services shall not:

- Render UI
- Manipulate templates
- Directly modify DOM
- Contain component-specific presentation logic

---

# 6. Service Classification

## Feature Service

Owns business behavior for one feature.

Examples:

- NotesService
- DashboardService
- TicketHistoryService

---

## Shared Service

Reusable across features.

Examples:

- FileService
- UploadService
- PreviewService

---

## API Service

Owns communication with backend endpoints.

Responsibilities:

- HTTP requests
- Response mapping
- Error propagation

---

## Utility Service

Owns reusable non-domain functionality.

Examples:

- Date formatting
- Export helpers
- File conversion

Utility services should remain stateless whenever possible.

---

# 7. Business Logic Ownership

Business logic belongs in services.

Examples include:

- Validation rules
- Status transitions
- Permission evaluation
- File processing
- Data transformations
- Business calculations

Business logic shall never be duplicated across multiple components.

---

# 8. API Communication

Components shall never perform HTTP requests directly.

All HTTP communication belongs to services.

Services expose business-oriented methods.

Good

```
notesService.loadNotes()
```

Poor

```
http.get(...)
```

inside a component.

---

# 9. Data Transformation

Services are responsible for:

- Mapping DTOs
- Combining API responses
- Normalizing data
- Formatting domain objects

Components should receive data ready for presentation.

---

# 10. State Coordination

Services may coordinate shared state.

Responsibilities include:

- Cache management
- Observable streams
- Shared selections
- User preferences

Avoid duplicating shared state inside multiple components.

---

# 11. Dependency Injection

Reuse existing services through Angular Dependency Injection.

Do not instantiate services manually.

Service dependencies should remain minimal and purposeful.

Avoid circular dependencies.

---

# 12. Error Handling

Services shall handle recoverable errors.

Responsibilities include:

- Mapping backend errors
- Logging where appropriate
- Returning meaningful error information
- Preserving application stability

Services should not display UI messages directly unless explicitly designed as notification services.

---

# 13. Performance

Services should avoid:

- Duplicate HTTP requests
- Duplicate caching
- Repeated expensive calculations
- Unnecessary subscriptions

Prefer reusing existing observable streams when appropriate.

---

# 14. Testing Expectations

Every service shall be independently testable.

Tests should verify:

- Business rules
- API communication
- Data transformation
- Error handling
- Edge cases
- Caching behavior
- Observable behavior

External dependencies should be mocked.

---

# 15. Service Review Checklist

Before implementation verify:

✓ Existing service analyzed.

✓ Existing service reused where possible.

✓ No duplicate business logic.

✓ HTTP isolated to services.

✓ Components remain presentation-focused.

✓ Shared state ownership defined.

✓ Error handling implemented.

✓ Service independently testable.

✓ Performance considered.

---

# 16. Non-Negotiable Rules

The AI shall never:

- Perform HTTP requests directly from components.
- Duplicate business logic.
- Duplicate services.
- Manipulate UI from services.
- Introduce circular dependencies.
- Create feature-specific services inside shared modules.
- Mix presentation concerns with business concerns.

---

# 17. Guiding Principle

Services represent the application's business capabilities.

They form the boundary between user interaction and business execution.

A well-engineered service is reusable, testable, cohesive, independent of presentation, and expressive of business intent.

Every service should expose clear business operations while hiding implementation details from the components that consume it.