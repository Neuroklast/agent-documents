# Core — Architecture Quality Programme

Load for: repo-wide architecture remediation, ADR governance and durable quality gates.

## Target, not a certificate
No codebase is demonstrably "perfect". The goal is measurable integrity and prevention of repeated bug classes. A green build and a green documentation gate never certify semantics, authorization or operational reliability.

## Phase model
1. **Inventory:** enumerate source files, routes, modules, integrations, runtime entry points, permissions and dependency graph. Note the inventory date and limits.
2. **Data-flow and threat model:** map ingress, secrets, PII, storage writes, cross-tenant flows, third-party callbacks, background jobs, rollback.
3. **Canonical architecture:** define which module owns contracts, access policy, validation, state, error handling, retries, observability and migrations. Make architectural exceptions explicit.
4. **Backlog:** record every verified finding with P0–P2 severity, repro/evidence, impacted surface, owner, dependency, acceptance test and current status. Never silently close an item after a cosmetic fix.
5. **Implement + test:** fix the owning service and every affected caller. Test failures and partial writes with live test data where possible.
6. **Independent review:** search for the same defect class globally; validate boundary tests; review runtime and security.
7. **Prevent recurrence:** add the narrowest automated contract, enable required CI status checks, update living docs and test real deployments.

## PR gate (each repository, not a centralized mutable external action)
- Maintain a machine-readable changed-path-to-document-owner map.
- Maintain an append-only dated quality journal with: Scope, Root cause, Owner, Tests, Failure path, Docs updated and Residual risk.
- Diff against the actual PR base. Fail closed when git history or mapping is unavailable.
- Require updates to relevant architecture, security, operations, database, QA and change history.
- Docs-only/assets-only changes do not fabricate behavior or journal entries.
- A CI job validates the gate itself using positive/negative tests and then checks the diff. Configure branch protection to require the check.
- Mechanical validation checks **presence and minimal structure only**; reviewers verify truth. Never satisfy the gate with filler or copied boilerplate.

## Release acceptance
| Evidence | Required state |
| --- | --- |
| P0/security or data-loss findings | Closed with actual behavioral regression tests |
| P1 risks | Fixed or explicit time-boxed, owned operator acceptance |
| Tenant and admin permissions | Tested against DB RLS and server entry points |
| Storage consistency | Recovery path and partial-failure tests |
| Operational jobs | Bounded, idempotent, observable, operator recoverable |
| Releases | Reviewed schema/rollback, deployment SHA, production smoke checks |
| Performance | Measured budgets, representative datasets, trend monitoring |
| Living docs | Changed with source, accurate and reviewed |

No hidden exceptions or claims of verified execution without evidence.

## Scope boundaries
Do not force a common runtime dependency across unrelated websites. Share process and tooling, but keep business models, RLS, database owners, deploy policy and site-specific design independent. Version and test shared packages when extraction is justified.
