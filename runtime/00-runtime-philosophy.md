Purpose

The AI Engineering Framework provides deterministic runtime execution.

Every runtime:

• Is artifact driven
• Is deterministic
• Produces well-defined artifacts
• Uses runtime hooks
• Preserves repository architecture
• Is brownfield-first

A runtime may execute all runtime agents or a subset of runtime agents depending on the engineering objective.

The runtime selected by the entry point determines the execution path.

Runtimes shall never be dynamically constructed.

Only canonical runtimes are permitted.