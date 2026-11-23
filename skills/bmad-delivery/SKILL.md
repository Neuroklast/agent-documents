---
name: bmad-delivery
description: Turn complex BMAD-style requirements into small stories, implement with TDD, track evidence, review and close an epic. Use for multi-story or multi-module delivery, not one-file changes.
---
# Story-to-delivery workflow

Use the project's existing issue tracker and CI. No second tracker, agent runtime or generated folder hierarchy is required.

## 1. Slice

- Organize by **observable user outcome**, not implementation layer.
- Each story has a stable ID, scope, dependency, acceptance checks, and a test/proof path.
- Order by prerequisite and risk. A story should be independently reviewable and ideally independently mergeable.
- Flag unknowns that need a time-boxed spike. Never disguise a spike as a deliverable.
- Map every requirement to at least one story; remove duplicate stories and speculative scope.

## 2. Build one story

1. Read its acceptance criteria and the related code. Save a starting revision.
2. List affected callers, data, permissions, UI and tests; name the do-not-touch boundary.
3. Follow [plan-first](../plan-first/SKILL.md) only as far as needed and [TDD extraction](../tdd-extraction/SKILL.md) for testable behavior.
4. Implement the smallest complete change, including affected callers, fixtures, docs and tests.
5. Run the real project checks and inspect the diff. Missing or failing checks are visible blockers, not a success.
6. Review using [bmad-review](../bmad-review/SKILL.md), then resolve verified regressions in the same change.
7. Commit and open a reviewable PR; record checks and residual risks. Mark **done** only after acceptance, not merely after generating code.

## 3. Track and adapt

- Use existing issue/PR status; keep one source of truth. Record progress, blockers and evidence where the team already tracks work.
- Keep out-of-scope findings as linked follow-up issues, with reason and priority. A defect introduced by this story is **not** deferred.
- When requirements change, update the affected acceptance criteria, dependency order and test plan. Do not silently expand finished stories.

## 4. Close an epic

- Confirm each promised outcome against tests and observed behavior.
- Check unfinished children, cross-story integration, migrations, security and rollback.
- Record what worked, repeated failures, and one actionable process improvement. Never declare an epic complete while required stories remain open.

Source: selective adaptation of [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD). Works without its installer.
