---
name: change-plan-review
description: Audit a proposed change plan before implementation when multiple components, data migration, security boundaries or deployment risks are involved. Read-only.
---
# Change plan review

## Workflow

1. Read the user outcome, acceptance criteria, proposed plan and relevant current source. Confirm that assumed paths, APIs and dependencies exist.
2. Map each requirement to a proposed change and verification; detect scope creep, missing prerequisites, ordering conflicts and compatibility gaps.
3. Check security, data integrity, failure paths, migration and rollout/rollback where applicable. Demand evidence for risky assumptions, not extra ceremony.
4. Return severity-ordered findings with exact references, impact and minimum correction. Separate blocking defects from optional improvements.
5. Verdict: ready, revise, or insufficient evidence. Do not implement, modify the plan without permission or claim approval from another reviewer.

## Exit evidence

Every blocking finding is resolved or explicitly escalated before implementation; the plan has a testable outcome and recovery path proportionate to risk.

Respect [workflow](../../core/workflow.md) and [quality](../../core/quality.md). Load only applicable references.
