# Set up AXON in this project

This is an instruction for the coding agent. Run it against the current project, not against an assumed stack. Respect existing repository instructions and the scope of the user's authorization.

## 1. Inspect before changing

Read the existing agent instructions, manifests, lockfiles, source layout, tests, CI, deployment policy and documentation. Identify actual languages, frameworks, runtimes, storage, authentication, interfaces, supported platforms and jurisdiction if relevant. Do not infer requirements from example files alone. Keep unknown facts explicit.

Check the [router](AGENTS.md), [skill index](skills/README.md), [workflow](core/workflow.md) and [context budget](core/context-budget.md). Choose a small core and only the specialist guidance that matches verified capabilities. Never install an irrelevant stack or legal adapter just because it exists. For user-facing projects select frontend-ui and specialists justified by actual tasks (responsive-ui for adaptive screens, accessible-ui for accessibility work, async-ui for remote state). Do not install the whole UI/UX group by default; reassess as capabilities change. Keep the shared reference tree intact so local links remain valid; prune the active selection rather than deleting referenced source documents.

## 2. Integrate without replacing project knowledge

- Preserve the existing project instruction entry points and user-written rules. Resolve conflicts explicitly.
- Keep a permitted local copy of this collection at a stable path. The bundled installer expects the copy at `docs/agent-docs/`; use the native agent method for another location. Use local links, not remote fetches during normal sessions.
- Select the agent's supported skill directory and install only relevant skills. Use the installer described in [README.md](README.md) or the agent's native installation method.
- Record selected skill IDs, source revision, selection reasons and local changes in a project-local inventory. The bundled installer maintains file hashes per destination; it does not infer project capabilities. Use --dry-run before --update or --prune (explicit desired selection); resolve local edits before proceeding. Preserve custom skills and untracked user work.
- Put a compact pointer, verified project facts and relevant commands in the project's instruction file. Do not copy the entire collection into the prompt.
- Link shared guidance instead of duplicating it. If issue templates are requested and the project uses GitHub, adapt the optional [bug template](.github/ISSUE_TEMPLATE/bug.md), [feature template](.github/ISSUE_TEMPLATE/feature.md), [task template](.github/ISSUE_TEMPLATE/task.md) or [docs template](.github/ISSUE_TEMPLATE/docs.md). Preserve existing templates; configure any private security reporting link for the target project instead of copying the source repository's address. Keep project-specific rules in the project, not in reusable upstream files.

## 3. Establish living documentation

Use the existing docs layout where possible. Identify owners for architecture, public contracts, configuration, data, security, operations and testing where applicable. Record real behavior and verification commands. Do not generate empty documents for topics that do not exist.

Add an explicit instruction to every coding workflow: assess documentation impact, update affected canonical docs in the same change, record verification and explain unchanged docs when relevant. Use [documentation guidance](core/docs-system.md) and [quality criteria](core/quality.md).

Where the project has CI and the change is authorized, implement the smallest executable documentation gate using its existing tooling. Follow [living documentation gate](testing/living-docs-gate.md): map source areas to doc owners, check relevant diffs, test positive and negative cases, and make the check required if supported and approved. No fake evidence, no blanket "touch a doc" rule, no deployment or settings change without authority. If enforcement is unavailable, report it as advisory.

## 4. Maintain the selection as the project evolves

At session start, consult the project inventory and current task. Load guidance on demand; no automatic network access or full-tree reread. When a task introduces or removes a technology, changes architecture or changes compliance scope, reassess relevant skills and project rules.

- Add a skill when a verified capability or recurring failure justifies it.
- Adapt local project guidance when facts change; preserve source attribution and ownership.
- Remove an obsolete managed skill only after checking remaining references, consumers and local modifications. Never delete unrelated or user-authored files.
- Record the reason, revision and verification for each managed change. Resolve conflicts before overwriting an edited file.
- Do not treat linked skills as recursive execution instructions. Follow one primary workflow and add focused specialist checks.

## 5. Verify and report

Check all local links, skill names, selected paths and instruction entry points. Run applicable project checks and the documentation gate where installed. For this collection, run its validator and installer tests. Report selected/omitted skills with reasons, modified files, commands actually run, enforcement status and open blockers. Do not claim successful installation or enforcement when unverified.
