# Testing — Living Documentation CI Gate

Load for: required documentation rules in GitHub PRs and branch protection.

## Reference
The authoritative **policy** lives in [../core/architecture-quality-programme.md](../core/architecture-quality-programme.md). A repo-specific script and tests must be committed and versioned with the application. Neuroklast Band Land PR #638 and neuroCMS PR #16 are initial implementations, not centrally executed actions.

## Mandatory checks
1. Fetch the actual PR target history (checkout with fetch-depth 0).
2. Compute merge-base against the PR base branch and inspect changed paths. If ancestry is unknown, fail.
3. Resolve each source file to relevant topic-document owners in a versioned config.
4. Fail if any required Markdown file was not touched in the PR.
5. Parse newly added lines of the append-only quality journal. Require a titled date and the seven evidence fields.
6. Allow docs-only changes and static assets to pass without inventing a journal entry.
7. Run negative tests on the checker, including missing owners, malformed journal entries, missing base history and complex file names.
8. Set the status check as required for main. If branch protection is unavailable, state that the check remains advisory.

## Semantic review still mandatory
Docs-changed is not docs-correct. Reviewers must compare written claims with current code paths, security contracts, schema migrations and actually executed tests. Runtime simulations and real production operations must never be invented to satisfy the check.

## Do not break repository release policy
A non-build check should run with Node and Git, without npm install or secrets. It cannot introduce GitHub Next.js/Vercel builds or auto-apply SQL where the project prohibits them. Never use automatic bypasses, no-op checks or 'skip' markers to make a failed quality gate green.
