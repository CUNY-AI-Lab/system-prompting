# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page HTML slide deck for a CUNY AI Lab Sandbox professional development workshop on composing AI system prompts. No build system, no dependencies — open `index.html` directly in a browser.

## Architecture

The presentation is a custom Reveal.js-style deck built without any framework.

**Entry point:** `index.html` — all 30 slides live here as `.slide` divs inside `#deck`. Slide content is the source of truth; `SLIDES.md` is a markdown mirror kept in sync manually after edits.

**JS modules** (loaded at bottom of `index.html` in this order):
- `js/tabs.js` — tab component (unused in current slides but loaded)
- `js/carousel.js` — auto-advancing image carousel (Slide 4)
- `js/scrubber.js` — scrubber timeline in the nav bar; exposes `updateScrubber(current, total)`
- `js/deck-engine.js` — core navigation engine; exposes `window.deckEngine`, `window.goTo`, `window.next`, `window.prev`

**CSS files:**
- `css/styles.css` — all layout, components, typography, and design tokens
- `css/responsive.css` — breakpoint overrides
- `css/animations.css` — transition/animation definitions

**Inline script** in `index.html` (before JS tags): `copyTemplate(id)` — clipboard copy for drafting station templates.

## Slide Layouts

Each slide uses one layout class:
- `layout-split` — two-column: `.content` (left, light) + `.stage` (right, panel)
- `layout-content` — single-column, light background
- `layout-full-dark` — centered, dark background (roadmap/model slides)
- `layout-divider` — section break, dark, centered large heading
- `layout-grid` — dark background with `.grid-2` card layout

## Progressive Reveal

Two mechanisms, both managed by `deck-engine.js`:

1. **Step reveal** — elements with `class="step-hidden" data-step` are revealed one at a time on each forward advance. Reset when leaving the slide.
2. **Stream bullets** — `<ul class="stream-list">` items animate in with staggered delay (200ms + 250ms per item) when the slide becomes active.

To hide content until clicked: add `step-hidden data-step` to the element (typically a `<ul>`). The heading above it should have no hidden classes — it stays visible.

## Conventions

- No em dashes (`—`) anywhere in slide content
- Tone lines belong as the last bullet under `Constraints:`, not as a separate section
- All three "good prompt" slides (10, 14, 18) follow: role/audience → blank line → core problem → Procedure → Framework → Constraints (tone as last bullet)
- Drafting station slides (21–25): template first, "Your turn" tip-box after
- `SLIDES.md` must be kept in sync with `index.html` after every content edit
- Commit messages: short, lowercase, no sign-off
