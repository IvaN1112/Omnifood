// Navigation
const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav");
});
