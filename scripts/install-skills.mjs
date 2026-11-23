#!/usr/bin/env node
// Copy this collection's skills into a target repo. Keep links to shared docs working.
// Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude]
// The collection must also be present in <target-dir>/docs/agent-docs/.

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillRoot = join(root, "skills");
const args = process.argv.slice(2);
const targets = args.filter((arg) => !arg.startsWith("--"));
const flags = args.filter((arg) => arg.startsWith("--"));
const allowed = new Set(["--agents", "--claude"]);
if (targets.length !== 1 || flags.some((flag) => !allowed.has(flag))) {
  console.error("Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude]");
  process.exit(1);
}
const target = resolve(targets[0]);
if (!existsSync(target) || !statSync(target).isDirectory()) {
  console.error(`Target is not a directory: ${target}`);
  process.exit(1);
}
const docsRoot = target === root ? root : join(target, "docs", "agent-docs");
if (!existsSync(join(docsRoot, "AGENTS.md"))) {
  console.error("Install the collection into <target-dir>/docs/agent-docs/ first (AGENTS.md missing).");
  process.exit(1);
}
const destinations = !flags.length || flags.length === 2
  ? [".agents/skills", ".claude/skills"]
  : [flags[0] === "--agents" ? ".agents/skills" : ".claude/skills"];

function within(parent, candidate) {
  const sub = relative(parent, candidate);
  return sub === "" || (!sub.startsWith(".." + sep) && sub !== ".." && !isAbsolute(sub));
}

// Skill links into core/, templates/ etc are relative to this collection.
// Repoint those links at the installed collection; links between skills stay relative.
function repairLinks(sourceFile, destinationFile) {
  const markdown = readFileSync(sourceFile, "utf8");
  return markdown.replace(/\]\((\.\.\/[^)\s#]+)(#[^)]*)?\)/g, (full, path, hash = "") => {
    const sourceTarget = resolve(dirname(sourceFile), path);
    if (!within(root, sourceTarget) || within(skillRoot, sourceTarget)) return full;
    const installedTarget = join(docsRoot, relative(root, sourceTarget));
    const newPath = relative(dirname(destinationFile), installedTarget).split(sep).join("/");
    return `](${newPath}${hash})`;
  });
}
function walk(path, out = []) {
  for (const entry of readdirSync(path)) {
    const file = join(path, entry);
    if (statSync(file).isDirectory()) walk(file, out);
    else out.push(file);
  }
  return out;
}

const skills = readdirSync(skillRoot).filter((name) =>
  existsSync(join(skillRoot, name, "SKILL.md")),
);
for (const dest of destinations) {
  for (const skill of skills) {
    const src = join(skillRoot, skill);
    const out = join(target, dest, skill);
    mkdirSync(out, { recursive: true });
    cpSync(src, out, { recursive: true, force: true });
    for (const sourceFile of walk(src).filter((file) => file.endsWith(".md"))) {
      const destFile = join(out, relative(src, sourceFile));
      writeFileSync(destFile, repairLinks(sourceFile, destFile));
    }
  }
  console.log(`${dest}: ${skills.length} skills`);
}
