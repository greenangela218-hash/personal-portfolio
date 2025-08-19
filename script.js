/* =============================
= = = = = =  script.js  = = = = = =
============================= */
/* Mobile nav toggle */
const navToggle = document.querySelector('.nav__toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navList.classList.toggle('is-open');
  });
}

/* Current year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Reveal-on-scroll using IntersectionObserver */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* Copy-to-clipboard for code samples */
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-copy'));
    if (!target) return;
    const text = target.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
});
