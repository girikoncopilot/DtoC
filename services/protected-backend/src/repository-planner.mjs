function normalizeWorkspace(workspace) {
  const source = workspace || {};
  return {
    workspaceName: String(source.workspaceName || "").trim(),
    activeFile: String(source.activeFile || "").trim(),
    folders: Array.isArray(source.folders) ? source.folders : [],
    fileInventory: Array.isArray(source.fileInventory) ? source.fileInventory : [],
    topLevelEntries: Array.isArray(source.topLevelEntries) ? source.topLevelEntries : [],
    buildFiles: Array.isArray(source.buildFiles) ? source.buildFiles : []
  };
}

function dirname(filePath) {
  const normalized = String(filePath || "").replace(/\\/g, "/");
  const index = normalized.lastIndexOf("/");
  return index === -1 ? "" : normalized.slice(0, index);
}

function basename(filePath) {
  const normalized = String(filePath || "").replace(/\\/g, "/");
  const index = normalized.lastIndexOf("/");
  return index === -1 ? normalized : normalized.slice(index + 1);
}

function scoreFile(filePath, keywords) {
  const target = filePath.toLowerCase();
  let score = 0;
  for (const keyword of keywords) {
    if (target.includes(keyword)) {
      score += 2;
    }
    if (target.endsWith(`${keyword}.ts`) || target.endsWith(`${keyword}.html`) || target.endsWith(`${keyword}.scss`)) {
      score += 1;
    }
  }
  return score;
}

function normalizeRelativePath(filePath, workspace) {
  const raw = String(filePath || "").trim();
  if (!raw) {
    return "";
  }

  for (const folder of workspace.folders) {
    const folderPath = String(folder?.path || "");
    if (folderPath && raw.startsWith(folderPath)) {
      return raw.slice(folderPath.length).replace(/^\/+/, "");
    }
  }

  return raw;
}

function extractKeywords({ jiraIssue, requirementText, activeFile }) {
  const inputs = [
    jiraIssue?.summary || "",
    jiraIssue?.descriptionText || "",
    requirementText || "",
    activeFile || ""
  ]
    .join(" ")
    .toLowerCase();

  const rawWords = inputs.match(/[a-z0-9_-]{4,}/g) || [];
  const stopWords = new Set([
    "that",
    "with",
    "from",
    "this",
    "have",
    "will",
    "when",
    "should",
    "into",
    "using",
    "user",
    "jira",
    "runtime",
    "acceptance",
    "criteria",
    "repository"
  ]);

  return Array.from(new Set(rawWords.filter((word) => !stopWords.has(word)))).slice(0, 12);
}

function detectRepoType(workspace) {
  const buildFiles = workspace.buildFiles.map((entry) => String(entry).toLowerCase());
  const topLevel = workspace.topLevelEntries.map((entry) => String(entry).toLowerCase());
  const inventory = workspace.fileInventory.map((entry) => String(entry).toLowerCase());

  if (
    buildFiles.some((entry) => entry.includes("angular.json")) ||
    topLevel.includes("angular.json") ||
    inventory.includes("angular.json")
  ) {
    return "angular";
  }

  if (topLevel.includes("package.json")) {
    return "node";
  }

  return "unknown";
}

function deriveSiblingFiles(activeFile, inventory) {
  const current = String(activeFile || "").trim();
  if (!current) {
    return [];
  }

  const fileName = basename(current);
  const folderPath = dirname(current);
  const lowerInventory = inventory.map((entry) => String(entry).replace(/\\/g, "/"));
  const siblings = new Set();

  const inventorySet = new Set(lowerInventory);

  if (folderPath) {
    for (const filePath of lowerInventory) {
      if (dirname(filePath) === folderPath) {
        siblings.add(filePath);
      }
    }
  }

  if (fileName.endsWith(".component.ts")) {
    const base = current.slice(0, -".ts".length);
    [
      `${base}.html`,
      `${base}.scss`,
      `${base}.css`,
      `${base}.spec.ts`
    ]
      .filter((candidate) => inventorySet.has(candidate))
      .forEach((candidate) => siblings.add(candidate));
  }

  return Array.from(siblings).filter(Boolean);
}

