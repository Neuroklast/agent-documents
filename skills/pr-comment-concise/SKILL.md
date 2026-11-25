---
name: pr-comment-concise
description: Write short, actionable PR and review comments. Use whenever commenting on a diff, PR or code review — forbids text walls, tutorials and generic advice.
---

# PR comment concise

Comments exist to point at a problem and a concrete next step. Long explanations belong in documentation, not in review comments.

## Format

Each comment:

1. **Location** — file and approximate line or hunk.
2. **Issue** — one sentence: what is wrong or missing.
3. **Suggestion** — the smallest concrete change that addresses it (code snippet or clear instruction).
4. **Severity** — optional: blocker / suggestion / nit.

Maximum three sentences. Prefer one.

## Forbidden

- Paragraphs explaining why the general principle matters.
- Tutorials or links to external docs unless the link is the suggestion itself.
- "This could be improved by considering..."
- Restating the code that is already visible in the diff.
- Multiple unrelated points in one comment.

## Examples

Bad:
> This function is a bit long and might be hard to maintain in the future. In general we prefer smaller functions because they are easier to test and reason about. You could extract the validation logic into a helper. Also consider adding error handling.

Good:
> `validateInput` mixes parsing and business rules. Extract the pure validation into `isValidOrder` and keep the side effects here.

## Rules

- One finding per comment.
- If the change is correct, say nothing or leave a single approving line.
- Do not restate acceptance criteria that are already met.
