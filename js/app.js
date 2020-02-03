/******************************
Init AOS
******************************/
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

/******************************
Init STELLAR
******************************/

$(window).stellar();

/******************************
Init STELLAR
******************************/
var rellax = new Rellax('.rellax');

/******************************
OWL Carousel
******************************/
var siteCarousel = function() {
  if ($('.nonloop-block-13').length > 0) {
    $('.nonloop-block-13').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      autoplay: true,
      margin: 20,
      nav: false,
      dots: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">'
      ],
      responsive: {
        600: {
          margin: 20,
          stagePadding: 0,
          items: 1
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          items: 2
        },
        1200: {
          margin: 20,
          stagePadding: 0,
          items: 3
        }
      }
    });
  }

  if ($('.slide-one-item').length > 0) {
    $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">'
      ]
    });
  }

  if ($('.nonloop-block-4').length > 0) {
    $('.nonloop-block-4').owlCarousel({
      center: true,
      items: 1,
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        '<span class="icon-arrow_back">',
        '<span class="icon-arrow_forward">'
      ],
      responsive: {
        600: {
          items: 1
        }
      }
    });
  }
};
siteCarousel();
