// Form Validation
const form = document.getElementById('contactForm');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        successMessage.style.display = 'block'; // Show success message
        form.reset(); // Reset form fields
        setTimeout(() => successMessage.style.display = 'none', 3000); // Hide after 3s
    } else {
        alert('Please fill out all fields.');
    }
});

// Project Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = i === index ? 'block' : 'none';
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);
