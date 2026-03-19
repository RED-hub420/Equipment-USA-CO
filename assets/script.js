const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const yearNode = document.getElementById('year');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
