---
name: rest-guidelines
description: Design and review HTTP API contracts for predictable resource access, compatibility, error responses, pagination and verification.
---
# HTTP API contracts

Read the existing API before proposing conventions. Keep established public contracts compatible unless a breaking change has been agreed. These are project defaults, not a claim of conformance to an external style guide.

## Shape the contract

- Name resources consistently. Prefer plural lowercase paths such as `/invoice-line-items` for new APIs unless the project uses another convention.
- Use the existing JSON field naming convention. In a new contract, snake_case is one reasonable choice. Return empty collections as arrays.
- Choose stable identifiers and enforce authorization independently of whether IDs are guessable.
- Represent instants with a documented timezone and calendar dates separately.
- Keep enum values and response fields compatible with existing clients.

## Define operations

Use GET for reads, POST for creation or actions, PUT for replacement, PATCH for partial updates and DELETE for removal. Return meaningful HTTP status codes. For asynchronous work, provide a way to observe progress or failure. For retried writes with financial or other important effects, define an idempotency contract and test duplicate requests.

## Define failures

Distinguish authentication, authorization, invalid input, conflict, missing resources and service failure. Avoid leaking internals or secrets. Use [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) when adopting Problem Details, with project-specific field errors if needed. Document rate limits and retry behavior.

## Bound collections

Choose cursor pagination for frequently changing or large collections where appropriate. Set a server-side maximum page size. Use stable ordering and test missing, repeated and invalid cursors. Avoid expensive totals unless required.

## Verify

- Document request and response shapes, status codes and permissions in the project's API contract.
- Test successful requests, unauthorized access, invalid inputs, pagination and retry behavior.
- Check consumers before changing fields, types or endpoint behavior.
- Generate contract artifacts from the actual source when supported. Run the project's real contract checks.

See [API guidance](../../backend/api.md) and [authorization guidance](../../backend/auth.md). Historical inspiration and rights information are recorded in [../../PROVENANCE.md](../../PROVENANCE.md).
