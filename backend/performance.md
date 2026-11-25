# Backend performance and capacity

- Define the user-facing bottleneck, representative workload, baseline and acceptable tradeoff. Profile before optimizing; distinguish service time, queueing, network, database and external dependency latency.
- Compare percentiles and throughput at known concurrency/data volumes, plus errors, memory, CPU and connection saturation. Avoid relying solely on averages or local microbenchmarks.
- Trace expensive queries and plans with representative cardinality; address unnecessary round trips, N+1 and unbounded results before adding caches or infrastructure. Respect [cache authorization](caching.md).
- Bound queues, pools, fan-out and retries; test overload and recovery with [resilience](../operations/resilience.md). Use profiling tools appropriate to the actual runtime.
- Reproduce the workload after the change and verify correctness, cost and regression tradeoffs. Do not declare a speedup without equivalent conditions and recorded evidence.
