#!/usr/bin/env node
// Explicit local installation; no network, shell execution or runtime dependencies.
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const hash = bytes => createHash("sha256").update(bytes).digest("hex");
const args = process.argv.slice(2);
const targets = args.filter(arg => !arg.startsWith("--"));
const selected = args.filter(arg => arg.startsWith("--skill=")).map(arg => arg.slice(8));
const flags = args.filter(arg => arg.startsWith("--") && !arg.startsWith("--skill="));
const allowed = new Set(["--agents", "--claude", "--dry-run", "--update", "--prune"]);
const has = flag => flags.includes(flag);
const usage = "Usage: node scripts/install-skills.mjs <target-dir> [--agents] [--claude] [--skill=name ...] [--dry-run] [--update] [--prune]";
function fail(message) { throw new Error(message); }
function within(parent, candidate) {
  const sub = relative(parent, candidate);
  return sub === "" || (!sub.startsWith(".." + sep) && sub !== ".." && !isAbsolute(sub));
}
// Reject symlinks at every existing component, including dangling links.
// The explicitly selected target is resolved once; all managed paths stay below it.
function inspect(parent, path, kind) {
  if (!within(parent, path)) fail("Path escapes target: " + path);
  let current = parent;
  const parts = relative(parent, path).split(sep).filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    current = join(current, parts[i]);
    let st;
    try { st = lstatSync(current); } catch (err) { if (err.code === "ENOENT") return false; throw err; }
    if (st.isSymbolicLink()) fail("Symbolic link not permitted: " + current);
    if (i < parts.length - 1 || kind === "directory") {
      if (!st.isDirectory()) fail("Expected directory: " + current);
    } else if (!st.isFile()) fail("Expected regular file: " + current);
  }
  return true;
}
function walk(parent, path) {
  inspect(parent, path, "directory");
  return readdirSync(path).sort().flatMap(entry => {
    const file = join(path, entry);
    const st = lstatSync(file);
    if (st.isSymbolicLink()) fail("Symbolic link not permitted: " + file);
    if (st.isDirectory()) return walk(parent, file);
    if (!st.isFile()) fail("Expected regular file: " + file);
    return [file];
  });
}
function repairLinks(sourceFile, destinationFile, docsRoot) {
  return readFileSync(sourceFile, "utf8").replace(/\]\((\.\.\/[^)\s#]+)(#[^)]*)?\)/g, (full, path, fragment = "") => {
    const sourceTarget = resolve(dirname(sourceFile), path);
    if (!within(docsRoot, sourceTarget)) fail("Reference escapes collection: " + path);
    return "](" + relative(dirname(destinationFile), sourceTarget).split(sep).join("/") + fragment + ")";
  });
}
function inventory(parent, path) {
  if (!inspect(parent, path, "file")) return {};
  const value = JSON.parse(readFileSync(path, "utf8"));
  if (value.version !== 1 || !value.files || Array.isArray(value.files) || typeof value.files !== "object") fail("Invalid managed inventory: " + path);
  for (const [key, digest] of Object.entries(value.files)) {
    const parts = key.split("/");
    if (parts.length < 2 || !namePattern.test(parts[0]) || parts.some(p => !p || p === "." || p === ".." || /[\\:]/.test(p)) || !/^[a-f0-9]{64}$/.test(digest)) fail("Invalid managed inventory entry: " + key);
  }
  return value.files;
}
function main() {
  if (targets.length !== 1 || flags.some(flag => !allowed.has(flag)) || new Set(flags).size !== flags.length || (has("--prune") && !selected.length)) fail(usage + "\n--prune requires an explicit desired skill selection.");
  const target = realpathSync(resolve(targets[0]));
  if (!lstatSync(target).isDirectory()) fail("Target is not a directory");
  const docsRoot = target === realpathSync(root) ? target : join(target, "docs", "agent-docs");
  const skillRoot = join(docsRoot, "skills");
  if (!inspect(target, join(docsRoot, "AGENTS.md"), "file") || !inspect(target, skillRoot, "directory")) fail("Install the collection into <target-dir>/docs/agent-docs/ first (AGENTS.md or skills missing).");
  const available = readdirSync(skillRoot).filter(name => namePattern.test(name) && inspect(target, join(skillRoot, name, "SKILL.md"), "file")).sort();
  if (selected.some(name => !available.includes(name))) fail("Unknown skill selection");
  const skills = selected.length ? [...new Set(selected)].sort() : available;
  const destinations = !has("--agents") && !has("--claude") || has("--agents") && has("--claude") ? [".agents/skills", ".claude/skills"] : [has("--agents") ? ".agents/skills" : ".claude/skills"];
  const plans = [];
  const add = (path, next) => {
    const previous = inspect(target, path, "file") ? readFileSync(path) : null;
    if (previous === null && next === null || previous && next && previous.equals(next)) return;
    plans.push({path, previous, next});
  };
  for (const dest of destinations) {
    const dir = join(target, dest), index = join(dir, ".agent-documents.json");
    const old = inventory(target, index);
    const managed = Object.assign(Object.create(null), old);
    const desired = new Set();
    for (const skill of skills) {
      const src = join(skillRoot, skill);
      for (const file of walk(target, src)) {
        const key = skill + "/" + relative(src, file).split(sep).join("/");
        const out = join(dir, ...key.split("/"));
        const bytes = file.endsWith(".md") ? Buffer.from(repairLinks(file, out, docsRoot)) : readFileSync(file);
        const prior = inspect(target, out, "file") ? readFileSync(out) : null;
        if (prior && !prior.equals(bytes) && (!has("--update") || !Object.hasOwn(old, key) || hash(prior) !== old[key])) fail("Existing file differs; review before replacing: " + out);
        desired.add(key); managed[key] = hash(bytes); add(out, bytes);
      }
    }
    if (has("--prune") || has("--update")) for (const [key, digest] of Object.entries(old)) {
      if (desired.has(key) || (!has("--prune") && !skills.includes(key.split("/")[0]))) continue;
      const out = join(dir, ...key.split("/"));
      if (inspect(target, out, "file") && hash(readFileSync(out)) !== digest) fail("Locally changed managed file; review before removing: " + out);
      add(out, null); delete managed[key];
    }
    const sorted = Object.fromEntries(Object.entries(managed).sort(([a],[b]) => a.localeCompare(b)));
    add(index, Buffer.from(JSON.stringify({version:1, files:sorted}, null, 2) + "\n"));
  }
  for (const {path, previous, next} of plans) console.log((next === null ? "remove " : previous ? "update " : "create ") + relative(target, path));
  if (has("--dry-run")) return;
  // Preflight all conflicts before writes. Roll back completed file changes on I/O errors.
  const done = [];
  const dirs = [];
  function ensureDir(dir) {
    if (inspect(target, dir, "directory")) return;
    ensureDir(dirname(dir)); mkdirSync(dir); dirs.push(dir);
  }
  try {
    for (const plan of plans) {
      const {path, previous, next} = plan;
      const current = inspect(target, path, "file") ? readFileSync(path) : null;
      if (previous === null ? current !== null : !current || !previous.equals(current)) fail("File changed during installation: " + path);
      if (next !== null) { ensureDir(dirname(path)); done.push(plan); writeFileSync(path, next, {flag: previous ? "w" : "wx"}); }
      else { done.push(plan); rmSync(path); }
    }
  } catch (err) {
    const rollbackErrors = [];
    for (const {path, previous} of done.reverse()) {
      try { inspect(target, path, "file"); if (previous === null) rmSync(path, {force:true}); else writeFileSync(path, previous); }
      catch (error) { rollbackErrors.push(path + ": " + error.message); }
    }
    for (const dir of dirs.reverse()) { try { if (readdirSync(dir).length === 0) rmSync(dir, {recursive:true}); } catch { /* report original failure */ } }
    fail(err.message + (rollbackErrors.length ? "\nRollback incomplete: " + rollbackErrors.join("; ") : ""));
  }
  console.log(destinations.join(", ") + ": " + skills.length + " selected skills");
}
try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
