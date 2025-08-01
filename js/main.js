import { testimonios } from "./testimonios.js";
import { puestos } from "./puestos.js";

// Parallax
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const image = document.querySelector('.parallax-img');
  if (image) {
    image.style.transform = `translateY(${scrolled * 0.3}px)`; // Ajustá el factor si querés más o menos efecto
  }
});


// Carrusel Testimonios - Swiper
const container = document.querySelector('.swiper-wrapper_testimonios');

testimonios.forEach(t => {
  container.insertAdjacentHTML('beforeend', `
    <div class="swiper-slide">
      <div class="testimonios_card">
        <img src="${t.imagen}" alt="${t.nombre}" class="testimonios_img" />
        <p class="testimonios_texto">"${t.mensaje}"</p>
        <p class="testimonios_nombre">${t.nombre} - ${t.puesto}</p>
        <p class="testimonios_institucion">${t.empresa}</p>
      </div>
    </div>
  `);
});

new Swiper('.swiper_testimonios', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next_testimonios',
    prevEl: '.swiper-button-prev_testimonios',
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

// Carrusel Puestos - Swiper

const puestosContainer = document.querySelector('.swiper-wrapper_puestos');

puestos.forEach(p => {
  puestosContainer.insertAdjacentHTML('beforeend', `
    <div class="swiper-slide">
      <div class="puestos_card">
      <div>
        <p class="puestos_localidad">${p.localidad}</p>
        <p class="puestos_puesto">${p.puesto}</p>
      </div>
        <p class="puestos_empresa">${p.empresa}</p>
      </div>
    </div>
  `);
});

new Swiper('.swiper_puestos', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next_puestos',
    prevEl: '.swiper-button-prev_puestos',
  },
  pagination: {
    el: '.swiper-pagination_puestos',
    clickable: true, 
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    420: { slidesPerView: 2 },
    580: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  }
});
