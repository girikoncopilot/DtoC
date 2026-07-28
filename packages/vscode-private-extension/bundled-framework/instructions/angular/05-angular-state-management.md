# 05 - Angular State Management

**Version:** 1.0

**Status:** Stable

**Classification:** Angular Engineering Standard

---

# 1. Purpose

This document defines the engineering standards for state management in Angular applications.

State represents the current condition of the application.

Proper ownership, synchronization, and lifecycle management of state are essential for building predictable, scalable, and maintainable Angular applications.

---

# 2. Scope

These standards apply to:

- Local Component State
- Shared Feature State
- Global Application State
- Signals
- RxJS Observables
- Computed State
- Derived State
- Cached Data
- UI State
- API State

---

# 3. State Philosophy

Every piece of state must have one owner.

Every owner is responsible for:

- Creating state
- Updating state
- Invalidating state
- Disposing state

State shall never exist in multiple independent locations.

Single Source of Truth is mandatory.

---

# 4. Repository First Principle

Before introducing new state:

Search the repository.

Identify:

- Existing services
- Existing signals
- Existing observables
- Existing shared stores
- Existing cache

Reuse existing state whenever possible.

Creating duplicate state increases regression risk.

---

# 5. State Classification

## Local UI State

Examples

- Dialog open
- Selected tab
- Expanded panel
- Current page
- Hover state

Owned by the component.

---

## Feature State

Examples

- Current Notes
- Ticket Details
- Dashboard Filters

Owned by the corresponding feature service.

---

## Global State

Examples

- Logged-in User
- Theme
- Language
- Permissions

Owned centrally.

---

## Derived State

Calculated from existing state.

Never duplicated.

Should be recomputed instead of stored.

---

# 6. Choosing the Right State Mechanism

Use the simplest mechanism that satisfies the requirement.

Preferred hierarchy:

Local Component Variable

↓

Signal

↓

Observable

↓

Shared Service

↓

Global Store

Avoid introducing application-wide state for feature-local concerns.

---

# 7. Signals

Prefer Angular Signals for synchronous UI state.

Appropriate for:

- Loading flags
- Selected item
- Current filters
- Toggle states
- Visibility
- Derived UI values

Signals should remain focused and predictable.

---

# 8. Observables

Use RxJS Observables for:

- HTTP requests
- Streams
- Events
- Real-time updates
- Async workflows

Observables represent asynchronous behavior.

Signals represent current values.

Do not misuse one for the other.

---

# 9. Computed State

Whenever state can be calculated from existing state:

Prefer computed values.

Avoid duplicate storage.

Examples:

Good

```
Filtered Notes

↓

Computed from

Notes + Selected Filter
```

Poor

```
Store

All Notes

Filtered Notes

Sorted Notes

Visible Notes

Separately
```

Derived state should remain derived.

---

# 10. State Ownership

Each state value shall have exactly one owner.

Components may consume state.

Services may expose state.

Only the owner modifies state.

Consumers request changes through defined operations.

---

# 11. API State

API responses should not be duplicated.

Service owns:

- Loading
- Success
- Error
- Cached result

Components consume the exposed state.

---

# 12. Cache Management

Caching shall be intentional.

Before caching determine:

- Why cache?
- Who owns cache?
- Cache lifetime?
- Refresh strategy?
- Invalidation strategy?

Never cache by accident.

---

# 13. Change Detection

State changes should trigger only the required UI updates.

Avoid unnecessary rendering.

Prefer immutable update patterns.

Do not mutate shared objects unexpectedly.

---

# 14. Subscription Management

Every subscription shall have a lifecycle.

Avoid:

- Forgotten subscriptions
- Duplicate subscriptions
- Nested subscriptions

Prefer Angular's recommended lifecycle management and template async bindings where appropriate.

Memory leaks are unacceptable.

---

# 15. Component Interaction

Components communicate through:

Inputs

Outputs

Services

Shared state

Never synchronize state through unrelated component references.

---

# 16. Performance

Avoid:

- Duplicate state
- Repeated calculations
- Re-fetching unchanged data
- Unnecessary observable chains

State should minimize work.

---

# 17. Testing Expectations

Verify:

- Initial state
- State updates
- Derived values
- Cache behavior
- Async behavior
- Error state
- Reset behavior
- Cleanup

State transitions should be deterministic.

---

# 18. State Review Checklist

Before implementation verify:

✓ Single owner identified.

✓ Existing state reused.

✓ Correct mechanism selected.

✓ Signals used appropriately.

✓ Observables used appropriately.

✓ No duplicate state.

✓ Cache strategy defined.

✓ Cleanup implemented.

✓ Performance maintained.

---

# 19. Non-Negotiable Rules

The AI shall never:

- Duplicate state.
- Store derived values unnecessarily.
- Create competing sources of truth.
- Leave subscriptions unmanaged.
- Mutate shared state unpredictably.
- Introduce global state for local concerns.

---

# 20. Guiding Principle

State represents the truth of the application.

There shall be one authoritative owner for every piece of information.

Consumers observe state.

Owners modify state.

Predictable ownership produces predictable applications.