# Monorepos and workspaces

- Inspect workspace manifests, lockfile boundaries, package exports, generated code and task graph; respect nested project instructions.
- Identify changed packages and their actual transitive consumers. Use supported affected-target tooling where reliable; broaden verification when global config, shared tooling or lockfiles change.
- Keep package boundaries explicit and avoid cross-package deep imports or duplicated dependency versions without reason. Verify local and published consumer contracts where applicable.
- Run scoped checks plus affected integration tests; document omitted checks and why. For multiple writers use [agent orchestration](agent-orchestration.md).
