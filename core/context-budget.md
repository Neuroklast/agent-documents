# Core — Context Budget

Load for: every session. This file explains how to read this collection.

## Progressive disclosure

```text
AGENTS.md (router, ≤120 lines)
  └─ MANIFEST.md (index: path | purpose | read when)
       └─ one topic file (≤150 lines)
            └─ linked detail files only when referenced
```

- ALWAYS read only the files the routing table names for the current task.
- NEVER read whole docs trees "to be safe". That burns context and hides the relevant rule.
- When a task spans areas, read at most 2–3 topic files plus the files those topics or the invoked skill name directly.
- Load skills only when their description matches the task.

## File size budgets

| File | Budget | If exceeded |
| --- | --- | --- |
| `AGENTS.md` | ≤ 120 lines | Move rules into topic files, keep only routing |
| Topic file | ≤ 150 lines | Split by concern, register both in `MANIFEST.md` |
| Skill | ≤ 100 lines | Move detail into the linked topic file |
| Lesson entry | 1 table row | Promote recurring lessons into topic files |

Budgets are enforced by [../scripts/check-docs.mjs](../scripts/check-docs.mjs) (CI: [../.github/workflows/docs-check.yml](../.github/workflows/docs-check.yml)).

## Single source of truth per rule

- Every rule exists in exactly one file. Other files link to it.
- Before writing a rule, search for an existing one: `rg "rule phrase"`.
- When moving a rule, update all inbound links in the same change.

## What belongs where

| Content | Location |
| --- | --- |
| Routing, hard rules, DoD | `AGENTS.md` |
| Process, gates, multi-agent | `core/*` |
| Technology behavior | `frontend/`, `backend/`, `stack/*` |
| Hard-won incident knowledge | `lessons/*` |
| Reusable task recipes | `skills/*` |
| One-off plans, specs, ADRs | project repo (`docs/`, `templates/`) |

## Archive policy

- See [docs-system.md](docs-system.md) — archive policy lives there, once.

## Anti-patterns

- Copy-pasting rules between files → drift. Link instead.
- Adding prose explanations to rule files → use bullets and tables.
- Growing `AGENTS.md` into an encyclopedia → it is a router.
- Keeping dead docs around without a banner → agents will trust them.
