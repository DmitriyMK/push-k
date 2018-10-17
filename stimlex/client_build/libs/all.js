$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    // new WOW().init();

    $("body").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#6b6c70',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };


  $(".scrolling__link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),

    top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  var bLazy = new Blazy();


  $('.pots__materials button').click(function() {

    if (!$(this).parents('.pots__btn').hasClass('pots__btn-active')) {
      $(this).parents('.pots__materials').find('.pots__btn').removeClass('pots__btn-active');
      $(this).addClass('pots__btn-active');

      $(this).parents('.pots__item').find(".pots__link.pots__link-active").removeClass("pots__link-active");
      $('#' + $(this).data('model')).addClass('pots__link-active');

      $(this).parents('.pots__item').find('.pricePots').html($(this).data('price'));

      $('.form input[name="whatform2"]').val($(this).data('material'));
    }

    return false;
  });



  $('.phone-mask').mask('+39(999)999-99-99');



  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: true,

    responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
      }
    },

    ]

  });


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "tube",
    transitionDuration: 600,
    clickOutside: "close",
    protect: true,
    modal: false,

    touch: {
      vertical: true,
      momentum: true
    },
  });

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


window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');