(() => {
  'use strict';
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const progress = document.getElementById('slide-progress');
  const announcer = document.getElementById('slide-announcer');
  const outline = document.getElementById('outline-dialog');
  const notes = document.getElementById('facilitator-notes');
  const notesButton = document.getElementById('notes-button');
  const outlineList = document.getElementById('outline-list');
  let current = 0;
  document.getElementById('nav-total').textContent = total;
  progress.max = total;
  const guidance = {
    "Explore": "Confirm approved access. Locate the message-box selector, More, Integrations, and Controls. The first workshop keeps Workspace for the midpoint. In later sessions, reopen the tested card and retain a baseline response.",
    "Compare": "Demonstrate the nurse question with two small models, then the car-wash question. Show the cropped GCDI comparison excerpts after the live introduction. Hand the car-wash task to participants. Ask them to save responses and identify assumptions before adding a follow-up. These are demonstrations, not a model ranking.",
    "Prompt": "Hold one base model fixed. Add the Assumption Check system prompt in chat and repeat the car-wash task. Revisit the nurse question to test a different form of ambiguity. Compare evidence and usefulness with the baseline.",
    "Workspace": "At the midpoint of workshop one, demonstrate Workspace and inspect the prepared Question & Assumption Check card. Participants arrive with individual access and Sandbox sign-in. Enable the arranged Workspace access during this exercise, refresh, and inspect the sample together. If access is delayed, continue in chat. Confirm Workspace and Knowledge access before workshop two. The screenshots show empty editors.",
    "Draft": "Choose one disciplinary progression to discuss; the other examples remain in the outline and full copy. Offer the research route alongside the teaching templates. Participants draft for one task and retain the source material needed to test it.",
    "Test": "Use the session lesson plan to compare baseline and revised responses. Check source passages, skill loading, and actual tool results as appropriate. Save failures as well as successes. Verify access through an ordinary participant account before sharing.",
    "Next": "Ask participants to support one conclusion with a saved test and identify an unresolved case. Carry the configuration and evidence to the next workshop. Use Series to move between the three sessions."
};
  slides.forEach((slide, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    const number = document.createElement('span');
    number.className = 'outline-number'; number.textContent = String(index + 1);
    const title = document.createElement('span'); title.textContent = slide.dataset.title;
    button.append(number, title);
    button.addEventListener('click', () => { goTo(index); outline.close(); document.getElementById('overview-button').focus(); });
    item.append(button); outlineList.append(item);
  });
  function readHash() {
    const match = location.hash.match(/^#(\d+)$/);
    return match ? Math.min(total - 1, Math.max(0, Number(match[1]) - 1)) : 0;
  }
  function goTo(index) {
    if (!Number.isInteger(index) || index < 0 || index >= total) return;
    const old = slides[current];
    if (old.contains(document.activeElement)) document.getElementById('arrow-next').focus();
    current = index;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.inert = i !== current;
      slide.setAttribute('aria-hidden', String(i !== current));
      if (i === current) slide.setAttribute('aria-current', 'step');
      else slide.removeAttribute('aria-current');
    });
    slides[current].scrollTop = 0;
    document.getElementById('nav-current').textContent = current + 1;
    progress.value = current + 1;
    progress.setAttribute('aria-valuetext', slides[current].getAttribute('aria-label'));
    document.getElementById('arrow-prev').disabled = current === 0;
    document.getElementById('arrow-next').disabled = current === total - 1;
    [...outlineList.querySelectorAll('button')].forEach((button, i) => {
      if (i === current) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    document.getElementById('note-text').textContent = [slides[current].querySelector('.slide-notes')?.innerText || slides[current].querySelector('.slide-notes')?.textContent || '', guidance[slides[current].dataset.group] || ''].filter(Boolean).join('\n\n');
    history.replaceState(null, '', '#' + (current + 1));
    announcer.textContent = slides[current].getAttribute('aria-label');
  }
  function openOutline() { outline.showModal(); outlineList.querySelector('[aria-current]').focus(); }
  document.getElementById('overview-button').addEventListener('click', openOutline);
  document.getElementById('close-outline').addEventListener('click', () => outline.close());
  document.getElementById('arrow-prev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('arrow-next').addEventListener('click', () => goTo(current + 1));
  progress.addEventListener('input', () => goTo(Number(progress.value) - 1));
  notesButton.addEventListener('click', () => { notes.hidden = !notes.hidden; notesButton.setAttribute('aria-pressed', String(!notes.hidden)); });
  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || document.querySelector('dialog[open]')) return;
    if (event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    if (event.key === 'Escape') { event.preventDefault(); if (!notes.hidden) notesButton.click(); else openOutline(); return; }
    if (event.target.closest('.prompt-block') && ['ArrowUp','ArrowDown',' ','Home','End'].includes(event.key)) return;
    if (event.target.closest('button,a') && [' ','Enter'].includes(event.key)) return;
    if (['ArrowRight','PageDown',' '].includes(event.key)) { event.preventDefault(); goTo(current + 1); }
    else if (['ArrowLeft','PageUp'].includes(event.key)) { event.preventDefault(); goTo(current - 1); }
    else if (event.key === 'Home') { event.preventDefault(); goTo(0); }
    else if (event.key === 'End') { event.preventDefault(); goTo(total - 1); }
  });
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const source = document.getElementById(button.dataset.copy);
      const label = button.textContent;
      try {
        if (!navigator.clipboard) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(source.textContent);
        button.textContent = 'Copied'; announcer.textContent = 'Prompt copied';
      } catch {
        const selection = window.getSelection(); const range = document.createRange();
        range.selectNodeContents(source); selection.removeAllRanges(); selection.addRange(range);
        button.textContent = 'Text selected'; announcer.textContent = 'Clipboard unavailable. Prompt selected; use your copy shortcut.';
      }
      setTimeout(() => { button.textContent = label; }, 2200);
    });
  });
  let start;
  document.getElementById('deck').addEventListener('touchstart', e => { start = e.touches.length === 1 ? [e.touches[0].clientX,e.touches[0].clientY] : null; }, {passive:true});
  document.getElementById('deck').addEventListener('touchend', e => {
    if (!start || document.querySelector('dialog[open]') || e.target.closest('.prompt-block,input,button,a')) return;
    const dx=e.changedTouches[0].clientX-start[0], dy=e.changedTouches[0].clientY-start[1];
    if (Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*2) goTo(current + (dx<0 ? 1 : -1));
    start=null;
  }, {passive:true});
  window.addEventListener('hashchange', () => {
    if (location.hash !== '#deck') goTo(readHash());
  });
  const series = document.getElementById('series-dialog');
  document.getElementById('series-button')?.addEventListener('click', () => series.showModal());
  document.getElementById('close-series')?.addEventListener('click', () => series.close());
  window.deckEngine = {goTo, currentSlide:()=>current, totalSlides:()=>total};
  goTo(readHash());
})();
