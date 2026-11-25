#!/usr/bin/env node
// Validate the docs collection: budgets, skill frontmatter, links, MANIFEST coverage.
// Usage: node scripts/check-docs.mjs
// Exit code 0 = pass, 1 = errors found. Warnings never fail the run.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];

const AGENTS_BUDGET = 120;
const MANIFEST_BUDGET = 200;
const TOPIC_BUDGET = 150;
const SKILL_BUDGET = 100;
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === ".git" || entry === "node_modules") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = walk(root);
const mdFiles = files.filter((f) => f.endsWith(".md"));
const skillEntries = [];
const rel = (f) => relative(root, f).split("\\").join("/");
const lineCount = (text) => text.split(/\r?\n/).length;

// --- 1. Line budgets -------------------------------------------------------
for (const file of mdFiles) {
  const text = readFileSync(file, "utf8");
  const lines = lineCount(text);
  const r = rel(file);
  const budget =
    r === "AGENTS.md"
      ? AGENTS_BUDGET
      : r === "MANIFEST.md"
        ? MANIFEST_BUDGET
        : r.endsWith("SKILL.md")
          ? SKILL_BUDGET
          : TOPIC_BUDGET;
  if (lines > budget) {
    errors.push(`budget: ${r} has ${lines} lines (max ${budget})`);
  }
}

// --- 2. Skill frontmatter --------------------------------------------------
const entryPath = join(root, "SKILL.md");
if (!existsSync(entryPath)) errors.push("frontmatter: root SKILL.md missing");
else {
  const entry = readFileSync(entryPath, "utf8");
  const fm = entry.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)?.[1] ?? "";
  if (!/^name: agent-documents$/m.test(fm)) errors.push("frontmatter: invalid collection skill name");
  const desc = fm.match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!desc || desc.length > 1024) errors.push("frontmatter: invalid collection skill description");
}
const skillsDir = join(root, "skills");
if (existsSync(skillsDir)) {
  for (const dir of readdirSync(skillsDir)) {
    const skillFile = join(skillsDir, dir, "SKILL.md");
    if (!existsSync(skillFile)) continue;
    skillEntries.push(skillFile);
    const text = readFileSync(skillFile, "utf8");
    const r = rel(skillFile);
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) {
      errors.push(`frontmatter: ${r} is missing YAML frontmatter (name, description)`);
      continue;
    }
    const fm = match[1];
    const name = fm.match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = fm.match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (!name) errors.push(`frontmatter: ${r} has no name`);
    else {
      if (!NAME_RE.test(name)) errors.push(`frontmatter: ${r} name "${name}" is not lowercase-hyphen`);
      if (name !== dir) errors.push(`frontmatter: ${r} name "${name}" does not match directory "${dir}"`);
    }
    if (!description) errors.push(`frontmatter: ${r} has no description`);
    else if (description.length > 1024) errors.push(`frontmatter: ${r} description exceeds 1024 chars`);
  }
}

// --- 3. Relative links -----------------------------------------------------
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const file of mdFiles) {
  const text = readFileSync(file, "utf8");
  const r = rel(file);
  for (const match of text.matchAll(linkRe)) {
    let target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    target = target.split("#")[0];
    if (!target) continue;
    const resolved = resolve(dirname(file), decodeURIComponent(target));
    if (rel(resolved) === ".." || rel(resolved).startsWith("../") || !existsSync(resolved)) {
      errors.push(`link: ${r} -> ${match[1]} (not found)`);
    }
  }
}

// --- 4. MANIFEST coverage --------------------------------------------------
const manifestPath = join(root, "MANIFEST.md");
for (const entry of skillEntries) {
  for (const index of [join(root, "AGENTS.md"), join(root, "skills", "README.md"), manifestPath]) {
    const references = [...readFileSync(index, "utf8").matchAll(linkRe)]
      .map(m => resolve(dirname(index), m[1].split("#")[0]));
    if (!references.includes(entry)) errors.push("unlisted skill: " + rel(entry) + " in " + rel(index));
  }
}
if (!skillEntries.length) errors.push("no individual skills found");
if (existsSync(manifestPath)) {
  const manifest = readFileSync(manifestPath, "utf8");
  const listed = new Set([...manifest.matchAll(linkRe)].map((m) => m[1].split("#")[0]));
  for (const file of mdFiles) {
    const r = rel(file);
    if (!listed.has(r)) warnings.push(`manifest: ${r} is not listed in MANIFEST.md`);
  }
} else {
  errors.push("manifest: MANIFEST.md is missing");
}

// --- 5. Token estimate -----------------------------------------------------
const estimates = mdFiles
  .map((f) => {
    const bytes = Buffer.byteLength(readFileSync(f, "utf8"), "utf8");
    return { file: rel(f), tokens: Math.round(bytes / 4) };
  })
  .sort((a, b) => b.tokens - a.tokens);
const total = estimates.reduce((sum, e) => sum + e.tokens, 0);

// --- Report ----------------------------------------------------------------
console.log(`Checked ${mdFiles.length} markdown files.`);
console.log(`Estimated tokens: ${total} total, largest:`);
for (const e of estimates.slice(0, 5)) console.log(`  ~${e.tokens}\t${e.file}`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  warn ${w}`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  error ${e}`);
  process.exit(1);
}
console.log("\nAll checks passed.");
