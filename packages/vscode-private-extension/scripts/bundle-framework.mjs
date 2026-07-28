import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(packageRoot, "..", "..");
const bundledRoot = path.join(packageRoot, "bundled-framework");

const bundleTargets = [
  "copilot-instructions.md",
  "prompts",
  "instructions",
  "runtime",
  "hooks",
  "agents",
  "skills"
];

fs.rmSync(bundledRoot, { recursive: true, force: true });
fs.mkdirSync(bundledRoot, { recursive: true });

for (const target of bundleTargets) {
  const source = path.join(repoRoot, target);
  const destination = path.join(bundledRoot, target);
  fs.cpSync(source, destination, {
    recursive: true,
    force: true,
    filter: (src) => !src.endsWith('.DS_Store')
  });
}

const overview = `# Bundled Framework Assets

This directory packages the AI Engineering Framework resources directly into the VS Code extension for internal testing.

Included sources:

- copilot-instructions.md
- prompts/
- instructions/
- runtime/
- hooks/
- agents/
- skills/

These files are copied from the repository root during build/package time.
`;

fs.writeFileSync(path.join(bundledRoot, 'README.md'), overview);
