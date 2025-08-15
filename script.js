document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Dark mode toggle
  darkToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update icon accordingly
    const icon = darkToggle.querySelector('i');
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Initialize icon based on saved theme
  if (html.classList.contains('dark-mode')) {
    darkToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }

  // Hamburger toggle for mobile nav
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('show');
  });

  // ✅ Close mobile nav after link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  });
});
