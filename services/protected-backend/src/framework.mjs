import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..", "..");

const frameworkPaths = {
  copilotInstructions: "copilot-instructions.md",
  dtoCPrompt: path.join("prompts", "DtoC.md"),
  implementJiraPrompt: path.join("prompts", "01-implement-jira.prompt.md"),
  requirementToCodePrompt: path.join("prompts", "08-requirement-to-code.prompt.md"),
  angularJiraTask: path.join("instructions", "orchestration", "angular-jira-task.md"),
  planningEngine: path.join("instructions", "orchestration", "planning-engine.md"),
  executionEngine: path.join("instructions", "orchestration", "execution-engine.md"),
  validationEngine: path.join("instructions", "orchestration", "validation-engine.md"),
  outputEngine: path.join("instructions", "core", "08-output-engine.md"),
  runtimeDefinition: path.join("runtime", "runtime-definition.md"),
  fullRuntime: path.join("runtime", "01-full-runtime.md")
};

const skillRules = [
  { skill: "forms", patterns: [/form/i, /input/i, /field/i, /validation/i] },
  { skill: "tables", patterns: [/table/i, /grid/i, /column/i, /row/i] },
  { skill: "sorting", patterns: [/sort/i, /ordering/i] },
  { skill: "filtering", patterns: [/filter/i, /facet/i] },
  { skill: "search", patterns: [/search/i, /lookup/i] },
  { skill: "uploads", patterns: [/upload/i, /attachment/i, /document/i, /file/i] },
  { skill: "preview", patterns: [/preview/i, /view/i, /modal/i] },
  { skill: "accessibility", patterns: [/accessibility/i, /keyboard/i, /screen reader/i, /aria/i] },
  { skill: "dashboard", patterns: [/dashboard/i, /summary/i, /widget/i] },
  { skill: "authentication", patterns: [/login/i, /authentication/i, /authorization/i, /permission/i] }
];

function readFile(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function compactLines(content, limit = 14) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.trim())
    .slice(0, limit);
}

function extractBulletSection(content, headingPattern, limit = 10) {
  const lines = content.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => headingPattern.test(line));

  if (startIndex === -1) {
    return [];
  }

  const collected = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^#/.test(line) && collected.length) {
      break;
    }
    if (/^\s*-\s+/.test(line)) {
      collected.push(line.replace(/^\s*-\s+/, "").trim());
    }
    if (collected.length >= limit) {
      break;
    }
  }

  return collected;
}

export function loadFramework() {
  const files = Object.fromEntries(
    Object.entries(frameworkPaths).map(([key, relativePath]) => [key, readFile(relativePath)])
  );

  return {
    files,
    metadata: {
      repoRoot,
      frameworkPaths
    }
  };
}

export function detectSkills({ requirementText, workspaceSummary }) {
  const haystack = [
    requirementText || "",
    workspaceSummary?.workspaceName || "",
    ...(workspaceSummary?.folders || []).map((folder) => folder.name || ""),
    workspaceSummary?.activeFile || ""
  ].join("\n");

  const detected = skillRules
    .filter((rule) => rule.patterns.some((pattern) => pattern.test(haystack)))
    .map((rule) => rule.skill);

  return detected.length ? detected : ["forms", "tables"];
}

export function buildFrameworkSummary(framework) {
  const { files } = framework;
  return {
    runtimePhases: compactLines(files.fullRuntime, 26),
    dtoCEntry: compactLines(files.dtoCPrompt, 12),
    implementJiraHighlights: extractBulletSection(files.implementJiraPrompt, /^# Required Input/i, 8),
    requirementToCodeRules: extractBulletSection(files.requirementToCodePrompt, /^# Prompt-Specific Rules/i, 10),
    angularExecutionOrder: compactLines(files.angularJiraTask, 26),
    planningHighlights: extractBulletSection(files.planningEngine, /^# 11C\. Pre-Implementation Change Approval/i, 8),
    executionHighlights: extractBulletSection(files.executionEngine, /^# 15\. Engineering Rules/i, 8),
    validationHighlights: extractBulletSection(files.validationEngine, /^# 5A\. External Evidence Validation/i, 8)
  };
}

export function buildProtectedPrompt({
  jiraId,
  requirementText,
  workspaceSummary,
  detectedSkills,
  frameworkSummary
}) {
  const workspaceName = workspaceSummary?.workspaceName || "Unnamed workspace";
  const folderNames = (workspaceSummary?.folders || []).map((folder) => folder.name).filter(Boolean);
  const activeFile = workspaceSummary?.activeFile || "No active file reported";
  const requirementBlock = requirementText
    ? requirementText.trim()
    : "No Jira requirement text was provided. Ask for acceptance criteria if Jira integration is unavailable.";

  const lines = [
    `Use the protected AI Engineering Framework runtime for Jira ${jiraId}.`,
    "",
    "Execute the Implement Jira Prompt and follow the runtime exactly.",
    "",
    `Workspace: ${workspaceName}`,
    folderNames.length ? `Folders: ${folderNames.join(", ")}` : "Folders: none provided",
    `Active file: ${activeFile}`,
    "",
    "Requirement source:",
    requirementBlock,
    "",
    `Detected required skills: ${detectedSkills.join(", ")}`,
    "",
    "Runtime expectations:",
    ...frameworkSummary.runtimePhases.slice(0, 12),
    "",
    "Prompt-specific rules:",
    ...frameworkSummary.requirementToCodeRules.map((rule) => `- ${rule}`),
    "",
    "Planning and approval guardrails:",
    ...frameworkSummary.planningHighlights.map((item) => `- ${item}`),
    "",
    "Validation focus:",
    ...frameworkSummary.validationHighlights.map((item) => `- ${item}`),
    "",
    "Treat backend-issued workflow output as authoritative.",
    "If Jira details are missing, request acceptance criteria before implementation.",
    "If design evidence exists, preserve layout, spacing, grouping, and hierarchy."
  ];

  return lines.join("\n");
}
