---
name: frontend-architecture
description: Use for rendering, routing, components, state ownership, dependency direction and refactors.
---

# Frontend application architecture

## Workflow and acceptance

- Inspect runtime, rendering model, route graph, domain boundaries, existing stores, API contracts and build constraints. Preserve established architecture unless evidence justifies change.
- Separate platform primitives, feature composition, domain/application rules and transport adapters by responsibility. Shared layers must not depend on feature internals; avoid cycles and catch-all utilities.
- Assign each state one owner: ephemeral UI, URL, shared session, authoritative remote data, persisted preference or derived computation. Never mirror remote state into competing stores.
- Derive calculations rather than synchronizing via effects; use explicit events for mutations. Introduce reducers or state machines only when transition complexity warrants them.
- Choose server/client rendering by interaction, privacy, freshness and first paint. Keep credentials server-side and minimize duplicated fetching/hydration.
- Define cancellation, ordering, idempotency, invalidation, error boundaries and authorization. See [async UI](../async-ui/SKILL.md), [API](../../backend/api.md).
- Separate layout, scroll and focus ownership from feature content. No new framework or state library by default.
- Output responsibility map, state ownership table, tradeoffs, migration slices and behavior/build/bundle/boundary tests. See [architecture](../../core/architecture.md).
