# Host compatibility

AXON is guidance, not a host, model, sandbox or permission manager. The local installer copies skills and rewrites links. It does not change host settings, install binaries, enable hooks or grant permissions.

| Host | Project skill layout | Installer | Instruction entry |
| --- | --- | --- | --- |
| Codex | .agents/skills | --agents | AGENTS.md |
| Claude Code | .claude/skills | --claude | CLAUDE.md |
| Gemini CLI | .gemini/skills or .agents/skills | --gemini or --agents | GEMINI.md |
| Copilot | .github/skills | --copilot | .github/copilot-instructions.md |
| OpenCode | .opencode/skills | --opencode | AGENTS.md |

The two original layouts remain the default; explicit flags select only those layouts. Prefer one discovery path per host to avoid duplicate IDs. Keep the reference tree at docs/agent-docs. Preserve existing instructions and add a pointer to the local router.

## Verification status

The collection tests local directory creation and rewritten links, not native discovery, permissions, invocation or model behavior. Verify host versions and actual configuration; record native smoke tests before claiming runtime compatibility. Run read-only probes in a disposable project with no credentials or external MCP connections.

- [Codex](codex.md)
- [Claude Code](claude-code.md)
- [Gemini CLI](gemini-cli.md)
- [Copilot](copilot.md)
- [OpenCode](opencode.md)
