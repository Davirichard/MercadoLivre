const slides = document.querySelector('.slides');
let index = 0;

function nextSlide() {
  index = (index + 1) % 6;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + 6) % 6;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos