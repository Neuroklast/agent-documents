# Changelog

All notable changes to this collection are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [Unreleased]

### Added

- `.github/ISSUE_TEMPLATE/` — optional bug, feature, task, and docs templates plus `config.yml` (security stays private).
- `skills/adopt-into-project/SKILL.md` — interview, prune unused adapters, copy optional GitHub templates when adopting the collection.
- `skills/anti-overengineering/SKILL.md` — YAGNI/reuse/KISS/abstraction filter; routed from new-feature and refactor/bugfix.
- Session token hygiene in `core/context-budget.md`.
- `SECURITY.md` (root) — vulnerability reporting + pointer to `security/`.
- `DECISIONS.md` (root) — canonical decision log (referenced by `core/docs-system.md`, `legal/legal-maintenance.md`).
- `.github/PULL_REQUEST_TEMPLATE.md` — mirrors `checklists/pr.md`.
- `skills/README.md` — skill index.
- Subfolder-README rule in `core/context-budget.md`.

### Changed

- `AGENTS.md` routes adopt-into-project; session start loads the skill with README when adopting.
- `core/git.md` documents optional GitHub issue templates; `README.md` points adopt at the skill.
- `AGENTS.md` hard rule: no speculative features, single-use abstractions, or unrequested deps; keep validation/auth/security.
- `core/clean-code.md`, `core/quality.md`, `core/workflow.md`: anti-overengineering anchors (scope down, never strip safety).
- REST ownership resolved: `skills/rest-guidelines/SKILL.md` owns the wire format; `backend/api.md` owns the API topic. Duplicated tables removed from `backend/api.md`.
- Deduplicated rule copies: security review checklist (`security/web-api.md` → skill), video scrubbing (`frontend/scroll-motion.md` → skill), session docs (`checklists/session.md` → `core/docs-system.md`), escalation gates (`core/workflow.md` → AGENTS/security).
- Lessons date format documented as `YYYY-MM` (matches existing rows).
- `README.md`: reuse/license note added; copy/submodule guidance softened; budget wording clarified.
- `AGENTS.md` routing now reaches `templates/PRD.md`.
- `MANIFEST.md` heading `tooling` → `Tooling`; ownership map split for API topic vs REST wire format.

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
- Deduplicated rule ownership: `AGENTS.md` drops the "Core rules short form" and DoD restatements; roles link to canonical criteria instead of mirroring them; the test-integrity rule is canonical in `core/workflow.md` (other files link); the archive policy is canonical in `core/docs-system.md`; lessons promotion clarified in `lessons/README.md`.
- Rule hygiene pass: sharpened vague instructions (clean-code naming, architect tradeoffs, review intent, workflow wrong-assumption wording, debounce value) and deleted a redundant clean-code bullet; the commit-scope rule is canonical in `core/git.md`; added "Rule lifecycle (evaluation)" to `core/context-budget.md` and a rule-ownership map to `MANIFEST.md`.
- Stack/checklist dedup: `checklists/launch.md` operator track now links the compliance gate instead of restating legal rules; the unavailable-checks rule is canonical in `core/workflow.md` (contracts-ci, session, tester link); the UI touch-target item links `frontend/accessibility.md`.
- Post-refactor audit fixes: DoD ownership corrected to `core/quality.md`; z-index wording made token-based; acceptance criteria added for deep links, in-memory rate-limit backstop, and release-note honesty; README/MANIFEST consistency.

### Removed

- Redundant "Use when" lines in skills — the trigger text now lives in the frontmatter `description`.
