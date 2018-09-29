$(document).ready(function() {


  if (document.documentElement.clientWidth > 1200) {

    new WOW().init();

    $("body").niceScroll({
      scrollspeed: 70,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#cfad38',
      cursorborderradius: 2,
      autohidemode: true,
      horizrailenabled: false,
      cursoropacitymin: 1,
      background: false,
      zindex: "9999"
    });

    $('html').addClass('no-overflow-y');

  };


  $('.scrolling__link').on('click', function(e) {
    e.preventDefault();
    var t = 1500;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });

  $(".js-video-button").modalVideo({
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
  });


  var bLazy = new Blazy();


  $('[data-fancybox]').fancybox({
    // arrows: true,
    // dots: true,
    // focusOnSelect: true,
    // infinite: false,
    // fade: true,


    loop: true,
    animationEffect: "zoom",
    transitionEffect: "tube",
    transitionDuration: 366,
    clickOutside: "close",
    protect: true,

    modal: false,

    touch: {
      vertical: true,
      momentum: true
    },

    thumbs: {
      autoStart: true,
      axis: "y" 
    },

  });


  $('.leather').slick({
    dots: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    infinite: false
  });

  $('.alcantara').slick({
    dots: false,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    infinite: false

  });

  $('.review__box').slick({
    dots: true,
    arrow: true,
    fade: true,
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