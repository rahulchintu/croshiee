const menuButton = document.querySelector('.menu-toggle');
const closeMenu = () => {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open menu');
};
menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 960) closeMenu();
});
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *', {y:45, opacity:0, duration:.85, stagger:.12, ease:'power3.out', delay:.15});
  gsap.from('.hero-media img', {scale:1.12, duration:1.5, ease:'power3.out'});
  gsap.to('.burst', {rotation:369, ease:'none', scrollTrigger:{trigger:'.hero', start:'top top', end:'bottom top', scrub:1}});
  gsap.utils.toArray('.reveal').forEach(el => gsap.to(el, {y:0, opacity:1, duration:.8, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 88%', once:true}}));
  gsap.to('.story-media img', {yPercent:8, ease:'none', scrollTrigger:{trigger:'.story', start:'top bottom', end:'bottom top', scrub:true}});
} else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.style.opacity='1'; entry.target.style.transform='none'; observer.unobserve(entry.target); }
  }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
