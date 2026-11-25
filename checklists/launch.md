# Checklist — Launch (Go-Live)

Apply the technical and operator/legal checks relevant to the actual product and jurisdiction; mark exclusions with reasons.

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
- [ ] Applicable performance budgets verified (web: LCP/INP/CLS and relevant lab/bundle measures).
- [ ] Rollback path documented and tested (previous tag + forward-compatible schema).

## Operator / legal (human duties)

- [ ] Run the compliance gate: [../skills/launch-compliance-audit/SKILL.md](../skills/launch-compliance-audit/SKILL.md).
- [ ] Operator data and all legal texts verified against [../legal/compliance-de.md](../legal/compliance-de.md) — no placeholders.

## Verification evidence

- [ ] Consent proof: network log shows no third-party requests before consent.
- [ ] Applicable accessibility checks, including keyboard, assistive technology, resize/reflow and automated evidence ([baseline](../frontend/accessibility.md)).
- [ ] Mobile: legal pages reachable, no clipped content.
- [ ] Load/rate-limit smoke: abuse-prone endpoints reject over-limit.

## Gate

Open legal questions are blockers — list them, never "later".
