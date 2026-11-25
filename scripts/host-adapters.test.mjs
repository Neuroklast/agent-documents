import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const load = path => JSON.parse(readFileSync(new URL("../"+path, import.meta.url), "utf8"));
test("OpenCode V2 review profiles use deny-first native rules", () => {
  const cfg = load("opencode.json");
  assert.ok(Array.isArray(cfg.permissions));
  assert.equal(cfg.permission, undefined);
  assert.equal(cfg.agent, undefined);
  for (const id of ["plan","architect","reviewer","security-auditor","compliance-officer"]) {
    const agent = cfg.agents[id];
    assert.ok(agent.description && agent.system);
    assert.deepEqual(agent.permissions[0], {action:"*",resource:"*",effect:"deny"});
    const allowed = agent.permissions.filter(r => r.effect !== "deny").map(r => r.action).sort();
    assert.deepEqual(allowed, ["glob","grep","read","skill"]);
    for (const p of agent.permissions) {
      assert.ok(["allow","ask","deny"].includes(p.effect));
      assert.ok(typeof p.resource === "string");
    }
  }
  assert.ok(cfg.agents.tester.permissions.some(r=>r.action==="shell" && r.effect==="ask"));
  assert.ok(cfg.permissions.some(r=>r.action==="external_directory" && r.effect==="deny"));
});
test("legacy configuration remains separate from native V2", () => {
  const v1 = load("adapters/opencode-v1.json");
  assert.ok(v1.agent && v1.permission);
  assert.equal(v1.agents, undefined);
});
