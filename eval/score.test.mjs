import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { scoreRouting, summarizePairs } from "./score.mjs";
const cases=JSON.parse(readFileSync(new URL("./routing-cases.json",import.meta.url),"utf8"));
test("routing oracle refers only to existing skills",()=>{
  assert.equal(new Set(cases.map(c=>c.id)).size,cases.length);
  for(const c of cases) for(const id of [c.primary,...c.allowedSpecialists,...c.forbidden].filter(Boolean)) assert.ok(existsSync(new URL("../skills/"+id+"/SKILL.md",import.meta.url)),id);
});
test("routing scorer preserves missing and forbidden selections as failures",()=>{
  const ideal=cases.map(c=>({id:c.id,primary:c.primary,specialists:[]}));
  assert.equal(scoreRouting(cases,ideal).passed,cases.length);
  const altered=ideal.filter(a=>a.id!=="typo").map(a=>a.id==="graphql"?{...a,specialists:["rest-guidelines"]}:a);
  assert.equal(scoreRouting(cases,altered).passed,cases.length-2);
  assert.throws(()=>scoreRouting(cases,[ideal[0],ideal[0]]),/duplicate/);
});
const run=(condition,status="pass",overrides={})=>({task:"fixture",repeat:0,fixtureRevision:"abc",model:"test-model",hostVersion:"test-host",promptDigest:"p",permissionDigest:"q",budgetDigest:"b",condition,guidanceRevision:condition,status,acceptance:status==="pass",safe:true,metrics:{inputTokens:100,outputTokens:50,elapsedMs:10,cost:null,changedLines:3,toolCalls:2},...overrides});
test("paired evaluation retains failed runs and does not treat missing cost as zero",()=>{
  const result=summarizePairs([run("baseline","fail"),run("axon")],"baseline","axon");
  assert.equal(result.improved,1);assert.equal(result.baselinePassed,0);assert.equal(result.candidatePassed,1);
  assert.deepEqual(result.metrics.cost,{pairs:0,baselineMedian:null,candidateMedian:null,pairedMedianDelta:null});
});
test("paired evaluation rejects missing pairs, changed conditions, duplicates and false pass",()=>{
  assert.throws(()=>summarizePairs([run("baseline")],"baseline","axon"),/Incomplete/);
  assert.throws(()=>summarizePairs([run("baseline"),run("axon","pass",{model:"different"})],"baseline","axon"),/Incomplete/);
  assert.throws(()=>summarizePairs([run("baseline"),run("baseline"),run("axon")],"baseline","axon"),/Duplicate/);
  assert.throws(()=>summarizePairs([run("baseline"),run("axon","pass",{safe:false})],"baseline","axon"),/lacks/);
});
