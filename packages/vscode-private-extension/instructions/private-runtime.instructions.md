---
name: Protected Runtime Guardrails
description: Apply the AI Engineering Framework through a protected backend and do not assume the client machine contains the proprietary framework source.
---
Use the local workspace as the implementation surface.

Treat the protected backend or MCP service as the authoritative source for proprietary framework behavior.

Do not expect the client workspace or extension package to expose the full internal framework source.

Use only the minimum local prompt and instruction surface necessary to start the workflow.

If the backend is unavailable, fail safely and ask for either backend configuration or explicit pasted requirements rather than inventing hidden framework behavior.

Preserve repository-native implementation behavior.
