# Skill — Video Scrubbing

Use ONLY when: the task explicitly asks for scroll-bound video.

## Default answer

If scroll-video is not explicitly requested: do not implement it. Use static imagery.

## Implementation (when requested)

1. Prefer a **pre-rendered frame sequence on canvas** over live video seeking.
2. Alternative: WebCodecs decode → canvas, progress driven by a scroll timeline.
3. NEVER drive `HTMLVideoElement.currentTime` in a scroll handler on the main thread as the default — it stalls mobile devices.
4. Compress aggressively; serve modern codecs; lazy-load the sequence.

## Mandatory safeguards

- `prefers-reduced-motion: reduce` → static poster/first frame, no forced scrubbing.
- Keyboard and focus behavior unaffected.
- No scroll hijacking; anchors and screen readers keep working.
- Pause decoding when the element is offscreen or the tab is hidden.
- Fallback poster for slow networks and decode failures.
- Budget: cap decoded frame memory; never preload the whole sequence on mobile.

## Checklist

- [ ] Explicitly requested by the task.
- [ ] Reduced-motion fallback.
- [ ] Poster + loading state.
- [ ] Offscreen/hidden pause.
- [ ] Mobile memory budget respected.
- [ ] No main-thread seeking per scroll event.
- [ ] Accessibility pass unchanged ([../../frontend/accessibility.md](../../frontend/accessibility.md)).
