# AI Engineering Framework

AI Engineering Framework is a repository-native workflow system for turning Jira requirements, design references, and engineering context into structured implementation execution.

This repository currently includes:

- the framework runtime
- prompts
- orchestration instructions
- engineering skills
- validation hooks
- a private VS Code extension scaffold for internal rollout

## Purpose

The goal of this framework is to make AI-assisted engineering more predictable inside a real brownfield project.

Instead of relying on one loose prompt, the framework breaks execution into disciplined layers:

- prompts define entry points
- runtime defines execution order
- agents define responsibilities
- instructions define standards
- skills define capability loading
- hooks protect runtime integrity

This repository is optimized for Angular + Jira-style engineering work and for strong repository-native implementation behavior.

## Repository Structure

### Core framework

- `prompts/` — runtime entry prompts such as Jira implementation, bug fixing, refactoring, and requirement-to-code flows
- `runtime/` — canonical runtime order, artifacts, hooks, and runtime definitions
- `agents/` — role-specific execution responsibilities such as repository analyst, planner, implementer, validator, and reviewer
- `instructions/` — core, Angular, orchestration, and engineering-pattern standards
- `skills/` — task capability modules such as forms, tables, filtering, search, uploads, preview, and accessibility
- `hooks/` — runtime gate checks before planning, implementation, validation, launch, review, and completion

### Packaging and rollout

- `packages/vscode-private-extension/` — private VS Code extension scaffold that exposes thin prompt and instruction assets without shipping the full internal orchestration model to end users
- `docs/private-vscode-extension-architecture.md` — recommended thin-extension + private-backend architecture notes
- `copilot-instructions.md` — top-level operating rules for Copilot-style execution

## Execution Model

The framework follows a strict runtime-based model.

Typical execution path:

1. Repository analysis
2. Jira or requirement analysis
3. Feature detection
4. Context resolution
5. Planning
6. Human approval of planned file changes
7. Implementation
8. Testing
9. Validation
10. Review
11. Compile / run / launch evidence when enabled
12. Completion

This makes the system easier to audit, validate, and evolve than a single monolithic prompt.

## Key Features

### Requirement-driven execution

- Jira-first implementation flow
- requirement-to-code entry prompt
- explicit acceptance-criteria mapping
- file-by-file planning before implementation

### Design-aware execution

- Figma-aware prompt guidance
- screenshot and visual evidence handling
- spacing, grouping, hierarchy, and layout fidelity rules

### Runtime discipline

- mandatory planning before implementation
- pre-implementation approval gate
- validation and review gates
- optional compile/run launch phase with `ngrok`-style preview guidance

### Internal distribution support

- private VS Code extension scaffold
- `.vsix` packaging flow
- thin-client architecture that avoids shipping the full framework surface into every consumer repository

## Important Prompts

Some of the main prompt entry points are:

- `prompts/01-implement-jira.prompt.md`
- `prompts/08-requirement-to-code.prompt.md`
- `prompts/DtoC.md`

`DtoC` is intended as a lightweight entry prompt for running the Jira implementation workflow and asking for the Jira ID.

## Private VS Code Extension

The repository includes a private extension scaffold here:

- `packages/vscode-private-extension/`

That package currently includes:

- extension manifest
- extension command entrypoints
- contributed prompt file for `DtoC`
- contributed runtime instruction file
- `esbuild` bundling setup
- `.vsix` packaging setup

### Built artifact

The currently built extension package is:

- `packages/vscode-private-extension/ai-engineering-framework-private-0.1.0.vsix`

### Extension commands

The scaffold currently exposes commands for:

- backend health check
- opening the `DtoC` prompt
- preparing a `/DtoC JIRA-ID` command for chat use

## Local Development

### Framework editing

To update the framework itself, modify the relevant files inside:

- `prompts/`
- `runtime/`
- `agents/`
- `instructions/`
- `skills/`
- `hooks/`

### Extension development

Move into the extension package:

```bash
cd "packages/vscode-private-extension"
```

Install dependencies:

```bash
pnpm install
```

Build:

```bash
pnpm run build
```

Create production bundle:

```bash
pnpm run package
```

Create `.vsix`:

```bash
pnpm run vsix
```

## Installation for Testers

Testers can install the extension from the generated `.vsix` file.

In VS Code:

1. Open Extensions
2. Click the menu in the Extensions view
3. Choose `Install from VSIX...`
4. Select the `.vsix` file

Or via terminal:

```bash
code --install-extension "ai-engineering-framework-private-0.1.0.vsix"
```

## Internal Rollout Recommendation

For internal testing across the organization:

1. Keep this repository as the framework source of truth
2. Distribute the `.vsix` to a small pilot group first
3. Validate behavior on real project repositories
4. Add a real private backend or MCP contract for protected orchestration logic
5. Expand to broader internal rollout after the pilot is stable

## Security and Packaging Model

This repository now follows a thin-extension direction.

That means:

- the framework source stays here
- the extension exposes only the minimum local experience layer
- proprietary orchestration should move to a private backend or MCP service over time

This is the best path when you want smooth internal adoption without exposing the full working surface in every consumer repository.

## Current Status

As of July 20, 2026, this repository includes:

- the committed AI Engineering Framework source
- the new `DtoC` prompt
- runtime approval and launch-flow enhancements
- a private VS Code extension scaffold
- a packaged `.vsix` artifact

## Next Recommended Steps

The best next steps are:

1. Create a GitHub Release and upload the `.vsix`
2. Share the release with a small internal tester group
3. Wire the real private backend contract into the extension
4. Add versioned internal rollout guidance

## Notes

- This repository is intentionally framework-first rather than application-code-first
- The extension scaffold is ready for internal testing, but the real backend contract is still the next major integration step
- The framework is designed to preserve repository-native implementation behavior rather than generic AI coding behavior
