---
name: launch-compliance-audit
description: German/EU launch compliance gate before production go-live. Use when preparing a public DE/EU surface for launch — audits Impressum, privacy and consent, forms and analytics, BFSG accessibility, and technical hardening with PASS/FAIL evidence.
---

# Skill — Launch Compliance Audit (DE/EU)

## Gate 1 — Forbidden old norms

```bash
rg -i "TMG|TTDSG|RStV|ODR-Plattform|online dispute resolution" --glob '!node_modules'
```

Any hit = FAIL. Correct: § 5 DDG, TDDDG, § 18 Abs. 2 MStV. EU ODR link removed (obsolete 2025-07-20).

## Gate 2 — Impressum

- [ ] Page exists, HTML text (not only image/PDF), footer link outside consent wall, ≤ 2 clicks mobile.
- [ ] Fields: name/legal form + representatives, serviceable address, email, register + number, VAT ID (if any), supervisory authority/regulated profession (if applicable).
- [ ] Real operator data — placeholders are a FAIL.

## Gate 3 — Privacy & consent

- [ ] Privacy policy matches actual processing (tools, cookies, TTLs, processors, regions).
- [ ] Legal bases separated: Art. 6(1) DSGVO + § 25 TDDDG.
- [ ] Consent: opt-in, reject as easy as accept, no pre-checked marketing.
- [ ] Trackers/embeds blocked until consent — verify via network log (no third-party request before consent).
- [ ] Legal pages reachable without consent; site not blocked behind the wall.

## Gate 4 — Forms & analytics

- [ ] Forms state purpose/controller/legal basis; server-side validation; first-party spam protection preferred.
- [ ] Analytics behind consent unless provably consent-free; no hardcoded tracking IDs without gate.

## Gate 5 — Accessibility

- [ ] BFSG scope assessed (consumer e-commerce/services vs purely informational).
- [ ] WCAG 2.1 AA evidence: keyboard, focus, contrast, alt text, reduced motion, 200% zoom.
- [ ] Accessibility statement + contact channel published if BFSG applies.

## Gate 6 — Technical

- [ ] HTTPS + HSTS, security headers, no secrets in bundle.
- [ ] Backups configured + restore tested.
- [ ] Rate limits active; admin MFA available; RLS probed.

## Output

- PASS/FAIL per gate with evidence.
- Blockers = human decisions (operator data, MStV person, legal wording).
- NEVER write or reword legal texts yourself.
- NEVER declare "compliant" — declare "gates passed/failed".
