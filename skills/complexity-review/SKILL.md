---
name: complexity-review
description: Identify unnecessary implementation complexity, duplicated responsibility and avoidable runtime cost while preserving required behavior and safety. Use for simplification, architecture review and suspected overengineering.
---
# Complexity review

The objective is less engineering burden for the same correct product behavior, not a smaller line count. Review only unless implementation is requested separately.

## Establish necessity
- Map the requested behavior to the actual execution paths, state ownership and external dependencies.
- Inspect consumers before labeling a component redundant. Identify what a candidate abstraction actually protects or enables.
- Separate current needs from unverified future needs. State load assumptions and inspect measured behavior where available.

## Challenge each candidate
- Could existing behavior satisfy the requirement without the extra component?
- Is there a second source of truth, redundant translation or duplicated decision?
- Does a general abstraction have real independent consumers, or merely a hypothetical future use?
- Would removing it create a correctness, authorization, reliability, accessibility or compatibility gap?
- Does the proposed simplification reduce maintenance or measured runtime cost rather than move complexity elsewhere?

## Report
For each justified change, name the location, existing obligation, evidence of unnecessary cost, proposed simpler design and verification needed to preserve behavior. Prefer removal or existing capabilities before adding new mechanisms. Keep validation, security checks, recovery and tests intact. Report blockers separately from optional cleanup and disclose unverified assumptions.
