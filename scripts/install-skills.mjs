#!/usr/bin/env node
// Copy this collection's skills into a target repo. Keep links to the locally installed collection working.
// Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude] [--skill=name ...]
// The collection must also be present in <target-dir>/docs/agent-docs/.

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const targets = args.filter((arg) => !arg.startsWith("--"));
const selected = args.filter(arg => arg.startsWith('--skill=')).map(arg => arg.slice(8));
const flags = args.filter(arg => arg.startsWith('--') && !arg.startsWith('--skill='));
const allowed = new Set(["--agents", "--claude"]);
if (targets.length !== 1 || flags.some((flag) => !allowed.has(flag)) || new Set(flags).size !== flags.length) {
  console.error("Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude]");
  process.exit(1);
}
const target = resolve(targets[0]);
if (!existsSync(target) || !statSync(target).isDirectory()) {
  console.error(`Target is not a directory: ${target}`);
  process.exit(1);
}
const docsRoot = target === root ? root : join(target, "docs", "agent-docs");
const skillRoot = join(docsRoot, "skills");
if (!existsSync(join(docsRoot, "AGENTS.md")) || !existsSync(skillRoot)) {
  console.error("Install the collection into <target-dir>/docs/agent-docs/ first (AGENTS.md or skills missing).");
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
// Repoint links at the local collection, including unselected companion skills.
function repairLinks(sourceFile, destinationFile) {
  const markdown = readFileSync(sourceFile, "utf8");
  return markdown.replace(/\]\((\.\.\/[^)\s#]+)(#[^)]*)?\)/g, (full, path, hash = "") => {
    const sourceTarget = resolve(dirname(sourceFile), path);
    if (!within(docsRoot, sourceTarget)) return full;
    const installedTarget = join(docsRoot, relative(docsRoot, sourceTarget));
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

const available = readdirSync(skillRoot).filter(name => existsSync(join(skillRoot, name, "SKILL.md")));
if (selected.some(name => !available.includes(name))) {
  console.error("Unknown skill selection"); process.exit(1);
}
const skills = selected.length ? [...new Set(selected)] : available;
const writes = [];
for (const dest of destinations) for (const skill of skills) {
  const src = join(skillRoot, skill);
  const out = join(target, dest, skill);
  for (const sourceFile of walk(src)) {
    const destFile = join(out, relative(src, sourceFile));
    const content = sourceFile.endsWith(".md") ? Buffer.from(repairLinks(sourceFile, destFile)) : readFileSync(sourceFile);
    if (existsSync(destFile) && !readFileSync(destFile).equals(content)) {
      console.error("Existing file differs; review before replacing: " + destFile); process.exit(1);
    }
    writes.push({destFile,content});
  }
}
for (const {destFile,content} of writes) {
  mkdirSync(dirname(destFile), {recursive:true}); writeFileSync(destFile, content);
}
for (const dest of destinations) console.log(dest + ": " + skills.length + " skills");
