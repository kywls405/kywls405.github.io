// year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 모바일 메뉴 닫기
      document.getElementById('mainNav')?.classList.remove('open');
    }
  });
});

// theme toggle (persist)
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored === 'light') root.classList.add('light');

document.getElementById('themeToggle').addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// mobile menu
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});