function deriveProjectSupportFiles(inventory, detectedSkills) {
  const results = new Set();
  const lowerInventory = inventory.map((entry) => String(entry).replace(/\\/g, "/"));

  for (const filePath of lowerInventory) {
    if (/labels\.json$/i.test(filePath)) {
      results.add(filePath);
    }
    if (/service/i.test(filePath) && detectedSkills.includes("uploads")) {
      results.add(filePath);
    }
    if (/module\.ts$/i.test(filePath) && detectedSkills.includes("forms")) {
      results.add(filePath);
    }
  }

  return Array.from(results);
}

function inferBuildRunCommands(repoType, topLevelEntries) {
  if (repoType === "angular") {
    const packageManagers = topLevelEntries.map((entry) => entry.toLowerCase());
    if (packageManagers.includes("pnpm-lock.yaml")) {
      return {
        build: "pnpm run build",
        run: "pnpm start",
        preview: "ngrok http 4200"
      };
    }
    if (packageManagers.includes("yarn.lock")) {
      return {
        build: "yarn build",
        run: "yarn start",
        preview: "ngrok http 4200"
      };
    }
    return {
      build: "npm run build",
      run: "npm start",
      preview: "ngrok http 4200"
    };
  }

  return {
    build: "Determine from repository",
    run: "Determine from repository",
    preview: "Determine from repository"
  };
}

export function enrichRepositoryPlan({ workspace, jiraIssue, requirementText, detectedSkills }) {
  const normalized = normalizeWorkspace(workspace);
  const repoType = detectRepoType(normalized);
  const keywords = extractKeywords({
    jiraIssue,
    requirementText,
    activeFile: normalized.activeFile
  });

  const normalizedInventory = normalized.fileInventory.map((filePath) =>
    normalizeRelativePath(filePath, normalized)
  );
  const activeFile = normalizeRelativePath(normalized.activeFile, normalized);
  const siblingFiles = deriveSiblingFiles(activeFile, normalizedInventory);
  const supportFiles = deriveProjectSupportFiles(normalizedInventory, detectedSkills);

  const rankedFiles = normalizedInventory
    .map((filePath) => ({
      filePath,
      score: scoreFile(filePath, keywords)
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 12)
    .map((entry) => entry.filePath);

  const filesToInspect = Array.from(
    new Set([
      activeFile,
      ...siblingFiles,
      ...supportFiles,
      ...rankedFiles
    ].filter(Boolean))
  );

  const buildRun = inferBuildRunCommands(repoType, normalized.topLevelEntries);

  const likelyAreas = [
    repoType === "angular" ? "Angular feature modules and shared components" : "Project source tree",
    detectedSkills.includes("forms") ? "Form controls and validation flows" : "",
    detectedSkills.includes("tables") ? "Table/grid rendering and displayed columns" : "",
    detectedSkills.includes("uploads") ? "Upload flows and attachment handling" : ""
  ].filter(Boolean);

  const filesToModify = filesToInspect.filter((filePath) =>
    /\.(ts|html|scss|css|json)$/i.test(filePath)
  );

  const reuseMap = [];
  if (filesToInspect.some((file) => /service/i.test(file))) {
    reuseMap.push("Reuse existing services before introducing new data flows.");
  }
  if (filesToInspect.some((file) => /component/i.test(file))) {
    reuseMap.push("Extend existing feature components before creating new ones.");
  }
  if (repoType === "angular") {
    reuseMap.push("Preserve Angular module/component structure and repository-native form/table patterns.");
  }

  return {
    repoType,
    filesToInspect,
    filesToModify,
    likelyAreas,
    buildRun,
    keywords,
    reuseMap
  };
}
