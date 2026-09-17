# Backend — API

Load for: any API endpoint or spec. Mandatory skill: [../skills/rest-guidelines/SKILL.md](../skills/rest-guidelines/SKILL.md).

## Resource design

- Paths: kebab-case, plural nouns, no verbs: `/api/v1/invoice-line-items`.
- IDs are opaque strings (UUIDs), never sequential integers in public APIs.
- snake_case JSON properties; plural names for arrays; `_at` for timestamps, `_date` for dates.
- NEVER trailing slashes. NEVER RPC-style verbs (`/getUser`) unless the action is genuinely a process (`/imports`).
- Additive-only changes within a version; breaking changes → new version.

## Methods & status codes

| Method | Semantics |
| --- | --- |
| GET | Safe, idempotent, cacheable where appropriate |
| POST | Create; idempotency key for retryable creates |
| PUT | Full replace |
| PATCH | Partial merge |
| DELETE | Idempotent removal |

- 200 OK, 201 Created + `Location`, 202 Accepted (async), 204 No Content.
- 400 validation, 401 unauthenticated, 403 unauthorized, 404 missing, 409 conflict, 422 semantic rejection, 429 rate limited (with retry info), 500 server error.
- NEVER 200 with an error body.

## Errors

- `application/problem+json`: `type`, `title`, `status`, `detail`, `instance`.
- NEVER stack traces, SQL, or internal identifiers in responses.
- Validation errors: field-level detail, stable machine-readable codes.

## Pagination & filtering

- Cursor pagination default; opaque `next_cursor`; default page size ~50, max ~200.
- Offset pagination only where the repo already does it.
- Filters as query params (snake_case); never unbounded result sets.

## Auth & limits

- Every non-public endpoint authenticates and authorizes. Server-side only ([auth.md](auth.md)).
- Rate limit public/mutating endpoints; return 429 with retry hints.
- Idempotency keys for payments and creates that must survive retries.

## Validation

- Validate at the boundary with the repo's schema library (one source for client+server where possible).
- Reject unknown fields where the schema library supports it.
- NEVER trust client-provided IDs for ownership/tenant — derive from the session.

## OpenAPI

- Every endpoint ships an updated OpenAPI spec in the same change: paths, schemas, status codes.
- Prefer generated specs from code (route definitions/schemas) over hand-edited YAML.
- The spec MUST document actual behavior, including known gaps (e.g. error shape migration).

## Definition of Done (endpoint)

- [ ] REST guidelines complied with.
- [ ] AuthZ on every mutation and every foreign-ID read.
- [ ] Validation at the boundary.
- [ ] Problem+json errors, correct status codes.
- [ ] Pagination for lists, limits for public inputs.
- [ ] OpenAPI updated and contract check green.
- [ ] Tests: happy path + denied path (401/403) + validation failure.
