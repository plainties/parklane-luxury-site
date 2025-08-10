// Theme Toggle
const darkToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;

const setTheme = (mode) => {
  root.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
};

if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark-mode');
    setTheme(isDark ? 'dark' : 'light');
  });
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Intersection Observer for #services
const servicesSection = document.getElementById('services');

if (servicesSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        servicesSection.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(servicesSection);
}
