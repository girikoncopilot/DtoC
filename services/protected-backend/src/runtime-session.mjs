import {
  buildFrameworkSummary,
  buildProtectedPrompt,
  detectSkills,
  loadFramework
} from "./framework.mjs";
import { createJiraClientFromEnv } from "./jira.mjs";
import { enrichRepositoryPlan } from "./repository-planner.mjs";

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
    activeFile: String(source.activeFile || "").trim(),
    fileInventory: Array.isArray(source.fileInventory) ? source.fileInventory : [],
    topLevelEntries: Array.isArray(source.topLevelEntries) ? source.topLevelEntries : [],
    buildFiles: Array.isArray(source.buildFiles) ? source.buildFiles : []
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

function buildPlannedChanges({ repositoryPlan, jiraIssue, detectedSkills }) {
  const planned = [];

  for (const filePath of repositoryPlan.filesToModify || []) {
    planned.push(`Modify: ${filePath}`);
  }

  if (detectedSkills.includes("tables")) {
    planned.push("Validate displayed columns and data-source bindings for table changes.");
  }

  if (detectedSkills.includes("uploads")) {
    planned.push("Review upload validation, attachment handling, and backend header/data flow.");
  }

  if (jiraIssue?.figmaLinks?.length) {
    planned.push("Attempt Figma retrieval for discovered design links before UI implementation.");
  }

  return planned;
}

export async function createRuntimeSession({
  body,
  runtimeVersion,
  projectId
}) {
  const jiraClient = createJiraClientFromEnv();
  const jiraId = normalizeJiraId(body.jiraId);
  const jiraIssue = jiraClient ? await jiraClient.fetchIssue(jiraId) : null;
  const framework = loadFramework();
  const frameworkSummary = buildFrameworkSummary(framework);
  const workflow = String(body.workflow || "DtoC").trim() || "DtoC";
  const requirementText = String(
    body.requirementText ||
      body.requirements ||
      jiraIssue?.businessSummary ||
      jiraIssue?.descriptionText ||
      ""
  ).trim();
  const workspaceSummary = normalizeWorkspace(body.workspace);
  const detectedSkills = detectSkills({ requirementText, workspaceSummary });
  const repositoryPlan = enrichRepositoryPlan({
    workspace: workspaceSummary,
    jiraIssue,
    requirementText,
    detectedSkills
  });
  const implementationHints = buildImplementationHints({
    requirementText,
    detectedSkills,
    workspaceSummary
  });
  const plannedChanges = buildPlannedChanges({
    repositoryPlan,
    jiraIssue,
    detectedSkills
  });

  const notices = [
    `Using protected runtime ${runtimeVersion}.`,
    projectId ? `Project context: ${projectId}.` : "No backend project id configured.",
    jiraIssue
      ? `Jira retrieval succeeded for ${jiraIssue.id}.`
      : requirementText
        ? "Requirement text supplied directly to backend session."
        : "No Jira requirement text supplied. Backend will require acceptance criteria before implementation."
  ];
  if (jiraIssue?.figmaLinks?.length) {
    notices.push(`Discovered Figma links: ${jiraIssue.figmaLinks.join(", ")}`);
  }

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
      requiresUserInput: !requirementText,
      source: jiraIssue ? "jira" : requirementText ? "direct-input" : "missing"
    },
    frameworkContext: {
      runtimeEntry: "Implement Jira Prompt",
      dtoCPrompt: "DtoC",
      detectedSkills,
      projectOptimized: true
    },
    implementationHints,
    plannedChanges,
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
      "Repository architecture and reuse map",
      "Approved design evidence",
      "Framework runtime rules"
    ],
    jira: jiraIssue,
    repositoryPlan
  };
}
