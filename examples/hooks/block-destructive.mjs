#!/usr/bin/env node
// Claude Code PreToolUse hook: deny catastrophic shell commands before they run.
// Wire it up in .claude/settings.json — see README.md in this folder.

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

const tool = payload.tool_name ?? payload.toolName;
const command = payload.tool_input?.command ?? payload.toolInput?.command ?? "";
if (tool !== "Bash" || !command) process.exit(0);

const rules = [
  { re: /\brm\s+(-[a-z]*r[a-z]*f|-[a-z]*f[a-z]*r)\s+(\/|~|\$HOME)(\s|$)/i, reason: "recursive delete of / or home" },
  { re: /\bgit\s+push\b[^\n]*(--force|-f)(\s|$)/i, reason: "force-push" },
  { re: /\bgit\s+reset\s+--hard\b/i, reason: "hard reset" },
  { re: /\b(DROP|TRUNCATE)\s+(TABLE|DATABASE|SCHEMA)\b/i, reason: "destructive SQL" },
  { re: /\b(curl|wget)\b[^|;&]*\|\s*(ba|z|da)?sh\b/i, reason: "pipe remote script to shell" },
  { re: /\bchmod\s+-R\s+777\s+\//i, reason: "world-writable root" },
  { re: /(>\s*\/dev\/(sd|nvme|hd))|(\bdd\b[^\n]*of=\/dev\/(sd|nvme|hd))/i, reason: "raw disk write" },
];

const hit = rules.find((rule) => rule.re.test(command));
if (!hit) process.exit(0);

console.log(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: `Blocked by block-destructive hook: ${hit.reason}. A human must run this explicitly.`,
    },
  }),
);
