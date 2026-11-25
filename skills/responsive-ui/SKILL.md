---
name: responsive-ui
description: Use for mobile, desktop, tablet, resizing, touch, grids and editor layouts.
---

# Responsive and adaptive interfaces

## Workflow and acceptance

- Start from content constraints; define viable widths, reading measure, overflow and when composition must change.
- Use intrinsic sizing, wrapping, flexible grids and container-aware rules where supported. Break where content fails rather than at arbitrary device labels. Use logical properties for writing direction.
- Preserve one navigation and state model across layouts; keep primary actions reachable and retain selection on resize.
- On narrow screens replace simultaneous panels with list/detail, tabs or contextual drawers when appropriate; do not merely shrink desktop controls.
- Verify safe areas, software keyboards, dynamic viewport, sticky elements, focus scrolling, pointer/touch/keyboard and landscape. Native windows require minimum-size and scaling tests.
- Test applicable reflow, intermediate widths, wide screens, text enlargement and longest actual translation; check overflow, overlap and restoration.
- Output layout behavior table, screenshots and functional evidence. See [UI](../../frontend/ui.md), [scroll](../../frontend/scroll-motion.md), [accessibility](../../frontend/accessibility.md).

## References

- [Reference guidance](https://developer.android.com/develop/ui/views/layout/responsive-adaptive-design-with-views)
