---
name: requirements-clarity
description: Turn ambiguous product requests into verifiable outcomes and a bounded implementation brief. Use when scope, acceptance, stakeholders or technical constraints are unclear.
---
# Requirements clarity

Start with the user's desired change in the real product. Treat proposed implementation as a hypothesis, not the requirement.

## Establish the contract
- Identify who benefits, the current observable problem, the desired outcome and the evidence that would distinguish success from failure.
- Separate verified facts, assumptions and decisions. Inspect relevant product behavior and project constraints before writing requirements.
- Ask only questions whose answers materially alter a decision. Prefer reversible defaults for minor uncertainty.
- Consider whether existing behavior or a configuration change already meets the need.

## Bound the work
- Write acceptance examples as initial state, action and observable result. Include denied operations and failure recovery when relevant.
- Define excluded behavior, ownership of data, compatibility and measurable quality limits when they affect the outcome.
- Examine existing module boundaries and irreversible changes. Record alternatives only for consequential trade-offs.
- Choose one short issue for a narrow task; use the [product brief](../../templates/PRD.md) for multiple outcomes and an [architecture decision note](../../templates/ADR.md) for a consequential design choice. A [feature spec](../../templates/feature-spec.md) is optional for a bounded implementation.

## Return
Provide outcome, scope, acceptance examples, evidence, unresolved decisions and the next implementable slice. Do not fabricate research, approval, technical facts or measurements. For multi-slice work, hand off the brief to [incremental delivery](../incremental-delivery/SKILL.md). For a single non-trivial change, use [plan first](../plan-first/SKILL.md).
