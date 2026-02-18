

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
})();