---
name: incident-response
description: Investigate or mitigate an active service incident, production regression or availability degradation with evidence and authorized actions.
---
# Incident response

## Workflow

1. Establish impact, onset, affected users/services and current authority. Read [incident operations](../../operations/incidents.md).
2. Preserve redacted evidence and compare the current revision, changes, health signals and dependencies. Prioritize containment and restoration before permanent cleanup.
3. Rank hypotheses and choose the smallest reversible diagnostic or mitigation. Avoid unrelated changes; request approval for live writes or deployments.
4. Verify recovery with user-facing signals and relevant invariants; monitor recurrence for an agreed window.
5. Record timeline, contributing causes, mitigation, unresolved risks and follow-up owners. Use [systematic debugging](../systematic-debugging/SKILL.md) for deeper repair once stable.

## Exit evidence

Recovery is verified rather than inferred from one healthy endpoint; the next owner has a factual incident record.

Respect [workflow](../../core/workflow.md) and [quality](../../core/quality.md). Load only applicable references.
