$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    $(window).enllax();

    $("body").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#fe673a',
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


  var cardWrap = document.getElementsByClassName('move__img');
  document.body.addEventListener('mousemove', cursorPositionHandler);


  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;

    TweenMax.to(cardWrap, 0.5, {
      rotationY: 10 * decimalX,
      rotationX: -10 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  };
});

window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');