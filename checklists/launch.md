# Checklist — Launch (Go-Live)

Two tracks: **technical** and **operator/legal**. Both must be complete.

## Technical

- [ ] All CI gates green on the release commit; production SHA verified.
- [ ] HTTPS + HSTS; security headers present (CSP, frame-options, referrer, permissions).
- [ ] Secrets: none in the bundle/repo; all env vars set in production; `.env.example` current.
- [ ] Database: schema applied, RLS enabled + probed, backups configured and **restore-tested**.
- [ ] Auth: admin account created, MFA available, login rate-limited, lockout persisted.
- [ ] Rate limits active on public write endpoints (fail closed).
- [ ] Object storage: buckets private/public as intended, CORS for actual methods, signed URL TTLs short.
- [ ] Cron/jobs scheduled and monitored; health endpoint reachable (lite mode public, full mode protected).
- [ ] Error monitoring/logging active; no PII in logs; retention bounded.
- [ ] Redirects/404/500 pages sane; no debug output in production.
- [ ] Performance budgets pass on production build (LCP/CLS/bundle).
- [ ] Rollback path documented and tested (previous tag + forward-compatible schema).

## Operator / legal (human duties)

- [ ] Real operator data provided (name, address, email, register, VAT) — no placeholders.
- [ ] Impressum reachable without consent, in ≤ 2 clicks, as HTML text.
- [ ] Privacy policy matches actual processing (tools, cookies, TTLs, processors, regions).
- [ ] Consent: opt-in, reject as easy as accept, no pre-checked marketing, trackers blocked until consent.
- [ ] Processor list complete (hosting, DB, storage, email, payments) with DPA/SCC status.
- [ ] MStV responsible person named if journalistic-editorial content exists.
- [ ] BFSG scope assessed; accessibility statement published if applicable.
- [ ] Cookie/storage inventory documented; analytics behind consent.
- [ ] Contact form: purpose + legal basis stated; server-side validation; spam protection first-party.
- [ ] Retention/backup lifecycle documented.

## Verification evidence

- [ ] Consent proof: network log shows no third-party requests before consent.
- [ ] Accessibility: keyboard pass + axe/Lighthouse + 200% zoom recorded.
- [ ] Mobile: legal pages reachable, no clipped content.
- [ ] Load/rate-limit smoke: abuse-prone endpoints reject over-limit.

## Gate

Run [../skills/launch-compliance-audit/SKILL.md](../skills/launch-compliance-audit/SKILL.md).
Open legal questions are blockers — list them, never "later".
