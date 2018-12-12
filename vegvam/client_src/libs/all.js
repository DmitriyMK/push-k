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


		let els = document.querySelectorAll(".js-splitme");
		[].forEach.call(els, function(el) {
			el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
		});


     // SCROLL ANIMATION
     $('[data-scrollmagic1]').each(function(index, elem) {
     	let scrollMagicController = new ScrollMagic();

      	// Create Animations
      	let 
      	img1 = $(elem).find('.statistics__item1'),
      	img2 = $(elem).find('.statistics__item2'),
      	img3 = $(elem).find('.statistics__item3'),
      	img4 = $(elem).find('.statistics__item4');

      	let tl = new TimelineMax({
      		pause: true
      	});

      	tl.add("start")

      	.fromTo(img1, 1.2, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      	.fromTo(img2, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      	.fromTo(img3, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      	.fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")


      	let scene = new ScrollScene({
      		triggerElement: elem,
      		reverse: false,
      		offset: 0
      	})

      	.setTween(tl)
      	.addTo(scrollMagicController);
      });
    // END data-scrollmagic1
    

    $('[data-scrollmagic2]').each(function(index, elem) {
    	let scrollMagicController = new ScrollMagic();

      // Create Animations
      let 
      title = $(elem).find('.articleTitle'),
      text = $(elem).find('.articleText'),

      img1 = $(elem).find('.catalogFirst__linkLeft'),
      img2 = $(elem).find('.catalogFirst__imgLeft'),
      img3 = $(elem).find('.catalogFirst__linkRight'),
      img4 = $(elem).find('.catalogFirst__imgRight'),

      productName = $(elem).find('.productName'),
      productPrice = $(elem).find('.productPrice'),
      productBtn = $(elem).find('.productBtn');

      let tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")

      .fromTo(title, 1.2, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(text, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img1, 1.2, {x: '-40px', opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 1.2, {x: '40px', opacity: 0}, {x: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productName, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productPrice, 2.0, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productBtn, 2.4, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

      let scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: 0
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      // scene.addIndicators();
    });
  	// END data-scrollmagic2


  	$('[data-scrollmagic3]').each(function(index, elem) {
  		let scrollMagicController = new ScrollMagic();

      // Create Animations
      let 
      img1 = $(elem).find('.stringBackStat__item1'),
      img2 = $(elem).find('.stringBackStat__item2'),
      img3 = $(elem).find('.stringBackStat__item3'),
      img4 = $(elem).find('.stringBackStat__item4');


      let tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")


      .fromTo(img1, 1.2, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")


      let scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: 0
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      // scene.addIndicators();
    });
    // END data-scrollmagic3
    

    $('[data-scrollmagic4]').each(function(index, elem) {
    	let scrollMagicController = new ScrollMagic();

      // Create Animations
      let 
      title = $(elem).find('.articleTitle'),
      text = $(elem).find('.articleText'),

      img1 = $(elem).find('.catalog__item1'),
      img2 = $(elem).find('.catalog__item2'),
      img3 = $(elem).find('.catalog__item3'),
      img4 = $(elem).find('.catalog__item4'),
      btn = $(elem).find('.articleBtn');

      let tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")

      .fromTo(title, 1.2, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(text, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img1, 1.2, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(btn, 3.6, {y: '80px', opacity: 0, scale: 1.2}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

      let scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: 0
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      // scene.addIndicators();
    });
    // END data-scrollmagic4
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



  let bLazy = new Blazy();



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
   // focusOnSelect: true,
   arrows: true,
   dots: true,
   infinite: true,

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
	let th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: th.serialize()
	}).done(function() {

		let inst = $('[data-remodal-id=modal-thanks]').remodal();
		inst.open();

		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
	});
	return false;
});




window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');