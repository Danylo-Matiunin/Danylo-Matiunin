const slides = [
    <div><img src='img/room-icon.jpg' alt="room-icon"></img></div>,
    <div><img src='img/person-icon.jpg' alt="person-icon"></img></div>,
    <div><img src='img/mirror-icon.jpg' alt="mirror-icon"></img></div>
];

let currentSlideIndex = 0;
function renderSlide () {
    const slideContainer = document.querySelector('.product-carousel__slide');
    slideContainer.innerHTML = slides [currentSlideIndex];
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 > 0 ? currentSlideIdx + 1 : 0;
    renderSlide();
}

renderSlide()

setInterval(nextSlide, 3000);