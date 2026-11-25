# Backend — Caching

Load for: ISR, cache layers, invalidation, TTLs.

## Cache layers

| Layer | Use for | Invalidate by |
| --- | --- | --- |
| Request memoization | Same-request duplicate fetches (e.g. metadata + page) | Request scope, automatic |
| Data cache | Expensive reads, per-entity | Tag-based invalidation |
| Full route / ISR | Public pages | Revalidate path + tag together |
| CDN / edge | Static assets, cacheable public responses | Deploy / purge |

- Use the stack's existing cache primitives. NEVER introduce a cache service the repo does not already run.

## Rules

- Inside cache callbacks: cookie-free/anon clients ONLY. `cookies()`/session clients inside caches force dynamic rendering and leak user data.
- Default to request-local or no caching for private data. Persistent private caches must isolate every relevant user, tenant, policy/permission version and query dimension, re-check authorization before delivery and invalidate on access changes.
- Cache large bodies only for a measured, bounded need. Treat private signed URLs as credentials; do not share or cache them beyond expiry or authorization scope.
- TTLs are documented (they are privacy facts — [../legal/legal-maintenance.md](../legal/legal-maintenance.md)).
- Tags are constants, not string literals scattered across files.
- Centralize invalidation for actual affected cache owners; select tags, paths or other mechanisms according to framework/version. Verify list/detail freshness and access changes.
- Admin mutations invalidate their public counterparts in the same request.

## Cache keys

- Key = entity + scope + params that affect the result.
- Public reads: column whitelists; NEVER `*` that leaks private columns into cached responses.
- Normalize inputs (locale, filters) before keying.

## Warm-up & precompute

- Warm-up jobs run server-side, return no data to clients, and re-check authorization.
- Warm-up prefetches only allowlisted routes.
- NEVER warm-up user-specific pages into a shared cache.

## Public read pattern (typical)

1. Public page/route uses a cookie-free client.
2. Expensive read wrapped in the data cache with tags.
3. Mutations call the invalidation helper for their tags/paths.
4. Optional scheduled revalidation as a safety net.

## Anti-patterns

- Two cache systems for the same data.
- Cache-busting by disabling cache instead of fixing invalidation.
- Relying on TTL expiry as the only invalidation.
- Caching error responses or empty states as if they were data.
- Reading env/config inside cache callbacks when it is request-scoped.
