# AXON evaluation

Status: executable scoring and a pilot routing gold set; no live agent outcomes or superiority claims. Structural CI, static host policy tests and scoring self-tests prove different contracts from live model behavior.

## Routing pilot

Use [routing-cases.json](routing-cases.json). For each case, give the agent only the prompt and normal installed AXON guidance, not expected results. Ask it to return the primary skill ID or null and selected specialist IDs, before implementation. Record an array of objects with id, primary, specialists. Score with:

```sh
node eval/score.mjs routing answers.json
```

The 20 cases cover routine/no-skill decisions, risky plans, data migration, incidents, REST vs GraphQL, overlapping UI workflows, read-only review, context resumption and untrusted input. Expected routes are a maintainer-authored oracle, not a measured model result; independent reviewers should resolve legitimate alternate routes before a held-out trial.

## Paired outcome pilot

Use [protocol](protocol.md) and [task catalog](tasks.json). Keep identical prompts, clean fixture snapshots, model/host versions, permissions and budgets; change only the guidance condition. Record each attempted run, including timeout and error, using [run format](run-format.md).

```sh
node eval/score.mjs pairs runs.json baseline axon
```

The scorer rejects incomplete or mismatched pairs and reports pass counts, improvements/regressions and measured paired median deltas. Missing measurements are null, never zero. These are descriptive pilot statistics, not confidence intervals or certification. No model calls or external dependencies are bundled.

## Self-tests

```sh
node --test eval/score.test.mjs
```

Synthetic records in tests validate the scorer, not the effectiveness of AXON. For results, record the exact source revision, model, host, task set, evaluation date and raw evidence; distinguish independent review from author-run experiments.
