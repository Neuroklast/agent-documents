# Security Policy

This repository ships Markdown guidance and optional local Node.js tooling, not a deployed service. The scripts and host configuration require review before use; hooks and instructions are not security boundaries. The agent-facing security contracts live
in [`security/`](security/security.md).

## Reporting a vulnerability

- Report privately via GitHub Security Advisories ("Report a vulnerability" on
  the repository). Do not open a public issue.
- Include: affected file/path, impact, reproduction, suggested fix.
- We acknowledge within ~72 h and do not disclose details before a fix ships.

## Scope

- Report exploitable defects privately; use public issues only for non-sensitive documentation corrections.
- If a secret was committed: report privately; rotation happens before any
  history cleanup (human approval required).

## Baseline

- [security/security.md](security/security.md) — secrets, least privilege, hardening, residual risk.
- [security/web-api.md](security/web-api.md) — XSS, CSRF, SSRF, headers, uploads, rate limits.
- [security/owasp-llm.md](security/owasp-llm.md) — Independent model-application security guidance.
