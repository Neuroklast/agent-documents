# Checklist — Release

## Versioning (SemVer)

- MAJOR: breaking changes (API, data model, behavior contracts).
- MINOR: backward-compatible features.
- PATCH: backward-compatible fixes.
- Identify the project's authoritative version and its actual mirrors, which may include a manifest, changelog, runtime metadata or installer labels.

## Ritual

1. [ ] Land all changes on `main`; working tree clean.
2. [ ] Cut changelog: move `[Unreleased]` → `[X.Y.Z] - YYYY-MM-DD`; add compare links.
3. [ ] Bump version in the manifest (script preferred over manual edits).
4. [ ] Update applicable release metadata and version mirrors; verify consistency.
5. [ ] Run full checks on the release commit (all gates + E2E).
6. [ ] Annotated tag `vX.Y.Z`; push tag.
7. [ ] Optional: create the platform release (GitHub Release) with the changelog body.
8. [ ] For an authorized deployment, verify its revision and smoke-test critical flows.
9. [ ] When operational monitoring is in scope, review available post-release evidence; record any monitoring handoff.

## Release notes content

- User-visible changes first; breaking changes flagged at top.
- Security fixes without exploit details.
- Known issues listed with impact and workaround; no unlisted known breakage.
- Migration/action required for operators (env vars, DB steps) listed explicitly.

## Database / infrastructure

- [ ] If schema changes and deployment are in scope, verify the approved migration sequence and compatibility.
- [ ] New env vars documented and set in all environments.
- [ ] Backups taken before destructive-capable steps (human approval).
- [ ] Rollback path known (previous tag, previous schema is forward-compatible).

## Definition of done

- [ ] Tag exists and points at the release commit.
- [ ] Required release notes and metadata agree with the release identifier.
- [ ] Deployment verified when a deployment is in scope and authorized.
- [ ] No open P0 incidents from this release.

## NEVER

- Bump versions as a side effect of unrelated commits.
- Omit release documentation required by the project's existing release policy.
- Force-push or move a published tag.
