# 05 - Validation Engine

**Version:** 1.0

**Status:** Stable

**Classification:** Core Orchestration Engine

---

# 1. Purpose

This document defines how the AI validates an implementation after execution has completed.

Validation confirms that the implemented solution satisfies the Jira requirements, preserves repository architecture, complies with engineering standards, and introduces no known regressions.

Validation is mandatory.

An implementation is not considered complete until validation has successfully finished.

---

# 2. Engineering Philosophy

Implementation is an engineering activity.

Validation is an engineering responsibility.

Writing code does not prove correctness.

Correctness must be demonstrated through systematic verification.

Validation shall be objective, evidence-based, and traceable to the original Jira.

---

# 3. Validation Lifecycle

Every implementation shall pass through the following validation lifecycle.

Acceptance Criteria Verification

↓

External Evidence Validation

↓

Functional Validation

↓

Repository Validation

↓

Engineering Standards Validation

↓

Regression Validation

↓

Testing Validation

↓

Delivery Approval

Validation shall follow the same sequence for every implementation.

---

# 4. Acceptance Criteria Validation

Verify every Jira acceptance criterion individually.

For each acceptance criterion confirm:

- Implementation completed
- Expected behavior achieved
- No partial implementation
- No missing functionality

Every acceptance criterion shall have explicit validation.

---

# 5. Functional Validation

Verify:

- Business workflow completed
- User interaction behaves correctly
- Data flow remains correct
- Validation rules function correctly
- UI behaves as expected
- Error handling behaves correctly

Business functionality shall match the intended user experience.

---

# 5A. External Evidence Validation

When Jira attachments, uploaded Jira images, Figma references, screenshots, or other visual artifacts are relevant to the task, validate:

- Required external evidence was actually retrieved
- Jira MCP attachment retrieval occurred when Jira image attachments existed
- Figma MCP retrieval occurred when relevant Figma links were discovered in Jira
- Retrieved image or preview content was reviewed
- Retrieved Figma frame, node, or preview content was reviewed when relevant
- Image-derived requirements were captured or explicitly marked not relevant
- Observed sizing, spacing, alignment, and grouping relationships were preserved where relevant
- No implementation was approved based only on attachment metadata, filenames, or link text

If relevant external evidence existed but was not retrieved and reviewed, validation shall fail.

---

# 6. Repository Validation

Verify:

- Existing architecture preserved
- Existing reusable components reused
- Existing services reused
- Existing APIs reused
- Existing routing preserved
- Existing styling preserved

Repository consistency is mandatory.

---

# 7. Engineering Standards Validation

Verify compliance with:

- Core Standards
- Technology Standards
- Engineering Patterns

No implementation shall violate framework standards.

---

# 8. Code Quality Validation

Verify:

- No duplicate logic
- No dead code
- No unused imports
- No unnecessary abstractions
- No inconsistent naming
- No architecture violations

Generated code shall appear repository-native.

---

# 9. Performance Validation

Verify implementation does not introduce:

- Duplicate API calls
- Unnecessary rendering
- Performance regressions
- Excessive memory usage
- Redundant processing

Performance shall remain consistent with repository expectations.

---

# 10. Accessibility Validation

Verify:

- Keyboard navigation preserved
- Focus management preserved
- Semantic HTML preserved
- Screen reader compatibility preserved
- Existing accessibility behavior maintained

Accessibility shall not regress.

---

# 11. Security Validation

Where applicable verify:

- Existing authorization preserved
- Existing authentication preserved
- Sensitive data protected
- Existing security rules respected

Security validation applies only when relevant to the Jira.

---

# 12. Regression Validation

Determine whether the implementation could affect:

- Existing features
- Shared components
- Shared services
- Existing APIs
- Existing business workflows
- Existing UI behavior

Regression risks shall be identified before delivery.

---

# 13. Testing Validation

Verify:

- Required unit tests updated
- Existing tests remain applicable
- New scenarios covered
- Regression scenarios considered

Testing shall support implementation rather than merely accompany it.

---

# 14. Validation Report

Validation shall produce a structured summary including:

Acceptance Criteria

✓ Passed

External Evidence Validation

✓ Passed

Functional Validation

✓ Passed

Repository Validation

✓ Passed

Engineering Standards

✓ Passed

Performance

✓ Passed

Launch Readiness

✓ Passed

When automatic compile and run is required by the task, validation shall also confirm:

- the planned build command is defined
- the planned run command is defined
- no known implementation issue blocks compilation
- no known implementation issue blocks application startup
- required launch assumptions are explicitly documented

Accessibility

✓ Passed

Security

✓ Passed (if applicable)

Regression Risk

✓ Acceptable

Testing

✓ Updated

---

# 15. Engineering Rules

The AI shall:

- Validate every implementation.
- Validate every acceptance criterion.
- Validate repository consistency.
- Validate engineering standards.
- Validate regression risks.
- Validate testing coverage.

Validation shall be systematic rather than intuitive.

---

# 16. Validation Gates

Implementation shall not proceed to delivery unless:

✓ Acceptance criteria satisfied.

✓ Repository preserved.

✓ Standards followed.

✓ Regression risk acceptable.

✓ Testing updated.

✓ No critical validation failures remain.

Delivery requires passing every validation gate.

---

# 17. Non-Negotiable Rules

The AI shall never:

- Skip validation.

- Deliver partially validated code.

- Ignore failed acceptance criteria.

- Ignore repository regressions.

- Ignore accessibility regressions.

- Ignore performance regressions.

Validation is mandatory.

---

# 18. Success Criteria

Validation is successful when:

✓ Every Jira requirement is satisfied.

✓ Repository consistency preserved.

✓ Engineering standards followed.

✓ Regression risk acceptable.

✓ Testing updated.

✓ Implementation ready for engineering review.

---

# 19. Guiding Principle

Validation transforms implementation into a production-ready engineering deliverable.

The AI shall verify every aspect of the implementation against the Jira requirements, repository standards, engineering framework, and quality expectations before considering the task complete.
