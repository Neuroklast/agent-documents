# Brownfield evolution

Use for legacy modernization or changes to unfamiliar established systems. Begin with [repository context](../skills/repository-context/SKILL.md).

- Characterize actual behavior with existing tests and targeted regression tests before replacing implementation. Separate known bugs from compatibility expectations.
- Find seams, consumers, hidden state and ownership. Prefer a reversible incremental change over a rewrite; use adapters/strangler boundaries only when coexistence is required.
- Define compatibility windows, migration and removal criteria; measure regressions and stop when the user outcome is complete. Avoid parallel permanent implementations without ownership.
- Preserve project decisions, operational constraints and user edits. Document changed contracts and residual debt with [living docs](docs-system.md).
