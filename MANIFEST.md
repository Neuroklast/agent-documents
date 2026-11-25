# AXON — Maintainer Index

Every file in this collection: purpose and when to read it.
Maintainer index — read when adding, renaming, or auditing files, **not** at session start. Task routing lives in AGENTS.md.
## Root

| Path | Purpose | Read when |
| --- | --- | --- |
| [SETUP.md](SETUP.md) | Project adoption and ongoing skill maintenance | Initial setup or explicit reconfiguration |
| [SKILL.md](SKILL.md) | Portable collection entry point | Single-skill discovery |
| [AGENTS.md](AGENTS.md) | Router, hard rules, routing table | Always, first |
| [ARCHIVE-REVIEW.md](ARCHIVE-REVIEW.md) | Snapshot scope, file review and unresolved rights checks | Review of distribution contents |
| [LEGAL-REVIEW.md](LEGAL-REVIEW.md) | Legal review evidence and unresolved release conditions | Distribution review |
| [PROVENANCE.md](PROVENANCE.md) | Inspiration, ownership boundaries and release checks | Distribution or audit |
| [README.md](README.md) | Human onboarding, adoption, customization, limits | Adopting the collection |
| [RULE-OWNERS.md](RULE-OWNERS.md) | Canonical rule ownership | Maintainer audits |
| [LICENSE](LICENSE) | Rights and permissions | Adoption and distribution |
| [assets/logo.svg](assets/logo.svg) | Original vector project mark | README branding |
| [QUALITY.md](QUALITY.md) | Reproducible verification and benchmark limits | Assessing evidence |
| [COMPARISON.md](COMPARISON.md) | Dated public feature comparison | Evaluating alternatives |
| [MANIFEST.md](MANIFEST.md) | This index | Adding, renaming, auditing files |
| [CHANGELOG.md](CHANGELOG.md) | Release history of the collection | Updating the collection |
| [DECISIONS.md](DECISIONS.md) | Decision log (rule/structure decisions, "unchanged" checks) | Rule lifecycle, audits |
| [SECURITY.md](SECURITY.md) | Vulnerability reporting + scope for this collection | Reporting a security issue |
| [CLAUDE.md](CLAUDE.md) | Pointer `@AGENTS.md` for Claude Code | Tool reads it automatically |
| [GEMINI.md](GEMINI.md) | Pointer `@AGENTS.md` for Gemini CLI | Tool reads it automatically |
| [.github/copilot-instructions.md](.github/copilot-instructions.md) | Pointer for GitHub Copilot | Tool reads it automatically |
| [opencode.json](opencode.json) | Tool permissions (allow/deny/ask), subagent roles | OpenCode setup |
## Tooling

| Path | Purpose | Read when |
| --- | --- | --- |
| [scripts/check-docs.mjs](scripts/check-docs.mjs) | Validates budgets, skill frontmatter, links, MANIFEST coverage | Docs/CI changes |
| [scripts/install-skills.mjs](scripts/install-skills.mjs) | Copies `skills/` into `.agents/skills/` and `.claude/skills/` | Adopting skills into a project |
| [scripts/install-skills.test.mjs](scripts/install-skills.test.mjs) | Installer default and link-rewrite regression tests | Changing skill installation |
| [examples/hooks/README.md](examples/hooks/README.md) | Deterministic gate hook examples (Claude Code) | Setting up enforcement |
| [.github/workflows/docs-check.yml](.github/workflows/docs-check.yml) | CI job running the docs check on push/PR | CI changes |
| [.github/ISSUE_TEMPLATE/bug.md](.github/ISSUE_TEMPLATE/bug.md) | Bug report template | Optional issue tracking |
| [.github/ISSUE_TEMPLATE/feature.md](.github/ISSUE_TEMPLATE/feature.md) | Feature request template | Optional issue tracking |
| [.github/ISSUE_TEMPLATE/task.md](.github/ISSUE_TEMPLATE/task.md) | Maintenance task template | Optional issue tracking |
| [.github/ISSUE_TEMPLATE/docs.md](.github/ISSUE_TEMPLATE/docs.md) | Documentation issue template | Optional issue tracking |
| [.github/ISSUE_TEMPLATE/config.yml](.github/ISSUE_TEMPLATE/config.yml) | Private security reporting link | This repository only |
| [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) | PR description + checklist | Opening a PR |
## core/ — process & engineering

