# Quality journal entry template

Copy one block for each code/config/workflow PR, fill all fields with facts and append it to the project journal. Do not duplicate boilerplate as evidence.

## YYYY-MM-DD | Short description of the change
- Scope: What changed, which modules and user-visible or operational paths are affected.
- Root cause: Evidence, reproduction and why the previous behavior was incorrect.
- Owner: Canonical source module and accountable reviewer or maintainer.
- Tests: Exact commands and outcomes actually executed, including negative and regression tests.
- Failure path: How unavailable data, partial writes, timeout, authorization and rollback behave.
- Docs updated: List the Markdown sources of truth revised in the same PR.
- Residual risk: Remaining uncertainty, severity, owner, mitigation and follow-up issue, or a reasoned none.

No claims of an E2E pass, release, migration or deployment without evidence.
