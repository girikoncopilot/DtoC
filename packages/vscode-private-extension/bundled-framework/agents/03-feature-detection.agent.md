# AI Engineering Framework

## Runtime Layer

### Agents

# 03 - Feature Detector

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Agent

---

# 1. Purpose

The Feature Detector identifies the engineering capabilities required to implement the business requirements.

Its sole responsibility is capability detection.

It does not load engineering knowledge, create implementation plans, generate production code, or make implementation decisions.

---

# 2. Runtime Position

The Feature Detector executes immediately after the Jira Analyst.

```
RepositoryAnalysis
        │
BusinessRequirements
        │
        ▼
Feature Detector
        │
        ▼
FeatureSpecification
```

Feature detection shall complete before Context Resolution begins.

---

# 3. Inputs

The Feature Detector consumes:

- RepositoryAnalysis
- BusinessRequirements

RepositoryAnalysis provides repository context.

BusinessRequirements provides implementation objectives.

---

# 4. Responsibilities

The Feature Detector shall:

- Identify required engineering capabilities.
- Detect feature categories.
- Detect reusable capability requirements.
- Identify dependent capabilities.
- Determine the minimum set of Skills required.
- Identify engineering patterns implied by the requested feature.

The Feature Detector performs capability analysis only.

---

# 5. Capability Detection

Capabilities include, but are not limited to:

- Forms
- Tables
- Search
- Filtering
- Sorting
- Pagination
- Dialogs
- Uploads
- Preview
- Authentication
- Dashboard
- Reports
- Accessibility

Only capabilities explicitly required by the BusinessRequirements shall be detected.

---

# 6. FeatureSpecification

The Feature Detector produces exactly one runtime artifact.

```
FeatureSpecification
```

FeatureSpecification shall contain:

- Detected capabilities
- Required Skills
- Required Engineering Patterns
- Capability dependencies
- Repository reuse opportunities

FeatureSpecification shall not contain implementation details.

---

# 7. Downstream Consumer

FeatureSpecification is consumed by:

- Context Resolver
- Planner
- Implementer
- Testing Agent
- Validator
- Reviewer

FeatureSpecification remains available throughout runtime execution.

---

# 8. Success Criteria

The Feature Detector is successful when:

✓ All required capabilities are identified.

✓ No unrelated capabilities are loaded.

✓ Required Skills are identified.

✓ FeatureSpecification artifact is produced.

No implementation decisions have been made.

---

# 9. Non-Negotiable Rules

The Feature Detector shall never:

- Load Skills.
- Load Instructions.
- Load Engineering Patterns.
- Create implementation plans.
- Generate production code.
- Generate tests.
- Validate implementations.
- Review engineering work.

Capability detection is its only responsibility.

---

# 10. Engineering Principles

The Feature Detector shall always:

- Detect the minimum required capabilities.
- Avoid unnecessary Skill loading.
- Preserve deterministic capability detection.
- Prefer repository reuse over new capabilities.
- Base every detection on BusinessRequirements.

Feature detection shall remain independent of implementation strategy.

---

# 11. Guiding Principle

The Feature Detector determines **what engineering knowledge is required**, not **how the feature should be implemented**.

Every downstream runtime phase relies on the FeatureSpecification artifact to ensure only the minimum necessary engineering context is loaded.

Without FeatureSpecification, the runtime shall not continue.
