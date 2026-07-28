import * as vscode from "vscode";

function getConfiguration() {
  return vscode.workspace.getConfiguration("aiEngineeringFramework");
}

function getPromptUri(extensionUri: vscode.Uri) {
  return vscode.Uri.joinPath(extensionUri, "prompts", "DtoC.prompt.md");
}

function getBackendContractUri(extensionUri: vscode.Uri) {
  return vscode.Uri.joinPath(extensionUri, "docs", "backend-contract.md");
}

function getConfigValue<T>(key: string, fallback: T): T {
  const value = getConfiguration().get<T>(key);
  return value === undefined ? fallback : value;
}

function getBackendUrl(path: string) {
  const backendUrl = String(getConfigValue("backendUrl", "")).trim();

  if (!backendUrl) {
    return "";
  }

  return new URL(path, backendUrl).toString();
}

function getRequestHeaders() {
  const token = String(getConfigValue("apiToken", "")).trim();
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

function buildSessionDocument(responseData: Record<string, unknown>) {
  const sections: string[] = [];
  const promptText = String(responseData.promptText || "").trim();
  const notices = Array.isArray(responseData.notices) ? responseData.notices : [];
  const implementationHints = Array.isArray(responseData.implementationHints)
    ? responseData.implementationHints
    : [];
  const plannedChanges = Array.isArray(responseData.plannedChanges)
    ? responseData.plannedChanges
    : [];
  const runtimeChecklist = Array.isArray(responseData.runtimeChecklist)
    ? responseData.runtimeChecklist
    : [];
  const sourcePriorities = Array.isArray(responseData.sourcePriorities)
    ? responseData.sourcePriorities
    : [];
  const frameworkContext =
    responseData.frameworkContext && typeof responseData.frameworkContext === "object"
      ? (responseData.frameworkContext as Record<string, unknown>)
      : {};
  const requirementStatus =
    responseData.requirementStatus && typeof responseData.requirementStatus === "object"
      ? (responseData.requirementStatus as Record<string, unknown>)
      : {};
  const jira =
    responseData.jira && typeof responseData.jira === "object"
      ? (responseData.jira as Record<string, unknown>)
      : {};
  const repositoryPlan =
    responseData.repositoryPlan && typeof responseData.repositoryPlan === "object"
      ? (responseData.repositoryPlan as Record<string, unknown>)
      : {};

  sections.push(`# Protected DtoC Session`);
  sections.push("");
  sections.push(`- Session ID: ${String(responseData.sessionId || "")}`);
  sections.push(`- Workflow: ${String(responseData.workflow || "")}`);
  sections.push(`- Jira ID: ${String(responseData.jiraId || "")}`);
  sections.push(`- Chat Command: ${String(responseData.chatCommand || "")}`);
  sections.push("");

  if (notices.length) {
    sections.push(`## Notices`);
    sections.push("");
    sections.push(...notices.map((notice) => `- ${String(notice)}`));
    sections.push("");
  }

  sections.push(`## Backend-Issued Runtime Instructions`);
  sections.push("");
  sections.push(promptText || "No prompt text returned.");
  sections.push("");

  if (Object.keys(frameworkContext).length) {
    sections.push(`## Framework Context`);
    sections.push("");
    sections.push(
      `- Runtime Entry: ${String(frameworkContext.runtimeEntry || "Unknown")}`
    );
    sections.push(`- DtoC Prompt: ${String(frameworkContext.dtoCPrompt || "Unknown")}`);
    sections.push(
      `- Detected Skills: ${Array.isArray(frameworkContext.detectedSkills) ? frameworkContext.detectedSkills.join(", ") : "None"}`
    );
    sections.push(
      `- Project Optimized: ${String(frameworkContext.projectOptimized || false)}`
    );
    sections.push("");
  }

  if (runtimeChecklist.length) {
    sections.push(`## Runtime Checklist`);
    sections.push("");
    sections.push(...runtimeChecklist.map((item) => `- ${String(item)}`));
    sections.push("");
  }

  if (implementationHints.length) {
    sections.push(`## Implementation Hints`);
    sections.push("");
    sections.push(...implementationHints.map((item) => `- ${String(item)}`));
    sections.push("");
  }

  if (sourcePriorities.length) {
    sections.push(`## Source Priorities`);
    sections.push("");
    sections.push(...sourcePriorities.map((item) => `- ${String(item)}`));
    sections.push("");
  }

  if (Object.keys(requirementStatus).length) {
    sections.push(`## Requirement Status`);
    sections.push("");
    sections.push(
      `- Requirement Text Supplied: ${String(requirementStatus.hasRequirementText || false)}`
    );
    sections.push(
      `- Requires User Input: ${String(requirementStatus.requiresUserInput || false)}`
    );
    sections.push("");
  }

  if (Object.keys(jira).length) {
    sections.push(`## Jira Retrieval`);
    sections.push("");
    sections.push(`- Summary: ${String(jira.summary || "")}`);
    sections.push(
      `- Figma Links: ${Array.isArray(jira.figmaLinks) ? jira.figmaLinks.join(", ") || "None" : "None"}`
    );
    sections.push(
      `- Attachments: ${Array.isArray(jira.attachments) ? String(jira.attachments.length) : "0"}`
    );
    sections.push(
      `- Acceptance Criteria Fields: ${Array.isArray(jira.acceptanceCriteria) ? String(jira.acceptanceCriteria.length) : "0"}`
    );
    sections.push("");
  }

  if (Object.keys(repositoryPlan).length) {
    sections.push(`## Repository Plan`);
    sections.push("");
    sections.push(`- Repo Type: ${String(repositoryPlan.repoType || "unknown")}`);
    sections.push(
      `- Likely Areas: ${Array.isArray(repositoryPlan.likelyAreas) ? repositoryPlan.likelyAreas.join(", ") : "None"}`
    );
    sections.push(
      `- Files To Inspect: ${Array.isArray(repositoryPlan.filesToInspect) ? repositoryPlan.filesToInspect.join(", ") : "None"}`
    );
    const buildRun =
      repositoryPlan.buildRun && typeof repositoryPlan.buildRun === "object"
        ? (repositoryPlan.buildRun as Record<string, unknown>)
        : {};
    if (Object.keys(buildRun).length) {
      sections.push(`- Build Command: ${String(buildRun.build || "")}`);
      sections.push(`- Run Command: ${String(buildRun.run || "")}`);
      sections.push(`- Preview Command: ${String(buildRun.preview || "")}`);
    }
    if (Array.isArray(repositoryPlan.reuseMap) && repositoryPlan.reuseMap.length) {
      sections.push(
        `- Reuse Map: ${repositoryPlan.reuseMap.map((item) => String(item)).join(" | ")}`
      );
    }
    sections.push("");
  }

  if (plannedChanges.length) {
    sections.push(`## Planned Changes`);
    sections.push("");
    sections.push(...plannedChanges.map((item) => `- ${String(item)}`));
    sections.push("");
  }

  return sections.join("\n");
}

async function fetchJson(url: string, init: RequestInit = {}) {
  const timeoutMs = Number(getConfigValue("requestTimeoutMs", 8000));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      data
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function getWorkspaceSummary() {
  const workspaceFolders = vscode.workspace.workspaceFolders ?? [];
  const activeEditor = vscode.window.activeTextEditor;
  const fileUris = await vscode.workspace.findFiles(
    "**/*.{ts,tsx,js,jsx,html,scss,css,json,md}",
    "**/{node_modules,dist,build,.git,.angular,.next,out,coverage}/**",
    200
  );

  const firstFolder = workspaceFolders[0];
  const fileInventory = fileUris.map((uri) => {
    if (!firstFolder) {
      return uri.fsPath;
    }
    return vscode.workspace.asRelativePath(uri, false);
  });

  let topLevelEntries: string[] = [];
  if (firstFolder) {
    try {
      const entries = await vscode.workspace.fs.readDirectory(firstFolder.uri);
      topLevelEntries = entries.map(([name]) => name);
    } catch {
      topLevelEntries = [];
    }
  }
  const buildFiles = fileInventory.filter((file) =>
    /(^|\/)(angular\.json|package\.json|pnpm-lock\.yaml|yarn\.lock|package-lock\.json|nx\.json|workspace\.json|project\.json)$/i.test(
      file
    )
  );

  return {
    workspaceName: vscode.workspace.name ?? "",
    folders: workspaceFolders.map((folder) => ({
      name: folder.name,
      path: folder.uri.fsPath
    })),
    activeFile: activeEditor?.document.uri.fsPath ?? "",
    fileInventory,
    topLevelEntries,
    buildFiles
  };
}

async function askJiraId() {
  return vscode.window.showInputBox({
    prompt: "Enter the Jira ID to run with the DtoC workflow",
    placeHolder: "ABC-123"
  });
}

export function activate(context: vscode.ExtensionContext) {
  const checkBackend = vscode.commands.registerCommand(
    "aiEngineeringFramework.checkBackend",
    async () => {
      const healthEndpoint = String(getConfigValue("healthEndpoint", "/health")).trim();
      const capabilitiesEndpoint = String(
        getConfigValue("capabilitiesEndpoint", "/capabilities")
      ).trim();
      const healthUrl = getBackendUrl(healthEndpoint);
      const capabilitiesUrl = getBackendUrl(capabilitiesEndpoint);

      if (!healthUrl) {
        void vscode.window.showWarningMessage(
          "No backend URL is configured. Set aiEngineeringFramework.backendUrl to use the protected AI Engineering Framework runtime."
        );
        return;
      }

      try {
        const [health, capabilities] = await Promise.all([
          fetchJson(healthUrl, {
            method: "GET",
            headers: getRequestHeaders()
          }),
          fetchJson(capabilitiesUrl, {
            method: "GET",
            headers: getRequestHeaders()
          })
        ]);

        if (!health.ok) {
          void vscode.window.showErrorMessage(
            `AI Engineering Framework backend check failed: ${health.status} ${health.statusText}`
          );
          return;
        }

        const capabilityNames = Array.isArray(capabilities.data?.capabilities)
          ? capabilities.data.capabilities.join(", ")
          : "no capabilities returned";

        void vscode.window.showInformationMessage(
          `Backend reachable. Capabilities: ${capabilityNames}`
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        void vscode.window.showErrorMessage(
          `Unable to reach AI Engineering Framework backend: ${message}`
        );
      }
    }
  );

  const openDtoCPrompt = vscode.commands.registerCommand(
    "aiEngineeringFramework.openDtoCPrompt",
    async () => {
      const promptUri = getPromptUri(context.extensionUri);
      const document = await vscode.workspace.openTextDocument(promptUri);
      await vscode.window.showTextDocument(document, { preview: false });
    }
  );

  const openBackendContract = vscode.commands.registerCommand(
    "aiEngineeringFramework.openBackendContract",
    async () => {
      const contractUri = getBackendContractUri(context.extensionUri);
      const document = await vscode.workspace.openTextDocument(contractUri);
      await vscode.window.showTextDocument(document, { preview: false });
    }
  );

  const prepareDtoCCommand = vscode.commands.registerCommand(
    "aiEngineeringFramework.prepareDtoCCommand",
    async () => {
      const jiraId = await askJiraId();

      if (!jiraId) {
        return;
      }

      const commandText = `/DtoC ${jiraId}`;
      await vscode.env.clipboard.writeText(commandText);

      void vscode.window.showInformationMessage(
        `Copied ${commandText} to the clipboard. Paste it into Copilot Chat, or use Start DtoC Backend Session for the protected runtime path.`
      );
    }
  );

  const startDtoCSession = vscode.commands.registerCommand(
    "aiEngineeringFramework.startDtoCSession",
    async () => {
      const sessionEndpoint = String(getConfigValue("sessionEndpoint", "/runtime/session")).trim();
      const sessionUrl = getBackendUrl(sessionEndpoint);

      if (!sessionUrl) {
        void vscode.window.showWarningMessage(
          "Set aiEngineeringFramework.backendUrl before starting a protected DtoC backend session."
        );
        return;
      }

      const jiraId = await askJiraId();

      if (!jiraId) {
        return;
      }

      try {
        const payload = {
          workflow: "DtoC",
          jiraId,
          projectId: String(getConfigValue("projectId", "")).trim(),
          extensionVersion: "0.2.0",
          workspace: await getWorkspaceSummary()
        };

        const response = await fetchJson(sessionUrl, {
          method: "POST",
          headers: getRequestHeaders(),
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          void vscode.window.showErrorMessage(
            `Unable to start DtoC backend session: ${response.status} ${response.statusText}`
          );
          return;
        }

        const chatCommand = String(response.data?.chatCommand || "").trim();
        const promptText = String(response.data?.promptText || "").trim();
        const notices = Array.isArray(response.data?.notices) ? response.data.notices : [];

        if (chatCommand) {
          await vscode.env.clipboard.writeText(chatCommand);
        }

        const sessionDocument = buildSessionDocument(
          (response.data && typeof response.data === "object"
            ? response.data
            : {}) as Record<string, unknown>
        );

        if (promptText || sessionDocument) {
          const document = await vscode.workspace.openTextDocument({
            language: "markdown",
            content: sessionDocument
          });
          await vscode.window.showTextDocument(document, { preview: false });
        }

        const summary =
          chatCommand || promptText
            ? "Protected DtoC session is ready."
            : "Backend session created, but no chat command or prompt payload was returned.";

        void vscode.window.showInformationMessage(
          notices.length ? `${summary} ${notices.join(" ")}` : summary
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        void vscode.window.showErrorMessage(
          `Protected DtoC session failed: ${message}`
        );
      }
    }
  );

  context.subscriptions.push(
    checkBackend,
    openDtoCPrompt,
    openBackendContract,
    prepareDtoCCommand,
    startDtoCSession
  );
}

export function deactivate() {
  return undefined;
}
