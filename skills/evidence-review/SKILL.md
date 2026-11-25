---
name: evidence-review
description: Review code, architecture or requirements for demonstrable acceptance gaps, defects, security risks and insufficient verification. Use for review requests, risky diffs and release decisions.
---
# Evidence review

A reviewer investigates the artifact rather than trusting the author's summary. Do not edit the artifact during a review-only task.

## Examine
- Identify intended behavior from the request and available acceptance examples.
- Follow changed contracts through callers, persistent state, permissions and externally visible effects.
- Inspect boundary inputs, failure paths, concurrency and compatibility where relevant.
- Compare risky paths with actual verification; distinguish executed checks from proposed ones.
- Examine duplication and incidental complexity when it has a real maintenance or runtime consequence; use [complexity review](../complexity-review/SKILL.md) for focused assessment. Use [security review](../security-owasp/SKILL.md) when trust boundaries or data risks warrant it.

## Validate candidate findings
For each candidate, identify the exact location and a reachable trigger. Explain the observable consequence, then inspect surrounding code for counterevidence. A hypothetical concern without a plausible path is an open question, not a confirmed defect. Avoid quotas and style-only objections.

## Deliver
Return scope and verification, then confirmed findings ordered by severity. Each finding includes location, trigger, impact and a minimal correction. Separate release blockers, nonblocking improvements and pre-existing issues. State unverified areas and the resulting review verdict. Never report that a test passed unless it ran. Use [quality criteria](../../core/quality.md) for the verdict.
