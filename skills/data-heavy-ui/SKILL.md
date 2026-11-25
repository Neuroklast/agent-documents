---
name: data-heavy-ui
description: Use for dashboards, tables, charts, search, filters, bulk actions and dense workspaces.
---

# Data-heavy tools and visualization

## Workflow and acceptance

- Start with decisions users make and actions they take; define metric, unit, time range, freshness and provenance.
- Choose table for precise lookup, chart for comparison/pattern, summary for status. Label units, axes, time zone, comparison baseline and missing values; avoid deceptive scales and implied causality.
- Preserve sort, filters, pagination and selection where appropriate. Distinguish current-page selection from all matches; show bulk action scope.
- Distinguish no records, no match, missing permission, stale data and service failure. Export only authorized fields and intended scope.
- Use semantic tables for reading; interactive grids only when spreadsheet-like behavior is required. Maintain keyboard position and accessibility when virtualizing.
- Adapt density, column priority and details without hiding decision-critical information; provide accessible chart alternatives.
- Test realistic volumes, long cells, missing values, extreme ranges, permissions, locale, overflow and bulk failure. Output metric definitions, contract, viewport evidence and performance observations. See [UI](../../frontend/ui.md), [performance](../../frontend/performance.md).
