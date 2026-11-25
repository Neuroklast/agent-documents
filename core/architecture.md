# Core — Architecture

Load for: new modules, features, refactors, structural decisions.

## Boundaries and dependencies

Select architecture in proportion to actual complexity. In a layered application:

```text
presentation → application → domain
infrastructure → application/domain ports
composition root → concrete implementations
```

- Domain owns pure business rules and does not depend on frameworks, storage or request objects.
- Application orchestrates use cases; adapters implement external interfaces where justified.
- Simple CRUD may need fewer layers. Do not introduce ports or registries solely to match a diagram.
- Distinguish compile-time dependencies from runtime calls; avoid cycles and respect public interfaces.
- Record consequential decisions in [ADRs](../templates/ADR.md).

## Write/read matrix (CQRS-style)

| Surface | Pattern |
| --- | --- |
| Public reads | Cache/ISR-friendly, cookie-free clients, column whitelists |
| User writes | Route handler/action: authenticate → validate → authorize → mutate → invalidate |
| Admin writes | Same, plus audit trail and capability check |
| Cron/jobs | Idempotent, single-flight lease, bounded runtime, logs |
| Webhooks | Verify signature first; webhook is the source of truth, not the redirect |

- Mutations ALWAYS re-check authorization server-side. A middleware/proxy redirect is a UX gate, not a security gate.

## Inversion of control (UI)

- Keep leaf components reusable where useful. Use explicit inputs for independent primitives; context and local data access are acceptable when the component's responsibility calls for them.
- Contracts as typed interfaces (`SectionProps`, `AdminPanelProps`, …) so renderers stay swappable.
- Use a registry only for real shared dispatch; otherwise local explicit code may be simpler.

## State

- In client/server applications, define the authoritative state owner and synchronization contract. Local-first, offline and native architectures may have a different owner.
- ONE state solution per concern. NEVER add a second state library "next to" the existing one.
- Forms: schema-validated, one source of truth for validation (shared client/server schema).

## Module boundaries

- One module = one responsibility + a public surface (exports).
- Internal helpers stay unexported. NEVER deep-import other modules' internals.
- Shared utilities live once, in the lowest layer that can host them.

## SSOT (single source of truth)

- One source per fact: brand name, legal data, limits, routes, cache tags, env schema.
- Derived values are computed, never duplicated as literals.
- Config that the UI displays comes from config, not hardcoded strings.

## Naming & layout

- Group by domain, not by type, once a folder exceeds ~10 files.
- Tests co-located or in a mirrored `tests/` tree — pick one per repo.
- Public surface of a module documented in its index/README.

## NEVER

- God objects/files; hidden globals; two auth systems; two schema sources; second state library.
- Framework code in domain logic; business rules in UI components.
- Feature-specific special cases inside generic layout code (fix the model, not the symptom).
