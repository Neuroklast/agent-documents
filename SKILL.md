---
name: agent-documents
description: Route software engineering tasks to focused instructions for requirements, implementation, architecture, debugging, testing, review, security and simplification. Use when working on a codebase or reviewing engineering work.
---
# Agent Documents

Use this collection as task-specific engineering guidance. The user's request, project-specific constraints and verified repository facts determine the work. Do not load the whole collection into context.

1. Read [AGENTS.md](AGENTS.md) for the task router and baseline rules.
2. Inspect the actual project before selecting commands or assumptions.
3. Load only the documents and skills relevant to the current task.
4. Use the smallest complete workflow; do not generate planning artifacts for trivial changes.
5. Apply applicable project checks, review the result and disclose unverified behavior.

The router links to local files supplied with this collection. Keep their relative paths intact. The collection requires no external service, paid API, runtime hook or secret to supply its instructions. The separate installation script is optional and intended for explicit local installation.

For setup and limitations see [README.md](README.md). For source boundaries see [PROVENANCE.md](PROVENANCE.md).
