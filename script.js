let currentIndex = 0;

function showSlide(index) {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000); // Auto-slide every 5s

// Header auto-hide logic
const header = document.getElementById('main-header');
let headerTimer;

function showHeader() {
  header.classList.add('visible');
  clearTimeout(headerTimer);
  headerTimer = setTimeout(() => {
    header.classList.remove('visible');
  }, 3000); // Hide after 3 seconds
}

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 80) {
    showHeader();
  }
});

header.addEventListener('mouseenter', showHeader);
