// Simple toggle for sticky navigation on scroll
window.addEventListener('scroll', function() {
  const nav = document.getElementById('nav');
  if (window.scrollY > 100) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
