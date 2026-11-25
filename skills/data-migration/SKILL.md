---
name: data-migration
description: Plan and verify schema or data changes that affect stored records, live compatibility, backfills or irreversible operations.
---
# Data migration

## Workflow

1. Inspect [schema ownership](../../backend/data-and-schema.md), engine/version, existing migration policy, data volume, invariants, locks and current/previous application versions.
2. Prefer an additive compatibility window when live consumers coexist: expand, migrate/backfill in bounded resumable batches, verify, switch readers/writers, then contract only when old consumers are gone. Choose a simpler transactional migration when justified.
3. Define idempotency, checkpoints, failure recovery, validation queries, constraints, access policies and handling of concurrent writes. Measure representative load and lock duration in isolated data.
4. Verify old/new clients where required, partial execution, retry, null/duplicate/orphan handling, and rollback or forward-repair feasibility. A backup is not proof of recoverability; consult [resilience](../../operations/resilience.md).
5. Document deployment order, observable stop conditions, authorized execution owner and irreversible steps. Never run production migrations without authorization.

## Exit evidence

A reproducible migration rehearsal shows integrity, compatibility and recovery evidence; unresolved risks prevent a production-ready claim.

Respect [workflow](../../core/workflow.md) and [quality](../../core/quality.md). Load only applicable references.
