---
name: launch-compliance-audit
description: German/EU launch compliance gate before production go-live. Use when preparing a public DE/EU surface for launch — audits Impressum, privacy and consent, forms and analytics, BFSG accessibility, and technical hardening with PASS/FAIL evidence.
---

# Skill — Launch Compliance Audit (DE/EU)

## Gate 1 — Forbidden old norms

```bash
rg -i "TMG|TTDSG|RStV|ODR-Plattform|online dispute resolution" --glob '!node_modules'
```

Inspect matches in actual public legal content; historical references, tests and this audit checklist are not violations. Correct: § 5 DDG, TDDDG, § 18 Abs. 2 MStV. EU ODR link removed (obsolete 2025-07-20).

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
- [ ] Verify applicable legal/contractual accessibility requirements separately from the [web design baseline](../../frontend/accessibility.md); record keyboard, focus, contrast, resize/reflow and assistive-technology evidence.
- [ ] Required accessible service information and contact details provided where applicable.

## Gate 6 — Technical

- [ ] HTTPS + HSTS, security headers, no secrets in bundle.
- [ ] Where applicable, backups configured and restore tested.
- [ ] Relevant abuse controls, privileged authentication and storage authorization verified.

## Output

- PASS/FAIL/NOT APPLICABLE/NOT TESTED per gate with evidence; explain exclusions.
- Blockers = human decisions (operator data, MStV person, legal wording).
- Draft legal wording only as clearly labelled review material when requested; obtain qualified review and verified facts before production use.
- NEVER declare "compliant" — declare "gates passed/failed".
