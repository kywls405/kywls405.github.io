const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-nav');
const navigationLinks = [...document.querySelectorAll('.site-nav a')];

if (window.lucide) window.lucide.createIcons();
document.querySelector('#year').textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigationLinks.forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const sections = [...document.querySelectorAll('main > section[id]')];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navigationLinks.forEach((link) => {
    link.classList.toggle('is-active', link.hash === `#${visible.target.id}`);
  });
}, { rootMargin: '-25% 0px -55%', threshold: [0, 0.2, 0.5] });

sections.forEach((section) => observer.observe(section));
