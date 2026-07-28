# AI Engineering Framework Backend Contract

This extension is designed to keep proprietary framework logic on a protected backend.

## Goals

- keep workflow accuracy equal to or better than the local framework version
- keep perceived latency close to the current extension experience
- prevent users from receiving the full framework source in the shipped VS Code extension

## Client responsibilities

The VS Code extension should only:

- collect the Jira ID
- collect safe workspace metadata
- collect a bounded repository file inventory for planning enrichment
- check backend health and capabilities
- start protected runtime sessions
- show user-safe results returned by the backend

## Backend responsibilities

The backend should own:

- prompt resolution
- runtime orchestration
- Jira and Figma retrieval policy
- Jira issue retrieval and normalization
- planning rules
- validation rules
- review rules
- project-specific heuristics

## Recommended endpoints

### `GET /health`

Purpose:

- fast liveness check
- should return in under 300 ms on the internal network when warm

Suggested response:

```json
{
  "status": "ok",
  "service": "ai-engineering-framework-backend",
  "version": "2026.07.28"
}
```

### `GET /capabilities`

Purpose:

- tell the extension what workflows are available
- allow future feature flags without re-shipping the client

Suggested response:

```json
{
  "capabilities": [
    "DtoC",
    "jira-runtime-session",
    "project-aware-planning"
  ]
}
```

### `POST /runtime/session`

Purpose:

- start a protected runtime session for a workflow such as `DtoC`

Suggested request:

```json
{
  "workflow": "DtoC",
  "jiraId": "ABC-123",
  "projectId": "optional-project-id",
  "extensionVersion": "0.2.0",
  "workspace": {
    "workspaceName": "sample-project",
    "folders": [
      {
        "name": "sample-project",
        "path": "/workspace/sample-project"
      }
    ],
    "activeFile": "/workspace/sample-project/src/app/app.component.ts",
    "fileInventory": [
      "src/app/correspondence/correspondence.component.ts",
      "src/app/correspondence/correspondence.component.html",
      "angular.json",
      "package.json"
    ],
    "topLevelEntries": [
      "src",
      "angular.json",
      "package.json"
    ],
    "buildFiles": [
      "angular.json",
      "package.json"
    ]
  }
}
```

Suggested response:

```json
{
  "sessionId": "session_123",
  "chatCommand": "/DtoC ABC-123",
  "promptText": "Backend-approved workflow instructions for this Jira task.",
  "jira": {
    "summary": "Issue summary"
  },
  "repositoryPlan": {
    "repoType": "angular"
  },
  "notices": [
    "Using protected runtime v2026.07.28"
  ]
}
```

## Accuracy guidance

To keep accuracy equal or better than the current local framework:

- centralize the single source of truth on the backend
- version prompts and orchestration rules server-side
- attach project-specific policy at the backend layer
- use cached requirement enrichment rather than re-deriving everything on the client
- return only approved workflow instructions to the user

## Performance guidance

To keep performance feeling the same:

- keep the extension startup path local
- keep health and capability requests lightweight
- warm backend caches for popular projects
- keep session creation under 1 second on the internal network when possible
- stream or incrementally return heavy workflow content later if needed

## Security guidance

- use bearer tokens or SSO-backed session credentials
- log backend sessions centrally
- do not return internal framework source files to the extension
- return only the minimum workflow payload needed for the current user action
