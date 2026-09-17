# Stack — C++ / CMake / JUCE

Load for: native audio/plugin/desktop repos. Realtime rules: [../skills/c-realtime/SKILL.md](../skills/c-realtime/SKILL.md).

## Build

- CMake ≥ 3.15 (headless test project may need newer); JUCE pinned via FetchContent or `JUCE_DIR`.
- Reconfigure on every local build; never trust stale caches.
- One-click scripts reconfigure + build the same tree; version label must match CMake.
- Generated/embedded sources excluded from source globs to avoid rebuild loops.
- LTO on product targets only; never global fast-math. `/utf-8` on MSVC for string literals.
- One version string across CMake/plugin metadata/installer/packaging; never bump during unrelated work.

## Plugin formats

- Standalone + VST3 everywhere; AU macOS-only with sandbox-safe settings.
- AU that needs MIDI must use the music-effect type; never set channel configs that kill sidechain.
- JIT only where allowed (e.g. Windows x64); interpreter fallback for sandboxed formats.
- `moduleinfo.json`-style metadata written by a target that always runs (POST_BUILD), not only on source change.

## Architecture

- Processor owns DSP + the embedded webview; editor must not destroy them.
- Split responsibilities: parsing, DSP, presets, params, licensing — no god class.
- Per-instance user-data folders for embedded browsers.
- Keyboard: intercept + forward non-text keys to the host.
- Parameter changes queue atomic requests; persistence happens on the message thread.
- State: per-instance vs machine-wide prefs strictly separated.

## DSP

- True-peak brickwall as peak safety; one sanitizer owns residual policy.
- Latency timeline: dry sidechain equals wet latency; bypass compensates by reported latency.
- Coefficient updates control-rate; prepared storage, no runtime allocation.
- Hard clip/fold stages followed by low-pass (documented, test-enforced rule).

## Tests

- Contract-first: name the contract, smallest failing reproduction, then fix.
- Test runner returns failure count as exit code; `ctest` green is worthless if internal failures are swallowed.
- Geometry/layout contracts: numeric dumps, not golden PNGs.
- Source-contract scripts scan for forbidden realtime patterns.
- Full suite before a user-facing binary; focused tests during development.

## CI

- Matrix: Linux/Windows/macOS (universal); ccache where available.
- Expensive native gates on manual dispatch/release checkpoints, not every push.
- Pinned external validators (pluginval etc.); ad-hoc codesign before AU validation.
- Upload failure logs/artifacts.

## Packaging

- Installer (Inno Setup or equivalent) includes exact commit + SHA-256 (`BUILD.json`).
- Signing keys/license issuers NEVER shipped in packages.
- Release notes state the signing/notarization result per platform (signed/notarized/neither).
