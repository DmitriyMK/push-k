$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    $(window).enllax();

      // new WOW().init();

      // $("body").niceScroll({
      //   scrollspeed: 60,
      //   mousescrollstep: 60,
      //   smoothscroll: true,
      //   cursorwidth: 8,
      //   cursorborder: 0,
      //   cursorcolor: '#ff4200',
      //   cursorborderradius: 2,
      //   autohidemode: true,
      //   horizrailenabled: false,
      //   cursoropacitymin: 1,
      //   background: false,
      //   zindex: "9999"
      // });

      // $('html').addClass('no-overflow-y');

    };

    $("#nav li").hover(function() { 
      $(this).find(".nav__hide").toggleClass("nav__show"); 
      $(this).find(".nav__link").toggleClass("nav__link-active"); 
    });


    var bLazy = new Blazy();

  // $('.phone-mask').mask('+38(999)999-99-99');


  /*  $(".js-video-button").modalVideo({
      youtube: {
        autoplay: 1,
        nocookie: false,
        cc_load_policy: 1,
        color: null,
        controls: 1,
        disablekb: 0,
        enablejsapi: 0,
        end: null,
        fs: 1,
        h1: null,
        iv_load_policy: 1,
        list: null,
        listType: null,
        loop: 0,
        modestbranding: null,
        origin: null,
        playlist: null,
        playsinline: null,
        rel: 0,
        showinfo: 1,
        start: 0,
        wmode: 'transparent',
        theme: 'dark'

      }
    });*/



    $('.freeMonday__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
    });

    $('.catalogBerry__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
    });


  /*  $('.slider-nav-recipe').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for-recipe',
      arrows: false,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      centerMode: false,

      responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,

        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          arrows: true,
        }
      },

      ]

    });
    */
});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
 });



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