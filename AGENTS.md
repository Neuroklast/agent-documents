# Agent Documents: task router

Load this file first. Read **only** topic files relevant to the task. [MANIFEST.md](MANIFEST.md) is for maintainers, not normal sessions.

## Rules for every task

- Read project manifests and lockfiles before choosing install, build or test commands.
- Make the smallest **complete** change. No speculative features, unrelated refactors or reformatting.
- Do not invent project facts, package managers, APIs or test results.
- Never expose credentials; keep least-privilege tool access.
- No destructive migrations, production deployment, history rewrite, force-push to shared branches or secret rotation without explicit approval.
- No disabled checks to silence failures (`as any`, `@ts-ignore`, broad lint disables, skipped tests).
- Never claim success with failing or unexecuted checks; report what is unverified.

## Apply guidance to the project

Use the existing project's architecture, conventions, tools, supported platforms and release policy. General rules protect correctness, security and verification; topic defaults are recommendations when compatible with the project. Stack adapters apply only to technologies actually present. Do not impose a personal preference, new framework, service, folder structure, CI job or deployment action without a task-specific reason and the necessary approval. If guidance conflicts, preserve the user's authorized scope and applicable security/legal constraints; explain material conflicts rather than silently changing policy.

## Task router

| When | Load |
| --- | --- |
| Every coding session | [Workflow](core/workflow.md), [Context budget](core/context-budget.md); [Clean code](core/clean-code.md) for implementation |
| Small feature or fix | [Plan first](skills/plan-first/SKILL.md), [Regression](core/regression.md), [TDD](skills/tdd-extraction/SKILL.md) |
| Product discovery / ambiguous requirements | [Requirements clarity](skills/requirements-clarity/SKILL.md), [PRD](templates/PRD.md) only if needed |
| Multi-story / cross-system delivery | [Incremental delivery](skills/incremental-delivery/SKILL.md), [Architecture](core/architecture.md) |
| Code or specification review | [Evidence review](skills/evidence-review/SKILL.md), [Quality](core/quality.md) |
| Lean / bloat / overengineering review | [Complexity review](skills/complexity-review/SKILL.md) |
| UI / interaction | [Frontend UI skill](skills/frontend-ui/SKILL.md), [UX](frontend/ux.md); [Design](frontend/design.md), [Components](frontend/components.md) on demand |
| Explicit scroll-bound video | [Video scrubbing](skills/video-scrubbing/SKILL.md), [Scroll/motion](frontend/scroll-motion.md) |
| Accessibility / motion / performance | [Accessibility](frontend/accessibility.md), [Scroll/motion](frontend/scroll-motion.md), [Performance](frontend/performance.md) as relevant |
| API / data / permissions | [API](backend/api.md), [REST skill](skills/rest-guidelines/SKILL.md), [Data](backend/data-and-schema.md), [Auth](backend/auth.md) as relevant |
| Cache / external integrations | [Caching](backend/caching.md), [Integrations](backend/integrations.md) as relevant |
| Security / LLM | [Security](security/security.md), [Web API](security/web-api.md), [Model security](security/owasp-llm.md), [Security skill](skills/security-owasp/SKILL.md) as relevant |
| Dependency / asset licensing | [Licensing](legal/licensing.md) |
| Legal / public launch | [Compliance DE](legal/compliance-de.md), [Legal maintenance](legal/legal-maintenance.md), [Launch skill](skills/launch-compliance-audit/SKILL.md) for German/EU scope |
| Tests / CI | [Testing strategy](testing/strategy.md), [Contracts CI](testing/contracts-ci.md) and relevant [unit](testing/unit.md) or [E2E](testing/e2e.md) |
| Git / PR / release | [Git](core/git.md), [PR checklist](checklists/pr.md), [Release checklist](checklists/release.md) |
| C++ / JUCE / realtime | [C++ stack](stack/cpp-juce.md), [Realtime skill](skills/c-realtime/SKILL.md) |
| Next.js / TypeScript | [Next.js](stack/nextjs.md), [TypeScript](stack/typescript.md) |
| Supabase / object storage | [Supabase](stack/supabase.md), [R2/S3](stack/cloudflare-r2.md) |
| Incidents / learned pitfalls | [Lessons index](lessons/README.md) |
| Architecture remediation / living docs | [Quality programme](core/architecture-quality-programme.md), [CI gate](testing/living-docs-gate.md) |

## Finish

Implement the change, run the relevant checks, review the diff and update affected documentation. Report the actual results before calling the task complete.
Definition of Done: [core/quality.md](core/quality.md). Closeout: [checklists/session.md](checklists/session.md).
Parallel contributors: separate worktrees and one writer per tree ([core/workflow.md](core/workflow.md)).
Role boundaries: [roles/](roles/README.md). Review-only roles never modify production code.
