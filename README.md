# DtoC VS Code Extension Repo

This repository now contains only the VS Code extension package used to launch the DtoC workflow.

## What is in this repo

- `packages/vscode-private-extension/` — the extension source and packaged `.vsix`
- `docs/` — extension and rollout documentation

## What is not in this repo anymore

- private framework prompts
- orchestration rules
- runtime files
- hooks
- agents
- backend service source

Those private assets now belong in the separate backend folder/repo.

## Main Package

- `packages/vscode-private-extension/README.md`
- `packages/vscode-private-extension/package.json`
- `packages/vscode-private-extension/prompts/DtoC.prompt.md`
- `packages/vscode-private-extension/instructions/private-runtime.instructions.md`

## Build

```bash
cd "packages/vscode-private-extension"
pnpm install
pnpm run build
pnpm run package
pnpm run vsix
```

## Install

In VS Code:

1. Open Extensions
2. Open the Extensions menu
3. Choose `Install from VSIX...`
4. Select the generated `.vsix`

## Connect To Backend

The extension repo and backend repo connect through VS Code settings.

### Backend repo

Run the backend separately from:

- `/Users/mayankdhyani/Downloads/dtocbackend`
- or your private GitHub backend repo: `girikoncopilot/DtoC-backend`

### Backend URL setting

In VS Code, open:

- `Settings`
- search for `AI Engineering Framework`

Set:

- `aiEngineeringFramework.backendUrl`
- `aiEngineeringFramework.healthEndpoint`
- `aiEngineeringFramework.capabilitiesEndpoint`
- `aiEngineeringFramework.sessionEndpoint`
- `aiEngineeringFramework.apiToken` if your backend auth is enabled

### Example local setup

If the backend is running locally on port `8787`, use:

```json
{
  "aiEngineeringFramework.backendUrl": "http://127.0.0.1:8787",
  "aiEngineeringFramework.healthEndpoint": "/health",
  "aiEngineeringFramework.capabilitiesEndpoint": "/capabilities",
  "aiEngineeringFramework.sessionEndpoint": "/runtime/session"
}
```

### Example live setup

If the backend is deployed, replace the URL with your hosted backend:

```json
{
  "aiEngineeringFramework.backendUrl": "https://your-backend-url",
  "aiEngineeringFramework.healthEndpoint": "/health",
  "aiEngineeringFramework.capabilitiesEndpoint": "/capabilities",
  "aiEngineeringFramework.sessionEndpoint": "/runtime/session"
}
```

### How both repos work together

1. Install the `.vsix` from this repo
2. Start the backend from `DtoC-backend`
3. Put the backend URL into VS Code settings
4. Run `AI Engineering Framework: Check Backend`
5. Run `AI Engineering Framework: Start DtoC Backend Session`

## Important

This repo is only the extension-facing distribution surface.

The protected backend must run separately and should stay in a private repo or private server deployment.
