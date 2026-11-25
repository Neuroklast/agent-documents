# Stack — C++ / CMake / JUCE

Load for: native audio/plugin/desktop repos. Realtime rules: [../skills/c-realtime/SKILL.md](../skills/c-realtime/SKILL.md).

## Build

- Use the project's declared CMake requirement and pinned JUCE dependency method.
- Reconfigure on every local build; never trust stale caches.
- One-click scripts reconfigure + build the same tree; version label must match CMake.
- Generated/embedded sources excluded from source globs to avoid rebuild loops.
- LTO on product targets only; never global fast-math. `/utf-8` on MSVC for string literals.
- One version string across CMake/plugin metadata/installer/packaging; never bump during unrelated work.

## Plugin formats

- Build only the plugin and application formats in the supported target matrix. Validate host and sandbox constraints per format.
- Choose AU component type, MIDI capabilities and bus layouts according to the actual instrument/effect contract and host compatibility.
- JIT only where allowed (e.g. Windows x64); interpreter fallback for sandboxed formats.
- `moduleinfo.json`-style metadata written by a target that always runs (POST_BUILD), not only on source change.

## Architecture

- Keep DSP state independent of editor lifetime. If using an embedded webview, assign ownership explicitly according to its lifecycle and platform requirements.
- Split responsibilities: parsing, DSP, presets, params, licensing — no god class.
- Per-instance user-data folders for embedded browsers.
- Keyboard: intercept + forward non-text keys to the host.
- Parameter changes queue atomic requests; persistence happens on the message thread.
- State: per-instance vs machine-wide prefs strictly separated.

## DSP

- Add peak limiting or sanitization only when required by the processor's intended behavior. Verify its signal and latency effects.
- Latency timeline: dry sidechain equals wet latency; bypass compensates by reported latency.
- Coefficient updates control-rate; prepared storage, no runtime allocation.
- Evaluate nonlinear processing for aliasing and choose oversampling or filtering based on measured behavior and sound requirements.

## Tests

- Contract-first: name the contract, smallest failing reproduction, then fix.
- Test runner returns nonzero on failure; `ctest` green is worthless if internal failures are swallowed.
- Geometry/layout contracts: numeric dumps, not golden PNGs.
- Source-contract scripts scan for forbidden realtime patterns.
- Full suite before a user-facing binary; focused tests during development.

## CI

- Build and test the platforms and architectures the product supports; use caching where compatible.
- Expensive native gates on manual dispatch/release checkpoints, not every push.
- Pinned external validators (pluginval etc.); ad-hoc codesign before AU validation.
- Upload failure logs/artifacts.

## Packaging

- If packaging installers, include traceable build metadata and checksums in the project's chosen format.
- Signing keys/license issuers NEVER shipped in packages.
- Release notes state the signing/notarization result per platform (signed/notarized/neither).
