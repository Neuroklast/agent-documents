# Context budget

Load with [AGENTS.md](../AGENTS.md) at session start.

## Progressive disclosure

```text
AGENTS.md (router) -> relevant topic or skill -> linked details only if needed
```

- Reuse context already loaded in the current session. Do not reread the entire documentation tree by default. Use 1–3 relevant topic files; fetch deeper detail on a real question.
- [MANIFEST.md](../MANIFEST.md) serves maintainers, not the session prompt.
- Prefer a single canonical rule and links to repeated blocks.

## Budgets

| Document | Maximum lines |
| --- | ---: |
| AGENTS.md | 120 |
| MANIFEST.md | 200 |
| Topic / template / index | 150 |
| SKILL.md | 100 |

CI: [check-docs.mjs](../scripts/check-docs.mjs). A limit is a ceiling, not a target. Do not trade away clarity to save a few tokens.

## Rule lifecycle

1. Name the observed failure a new rule prevents. If no failure mode, do not add it.
2. Search for an existing owner; edit that rule instead of duplicating it.
3. Delete rules that only restate common knowledge or duplicate executable checks, unless they prevent a documented recurring mistake.
4. When moving or deleting a rule, update routing links, [MANIFEST.md](../MANIFEST.md) and affected tests.
5. Keep task plans and one-off decisions in the application repository, not in this reusable collection.

Review waste at the **task level** too: a framework that duplicates project behavior is usually more expensive than a small reusable skill.
