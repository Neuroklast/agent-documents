---
name: verification-before-done
description: Require concrete evidence before claiming a task is complete. Use at the end of any implementation, fix or review — blocks "done" until tests, builds and acceptance checks have been executed and reported.
---

# Verification before done

Do not declare a task complete until the evidence exists. Claiming success with unrun or failing checks is a failure of this skill.

## Required evidence
The exit criteria from the [load contract](../load-contract/SKILL.md) (if one was written) must be satisfied.


Before saying "done", "fixed" or "complete":

1. **Tests** — Run the relevant test command. Paste the pass/fail summary. If no automated test exists, document the manual steps and observed result.
2. **Build / typecheck / lint** — Run the project's standard checks. Report the exit status.
3. **Acceptance** — Map each acceptance criterion (from the request or plan) to a concrete observation that it holds.
4. **Diff review** — Confirm the change is limited to what was requested and does not introduce obvious regressions.

## Rules

- Never write "should work" or "looks good" as a substitute for a run.
- If a check fails, fix it or explicitly report the failure and the residual risk. Do not hide it.
- If the environment cannot run the check, state that clearly and list what a human must verify.
- For pure review tasks, the evidence is the review findings and the residual risks, not a claim that the code is correct.

## Output

End the session with a short verification block:

```
Verification:
- Tests: [command] → [pass/fail + count]
- Build/lint: [command] → [pass/fail]
- Acceptance: [criterion] → [evidence]
- Unverified: [anything not checked]
```

If any required check is missing or red, the task is not done.
