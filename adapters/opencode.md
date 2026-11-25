# OpenCode

Use `--opencode` with the [installer](../README.md), and preserve existing `AGENTS.md` instructions. Link the project's actual local AXON router.

Root opencode.json uses native V2 ordered permissions and agents. The optional [legacy V1 template](opencode-v1.json) is not loaded automatically. When applying either config, merge with existing settings and resolve role paths relative to the target project. V2 accepts supported V1 fields, but verify effective permissions in your installed version. Reviewer profiles use a deny-first allowlist; tester requires explicit approval for edits and shell. Host policies and higher-priority settings can differ. Verify actual denied edits, shell, delegation, external paths and MCP writes; static tests do not prove runtime enforcement.

Official reference: [host documentation](https://opencode.ai/docs/migrate-v1). Review date: 2026-11-25. Runtime smoke not yet executed in this collection.
