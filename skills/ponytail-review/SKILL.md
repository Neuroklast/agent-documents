---
name: ponytail-review
description: Review a diff or repository for proven bugs, risks, scaling gaps, missing tests and unnecessary complexity. Use for lean-code review, overengineering, bloat, PR review or Ponytail Review requests.
---
# Ponytail-style review

The smallest **complete, correct, safe** change wins, not the fewest lines. Review only; do not edit code.

## Understand

1. Determine target: explicit PR, branch, diff or files; otherwise current changes.
2. Read the diff **and** the functions it calls, callers, relevant tests and project conventions.
3. Trace input → state/write → output. Determine expected load from evidence; label assumptions.
4. Check all changed consumers before calling an abstraction unused or a behavior safe.

## Inspect in order

1. **Correctness:** reproducible wrong result, missing branch, broken consumer, empty or boundary case.
2. **Safety:** trust boundaries, authorization, secret exposure, data loss and transactional failure.
3. **Scale:** races, unbounded data, N+1 work, per-process shared state, proven hot paths.
4. **Tests:** missing test for risky changed behavior, especially regressions. Check what tests actually assert.
5. **Performance:** material slowdown under the expected load, not speculative micro-optimization.
6. **Lean:** unnecessary feature, duplicate helper, dead code, redundant wrapper, premature abstraction or dependency.

For lean fixes, check in this order: **delete → reuse codebase → platform/standard library → existing dependency → smallest new implementation**. Preserve security, validation, error handling, accessibility and all requested behavior. Splitting a function merely to hit a line limit is not an improvement.

## Evidence gate

A finding needs a specific location, realistic trigger, observed or logically demonstrable consequence, and smallest safe correction. Re-check the surrounding code. No style-only or hypothetical findings; no mandatory minimum count. Pre-existing debt may be recorded separately but not blamed on this diff.

## Output

- One sentence on what changed and what was checked.
- Findings ranked **must fix / should fix / optional**, each with location, trigger, impact and fix. Omit empty sections.
- Verdict: ship or numbered blockers; state tests not run and load assumptions.
- A concise **remove/reuse** recommendation only when supported by an actual code path.

Adapted from [Ponytail](https://github.com/DietrichGebert/ponytail); no upstream plugin hooks or dependencies included.
