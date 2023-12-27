const slides = [
  '<div><img src="mirror-icon.jpg" alt="Baby Yoda"></div>',
  '<div><img src="room-icon.jpg" alt="Banana"></div>',
  '<div><img src="person-icon.jpg" alt="Girl"></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector('.products-carousel__slide');
  slideContainer.innerHTML = slides[currentSlideIdx];
  if (window.matchMedia('(min-width: 768px)').matches) {
    const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia('(min-width: 1024px)').matches) {
      const thirdSlideIdx = secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

renderSlide();


const buttonNext = document.querySelector('.products-carousel__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.products-carousel__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);