| Path | Purpose | Read when |
| --- | --- | --- |
| [core/workflow.md](core/workflow.md) | Session loop, CI gates, multi-agent, closeout order | Every session |
| [core/context-budget.md](core/context-budget.md) | Progressive disclosure, file budgets, rule lifecycle | Every session |
| [core/git.md](core/git.md) | Branches, commits, PRs, worktrees, hooks | Git operations |
| [core/clean-code.md](core/clean-code.md) | Naming, sizes, errors, dependencies, YAGNI | Writing any code |
| [core/quality.md](core/quality.md) | Definition of Done, review criteria, coverage, debt register | Review, before done |
| [core/architecture.md](core/architecture.md) | Layers, IoC, CQRS matrix, module boundaries, SSOT | New modules/features |
| [core/architecture-quality-programme.md](core/architecture-quality-programme.md) | Phased architecture remediation and acceptance evidence | Repo-wide quality programme |
| [core/regression.md](core/regression.md) | Blast radius, fix≠feature, regression matrix | Bugfixes, refactors |
| [core/docs-system.md](core/docs-system.md) | Living docs, maintenance matrix, decision log | Every session end |
## frontend/

| Path | Purpose | Read when |
| --- | --- | --- |
| [frontend/ui.md](frontend/ui.md) | Chrome, layouts, lists, forms, empty states | Any UI work |
| [frontend/ux.md](frontend/ux.md) | States, feedback, errors, confirmations, focus | Interaction design |
| [frontend/design.md](frontend/design.md) | Tokens, color, typography, spacing, themes, motion policy | Design system work |
| [frontend/components.md](frontend/components.md) | Component contracts, registries, wrapper rules | New/changed components |
| [frontend/accessibility.md](frontend/accessibility.md) | WCAG 2.2 AA design baseline, keyboard, dialogs, forms | Any public UI |
| [frontend/scroll-motion.md](frontend/scroll-motion.md) | Scroll ownership, Lenis, overlays, video scrubbing | Scroll/overlay changes |
| [frontend/performance.md](frontend/performance.md) | Budgets, images, code splitting, canvas/3D | Performance work |
## backend/

| Path | Purpose | Read when |
| --- | --- | --- |
| [backend/api.md](backend/api.md) | REST rules, problem+json, pagination, versioning, OpenAPI | Any endpoint |
| [backend/data-and-schema.md](backend/data-and-schema.md) | SSOT, 3NF, idempotent DDL, indexes, RLS, naming | Schema/query changes |
| [backend/auth.md](backend/auth.md) | AuthN/AuthZ, sessions, RBAC, tenant scoping, service role | Auth/mutations |
| [backend/caching.md](backend/caching.md) | Cache layers, tags, invalidation, scoping | Caching/ISR work |
| [backend/integrations.md](backend/integrations.md) | Storage, email, payments, webhooks, sync jobs | Third-party services |
## security/

| Path | Purpose | Read when |
| --- | --- | --- |
| [security/security.md](security/security.md) | Secrets, least privilege, hardening, residual risk | Auth, mutations, inputs, integrations |
| [security/web-api.md](security/web-api.md) | XSS, CSRF, SSRF, headers, uploads, rate limits | Web/API security |
| [security/owasp-llm.md](security/owasp-llm.md) | Model-application security guidance | AI/LLM features |
## legal/

| Path | Purpose | Read when |
| --- | --- | --- |
| [legal/compliance-de.md](legal/compliance-de.md) | DDG, TDDDG, DSGVO, BFSG, MStV, launch gate | Public DE/EU surfaces |
| [legal/legal-maintenance.md](legal/legal-maintenance.md) | Trigger table, decision log, processors, retention | Any processing change |
| [legal/licensing.md](legal/licensing.md) | License types, dependencies, attribution | Adding dependencies/assets |
## testing/

| Path | Purpose | Read when |
| --- | --- | --- |
| [testing/strategy.md](testing/strategy.md) | Pyramid, what to test when, source vs behavior | Planning tests |
| [testing/unit.md](testing/unit.md) | Runner conventions, mocks, coverage | Unit tests |
| [testing/e2e.md](testing/e2e.md) | Playwright, isolation, fixtures, auth helpers | E2E tests |
| [testing/contracts-ci.md](testing/contracts-ci.md) | check/verify scripts, CI layout, gates | CI changes |
| [testing/living-docs-gate.md](testing/living-docs-gate.md) | Changed-path docs enforcement and semantic review | Adding docs quality gates |
## checklists/

