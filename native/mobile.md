# Mobile and native products

Use when the project actually targets mobile or native desktop. Verify platform versions, build/signing tools, device support and distribution policy before choosing adapters.

- Respect OS lifecycle, background execution, permission prompts, storage and network behavior. Handle suspension, offline state, cancellation, process recreation and constrained memory.
- Validate responsive layouts, platform accessibility, input methods, localization and system theme; use device/emulator tests appropriate to the target.
- Keep secrets out of binaries; signing and release credentials remain in authorized secure tooling. Verify platform-specific privacy requirements and dependency compatibility.
- Measure startup, memory, battery/CPU and responsiveness on representative devices; distinguish simulator from device evidence. For realtime C/C++ use [realtime](../skills/c-realtime/SKILL.md).
