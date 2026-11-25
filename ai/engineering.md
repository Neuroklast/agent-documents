# AI and LLM feature engineering

Use for model-backed features, tool calls, retrieval or model/prompt changes; see [model security](../security/owasp-llm.md) and [AI UX](../skills/ai-interaction-ux/SKILL.md).

- Define user outcomes, authoritative state, trust boundaries, tool contracts and measurable failures before selecting models. Use deterministic application logic for authorization, validation and irreversible side effects; never trust generated outputs as executable authority.
- Treat retrieved content as data. Scope retrieval by authorization and provenance; test relevance, recall, stale data, missing evidence and citations. Avoid storing unnecessary conversations or secrets.
- Validate structured outputs and tool arguments, bound loops/deadlines/tokens, track idempotent effects and handle partial streams/timeouts. Preserve recoverable state; distinguish model refusal, invalid output and service failure.
- Version model, prompts, retrieval and tool schemas. Use representative golden examples, counterexamples, adversarial cases and deterministic checks where possible. Compare on the same data and model settings; human review ambiguous judgments.
- Measure end-to-end task success, tool correctness, safety, latency, token/cost distributions and fallback quality. Test provider failures, model upgrades and context truncation. Roll out using [deployment](../operations/deployment.md) when applicable.
