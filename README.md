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

## Important

This repo is only the extension-facing distribution surface.

The protected backend must run separately and should stay in a private repo or private server deployment.
