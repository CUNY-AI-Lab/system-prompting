# Workshop editing guidance

Use the frontend-design skill for changes to typography, layout, or visual treatment. Keep the neutral dark design and restrained heading scale. Do not add Co-Authored-By commit lines.

## Source and architecture

This is Workshop 1 of the CUNY AI Lab Sandbox series: system prompts → knowledge collections → skills and tools. It is a static HTML presentation with no runtime dependencies.

- `index.html` contains all 45 `.slide` elements and is the copy source of truth.
- `SLIDES.md` is generated from HTML by `python3 scripts/check_workshop.py --write`.
- `WORKSHOP.md` contains the facilitation plan, sample setup, and evaluation worksheet.
- `js/deck-engine.js` handles keyboard, buttons, range navigation, outline, notes, and clipboard behavior.
- `js/lightbox.js` expands real screenshots in a native dialog.
- `css/styles.css`, `css/responsive.css`, and `css/animations.css` contain the visual system, responsive and print rules, and reduced-motion treatment.
- The old `tabs.js`, `carousel.js`, and `scrubber.js` are retained as historical files but are not loaded.

## Copy and evidence

Preserve the original instructional examples and exact sample files. `review/preserved-prompts.json` stores the original prompt blocks. The checker allows only the documented Literature correction that removes the cultural-moment requirement from the close-reading procedure. History uses Wineburg’s sourcing, contextualization, close reading, and corroboration, not SOAPS.

For revisions, keep complete before/after text and a direct diff. `review/before.md` records the original HTML copy, and `review/copy.diff` compares it with the current generated mirror. Do not replace the baseline with the stale original Markdown file.

Use the published `https://ailab.gc.cuny.edu/sandbox-docs/` as the documentation source. Inspect live controls when updating interface labels. Keep screenshots authentic and record origins, crops, and hashes in `review/screenshot-sources.json`; never substitute generated UI for a source capture.

Frame the instructor as the designer of an instructional tool. Do not promise that system prompts guarantee behavior or securely hide information. Keep individual access, course enrollment, Workspace authoring, shared-card use, and base-model availability distinct.

The facilitator enables the arranged Workspace permission at the midpoint and prepares the live sample before the session. Editing or viewing this deck does not perform those production actions.

## Verification

Run the content checker, JavaScript syntax checks, and browser checks after changes. Confirm sequential slide labels, exact clipboard text, outline navigation, keyboard focus, image dialogs, and mobile scrolling. Preserve full original prompts rather than shrinking them to unreadable text. On desktop those prompts scroll within the slide; on mobile and in print they expand.
