# Runtime Definition

## Purpose

This document defines the runtime model used by the AI Engineering Framework.

It is the canonical specification governing all runtime execution.

---

## Runtime

A runtime is a deterministic sequence of engineering agents that execute an engineering objective.

Every runtime:

- Executes in a predefined order.
- Produces deterministic artifacts.
- Preserves repository architecture.
- Is brownfield-first.
- Uses runtime hooks.
- Terminates only after runtime completion.

---

## Runtime Components

Every runtime consists of:

- Runtime Agents
- Runtime Artifacts
- Runtime Hooks

---

## Runtime Principles

A runtime shall:

- Produce deterministic execution.
- Preserve engineering consistency.
- Prevent responsibility overlap.
- Produce evidence-based decisions.
- Preserve repository integrity.

---

## Runtime Variants

The framework defines the following canonical runtimes:

- Full Runtime
- Review Runtime
- Repository Analysis Runtime

Additional runtimes shall only be introduced through framework version updates.


---

## Runtime References

Artifacts are defined in:

01-runtime-artifacts.md

Hooks are defined in:

02-runtime-hooks.md

Execution paths are defined in:

03-full-runtime.md

04-review-runtime.md

05-repository-analysis-runtime.md
