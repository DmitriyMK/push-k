$(document).ready(function() {


  /*  if (document.documentElement.clientWidth > 1200) {

      new WOW().init();

      $("body").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 60,
        smoothscroll: true,
        cursorwidth: 8,
        cursorborder: 0,
        cursorcolor: '#ff4200',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false,
        cursoropacitymin: 1,
        background: false,
        zindex: "9999"
      });

      $('html').addClass('no-overflow-y');

    };*/


    $(".scrolling__link").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),

      top = $(id).offset().top;
      
      $('body,html').animate({scrollTop: top}, 1000);
    });
    

  // var position = $("#works").offset();
  // $(document).scroll(function() {
  //   var y = $(this).scrollTop();
  //   if (y >= position.top) {
  //     $("#scroll-block").fadeIn(300);
  //   } else {
  //     $("#scroll-block").fadeOut(300);
  //   }
  // });


  var bLazy = new Blazy();

  $('.phone-mask').mask('+38(999)999-99-99');


  /*  $('.slider-for-recipe').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.slider-nav-recipe',
      fade: true,
      draggable: false,
      infinite: true,

    });*/


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