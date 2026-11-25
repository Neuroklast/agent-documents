# Testing — Living Documentation CI Gate

Load when a project adopts a required documentation review gate. Adapt the procedure to the version control and CI platform in use.

## Reference
The authoritative **policy** lives in [../core/architecture-quality-programme.md](../core/architecture-quality-programme.md). A repo-specific script and tests must be committed and versioned with the application. Keep implementation examples generic; do not disclose unrelated project names, pull requests, customer details or private repository information.

## Mandatory checks
1. Fetch the actual PR target history (checkout with fetch-depth 0).
2. Compute merge-base against the PR base branch and inspect changed paths. If ancestry is unknown, fail.
3. Resolve each source file to relevant topic-document owners in a versioned config.
4. Fail if any required Markdown file was not touched in the PR.
5. Parse newly added lines of the append-only quality journal. Require a titled date and the seven evidence fields.
6. Allow docs-only changes and static assets to pass without inventing a journal entry.
7. Run negative tests on the checker, including missing owners, malformed journal entries, missing base history and complex file names.
8. Set the status check as required for the protected integration branch. If branch protection is unavailable, state that the check remains advisory.

## Semantic review still mandatory
Docs-changed is not docs-correct. Reviewers must compare written claims with current code paths, security contracts, schema migrations and actually executed tests. Runtime simulations and real production operations must never be invented to satisfy the check.

## Do not break repository release policy
Keep non-build checks lightweight. Use the existing runtime and version-control tools; do not add unrelated build, deployment or database side effects. Never use automatic bypasses, no-op checks or 'skip' markers to make a failed quality gate green.
