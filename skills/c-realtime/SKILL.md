---
name: c-realtime
description: Realtime and safety-critical C/C++ rules for audio DSP, embedded, firmware, and plugin code. Use when a task touches .c/.h/.cpp realtime callbacks, DSP, project-specific safety constraints, plugin state, or native build/CI. Not for host tools, build helpers, or scripts in a web repo.
---

# Skill — C / C++ / Realtime

## Scope gate

If the task is not safety-critical/realtime: close this skill and use normal coding rules.

## Realtime invariants (audio/embedded)

- NEVER allocate/free/lock/log/copy strings in the realtime callback or anything it calls.
- ALWAYS prepare sizes and buffers in the prepare/init phase.
- Control-rate updates for coefficients; per-sample only with proof.
- Cross-thread state: atomics, SPSC rings, POD events. No raw shared pointers.
- Define a bounded overload/failure behavior that preserves the product's safety and signal contract. Do not assume silence, bypass or a stale sample is universally safe.
- Retire/replace objects on the message thread, not the audio thread.

## C constraints for high-reliability code

- For constrained embedded systems, define allocation phases from timing and memory requirements; avoid runtime allocation where bounded latency is required.
- Use explicit braces for control-flow bodies.
- Handle unexpected switch values explicitly and document intentional fallthrough or early exits.
- NEVER unchecked `strcpy`/`sprintf`/`gets` — bounded variants.
- NEVER unchecked integer overflow in sizes/indices.
- NEVER recursion in hard-realtime paths.
- For a required project safety rule, stop and write a deviation record ([../../templates/deviation-record.md](../../templates/deviation-record.md)). Never self-approve. For regulated or safety-critical products, follow the actual applicable standard and qualified review process; this skill is not a substitute for it.

## State & lifecycle

- Per-instance state vs machine-wide prefs strictly separated; restore must not overwrite global prefs.
- Validate persisted state (offsets/lengths/enums) strictly on load.
- For audio, define state transitions and reset behavior; prevent discontinuities where required by the signal contract.
- For audio plugins, report actual processing latency and verify alignment of dry/wet/bypass paths where the host contract requires it.

## Tests

- Contract test first: one named contract, smallest failing reproduction.
- Test runners return a nonzero exit status when tests fail.
- Geometry/layout contracts use numeric dumps, not golden PNGs.
- Source-contract tests for realtime anti-patterns (allocation probes, forbidden calls).

## Build & CI

- Reconfigure on every local build; generated sources excluded from globs.
- One version string across build system/installer/runtime.
- LTO on product targets only; no global fast-math.
- Native CI: matrix builds, pinned validator versions, manual dispatch for expensive gates.
