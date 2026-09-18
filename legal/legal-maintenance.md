# Legal — Maintenance

Load for: any change touching data processing, cookies, third parties, PII, or legal pages.

## Principle

Legal texts are code artifacts: they live in the repo, are reviewed like code, and MUST match the actual implementation (TTLs, cookie names, processors, storage types).

## Trigger table

| Change | Legal action |
| --- | --- |
| New cookie / localStorage / IndexedDB | Update privacy policy + consent gate; add to storage inventory |
| New third-party tool / embed / CDN | Processor check (DPA/SCC, region), privacy entry, consent path |
| New PII field / upload | Purpose, legal basis, retention; forms notice |
| New export / public API | Check DSGVO relevance (data portability, third-party access) |
| New newsletter / marketing | Consent proof, double opt-in, unsubscribe |
| New payment flow | Processor entry, invoice law check (§ 14/§ 19 UStG) |
| Hosting / backup / subprocessor change | Processor list + region check |
| New public page | Impressum/privacy reachable from it |
| Removal of a tool | Remove from privacy policy + inventory |

If a change triggers nothing: record it explicitly — `YYYY-MM-DD: checked <trigger>, unchanged because <reason>`.

## Processors & regions

- Keep a processor table: name, purpose, region, DPA status, data categories.
- Prefer EU regions; US processors need SCCs + a privacy entry.
- Optional processors (e.g. email) only activate after explicit admin approval where they touch customer data.

## Storage & cookies inventory

- Inventory: name, type (cookie/localStorage/IndexedDB), purpose, duration/TTL, essential (y/n), consent required.
- Cache TTLs and cookie names are privacy facts — document them in the privacy policy.
- Essential = strictly necessary for the requested service (§ 25 TDDDG(2)); everything else needs consent.

## Text sources

- Legal texts live as structured data/code (e.g. `lib/legal/*`), rendered by pages — not copy-pasted HTML.
- Tests MUST enforce: no forbidden old norms, no retired processors, all public paths reachable, operator fields present.
- NEVER invent operator data; missing data is a blocker, not a placeholder.

## Decision log

- Append dated one-liners for every legal check, including "unchanged" decisions.
- In this collection the log is [../DECISIONS.md](../DECISIONS.md); in a target project keep it next to the legal sources.

## NEVER

- Copy another site's legal texts, trackers, or clause wording.
- Ship a consent banner when nothing non-essential is stored.
- Claim certifications (e.g. "BFSG-certified") that do not exist.
- Let legal texts drift from code facts.
