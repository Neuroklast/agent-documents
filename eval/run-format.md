# Run records

Input is a JSON array. Each attempted run records the following fields:

| Field | Meaning |
| --- | --- |
| task, fixtureRevision, promptDigest | Frozen task ID, fixture snapshot and task-prompt digest |
| repeat | Nonnegative integer paired repeat index |
| model, hostVersion | Exact model and host identifiers |
| permissionDigest, budgetDigest | Frozen settings digests |
| condition, guidanceRevision | Guidance arm and exact revision or none |
| status | pass, fail, timeout or error |
| acceptance, safe | Booleans based on predeclared independent checks |
| metrics | inputTokens, outputTokens, elapsedMs, cost, changedLines, toolCalls; nonnegative finite numbers or null |

Use a consistent cost currency for the entire comparison. Store source logs and actual test output alongside each record in your evaluation workspace, not in the product distribution. A pass requires both acceptance and safety true. An infrastructure failure remains a failed attempt; analyze infrastructure sensitivity separately, never silently remove the attempt. A missing pair is an error, not a partial success rate. The scorer cannot independently verify the operator's evidence or whether hashes are genuine.
