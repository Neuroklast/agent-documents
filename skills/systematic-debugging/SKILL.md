---
name: systematic-debugging
description: Diagnose bugs with a root-cause loop instead of trial-and-error patches. Use when a failure is reported or a test fails — requires a reproducible case, hypothesis and evidence before changing code.
---

# Systematic debugging

Do not patch until you can state the root cause. Random changes hide the real problem and create new ones.

## Loop

1. **Reproduce** — Get a minimal, reliable reproduction (test, curl, click sequence). If you cannot reproduce it, say so and stop.
2. **Observe** — Collect the actual error, stack, log or failing assertion. Do not guess the message.
3. **Hypothesize** — Write one sentence: "The failure happens because X."
4. **Test the hypothesis** — Add a temporary log, assertion or isolated experiment that would be true only if the hypothesis is correct. Run it.
5. **Confirm or discard** — If the experiment matches, proceed to the fix. If not, form a new hypothesis. Do not keep the experimental code.
6. **Fix** — Make the smallest change that addresses the confirmed cause.
7. **Verify** — Re-run the original reproduction and the surrounding tests.

## Rules

- One hypothesis at a time.
- Never apply a fix "just in case".
- If the root cause is outside the allowed scope, document it and ask rather than working around it.
- After the fix, remove any temporary debugging statements.
- Pair with [tdd-extraction](../tdd-extraction/SKILL.md) when the bug is testable: the failing test is the reproduction.
