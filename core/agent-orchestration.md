# Agent orchestration

Delegate only when independent work can reduce elapsed time or independent review adds value. Use host-native subagents/worktrees; AXON does not grant permissions or run an orchestrator.

- Define a parent-owned task graph with dependencies and acceptance criteria. Parallelize independent reads or disjoint writes; keep one writer per tree and assign exact path/contract ownership.
- Give each agent the objective, relevant context, base revision, allowed paths/tools, prohibited actions, expected output and verification. Do not forward unrelated secrets or untrusted instructions.
- Review-only roles must not write or invoke mutating tools. Enforce boundaries using actual host permissions; if unavailable use sequential work and human review.
- Require a handoff with diff/revision, evidence and unresolved blockers. Integrate in dependency order; verify shared contracts and cross-component tests on the combined result, not just child results.
- On conflict or failed worker, stop competing writes, inspect the actual state, reassign explicitly and preserve other edits. Avoid duplicate delegation or retries without new evidence.

See [Git](git.md), [roles](../roles/README.md) and [handoff](handoff.md).
