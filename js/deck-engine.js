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
    Explore: 'Minutes 0–10. Confirm approved access before the workshop. Walk through the message box using an ordinary participant account. Keep Workspace for the midpoint exercise. Follow the published Getting Started guide; no API key is needed for this chat exercise.',
    Compare: 'Minutes 10–25. Choose two base models available to the whole group. Use the identical supplied task with matching context and optional features. Participants save responses, apply each criterion, and support judgments with a passage. Names and availability in screenshots are examples, not a current model inventory.',
    Prompt: 'Minutes 25–40. Keep one base model fixed. Use fresh chats to compare the original response with the same task plus the sample system prompt. Check personal or folder defaults that could carry additional instructions. Ask participants to test the request to rewrite the paragraph.',
    Workspace: 'Minutes 40–50. Coordinate Workspace permissions with the Lab in advance, then have the facilitator enable the agreed access at this point. Refresh after confirmation. Open the prepared Writing Scaffold: Claim & Evidence card. Inspect its tested base model and exact sample prompt. If access is delayed, pair with the facilitator and continue in-chat testing.',
    Draft: 'Minutes 50–70. Choose one disciplinary example; the other examples remain available in the outline. Keep the full prompts available as reading material. Participants draft one course-specific prompt through the five component stations and configure a private card. Do not edit the shared workshop sample.',
    Test: 'Minutes 70–85. Test normal, incomplete, and boundary-crossing requests. Save evidence before revising one instruction. Use a fresh chat after changing the configuration. Check the intended audience’s access to the card and base model before sharing with a course.',
    Next: 'Minutes 85–90. Ask each participant to name one successful behavior, one failure, and one next revision. Bring the prompt and base-model choice to Knowledge Collections. Point to the handout for all original examples and the evaluation worksheet.'
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
    document.getElementById('note-text').textContent = guidance[slides[current].dataset.group] || '';
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
  window.deckEngine = {goTo, currentSlide:()=>current, totalSlides:()=>total};
  goTo(readHash());
})();
