# Legal — DE/EU Compliance

Load for: public DE/EU surfaces. This is a generator checklist, not legal advice.
MUST get real operator data from a human before writing Impressum, privacy policy, or terms.
NEVER ship invented companies, placeholders, or training-data boilerplate as production content.

## Forbidden outdated norms

- NEVER cite "§ 5 TMG" or "Telemediengesetz" — correct: § 5 DDG.
- NEVER "TTDSG" — correct: TDDDG.
- NEVER "§ 55 RStV" — correct: § 18 Abs. 2 MStV (only if journalistic-editorial).
- NEVER link the EU ODR platform (obsolete since 2025-07-20).

## Impressum — § 5 DDG

- MUST be easy to find, directly reachable, linked from the footer (outside any consent wall), max 2 clicks on mobile.
- MUST be HTML text, not only an image or PDF.
- MUST include as applicable: name/legal form + representatives; serviceable address (no PO box); email; register + number; VAT ID; supervisory authority; regulated profession details.
- Heading "Impressum" suffices; "Angaben gemäß § 5 DDG" is recommended, not mandatory.

## Press law — § 18 Abs. 2 MStV

- ONLY for journalistic-editorial offerings (newsroom, magazine, editorial blog). Pure product/image/shop pages: NEVER auto-generate an MStV responsible person.
- If applicable: natural person with full name + serviceable address. MUST ask the human who it is.

## Data protection — DSGVO + § 25 TDDDG

- Privacy policy MUST match the actual processing inventory. NEVER a generic "we use Google Analytics, Meta Pixel" list when those tools are not embedded.
- Legal bases named separately: Art. 6(1) DSGVO (concrete letters) for processing; § 25 TDDDG for device storage/access.
- § 25 TDDDG(2) exception only for strictly necessary access for the requested service. Analytics, marketing, A/B testing, non-essential embeds: consent.
- Consent banner: opt-in for non-essential storage; no pre-checked marketing boxes; third-party scripts technically blocked until consent (not just a banner over loaded trackers); reject as easy as accept; Impressum/privacy reachable without consent; never block the whole site behind the wall.
- Forms: state purpose, controller, legal basis; only necessary fields; server-side validation; first-party spam protection preferred (honeypot, rate limit, time trap). Third-party captchas only with consent path + privacy entry.
- Analytics/tracking: behind consent unless provably consent-free; NEVER hardcode tracking IDs without a gate.

## Accessibility — two regimes, do not mix

- **BFSG (since 2025-06-28)**: applies to consumer e-commerce/booking/contract services, certain finance/telecom services — not automatically to purely informational sites. Micro-enterprise exception only for services (< 10 staff, ≤ €2M revenue/balance). B2B-only often out of scope — case by case, never guess.
- **BITV 2.0 / BGG**: public bodies only; never transfer to private shops.
- Technical baseline when BFSG applies: EN 301 549 § 9; practically WCAG 2.1 AA. Publish an accessibility statement + contact channel.
- ALWAYS regardless of duty: semantic HTML, alt text, keyboard access, visible focus, verified contrast, `prefers-reduced-motion`, non-destructive smooth scroll ([../frontend/accessibility.md](../frontend/accessibility.md)).

## Launch gate

Before production deploy run [../skills/launch-compliance-audit/SKILL.md](../skills/launch-compliance-audit/SKILL.md).
FAIL if: TMG/TTDSG/RStV appear; Impressum fields missing; trackers load without gate; consent wall blocks legal pages.
Open legal questions are listed as blockers — never waved through as "later".
