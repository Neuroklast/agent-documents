---
name: load-contract
description: Declare exactly which skills and documents will be loaded before loading them. Use for any non-trivial task — forces an explicit, reviewable contract that prevents uncontrolled context growth.
---

# Load contract

Before loading any skill body or topic file beyond the router, write a short load contract. This makes the context decision visible and deliberate.

## When required

- Any task that is not a one-line fix or pure question.
- Whenever more than the router (`AGENTS.md`) will be read.
- At the start of a multi-step session or when the goal changes.

## Format

Write this before loading further files:

```
Load contract:
- Goal: [one sentence outcome]
- Primary: [one skill or workflow]
- Specialists: [0–2 skills, or none]
- Explicitly not loading: [skills considered but rejected + short reason]
- Exit criteria: [what must be true to call the task done]
```

## Rules

- Maximum one primary workflow and two specialist skills.
- Do not load a skill body until it appears in the contract.
- Adding a file later requires updating the contract and stating why the original contract was insufficient.
- The contract is not a plan; it is only a loading decision.
- For trivial tasks the contract may be a single line: "Primary: none — trivial fix".

## Integration

- Pair with [context-thread](../context-thread/SKILL.md) for long sessions (the contract is the initial anchor).
- Pair with [verification-before-done](../verification-before-done/SKILL.md): the exit criteria in the contract must be satisfied before claiming done.
- The router in [AGENTS.md](../../AGENTS.md) remains the only file loaded by default.
