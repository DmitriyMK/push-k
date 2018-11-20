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


		// GSAP START ANIMATION
		$(document).ready(function() {
			var tl = new TimelineMax();
			tl
			.fromTo(".header__box", 1, {y: -100, opacity: 0}, {y: 0,opacity: 1})
			.fromTo(".nav", 1, {y: -50}, {y: 0}, 0.03)
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

				TweenMax.to(cardWrap2, 0.45, {
					rotationY: 20 * decimalX,
					rotationX: 50 * decimalY,
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
				TweenMax.to(cardWrap5, 1.05, {
					rotationY: 30 * decimalX,
					rotationX: 30 * decimalY,
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

		//CURSOR
		$(function() {
			var dots = [],
			mouse = {x: 0, y: 0};

			var Dot = function() {
				this.x = 0;
				this.y = 0;
				this.node = (function(){
					var n = document.createElement("div");
					n.className = "cursor";
					document.body.appendChild(n);
					return n;
				}());
			};

			Dot.prototype.draw = function() {
				this.node.style.left = this.x + -16 + "px";
				this.node.style.top = this.y + -16 + "px";
			};

			for (var i = 0; i < 1; i++) {
				var d = new Dot();
				dots.push(d);
			}

			function draw() {
				var x = mouse.x,
				y = mouse.y;

				dots.forEach(function(dot, index, dots) {
					var nextDot = dots[index + 1] || dots[0];

					dot.x = x;
					dot.y = y;
					dot.draw();
					x += (nextDot.x - dot.x) * .6;
					y += (nextDot.y - dot.y) * .6;

				});
			}

			addEventListener("mousemove", function(event) {
				mouse.x = event.pageX;
				mouse.y = event.pageY;
			});

			function animate() {
				draw();
				requestAnimationFrame(animate);
			}

			animate();
		});
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
		cssEase: 'linear',


		responsive: [{
			breakpoint: 1600,
			settings: {
				centerMode: false,
			}
		}, {
			breakpoint: 1200,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				fade: true,
			}
		},

		]
	});


	$(window).on('resize orientationchange', function() {
		$('.slider').slick('resize');
	});
});


// MENU CHANGE COLOR
$(window).scroll(function() {

	var a = 150;
	var pos = $(window).scrollTop();

	if (pos > a) {
		$(".header__fixed").css({
			background: '#eee'
		});
	} else {
		$(".header__fixed").css({
			background: 'transparent'
		});
	}
});


// MENU
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
		if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {

			$('.overlay').removeClass('open');
			$('.burger').removeClass('active');
		}
	});


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


// GSAP - GLITCH
$(document).ready(function() {
	var tl = new TimelineMax({
		repeat: -1,
		repeatDelay: 2
	});

	tl
	.to('.glitch', 0.1, {skewX: 4, ease: Power4.easeInOut})
	.to('.glitch', 0.04, {skewX: 0, ease: Power4.easeInOut})
	.to('.glitch', 0.04, {opacity: 0})
	.to('.glitch', 0.04, {opacity: 1})
	.to('.glitch', 0.04, {x: 2})
	.to('.glitch', 0.04, {x: 0})
	.to('.top', 0.2, {y: 0, ease: Power4.linear})
	.to('.bottom', 0., {y: 10, ease: Power4.linear})
	.to('.glitch', 0.02, {scaleY: 1.20, ease: Power4.linear})
	.to('.glitch', 0.08, {scaleY: 1, ease: Power4.linear})
});


