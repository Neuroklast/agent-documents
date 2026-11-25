# Lessons — Data & Auth

Load for: RLS, auth, schema, sync, caching data issues. Consolidated, anonymized.

| Date | Area | Lesson | Severity |
| --- | --- | --- | --- |
| 2026-09 | RLS | Public secrets hidden by row filters still leak: move secrets to a private table, never rely on RLS row filtering alone. | high |
| 2026-09 | RLS | New tables need RLS + deny-all + REVOKE in the SAME change as `CREATE TABLE`. | high |
| 2026-09 | RLS | A missing table grant (not RLS) was the real cause of "empty page" incidents — check grants, not only policies. | med |
| 2026-09 | Auth | Dual auth (Bearer + cookie): a stale Bearer MUST fall through to the cookie on 401; hard-stop only on 403. | high |
| 2026-09 | Auth | Browser-side sign-in + client redirect races cookie writes → use a server-side login flow that sets cookies on the same response. | high |
| 2026-09 | Auth | Cookie refreshes must be copied onto every redirect branch; chunked auth cookies must pass library options through unchanged. | high |
| 2026-09 | Auth | App-layer membership and DB ownership can drift (two sources) — pick one source and reconcile. | high |
| 2026-09 | Auth | UI/API permission parity: hiding a button is not authorization; roles lacking permission must be denied at the API. | high |
| 2026-09 | Schema | Use the established schema evolution workflow; untracked manual alterations cause drift. | high |
| 2026-09 | Schema | Idempotent enum creation via guarded DO-blocks; `CREATE TYPE IF NOT EXISTS` does not exist in Postgres. | med |
| 2026-09 | Schema | Partial unique indexes resolve race conditions (one active record per business key). | med |
| 2026-09 | Schema | Store object paths, not URLs; derive URLs at render time. | med |
| 2026-09 | Migrations | Forward-compatible-only changes (nullable/defaulted adds) let old clients survive new schemas — verify with an old-client read test. | high |
| 2026-09 | Sync | Enqueueing does not guarantee execution. Verify that a worker, scheduler or other dispatch mechanism consumes queued work. | high |
| 2026-09 | Sync | Single-flight executor with lease + owner token prevents duplicate storms (and DNS/rate-limit blowups). | high |
| 2026-09 | Sync | For provider rate limits, honor retry guidance and preserve unfinished work without causing duplicate effects. | med |
| 2026-09 | Sync | Progress = remaining backlog, not "processed in last 24 h". | low |
| 2026-09 | Sync | Sync runs must never throw; collect per-item errors and log per source. | med |
| 2026-09 | Cache | Invalidation must pair tag invalidation with path revalidation, or detail pages stay stale. | med |
| 2026-09 | Data | Track splits/percentages must sum to 100% — enforce in the domain layer, not in the UI. | high |
| 2026-09 | Money | Period payout ≠ opening balance; carry-forward from the ledger in cents; 0 is a valid value. | high |
| 2026-09 | Money | Use explicit financial state transitions and idempotency to prevent duplicate accounting effects. | high |
| 2026-09 | State machines | Status transitions belong in the domain layer (graph + 422 on invalid), not in UI conditionals. | med |
| 2026-09 | Imports | Bronze/CSV uploads: never browser-fetch presigned URLs; server-proxy, hash at register, parse in worker, fail closed. | high |
| 2026-09 | Normalization | Normalize keys (names) by collapsing whitespace everywhere — external matching depends on it. | med |
| 2026-09 | Caching | A cookie-bound client on public pages empties caches and forces dynamic rendering — public reads use the cookie-free client. | high |
| 2026-09 | Caching | Cookie TTLs, cache TTLs and storage types are privacy facts — document them. | med |
