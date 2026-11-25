# Clean code

Load when changing or reviewing implementation.

## Smallest complete change

1. Is new code necessary? Remove speculative scope.
2. Can existing project code solve it? Reuse its conventions.
3. Can the platform or standard library solve it? Prefer that to another dependency.
4. Can an installed dependency do it? Do not add a dependency for a thin wrapper.
5. Otherwise write the least new code that stays readable and covers failures.

Before abstracting, identify the concrete consumers and which behavior must change together. A single consumer is not automatically wrong, but a speculative extension point is not sufficient justification. After implementation, trace the changed behavior to the request and challenge unnecessary dependencies, layers and configuration. Never reduce correctness to reduce line count.

Review with [Complexity review](../skills/complexity-review/SKILL.md). **Never** cut validation, security, error handling, tests, accessibility or requested behavior to reduce line count.

## Structure

- One clear responsibility per module. Split by real responsibility, not arbitrary line targets.
- Use domain names consistently; boolean names read as predicates. Keep established project naming conventions.
- No dead or commented-out code. Git retains history.
- Avoid single-use factories, wrappers, abstractions, registries and options without a demonstrated need.
- Dependency direction follows the project's architecture; no cycles or backdoor reach-through.

## Boundaries and errors

- Validate external input at trust boundaries; handle errors where a caller can act on them.
- Never swallow exceptions, lose error context or disclose internal details to clients.
- Preserve control-flow signals for frameworks that use exceptions for routing.
- Explain **why** a non-obvious workaround exists, not what a line already says.

## Values and types

- Name constants when a value has domain meaning; do not create indirection for self-evident literals.
- Use validated centralized environment configuration.
- Strict typing without suppressions; use [TypeScript](../stack/typescript.md) or [C++](../stack/cpp-juce.md) rules where relevant.
