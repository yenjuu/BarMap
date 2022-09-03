"use strict";

$(document).on("scroll", function () {
  console.log("scrolling");
  console.log($(".navbar").toggleClass($(this).scrollTop()));
  $(".navbar").toggleClass("scrolled", $(this).scrollTop() > $(".navbar").height());
});
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  // grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500 // disableOnInteraction: false,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});
//# sourceMappingURL=all.js.map
