# Skills

Load on demand from [AGENTS.md](../AGENTS.md). `SKILL.md` frontmatter defines each trigger.

| Skill | Use |
| --- | --- |
| [requirements-clarity](requirements-clarity/SKILL.md) | Complex outcomes, brief, PRD and architecture decisions |
| [incremental-delivery](incremental-delivery/SKILL.md) | Stories, implementation, tracking and epic closure |
| [evidence-review](evidence-review/SKILL.md) | Evidence-backed acceptance and risk lenses |
| [complexity-review](complexity-review/SKILL.md) | Unnecessary complexity, duplicated responsibilities and simplification |
| [plan-first](plan-first/SKILL.md) | Non-trivial focused implementation |
| [tdd-extraction](tdd-extraction/SKILL.md) | Failing behavior test before a fix |
| [rest-guidelines](rest-guidelines/SKILL.md) | REST wire contract |
| [frontend-ui](frontend-ui/SKILL.md) | UI implementation |
| [security-owasp](security-owasp/SKILL.md) | Web security review |
| [launch-compliance-audit](launch-compliance-audit/SKILL.md) | DE/EU launch audit |
| [c-realtime](c-realtime/SKILL.md) | Native realtime code |
| [video-scrubbing](video-scrubbing/SKILL.md) | Explicit scroll-video work |

## Combining skills

Choose one primary workflow for the task. Other skills contribute focused checks, not another full workflow. A clear small fix may use test-first alone; uncertain requirements use requirements clarity, then plan-first or incremental delivery. Implementation can invoke specialist guidance. Evidence review checks the result; complexity and security review are focused lenses when relevant. A reference back to another skill is not an instruction to restart it or reread already loaded context. Review-only requests do not trigger implementation.

Install with `node scripts/install-skills.mjs <target-dir>` from the collection root.
