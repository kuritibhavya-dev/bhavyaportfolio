// Mobile nav toggle and year insertion
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('primary-nav');
  var toggle = document.getElementById('nav-toggle');

  toggle && toggle.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    if (nav.style.display === 'flex' || nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = getComputedStyle(nav).flexDirection === 'column' ? 'block' : 'flex';
      // ensure column layout on small screens
      if (window.innerWidth <= 600) nav.style.display = 'block';
    }
  });

  // Close nav on link click (mobile)
  Array.from(document.querySelectorAll('#primary-nav a')).forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 600 && nav) {
        nav.style.display = 'none';
        toggle && toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Insert current year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
