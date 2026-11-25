# Stack — Next.js (App Router)

Load for: Next.js repos. Core rules stay in `core/`, `frontend/`, `backend/`.

## Rendering

- Server Components by default. `"use client"` only for hooks, handlers, browser APIs, motion, scroll.
- `"use server"` files export ONLY async actions; pure helpers move to `lib/`.
- DOM libraries must stay in client leaves; never imported transitively by server components.
- Async route segments need a matching `loading.tsx` skeleton.

## Data & caching

- Public reads: cookie-free client inside `unstable_cache`; NEVER `cookies()` inside cache callbacks.
- Use request-scoped memoization where supported and verify identity/scope for authenticated reads; never persist authorization decisions in shared caches.
- Invalidate affected caches using the installed Next.js version's supported APIs; choose tags, paths or other mechanisms based on actual cache ownership.
- Choose static generation, dynamic rendering or revalidation by freshness, authorization and framework capabilities.
- Metadata via `metadata`/`generateMetadata` exports — never manual `<title>`.

## Routing pitfalls

- A root `api/<name>.ts` (or any second router) shadows `app/api/<name>/route.ts` — never dual-mount.
- `middleware.ts`/`proxy.ts`: check the version's expected filename/export; wrong name = silently ignored.
- Page and route cannot share a path segment.
- Route handlers: `withErrorHandler`-style wrapper; consistent error shape ([../backend/api.md](../backend/api.md)).

## Client/server boundary

- Keep privileged database access server-side. Client SDK access is acceptable when the chosen backend explicitly supports it with enforced permissions.
- Session refresh must copy cookies on every redirect branch.
- Search-param behavior depends on version/rendering mode. Verify static/dynamic and Suspense requirements; do not introduce shared caching merely to suppress a build error.

## Build & tooling

- Framework config (`next.config.*`) mirrors security headers where the platform requires; add a parity test.
- Generated files (embedded assets, catalogs) excluded from source globs.
- Watch for stale `.tsbuildinfo` and `.next` when diagnosing type/build errors.
- Image optimization: use the framework's image component with the repo's URL helper; remote patterns configured for the storage host.

## i18n

- Message bundles per namespace/route; adding a namespace updates every bundle that uses it.
- Full navigation on locale switch when the framework requires it.
- CI parity check: missing keys + hardcoded strings (baseline may only shrink).

## Common incidents

See [../lessons/web-platform.md](../lessons/web-platform.md): hydration #418, `NEXT_REDIRECT` swallowing, chunk-error reload loops, cache/dynamic surprises.