| Path | Purpose | Read when |
| --- | --- | --- |
| [checklists/session.md](checklists/session.md) | End-of-session closeout | Every session end |
| [checklists/pr.md](checklists/pr.md) | PR checklist | Before PR |
| [checklists/release.md](checklists/release.md) | SemVer ritual, changelog cut, tags | Releases |
| [checklists/launch.md](checklists/launch.md) | Go-live technical + operator steps | Production launch |
## lessons/

| Path | Purpose | Read when |
| --- | --- | --- |
| [lessons/README.md](lessons/README.md) | Format, severity, promotion path | Adding a lesson |
| [lessons/web-platform.md](lessons/web-platform.md) | Framework/RSC/hydration/build lessons | Web platform work |
| [lessons/ui-ux.md](lessons/ui-ux.md) | Scroll, overlays, mobile, realtime UI lessons | UI regressions |
| [lessons/data-auth.md](lessons/data-auth.md) | RLS, auth, schema, sync lessons | Data/auth regressions |
| [lessons/realtime-native.md](lessons/realtime-native.md) | C++, audio thread, plugin lessons | Native/audio work |
| [lessons/process.md](lessons/process.md) | Workflow, docs, CI, release lessons | Process improvements |
## roles/

| Path | Purpose | Read when |
| --- | --- | --- |
| [roles/README.md](roles/README.md) | Role index, never-write-code rules | Delegating to subagents |
| [roles/architect.md](roles/architect.md) | Plans, writes no code | Architecture tasks |
| [roles/reviewer.md](roles/reviewer.md) | Reviews, writes no code | Code review |
| [roles/tester.md](roles/tester.md) | Test design and execution | Test tasks |
| [roles/security-auditor.md](roles/security-auditor.md) | Security reports, no production code | Security audits |
| [roles/compliance-officer.md](roles/compliance-officer.md) | DE/EU launch audit, no production code | Compliance audits |
## skills/

| Path | Purpose | Read when |
| --- | --- | --- |
| [skills/README.md](skills/README.md) | Skill index | Choosing a skill |
| [skills/requirements-clarity/SKILL.md](skills/requirements-clarity/SKILL.md) | Adaptive discovery and specification | Complex requirements |
| [skills/incremental-delivery/SKILL.md](skills/incremental-delivery/SKILL.md) | Story slicing, TDD, tracking, epic closure | Multi-story work |
| [skills/evidence-review/SKILL.md](skills/evidence-review/SKILL.md) | Multi-lens evidence review | High-risk change / PR |
| [skills/complexity-review/SKILL.md](skills/complexity-review/SKILL.md) | Risk-first, lean-code review | Review / bloat |
| [skills/plan-first/SKILL.md](skills/plan-first/SKILL.md) | Plan before code | Any non-trivial task |
| [skills/tdd-extraction/SKILL.md](skills/tdd-extraction/SKILL.md) | Derive failing test first | Bugs, features |
| [skills/rest-guidelines/SKILL.md](skills/rest-guidelines/SKILL.md) | REST subset, OpenAPI duty | API design |
| [skills/frontend-ui/SKILL.md](skills/frontend-ui/SKILL.md) | UI implementation workflow | UI features |
| [skills/ux-research/SKILL.md](skills/ux-research/SKILL.md) | Research and product discovery | Uncertain user needs, research, usability testing and prototyping |
| [skills/information-architecture/SKILL.md](skills/information-architecture/SKILL.md) | Information architecture and navigation | Content models, hierarchy, navigation, search, routes and journeys |
| [skills/interaction-design/SKILL.md](skills/interaction-design/SKILL.md) | Interaction design and workflow patterns | Task flows, onboarding, commands, selection, gestures, feedback and recovery |
| [skills/visual-design/SKILL.md](skills/visual-design/SKILL.md) | Visual design and art direction | Hierarchy, typography, composition, brand, imagery, density and aesthetics |
| [skills/design-systems/SKILL.md](skills/design-systems/SKILL.md) | Design systems and component governance | Tokens, primitives, variants, libraries, themes and design-to-code mapping |
| [skills/frontend-architecture/SKILL.md](skills/frontend-architecture/SKILL.md) | Frontend application architecture | Rendering, routing, components, state ownership, dependency direction and refactors |
| [skills/responsive-ui/SKILL.md](skills/responsive-ui/SKILL.md) | Responsive and adaptive interfaces | Mobile, desktop, tablet, resizing, touch, grids and editor layouts |
| [skills/accessible-ui/SKILL.md](skills/accessible-ui/SKILL.md) | Inclusive and accessible interaction | WCAG, semantics, keyboard, assistive technology and accessibility audit |
| [skills/forms-and-content/SKILL.md](skills/forms-and-content/SKILL.md) | Forms, content design and localization | Forms, validation, onboarding, microcopy, errors, internationalization and entry |
| [skills/async-ui/SKILL.md](skills/async-ui/SKILL.md) | Async UI and resilient state transitions | Loading, stale data, retries, realtime, streaming, offline, concurrency and optimistic mutations |
| [skills/data-heavy-ui/SKILL.md](skills/data-heavy-ui/SKILL.md) | Data-heavy tools and visualization | Dashboards, tables, charts, search, filters, bulk actions and dense workspaces |
| [skills/ui-performance-motion/SKILL.md](skills/ui-performance-motion/SKILL.md) | Perceived performance and meaningful motion | Latency, rendering cost, scroll, animation, layout stability and budgets |
| [skills/ai-interaction-ux/SKILL.md](skills/ai-interaction-ux/SKILL.md) | AI and conversational interface design | Chat, assistants, streaming, suggestions, uncertainty, correction and user control |
| [skills/trustworthy-ux/SKILL.md](skills/trustworthy-ux/SKILL.md) | Trust, privacy and ethical interaction | Consent, account settings, permissions, notifications, transparency and sensitive data |
| [skills/ux-quality-review/SKILL.md](skills/ux-quality-review/SKILL.md) | Evidence-based UI and UX review | Read-only audits, critique, screenshot review, visual regression and release acceptance |
| [skills/security-owasp/SKILL.md](skills/security-owasp/SKILL.md) | Security review checklist | Security work |
| [skills/launch-compliance-audit/SKILL.md](skills/launch-compliance-audit/SKILL.md) | DE/EU go-live audit | Public launch |
| [skills/c-realtime/SKILL.md](skills/c-realtime/SKILL.md) | C/C++/embedded/realtime | Native code |
| [skills/video-scrubbing/SKILL.md](skills/video-scrubbing/SKILL.md) | Scroll-bound video | Explicit video briefing |

