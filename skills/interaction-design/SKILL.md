---
name: interaction-design
description: Use for task flows, onboarding, commands, selection, gestures, feedback and recovery.
---

# Interaction design and workflow patterns

## Workflow and acceptance

- Model intent → action → response → completion or recovery. Define preconditions, primary action, feedback, cancellation, reversibility and failure.
- Put actions near relevant content; prioritize recognizable affordances and progressive disclosure. Offer optional expert shortcuts with discoverable equivalents.
- Use dialogs for bounded decisions, pages for sustained work and drawers for complementary context as appropriate. Preserve underlying work, scroll and focus; see [scroll ownership](../../frontend/scroll-motion.md).
- Prefer undo for safely reversible changes; explicit confirmation for consequential irreversible ones. Never imply success before authoritative completion.
- Provide non-drag alternatives and keyboard/touch equivalents. Essential actions cannot depend on hover.
- Cover first use, repeated use, interruption and recovery. Avoid forced tutorials, unnecessary questions and dead ends.
- Output: flow/transition table, controls, copy, keyboard behavior and completion criteria. See [UX](../../frontend/ux.md).

## References

- [Reference guidance](https://developer.apple.com/design/human-interface-guidelines/)
