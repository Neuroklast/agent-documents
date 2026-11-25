---
name: ai-interaction-ux
description: Use for chat, assistants, streaming, suggestions, uncertainty, correction and user control.
---

# AI and conversational interface design

## Workflow and acceptance

- Define intent, supported capabilities, limitations, authority and change scope. Do not present the model as infallible or imply an action occurred without confirmation.
- Distinguish composing, generating, tool pending, completed, partial, interrupted and failed states. Offer cancel, retry or resume with clear effects; keep input usable where possible.
- Preserve context across navigation and refresh; show relevant provenance and uncertainty without exposing secrets or internal reasoning. Separate facts and suggestions.
- Allow correction, rejection, editing and undo where possible. Keep suggestions separate from authoritative state; allow custom inputs.
- Preview and appropriately confirm consequential external actions; use scoped permissions, validated tool contracts and server authorization. No silent repeated writes.
- Design fallback for unavailable, slow or wrong models. Manage accessible streaming announcements; support keyboard and text selection.
- Test invalid outputs, timeouts, dropped streams, tool failure, duplicate submissions, conflicts and recovery. Output interaction contract and failure matrix. See [model security](../../security/owasp-llm.md), [async UI](../async-ui/SKILL.md).

## References

- [Reference guidance](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/)
