---
name: repository-context
description: Map an unfamiliar or cross-cutting codebase before planning changes. Use for brownfield adoption, unfamiliar repositories or changes spanning ownership boundaries.
---
# Repository context

## Workflow

1. Identify the current revision, working-tree status, instruction precedence, package manifests, lockfiles, build/test entry points and CI. Do not install or execute unknown scripts during discovery.
2. Trace the requested behavior from entry point through domain, persistence and external adapters. Locate existing tests, owners, contracts and ADRs. Read only relevant paths; ignore generated, vendor and secret material.
3. Record source-of-truth boundaries, actual commands, supported platforms, deployment shape, risk areas and unknowns with file references. Distinguish verified facts from guesses.
4. Identify impacted packages, consumers and compatibility constraints. For legacy changes consult [brownfield](../../core/brownfield.md); for workspaces consult [monorepos](../../core/monorepo.md).
5. Return a compact project map and next action, not a speculative architecture or a full repo dump.

## Exit evidence

A second agent can locate the relevant entry points, reproduce the available verification and identify unresolved risks without rereading the whole tree.

Respect [workflow](../../core/workflow.md) and [quality](../../core/quality.md). Load only applicable references.
