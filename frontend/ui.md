# Frontend — UI

Load for: any UI work (pages, chrome, lists, forms).

## Chrome & layout

- ONE chrome pattern per surface area (public / dashboard). Shared primitives, no second header or sidebar.
- Share navigation data and behavior across responsive layouts. Split presentation only when the interactions differ enough to justify it.
- For an app-shell layout, define which regions persist and which scroll. Use viewport sizing only where the interaction needs it.
- Test mobile navigation positioning and effects on supported browsers, including safe areas and keyboard visibility.
- Content pages NEVER set their own `max-w-*` inside a shell that already constrains width.

## Lists

- Reuse list patterns where their interaction and accessibility contracts align.
- Whole-row click target + chevron affordance; explicit action buttons only for destructive/rare actions.
- Filter + pagination/windowing are part of the list, not the page shell.
- Empty state: centered, explains why it is empty and the next action.
- Choose row separation and grouping to suit information density. Avoid hiding information needed for a decision.
- Wide tables: horizontal scroll wrapper with `overflow-y-clip` to avoid vertical dead zones ([scroll-motion.md](scroll-motion.md)).

## Forms & detail views

- Use a consistent editing pattern appropriate to the record and workflow. Inline editing can suit simple changes.
- Save: validate → on success close → on failure stay open with a human error message.
- Cancel always closes without side effects.
- Destructive actions require confirmation naming the consequence and related data.
- Use consistent action labels and the project's localization conventions where applicable.
- Icon-only buttons MUST have `aria-label` ([accessibility.md](accessibility.md)).

## Content & data display

- Read-only data as definition lists or key/value rows, not disabled inputs.
- NEVER show internal identifiers, implementation-only labels or raw error codes to end users.
- Charts: label axes, accessible name (`role="img"` + label), sr-only data table where feasible.

## Authorization in UI

- NEVER rely on hidden UI for authorization. The server re-checks every mutation ([../backend/auth.md](../backend/auth.md)).
- Hide/disable actions the user cannot perform, but treat that as UX only.

## Responsive

- Mobile-first base classes; desktop overrides via breakpoints. NEVER rewrite base classes for desktop fixes.
- Touch targets ≥ 44×44 px on public UI ([accessibility.md](accessibility.md)).
- Long labels wrap or truncate deliberately; test the longest real translation.
- Builders/multi-column editors: provide usable responsive alternatives to multi-column panels ([scroll-motion.md](scroll-motion.md)).

## Internationalization

- Use the project's message system if localized. Do not introduce localization infrastructure solely for a small change.
- Every locale must render every key — CI parity check where available.
- Dates/numbers via locale formatters, never manual string building.
- Language switch reloads/navigates fully when the framework requires it; no partial refresh hacks.
