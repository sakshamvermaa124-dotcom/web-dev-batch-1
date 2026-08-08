// script.js - Responsive Card Grid Project
// Built with Vanilla HTML, CSS Grid, and JavaScript

document.addEventListener('DOMContentLoaded', () => {
  console.log('Responsive Card Grid initialized successfully.');
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  if (menuToggle && navLinks) {
    // Toggle Mobile Navigation Menu
    const toggleMenu = () => {
      const isOpen = navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on any nav link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close menu when clicking outside of navbar
    document.addEventListener('click', (event) => {
      const isClickInside = menuToggle.contains(event.target) || navLinks.contains(event.target);
      if (!isClickInside && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  }
});
