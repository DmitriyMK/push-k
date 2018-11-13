$(document).ready(function() {

  $(".scrolling__link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  var bLazy = new Blazy();


  //   var options = {
  //     paths: '#round',     // Shape we want to draw
  //     pointsNumber: 10,            // Number of points
  //     maxDistance: 100,             // Max distance among points
  //     // color: 'red',
  //     // debug: true               // Uncomment this to see the points
  // };


  //   var jelly = new Jelly('.jelly', options);



  $('.phone-mask').mask('+380(99)999-99-99');



  // BUBBLE ANIMATION for BUTTON
  var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
      e.target.classList.remove('animate');
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    // infinite: false,
    initialSlide: 1,



    responsive: [

      {
        breakpoint: 1900,
        settings: {
          centerMode: false,
        }
      },


    ]
  });


  $(window).on('resize orientationchange', function() {
    $('.slider').slick('resize');
  });

});

// MENU EVENTS
$(document).ready(function() {
  // BURGER RESPONSIVE < 992px
  var $menu = $('.nav');

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('open').show;
  });


  $('.header__link').click(function() {
    $('.overlay').removeClass('open');
    $('.burger').removeClass('active');
  });


  $(document).mouseup(function(e) {
    if (!$menu.is(e.target) &&
      $menu.has(e.target).length === 0) {

      $('.overlay').removeClass('open');
      $('.burger').removeClass('active');
    }
  });

  // HIDE MENU
  var mainHeader = $('.header__fixed'),
    secondaryNavigation = $('.header__fixed2'),
    belowNavHeroContent = $('.sub-nav-hero'),
    headerHeight = mainHeader.height();

  var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 86;

  mainHeader.on('click', '.nav-trigger', function(event) {
    event.preventDefault();
    mainHeader.toggleClass('nav-open');
  });

  $(window).on('scroll', function() {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(autoHideHeader, 250): requestAnimationFrame(autoHideHeader);
    }
  });

  $(window).on('resize', function() {
    headerHeight = mainHeader.height();
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();
    (belowNavHeroContent.length > 0) ? checkStickyNavigation(currentTop): checkSimpleNavigation(currentTop);
    previousTop = currentTop;
    scrolling = false;
  }

  function checkSimpleNavigation(currentTop) {
    if (previousTop - currentTop > scrollDelta) {
      mainHeader.removeClass('is-hidden');
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
      mainHeader.addClass('is-hidden');
    }
  }

  function checkStickyNavigation(currentTop) {
    var secondaryNavOffsetTop = belowNavHeroContent.offset().top - secondaryNavigation.height() - mainHeader.height();
    if (previousTop >= currentTop) {
      if (currentTop < secondaryNavOffsetTop) {
        mainHeader.removeClass('is-hidden');
        secondaryNavigation.removeClass('fixed slide-up');
        belowNavHeroContent.removeClass('secondary-nav-fixed');
      } else if (previousTop - currentTop > scrollDelta) {
        mainHeader.removeClass('is-hidden');
        secondaryNavigation.removeClass('slide-up').addClass('fixed');
        belowNavHeroContent.addClass('secondary-nav-fixed');
      }
    } else {
      if (currentTop > secondaryNavOffsetTop + scrollOffset) {
        mainHeader.addClass('is-hidden');
        secondaryNavigation.addClass('fixed slide-up');
        belowNavHeroContent.addClass('secondary-nav-fixed');
      } else if (currentTop > secondaryNavOffsetTop) {
        mainHeader.removeClass('is-hidden');
        secondaryNavigation.addClass('fixed').removeClass('slide-up');
        belowNavHeroContent.addClass('secondary-nav-fixed');
      }
    }
  }
});


// GSAP
$(document).ready(function() {
  //GLITCH
  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
  });

  tl.to('.glitch', 0.1, {
      skewX: 50,
      ease: Power4.easeInOut
    })
    .to('.glitch', 0.04, {
      skewX: 0,
      ease: Power4.easeInOut
    })
    .to('.glitch', 0.04, {
      opacity: 0
    })
    .to('.glitch', 0.04, {
      opacity: 1
    })
    .to('.glitch', 0.04, {
      x: -20
    })
    .to('.glitch', 0.04, {
      x: 0
    })
    .add("split", 0)
    .to('.top', 0.5, {
      x: -20,
      ease: Power4.easeInOut
    }, 'split')
    .to('.bottom', 0.5, {
      x: 60,
      ease: Power4.easeInOut
    }, 'split')
    .to('.glitch', 0.08, {
      className: '+=redShadow'
    }, 'split')

  .to('#txt', 0, {
      scale: 1.1
    }, 'split')
    .to('#txt', 0, {
      scale: 1
    }, "+=0.02")

  .to('.glitch', 0.08, {
      className: '-=redShadow'
    }, "+=0.09")
    .to('.glitch', 0.03, {
      className: '+=orangeShadow'
    }, 'split')
    .to('.glitch', 0.03, {
      className: '-=orangeShadow'
    }, "+=0.01")

  .to('.top', 0.2, {
      x: 0,
      ease: Power4.easeInOut
    })
    .to('.bottom', 0.2, {
      x: 0,
      ease: Power4.easeInOut
    })

  .to('.glitch', 0.02, {
      scaleY: 1.1,
      ease: Power4.easeInOut
    })
    .to('.glitch', 0.04, {
      scaleY: 1,
      ease: Power4.easeInOut
    })
});

$( function() {
    $( ".glitchWrap" ).mgGlitch({
          // set 'true' to stop the plugin
          destroy : false, 
          // set 'false' to stop glitching
          glitch: true, 
          // set 'false' to stop scaling
          scale: true, 
          // set 'false' to stop glitch blending
          blend : true, 
          // select blend mode type
          blendModeType : 'hue',
          // set min time for glitch 1 elem
          glitch1TimeMin : 200, 
          // set max time for glitch 1 elem
          glitch1TimeMax : 400,
          // set min time for glitch 2 elem
          glitch2TimeMin : 10, 
          // set max time for glitch 2 elem
          glitch2TimeMax : 100, 
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