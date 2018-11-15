$(document).ready(function() {

	if (document.documentElement.clientWidth > 1200) {

		$("body").niceScroll({
			scrollspeed: 70,
			mousescrollstep: 60,
			smoothscroll: true,
			cursorwidth: 8,
			cursorborder: 0,
			cursorcolor: '#ef720e',
			cursorborderradius: 2,
			autohidemode: true,
			horizrailenabled: false,
			cursoropacitymin: 1,
			background: false,
			zindex: "9999"
		});

		$('html').addClass('no-overflow-y');


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


	$('.phone-mask').mask('+380(99)999-99-99');


	$('.review__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		focusOnSelect: true,
		centerMode: true,


		responsive: [{
			breakpoint: 1900,
			settings: {
				// centerMode: false,
			}
		}, ]
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


// PORTFOLIO ANIMATION
$(function() {

	$('[data-scrollmagic]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var title = $(elem).find('.portfolio__title'),
			text = $(elem).find('.portfolio__text'),
			img1 = $(elem).find('.portfolio__figure1'),
			img2 = $(elem).find('.portfolio__figure2'),
			img3 = $(elem).find('.portfolio__figure3'),
			img4 = $(elem).find('.portfolio__figure4');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(title, 1.2, {
				y: '40px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")
			.fromTo(text, 1.6, {
				y: '40px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")
			.fromTo(img1, 2.0, {
				y: '80px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")
			.fromTo(img2, 2.6, {
				y: '70px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")
			.fromTo(img3, 2.8, {
				y: '60px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")
			.fromTo(img4, 3.2, {
				y: '50px',
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				ease: Power2.easeOut
			}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			offset: 0 /* offset the trigger Npx below scene's top */
		})

		.setTween(tl)
			.addTo(scrollMagicController);
		scene.addIndicators();
	});
});


// PORTFOLIO ANIMATION - CONTENT -> PLLAX



// GSAP START ANIMATION
$(document).ready(function() {
	var tl = new TimelineMax();
	tl
		.fromTo(".header__box", 1, {
			y: -100,
			opacity: 0
		}, {
			y: 0,
			opacity: 1
		})
		.fromTo(".nav", 1, {
			y: -50
		}, {
			y: 0
		}, 0.03)
		// .staggerFromTo(".header__link", 0.5, {opacity: 0, y: -30}, {opacity: 1, y: 0 }, 0.03);
});

// GSAP MOUSE ROTATE ANIMATION 
$(document).ready(function() {

    var cardWrap = document.getElementsByClassName('decoration__img12');
    var cardWrap2 = document.getElementsByClassName('decoration__img7');
    var cardWrap3 = document.getElementsByClassName('decoration__img9');
    var cardWrap4 = document.getElementsByClassName('decoration__img15');
    var cardWrap5 = document.getElementsByClassName('decoration__img16');
    var cardWrap6 = document.getElementsByClassName('decoration__img20');
    var cardWrap7 = document.getElementsByClassName('decoration__img24');


    document.body.addEventListener('mousemove', cursorPositionHandler);

    function cursorPositionHandler(e) {
      var decimalX = e.clientX / window.innerWidth - 0.5;
      var decimalY = e.clientY / window.innerHeight - 0.5;

      TweenMax.to(cardWrap, 0.75, {
        rotationY: 20 * decimalX,
        rotationX: -40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });

      TweenMax.to(cardWrap2, 0.25, {
        rotationY: 20 * decimalX,
        rotationX: 40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
      TweenMax.to(cardWrap3, 0.25, {
        rotationY: -40 * decimalX,
        rotationX: -40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
      TweenMax.to(cardWrap4, 0.005, {
        rotationY: 20 * decimalX,
        rotationX: -40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
      TweenMax.to(cardWrap5, 2.75, {
        rotationY: 30 * decimalX,
        rotationX: 20 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
      TweenMax.to(cardWrap6, 1.5, {
        rotationY: 40 * decimalX,
        rotationX: -40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
      TweenMax.to(cardWrap7, 0.75, {
        rotationY: 20 * decimalX,
        rotationX: -40 * decimalY,
        ease: Quad.easeOut,
        transformPerspective: 500,
        transformOrigin: "center"
      });
    }
});




// GSAP - GLITCH
$(document).ready(function() {
	var tl = new TimelineMax({
		repeat: -1,
		repeatDelay: 2
	});

	tl
		.to('.glitch', 0.1, {
			skewX: 4,
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
			x: 2
		})
		.to('.glitch', 0.04, {
			x: 0
		})
		// .add("split", 0)
		// .to('.top', 0.5, {
		//   y: 5,
		//   ease: Power4.easeInOut
		// }, 'split')
		// .to('.bottom', 0.25, {
		//   y: 20,
		//   ease: Power4.easeInOut
		// }, 'split')
		// .to('.glitch', 0.08, {
		// className: '+=redShadow'
		// }, 'split')

	// .to('#txt', 0, {
	//     scale: 1.05
	//   }, 'split')
	//   .to('#txt', 0, {
	//     scale: 1
	//   }, "+=0.02")

	// .to('.glitch', 0.08, {
	//     // className: '-=redShadow'
	//   }, "+=0.09")
	//   .to('.glitch', 0.03, {
	//     // className: '+=orangeShadow'
	//   }, 'split')
	//   .to('.glitch', 0.03, {
	//     // className: '-=orangeShadow'
	//   }, "+=0.01")

	.to('.top', 0.2, {
			y: 0,
			ease: Power4.linear
		})
		.to('.bottom', 0., {
			y: 10,
			ease: Power4.linear
		})

	.to('.glitch', 0.02, {
			scaleY: 1.15,
			ease: Power4.linear
		})
		.to('.glitch', 0.04, {
			scaleY: 1,
			ease: Power4.linear
		})
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