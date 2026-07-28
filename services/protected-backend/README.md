# AI Engineering Framework Protected Backend

This service is the protected server-side runtime companion for the thin-client VS Code extension.

## Purpose

The extension should stay lightweight and should not ship the proprietary framework source.

This backend provides:

- health checks
- capability discovery
- protected runtime session creation

## Endpoints

- `GET /health`
- `GET /capabilities`
- `POST /runtime/session`

## Environment Variables

- `AEF_HOST` - optional, defaults to `127.0.0.1`
- `AEF_PORT` - optional, defaults to `8787`
- `AEF_API_TOKEN` - optional bearer token for authenticating extension requests
- `AEF_PROJECT_ID` - optional project identifier returned in notices
- `AEF_RUNTIME_VERSION` - optional runtime version label

## Run Locally

```bash
cd services/protected-backend
node src/server.mjs
```

Or:

```bash
npm start
```

## Extension Configuration Example

In VS Code settings:

- `aiEngineeringFramework.backendUrl` = `http://127.0.0.1:8787`
- `aiEngineeringFramework.healthEndpoint` = `/health`
- `aiEngineeringFramework.capabilitiesEndpoint` = `/capabilities`
- `aiEngineeringFramework.sessionEndpoint` = `/runtime/session`
- `aiEngineeringFramework.apiToken` = same as `AEF_API_TOKEN` if auth is enabled

## Performance Notes

This scaffold intentionally avoids external dependencies and uses Node's built-in HTTP server to keep startup fast and reduce latency.

For production rollout, place this service behind your internal network, add centralized auth, and connect it to the real Jira/Figma/runtime orchestration stack.
