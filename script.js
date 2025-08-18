<script>
  document.addEventListener('DOMContentLoaded', () => {
    const darkToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // 🌙 Dark mode toggle
    darkToggle.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      // Toggle icon
      const icon = darkToggle.querySelector('i');
      if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });

    // Set initial dark mode icon
    if (html.classList.contains('dark-mode')) {
      darkToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    // 🍔 Mobile nav toggle
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('show');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
    });

    // ✅ Form submission with thank-you modal
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('thankYouModal');

    if (form && modal) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
        .then(() => {
          form.reset();
          modal.classList.remove('hidden');

          // Auto-close modal after 5 seconds
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 5000);
        })
        .catch((error) => alert("There was an error submitting the form."));
      });
    }

    // Close modal function
    window.closeModal = function () {
      modal.classList.add('hidden');
    };
  });
</script>
