import { createServer } from "node:http";
import { createRuntimeSession } from "./runtime-session.mjs";

const host = process.env.AEF_HOST || "127.0.0.1";
const port = Number(process.env.AEF_PORT || "8787");
const apiToken = process.env.AEF_API_TOKEN || "";
const projectId = process.env.AEF_PROJECT_ID || "";
const runtimeVersion = process.env.AEF_RUNTIME_VERSION || "2026.07.28";

function json(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function notFound(response) {
  json(response, 404, {
    error: "not_found"
  });
}

function unauthorized(response) {
  json(response, 401, {
    error: "unauthorized"
  });
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function isAuthorized(request) {
  if (!apiToken) {
    return true;
  }

  const authHeader = request.headers.authorization || "";
  return authHeader === `Bearer ${apiToken}`;
}

function normalizeJiraId(input) {
  return String(input || "")
    .trim()
    .toUpperCase();
}

const server = createServer(async (request, response) => {
  const method = request.method || "GET";
  const url = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);

  if (!isAuthorized(request)) {
    unauthorized(response);
    return;
  }

  if (method === "GET" && url.pathname === "/health") {
    json(response, 200, {
      status: "ok",
      service: "ai-engineering-framework-backend",
      version: runtimeVersion
    });
    return;
  }

  if (method === "GET" && url.pathname === "/capabilities") {
    json(response, 200, {
      capabilities: [
        "DtoC",
        "jira-runtime-session",
        "project-aware-planning",
        "protected-thin-client"
      ]
    });
    return;
  }

  if (method === "POST" && url.pathname === "/runtime/session") {
    try {
      const body = await readJson(request);
      const jiraId = normalizeJiraId(body.jiraId);

      if (!jiraId) {
        json(response, 400, {
          error: "missing_jira_id",
          message: "jiraId is required"
        });
        return;
      }

      json(
        response,
        200,
        await createRuntimeSession({
          body,
          runtimeVersion,
          projectId
        })
      );
    } catch (error) {
      json(response, 400, {
        error: "invalid_request",
        message: error instanceof Error ? error.message : String(error)
      });
    }
    return;
  }

  notFound(response);
});

server.listen(port, host, () => {
  console.log(`AI Engineering Framework protected backend listening on http://${host}:${port}`);
});
