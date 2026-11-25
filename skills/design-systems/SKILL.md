---
name: design-systems
description: Use for tokens, primitives, variants, libraries, themes and design-to-code mapping.
---

# Design systems and component governance

## Workflow and acceptance

- Inventory existing primitives, consumers, token sources and actual duplication before adding abstractions.
- Use primitive values, semantic roles and component aliases only where distinct consumers need them. Map design artifacts to code; avoid parallel sources of truth.
- Specify component purpose, anatomy, inputs, events, variants, states, slots, responsive behavior, accessible semantics and examples.
- Separate primitives, patterns and feature compositions. Keep domain policy outside generic primitives; extract after meaningful recurrence, not speculative reuse.
- Preserve required compatibility; document migration, deprecation, affected consumers and meaningful variant combinations. Verify theme coverage.
- Maintain a living catalog using existing tools. Test keyboard contracts and deterministic screenshots where available. New dependencies require justification.
- Output ownership map, reuse decision, component contract and migration evidence. Canonical: [design](../../frontend/design.md), [components](../../frontend/components.md), [accessibility](../../frontend/accessibility.md).

## References

- [Reference guidance](https://design-system.service.gov.uk/)
