# Checklist — Session Closeout

Copy into the session report. Order is fixed: implement → checks → docs → commit/PR/report.

## 1. Code

- [ ] Change matches the task/issue; acceptance criteria met.
- [ ] Minimal diff; no unrequested refactors or reformatting.
- [ ] No secrets, no debug logs, no dead code, no commented-out code.
- [ ] Conventions followed ([../core/clean-code.md](../core/clean-code.md)).

## 2. Checks

- [ ] Lint green.
- [ ] Types green.
- [ ] Unit/integration tests green (with new/updated tests for the change).
- [ ] Build green.
- [ ] Contract scripts green (scroll/overlay/i18n/RLS/API — as applicable).
- [ ] E2E for changed user flows green (or explicitly deferred with reason).
- [ ] Unavailable checks explicitly named as "not run" — never claimed green.

## 3. Docs

- [ ] Matching topic/feature docs updated.
- [ ] `CHANGELOG` entry under `[Unreleased]` (behavior/API/security changes).
- [ ] QA checklist updated for new/changed testable flows.
- [ ] Lessons appended if an incident/pitfall occurred.
- [ ] Legal trigger table walked (if processing/PII/tools changed) ([../legal/legal-maintenance.md](../legal/legal-maintenance.md)).
- [ ] Or explicit: `Docs: unchanged because <reason>`.

## 4. Git

- [ ] One purpose per commit; conventional message.
- [ ] Only intended files staged.
- [ ] No secrets/large artifacts in the diff.
- [ ] PR description: what, why, how to verify, risk, do-not-touch list.
- [ ] PR checklist filled ([pr.md](pr.md)).

## 5. Report

- [ ] Summary: what changed, where, why.
- [ ] Checks run + results.
- [ ] Open items/blockers named explicitly.
- [ ] Nothing half-done left in the working tree.
