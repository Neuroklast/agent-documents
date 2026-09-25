---
name: adopt-into-project
description: Adopt this collection into a new or existing project. Use when creating a project, copying agent-docs, customizing AGENTS.md, pruning stack adapters, or installing GitHub issue templates. Interviews for stack, checks, legal, and templates; never invents manifest facts.
---

# Skill — Adopt Into Project

Copy or wire this collection into a target repo, then adapt it. Do not skip the interview.

## Steps

1. **Target** — path; copy vs submodule vs already present. Reuse needs permission ([../../README.md](../../README.md) §License).
2. **Detect** — read manifests (`package.json`, lockfiles, `Cargo.toml`, `go.mod`, `pyproject.toml`, `CMakeLists.txt`, `Makefile`, CI). Record package manager, scripts, stack. NEVER invent.
3. **Interview** — ask only what files do not answer (table below).
4. **Write** — target root `AGENTS.md` points at the collection; **Project facts** + real check commands; router lists only files that exist.
5. **Prune (copy)** — delete unused `stack/*` and their routing rows. Drop `legal/` unless a public DE/EU surface. Drop unused skills from the copy.
6. **Prune (submodule)** — do not edit the submodule. Target root `AGENTS.md` simply omits unused adapters.
7. **GitHub (optional)** — if the project uses GitHub Issues, copy the chosen files from [../../.github/ISSUE_TEMPLATE/](../../.github/ISSUE_TEMPLATE/) to the target `.github/ISSUE_TEMPLATE/`. Rewrite `config.yml` security URL to that repo's Security Advisories. Copy the PR template if missing. Labels: `bug`, `enhancement`, `task`, `docs`.
8. **Tools (optional, asked)** — `opencode.json`, `CLAUDE.md`, `GEMINI.md`, copilot pointer; `node scripts/install-skills.mjs <target>`.
9. **Report** — adapted paths, deleted paths, blanks the human must still fill.

## Interview

| Topic | Ask if unknown |
| --- | --- |
| Adapters | Keep Next.js, Supabase, R2/S3, TypeScript, C++/JUCE? |
| Checks | Confirm lint / types / test / build from the manifest |
| Legal | Public DE/EU surface? |
| Auth | Auth / roles in this project? |
| Deploy | Deploy target |
| Issues | GitHub Issues? Copy bug / feature / task / docs? |
| Tools | opencode / Claude / Gemini / Copilot pointers? |
| Skills | Run `install-skills.mjs`? |
| Monorepo | Nested `AGENTS.md` per package? |
| Facts | One-liner for Project facts |

## Project facts (target root `AGENTS.md`)

- Stack:
- Package manager:
- Check commands:
- Deploy target:

## NEVER

- Invent check commands, versions, operator data, or legal text
- Copy unused stack adapters or `legal/` "just in case"
- Add a public security issue template
- Deploy, rotate secrets, or force-push
- Grow the target `AGENTS.md` into an encyclopedia

## Done

- [ ] Root `AGENTS.md` routes to the collection and has Project facts from manifests
- [ ] Unused stack/legal/skills removed from a **copy** (submodule: omitted in the router only)
- [ ] Issue templates copied only if requested; security URL rewritten
- [ ] Remaining blanks named in the report
