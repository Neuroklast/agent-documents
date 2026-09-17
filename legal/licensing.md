# Legal — Licensing

Load for: adding dependencies, assets, fonts, or changing the project license.

## Project license

- The project license is a business decision — NEVER change it without explicit human approval.
- `UNLICENSED`/proprietary repos: no public distribution assumptions; check contribution terms.
- BSL/AGPL and similar: note the change date/version (BSL converts over time); document obligations.

## Dependency licenses

| Category | Examples | Rule |
| --- | --- | --- |
| Permissive | MIT, Apache-2.0, BSD, ISC | OK with attribution where required |
| Weak copyleft | LGPL, MPL | OK if dynamically linked/used as library — check obligations |
| Strong copyleft | GPL, AGPL | AVOID in closed-source products; human approval required |
| Source-available | BSL, SSPL, custom | Check terms per version; human approval |
| Unknown/no license | — | NEVER use |

- Check license + maintenance + CVE status BEFORE adding a dependency.
- Transitive licenses count (run a license scan where available).
- NEVER vendor code without its license header.

## Assets

- Fonts: self-host or license properly; record license in the repo.
- Images/icons/music: license + source documented; no scraped assets.
- 3D models, samples, presets: usage rights recorded (especially for commercial products).

## Attribution

- Keep a `THIRD_PARTY_NOTICES`/credits file where licenses require attribution.
- In-product credits where the license demands it.

## Process

1. Identify the license of every new dependency/asset.
2. Record it (license scan output or manual note in the PR).
3. Flag copyleft/unknown to the human before merging.
4. Update notices file + docs.
