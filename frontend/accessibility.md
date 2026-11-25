# Frontend — Accessibility

Load for: all public UI. Design baseline for web: WCAG 2.2 AA; verify the legally or contractually applicable version separately.
Legal relevance (BFSG/EU) in [../legal/compliance-de.md](../legal/compliance-de.md).

## Semantics

- Semantic HTML first: `button` for actions, `a` for navigation, `nav/main/header/footer` landmarks, real lists for lists.
- One `h1` per page; heading levels in order.
- NEVER fake interactivity with `div` + click handler without role, tabindex, keyboard handling.
- Tables for tabular data; definition lists for key/value pairs.

## Keyboard & focus

- Every interactive element reachable and operable by keyboard.
- Visible focus indicator (≥ 2 px, high contrast). NEVER remove outlines without a visible replacement.
- Focus order follows intended reading and interaction order. Focus must not be entirely obscured by author-created content. Skip link to main content on public pages.
- Modals/dialogs: focus trap, Escape closes, focus returns to the trigger.
- Custom widgets (menus, comboboxes, trees) follow ARIA authoring patterns for key handling.

## Names & labels

- All form fields have programmatic labels (`label[for]` or `aria-label`).
- Icon-only buttons have `aria-label`; decorative icons `aria-hidden="true"`.
- Images: meaningful `alt`; purely decorative `alt=""`. NEVER `alt` on CSS backgrounds — use real images.
- Links describe the destination; NEVER "click here".
- Buttons describe the action; confirmations name the object.

## Forms & errors

- Errors: `aria-invalid` + `aria-describedby` pointing at the message; message text is specific.
- Required state programmatic (`required` / `aria-required`).
- Error summary at top for long forms; focus moves to the first error.
- NEVER rely on placeholder as label.

## Color & contrast

- Normal text ≥ 4.5:1, large text ≥ 3:1, UI components/graphics ≥ 3:1.
- Verify with tooling, never estimate. Check both themes.
- Meaning never conveyed by color alone.

## Motion & media

- `prefers-reduced-motion: reduce` → no mandatory animation ([scroll-motion.md](scroll-motion.md), [design.md](design.md)).
- Auto-playing media: no autoplay with sound; provide pause/stop for moving content > 5 s.
- Videos: captions where they carry information.
- Video that scrubs with scroll MUST degrade to a static poster under reduced motion.

## Touch & zoom

- WCAG 2.2 AA target size is at least 24×24 CSS px or sufficient spacing/another applicable exception under criterion 2.5.8. Aim for 44×44 where practical; this is a usability goal, not the AA minimum.
- Provide a single-pointer alternative to dragging unless an exception applies. Avoid redundant entry and inaccessible authentication barriers; permit password managers and paste.
- Verify text resize to 200% and reflow at 320 CSS px width (vertical content) or 256 CSS px height (horizontal content) as applicable, including criterion exceptions.
- NEVER `user-scalable=no`.

## Dialogs & overlays

- Overlay content is portaled to `body` where containing blocks break fixed positioning ([scroll-motion.md](scroll-motion.md)).
- Background content `aria-hidden`/inert while a modal is open.
- When a custom scroll provider is present, verify overlay scrolling and keyboard access ([scroll-motion.md](scroll-motion.md)).

## Testing evidence

- Keyboard-only, automated scan, text resize/reflow and representative screen reader checks. Automated results alone cannot establish conformance. Record untested combinations.
- Record evidence in the QA checklist for public-facing changes.

References: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/).
