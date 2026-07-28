import {
  buildFrameworkSummary,
  buildProtectedPrompt,
  detectSkills,
  loadFramework
} from "./framework.mjs";

function normalizeJiraId(input) {
  return String(input || "")
    .trim()
    .toUpperCase();
}

function normalizeWorkspace(workspace) {
  const source = workspace || {};
  const folders = Array.isArray(source.folders) ? source.folders : [];
  return {
    workspaceName: String(source.workspaceName || "").trim(),
    folders: folders.map((folder) => ({
      name: String(folder?.name || "").trim(),
      path: String(folder?.path || "").trim()
    })),
    activeFile: String(source.activeFile || "").trim()
  };
}

function buildImplementationHints({ requirementText, detectedSkills, workspaceSummary }) {
  const hints = [];

  if (!workspaceSummary.workspaceName) {
    hints.push("Open the target repository workspace before implementation so repository analysis can be grounded in real files.");
  }

  if (!requirementText) {
    hints.push("No acceptance criteria were provided. Ask for Jira details or pasted requirements before implementation.");
  }

  if (detectedSkills.includes("uploads")) {
    hints.push("Check attachment handling, file validation, and repository-native upload patterns.");
  }

  if (detectedSkills.includes("tables")) {
    hints.push("Inspect existing table patterns, displayed columns, and repository-native pagination/sorting behavior.");
  }

  if (detectedSkills.includes("forms")) {
    hints.push("Reuse repository-native form controls and validate field grouping against design evidence when present.");
  }

  return hints;
}

export function createRuntimeSession({
  body,
  runtimeVersion,
  projectId
}) {
  const framework = loadFramework();
  const frameworkSummary = buildFrameworkSummary(framework);
  const jiraId = normalizeJiraId(body.jiraId);
  const workflow = String(body.workflow || "DtoC").trim() || "DtoC";
  const requirementText = String(body.requirementText || body.requirements || "").trim();
  const workspaceSummary = normalizeWorkspace(body.workspace);
  const detectedSkills = detectSkills({ requirementText, workspaceSummary });
  const implementationHints = buildImplementationHints({
    requirementText,
    detectedSkills,
    workspaceSummary
  });

  const notices = [
    `Using protected runtime ${runtimeVersion}.`,
    projectId ? `Project context: ${projectId}.` : "No backend project id configured.",
    requirementText
      ? "Requirement text supplied directly to backend session."
      : "No Jira requirement text supplied. Backend will require acceptance criteria before implementation."
  ];

  return {
    sessionId: `session_${Date.now()}`,
    workflow,
    jiraId,
    chatCommand: `/DtoC ${jiraId}`,
    promptText: buildProtectedPrompt({
      jiraId,
      requirementText,
      workspaceSummary,
      detectedSkills,
      frameworkSummary
    }),
    notices,
    requirementStatus: {
      hasRequirementText: Boolean(requirementText),
      requiresUserInput: !requirementText
    },
    frameworkContext: {
      runtimeEntry: "Implement Jira Prompt",
      dtoCPrompt: "DtoC",
      detectedSkills,
      projectOptimized: true
    },
    implementationHints,
    runtimeChecklist: [
      "Repository Analysis",
      "Jira Analysis",
      "Feature Detection",
      "Context Resolution",
      "Planning",
      "Implementation",
      "Testing",
      "Validation",
      "Review",
      "Launch"
    ],
    sourcePriorities: [
      "Jira acceptance criteria",
      "Repository architecture",
      "Approved design evidence",
      "Framework runtime rules"
    ]
  };
}
