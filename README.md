# Agent Documents

Portable, task-routed guidelines and skills for AI coding agents. The goal is **better engineering with less prompt context**.

Repository: https://github.com/Neuroklast/agent-documents

## Use it

For agents supporting a single skill directory, keep the collection together and use [SKILL.md](SKILL.md) as its entry point. Preserve relative paths. The existing router and individual skills remain available for project-specific installations.

```bash
git clone https://github.com/Neuroklast/agent-documents.git
node agent-documents/scripts/check-docs.mjs
```

Reading is unrestricted. **Copying, redistributing or submoduling this collection requires maintainer permission** (see Attribution and scope below).

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
| Complex discovery and requirements | [Requirements clarity](skills/requirements-clarity/SKILL.md) |
| Epics, stories, implementation and acceptance | [Incremental delivery](skills/incremental-delivery/SKILL.md) |
| Review by independent evidence lenses | [Evidence review](skills/evidence-review/SKILL.md) |
| Correctness, risk, load and code bloat | [Complexity review](skills/complexity-review/SKILL.md) |
| Project procedures and technology rules | [MANIFEST.md](MANIFEST.md) and [Skills index](skills/README.md) |

**Choose the smallest workflow:** trivial fix → targeted check; feature → specification + TDD; multi-story change → discovery, story slicing, implementation, review, retrospective. The four workflows are native to this collection and have no external runtime dependency. Complexity review is invoked only when needed.

## Context and maintenance

- `AGENTS.md` routes tasks. Topic files are the source of truth. Skills are loaded on demand.
- A rule belongs in one file. Link rather than duplicate it.
- Use existing code, platform features and dependencies before new abstractions. Preserve correctness, validation, accessibility, security and tests.
- Docs describe verified reality, not aspirational architecture. Update only impacted files.
- Validation: `node scripts/check-docs.mjs` (budgets, frontmatter, links, manifest) and `node --test scripts/*.test.mjs` (installer behavior).
- The router is capped at 120 lines, topics at 150, skills at 100; shorter is better when still unambiguous.
- `MANIFEST.md` is a **maintainer index**, not automatic session context.

## Attribution and scope

The collection implements general engineering practices: requirements clarification, incremental delivery, evidence-based review and complexity control. BMad Method and Ponytail were historical sources of inspiration; neither is bundled or presented as our product. See [provenance](PROVENANCE.md) for scope and limitations.

Reading is unrestricted. No general redistribution license is granted for material in which the maintainer holds rights. Third-party rights and mandatory legal permissions remain unaffected. Obtain permission before copying or distributing protected material beyond applicable permissions. See [legal review status](LEGAL-REVIEW.md); no legal certification or guaranteed engineering result is claimed.

## What Markdown cannot enforce

Instruction files cannot replace actual CI, access controls, threat modeling, secret scanning, tests or required human approval. Keep checks executable and disclose what has not been verified.
