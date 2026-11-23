# Agent Documents

Portable, task-routed guidelines and skills for AI coding agents. The goal is **better engineering with less prompt context**.

Repository: https://github.com/Neuroklast/agent-documents

## Use it

```bash
git clone https://github.com/Neuroklast/agent-documents.git
node agent-documents/scripts/check-docs.mjs
```

Reading is unrestricted. **Copying, redistributing or submoduling this collection requires maintainer permission** (see License below).

After permission, copy the collection into `docs/agent-docs/`, then put a short root `AGENTS.md` in your project that points to `docs/agent-docs/AGENTS.md`. Add only verified project facts: stack, package manager, test commands and deployment target. Remove irrelevant adapters and update the router. Do not copy every rule into the root.

Install portable skills into a target project:

```bash
node scripts/install-skills.mjs /path/to/project
# Optional: --agents or --claude to select one destination
```

Default installs to `.agents/skills/` and `.claude/skills/`. Check your coding tool's discovery rules. Optional enforcement examples live in `examples/hooks/`; do not enable hooks blindly.

## Where to start

| Need | File |
| --- | --- |
| Always-on minimal routing | [AGENTS.md](AGENTS.md) |
| Complex discovery and requirements | [BMAD discovery](skills/bmad-discovery/SKILL.md) |
| Epics, stories, implementation and acceptance | [BMAD delivery](skills/bmad-delivery/SKILL.md) |
| Review by independent evidence lenses | [BMAD review](skills/bmad-review/SKILL.md) |
| Correctness, risk, load and code bloat | [Ponytail review](skills/ponytail-review/SKILL.md) |
| Project procedures and technology rules | [MANIFEST.md](MANIFEST.md) and [Skills index](skills/README.md) |

**Choose the smallest workflow:** trivial fix → targeted check; feature → specification + TDD; multi-story change → discovery, story slicing, implementation, review, retrospective. The BMAD-based skills run independently of BMAD's installer. Ponytail Review is an on-demand review, not a permanent verbose prompt.

## Context and maintenance

- `AGENTS.md` routes tasks. Topic files are the source of truth. Skills are loaded on demand.
- A rule belongs in one file. Link rather than duplicate it.
- Use existing code, platform features and dependencies before new abstractions. Preserve correctness, validation, accessibility, security and tests.
- Docs describe verified reality, not aspirational architecture. Update only impacted files.
- Validation: `node scripts/check-docs.mjs` (budgets, frontmatter, links, manifest) and `node --test scripts/*.test.mjs` (installer behavior).
- The router is capped at 120 lines, topics at 150, skills at 100; shorter is better when still unambiguous.
- `MANIFEST.md` is a **maintainer index**, not automatic session context.

## Attribution and scope

- **BMad Method**: [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD), used as a reference for adaptive discovery, story delivery, multi-lens review and retrospectives.
- **Ponytail**: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail), used as a reference for risk-first, evidence-backed lean review.
- This repository contains **new, condensed adaptations**, not copied framework source, vendor tooling, hooks, agent personas or a claim of full compatibility. The upstream projects publish their own terms and licenses.
- External ideas do not change the collection's own licensing: no license is granted by this repository, all rights reserved. Seek maintainer permission before copying or redistribution.

## What Markdown cannot enforce

Instruction files cannot replace actual CI, access controls, threat modeling, secret scanning, tests or required human approval. Keep checks executable and disclose what has not been verified.
