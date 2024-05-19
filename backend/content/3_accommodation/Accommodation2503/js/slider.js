// Подключение Swiper JS (убедитесь, что вы подключили библиотеку Swiper перед этим скриптом)
var swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 30,
  effect: "slide", // You can try different effects like 'fade', 'cube', etc.
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
