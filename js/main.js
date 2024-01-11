const sliders = document.querySelectorAll('.slider input[type="radio"]');
let currentSlide = 0;
function nextSlider() {
	sliders[currentSlide].checked = false;
	currentSlide = (currentSlide + 1) % sliders.length;
	sliders[currentSlide].checked = true;
}

setInterval(nextSlider, 3000);
