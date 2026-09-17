# Stack — Cloudflare R2 / S3

Load for: object storage work. Core rules stay in `backend/integrations.md`.

## Keys

- Content-addressed where dedup matters: `sha256(bytes)` → `${prefix}/${hash}.${ext}`.
- Otherwise structured prefixes per domain: `artists/{id}/`, `invoices/{id}.pdf`, `imports/`.
- NEVER timestamps as cache keys; never user-supplied keys.
- Store the object PATH in the database; derive URLs at render time.

## Uploads

- Presigned PUT only after authentication; TTL 5–15 min.
- Bucket is resolved server-side — the client never chooses a bucket.
- Bucket CORS must allow the method + headers used (`PUT`, `Content-Type`, expose `ETag`).
- Large files: S3 multipart via the SDK (NOT TUS, NOT provider-specific upload libs unless standardized).
- Replace flows: delete the old object only after the new write succeeded. "Clear selection" never deletes.

## SDK pitfalls

- AWS SDK ≥ 3.609 sends CRC32 checksums that R2 rejects on presigned PUT → set `requestChecksumCalculation: 'WHEN_REQUIRED'`.
- `forcePathStyle: true` for R2.
- R2 ignores S3 `PutBucketCors` — CORS via dashboard/API, documented in ops docs.
- EU jurisdiction buckets use the `.eu.r2.cloudflarestorage.com` endpoint; configure jurisdiction explicitly.

## Serving

- Public assets via custom domain/CDN; purge cache after edits.
- Private assets via short-lived signed GETs (e.g. 300 s) or a controlled proxy route.
- NEVER render provider dev URLs (`pub-*.r2.dev`, vendor previews) in production UI — rewrite at render.
- Server-side remote-image caching (`fetch → store`) instead of hotlinking third parties.

## Integrity & reconciliation

- Reconcile by content hash, not filename.
- Deploy-boot reconcile (once per SHA) + onError self-heal for missing media; manual "match files" action in admin.
- Keep an admin health surface for storage status; ops setup instructions live in deployment docs, not in product UI.

## Security

- Buckets private by default; public only for genuinely public assets.
- Signed URLs are capability URLs — short TTLs, no logging of full URLs.
- Magic-byte validation server-side before storing user uploads.
