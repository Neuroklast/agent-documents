---
name: bmad-discovery
description: Adapt BMAD-style discovery and requirements to complex product work. Use for unclear outcomes, multiple stakeholders, new products, or cross-system features; avoid for small fixes.
---
# Discovery and specification

Use the lightest planning depth that removes real uncertainty. Do not generate documents to satisfy a ritual.

| Work | Output |
| --- | --- |
| Clear change in one area | Issue or short [feature spec](../../templates/feature-spec.md) |
| Several features or stakeholder goals | Brief, then [PRD](../../templates/PRD.md) |
| Cross-system or irreversible design | PRD plus [ADR](../../templates/ADR.md) for the decision |

## Workflow

1. **Discover:** Identify user, observable problem, desired outcome, constraints, and explicitly excluded work. Label assumptions; verify consequential claims.
2. **Challenge:** What happens if nothing is built? Can an existing feature solve this? Separate needs from proposed solutions.
3. **Specify:** Write measurable acceptance criteria, denied/error paths, functional boundaries, and non-functional constraints (performance, safety, data ownership).
4. **Design only what is needed:** Map existing modules, dependencies, trust boundaries, and migration/rollback risk. Use an ADR only for an actual trade-off.
5. **Check consistency:** Every acceptance criterion must trace to an outcome; remove duplicate or speculative requirements.
6. **Handoff:** If one implementable change, follow [plan-first](../plan-first/SKILL.md). If several, use [bmad-delivery](../bmad-delivery/SKILL.md).

## Minimum handoff

- Goal and user-visible result.
- Scope and explicit non-goals.
- Acceptance criteria with observable checks.
- Relevant code paths and verified constraints.
- Risks, open decisions, and owner of each decision.

Do not invent market data, requirements, APIs, project facts, or approvals. Stop only for a decision that cannot be reversed safely; otherwise state the assumption and use the smallest reversible option.

Adapted from [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD), not a complete BMAD runtime.
