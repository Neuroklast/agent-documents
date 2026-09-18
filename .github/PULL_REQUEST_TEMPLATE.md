## What

<!-- One purpose. Link the issue: Fixes #… -->

## Why

<!-- Problem / issue context. -->

## How to verify

<!-- Commands, test names, manual steps. -->

## Risk / blast radius

- Shared files/symbols touched:
- Do-not-touch list:

## Checklist

- [ ] One purpose; fix ≠ feature; refactor separate ([core/git.md](../core/git.md)).
- [ ] Local gates run: lint, types, tests, build ([core/workflow.md](../core/workflow.md)).
- [ ] No secrets, no debug code, no unrelated files.
- [ ] Tests added/updated; deny tests for new guarded surfaces (401/403).
- [ ] Docs updated (list paths) **or** explicit "unchanged because …".
- [ ] `CHANGELOG` entry under `[Unreleased]` if user-visible/API/security.
- [ ] Legal trigger table walked if processing/PII/tools changed.
- [ ] Regression matrix walked for risky changes ([core/regression.md](../core/regression.md)).
