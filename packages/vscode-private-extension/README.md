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

## Clean Split

This extension package is now safe to keep in a separate repository from the backend.

It depends only on:

- the HTTP backend contract
- the prompt wrapper in this package
- the minimal local runtime guardrails in this package

It does not require direct filesystem access to backend prompts, orchestration files, hooks, agents, or runtime definitions.

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

## How To Connect The Backend

This extension does not work alone. It must point to the separate backend repo/service.

### Backend source

Use the backend from:

- local folder: `/Users/mayankdhyani/Downloads/dtocbackend`
- GitHub repo: `girikoncopilot/DtoC-backend`

### Start the backend

Example:

```bash
cd "/Users/mayankdhyani/Downloads/dtocbackend"
node src/server.mjs
```

### Put the backend link in VS Code

Open VS Code settings JSON and add:

```json
{
  "aiEngineeringFramework.backendUrl": "http://127.0.0.1:8787",
  "aiEngineeringFramework.healthEndpoint": "/health",
  "aiEngineeringFramework.capabilitiesEndpoint": "/capabilities",
  "aiEngineeringFramework.sessionEndpoint": "/runtime/session"
}
```

If the backend is deployed on a server, replace `http://127.0.0.1:8787` with your live backend URL.

### Verify connection

After saving the settings:

1. run `AI Engineering Framework: Check Backend`
2. confirm the backend is reachable
3. run `AI Engineering Framework: Start DtoC Backend Session`

### Connection flow

1. this extension collects Jira ID and safe workspace context
2. it sends that data to `aiEngineeringFramework.backendUrl`
3. the backend returns the protected runtime session payload
4. the extension shows the returned session instructions to the user

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
