---
name: minimal-change
description: Enforce the smallest complete change that solves the stated problem. Use for any implementation or refactor — blocks speculative features, new abstractions and unrelated edits.
---

# Minimal change

The goal is the smallest complete change that satisfies the request. Completeness means the acceptance criteria hold; minimality means nothing else was added.

## Before writing code

1. Restate the requested outcome in one sentence.
2. List the files that must change.
3. For each additional file or abstraction you are considering, answer: "Does the outcome fail without this?"
   - If no → do not add it.
   - If yes → document the reason.

## During implementation

- Prefer editing existing functions over creating new ones.
- Prefer existing patterns, utilities and libraries already in the repo.
- Do not add configuration flags, feature toggles or extension points for hypothetical future needs.
- Do not reformat, rename or restructure code outside the necessary path.
- Do not introduce a new dependency unless the task explicitly requires it or no existing solution works.

## After the change

- The diff should be explainable in one or two sentences.
- If the diff is larger than expected, remove the unnecessary parts before claiming done.
- Use [complexity review](../complexity-review/SKILL.md) if the change still feels heavy.

## Exception

A larger change is allowed only when the smaller alternative creates a correctness, security or maintainability defect that the project cannot accept. State that trade-off explicitly.
