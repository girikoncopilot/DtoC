# Private VS Code Extension Architecture

## Objective

Provide a smooth VS Code and Copilot experience without shipping the full AI Engineering Framework source to the client.

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
4. Local prompt and instructions guide the chat entry behavior.
5. Proprietary orchestration is resolved through the private backend or MCP integration.
6. Repository changes remain local to the client workspace.

## Protection model

This approach improves protection, but no client-side extension is perfect protection if it contains proprietary logic.

For stronger protection:

- keep thin prompts local
- keep sensitive logic on the backend
- authenticate backend access
- version the client and server contracts independently

## Next implementation steps

1. Add authenticated backend access to the extension.
2. Add a real backend capability handshake.
3. Add MCP or HTTPS orchestration calls from the extension.
4. Add private packaging and publishing workflow.
