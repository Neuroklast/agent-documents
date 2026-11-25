# Deployment and rollout

Use when a change affects release artifacts, environments, configuration or live compatibility. [Release checklist](../checklists/release.md) owns release closeout.

- Identify artifact digest, source revision, environment, runtime configuration and deploy authority. Promote the same verified artifact where feasible; isolate secrets and environment-specific configuration.
- Verify build provenance, tests, dependency/schema compatibility and health probes before rollout. Document migration order with [data migration](../skills/data-migration/SKILL.md).
- Choose direct, rolling, staged, canary or blue-green based on risk and available infrastructure. Use feature flags only when needed; assign expiry and removal owner.
- Define user-facing success indicators, error/latency thresholds, observation window and explicit abort criteria. Compare against baseline; check critical journeys, not only HTTP health.
- Rollback to a known compatible artifact/configuration or use a documented forward repair when rollback would corrupt data. Verify [recovery](resilience.md), not merely deployment status.
- No production operation without authority. Record revision, actual checks, release decision, remaining exposure and next owner.
