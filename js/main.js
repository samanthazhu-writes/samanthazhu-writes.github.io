const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileNav.hidden = isExpanded;
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    }
  });
}
