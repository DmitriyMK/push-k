$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {
    $(window).enllax();
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
      rotationY: 5 * decimalX,
      rotationX: -5 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  };

});

window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');