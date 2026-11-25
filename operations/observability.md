# Observability

Use for diagnosing or designing production signals. [OpenTelemetry concepts](https://opentelemetry.io/docs/concepts/) are a reference, not a required dependency.

- Start from user journeys and failure modes. Define meaningful service indicators (availability, latency, correctness, saturation) and objectives when warranted; distinguish internal objectives from contractual commitments.
- Use structured logs, metrics and traces where they answer a question; correlate through safe request/trace IDs and revision/environment metadata. Avoid unbounded labels, high-cardinality secrets and payload dumps.
- Track dependency failures, queue age, retry exhaustion, resource saturation and business invariants where relevant. Sample deliberately; preserve sufficient error evidence within retention rules.
- Alert on actionable symptoms and meaningful thresholds; attach runbooks and owners. Avoid duplicate noise and alerts without recovery actions.
- Exercise a controlled failure and confirm signals, correlation, privacy redaction and alert routing. Report gaps, cost/cardinality and retention decisions.
