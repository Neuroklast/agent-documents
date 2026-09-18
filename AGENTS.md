# AGENTS.md — Agent Contract & Router

Portable governance collection for AI coding agents (AGENTS.md standard).
This file is a **router**, not an encyclopedia. Read only the files the current task needs.

## Session start

1. Read this file.
2. Read exactly the topic file(s) matching the task (routing table below).
3. Read [README.md](README.md) only when adopting this collection into a project.
4. Read [MANIFEST.md](MANIFEST.md) only when adding, renaming, or auditing files.

## Hard rules (always apply)

- ALWAYS read the project's manifests before install/test/build: `package.json`, lockfiles, `Cargo.toml`, `go.mod`, `pyproject.toml`, `CMakeLists.txt`.
- ALWAYS the smallest change that fully solves the task. NEVER drive-by refactors, reformatting, or unrequested UX changes.
- NEVER invent a package manager. Use the lockfile present in the repo.
- NEVER commit, log, or expose secrets (`.env*`, keys, tokens, connection strings, frontend bundles).
- NEVER `as any`, `@ts-ignore`, or blanket `eslint-disable` to silence errors.
- NEVER production deploy, destructive DB migration, `rm -rf`, force-push to `main`, or secret rotation without explicit human approval.
- NEVER grant an agent broader tools or permissions than the task needs (least privilege).
- ALWAYS run the project's check pipeline before claiming done. NEVER report done on failing checks.
- ALWAYS update documentation at session end — docs are part of the deliverable.

## Routing table — read by task

| Task | Files |
| --- | --- |
| Any session | [core/workflow.md](core/workflow.md), [core/context-budget.md](core/context-budget.md) |
| New feature / route | [core/architecture.md](core/architecture.md), [templates/feature-spec.md](templates/feature-spec.md), [testing/strategy.md](testing/strategy.md) |
| Product definition / PRD | [templates/PRD.md](templates/PRD.md) |
| Refactor / bugfix | [core/regression.md](core/regression.md), [core/clean-code.md](core/clean-code.md) |
| UI implementation | [skills/frontend-ui/SKILL.md](skills/frontend-ui/SKILL.md), [frontend/ui.md](frontend/ui.md), [frontend/ux.md](frontend/ux.md), [frontend/components.md](frontend/components.md) |
| Design tokens / themes | [frontend/design.md](frontend/design.md) |
| Accessibility | [frontend/accessibility.md](frontend/accessibility.md) |
| Scroll / motion / overlays | [frontend/scroll-motion.md](frontend/scroll-motion.md) |
| Performance | [frontend/performance.md](frontend/performance.md) |
| API endpoint | [backend/api.md](backend/api.md), [skills/rest-guidelines/SKILL.md](skills/rest-guidelines/SKILL.md) |
| DB / schema | [backend/data-and-schema.md](backend/data-and-schema.md), [backend/auth.md](backend/auth.md) |
| Auth / login / roles | [backend/auth.md](backend/auth.md), [security/security.md](security/security.md) |
| Caching / ISR | [backend/caching.md](backend/caching.md) |
| Third-party services | [backend/integrations.md](backend/integrations.md) |
| Security review | [security/security.md](security/security.md), [security/web-api.md](security/web-api.md), [skills/security-owasp/SKILL.md](skills/security-owasp/SKILL.md) |
| LLM / AI features | [security/owasp-llm.md](security/owasp-llm.md) |
| Legal / compliance | [legal/compliance-de.md](legal/compliance-de.md), [legal/legal-maintenance.md](legal/legal-maintenance.md) |
| Public launch | [checklists/launch.md](checklists/launch.md), [skills/launch-compliance-audit/SKILL.md](skills/launch-compliance-audit/SKILL.md) |
| Tests | [testing/strategy.md](testing/strategy.md) + [testing/unit.md](testing/unit.md) or [testing/e2e.md](testing/e2e.md) |
| CI / contract scripts | [testing/contracts-ci.md](testing/contracts-ci.md) |
| Git / PR / release | [core/git.md](core/git.md), [checklists/pr.md](checklists/pr.md), [checklists/release.md](checklists/release.md) |
| C / C++ / realtime / audio | [stack/cpp-juce.md](stack/cpp-juce.md), [skills/c-realtime/SKILL.md](skills/c-realtime/SKILL.md) |
| Next.js | [stack/nextjs.md](stack/nextjs.md) |
| Supabase / Postgres | [stack/supabase.md](stack/supabase.md) |
| Object storage (R2/S3) | [stack/cloudflare-r2.md](stack/cloudflare-r2.md) |
| TypeScript | [stack/typescript.md](stack/typescript.md) |
| Lessons by area | [lessons/](lessons/README.md) |

## Session closeout (short)

1. Implement → 2. run checks → 3. update docs → 4. commit/PR/report.
Checklist: [checklists/session.md](checklists/session.md). Definition of Done: [core/quality.md](core/quality.md).

## Multi-agent

Parallel agents only in isolated git worktrees. One writer per working tree.
Full version: [core/workflow.md](core/workflow.md).

## Roles

Roles live in [roles/](roles/README.md). Reviewer, security-auditor and compliance-officer NEVER write production code.
