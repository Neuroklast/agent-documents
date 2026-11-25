# Example hooks (deterministic gates)

These optional Claude Code examples provide local feedback. The command matcher is a heuristic, not a sandbox or security boundary; it cannot establish that an arbitrary command is safe. Use actual tool permissions, sandboxing and approvals.

| Hook | Event | Effect |
| --- | --- | --- |
| `block-destructive.mjs` | `PreToolUse` (Bash) | Denies `rm -rf /`, force-push, `DROP TABLE`, `curl \| sh`, raw disk writes |
| `post-edit-lint.mjs` | `PostToolUse` (Edit/Write) | Runs a trusted executable with JSON arguments on a project-local edited file |

## Install

Copy these two scripts to `.claude/hooks/` in your project, then add to `.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR\"/.claude/hooks/block-destructive.mjs" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR\"/.claude/hooks/post-edit-lint.mjs" }
        ]
      }
    ]
  }
}
```

Set the linter command for the second hook, for example:

```bash
export POST_EDIT_LINT_BIN="node"
export POST_EDIT_LINT_ARGS='["node_modules/eslint/bin/eslint.js"]'
```

Requirements: Node 20+. Configure an executable that supports the `--` argument separator; do not pass shell snippets. No shell is used, including on Windows (invoke JS CLIs through Node). The linter is bounded to 30 seconds. Hook failures are feedback, not proof that an edit was prevented. The deny hook returns a structured denial for recognized patterns; unmatched commands still require the host's permissions.
