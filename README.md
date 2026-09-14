# Composing System Prompts

Workshop 1 of the CUNY AI Lab Sandbox series. A scaffolded introduction to chat, model comparison, system prompting, and Workspace models.

- [Facilitator outline and exercises](WORKSHOP.md)
- [Complete slide text](SLIDES.md)
- [Sample system prompt](examples/writing-scaffold.txt)
- [Comparison task](examples/comparison-task.txt)
- [Revision record](review/README.md)

Open `index.html` directly, or run `python3 -m http.server 8765 --bind 127.0.0.1` and visit `http://127.0.0.1:8765/`. No build step or runtime dependencies.

Use the arrows, Left/Right keys, or progress slider to navigate. **Outline** (or Escape) jumps to any slide. **Notes** shows facilitator guidance. Select a screenshot to expand it. Copy buttons copy the exact prompt text; if clipboard access is unavailable, the text is selected for manual copying. On small screens, content scrolls vertically. Print includes all slides and full prompt text.

## Editing and verification

`index.html` is the source of truth. After editing:

```sh
python3 scripts/check_workshop.py --write
python3 scripts/check_workshop.py
node --check js/deck-engine.js
node --check js/lightbox.js
```

The content check verifies preservation of all 23 retained sections and their 14 prompt blocks, the one documented Literature correction, sample files, slide labels, local links, the generated Markdown mirror, and the direct copy diff. It uses only the Python standard library.

The live workshop requires a facilitator to arrange access, prepare the sample card, and verify the selected base models as described in [WORKSHOP.md](WORKSHOP.md). The repository does not automate production account or Workspace changes.
