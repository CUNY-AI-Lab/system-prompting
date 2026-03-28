/* lightbox.js — click-to-expand for screenshots and carousel images */
(function () {
  var overlay = document.getElementById('lightbox');
  if (!overlay) return;

  var img = overlay.querySelector('img');
  var caption = overlay.querySelector('.lightbox-caption');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var triggerEl = null;

  function open(src, alt, captionText, trigger) {
    img.src = src;
    img.alt = alt || '';
    caption.textContent = captionText || '';
    caption.style.display = captionText ? '' : 'none';
    triggerEl = trigger || null;
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  }

  function close() {
    overlay.setAttribute('aria-hidden', 'true');
    img.src = '';
    if (triggerEl) {
      triggerEl.focus();
      triggerEl = null;
    }
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  // Capture phase so Escape closes lightbox before deck-engine acts
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.getAttribute('aria-hidden') === 'false') {
      e.preventDefault();
      e.stopImmediatePropagation();
      close();
    }
  }, true);

  function getCaptionFor(imgEl) {
    var item = imgEl.closest('.carousel-item');
    if (item) {
      var cap = item.querySelector('.carousel-caption');
      return cap ? cap.textContent : '';
    }
    var next = imgEl.nextElementSibling;
    if (next && next.classList.contains('carousel-caption')) {
      return next.textContent;
    }
    return '';
  }

  function bindImages() {
    var images = document.querySelectorAll('.screenshot-img, .carousel-item img');
    images.forEach(function (el) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', (el.alt || 'Screenshot') + ' — click to expand');

      el.addEventListener('click', function (e) {
        e.stopPropagation();
        open(el.src, el.alt, getCaptionFor(el), el);
      });

      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          open(el.src, el.alt, getCaptionFor(el), el);
        }
      });
    });
  }

  bindImages();
})();
