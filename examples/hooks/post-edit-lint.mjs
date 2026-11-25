#!/usr/bin/env node
// Optional Claude Code feedback hook. Configure a trusted executable and JSON argv.
import { spawnSync } from "node:child_process";
import { realpathSync, statSync } from "node:fs";
import { isAbsolute, relative, resolve, sep } from "node:path";
try {
  let data = "";
  for await (const chunk of process.stdin) data += chunk;
  const payload = JSON.parse(data || "{}");
  const name = payload.tool_name ?? payload.toolName;
  const file = payload.tool_input?.file_path ?? payload.toolInput?.filePath;
  const bin = process.env.POST_EDIT_LINT_BIN;
  if (!bin || !file || !["Edit", "Write"].includes(name)) process.exit(0);
  const root = realpathSync(process.env.CLAUDE_PROJECT_DIR || process.cwd());
  const target = realpathSync(resolve(root, file));
  const rel = relative(root, target);
  if (!rel || rel === ".." || rel.startsWith(".." + sep) || isAbsolute(rel) || !statSync(target).isFile()) throw new Error("Edited file is outside project or not a regular file");
  const args = JSON.parse(process.env.POST_EDIT_LINT_ARGS || "[]");
  if (!Array.isArray(args) || args.some(arg => typeof arg !== "string")) throw new Error("POST_EDIT_LINT_ARGS must be a JSON string array");
  const result = spawnSync(bin, [...args, "--", target], {cwd:root, stdio:"inherit", shell:false, timeout:30000});
  if (result.error || result.status !== 0) throw new Error("Configured linter failed: " + (result.error?.message || result.status));
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
