$(document).ready(function () {
  $('#slider').slick({
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 1500,
    fade: true,
    speed: 700,
    zIndex: 0,
    mobileFirst: true,
  });

  const $slickPrev = document.querySelector('.slick-prev'),
    $slickNext = document.querySelector('.slick-next');
  $slickPrev.textContent = '◄';
  $slickNext.textContent = '►';
});
