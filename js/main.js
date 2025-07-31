window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const image = document.querySelector('.parallax-img');
  image.style.transform = `translateY(${scrolled * 0.3}px)`; // Ajustá el 0.3 según el efecto deseado
});
