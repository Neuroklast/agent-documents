---
name: humanize-output
description: Remove typical AI writing patterns from text the agent produces. Use for PR descriptions, review comments, commit messages, documentation, UI copy and any user-facing prose — enforces direct, specific, human language.
---

# Humanize output

Text written by agents often signals its origin through predictable patterns. This skill removes those patterns before the text is shown to a human.

## Apply to

- Pull request titles and descriptions
- Review and inline comments
- Commit messages
- Documentation and README sections
- UI labels, empty states, error messages and tooltips
- Any explanatory text longer than one sentence

## Patterns to remove

| Pattern | Replace with |
|---------|--------------|
| “It is important to note that…” / “Please note that…” | Delete the phrase; start with the fact. |
| “In order to” | “To” |
| “Utilize” / “leverage” | “Use” |
| “Ensure that” | “Make sure” or rephrase to the action. |
| “This allows users to…” | Name the concrete outcome. |
| Bullet lists of three or more items that restate the same idea | One sentence or a real list of distinct points. |
| “As an AI…” or any self-reference | Delete. |
| Over-structured sections (Overview / Details / Conclusion) for short text | Plain paragraphs. |
| Hedging stacks (“may potentially”, “could possibly”) | State the actual uncertainty once, or remove it. |
| Generic positive closings (“I hope this helps”, “Let me know if…”) | Delete or replace with a specific next action. |

## Rules

- Prefer the shortest sentence that remains accurate.
- Use the project’s existing terminology; do not introduce synonyms.
- Address the reader directly when giving instructions (“Run the tests” not “The tests should be run”).
- Numbers, file names, error messages and acceptance criteria stay exact; do not paraphrase them into softer language.
- If the original request asked for a specific tone or format, follow that over these defaults.

## Before sending

Read the text once and delete every sentence that could appear unchanged in a different project. What remains should be specific to this change, this codebase or this user.
