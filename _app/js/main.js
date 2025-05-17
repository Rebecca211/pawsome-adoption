document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 4000);
});

