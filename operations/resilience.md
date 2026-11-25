# Resilience and recovery

- Identify critical dependencies, failure domains, data owners, availability objectives, recovery time objective (RTO) and recovery point objective (RPO) when applicable. Do not invent targets.
- Bound deadlines, concurrency, queues and retries; replay only safe operations (see [integrations](../backend/integrations.md)). Apply backpressure, isolation and graceful degradation according to measured risks, not pattern quotas.
- Document backup scope, encryption, retention, access and restore procedure. Verify recovery using isolated restores; compare actual data loss and recovery duration to objectives. Include configuration and credentials recovery without exposing secrets.
- Test representative dependency outage, partial failure, retry storm and recovery. Define compatibility of rollback artifacts and schema, and forward repair for irreversible actions.
- Keep runbooks proportional to service criticality. Record test date, scope, observed RTO/RPO and unresolved gaps; existence of a backup or failover configuration is not recovery evidence.
