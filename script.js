// Dark mode toggle and state persistence
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
});

// Fade in service cards on scroll
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

serviceCards.forEach(card => {
  observer.observe(card);
});
