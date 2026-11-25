# AXON by Neuroklast: task router

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

## Load contract

For any non-trivial task, write a load contract (see [load-contract](skills/load-contract/SKILL.md)) before loading skill bodies or topic files. Maximum one primary + two specialists. The contract makes the context decision reviewable.


## Resolve rule conflicts

Security, correctness, authorization and verification invariants outrank suggested defaults. Apply conditional stack guidance only to verified project capabilities. Project-specific decisions belong in the target project. Historical lessons are evidence, not current rule authority; when they conflict, use the canonical topic. The [ownership index](RULE-OWNERS.md) is for maintainers.

## Task router

Choose the primary workflow once; add specialist guidance only when needed. Follow links on demand and do not restart a workflow merely because a reference links back to it. Read-only tasks do not trigger coding, commits or deployment.

| When | Load |
| --- | --- |
| Every coding session | [Workflow](core/workflow.md), [Context budget](core/context-budget.md); [Clean code](core/clean-code.md) for implementation |
| Small feature or fix | [Plan first](skills/plan-first/SKILL.md), [Regression](core/regression.md), [TDD](skills/tdd-extraction/SKILL.md) |
| Product discovery / ambiguous requirements | [Requirements clarity](skills/requirements-clarity/SKILL.md), [PRD](templates/PRD.md) only if needed |
| Multi-story / cross-system delivery | [Incremental delivery](skills/incremental-delivery/SKILL.md), [Architecture](core/architecture.md) |
| Code or specification review | [Evidence review](skills/evidence-review/SKILL.md), [Quality](core/quality.md) |
| Lean / bloat / overengineering review | [Complexity review](skills/complexity-review/SKILL.md) |
| UI implementation | [Frontend UI](skills/frontend-ui/SKILL.md); add only relevant specialists below |
| Research and product discovery | [ux-research](skills/ux-research/SKILL.md) |
| Information architecture and navigation | [information-architecture](skills/information-architecture/SKILL.md) |
| Interaction design and workflow patterns | [interaction-design](skills/interaction-design/SKILL.md) |
| Visual design and art direction | [visual-design](skills/visual-design/SKILL.md) |
| Design systems and component governance | [design-systems](skills/design-systems/SKILL.md) |
| Frontend application architecture | [frontend-architecture](skills/frontend-architecture/SKILL.md) |
| Responsive and adaptive interfaces | [responsive-ui](skills/responsive-ui/SKILL.md) |
| Inclusive and accessible interaction | [accessible-ui](skills/accessible-ui/SKILL.md) |
| Forms, content design and localization | [forms-and-content](skills/forms-and-content/SKILL.md) |
| Async UI and resilient state transitions | [async-ui](skills/async-ui/SKILL.md) |
| Data-heavy tools and visualization | [data-heavy-ui](skills/data-heavy-ui/SKILL.md) |
| Perceived performance and meaningful motion | [ui-performance-motion](skills/ui-performance-motion/SKILL.md) |
| AI and conversational interface design | [ai-interaction-ux](skills/ai-interaction-ux/SKILL.md) |
| Trust, privacy and ethical interaction | [trustworthy-ux](skills/trustworthy-ux/SKILL.md) |
| Evidence-based UI and UX review | [ux-quality-review](skills/ux-quality-review/SKILL.md) |
| Explicit scroll-bound video | [Video scrubbing](skills/video-scrubbing/SKILL.md), [Scroll/motion](frontend/scroll-motion.md) |
| Accessibility / motion / performance | [Accessibility](frontend/accessibility.md), [Scroll/motion](frontend/scroll-motion.md), [Performance](frontend/performance.md) as relevant |
| API / data / permissions | [API](backend/api.md), [REST skill](skills/rest-guidelines/SKILL.md), [Data](backend/data-and-schema.md), [Auth](backend/auth.md) as relevant |
| Cache / external integrations | [Caching](backend/caching.md), [Integrations](backend/integrations.md) as relevant |
| Security / LLM | [Security](security/security.md), [Web API](security/web-api.md), [Model security](security/owasp-llm.md), [Security skill](skills/security-owasp/SKILL.md) as relevant |
| Dependency / asset licensing | [Licensing](legal/licensing.md) |
| Public launch / legal change | Identify jurisdiction and applicable duties; [Legal maintenance](legal/legal-maintenance.md) for relevant data-processing changes |
| German/EU public surface | [Compliance DE](legal/compliance-de.md), [Launch skill](skills/launch-compliance-audit/SKILL.md) where applicable |
| Tests / CI | [Testing strategy](testing/strategy.md), [Contracts CI](testing/contracts-ci.md) and relevant [unit](testing/unit.md) or [E2E](testing/e2e.md) |
| Git / PR / release | [Git](core/git.md), [PR checklist](checklists/pr.md), [Release checklist](checklists/release.md) |
| C/C++ realtime | [Realtime skill](skills/c-realtime/SKILL.md) |
| JUCE plugin / native audio | [JUCE adapter](stack/cpp-juce.md) |
| Next.js | [Next.js](stack/nextjs.md) |
| TypeScript | [TypeScript](stack/typescript.md) |
| Supabase | [Supabase](stack/supabase.md) |
| R2 / S3 object storage | [R2/S3](stack/cloudflare-r2.md) |
| Incidents / learned pitfalls | [Lessons index](lessons/README.md) |
| Architecture remediation / living docs | [Quality programme](core/architecture-quality-programme.md), [CI gate](testing/living-docs-gate.md) |

| Long session / drift risk | [Context thread](skills/context-thread/SKILL.md) |
| Claiming task complete | [Verification before done](skills/verification-before-done/SKILL.md) |
| PR / review comments | [PR comment concise](skills/pr-comment-concise/SKILL.md) |
| Implementation / refactor | [Minimal change](skills/minimal-change/SKILL.md) |
| Bug diagnosis | [Systematic debugging](skills/systematic-debugging/SKILL.md) |

| Non-trivial task start | [Load contract](skills/load-contract/SKILL.md) |

| User-facing UI | [Frontend taste](skills/frontend-taste/SKILL.md), [Frontend UI](skills/frontend-ui/SKILL.md) |
| Agent-written text (PR, comments, docs, copy) | [Humanize output](skills/humanize-output/SKILL.md) |

## Finish

Implement the change, run the relevant checks, review the diff and update affected documentation. Report the actual results before calling the task complete.
Definition of Done: [core/quality.md](core/quality.md). Closeout: [checklists/session.md](checklists/session.md).
Parallel contributors: separate worktrees and one writer per tree ([core/workflow.md](core/workflow.md)).
Role boundaries: [roles/](roles/README.md). Review-only roles never modify production code.
