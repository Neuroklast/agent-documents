# Changelog

All notable changes to this collection are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [1.0.0] - 2026-09-17

### Added

- YAML frontmatter (`name`, `description`) for all 8 skills, compliant with the Agent Skills spec (agentskills.io) — skills are now discoverable by opencode, Claude Code, Codex, and Copilot.
- `scripts/check-docs.mjs` — validates line budgets, skill frontmatter, relative links, MANIFEST coverage; prints a token estimate.
- `scripts/install-skills.mjs` — copies `skills/` into a target repo's `.agents/skills/` and `.claude/skills/`.
- `.github/workflows/docs-check.yml` — CI runs the docs check on push and PR.
- `examples/hooks/` — deterministic gate examples: block destructive shell commands, post-edit lint.
- README sections: validation, evidence, anti-patterns we avoid.

### Changed

- `MANIFEST.md` is now a maintainer index; it is no longer read at session start.
- `security/security.md` loads on demand (auth, mutations, inputs, integrations) instead of every session; the least-privilege rule moved to the AGENTS.md hard rules.
- Resolved 9 cross-file contradictions: E2E deferral wording, `@ts-ignore` policy, 400-line file signal, coverage thresholds, reduced-motion override, read budget, session-start reading, skill descriptions, MANIFEST duplicate entry.
- `AGENTS.md`: added the least-privilege hard rule.
- Deduplicated rule ownership: `AGENTS.md` drops the "Core rules short form" and DoD restatements; roles link to canonical criteria instead of mirroring them; the test-integrity rule now lives only in `core/workflow.md`; the archive policy only in `core/docs-system.md`; lessons promotion clarified in `lessons/README.md`.

### Removed

- Redundant "Use when" lines in skills — the trigger text now lives in the frontmatter `description`.
