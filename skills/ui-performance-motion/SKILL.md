---
name: ui-performance-motion
description: Use for latency, rendering cost, scroll, animation, layout stability and budgets.
---

# Perceived performance and meaningful motion

## Workflow and acceptance

- Identify affected journey, device, network, browser, workload and baseline. Separate server latency, transfer, parsing, hydration, layout, paint and input delay.
- Use traces and field measurements where available; compare equivalent conditions. Follow [performance](../../frontend/performance.md) for web vitals.
- Prioritize visible content and readiness; prevent layout shift and defer nonessential work. Acknowledge input immediately without falsely claiming completion.
- Motion should communicate a transition or feedback; keep it interruptible and purposeful. Provide reduced-motion alternatives; never rely on motion alone.
- Profile long tasks, render fan-out, media, memory and repeated mounting; remove redundant work before adding caches, memoization or scheduling complexity.
- Verify scroll/focus ownership, overlay behavior and representative low-end devices where available.
- Output measurement, root cause, targeted change, before/after, budget and untested conditions. See [scroll-motion](../../frontend/scroll-motion.md).

## References

- [Reference guidance](https://web.dev/articles/vitals)
