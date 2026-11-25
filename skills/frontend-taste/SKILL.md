---
name: frontend-taste
description: Reject generic AI-generated UI and enforce intentional, project-aligned design decisions. Use for any user-facing frontend work — requires an explicit taste judgment before implementation and forbids default AI patterns.
---

# Frontend taste

Generic AI UI is a defect. This skill forces an explicit design judgment before code is written and rejects the patterns that make interfaces look interchangeable.

## Before implementation

Write a short taste decision (3–6 lines):

```
Taste decision:
- Existing system: [tokens / primitives / patterns that will be used]
- Hierarchy: [what is primary, secondary, tertiary on this surface]
- Density: [compact / comfortable / sparse — and why]
- Rejected defaults: [specific AI patterns that will not appear]
- Reference: [existing screen or component in the project this should resemble]
```

If the project has no design system, state the minimal set of decisions (type scale, spacing rhythm, color roles) that will be applied consistently.

## Hard rejects

Do not ship any of the following unless the project already uses them deliberately:

- Purple-to-blue or multi-stop gradient backgrounds as the default surface.
- Inter, Roboto or system-ui as the only typeface when the project has a defined font.
- Uniform card grids with identical padding, shadow and border-radius on every element.
- Centered hero + three feature cards + footer as the unexamined page structure.
- Placeholder illustrations or generic icon sets that do not match the product.
- “Glassmorphism”, heavy blur or decorative gradients without a functional reason.
- Identical spacing (e.g. `p-6` everywhere) instead of a rhythm that reflects hierarchy.

## Required checks

- Does this screen use the project’s existing tokens and primitives?
- Is the visual hierarchy obvious in under two seconds?
- Would a designer familiar with the product recognize this as belonging to it?
- Are interactive elements distinguishable by more than color alone?
- Is whitespace used to group related items rather than applied uniformly?

## Output

If the taste decision cannot be written because the project has no usable reference, stop and ask for one (or for permission to establish a minimal system). Do not invent a new visual language in the same change that implements a feature.

Pair with [frontend-ui](../frontend-ui/SKILL.md) for the implementation workflow after the taste decision is accepted.
