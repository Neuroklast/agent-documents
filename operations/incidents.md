# Incident operations

Use [incident response](../skills/incident-response/SKILL.md) for active incidents. This topic owns incident evidence and recovery decisions.

- Establish incident severity by actual user impact, data exposure and recovery constraints. Identify authority, coordinator and communication channel; use UTC timestamps and factual statements.
- Capture revision, environment, recent changes, affected flows, redacted signals and hypothesis outcomes. Preserve evidence according to policy; never copy private payloads or credentials into public reports.
- Stabilize first: choose an authorized reversible mitigation and define stop/recovery criteria. Avoid parallel uncontrolled changes and permanent fixes while evidence is unclear.
- If data integrity or privacy is at risk, involve appropriate owners and applicable reporting process. Do not invent legal deadlines.
- Verify restoration via critical journeys, metrics and invariants; record residual risk and recurrence window. Conduct a blameless review of contributing system conditions, owned corrective actions and verification dates.
