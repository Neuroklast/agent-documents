# Agent Documents

Coding agents often load too much guidance, make unnecessary changes and lose track of what they have actually tested. Agent Documents tackles those problems with a short router and focused instructions for individual engineering tasks.

The collection grew out of the maintainer's own project workflows. Its priorities are simple: understand the existing code, solve the underlying problem, keep the implementation small and verify the result.

## Getting started

For project-specific adoption, give the coding agent [SETUP.md](SETUP.md) as its task and follow the resulting review. The setup inspects the project, selects relevant skills and establishes a maintainable documentation policy.

For agents that support skill directories, [SKILL.md](SKILL.md) is the entry point. Keep the accompanying files together so the links work. No hosted service or external framework is required to read the guidance.

To inspect the collection locally:

```bash
git clone https://github.com/Neuroklast/agent-documents.git
node agent-documents/scripts/check-docs.mjs
```

Use is subject to applicable permissions and rights. Reading the public repository does not grant a general license to redistribute its protected original content.

With permission, place the collection in `docs/agent-docs/` in your project. Point the project's root `AGENTS.md` at the collection's router. Add only facts about your project, such as the package manager, test commands and deployment target.

The optional installer reads the project-local copy at `docs/agent-docs/` and copies selected skill entry files into `.agents/skills/` and `.claude/skills/`:

```bash
node scripts/install-skills.mjs /path/to/project
# Add --agents or --claude to choose one destination.
# Add --skill=plan-first --skill=evidence-review to select skills.
```

Check your agent's discovery rules. Review the examples in [examples/hooks/README.md](examples/hooks/README.md) before enabling hooks.

## Where to start

| Task | Guidance |
| --- | --- |
| Start a coding session | [Router](AGENTS.md) |
| Clarify an unclear request | [Requirements clarity](skills/requirements-clarity/SKILL.md) |
| Deliver several related changes | [Incremental delivery](skills/incremental-delivery/SKILL.md) |
| Review a proposed change | [Evidence review](skills/evidence-review/SKILL.md) |
| Remove unnecessary complexity | [Complexity review](skills/complexity-review/SKILL.md) |
| Find a specific topic | [Maintainer index](MANIFEST.md), [Skill index](skills/README.md) |

A small bug does not need a product specification. A risky architecture change needs more investigation. The router helps the agent choose the appropriate amount of guidance.

## Keeping the collection useful

- Keep one source for each rule. Link to it instead of repeating it.
- Load only the guidance needed for the current task.
- Prefer existing code and platform features to new abstractions.
- Keep security, accessibility, error handling and meaningful tests intact.
- Document actual behavior, not an idealized architecture.

Run `node scripts/check-docs.mjs` and `node --test scripts/*.test.mjs` after changing the collection. The line budgets are ceilings, not writing targets.

## Sources and rights

The maintainer identifies the collection's core concepts and project practices as their own. The text and scripts have also been developed with AI assistance. External ideas and references are documented in [PROVENANCE.md](PROVENANCE.md), including BMad Method and Ponytail. No affiliation or endorsement is claimed.

Rights are reserved only to the extent they exist and are held by the relevant rights holder. Third-party rights and legal permissions remain unaffected. See [LEGAL-REVIEW.md](LEGAL-REVIEW.md) for outstanding questions.

These instructions help guide an agent. They cannot guarantee correct code, legal compliance, security or successful test results. Use real checks and appropriate human review.
