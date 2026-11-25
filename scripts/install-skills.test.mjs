import test from "node:test";
import assert from "node:assert/strict";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
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
