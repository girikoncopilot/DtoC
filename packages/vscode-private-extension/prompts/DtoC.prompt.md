---
name: DtoC
description: Run the AI workflow for implementing Jira tickets in the repository by following the AI Engineering Framework and the Implement Jira Prompt.
argument-hint: "Please provide the Jira ID to implement the business requirements."
---
Use the AI Engineering Framework bundled inside this VS Code extension.

Execute the Implement Jira Prompt.

Ask for or use the provided Jira ID to implement the business requirements.

Only load the required skills.

Follow the runtime exactly.

The full framework resources are packaged with this extension under `bundled-framework/`, even if the current workspace does not contain local `prompts/`, `instructions/`, `runtime/`, or `hooks/` folders.

Treat the bundled framework assets as the authoritative framework source for this extension-driven workflow.

If a private backend is configured, it may add project-specific orchestration, but the packaged framework files remain available for local inspection and testing.
