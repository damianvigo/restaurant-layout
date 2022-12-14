import loadProducts from './api/api_products.js';
import hamburguerMenu from './components/hamburguer_menu.js';
import showMenu from './utils/show_menu.js';

let productMl01 = 'https://api.mercadolibre.com/items?ids=MLA863712882',
  productMl02 = 'https://api.mercadolibre.com/items/MLA646715969';

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 200,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $('#our-brandings').slick({
    autoplay: true,
    slidesToShow: 4,
    autoplaySpeed: 1500,
    speed: 700,
    zIndex: 0,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: { arrows: false },
      },
      {
        breakpoint: 200,
        settings: {
          centerMode: true,
          arrows: false,
          centerPadding: '20px',
          variableWidth: true,
        },
      },
    ],
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
  });

  loadProducts(productMl01, productMl02);
});

hamburguerMenu('.hamburger-btn', '.panel', '.panel__menu');
showMenu('.submenu', '.submenu__show');
