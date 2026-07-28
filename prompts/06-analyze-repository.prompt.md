# AI Engineering Framework

## Runtime Layer

### Prompts

# 06 - Analyze Repository

**Version:** 1.0

**Status:** Stable

**Classification:** Runtime Entry Point

---

# Purpose

Execute the AI Engineering Runtime to analyze and understand an existing repository.

The objective is to build a comprehensive understanding of the repository architecture, engineering conventions, reusable assets, and implementation patterns without modifying the repository.

This prompt initializes runtime execution.

It performs no engineering work itself.

---

# Inputs

The prompt accepts:

- Repository
- Repository path (optional)
- Documentation (optional)
- User analysis objective (optional)

Examples:

- Understand repository architecture
- Identify reusable components
- Discover engineering patterns
- Analyze testing strategy
- Analyze project structure
- Analyze coding conventions

---

# Runtime

Execute the Repository Analysis Runtime defined by the AI Engineering Framework.

Repository analysis shall execute:

Repository

↓

Repository Analyst

↓

RepositoryAnalysis

↓

Runtime Complete

Do not execute downstream runtime agents.

Do not perform implementation activities.

Do not modify repository files.

---

# Repository Analysis Rules

The runtime shall:

- Analyze repository architecture.
- Identify reusable components.
- Identify reusable services.
- Identify reusable utilities.
- Identify engineering patterns.
- Identify project conventions.
- Identify testing strategy.
- Identify application structure.
- Identify architectural constraints.
- Identify repository dependencies.

Repository analysis shall remain read-only.

---

# Brownfield Rules

Assume an existing production repository.

Always:

- Analyze before concluding.
- Base findings on repository evidence.
- Preserve repository integrity.
- Avoid speculative assumptions.
- Report uncertainty explicitly.

---

# Success Criteria

The runtime succeeds when:

- Repository architecture has been understood.
- Reusable assets have been identified.
- Engineering conventions have been documented.
- RepositoryAnalysis has been produced.

---

# Expected Runtime Artifacts

Execution shall produce the runtime artifacts required for the Repository Analysis Runtime.

The final runtime artifact shall be:

```
RepositoryAnalysis
```

---

# Guiding Principle

The Analyze Repository Prompt initializes the AI Engineering Runtime for repository intelligence gathering.

It performs repository analysis only.

It never performs planning, implementation, testing, validation, or engineering review.