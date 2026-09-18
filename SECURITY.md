# Security Policy

This repository is a portable governance collection (markdown). It ships no
runtime code and no deployed service. The agent-facing security contracts live
in [`security/`](security/security.md).

## Reporting a vulnerability

- Report privately via GitHub Security Advisories ("Report a vulnerability" on
  the repository). Do not open a public issue.
- Include: affected file/path, impact, reproduction, suggested fix.
- We acknowledge within ~72 h and do not disclose details before a fix ships.

## Scope

- A wrong or unsafe rule is treated like a bug: open an issue with the affected
  file and a concrete correction.
- If a secret was committed: report privately; rotation happens before any
  history cleanup (human approval required).

## Baseline

- [security/security.md](security/security.md) — secrets, least privilege, hardening, residual risk.
- [security/web-api.md](security/web-api.md) — XSS, CSRF, SSRF, headers, uploads, rate limits.
- [security/owasp-llm.md](security/owasp-llm.md) — OWASP LLM Top 10 agent rules.
