# Repo Split Plan

This repository now supports a clean two-repo architecture.

## Extension Repo

Keep in the extension-facing repository:

- `packages/vscode-private-extension/`
- release automation for `.vsix`
- extension-only documentation

Do not keep in the extension-facing repository once the split is finalized:

- `services/protected-backend/`
- private backend environment values
- internal framework runtime assets that are only required server-side

## Backend Repo

Move into the private backend repository:

- `services/protected-backend/src/`
- `services/protected-backend/bundled-framework/`
- `services/protected-backend/.env.example`
- `services/protected-backend/Dockerfile`
- `services/protected-backend/.dockerignore`
- `services/protected-backend/package.json`
- `services/protected-backend/README.md`
- `services/protected-backend/scripts/export-standalone.mjs`

## Resulting Contract

After the split:

- the extension talks only to the backend HTTP contract
- the backend owns prompts, orchestration, validation, and planning logic
- the `.vsix` does not ship proprietary framework files
- the backend can be deployed independently on private infrastructure
