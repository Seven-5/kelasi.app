

(function(){
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-mobilemenu]");
  if (burger && menu){
    burger.addEventListener("click", () => {
      const open = menu.getAttribute("data-open") === "true";
      menu.style.display = open ? "none" : "block";
      menu.setAttribute("data-open", open ? "false" : "true");
      burger.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }

  // Active link highlight (simple)
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = a.getAttribute("href");
    if (href === path) a.style.background = "rgba(2,6,23,.04)";
  });

  // Contact form -> WhatsApp deep link (no backend)
  const form = document.querySelector("[data-contactform]");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      const name = form.querySelector("[name=name]").value.trim();
      const school = form.querySelector("[name=school]").value.trim();
      const phone = form.querySelector("[name=phone]").value.trim();
      const msg = form.querySelector("[name=message]").value.trim();

      // Remplace par ton numéro WhatsApp au format international, sans +
      const whatsappNumber = "000000000000";

      const text =
        `Bonjour, je suis ${name || "(Nom)"}.\n` +
        `École : ${school || "(École)"}\n` +
        `Téléphone : ${phone || "(Téléphone)"}\n\n` +
        `${msg || "(Message)"}\n\n` +
        `Je souhaite une démo KELASI.`;

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  // Testimonials rotator with animated transitions and indicators
  (function(){
    const container = document.querySelector('[data-testimonials]');
    const dataEl = document.getElementById('testimonials-data');
    if(!container || !dataEl) return;

    let data;
    try{ data = JSON.parse(dataEl.textContent); }catch(e){ return; }
    const items = (data && data.items) || [];
    if(!items.length) return;

    const roleEl = container.querySelector('.testimonial-role');
    const answerEl = container.querySelector('.testimonial-answer');
    const schoolEl = container.querySelector('.testimonial-school');
    const indicatorsEl = container.querySelector('[data-testi-indicators]');
    let idx = 0;
    const ANIM_MS = 500;
    const AUTO_MS = 5000;

    function render(i, animate = true){
      const it = items[i];
      if(animate){
        container.querySelector('.testimonial-item').classList.add('anim-out');
        setTimeout(()=>{
          roleEl.textContent = it.role || '';
          answerEl.textContent = it.answer || '';
          schoolEl.textContent = it.nom_ecole || '';
          container.querySelector('.testimonial-item').classList.remove('anim-out');
        }, ANIM_MS);
      } else {
        roleEl.textContent = it.role || '';
        answerEl.textContent = it.answer || '';
        schoolEl.textContent = it.nom_ecole || '';
      }
      container.setAttribute('data-current', i);
      updateIndicators(i);
    }

    // indicators
    function buildIndicators(){
      if(!indicatorsEl) return;
      indicatorsEl.innerHTML = '';
      items.forEach((it, i)=>{
        const dot = document.createElement('button');
        dot.className = 'testi-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Témoignage ${i+1}`);
        dot.addEventListener('click', ()=>{ jumpTo(i); reset(); });
        indicatorsEl.appendChild(dot);
      });
    }

    function updateIndicators(active){
      if(!indicatorsEl) return;
      Array.from(indicatorsEl.children).forEach((el, i)=>{
        el.classList.toggle('active', i === active);
      });
    }

    function next(){ idx = (idx + 1) % items.length; render(idx, true); }
    function jumpTo(i){ idx = i % items.length; render(idx, true); }

    buildIndicators();
    render(0, false);

    let timer = setInterval(next, AUTO_MS);
    function reset(){ clearInterval(timer); timer = setInterval(next, AUTO_MS); }
  })();

  // Video modal: open a focused player when a thumbnail is clicked
  (function(){
    // Capture a single frame from a video URL and return a dataURL (JPEG)
    // Note: video must be same-origin or served with CORS headers for canvas.toDataURL() to work.
    function captureFrameFromVideo(videoSrc, timeSec = 1, targetWidth = 480) {
      return new Promise((resolve, reject) => {
        const v = document.createElement('video');
        v.crossOrigin = 'anonymous';
        v.preload = 'metadata';
        v.muted = true;
        v.playsInline = true;
        v.src = videoSrc;

        const cleanup = () => { try{ v.pause(); }catch(e){} v.removeAttribute('src'); v.load(); v.remove(); };

        const onError = (e) => { cleanup(); reject(e || new Error('Video error')); };

        v.addEventListener('error', onError, { once: true });

        v.addEventListener('loadedmetadata', () => {
          const t = Math.min(timeSec, (isFinite(v.duration) && v.duration) ? v.duration : timeSec);
          // seeking triggers 'seeked'
          try { v.currentTime = t; } catch (e) { onError(e); }
        }, { once: true });

        v.addEventListener('seeked', () => {
          try {
            const w = v.videoWidth || targetWidth;
            const h = v.videoHeight || Math.round((targetWidth * 9) / 16);
            const canvas = document.createElement('canvas');
            const ratio = targetWidth / w;
            canvas.width = Math.round(w * ratio);
            canvas.height = Math.round(h * ratio);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
            cleanup();
            resolve(dataUrl);
          } catch (err) {
            cleanup();
            reject(err);
          }
        }, { once: true });
      });
    }

    // Lazy-generate thumbnails for .video-thumb-wrapper using IntersectionObserver
    (function lazyGenerateThumbs(){
      const wrappers = document.querySelectorAll('.video-thumb-wrapper');
      if(!wrappers || !wrappers.length) return;

      wrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.video-thumb');
        const vid = wrapper.querySelector('.school-video');
        if(!img || !vid) return;
        const src = vid.getAttribute('data-src');
        if(!src) return;
        const cacheKey = 'thumb:' + src;

        // If cached, use it
        try{
          const cached = localStorage.getItem(cacheKey);
          if(cached){ img.src = cached; img.dataset.thumbReady = '1'; return; }
        }catch(e){}

        let generated = false;
        async function generate(){
          if(generated || img.dataset.thumbReady) return;
          generated = true;
          try{
            const dataUrl = await captureFrameFromVideo(src, 1, 640);
            if(dataUrl){ img.src = dataUrl; img.dataset.thumbReady = '1';
              try{ localStorage.setItem(cacheKey, dataUrl); }catch(e){}
            }
          }catch(err){
            console.warn('Thumbnail generation failed for', src, err);
          }
        }

        // Generate when visible or on keyboard focus / hover
        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting){ generate(); observer.unobserve(entry.target); }
          });
        }, { rootMargin: '200px' });
        io.observe(wrapper);

        wrapper.addEventListener('mouseenter', generate, { passive: true });
        wrapper.addEventListener('focusin', generate);
      });
    })();

    const modal = document.getElementById('video-modal');
    const player = document.getElementById('video-modal-player');
    if(!modal || !player) return;

    function openModal(src, poster){
      player.src = src;
      if(poster) player.poster = poster;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      try{ player.play(); }catch(e){}
      player.focus();
    }

    function closeModal(){
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      try{ player.pause(); }catch(e){}
      player.removeAttribute('src');
      player.load();
    }

    // Close triggers
    modal.querySelectorAll('[data-vm-close]').forEach(el=>{
      el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Attach to thumbnail wrappers (image + play button). Fallback to .school-video elements.
    const wrappers = document.querySelectorAll('.video-thumb-wrapper');
    if(wrappers.length){
      wrappers.forEach(w => {
        function handleOpen(){
          const vid = w.querySelector('.school-video');
          const src = vid && vid.getAttribute('data-src');
          const poster = w.querySelector('.video-thumb') && w.querySelector('.video-thumb').getAttribute('src');
          if(src) openModal(src, poster);
        }
        w.addEventListener('click', handleOpen);
        w.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); handleOpen(); } });
      });
    } else {
      document.querySelectorAll('.school-video').forEach(thumb => {
        thumb.addEventListener('click', ()=>{
          const src = thumb.getAttribute('data-src') || (thumb.querySelector('source') && thumb.querySelector('source').getAttribute('src'));
          const poster = thumb.getAttribute('poster');
          if(src) openModal(src, poster);
        });
        thumb.addEventListener('keydown', (e)=>{
          if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            thumb.click();
          }
        });
      });
    }
  })();

})();