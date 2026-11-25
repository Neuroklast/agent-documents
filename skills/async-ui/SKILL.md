---
name: async-ui
description: Use for loading, stale data, retries, realtime, streaming, offline, concurrency and optimistic mutations.
---

# Async UI and resilient state transitions

## Workflow and acceptance

- Define resource/operation states: initial, pending, success, empty, partial, stale, error, cancelled and offline where applicable; distinguish refresh from first load.
- Define authoritative owner, request identity, transition triggers and reconciliation. Ignore stale responses and cancel obsolete reads where supported.
- Render meaningful progress without invented percentages. Preserve content during refresh, inputs during failure and stable layout during loading.
- Separate draft, pending, accepted and committed. Optimistic updates require rollback, reconciliation and conflict handling; avoid duplicate effects with appropriate idempotency and in-flight protection.
- Retry transient failures with bounded backoff and explicit recovery; never blindly replay non-idempotent writes. Reconnect streams with cleanup, ordering and deduplication.
- Handle expiry, role changes and offline recovery without cross-user data leaks. Server authorization remains mandatory.
- Test slow, failed, duplicate, out-of-order, cancelled and concurrent requests, refresh and navigation with deterministic controls. Output transition table, owner, recovery and tested invariants. See [UX](../../frontend/ux.md), [cache](../../backend/caching.md), [API](../../backend/api.md).
