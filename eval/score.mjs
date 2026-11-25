import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
const load = path => JSON.parse(readFileSync(path, "utf8"));
const fail = message => { throw new Error(message); };
const list = x => Array.isArray(x);
const string = x => typeof x === "string" && x.length > 0;
export function scoreRouting(cases, answers) {
  if (!list(cases) || !cases.length || !list(answers)) fail("Expected routing cases and answers");
  const ids = new Set(cases.map(c => c.id));
  if (ids.size !== cases.length) fail("Duplicate case");
  const seen = new Map();
  for (const a of answers) {
    if (!ids.has(a.id) || seen.has(a.id)) fail("Unknown or duplicate answer: " + a.id);
    if (!(a.primary === null || string(a.primary)) || !list(a.specialists) || a.specialists.some(x=>!string(x))) fail("Invalid answer: " + a.id);
    seen.set(a.id,a);
  }
  const results = cases.map(c => {
    const a = seen.get(c.id);
    if (!a) return {id:c.id,pass:false,reason:"missing"};
    const chosen = [a.primary,...a.specialists].filter(Boolean);
    const pass = a.primary === c.primary && a.specialists.length <= 2 &&
      new Set(chosen).size === chosen.length &&
      a.specialists.every(x=>c.allowedSpecialists.includes(x)) &&
      chosen.every(x=>!c.forbidden.includes(x));
    return {id:c.id,pass,reason:pass?"ok":"route mismatch"};
  });
  return {total:results.length,passed:results.filter(x=>x.pass).length,results};
}
const median = xs => {
  if (!xs.length) return null;
  const a = [...xs].sort((x,y)=>x-y), m = Math.floor(a.length/2);
  return a.length%2?a[m]:(a[m-1]+a[m])/2;
};
const dimensions = ["task","repeat","fixtureRevision","model","hostVersion","promptDigest","permissionDigest","budgetDigest"];
const metrics = ["inputTokens","outputTokens","elapsedMs","cost","changedLines","toolCalls"];
export function summarizePairs(runs, baseline, candidate) {
  if (!list(runs) || !runs.length || !string(baseline) || !string(candidate) || baseline === candidate) fail("Expected runs and two distinct conditions");
  const pairs = new Map();
  for (const r of runs) {
    if (!r || !dimensions.every(k=>k==="repeat"?Number.isInteger(r[k])&&r[k]>=0:string(r[k])) || !string(r.condition) || !string(r.guidanceRevision) || !["pass","fail","timeout","error"].includes(r.status) || typeof r.acceptance !== "boolean" || typeof r.safe !== "boolean" || !r.metrics || !metrics.every(k=>r.metrics[k]===null||(Number.isFinite(r.metrics[k])&&r.metrics[k]>=0))) fail("Invalid run record");
    if (r.status==="pass" && (!r.acceptance || !r.safe)) fail("Passing run lacks acceptance or safety");
    if (![baseline,candidate].includes(r.condition)) continue;
    const key = JSON.stringify(dimensions.map(k=>r[k]));
    const pair = pairs.get(key)||new Map();
    if (pair.has(r.condition)) fail("Duplicate paired condition");
    pair.set(r.condition,r); pairs.set(key,pair);
  }
  if (!pairs.size) fail("No matching conditions");
  const result = [...pairs.values()].map(p=>{
    if (!p.has(baseline)||!p.has(candidate)) fail("Incomplete pair; retain failures and align run conditions");
    return [p.get(baseline),p.get(candidate)];
  });
  const pass = r=>r.status==="pass"&&r.acceptance&&r.safe;
  const metricSummary = Object.fromEntries(metrics.map(k=>{
    const measured = result.filter(([a,b])=>a.metrics[k]!==null&&b.metrics[k]!==null);
    return [k,{pairs:measured.length,baselineMedian:median(measured.map(([a])=>a.metrics[k])),candidateMedian:median(measured.map(([,b])=>b.metrics[k])),pairedMedianDelta:median(measured.map(([a,b])=>b.metrics[k]-a.metrics[k]))}];
  }));
  return {pairs:result.length,baselinePassed:result.filter(([a])=>pass(a)).length,candidatePassed:result.filter(([,b])=>pass(b)).length,improved:result.filter(([a,b])=>!pass(a)&&pass(b)).length,regressed:result.filter(([a,b])=>pass(a)&&!pass(b)).length,metrics:metricSummary};
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const [mode,file,a,b] = process.argv.slice(2);
    if(mode==="routing" && file && !a) console.log(JSON.stringify(scoreRouting(load(new URL("./routing-cases.json",import.meta.url)),load(file)),null,2));
    else if(mode==="pairs" && file && a && b) console.log(JSON.stringify(summarizePairs(load(file),a,b),null,2));
    else fail("Usage: node eval/score.mjs routing <answers.json> | pairs <runs.json> <baseline> <candidate>");
  } catch(error) { console.error(error.message); process.exitCode=1; }
}
