const FIGMA_URL_PATTERN = /https?:\/\/(?:www\.)?figma\.com\/[^\s)]+/gi;
const URL_PATTERN = /https?:\/\/[^\s)]+/gi;

function collectTextFromAdf(node, state) {
  if (!node || typeof node !== "object") {
    return;
  }

  if (typeof node.text === "string") {
    state.text.push(node.text);
  }

  if (node.type === "inlineCard" || node.type === "link" || node.type === "smartLink") {
    const url =
      node.attrs?.url ||
      node.attrs?.href ||
      node.attrs?.data?.url ||
      node.url;
    if (typeof url === "string") {
      state.links.push(url);
    }
  }

  if (Array.isArray(node.marks)) {
    for (const mark of node.marks) {
      const url = mark?.attrs?.href;
      if (typeof url === "string") {
        state.links.push(url);
      }
    }
  }

  if (Array.isArray(node.content)) {
    for (const child of node.content) {
      collectTextFromAdf(child, state);
    }
  }
}

function adfToTextAndLinks(value) {
  if (!value) {
    return { text: "", links: [] };
  }

  if (typeof value === "string") {
    return {
      text: value,
      links: Array.from(new Set(value.match(URL_PATTERN) || []))
    };
  }

  const state = {
    text: [],
    links: []
  };
  collectTextFromAdf(value, state);
  return {
    text: state.text.join(" ").replace(/\s+/g, " ").trim(),
    links: Array.from(new Set(state.links))
  };
}

function normalizeAttachment(attachment) {
  const mimeType = String(
    attachment?.mimeType || attachment?.mime_type || attachment?.contentType || ""
  ).toLowerCase();
  const filename = String(attachment?.filename || attachment?.name || "").trim();
  const isImage = mimeType.startsWith("image/");

  return {
    id: String(attachment?.id || ""),
    filename,
    mimeType,
    contentUrl: attachment?.content || attachment?.contentUrl || "",
    thumbnailUrl: attachment?.thumbnail || attachment?.thumbnailUrl || "",
    classification: isImage ? "direct_image" : mimeType ? "non_visual" : "unsupported"
  };
}

function normalizeComment(comment) {
  const body = adfToTextAndLinks(comment?.body || comment?.comment || "");
  return {
    author: comment?.author?.displayName || comment?.author?.name || "",
    text: body.text,
    links: body.links
  };
}

function inferAcceptanceCriteria(fields) {
  const candidates = [];
  const keys = Object.keys(fields || {});

  for (const key of keys) {
    const value = fields[key];
    if (value == null) {
      continue;
    }

    const keyLc = key.toLowerCase();
    if (
      keyLc.includes("acceptance") ||
      keyLc.includes("criteria") ||
      keyLc.includes("ac_") ||
      keyLc.includes("technical") ||
      keyLc.includes("notes")
    ) {
      const extracted = adfToTextAndLinks(value).text;
      if (extracted) {
        candidates.push({ field: key, text: extracted });
      }
      continue;
    }

    const extracted = adfToTextAndLinks(value).text;
    if (/acceptance criteria|^ac[:\s-]/i.test(extracted)) {
      candidates.push({ field: key, text: extracted });
    }
  }

  return candidates;
}

function inferAcceptanceCriteriaFromComments(comments) {
  const inferred = [];

  for (const comment of comments) {
    if (/acceptance criteria|criteria|should|must/i.test(comment.text || "")) {
      inferred.push({
        field: `comment:${comment.author || "unknown"}`,
        text: comment.text
      });
    }
  }

  return inferred;
}

function extractBusinessSummary({ summary, descriptionText, acceptanceCriteria }) {
  return [
    summary ? `Summary: ${summary}` : "",
    descriptionText ? `Description: ${descriptionText}` : "",
    acceptanceCriteria.length
      ? `Acceptance Criteria Sources: ${acceptanceCriteria
          .map((item) => `${item.field}: ${item.text}`)
          .join(" | ")}`
      : ""
  ]
    .filter(Boolean)
    .join("\n");
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function extractLinksFromTexts(texts) {
  return unique(
    texts.flatMap((text) => (typeof text === "string" ? text.match(URL_PATTERN) || [] : []))
  );
}

export function createJiraClientFromEnv(env = process.env) {
  const baseUrl = env.AEF_JIRA_BASE_URL || env.JIRA_BASE_URL || "";
  const email = env.AEF_JIRA_EMAIL || env.JIRA_EMAIL || "";
  const apiToken = env.AEF_JIRA_API_TOKEN || env.JIRA_API_TOKEN || "";
  const bearerToken = env.AEF_JIRA_BEARER_TOKEN || env.JIRA_BEARER_TOKEN || "";

  if (!baseUrl) {
    return null;
  }

  const fields = env.AEF_JIRA_FIELDS || [
    "summary",
    "description",
    "comment",
    "attachment",
    "issuelinks",
    "subtasks",
    "labels",
    "components",
    "priority"
  ].join(",");

  function getHeaders() {
    const headers = {
      Accept: "application/json"
    };

    if (bearerToken) {
      headers.Authorization = `Bearer ${bearerToken}`;
      return headers;
    }

    if (email && apiToken) {
      const encoded = Buffer.from(`${email}:${apiToken}`).toString("base64");
      headers.Authorization = `Basic ${encoded}`;
    }

    return headers;
  }

  async function fetchIssue(jiraId) {
    const url = new URL(`/rest/api/3/issue/${encodeURIComponent(jiraId)}`, baseUrl);
    url.searchParams.set("fields", fields);

    const response = await fetch(url, {
      method: "GET",
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`Jira fetch failed: ${response.status} ${response.statusText}`);
    }

    const issue = await response.json();
    return normalizeIssue(issue);
  }

  return {
    fetchIssue
  };
}

export function normalizeIssue(issue) {
  const fields = issue?.fields || {};
  const description = adfToTextAndLinks(fields.description || "");
  const comments = Array.isArray(fields.comment?.comments)
    ? fields.comment.comments.map(normalizeComment)
    : [];
  const attachments = Array.isArray(fields.attachment)
    ? fields.attachment.map(normalizeAttachment)
    : [];
  const acceptanceCriteria = [
    ...inferAcceptanceCriteria(fields),
    ...inferAcceptanceCriteriaFromComments(comments)
  ];
  const commentTexts = comments.map((comment) => comment.text);
  const links = unique([
    ...description.links,
    ...comments.flatMap((comment) => comment.links),
    ...extractLinksFromTexts(commentTexts),
    ...extractLinksFromTexts(acceptanceCriteria.map((item) => item.text))
  ]);
  const figmaLinks = unique(links.flatMap((link) => link.match(FIGMA_URL_PATTERN) || []));

  return {
    id: issue?.key || "",
    summary: String(fields.summary || "").trim(),
    descriptionText: description.text,
    acceptanceCriteria,
    comments,
    attachments,
    figmaLinks,
    labels: Array.isArray(fields.labels) ? fields.labels : [],
    components: Array.isArray(fields.components)
      ? fields.components.map((component) => component?.name).filter(Boolean)
      : [],
    priority: fields.priority?.name || "",
    businessSummary: extractBusinessSummary({
      summary: String(fields.summary || "").trim(),
      descriptionText: description.text,
      acceptanceCriteria
    })
  };
}