| [skills/verification-before-done/SKILL.md](skills/verification-before-done/SKILL.md) | Evidence gate before done | End of implementation |
| [skills/pr-comment-concise/SKILL.md](skills/pr-comment-concise/SKILL.md) | Short PR comments | Code review |
| [skills/minimal-change/SKILL.md](skills/minimal-change/SKILL.md) | Smallest complete change | Any implementation |
| [skills/context-thread/SKILL.md](skills/context-thread/SKILL.md) | Session goal anchor | Long sessions |
| [skills/systematic-debugging/SKILL.md](skills/systematic-debugging/SKILL.md) | Root-cause diagnosis | Bug reports |

| [skills/load-contract/SKILL.md](skills/load-contract/SKILL.md) | Explicit load decision | Start of non-trivial task |

| [skills/frontend-taste/SKILL.md](skills/frontend-taste/SKILL.md) | Anti-slop UI judgment | User-facing frontend |
| [skills/humanize-output/SKILL.md](skills/humanize-output/SKILL.md) | Humanize agent text | PR text, comments, docs, UI copy |

## templates/

| Path | Purpose | Read when |
| --- | --- | --- |
| [templates/PRD.md](templates/PRD.md) | Product requirements document | New product/feature area |
| [templates/ADR.md](templates/ADR.md) | Architecture decision record | Architecture decisions |
| [templates/feature-spec.md](templates/feature-spec.md) | Feature spec with acceptance criteria | Feature kickoff |
| [templates/quality-journal-entry.md](templates/quality-journal-entry.md) | Dated source-change evidence template | Every implementation PR |
| [templates/deviation-record.md](templates/deviation-record.md) | Rule deviation with human approval | Safety-critical deviations |
## stack/ — adapters for concrete technologies

| Path | Purpose | Read when |
| --- | --- | --- |
| [stack/nextjs.md](stack/nextjs.md) | App Router, RSC, ISR, proxy, i18n pitfalls | Next.js repos |
| [stack/supabase.md](stack/supabase.md) | Clients, RLS, schema SSOT, rate limits | Supabase repos |
| [stack/cloudflare-r2.md](stack/cloudflare-r2.md) | Keys, signed URLs, CORS, checksums | R2/S3 storage |
| [stack/typescript.md](stack/typescript.md) | strict, unknown, Zod, imports | TS/JS repos |
| [stack/cpp-juce.md](stack/cpp-juce.md) | CMake/JUCE, RT contracts, native CI | C++/plugin repos |
