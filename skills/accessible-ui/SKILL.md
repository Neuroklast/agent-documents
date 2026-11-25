---
name: accessible-ui
description: Use for wCAG, semantics, keyboard, assistive technology and accessibility audit.
---

# Inclusive and accessible interaction

## Workflow and acceptance

- Determine platform and applicable requirements; follow [accessibility baseline](../../frontend/accessibility.md) and relevant [legal guidance](../../legal/compliance-de.md).
- Inventory critical journeys, landmarks, headings, names, roles, values, focus and live updates. Prefer native controls; ARIA alone does not provide behavior.
- For complex widgets choose the relevant APG pattern; specify keyboard interaction and verify with real assistive technology.
- Check labels, errors, contrast, non-color cues, zoom/reflow, target size, alternatives to drag, accessible authentication, visible unobscured focus and motion preferences.
- Test keyboard, representative screen reader/browser combinations, automated checks, forced colors and text enlargement. Automated checks alone cannot establish conformance.
- Include alternate states, full processes, third-party controls and embedded content. Record criterion, impact, reproduction, fix and retest; distinguish not tested from passed.
- Output prioritized evidence and verification matrix; do not claim certification or legal compliance from a tool score.

## References

- [Reference guidance](https://www.w3.org/TR/WCAG22/)
- [Reference guidance](https://www.w3.org/WAI/ARIA/apg/)
