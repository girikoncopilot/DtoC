# AI Engineering Framework Private VS Code Extension

This package bundles the AI Engineering Framework directly into a private VS Code extension for internal testing.

## What this extension contains

- a reusable `DtoC` prompt exposed as a VS Code chat slash command
- a bundled copy of the framework assets from the repository root
- a runtime instruction file that tells the workflow to use the packaged framework resources
- commands for backend health checks, prompt preparation, and opening the bundled framework overview

## Bundled framework assets

The extension packages these framework resources into `bundled-framework/` during build and package time:

- `copilot-instructions.md`
- `prompts/`
- `instructions/`
- `runtime/`
- `hooks/`
- `agents/`
- `skills/`

This is intended to make the extension behave much closer to the original repo-based workflow even when the user workspace does not contain the framework files.

## Commands

- `AI Engineering Framework: Check Backend`
- `AI Engineering Framework: Open DtoC Prompt`
- `AI Engineering Framework: Open Bundled Framework Overview`
- `AI Engineering Framework: Prepare DtoC Chat Command`

## Configuration

- `aiEngineeringFramework.backendUrl`
- `aiEngineeringFramework.projectId`
- `aiEngineeringFramework.healthEndpoint`

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

The `bundle:framework` step runs automatically before build/package and refreshes `bundled-framework/` from the repository root.
