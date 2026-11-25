<p align="center"><img src="assets/logo.svg" alt="AXON" width="480"></p>

# AXON by NEUROKLAST

**Project-aware engineering guidance for AI coding agents.**

AXON is the product name. Existing repository paths and skill identifiers remain compatible.

A local, modular collection of engineering instructions, specialist skills and verification tooling. It helps agents understand an existing codebase, select relevant guidance, make the smallest complete change and report actual evidence. It is not a coding model or a replacement for human review.

Created and maintained by NEUROKLAST · [neuroklast.net](https://neuroklast.net)

## What it does

- Routes tasks to focused skills instead of injecting a complete handbook into every session.
- Adapts to existing project conventions, infrastructure and release policy.
- Connects implementation with tests, security, accessibility and living documentation.
- Installs selected skills locally; manages updates and removal using recorded hashes.
- Covers web and native engineering, APIs, data, design systems, UI/UX, AI interfaces and applicable legal checks.

## Practical use cases

| Situation | Starting point |
| --- | --- |
| Existing codebase with repeated AI regressions | [Setup](SETUP.md), [systematic debugging](skills/systematic-debugging/SKILL.md) |
| Build a feature without unnecessary abstractions | [Plan first](skills/plan-first/SKILL.md), [complexity review](skills/complexity-review/SKILL.md) |
| Redesign a product interface | [Frontend UI](skills/frontend-ui/SKILL.md), [specialists](skills/README.md) |
| Review a PR or verify a bug fix | [Evidence review](skills/evidence-review/SKILL.md), [verification before done](skills/verification-before-done/SKILL.md) |
| Keep architectural docs current | [Living docs](core/docs-system.md), [CI gate reference](testing/living-docs-gate.md) |
| Adopt or update selected skills | [Setup](SETUP.md), installer below |

## Getting started

Obtain permission under the applicable [license](LICENSE). Put the collection in `docs/agent-docs/` inside the project; keep its relative links intact. Give the coding agent [SETUP.md](SETUP.md) as its task. Preserve existing project instructions, choose relevant skills, and record the source revision and verification commands.

The optional local installer requires Node.js 20+ and no package installation. Run it from the collection root:

```bash
node scripts/install-skills.mjs /path/to/project --agents --skill=frontend-ui --dry-run
node scripts/install-skills.mjs /path/to/project --agents --skill=frontend-ui
```

Use `--claude` for Claude's project directory; omitting both destination flags selects both. Omitting skill flags selects all, so prefer explicit selection. `--update` upgrades only unchanged managed copies; `--prune` requires an explicit desired selection and removes only unchanged managed files. Review any conflicts; do not overwrite user changes. The installer does not auto-detect project capabilities or download updates.

For normal sessions start with [AGENTS.md](AGENTS.md) or the portable [SKILL.md](SKILL.md). The [skill index](skills/README.md) lists specialist triggers. Review [optional hook examples](examples/hooks/README.md) before enabling them. Host discovery and sandbox policies vary.

## Quality and comparison

- [Quality evidence and reproducible checks](QUALITY.md): what is tested and what remains unproven.
- [Feature comparison](COMPARISON.md): documented scope versus existing approaches, not a performance ranking.
- [Maintainer index](MANIFEST.md) and [canonical rule ownership](RULE-OWNERS.md): navigation, not mandatory session context.

```bash
node scripts/check-docs.mjs
node --test scripts/*.test.mjs
```

A green run demonstrates the tested collection contracts, not guaranteed downstream code quality or lower model costs.

## Rights and limitations

See [LICENSE](LICENSE), [PROVENANCE.md](PROVENANCE.md) and [LEGAL-REVIEW.md](LEGAL-REVIEW.md). External references are acknowledgments, not endorsements. Commercial release requires separate rights and eligibility checks. Do not infer legal clearance or platform availability from this README.

The collection does not guarantee correct code, compliance, security or successful agent execution. Use real checks and appropriate human review.
