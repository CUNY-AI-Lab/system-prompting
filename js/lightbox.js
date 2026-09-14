(() => {
  const dialog = document.getElementById('image-dialog');
  const close = document.getElementById('close-image');
  let trigger;
  function open(image) {
    trigger=image;
    dialog.querySelector('img').src=image.src;
    dialog.querySelector('img').alt=image.alt;
    dialog.querySelector('p').textContent=image.closest('figure')?.querySelector('figcaption')?.textContent || '';
    dialog.showModal(); close.focus();
  }
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>trigger?.focus());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  document.querySelectorAll('.screenshot-img').forEach(image=>{
    image.tabIndex=0; image.setAttribute('role','button'); image.setAttribute('aria-label',image.alt+'. Expand screenshot');
    image.addEventListener('click',()=>open(image));
    image.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();open(image);}});
  });
})();
