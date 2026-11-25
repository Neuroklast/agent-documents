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
| [ux-research](ux-research/SKILL.md) | Research and product discovery |
| [information-architecture](information-architecture/SKILL.md) | Information architecture and navigation |
| [interaction-design](interaction-design/SKILL.md) | Interaction design and workflow patterns |
| [visual-design](visual-design/SKILL.md) | Visual design and art direction |
| [design-systems](design-systems/SKILL.md) | Design systems and component governance |
| [frontend-architecture](frontend-architecture/SKILL.md) | Frontend application architecture |
| [responsive-ui](responsive-ui/SKILL.md) | Responsive and adaptive interfaces |
| [accessible-ui](accessible-ui/SKILL.md) | Inclusive and accessible interaction |
| [forms-and-content](forms-and-content/SKILL.md) | Forms, content design and localization |
| [async-ui](async-ui/SKILL.md) | Async UI and resilient state transitions |
| [data-heavy-ui](data-heavy-ui/SKILL.md) | Data-heavy tools and visualization |
| [ui-performance-motion](ui-performance-motion/SKILL.md) | Perceived performance and meaningful motion |
| [ai-interaction-ux](ai-interaction-ux/SKILL.md) | AI and conversational interface design |
| [trustworthy-ux](trustworthy-ux/SKILL.md) | Trust, privacy and ethical interaction |
| [ux-quality-review](ux-quality-review/SKILL.md) | Evidence-based UI and UX review |
| [security-owasp](security-owasp/SKILL.md) | Web security review |
| [launch-compliance-audit](launch-compliance-audit/SKILL.md) | DE/EU launch audit |
| [c-realtime](c-realtime/SKILL.md) | Native realtime code |
| [video-scrubbing](video-scrubbing/SKILL.md) | Explicit scroll-video work |

## UI/UX selection

Use frontend-ui for ordinary implementation. Add only specialists matching the current decision; for a full redesign work in slices. Research resolves uncertainty, architecture defines ownership, interaction defines behavior and quality review verifies outcomes. Do not load every specialist.
| [verification-before-done](verification-before-done/SKILL.md) | Evidence required before claiming done |
| [pr-comment-concise](pr-comment-concise/SKILL.md) | Short actionable PR and review comments |
| [minimal-change](minimal-change/SKILL.md) | Smallest complete change only |
| [context-thread](context-thread/SKILL.md) | Keep original goal visible in long sessions |
| [systematic-debugging](systematic-debugging/SKILL.md) | Root-cause loop before patching |

| [load-contract](load-contract/SKILL.md) | Explicit loading decision before reading skill bodies |

| [frontend-taste](frontend-taste/SKILL.md) | Explicit anti-slop design judgment before UI implementation |
| [humanize-output](humanize-output/SKILL.md) | Remove AI writing patterns from agent-produced text |

## Combining skills

Choose one primary workflow for the task. Other skills contribute focused checks, not another full workflow. A clear small fix may use test-first alone; uncertain requirements use requirements clarity, then plan-first or incremental delivery. Implementation can invoke specialist guidance. Evidence review checks the result; complexity and security review are focused lenses when relevant. A reference back to another skill is not an instruction to restart it or reread already loaded context. Review-only requests do not trigger implementation.

Install with `node scripts/install-skills.mjs <target-dir>` from the collection root.

