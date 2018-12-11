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


    var els = document.querySelectorAll(".js-splitme");
    [].forEach.call(els, function(el) {
      el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
    });


     // SCROLL ANIMATION
     $('[data-scrollmagic1]').each(function(index, elem) {
      var scrollMagicController = new ScrollMagic();

      // Create Animations
      // var title = $(elem).find('.portfolio__title'),
      // var text = $(elem).find('.portfolio__texts'),
      // var btn = $(elem).find('.portfolio__btn'),
      var 
      img1 = $(elem).find('.statistics__item1'),
      img2 = $(elem).find('.statistics__item2'),
      img3 = $(elem).find('.statistics__item3'),
      img4 = $(elem).find('.statistics__item4');

      var tl = new TimelineMax({
        pause: true
      });

      tl.add("start")

      // .fromTo(title, 1.2, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      // .fromTo(text, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      // .fromTo(btn, 3.6, {y: '80px', opacity: 0, scale: 1.2}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img1, 1.2, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")


      var scene = new ScrollScene({
        triggerElement: elem,
        reverse: false,
        offset: 0
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      scene.addIndicators();
    });
    // END data-scrollmagic1


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