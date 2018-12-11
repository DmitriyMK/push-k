$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    $(window).enllax();


    $("body").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#181d23',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');
  };


  
  $(".linkSubmenu").hover(function() {
    if (document.documentElement.clientWidth > 992) {

      $(this).find(".nav__hide").toggleClass("nav__show");
      $(this).find(".nav__link").toggleClass("nav__link-active");

    };
  });



  $('.linkSubmenu').click(function() {
    $(this).find(".nav__hide").toggleClass("nav__show");
    $(this).find(".nav__link").toggleClass("nav__link-active");
  });


  var bLazy = new Blazy();



  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $('#header').addClass('fixed');
    } else if ($(this).scrollTop() < 30) {
      $('#header').removeClass('fixed');
    }
  });


  $('.freeMonday__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 800,
  });


  $('.catalogBerry__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 800,
  });


  $('.brand__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true,
    dots: true,
    infinite: true,
    initialSlide: 2,

    responsive: [

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        initialSlide: 1,
        autoplay: true
      }
    }

    ]
  });


  // BURGER RESPONSIVE < 992px
  $('.burger').click(function() {

    $(this).toggleClass('active');
    $(this).parents('.header__top').find('.overlay').toggleClass('open');
    
  });
});



// $(window).on('resize orientationchange', function() {
//   $('.slider').slick('resize');
// });



$(".form").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {

    var inst = $('[data-remodal-id=modal-thanks]').remodal();
    inst.open();

    setTimeout(function() {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});


window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');