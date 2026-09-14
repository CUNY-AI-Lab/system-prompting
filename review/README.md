# Workshop revision record

## Complete before and after

- [Before: copy extracted from the original index.html](before.md)
- [After: complete revised slide text](../SLIDES.md)
- [Direct textual diff](copy.diff)
- [Preserved original prompt blocks](preserved-prompts.json)
- [Complete original sections and explicit allowed edits](preserved-copy.json)
- [Screenshot sources and hashes](screenshot-sources.json)

The original HTML at commit `6e66d3b` is the baseline. Its Markdown mirror was already stale: it described SOAPS in the History example while the actual slides used Wineburg’s four historical thinking heuristics. This revision preserves the HTML’s Wineburg wording and generates the mirror from HTML to prevent that drift.

## What changed, and why

The opening now teaches access, the message-box model selector, basic chat actions, comparison with explicit criteria, and in-chat system prompting before introducing Workspace at the timed midpoint. The final exercises cover private configuration, repeatable testing, student access, and the transition to the next two workshops.

Substantive prompt examples and the five drafting templates remain. The strong Literature prompt has one recorded correction: “the work’s larger themes and cultural moment” becomes “the work’s larger themes,” matching its existing instruction to bracket historical context during close reading. No other original prompt block is rewritten. The checker verifies all 14 prompt blocks and the full copy of all 23 retained sections against the saved baseline, allowing only recorded edits and layout whitespace.

The obsolete March schedule is replaced with the three-session sequence without inventing new dates. The static model catalog and multilingual model-count claim are replaced with instructions to inspect current access and test the required languages. The blanket external-retention statement is replaced with the published docs’ distinction between provider requests and stored Sandbox history. “The user never sees it” is removed as an absolute claim about system prompts. Old gear/Create labels and screenshots are replaced with current controls.

The word-count rule about a 2,000-word prompt is replaced with guidance to prioritize instructions and test conflicts. The original teaching examples remain illustrative rather than verified generated outputs; the new comparison exercise uses saved live responses produced by participants instead of treating invented responses as evidence.

## Design and interaction

Neutral dark surfaces, readable body text, restrained headings, consistent spacing, and no remote font dependency replace the blue theme. The initially oversized concept title was rejected by the user and reduced substantially in the implementation. Screenshot crops retain the original interface pixels, including the platform’s own accent colors; slide styling does not recolor evidence.

All teaching copy appears without timed reveals. An accessible outline replaces the scaled slide overview. Images open in a modal with keyboard focus handling. Long original prompts remain complete in scrollable desktop panels and expand vertically on mobile and in print. Copy controls include failure handling. Notes and the outline make the 45-slide resource practical for a 90-minute workshop with one selected disciplinary example.

No production card, permission change, or model test was performed by this revision. The pre-session steps and fallback for delayed Workspace access are explicit in the facilitator guide.
