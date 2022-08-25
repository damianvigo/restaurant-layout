$(document).ready(function () {
  $('#slider').slick({
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    fade: true,
    speed: 700,
    zIndex: 0,
    mobileFirst: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
  });

  $('#our-brandings').slick({
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 1500,
    speed: 700,
    zIndex: 0,
    mobileFirst: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
  });
});
