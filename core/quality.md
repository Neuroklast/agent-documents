# Quality

Canonical Definition of Done and review bar.

## Done means

- [ ] Requested outcome and error/denied cases checked.
- [ ] Project lint/types/tests/build run and pass, or unavailable checks reported as such.
- [ ] Affected callers and data flows checked for regression.
- [ ] Tests protect changed behavior, not merely a mocked method call.
- [ ] No introduced security holes, secrets, obsolete code or speculative abstractions.
- [ ] Docs changed where facts changed, or explicitly unchanged with a reason.
- [ ] Residual risks and follow-up work visible in the issue/PR.

## Prioritize findings

1. Correctness and data loss.
2. Security and authorization at real trust boundaries.
3. Expected load, concurrency and operational failure.
4. Missing behavioral tests.
5. Significant performance regression.
6. Duplication, complexity and maintainability.

Review recipes: [BMAD review](../skills/bmad-review/SKILL.md) for multiple evidence lenses; [Ponytail review](../skills/ponytail-review/SKILL.md) for rigorous lean review. A review is not passed merely because CI is green. Do not invent defects to fill a quota.

## Evidence and debt

- Test risky branches (permissions, money, persistence, exports) regardless of numerical coverage. Core logic coverage around 80% is a heuristic, never a substitute for a meaningful test.
- Distinguish source/contract checks (wiring) from behavior checks (observable output).
- Track real debt with severity, location, impact, reason for deferral and revisit trigger. An introduced P0 must be resolved before the feature ships.
- For incidents, add a non-duplicated lesson to [lessons/](../lessons/README.md).
- Architecture-wide remediation: [quality programme](architecture-quality-programme.md).
