# Agent Docs — Portable Governance Collection

Project-agnostic markdown contracts for AI coding agents.
Consolidated from real production repos (web apps, label platforms, native audio plugins) and stripped of project specifics.

Canonical repository: https://github.com/Neuroklast/agent-documents

## Quick start

```bash
git clone https://github.com/Neuroklast/agent-documents.git
```

Use in a target project (copy):

```powershell
Copy-Item -Recurse agent-documents <target-repo>\docs\agent-docs
```

Use in a target project (submodule):

```bash
git submodule add https://github.com/Neuroklast/agent-documents.git docs/agent-docs
```

Then point the target repo's root `AGENTS.md` at `docs/agent-docs/AGENTS.md` and adapt it (see below).

## What this is

- A **router** ([AGENTS.md](AGENTS.md)) plus small, single-purpose topic files.
- **Progressive disclosure**: sessions read only the files in the current task's context.
- **One rule, one file.** Other files link to it, never duplicate it.
- **Portable core** (`core/`, `frontend/`, `backend/`, `security/`, `legal/`, `testing/`, `lessons/`) plus **stack adapters** (`stack/`) for concrete technologies.

## How to adopt (into any project)

1. Copy the cloned folder into the target repo (e.g. as `docs/agent-docs/`).
2. Keep `AGENTS.md` at the repo root (or link to it from an existing root `AGENTS.md`).
3. In `AGENTS.md`, replace the generic check commands with the project's real scripts (from `package.json` / `Makefile` / CI).
4. Delete unused stack adapters and skills. Less is more — the router must only point at files that exist.
5. Optionally copy `opencode.json` and adjust permissions; copy `CLAUDE.md` / `GEMINI.md` / `.github/copilot-instructions.md` for tool compatibility.
6. Add a short **Project facts** block to `AGENTS.md`: stack, package manager, check commands, deploy target. Never invent these — read the manifests.

## Structure

```text
AGENTS.md            Router: hard rules, routing table, DoD
MANIFEST.md          Full index with "read when"
README.md            This file
CLAUDE.md / GEMINI.md / .github/copilot-instructions.md   Pointers
opencode.json        Tool permissions (OpenCode)
core/                Workflow, context budget, git, clean code, quality, architecture, regression, docs
frontend/            UI, UX, design, components, accessibility, scroll/motion, performance
backend/             API, data & schema, auth, caching, integrations
security/            Baseline, web/API, OWASP LLM
legal/               DE/EU compliance, legal maintenance, licensing
testing/             Strategy, unit, e2e, contracts/CI
checklists/          Session, PR, release, launch
lessons/             Distilled hard-won lessons by area
roles/               Subagent role contracts (architect, reviewer, tester, …)
skills/              Task-specific skills (SKILL.md per folder)
templates/           PRD, ADR, feature spec, deviation record
stack/               Next.js, Supabase, R2, TypeScript, C++/JUCE
```

## Principles

- **MUST / NEVER / ALWAYS** phrasing. Bullets, not prose.
- Every topic file ≤ 150 lines. If it grows, split by concern and register it in `MANIFEST.md`.
- Facts over templates: no invented operator data, no invented APIs, no invented version numbers.
- Structural gates (CI scripts, contract tests, hooks) beat prose bans. Markdown is the contract; enforcement lives in tooling.

## Customization points

| File | Customize |
| --- | --- |
| `AGENTS.md` | Check commands, project facts, routing entries for project-specific docs |
| `opencode.json` | Tool permissions, subagent wiring |
| `legal/compliance-de.md` | Operator-specific launch gate (only if DE/EU public surface) |
| `stack/*` | Keep only the adapters your project uses |
| `lessons/*` | Append project lessons; promote recurring ones into topic files |

## What markdown cannot do

- It does not replace CI, secret scanning (gitleaks), or SAST (semgrep).
- It does not make a site legally compliant — operator data and legal review are human duties.
- It does not replace human approval for deploys, destructive migrations, or rule deviations.
- It does not enforce itself: pair it with `opencode.json` permissions, hooks, and CI gates.

## Enforcement examples

```text
OpenCode        opencode.json allow/deny/ask + subagent roles
Claude Code     PreToolUse hook: exit code 2 blocks a tool call (exit 1 does not)
CI              secret scan + SAST + lint + types + tests + build as merge gates
Git             protected main, required checks, no force-push
```

## Maintenance

- Update the matching topic file whenever a convention changes; new topic → new file + `MANIFEST.md` entry.
- Keep `AGENTS.md` ≤ 120 lines. It is a router, not documentation.
- Archive superseded docs with a banner instead of deleting history.
