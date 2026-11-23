---
name: bmad-review
description: Review a code diff or specification with evidence-backed acceptance, edge-case, security and verification lenses. Use for PR reviews, high-risk changes, or explicit BMAD review requests.
---
# Evidence-based multi-lens review

Review the **requested artifact** and its real context, not a narrative about it. Read the ticket/acceptance criteria when present and inspect the diff, affected callers and tests.

## Lenses

1. **Acceptance:** Does the result match every requested behavior? Identify missing or contradictory acceptance checks.
2. **Correctness and edge cases:** Trace boundaries, empty values, concurrency, failures, error paths and compatibility through consumers.
3. **Security and data:** Follow untrusted inputs, authZ, secrets and writes to their effects. State concrete exploit or loss scenarios only.
4. **Verification:** Match each risky behavior to an actually executed test, contract or documented manual proof. A green test unrelated to the bug is not evidence.
5. **Simplicity:** Apply [ponytail-review](../ponytail-review/SKILL.md) for unnecessary code, duplicate logic and load assumptions.

Run lenses independently when multiple agents are available, otherwise sequentially. Separation improves perspective but is not a substitute for evidence. Never fabricate findings or require a minimum number.

## Triage

For every candidate finding:
- Point to file and line or a precise artifact section.
- Show an **attainable trigger** and consequence. Re-read surrounding code and confirm no upstream guard disproves it.
- Classify **must fix** (broken behavior, exploitable issue, data loss), **should fix** (real test gap, costly duplication), or **optional**.
- Decide **patch** (clear fix), **decision needed** (several valid trade-offs), **defer** (proven pre-existing, outside scope), or **dismiss** (unsubstantiated). Log why.
- An issue introduced by this change is never deferred as pre-existing.

## Report

Start with scope and verification performed. List only verified findings, highest impact first, with location, trigger, impact and smallest safe fix. End with verdict, risks and **not checked**. If none exist, say so.

This skill reports findings and **does not edit code**. Fixes belong to a separate implementation step, followed by re-review.

Source: adapted review lenses from [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD).
