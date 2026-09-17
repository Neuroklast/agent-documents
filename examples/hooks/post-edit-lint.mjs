#!/usr/bin/env node
// Claude Code PostToolUse hook: run a linter/formatter on the edited file.
// Set POST_EDIT_LINT_CMD (e.g. "npx eslint --fix"); the edited path is appended.
// Without the env var this hook is a no-op.

import { spawnSync } from "node:child_process";

const input = await new Promise((resolve) => {
  let data = "";
  process.stdin.on("data", (chunk) => (data += chunk));
  process.stdin.on("end", () => resolve(data));
});

let payload;
try {
  payload = JSON.parse(input || "{}");
} catch {
  process.exit(0);
}

const file = payload.tool_input?.file_path ?? payload.toolInput?.filePath;
const cmd = process.env.POST_EDIT_LINT_CMD;
if (!file || !cmd) process.exit(0);

const [bin, ...args] = cmd.split(/\s+/).filter(Boolean);
const result = spawnSync(bin, [...args, file], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status === 0 ? 0 : 1);
