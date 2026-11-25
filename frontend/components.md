# Frontend — Components

Load for: creating or changing components.

## Contracts

- Every reusable component has typed props. NEVER `any` in public props.
- Props interfaces are named (`ButtonProps`, `SectionProps<T>`); export them for consumers.
- Defaults are explicit and documented; no hidden required behavior.
- Keep reusable presentational primitives independent of data-fetching and business logic. Feature components may own their data according to the architecture.
- Variant/size via discriminated unions, not boolean explosion (`variant="danger" | "ghost"`, not `isDanger isGhost`).

## Composition rules

- One primitive per pattern: one button, one dialog, one list, one empty state. Extend the primitive, never fork it.
- NEVER edit vendor primitives (e.g. `components/ui/*` from a UI kit) directly. Wrap them in the project's own component layer.
- Slots > boolean props > configuration objects, in that order of preference.
- Compound components for structured widgets (`Tabs`, `Tabs.List`, `Tabs.Panel`) with context limited to the compound root.
- Choose explicit inputs or a scoped context according to the component's responsibility ([architecture](../core/architecture.md)).

## Registries

- If a registry already owns dispatch, extend it instead of adding another mapping.
- Update registries affected by a contract change together with the contract.
- No parallel implementations: if a registry exists, do not hand-roll conditionals beside it.

## File & naming conventions

- Follow the existing framework's naming and test placement conventions.
- One component per file; small internal helpers may live beside it until reused.
- File soft limit ~400 lines; exceeding it is a review signal, not an automatic split ([../core/clean-code.md](../core/clean-code.md)). Split by responsibility, not by line count.

## Styling

- Use the repo's class utility (`cn()` or equivalent) for conditional classes; NEVER manual string concatenation of classes.
- Tokens only ([design.md](design.md)). No inline styles except for dynamic values that cannot be expressed as classes.
- State via attributes (`data-state`, `data-selected`) so styling stays declarative.

## Accessibility is part of the contract

- Interactive primitives expose roles, labels, focus behavior ([accessibility.md](accessibility.md)).
- Dialogs handle focus trap/restore; menus handle arrow keys.
- NEVER ship an interactive component without keyboard support.

## Testing

- Shared primitives get behavior tests (open/close, keyboard, disabled).
- Visual regression only where the repo has a stable, seeded setup — otherwise manual QA evidence.
- See [../testing/strategy.md](../testing/strategy.md).
