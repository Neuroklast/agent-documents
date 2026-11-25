# Security for model-driven applications

Use this document when a model can read private data, retrieve documents, call tools or produce output that another system executes.

## Follow the data

Identify what information enters the model, where it is stored, who can retrieve it and which outputs reach users or tools. Treat retrieved content, messages and generated text as data, not as authority. Do not reveal credentials, private instructions or unrelated personal data.

## Control actions

Check authorization at the tool boundary using trusted identity and validated parameters. Give agents only the permissions they need. Require appropriate approval for consequential actions. Never rely on model text alone to enforce access controls. Log relevant actions without collecting secrets.

## Control dependencies and execution

Review external tools, skills, model artifacts and retrieval sources before enabling them. Separate tenants and trust levels in storage and retrieval. Validate generated data before passing it to a shell, database, template or another interpreter. Bound retries, context, runtime and expenditure.

## Verify behavior

Test attempted instruction overrides, unauthorized retrieval and writes, malformed output, excessive requests and service failures. Distinguish observed results from model assurances. Report uncertainty and residual risks.

For an external risk taxonomy, consult the current [OWASP GenAI Security Project](https://genai.owasp.org/llm-top-10/). This document is independently organized project guidance, not a reproduction of that taxonomy or a certification.
