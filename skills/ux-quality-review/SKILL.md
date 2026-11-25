---
name: ux-quality-review
description: Use for read-only audits, critique, screenshot review, visual regression and release acceptance.
---

# Evidence-based UI and UX review

## Workflow and acceptance

- Identify scope, users, primary tasks, design system, supported devices and criteria. Inspect actual rendered behavior when possible; label code-only observations.
- Walk complete tasks including refresh/back, recovery, slow or failed requests, empty/partial content and permissions.
- Inspect hierarchy, copy, discoverability, consistency, responsiveness, keyboard, assistive technology, contrast, focus, motion and data integrity. Load only specialists related to findings.
- Record route, environment, state, viewport, reproduction, expected/actual result, affected task and screenshot or trace. Distinguish measured failures from preference.
- Severity: blocker prevents essential task or creates serious risk; major substantial friction/exclusion; minor recoverable inconsistency; suggestion optional. State confidence and scope.
- Prioritize root causes across shared patterns rather than isolated screenshot fixes. Propose smallest complete fix and retest; no edits during review-only work.
- Compare deterministic screenshots and functional tests with baseline; use real content, supported browsers and accessibility checks. Screenshots or automated scores alone cannot approve a flow.
- Output prioritized findings, pass/fail/not-tested matrix, limitations and release recommendation. See [evidence review](../evidence-review/SKILL.md).

## References

- [Reference guidance](https://www.nngroup.com/articles/ten-usability-heuristics/)
