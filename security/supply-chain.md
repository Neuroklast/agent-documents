# Dependency and build supply chain

Use before adding/updating/removing dependencies, build actions, plugins or externally sourced artifacts. See [licensing](../legal/licensing.md) and [security](security.md).

- Establish need; prefer existing supported code and standard library. Verify package identity, authoritative registry/source, maintainers, release integrity, supported versions, license and transitive footprint. Treat unknown scripts, skills, plugins and build artifacts as untrusted.
- Use the project's lockfile and reproducible install mode where available. Review direct/transitive diffs, install hooks, permissions and network access. Pin build actions/artifacts to verified immutable identifiers where supported.
- Evaluate advisories against affected version, reachable behavior, exposure and fix availability. Do not suppress findings just to pass checks; document owner, mitigation and expiry for accepted risks.
- For applicable releases, generate and retain dependency inventory/SBOM (SPDX or CycloneDX), build provenance and attestations using existing tools; verify against intended identity and artifact digest. No claim of certification from a file alone.
- Test behavior, compatibility, build and rollback after updates; remove dead dependencies and regenerate lockfiles through the package manager. Record why changes are needed and who owns follow-up.

References: [NIST SSDF](https://csrc.nist.gov/Projects/ssdf), [SLSA](https://slsa.dev/spec/v1.2/), [SPDX](https://spdx.dev/use/specifications/), [CycloneDX](https://cyclonedx.org/specification/overview/).
