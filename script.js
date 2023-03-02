const hamburger = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("header nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
