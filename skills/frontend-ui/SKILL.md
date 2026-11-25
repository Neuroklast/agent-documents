---
name: frontend-ui
description: Primary implementation workflow for user-facing interfaces, components, pages, forms, dialogs and UI states. Use for building or changing UI; select specialists only as needed.
---

# Frontend UI

1. Identify the task, outcome, supported platforms and existing patterns. Inspect actual screens/code.
2. Read [UI](../../frontend/ui.md) and [UX](../../frontend/ux.md); consult [design](../../frontend/design.md), [components](../../frontend/components.md), [accessibility](../../frontend/accessibility.md) and [scroll](../../frontend/scroll-motion.md) as relevant. Select specialists via [router](../../AGENTS.md).
3. Define behavior and state ownership; reuse primitives and tokens. Write behavior tests first where feasible ([TDD](../tdd-extraction/SKILL.md)).
4. Implement the smallest complete flow including applicable pending, empty, partial, error, success and recovery states. Keep authorization on the server.
5. Verify real content, responsive layout, keyboard/focus, names, contrast, reduced motion and localization where relevant. Run project checks.
6. For substantial changes use [UX quality review](../ux-quality-review/SKILL.md) as a verification lens. Record evidence and documentation impact.
## Workflow
0. For any user-facing surface, complete a [taste decision](../frontend-taste/SKILL.md) before implementation.


Do not fork existing primitives without justification, introduce an unapproved library, fabricate evidence or substitute aesthetics for correct behavior. Use platform confirmation patterns and the existing design system; on web use project dialogs/notifications rather than ad hoc alert/confirm.
