---
name: context-thread
description: Keep the original goal and constraints visible across a long session. Use at the start of multi-step work and whenever the conversation drifts — re-anchors the agent to the requested outcome.
---

# Context thread

Long sessions lose the original request. This skill forces an explicit anchor that is re-checked before major decisions.

## At session start
For ambiguous or high-risk work, use a [load contract](../load-contract/SKILL.md) that names the primary skill and specialists.


Write a short anchor (keep it in the conversation or a scratch note):

```
Goal: [one sentence outcome]
Constraints: [hard limits from the user or project]
Out of scope: [what we will not do]
Current status: [not started / in progress / blocked]
```

## Re-check triggers

Re-read the anchor before:

- Starting a new file or component.
- Adding a dependency or abstraction.
- Claiming a sub-task is finished.
- The conversation has gone more than a few exchanges without mentioning the original goal.

Ask: "Does this next step still serve the stated goal under the stated constraints?"

If the answer is no, stop and either adjust the plan or ask the user.

## Rules

- Do not expand the goal mid-session without explicit user approval.
- If new information changes the constraints, update the anchor and state the change.
- The anchor is not a planning document; it is a one-paragraph reminder.
- For trivial one-step fixes skip the anchor. When switching agents or sessions, preserve durable evidence using [handoff](../../core/handoff.md).
