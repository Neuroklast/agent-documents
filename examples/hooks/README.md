# Example hooks (deterministic gates)

Markdown rules are advisory; hooks are deterministic. These are drop-in examples
for Claude Code (also usable as templates for other harnesses).

| Hook | Event | Effect |
| --- | --- | --- |
| `block-destructive.mjs` | `PreToolUse` (Bash) | Denies `rm -rf /`, force-push, `DROP TABLE`, `curl \| sh`, raw disk writes |
| `post-edit-lint.mjs` | `PostToolUse` (Edit/Write) | Runs `$POST_EDIT_LINT_CMD` on the edited file |

## Install

Copy the `hooks/` folder into your project, then add to `.claude/settings.json`:

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
export POST_EDIT_LINT_CMD="npx eslint --fix"
```

Requirements: Node 18+. Hooks exit 0 unless a rule matches; a blocked call exits
with a JSON deny decision, so the agent sees the reason and stops.