// SCROLL ANIMATION
$(function() {
	if (document.documentElement.clientWidth > 1200) {

		$('[data-scrollmagic]').each(function(index, elem) {
			// Init ScrollMagic Controller
			var scrollMagicController = new ScrollMagic();

			// Create Animations
			var title = $(elem).find('.portfolio__title'),
			text = $(elem).find('.portfolio__texts'),
			btn = $(elem).find('.portfolio__btn'),
			img1 = $(elem).find('.portfolio__figure1'),
			img2 = $(elem).find('.portfolio__figure2'),
			img3 = $(elem).find('.portfolio__figure3'),
			img4 = $(elem).find('.portfolio__figure4');

			var tl = new TimelineMax({
				pause: true
			});

			tl.add("start") // add timeline label

			.fromTo(title, 1.2, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(text, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(btn, 3.6, {y: '80px', opacity: 0, scale: 1.2}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(img1, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(img2, 2.6, {y: '70px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(img3, 2.8, {y: '60px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
			.fromTo(img4, 3.2, {y: '50px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")

			// Create the Scene and trigger when visible
			var scene = new ScrollScene({
				triggerElement: elem,
				reverse: false,
				offset: -180
			})

			.setTween(tl)
			.addTo(scrollMagicController);
			scene.addIndicators();
		});


		$('[data-scrollmagic1]').each(function(index, elem) {
			var scrollMagicController = new ScrollMagic();

			var scene = new ScrollScene({
				triggerElement: '#portfolioGallery',
				reverse: true,
				// duration: 400,
				duration: "100%",
				// duration: $(window).height() - 300,
				offset: 300
			})

			.setPin("#portfolioContent")
			.addTo(scrollMagicController);
			scene.addIndicators();
		});
		
		


		$('[data-scrollmagic31]').each(function(index, elem) {

			var scrollMagicController = new ScrollMagic();

			var scene = new ScrollScene({
				triggerElement: '#team',
				reverse: true,
				duration: 600,
				offset: 460
			})

			.setPin("#teamContent")
			.addTo(scrollMagicController);
			scene.addIndicators();
		});
		

		$('[data-scrollmagic2]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var title = $(elem).find('.partners__title'),
		text = $(elem).find('.partners__text'),
		img = $(elem).find('.partners__list');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(title, 1.4, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(text, 1.8, {y: '40px',opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img, 1.0, {y: '20px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			reverse: false,
			offset: -180
		})

		.setTween(tl)
		.addTo(scrollMagicController);
		scene.addIndicators();
	});


		$('[data-scrollmagic3]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var title = $(elem).find('.team__title'),
		text = $(elem).find('.team__text'),
		img1 = $(elem).find('.team__item1'),
		img2 = $(elem).find('.team__item2'),
		img3 = $(elem).find('.team__item3'),
		img4 = $(elem).find('.team__item4'),
		img5 = $(elem).find('.team__item5'),
		img6 = $(elem).find('.team__item6'),
		img7 = $(elem).find('.team__item7'),
		img8 = $(elem).find('.team__item8'),
		img9 = $(elem).find('.team__item9');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(title, 2.4, {x: '60px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(text, 2.8, {x: '60px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img1, 1.0, {x: '-40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img2, 1.5, {x: '-40px', opacity: 0,scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img3, 2.0, {x: '-40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img4, 2.5, {x: '-40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img5, 3.0, {x: '-40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img6, 3.5, {x: '-40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img7, 4.0, {x: '40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img8, 4.5, {x: '40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(img9, 5.0, {x: '40px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			reverse: false,
			offset: -180
		})

		.setTween(tl)
		.addTo(scrollMagicController);
		scene.addIndicators();
	});


		$('[data-scrollmagic4]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var title = $(elem).find('.review__title'),
		text = $(elem).find('.review__text'),
		list = $(elem).find('.review__slider');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(title, 1.3, {x: '-50px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(text, 1.8, {x: '-50px', opacity: 0, scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(list, 2.3, {x: '-60px', opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeOut}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			reverse: false,
			offset: -180
		})

		.setTween(tl)
		.addTo(scrollMagicController);
		scene.addIndicators();
	});


		$('[data-scrollmagic5]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var title = $(elem).find('.news__title'),
		list = $(elem).find('.news__list');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(title, 1.4, {x: '50px', opacity: 0,scale: 1.05}, {x: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
		.fromTo(list, 1.8, {x: '50px', opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeOut}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			reverse: false,
			offset: -180
		})

		.setTween(tl)
		.addTo(scrollMagicController);
		scene.addIndicators();
	});


		$('[data-scrollmagic6]').each(function(index, elem) {
		// Init ScrollMagic Controller
		var scrollMagicController = new ScrollMagic();

		// Create Animations
		var list = $(elem).find('.social__list');

		var tl = new TimelineMax({
			pause: true
		});
		tl.add("start") // add timeline label

		.fromTo(list, 1.4, {x: '50px', opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeOut}, "start")

		// Create the Scene and trigger when visible
		var scene = new ScrollScene({
			triggerElement: elem,
			offset: -180
		})

		.setTween(tl)
		.addTo(scrollMagicController);
		scene.addIndicators();
	});
	};
});



// SHOW MORE
$(function() {
	$(".portfolio__figure").slice(0, 4).show();

	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".portfolio__figure:hidden").slice(0, 4).slideDown();

		$('html,body').animate({
			scrollTop: $(this).offset().top
		}, 1500);

		if ($(".portfolio__figure:last").css('display') == 'block') {
			$('#loadMore').hide();
		}
	});
});



$(".form").submit(function() {
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: th.serialize()
	}).done(function() {

		window.location = 'thanks.html';

		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
	});
	return false;
});


window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');