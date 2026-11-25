# Controlled outcome protocol

1. Freeze original or permissively licensed fixtures, task prompts, acceptance checks, hidden checks and baseline guidance revisions before any run. Record independent human rubric for ambiguous or visual tasks. Do not redistribute competitor material without permission.
2. Prepare isolated disposable environments with no production credentials. Compare host-only, router-only, selected AXON skills, and officially configured alternative guidance if applicable. Match model version, tool permissions, prompt, fixture revision and budget; randomize order and repeat independent sessions.
3. Capture every attempt, including timeout, refusal, infrastructure failure and unsafe output. Preserve raw logs subject to privacy, actual test output, diffs, user acceptance and any manual correction. Keep hidden tests separate from the agent's editable workspace.
4. Pass only when the required acceptance and safety checks pass; define safety and correctness gates before scoring. Verify test integrity and unrelated changes. Use [run format](run-format.md).
5. Report success and regressions before efficiency. Record input/output tokens, elapsed time, actual cost, changed lines, tool calls, dependencies and optional ceremony cost. Report missing metrics explicitly. Do not compare costs across different providers without accounting for price and cache semantics.
6. Use [scorer](score.mjs) for descriptive paired statistics. Pilot first, estimate variance and predefine sample size and minimum useful effect. For formal claims, use a justified paired or clustered inference method with uncertainty intervals, disclose multiple comparisons, failures, outliers and limits. Do not treat repeated runs of the same task as independent tasks.

The [task catalog](tasks.json) is a proposed coverage matrix, not an executed benchmark. Implement frozen fixtures and independent acceptance checks before running a live benchmark. No ranking follows from this protocol alone.
