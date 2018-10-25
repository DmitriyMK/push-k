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


  $(".scrolling__link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });


  var bLazy = new Blazy();


  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    infinite: false,
    lazyLoad: 'ondemand',

    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      }

      ]

  });

  $('.partner__slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    lazyLoad: 'ondemand',
    autoplay: true,

    responsive: [

      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },

      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }

      ]
  });


  /*ACCORDION*/
  $(function() {
    $('.accordion__header').click(function(e) {

      e.preventDefault();

      $(this).siblings('.accordion-body').slideToggle()
        .parent().toggleClass('active')
        .siblings().removeClass('active')
        .children('.accordion-body').slideUp();
    });
  });

});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
});
  


// MENU EVENTS
$(document).ready(function() {

  // BURGER RESPONSIVE < 992px
  var $menu = $('.nav');

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('open').show;
  });


  $(document).mouseup(function(e) {
    if (!$menu.is(e.target) &&
      $menu.has(e.target).length === 0) {

      $('.overlay').removeClass('open');
      $(".burger").removeClass('active');
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