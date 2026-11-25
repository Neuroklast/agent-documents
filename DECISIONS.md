# Decision Log

- 2026-11-25: Introduce native requirements-clarity, incremental-delivery, evidence-review and complexity-review workflows; retain historical provenance. Replaces the former four skill identifiers; update consumers explicitly.

Dated one-liners for rule and structure decisions of this collection, including
"checked, unchanged" outcomes. Append-only; supersede, never rewrite.

Format: `YYYY-MM-DD: <decision or check> — <reason>`.

## 2026-09-18

- REST wire format is canonical in `skills/rest-guidelines/SKILL.md`; `backend/api.md` owns the API topic (auth, validation, endpoint DoD). Reason: remove dual ownership flagged in the audit.
- No license granted for this collection; `README.md` states that reuse requires permission. Reason: proprietary decision by the maintainer.
- Added root `SECURITY.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `DECISIONS.md`, `skills/README.md`. Reason: close hygiene gaps (no reporting path, no PR template, no decision-log home, no skill index).
- Lessons keep `YYYY-MM` date granularity; `lessons/README.md` format was corrected to match the rows. Reason: docs must match the data.
- `lessons/*` rows stay even when the rule is promoted into a topic file. Reason: lessons are the append-only origin; topic files are canonical ([lessons/README.md](lessons/README.md)).

## 2026-11-15

- Adopt a versioned, project-local living-documentation CI gate backed by a canonical owner map, append-only evidence journal and required branch status. Reason: repeated audits find recurring defect classes when documentation rules are advisory. CI checks presence and structure, while semantic accuracy and operational verification remain human responsibilities.

## 2026-11-23

- Adapt BMAD's discovery, story delivery and review as four independent, short skills (including Ponytail Review). Reason: use the useful decisions without copying entire upstream runtimes or bloating every agent session.
- Keep reviewer skills read-only and evidence-based. Reason: a review must not silently modify the artifact or invent findings.
- Skill installation requires an accompanying local docs collection and repairs links after copying. Reason: plain skill copies previously pointed to nonexistent topic files.

## 2026-11-25

- UI/UX specialists are independently drafted, task-triggered workflows; frontend-ui remains the implementation entry and frontend topic documents remain canonical. Reason: broad coverage without always-on context or competing rule ownership.
