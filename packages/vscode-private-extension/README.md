# AI Engineering Framework Private VS Code Extension

This package is the thin client for the AI Engineering Framework.

It is intentionally designed to avoid shipping the full framework implementation to client repositories.

## What this extension contains

- a reusable `DtoC` prompt exposed as a VS Code chat slash command
- a minimal instruction file for repository-safe runtime behavior
- commands for backend health checks and prompt preparation

## What this extension does not contain

- the full internal framework repository
- private orchestration logic
- internal prompt history
- internal design or planning notes

## Intended architecture

- VS Code extension = thin user experience layer
- private backend or MCP = proprietary orchestration layer

## Commands

- `AI Engineering Framework: Check Backend`
- `AI Engineering Framework: Open DtoC Prompt`
- `AI Engineering Framework: Prepare DtoC Chat Command`

## Configuration

- `aiEngineeringFramework.backendUrl`
- `aiEngineeringFramework.projectId`
- `aiEngineeringFramework.healthEndpoint`

## Packaging

Build the extension:

```bash
npm install
npm run build
```

Create a production bundle:

```bash
npm run package
```

Create a `.vsix` package:

```bash
npm run vsix
```

This runs through `vsce package`, which uses the `vscode:prepublish` script automatically before packaging.

## Install the VSIX

```bash
code --install-extension ai-engineering-framework-private-0.1.0.vsix
```

Use your preferred private distribution channel to share the `.vsix` file.
