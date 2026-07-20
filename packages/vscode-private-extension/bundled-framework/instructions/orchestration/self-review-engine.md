# 06 - Self Review Engine

**Version:** 1.0

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI performs a final engineering review after validation has completed and before delivering the implementation.

The objective of Self Review is to evaluate the implementation with the same rigor expected from a senior software engineer performing a pull request review.

The AI shall critically evaluate its own work rather than assume correctness.

Delivery shall occur only after successful self-review.

---

# 2. Engineering Philosophy

Writing code and validating functionality are not the final engineering responsibilities.

Every implementation shall undergo an independent engineering review.

The AI shall temporarily separate itself from the implementation process and review the solution objectively.

Self Review shall prioritize engineering quality over implementation speed.

---

# 3. Review Lifecycle

Every implementation shall follow the same review process.

Review Jira

↓

Review Implementation

↓

Review Repository Impact

↓

Review Engineering Quality

↓

Review Maintainability

↓

Review Risks

↓

Approve or Revise

Delivery shall occur only after review approval.

---

# 4. Jira Compliance Review

Verify:

- Every acceptance criterion has been implemented.
- No requirement has been omitted.
- No unrelated functionality has been introduced.
- Business behavior matches the Jira.
- Required Jira attachments and visual evidence were actually retrieved and reviewed.
- Relevant Figma links discovered through Jira were actually retrieved and reviewed.

The implementation shall remain within Jira scope.

---

# 5. Repository Review

Review:

- Existing architecture preserved.
- Existing components reused.
- Existing services reused.
- Existing APIs reused.
- Existing styling reused.
- Existing project conventions followed.

The implementation shall appear native to the repository.

---

# 6. Engineering Review

Evaluate:

- Simplicity
- Readability
- Maintainability
- Consistency
- Reusability
- Separation of concerns

The simplest maintainable solution shall be preferred.

---

# 7. Code Review

Verify:

- No duplicate logic.
- No unnecessary abstractions.
- No unused code.
- No inconsistent naming.
- No unnecessary complexity.
- No architectural violations.

Every line of generated code shall have a purpose.

---

# 8. Repository Impact Review

Determine whether the implementation could unintentionally affect:

- Shared components
- Shared services
- Existing pages
- Existing APIs
- Existing business workflows
- Existing styling

Potential side effects shall be identified before delivery.

---

# 9. Performance Review

Evaluate whether the implementation introduces:

- Duplicate rendering
- Duplicate API requests
- Unnecessary change detection
- Excessive computations
- Unnecessary memory usage

Performance regressions shall not be approved.

---

# 10. Accessibility Review

Verify:

- Accessibility preserved.
- Keyboard navigation preserved.
- Focus behavior preserved.
- Semantic HTML maintained.
- Screen reader compatibility maintained.

Accessibility shall be reviewed even when not explicitly requested.

---

# 11. Security Review

When applicable review:

- Authentication
- Authorization
- Permissions
- Sensitive information
- Existing security rules

Security regressions shall never be approved.

---

# 12. Maintainability Review

Determine whether another engineer could:

- Understand the implementation quickly.
- Extend the implementation safely.
- Debug the implementation efficiently.
- Maintain the implementation consistently.

Generated code shall be easy to maintain.

---

# 13. Future Compatibility Review

Evaluate whether the implementation:

- Can support future enhancements.
- Preserves extensibility.
- Avoids unnecessary coupling.
- Aligns with repository evolution.

Engineering decisions shall not create unnecessary technical debt.

---

# 14. Review Questions

The AI shall explicitly evaluate:

- Is this the simplest solution?
- Did I reuse existing code wherever possible?
- Did I modify the minimum number of files?
- Did I introduce unnecessary complexity?
- Does every change have a clear purpose?
- Did I verify required Jira images or external visual evidence rather than assuming from text alone?
- Did I verify relevant Jira-discovered Figma links through Figma MCP rather than assuming from the link text?
- Would another senior engineer approve this implementation?
- Would I merge this Pull Request without further changes?

If any answer is "No", the implementation shall be revised before delivery.

---

# 15. Approval Decision

The review shall conclude with one of the following outcomes.

Approved

The implementation satisfies engineering expectations.

Revision Required

One or more engineering concerns remain unresolved.

Delivery shall occur only after approval.

---

# 16. Review Summary

Produce a structured review summary.

Example:

Jira Compliance

✓ Approved

Repository Consistency

✓ Approved

Engineering Quality

✓ Approved

Maintainability

✓ Approved

Performance

✓ Approved

Accessibility

✓ Approved

Security

✓ Approved (If Applicable)

Overall Decision

✓ Approved

---

# 17. Engineering Rules

The AI shall:

- Review objectively.
- Challenge its own implementation.
- Prefer simplicity.
- Minimize technical debt.
- Protect repository quality.

Self Review shall be independent from implementation.

---

# 18. Non-Negotiable Rules

The AI shall never:

- Approve code that violates repository standards.

- Ignore maintainability concerns.

- Ignore architectural inconsistencies.

- Ignore unnecessary complexity.

- Ignore failed review questions.

- Deliver code requiring obvious engineering corrections.

Engineering quality shall always take precedence over implementation speed.

---

# 19. Success Criteria

Self Review is successful when:

✓ Jira fully satisfied.

✓ Repository preserved.

✓ Engineering quality maintained.

✓ Maintainability confirmed.

✓ Performance acceptable.

✓ Accessibility preserved.

✓ Security preserved.

✓ Implementation approved for production.

---

# 20. Guiding Principle

A production-ready implementation is not merely functional—it is reviewed, maintainable, repository-consistent, and worthy of approval by experienced engineers.

The AI shall review every implementation with the discipline, objectivity, and quality expectations of a senior software engineer performing a final pull request review before delivery.
