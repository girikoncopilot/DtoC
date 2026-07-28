# AI Engineering Framework Private VS Code Extension

This package is the protected thin-client version of the AI Engineering Framework.

It is designed for organization-wide internal rollout where users can launch the workflow in VS Code without receiving the proprietary framework source files in the shipped extension.

## What this extension contains

- a reusable `DtoC` prompt exposed as a VS Code chat slash command
- a minimal runtime instruction file
- commands for backend health checks, prompt preparation, backend session start, and backend contract inspection
- a thin client that sends safe workspace context to a protected backend

## What this extension does not ship

- prompts folder from the internal framework
- runtime definitions from the internal framework
- instructions, hooks, agents, or skills from the internal framework
- proprietary orchestration, validation, or review heuristics

The protected logic is expected to live behind a private backend or MCP service.

## Commands

- `AI Engineering Framework: Check Backend`
- `AI Engineering Framework: Open DtoC Prompt`
- `AI Engineering Framework: Prepare DtoC Chat Command`
- `AI Engineering Framework: Start DtoC Backend Session`
- `AI Engineering Framework: Open Backend Contract`

## Configuration

- `aiEngineeringFramework.backendUrl`
- `aiEngineeringFramework.projectId`
- `aiEngineeringFramework.healthEndpoint`
- `aiEngineeringFramework.capabilitiesEndpoint`
- `aiEngineeringFramework.sessionEndpoint`
- `aiEngineeringFramework.apiToken`
- `aiEngineeringFramework.requestTimeoutMs`

## Build

```bash
pnpm install
pnpm run build
```

## Package

```bash
pnpm run package
pnpm run vsix
```

## Runtime model

The extension should feel fast while keeping accuracy high by following this pattern:

- keep startup commands local and lightweight
- do health checks and capability checks early
- send only minimal workspace metadata to the backend
- let the backend own prompts, orchestration rules, and validation logic
- return only user-safe workflow output to the client

## Security model

This design improves protection because the shipped extension does not contain the full framework source.

It does not make the client fully opaque, but it keeps the proprietary engineering logic on infrastructure you control.
