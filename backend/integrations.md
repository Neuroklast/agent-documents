# Backend — Integrations

Load for: object storage, email, payments, external APIs, webhooks, sync jobs.

## General rules

- Credentials: server-only, from validated env, never `NEXT_PUBLIC_*`/client bundles ([../security/security.md](../security/security.md)).
- Optional integrations MUST NOT hard-crash the app when unconfigured — degrade with a clear status.
- Every external call has a timeout and bounded retries with backoff. No infinite retry loops.
- Cache external responses where staleness is acceptable; never hammer third parties.
- Log external failures with context but never with secrets/PII.

## Object storage (R2/S3)

- Content-addressed keys (`sha256(bytes)`) where dedup matters; otherwise structured prefixes.
- Buckets resolved server-side only; clients never choose buckets.
- Uploads via presigned PUT after auth; short TTLs (e.g. 5–15 min).
- Store paths, derive URLs at render time ([data-and-schema.md](data-and-schema.md)).
- CORS on the bucket must allow the method + headers actually used.
- Checksums: use `WHEN_REQUIRED`-style SDK options when the provider rejects default checksums.
- Replace/delete old objects only after the new write succeeded.
- Full details: [../stack/cloudflare-r2.md](../stack/cloudflare-r2.md).

## Email

- Send from the server only; API keys in env.
- Escape all interpolated content (HTML injection via user data).
- Transactional vs marketing separated; marketing only with consent ([../legal/legal-maintenance.md](../legal/legal-maintenance.md)).
- Bounce/failure handling: never silently drop; log and surface in admin health.
- Optional provider: unconfigured → feature degrades, no crash.

## Payments

- Webhook is the source of truth for payment state — NEVER the success redirect.
- Verify webhook signature; validate amount, currency, and idempotency before marking paid.
- Idempotent processing: repeated webhook deliveries must not double-apply.
- Open sessions expire/are closed when the payment is resolved elsewhere (admin marks paid/cancelled).
- Card data never touches your servers (hosted checkout).
- Invoices: immutable after issue; corrections via credit note, not mutation ([../legal/legal-maintenance.md](../legal/legal-maintenance.md)).

## External APIs & sync jobs

- Rate-limit awareness: respect provider limits (e.g. ~4 req/s), skip-and-continue on 429, reschedule.
- Retries: transient IO only; NEVER retry 4xx (except 429 with cooldown).
- Single-flight executor with lease/owner token for sync jobs; self-chaining with budget headroom.
- Job logs: per run, per source, status, counts, errors — queryable for health.
- Idempotent job steps; safe to re-run.
- Progress = backlog processed, not "done in last 24 h".
- Secrets that move between tables must move every reader in the same change.

## Webhooks (incoming)

1. Verify signature/secret.
2. Parse + validate payload.
3. Idempotency check.
4. Process; log outcome.
5. Return fast; move heavy work to a queue/job.

## Health & observability

- Health endpoint: lite by default, full mode behind auth where it exposes internals.
- Track last successful run per external source; surface staleness.
- NEVER expose infra setup instructions in product UI; keep ops docs in deployment docs.
