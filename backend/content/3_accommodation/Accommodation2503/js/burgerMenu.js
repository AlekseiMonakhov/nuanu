// burgerMenu.js

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const navUL = document.querySelector("nav ul");
  const overlay = document.querySelector(".overlay");

  burger.addEventListener("click", function () {
    burger.classNameList.toggle("active");
    navUL.classNameList.toggle("show");
    overlay.style.display = navUL.classNameList.contains("show") ? "block" : "none";
  });

  // Скрываем меню и overlay при клике на overlay
  overlay.addEventListener("click", function () {
    burger.classNameList.remove("active");
    navUL.classNameList.remove("show");
    overlay.style.display = "none";
  });
});
