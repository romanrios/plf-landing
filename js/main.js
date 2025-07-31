import { testimonios } from "./testimonios.js";

// Parallax
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const image = document.querySelector('.parallax-img');
  if (image) {
    image.style.transform = `translateY(${scrolled * 0.3}px)`; // Ajustá el factor si querés más o menos efecto
  }
});





// Carrusel Testimonios



const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

const container = document.querySelector('.swiper-wrapper');
testimonios.forEach(t => {
  container.innerHTML += `
    <div class="swiper-slide">
      <div class="testimonios_card">
        <img src="${t.imagen}" alt="${t.nombre}" class="testimonios_img" />
        <p class="testimonios_texto">"${t.mensaje}"</p>
        <p class="testimonios_nombre">${t.nombre} - ${t.puesto}</p>
        <p class="testimonios_institucion">${t.empresa}</p>
      </div>
    </div>
  `;
});