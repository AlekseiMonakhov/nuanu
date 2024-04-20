// burgerMenu.js

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const navUL = document.querySelector("nav ul");
  const overlay = document.querySelector(".overlay");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navUL.classList.toggle("show");
    overlay.style.display = navUL.classList.contains("show") ? "block" : "none";
  });

  // Скрываем меню и overlay при клике на overlay
  overlay.addEventListener("click", function () {
    burger.classList.remove("active");
    navUL.classList.remove("show");
    overlay.style.display = "none";
  });
});
