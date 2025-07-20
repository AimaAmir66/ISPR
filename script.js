// script.js

// Mobile Nav Toggle
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple Lightbox for Image Clicks (Shuhada + Events)
const images = document.querySelectorAll('.lightbox-image');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
