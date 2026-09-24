# Decision Log

Dated one-liners for rule and structure decisions of this collection, including
"checked, unchanged" outcomes. Append-only; supersede, never rewrite.

Format: `YYYY-MM-DD: <decision or check> — <reason>`.

## 2026-09-24

- Anti-overengineering is a skill (load on implement/review), not an always-on encyclopedia. Always-on stays one hard-rule bullet + session token hygiene in `core/context-budget.md`. Reason: checkable YAGNI beats "keep it simple"; extra always-on tokens cause context rot (Anthropic, Chroma; SkillReducer arXiv 2603.29919).
- Minimize scope, never correctness: never strip validation/auth/security to cut lines. Reason: one-liner-only prompts dropped path/auth guards in community benchmarks.

## 2026-09-18

- REST wire format is canonical in `skills/rest-guidelines/SKILL.md`; `backend/api.md` owns the API topic (auth, validation, endpoint DoD). Reason: remove dual ownership flagged in the audit.
- No license granted for this collection; `README.md` states that reuse requires permission. Reason: proprietary decision by the maintainer.
- Added root `SECURITY.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `DECISIONS.md`, `skills/README.md`. Reason: close hygiene gaps (no reporting path, no PR template, no decision-log home, no skill index).
- Lessons keep `YYYY-MM` date granularity; `lessons/README.md` format was corrected to match the rows. Reason: docs must match the data.
- `lessons/*` rows stay even when the rule is promoted into a topic file. Reason: lessons are the append-only origin; topic files are canonical ([lessons/README.md](lessons/README.md)).
