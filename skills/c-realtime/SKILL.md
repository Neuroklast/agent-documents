---
name: c-realtime
description: Realtime and safety-critical C/C++ rules for audio DSP, embedded, firmware, and plugin code. Use when a task touches .c/.h/.cpp realtime callbacks, DSP, MISRA C invariants, plugin state, or native build/CI. Not for host tools, build helpers, or scripts in a web repo.
---

# Skill — C / C++ / Realtime

## Scope gate

If the task is not safety-critical/realtime: close this skill and use normal coding rules.

## Realtime invariants (audio/embedded)

- NEVER allocate/free/lock/log/copy strings in the realtime callback or anything it calls.
- ALWAYS prepare sizes and buffers in the prepare/init phase.
- Control-rate updates for coefficients; per-sample only with proof.
- Cross-thread state: atomics, SPSC rings, POD events. No raw shared pointers.
- Lock-miss/overload policy: last wet frame or silence — NEVER raw input.
- Retire/replace objects on the message thread, not the audio thread.

## Safety-critical C invariants

- MUST NOT `malloc`/`calloc`/`realloc`/`free` outside one startup phase (embedded).
- ALWAYS braces on `if`/`else`/`while`/`for`/`switch` (MISRA C 15.6).
- ALWAYS `switch` with `default` (16.4) unless a deviation record exists; every non-empty case ends with `break` (16.3).
- NEVER unchecked `strcpy`/`sprintf`/`gets` — bounded variants.
- NEVER unchecked integer overflow in sizes/indices.
- NEVER recursion in hard-realtime paths.
- Rule violation → STOP and write a deviation record ([../../templates/deviation-record.md](../../templates/deviation-record.md)). NEVER self-approve.

## State & lifecycle

- Per-instance state vs machine-wide prefs strictly separated; restore must not overwrite global prefs.
- Validate persisted state (offsets/lengths/enums) strictly on load.
- Reset DSP/oversampling/rings on sleep/wake/non-realtime transitions with a short fade.
- Report latency of the longest audible path; bypass compensates dry by reported latency.

## Tests

- Contract test first: one named contract, smallest failing reproduction.
- Test runners return failure counts as exit codes.
- Geometry/layout contracts use numeric dumps, not golden PNGs.
- Source-contract tests for realtime anti-patterns (allocation probes, forbidden calls).

## Build & CI

- Reconfigure on every local build; generated sources excluded from globs.
- One version string across build system/installer/runtime.
- LTO on product targets only; no global fast-math.
- Native CI: matrix builds, pinned validator versions, manual dispatch for expensive gates.
