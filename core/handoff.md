# Durable handoff and resumption

Use when switching sessions, agents, worktrees or handing off incomplete work. Extend the existing task record; do not create a permanent duplicate memory system.

Record the authorized objective, constraints, base/current revision, branch, working-tree state, completed changes, current acceptance criteria, actual commands/results, failed hypotheses, remaining risks, and the next concrete action. Link to canonical decisions and relevant source paths, not copied conversations or credentials.

On resume, compare the record with current Git/source/tests. Detect drift, concurrent changes and stale assumptions; preserve user edits. Reverify decisive claims when revisions or environment differ. Resolve scope conflicts before writing.

For partial or blocked work, distinguish completed, unverified and not started. A handoff is sufficient when a new agent can recover the task from project evidence alone without assuming old plans are still true. See [context thread](../skills/context-thread/SKILL.md) and [agent orchestration](agent-orchestration.md).
