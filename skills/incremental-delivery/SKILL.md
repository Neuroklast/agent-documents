---
name: incremental-delivery
description: Convert an agreed product outcome into small verifiable changes with explicit dependencies, real tests, integration checks and acceptance evidence. Use for multi-step implementation.
---
# Incremental delivery

Work inside the existing tracker, repository and CI. The unit of progress is a verified outcome, not a generated document or a volume of code.

## Shape increments
- Divide the work by observable behavior; every increment has a goal, acceptance examples, dependencies and a proof method.
- Prioritize unknowns and irreversible decisions before implementation; use bounded experiments for uncertain feasibility.
- Preserve a single source of status and track cross-increment dependencies. Prefer independently reviewable changes.

## Execute
1. Inspect affected interfaces, callers, data, permissions and existing checks. Record the starting revision.
2. Reproduce failing behavior or write a behavior test before changing code where feasible; record why if not.
3. Implement the smallest complete change, keeping contracts, tests and affected documentation aligned.
4. Run actual targeted and relevant integration checks. Examine the diff for regressions and unintended scope.
5. Record what passed, what failed, what was not checked and remaining risks. Do not mark an increment complete without acceptance evidence.

## Close the outcome
Validate all requested behaviors together, including cross-module contracts, authorization, failure recovery and rollback if applicable. Link unrelated debt separately. Fix regressions introduced by the current change before declaring completion. Summarize remaining work and the exact acceptance evidence. Respect existing review and merge permissions.
