# 00 - Skills Philosophy

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Standard

---

# 1. Purpose

Skills provide reusable engineering capabilities to the AI Engineering Runtime.

A Skill does not contain engineering knowledge.

A Skill identifies, groups, and exposes the engineering knowledge required to perform a specific capability.

Skills act as lightweight capability manifests.

---

# 2. Runtime Philosophy

The AI Engineering Framework separates:

Engineering Knowledge

↓

Execution

↓

Capability Loading

Instructions define engineering standards.

Agents perform engineering work.

Skills determine which engineering knowledge should be made available during execution.

---

# 3. Single Responsibility

Each Skill represents one engineering capability.

Examples:

- Forms
- Tables
- Uploads
- Authentication
- Dashboard
- Reports

Skills shall never combine unrelated capabilities.

---

# 4. Framework Dependency

Every Skill depends entirely on the Instructions Layer.

Skills never redefine engineering standards.

Skills reference engineering standards.

The Instructions Layer remains the single source of truth.

---

# 5. Capability Manifest

Every Skill defines:

- Capability Name
- Purpose
- Activation Conditions
- Required Framework Documents
- Required Repository Context
- Expected Outputs

Skills are manifests rather than implementation guides.

---

# 6. Activation

Skills are activated only by the Context Resolver.

Neither the Planner nor the Implementer shall independently activate Skills.

Skill loading shall always be deterministic.

---

# 7. Context Loading

A Skill may load:

Core Instructions

Angular Instructions

Engineering Patterns

Repository Context

Only the minimum required knowledge shall be loaded.

---

# 8. Composition

Multiple Skills may be activated together.

Example:

Feature

↓

Employee Management

Activated Skills

- Forms
- Tables
- Search
- Upload

Each Skill remains independent.

---

# 9. Reusability

Skills shall remain:

- Small
- Independent
- Reusable
- Repository-agnostic

Skills shall never become feature-specific.

---

# 10. Knowledge Ownership

Engineering knowledge belongs to:

instructions/

Skills only reference that knowledge.

No engineering rule shall be duplicated.

---

# 11. Runtime Responsibility

A Skill shall:

- Declare required documents.
- Declare activation rules.
- Declare repository context.
- Declare capability boundaries.

A Skill shall not:

- Plan implementation.
- Generate code.
- Validate implementation.

---

# 12. Extensibility

New capabilities shall be introduced by creating new Skills.

Existing Skills should rarely require modification.

---

# 13. Success Criteria

A Skill is successful when:

✓ Required knowledge loaded.

✓ No duplicate engineering rules.

✓ Minimal context.

✓ Clear activation rules.

✓ Independent capability.

---

# 14. Non-Negotiable Rules

Skills shall never:

- Duplicate Instructions.

- Generate code.

- Contain implementation examples.

- Replace Engineering Patterns.

- Replace Angular Standards.

---

# 15. Guiding Principle

Skills are capability manifests.

They enable the AI Engineering Runtime to load the right engineering knowledge at the right time while keeping the framework modular, deterministic, and free from duplicated standards.