# Quality evidence and evaluation

## Reproducible checks

Run from the collection root with Node.js 20+:

```bash
node scripts/check-docs.mjs
node --test scripts/*.test.mjs
```

The documentation validator checks file budgets, skill names and descriptions, relative links and registration in router/index/manifest. The installer tests exercise first installation, destination selection, link rewriting, invalid inputs, local edits and managed lifecycle behavior. See [validator](scripts/check-docs.mjs), [installer tests](scripts/install-skills.test.mjs), and [CI workflow](.github/workflows/docs-check.yml).

## Existing evidence

The UI/UX expansion at revision `a4c9c286d94fd23c4f088b5669dbde275cf4017b` passed the [post-merge workflow](https://github.com/Neuroklast/agent-documents/actions/runs/45606453525). This is historical evidence for that revision only. Check the [current workflow history](https://github.com/Neuroklast/agent-documents/actions/workflows/docs-check.yml) for newer commits.

## Agent outcome evaluation protocol (not yet executed)

Use identical clean snapshots, task briefs, model versions, agent settings, permission scope, token limits and test fixtures. Compare baseline agent instructions against the collection and selected alternatives where permitted. Randomize run order, repeat across independent tasks and record failures as well as successes.

| Task | Observable measures |
| --- | --- |
| Bug repair | Regression reproduction, hidden behavior tests, unrelated diff size |
| UI feature | Critical journey, keyboard/reflow, state recovery, visual review |
| Architecture change | Dependency boundaries, authorization, contract compatibility |
| Documentation change | Accuracy against actual diff, relevant owners updated |
| Long session | Input/output tokens, time, tool calls, repeated context, acceptance |

Publish model/version, revisions, prompts, fixture licenses, raw anonymized results, scoring criteria, sample size and uncertainty. Report task completion and correctness before token savings; never discard failed runs or compare different models as if they were equivalent. No measured superiority, cost reduction or compatibility certification is claimed yet.
