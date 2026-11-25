import test from "node:test";
import assert from "node:assert/strict";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const script = resolve(dirname(fileURLToPath(import.meta.url)), "install-skills.mjs");

function fixture(fn) {
  const dir = mkdtempSync(join(tmpdir(), "agent-docs-install-"));
  try {
    const docs = join(dir, "docs", "agent-docs");
    mkdirSync(docs, { recursive: true });
    cpSync(resolve(dirname(script), ".."), docs, { recursive: true, filter: source => ![".git", "node_modules"].includes(source.split(/[\\/]/).pop()) });
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
function run(...args) {
  return spawnSync(process.execPath, [script, ...args], { encoding: "utf8" });
}

test("default installs both tool directories and resolves collection links", () => fixture((dir) => {
  const result = run(dir);
  assert.equal(result.status, 0, result.stderr);
  for (const parent of [".agents", ".claude"]) {
    const skill = join(dir, parent, "skills", "plan-first", "SKILL.md");
    assert.ok(existsSync(skill), skill);
    const content = readFileSync(skill, "utf8");
    const match = content.match(/\]\(([^)]+AGENTS\.md)\)/);
    assert.ok(match, "AGENTS.md link rewritten");
    assert.equal(resolve(dirname(skill), match[1]), join(dir, "docs", "agent-docs", "AGENTS.md"));
  }
}));

test("--agents does not install a Claude copy", () => fixture((dir) => {
  const result = run(dir, "--agents");
  assert.equal(result.status, 0, result.stderr);
  assert.ok(existsSync(join(dir, ".agents", "skills", "evidence-review", "SKILL.md")));
  assert.equal(existsSync(join(dir, ".claude")), false);
}));

test("missing collection fails without writing partial skills", () => {
  const dir = mkdtempSync(join(tmpdir(), "agent-docs-install-"));
  try {
    const result = run(dir);
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /AGENTS.md or skills missing/);
    assert.equal(existsSync(join(dir, ".agents")), false);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("unknown flags fail with usage", () => fixture((dir) => {
  const result = run(dir, "--unexpected");
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Usage:/);
}));

test("selective install links to local unselected companions and does not overwrite edits", () => fixture(dir => {
  const args = [dir, "--agents", "--skill=incremental-delivery"];
  const first = run(...args);
  assert.equal(first.status, 0, first.stderr);
  const installed = join(dir, ".agents", "skills", "incremental-delivery", "SKILL.md");
  const text = readFileSync(installed, "utf8");
  for (const match of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (match[1].startsWith("..")) assert.ok(existsSync(resolve(dirname(installed), match[1])), match[1]);
  }
  assert.equal(existsSync(join(dir, ".agents", "skills", "evidence-review")), false);
  assert.equal(run(...args).status, 0);
  writeFileSync(installed, "local changes");
  assert.notEqual(run(...args).status, 0);
  assert.equal(readFileSync(installed, "utf8"), "local changes");
}));

test("every installed skill in both agent layouts retains all local references", () => fixture(dir => {
  const result = run(dir);
  assert.equal(result.status, 0, result.stderr);
  const source = join(dir, "docs", "agent-docs", "skills");
  const names = readdirSync(source).filter(name => existsSync(join(source, name, "SKILL.md")));
  assert.ok(names.length > 0);
  for (const layout of [".agents", ".claude"]) {
    for (const name of names) {
      const file = join(dir, layout, "skills", name, "SKILL.md");
      const content = readFileSync(file, "utf8");
      for (const match of content.matchAll(/\]\(([^)\s]+)\)/g)) {
        const link = match[1].split("#")[0];
        if (!link || /^(https?:|mailto:)/.test(link)) continue;
        assert.ok(existsSync(resolve(dirname(file), link)), file + " -> " + link);
      }
    }
  }
}));
test("unknown skill selection does not create an installation", () => fixture(dir => {
  assert.notEqual(run(dir, "--agents", "--skill=not-a-skill").status, 0);
  assert.equal(existsSync(join(dir, ".agents")), false);
}));

test("dry-run writes nothing; managed updates and pruning preserve custom skills", () => fixture(dir => {
  const args = [dir, "--agents", "--skill=plan-first"];
  assert.equal(run(...args, "--dry-run").status, 0);
  assert.equal(existsSync(join(dir, ".agents")), false);
  assert.equal(run(...args).status, 0);
  const source = join(dir, "docs", "agent-docs", "skills", "plan-first", "SKILL.md");
  const installed = join(dir, ".agents", "skills", "plan-first", "SKILL.md");
  writeFileSync(source, readFileSync(source, "utf8") + "\nNew guidance.\n");
  assert.notEqual(run(...args).status, 0);
  assert.equal(run(...args, "--update").status, 0);
  assert.match(readFileSync(installed, "utf8"), /New guidance/);
  const custom = join(dir, ".agents", "skills", "custom");
  mkdirSync(custom); writeFileSync(join(custom, "SKILL.md"), "mine");
  assert.equal(run(dir, "--agents", "--skill=frontend-ui", "--prune").status, 0);
  assert.equal(existsSync(installed), false);
  assert.equal(readFileSync(join(custom, "SKILL.md"), "utf8"), "mine");
}));
test("preflight rejects symlink destinations without touching their targets", {skip: process.platform === "win32"}, () => fixture(dir => {
  const external = mkdtempSync(join(tmpdir(), "agent-docs-external-"));
  try {
    symlinkSync(external, join(dir, ".agents"), "dir");
    assert.notEqual(run(dir, "--agents", "--skill=plan-first").status, 0);
    assert.deepEqual(readdirSync(external), []);
  } finally { rmSync(external, {recursive:true, force:true}); }
}));
test("update and prune refuse locally modified managed files", () => fixture(dir => {
  const args = [dir, "--agents", "--skill=plan-first"];
  assert.equal(run(...args).status, 0);
  const file = join(dir, ".agents", "skills", "plan-first", "SKILL.md");
  writeFileSync(file, "customized");
  assert.notEqual(run(...args, "--update").status, 0);
  assert.notEqual(run(dir, "--agents", "--skill=frontend-ui", "--prune").status, 0);
  assert.equal(readFileSync(file, "utf8"), "customized");
  assert.equal(existsSync(join(dir, ".agents", "skills", "frontend-ui")), false);
}));

test("explicit host layouts install only requested destinations and resolve references", () => fixture(dir => {
  const hosts = [["--copilot",".github"],["--opencode",".opencode"],["--gemini",".gemini"]];
  for (const [flag, layout] of hosts) {
    const result = run(dir, flag, "--skill=repository-context");
    assert.equal(result.status, 0, result.stderr);
    const file = join(dir, layout, "skills", "repository-context", "SKILL.md");
    for (const match of readFileSync(file, "utf8").matchAll(/\]\(([^)\s]+)\)/g)) {
      const target = match[1].split("#")[0];
      if (target && !/^(https?:|mailto:)/.test(target)) assert.ok(existsSync(resolve(dirname(file), target)), target);
    }
  }
  assert.equal(existsSync(join(dir, ".agents")), false);
  assert.equal(existsSync(join(dir, ".claude")), false);
}));
test("explicit combined layouts do not add default destinations", () => fixture(dir => {
  const result = run(dir, "--copilot", "--opencode", "--skill=data-migration");
  assert.equal(result.status, 0, result.stderr);
  for (const layout of [".github", ".opencode"]) assert.ok(existsSync(join(dir, layout, "skills", "data-migration", "SKILL.md")));
  assert.equal(existsSync(join(dir, ".agents")), false);
}));
