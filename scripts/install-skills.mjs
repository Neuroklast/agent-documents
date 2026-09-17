#!/usr/bin/env node
// Copy skills/*/ into a target repo so agent tools discover them.
// Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude]
// Default: installs into both .agents/skills/ and .claude/skills/.

import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");

const args = process.argv.slice(2);
const targetArg = args.find((a) => !a.startsWith("--"));
const targets = [];
if (args.includes("--agents") || args.length === 0) targets.push(".agents/skills");
if (args.includes("--claude") || args.length === 0) targets.push(".claude/skills");

if (!targetArg || targets.length === 0) {
  console.error("Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude]");
  process.exit(1);
}

const target = resolve(targetArg);
if (!existsSync(target) || !statSync(target).isDirectory()) {
  console.error(`Target is not a directory: ${target}`);
  process.exit(1);
}
if (!existsSync(skillsDir)) {
  console.error(`No skills/ directory in ${root}`);
  process.exit(1);
}

const skills = readdirSync(skillsDir).filter((name) =>
  statSync(join(skillsDir, name)).isDirectory(),
);

let installed = 0;
for (const dest of targets) {
  for (const skill of skills) {
    const src = join(skillsDir, skill);
    if (!existsSync(join(src, "SKILL.md"))) continue;
    const out = join(target, dest, skill);
    mkdirSync(out, { recursive: true });
    cpSync(src, out, { recursive: true, force: true });
    installed++;
  }
  console.log(`${dest}: ${skills.length} skills`);
}

console.log(`Installed ${installed} skill copies into ${target}`);
