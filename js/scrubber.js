(function() {
  'use strict';

  var scrubberContainer, scrubberTrack, scrubberProgress, scrubberThumb, scrubberTooltip;
  var isDragging = false;

  function initScrubber() {
    scrubberContainer = document.getElementById('scrubber-container');
    scrubberTrack = document.querySelector('.scrubber-track');
    scrubberProgress = document.getElementById('scrubber-progress');
    scrubberThumb = document.querySelector('.scrubber-thumb');
    scrubberTooltip = document.getElementById('scrubber-tooltip');
    if (!scrubberContainer || !scrubberTrack) return;

    scrubberTrack.addEventListener('click', function(e) {
      if (isDragging) return;
      var rect = scrubberTrack.getBoundingClientRect();
      var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      var idx = Math.round(pct * (window.deckEngine.totalSlides() - 1));
      window.goTo(idx);
    });

    scrubberThumb.addEventListener('mousedown', startDrag);
    scrubberThumb.addEventListener('touchstart', startDrag, { passive: true });
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  }

  function startDrag(e) { isDragging = true; e.stopPropagation(); }
  function stopDrag() { isDragging = false; }

  function onDrag(e) {
    if (!isDragging || !scrubberTrack || !window.deckEngine) return;
    if (e.cancelable) e.preventDefault();
    var clientX = e.touches ? e.touches[0].clientX : e.clientX;
    var rect = scrubberTrack.getBoundingClientRect();
    var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    var idx = Math.round(pct * (window.deckEngine.totalSlides() - 1));
    window.goTo(idx);
  }

  function updateScrubber(current, total) {
    if (!scrubberProgress || !scrubberThumb) return;
    var pct = total > 1 ? (current / (total - 1)) * 100 : 0;
    scrubberProgress.style.width = pct + '%';
    scrubberThumb.style.left = pct + '%';
    if (scrubberTooltip) scrubberTooltip.textContent = 'Slide ' + (current + 1) + ' / ' + total;
  }

  window.initScrubber = initScrubber;
  window.updateScrubber = updateScrubber;

  document.addEventListener('DOMContentLoaded', initScrubber);
})();
