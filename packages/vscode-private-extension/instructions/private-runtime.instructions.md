---
name: Bundled Runtime Guardrails
description: Apply the bundled AI Engineering Framework packaged with this extension and do not assume the workspace itself contains the framework folders.
---
Use the local workspace as the implementation surface.

Use the bundled framework resources packaged in this extension as the framework source when the workspace does not contain framework folders.

Do not conclude that the framework is missing simply because the current repository does not contain `prompts/`, `instructions/`, `runtime/`, `hooks/`, `agents/`, or `skills/` directories.

The extension includes those framework assets inside `bundled-framework/` for internal testing.

If a private backend is configured, use it as an additional project-specific source rather than as the only source of framework behavior.

Preserve repository-native implementation behavior.
