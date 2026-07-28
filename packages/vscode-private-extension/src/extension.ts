import * as vscode from "vscode";

function getConfiguration() {
  return vscode.workspace.getConfiguration("aiEngineeringFramework");
}

function getPromptUri(extensionUri: vscode.Uri) {
  return vscode.Uri.joinPath(extensionUri, "prompts", "DtoC.prompt.md");
}

function getBundledFrameworkOverviewUri(extensionUri: vscode.Uri) {
  return vscode.Uri.joinPath(extensionUri, "bundled-framework", "README.md");
}

export function activate(context: vscode.ExtensionContext) {
  const checkBackend = vscode.commands.registerCommand(
    "aiEngineeringFramework.checkBackend",
    async () => {
      const config = getConfiguration();
      const backendUrl = String(config.get("backendUrl") || "").trim();
      const healthEndpoint = String(config.get("healthEndpoint") || "/health").trim();

      if (!backendUrl) {
        void vscode.window.showWarningMessage(
          "No backend URL is configured. The extension can still use its bundled framework assets for internal testing, but private backend checks require aiEngineeringFramework.backendUrl."
        );
        return;
      }

      const healthUrl = new URL(healthEndpoint, backendUrl).toString();

      try {
        const response = await fetch(healthUrl, {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });

        if (!response.ok) {
          void vscode.window.showErrorMessage(
            `AI Engineering Framework backend check failed: ${response.status} ${response.statusText}`
          );
          return;
        }

        void vscode.window.showInformationMessage(
          `AI Engineering Framework backend is reachable at ${healthUrl}`
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

  const openBundledFrameworkOverview = vscode.commands.registerCommand(
    "aiEngineeringFramework.openBundledFrameworkOverview",
    async () => {
      const overviewUri = getBundledFrameworkOverviewUri(context.extensionUri);
      const document = await vscode.workspace.openTextDocument(overviewUri);
      await vscode.window.showTextDocument(document, { preview: false });
    }
  );

  const prepareDtoCCommand = vscode.commands.registerCommand(
    "aiEngineeringFramework.prepareDtoCCommand",
    async () => {
      const jiraId = await vscode.window.showInputBox({
        prompt: "Enter the Jira ID to run with the DtoC workflow",
        placeHolder: "ABC-123"
      });

      if (!jiraId) {
        return;
      }

      const commandText = `/DtoC ${jiraId}`;
      await vscode.env.clipboard.writeText(commandText);

      void vscode.window.showInformationMessage(
        `Copied ${commandText} to the clipboard. Paste it into Copilot Chat to run the workflow.`
      );
    }
  );

  context.subscriptions.push(
    checkBackend,
    openDtoCPrompt,
    openBundledFrameworkOverview,
    prepareDtoCCommand
  );
}

export function deactivate() {
  return undefined;
}
