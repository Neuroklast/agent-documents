# Frontend — Scroll & Motion

Load for: scroll behavior, overlays, carousels, video scrubbing, z-index.

## Scroll ownership decision tree

1. **Document-style page**: use native document scrolling by default. Integrate with an existing smooth-scroll provider only when the project requires it.
2. **App shell**: choose a documented scroll owner. Avoid duplicate full-height wrappers that create competing scrollports.
3. **Scrollable panel**: use the existing scroll-region component if available.
4. **Full-bleed tool**: choose a layout appropriate for the tool; make inner scrolling explicit when needed.
5. **Wide table** → horizontal scroll wrapper with `overflow-x-auto overflow-y-clip` — never plain `overflow-x-auto` alone.
6. **Carousel/Swiper** → keep vertical wheel on the page; horizontal drag/axis-aware wheel for slides (`touch-action: pan-y`). NEVER blanket-prevent on the whole widget.
7. **Modal body / real nested vertical scrollport** → a bounded native scroll region; opt out of custom scroll interception only if needed. NEVER use prevent because "the component is heavy".
8. **After any scroll change** → run the repo's scroll contract check ([../testing/contracts-ci.md](../testing/contracts-ci.md)).

## Scroll-prevent contract

- Prevent the smooth-scroll library only for elements with **real vertical overflow**.
- NEVER match Tailwind class substrings; measure computed overflow (`scrollHeight > clientHeight`) and axis.
- Horizontal-only overflow MUST NOT block page scroll.
- Content inside scroll panels is keyboard reachable; Escape/keys unaffected.

## Z-index / overlay contract

- ONE z-index token system; feature code uses tokens, NEVER raw numbers.
- Layers (typical): base < content < sticky < overlay < system < top.
- Use the existing layer scale; avoid copying numeric values from unrelated projects — after ANY z-index change, audit all portaled overlays (date pickers, selects, tooltips).
- Negative z-index requires `isolation: isolate` on the section.
- Fixed-position overlays portal to `body` — `transform`/`filter`/`backdrop-filter` ancestors create containing blocks that break them.
- Use one clear owner for overlay state. Allow nested overlays only where the interaction calls for them and verify focus restoration and dismissal order.

## Smooth scroll (Lenis et al.)

- If custom scrolling is already in use, avoid competing controllers on the same scroll region.
- For a provider offering alternative interpolation modes, choose a compatible configuration and test actual behavior.
- Keep native scrollbar, anchor links, and reduced-motion behavior intact.
- `syncTouch: false` where touch ghosting is observed.
- Clear `will-change` after animations; no `getComputedStyle` in scroll handlers.
- Stop/start scroll when overlays open/close; restore position on close.

## Motion VFX budget

- Gate expensive effects behind a scrolling state (e.g. `html[data-scrolling="1"]`) instead of blocking scroll.
- Pause canvas/animations when hidden (`visibilitychange`, IntersectionObserver).
- One animation runtime per element; no GSAP ScrollTrigger beside a smooth-scroll library unless synchronized deliberately.

## Video scrubbing

Scroll-bound video is implemented per [../skills/video-scrubbing/SKILL.md](../skills/video-scrubbing/SKILL.md) (frame-sequence/WebCodecs canvas, reduced-motion poster, mobile memory budget). Do not drive `HTMLVideoElement.currentTime` from a scroll handler by default.

## Multi-column builders

- Ensure hidden responsive panels do not intercept input, allocate unnecessary resources or lose important state. Choose conditional mounting when appropriate.
- Toolbars compact with overflow menu on mobile, not wrapped icon walls.
- Run the repo's mobile-layout contract check after changes.
