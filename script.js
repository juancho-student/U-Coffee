// ===== Carruseles (Sabores y Preparaciones) =====
function iniciarCarrusel(root){
  const track = root.querySelector('.track');
  const prev = root.querySelector('.flecha.prev');
  const next = root.querySelector('.flecha.next');
  const DURACION = 500; // igual al .5s de la regla .track en el CSS
  let moviendo = false, x0 = null;

  const visibles = () => parseInt(getComputedStyle(root).getPropertyValue('--visible')) || 1;
  const hayMas = () => track.children.length > visibles();
  const paso = () => track.children[0].offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);

  function siguiente(){
    if(moviendo || !hayMas()) return;
    moviendo = true;
    track.style.transform = `translateX(${-paso()}px)`;      // desliza una tarjeta
    setTimeout(() => {
      track.style.transition = 'none';
      track.appendChild(track.firstElementChild);             // la primera pasa al final
      track.style.transform = 'translateX(0)';
      track.offsetHeight;                                     // fuerza el reajuste
      track.style.transition = '';
      moviendo = false;
    }, DURACION);
  }

  function anterior(){
    if(moviendo || !hayMas()) return;
    moviendo = true;
    track.style.transition = 'none';
    track.insertBefore(track.lastElementChild, track.firstElementChild); // la última pasa al inicio
    track.style.transform = `translateX(${-paso()}px)`;
    track.offsetHeight;
    track.style.transition = '';
    track.style.transform = 'translateX(0)';                  // desliza hacia la derecha
    setTimeout(() => { moviendo = false; }, DURACION);
  }

  function actualizar(){
    const d = hayMas() ? '' : 'none';                         // sin flechas si caben todas
    prev.style.display = next.style.display = d;
  }

  prev.addEventListener('click', anterior);
  next.addEventListener('click', siguiente);
  window.addEventListener('resize', actualizar);
  track.addEventListener('touchstart', e => x0 = e.touches[0].clientX, {passive:true});
  track.addEventListener('touchend', e => {
    if(x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if(Math.abs(dx) > 40){ dx < 0 ? siguiente() : anterior(); }
    x0 = null;
  });
  actualizar();
}
document.querySelectorAll('.carousel').forEach(iniciarCarrusel);

// ===== Slider del header (3 banners) =====
(function(){
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dotsBox = document.querySelector('.hero-dots');
  let actual = 0, timer;
  const dots = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ir al banner ' + (i + 1));
    b.addEventListener('click', () => { ir(i); reiniciar(); });
    dotsBox.appendChild(b);
    return b;
  });
  function ir(i){
    actual = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('activo', n === actual));
    dots.forEach((d, n) => d.classList.toggle('activo', n === actual));
  }
  function reiniciar(){
    clearInterval(timer);
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => ir(actual + 1), 5000);
  }
  ir(0); reiniciar();
})();

// ===== Menú móvil =====
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  menuBtn.setAttribute('aria-expanded', abierto);
});
menu.addEventListener('click', e => {
  if(e.target.tagName === 'A'){ menu.classList.remove('abierto'); menuBtn.setAttribute('aria-expanded', false); }
});

document.getElementById('anio').textContent = new Date().getFullYear();
