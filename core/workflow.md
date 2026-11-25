# Workflow

Use when the task requires a multi-step workflow. Use [AGENTS.md](../AGENTS.md) as the task router.

1. **Understand:** Inspect actual code, manifests and acceptance criteria. For ambiguous product work use [Requirements clarity](../skills/requirements-clarity/SKILL.md).
2. **Scope:** Identify callers, tests, data, trust boundaries and non-goals. For multiple stories use [Incremental delivery](../skills/incremental-delivery/SKILL.md).
3. **Implement:** Smallest complete change; fix shared root causes rather than individual symptoms. New testable behavior starts with a failing test ([TDD](../skills/tdd-extraction/SKILL.md)).
4. **Verify:** Use project-defined, non-interactive lint/type/test/build checks. Inspect the actual diff and affected callers. Add focused E2E proof when necessary.
5. **Review:** Compare outcome with acceptance criteria. For high-risk or cross-system work use [Evidence review](../skills/evidence-review/SKILL.md), for bloat concerns use [Complexity review](../skills/complexity-review/SKILL.md).
6. **Finish:** Update affected docs and report checks and remaining risks. Commit or open a PR when requested or required by the project workflow. [Session checklist](../checklists/session.md).

## Test integrity

- Never weaken, skip or delete a valid failing test just to turn CI green.
- A deliberate contract change may require an updated test; explain the changed contract.
- If a test is genuinely obsolete, state why it no longer protects behavior.
- No passing claims for checks not run; no PR described as ready with known failing checks.

## Failure diagnosis

After a second failed fix to the same symptom, stop layering patches. Identify the false assumption, inspect the shared boundary and change the approach. Bound external retries. Do not conceal partial work.

## Parallel work

Use [agent orchestration](agent-orchestration.md) for independent work and [handoff](handoff.md) for durable state. Recheck integration after merging branches.

Safety approvals: see [AGENTS.md](../AGENTS.md) and [security/security.md](../security/security.md). Git policy: [git.md](git.md).
