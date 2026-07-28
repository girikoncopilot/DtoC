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

function getWorkspaceSummary() {
  const workspaceFolders = vscode.workspace.workspaceFolders ?? [];
  const activeEditor = vscode.window.activeTextEditor;

  return {
    workspaceName: vscode.workspace.name ?? "",
    folders: workspaceFolders.map((folder) => ({
      name: folder.name,
      path: folder.uri.fsPath
    })),
    activeFile: activeEditor?.document.uri.fsPath ?? ""
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
          workspace: getWorkspaceSummary()
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

        if (promptText) {
          const document = await vscode.workspace.openTextDocument({
            language: "markdown",
            content: promptText
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
