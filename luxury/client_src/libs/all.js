$(document).ready(function() {

  var cardWrap = document.getElementsByClassName('hero__img');
  document.body.addEventListener('mousemove', cursorPositionHandler);


  function cursorPositionHandler(e) {
    var decimalX = e.clientX / window.innerWidth - 0.5;
    var decimalY = e.clientY / window.innerHeight - 0.5;

    TweenMax.to(cardWrap, 0.5, {
      rotationY: 15 * decimalX,
      rotationX: -15 * decimalY,
      ease: Quad.easeOut,
      transformPerspective: 500,
      transformOrigin: "center"
    });
  };


  var tl = new TimelineMax();
  tl
  .fromTo(".header__box", 1, {y: -100, opacity: 0}, {y: 0,opacity: 1})
  .fromTo(".nav", 1, {y: -50}, {y: 0}, 0.03)

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