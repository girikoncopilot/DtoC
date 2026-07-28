# Private VS Code Extension Architecture

## Objective

Provide a smooth VS Code and Copilot experience without shipping the full AI Engineering Framework source to the client, while keeping accuracy equal to or better than the local framework version and keeping perceived latency close to the current experience.

## Recommended split

### Thin client extension

Ship to the client:

- extension manifest
- extension commands
- contributed prompt files
- contributed instruction files
- minimal project-safe assets

Do not ship:

- full internal framework repository
- proprietary orchestration logic
- internal evolution history
- private validation heuristics
- framework prompts, runtime files, hooks, agents, and skills in client-visible form

### Private backend or MCP

Keep privately controlled:

- runtime orchestration
- Jira and Figma retrieval policy
- proprietary planning logic
- validation policy
- review policy
- project-specific decision rules

## Suggested backend responsibilities

- authorize extension clients
- resolve runtime entry points
- validate prompt version compatibility
- return project-specific orchestration guidance
- expose health and capability endpoints
- keep server-side caches warm for fast project-aware startup
- preserve a single authoritative framework version for accuracy

## Suggested minimal endpoints

- `GET /health`
- `GET /capabilities`
- `POST /runtime/session`
- `POST /runtime/plan`
- `POST /runtime/validate`
- `POST /runtime/review`

## Client runtime flow

1. User installs the private VS Code extension.
2. User configures `aiEngineeringFramework.backendUrl`.
3. User triggers `/DtoC` or the helper command.
4. Local prompt and instructions guide only the entry behavior.
5. Proprietary orchestration is resolved through the private backend or MCP integration.
6. Repository changes remain local to the client workspace.

## Protection model

This approach improves protection because the extension can remain thin and ship only minimal client logic.

For stronger protection:

- keep thin prompts local
- keep sensitive logic on the backend
- authenticate backend access
- version the client and server contracts independently
- return only user-safe workflow payloads

## Performance and accuracy principles

To keep the user experience close to the current local feel:

- keep first-hop client actions local and lightweight
- return health and capability checks quickly
- precompute or cache common project runtime setup on the backend
- avoid sending the whole repository or framework over the wire
- centralize orchestration logic so every user gets the same latest framework behavior

## Next implementation steps

1. Add authenticated backend access to the extension.
2. Add a real backend capability handshake.
3. Start protected runtime sessions from the extension.
4. Add MCP or HTTPS orchestration calls from the extension.
5. Add private packaging and publishing workflow.
