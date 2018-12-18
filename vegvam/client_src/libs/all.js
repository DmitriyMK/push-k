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
			el.outerHTML = Splitter(el.outerHTML, '<span class="varter">$</span>');
		});


    // SCROLL ANIMATION
    $('[data-scrollmagic1]').each(function(index, elem) {
    	var scrollMagicController = new ScrollMagic();

      // Create Animations
      var
      img1 = $(elem).find('.statistics__item1'),
      img2 = $(elem).find('.statistics__item2'),
      img3 = $(elem).find('.statistics__item3'),
      img4 = $(elem).find('.statistics__item4');

      var tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")

      .fromTo(img1, 1.2, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 1.6, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 2.0, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4, {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")


      var scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: -440
      })

      .setTween(tl)
      .addTo(scrollMagicController);
  });
    // END data-scrollmagic1


    $('[data-scrollmagic2]').each(function(index, elem) {
    	var scrollMagicController = new ScrollMagic();

      // Create Animations
      var
      title = $(elem).find('.articleTitle'),
      text = $(elem).find('.articleText'),

      img1 = $(elem).find('.catalog__link'),
      img2 = $(elem).find('.catalog__img'),

      productName = $(elem).find('.catalog__name'),
      productPrice = $(elem).find('.catalog__price'),
      productBtn = $(elem).find('.catalog__btn');

      var tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")

      .fromTo(title, 1.2, {y: '40px', opacity: 0,scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(text, 1.6,  {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img1, 1.2,  {y: '40px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 2.0,  {y: '40px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productName, 1.6, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productPrice, 2.0, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(productBtn, 2.4, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

      var scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: -240
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      // scene.addIndicators();
  });
    // END data-scrollmagic2


    $('[data-scrollmagic3]').each(function(index, elem) {
    	var scrollMagicController = new ScrollMagic();

      // Create Animations
      var
      img1 = $(elem).find('.stringBackStat__item1'),
      img2 = $(elem).find('.stringBackStat__item2'),
      img3 = $(elem).find('.stringBackStat__item3'),
      img4 = $(elem).find('.stringBackStat__item4');


      var tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")


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
      // scene.addIndicators();
  });
    // END data-scrollmagic3


    $('[data-scrollmagic4]').each(function(index, elem) {
    	var scrollMagicController = new ScrollMagic();

      // Create Animations
      var
      title = $(elem).find('.articleTitle'),
      text = $(elem).find('.articleText'),

      img1 = $(elem).find('.catalog__item1'),
      img2 = $(elem).find('.catalog__item2'),
      img3 = $(elem).find('.catalog__item3'),
      img4 = $(elem).find('.catalog__item4'),
      btn = $(elem).find('.articleBtn');

      var tl = new TimelineMax({
      	pause: true
      });

      tl.add("start")

      .fromTo(title, 1.2, {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(text, 1.6,  {y: '40px', opacity: 0, scale: 1.05}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img1, 1.2,  {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img2, 1.6,  {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img3, 2.0,  {y: '80px', opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(img4, 2.4,  {y: '80px',opacity: 0}, {y: 0, opacity: 1, ease: Power2.easeOut}, "start")
      .fromTo(btn, 3.6, {y: '80px', opacity: 0, scale: 1.2}, {y: 0, scale: 1, opacity: 1, ease: Power2.easeOut}, "start")

      var scene = new ScrollScene({
      	triggerElement: elem,
      	reverse: false,
      	offset: -120
      })

      .setTween(tl)
      .addTo(scrollMagicController);
      // scene.addIndicators();
  });
    // END data-scrollmagic4
};



  // BURGER RESPONSIVE < 992px
  $('.burger').click(function() {
  	$(this).toggleClass('active');
  	$(this).parents('.header__top').find('.overlay').toggleClass('open');
  });


  $(".linkSubmenu").hover(function() {
  	if (document.documentElement.clientWidth > 992) {
      // $(this).find(".nav__hide").toggleClass("nav__show");
      $(this).find(".nav__link").toggleClass("nav__link-active");
  };
});


  $('.linkSubmenu').click(function() {
  	if (document.documentElement.clientWidth < 992) {

  		$(this).find(".nav__hide").toggleClass("nav__show");
  		$(this).find(".nav__link").toggleClass("nav__link-active");

  	};
  });



  // var bLazy = new Blazy();



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
  	arrows: true,
  	dots: true,
  	infinite: true,

  	focusOnSelect: true,
  	centerMode: true,
  	centerPadding: "20px",

  	responsive: [{
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


  $('.peoplePage__slider').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
  	dots: true,
  	lazyLoad: 'ondemand',

  	responsive: [

  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3,
  		}
  	},

  	{
  		breakpoint: 801,
  		settings: {
  			slidesToShow: 2,
  		}
  	},

  	{
  		breakpoint: 600,
  		settings: {
  			slidesToShow: 1
  		}
  	}

  	]
  });


  $('.recipePage__slider').slick({

  	arrow: true,
  	dots: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	rows: 2,
  	infinite: false,
  	lazyLoad: 'ondemand',

  	responsive: [

  	{
  		breakpoint: 1100,
  		settings: 
  		{
  			slidesToShow: 3,
  			rows: 2,
  		}
  	}, 

  	{
  		breakpoint: 992,
  		settings: 
  		{
  			slidesToShow: 2,
  			rows: 1,
  		}
  	},

  	{
  		breakpoint: 600,
  		settings: 
  		{ 
  			slidesToShow: 1,
  			rows: 1,
  		}
  	},


  	]
  });



  $('.productSlider-big').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	infinite: false,
  	draggable: false,
  	asNavFor: '.productSlider-small'
  });


  $('.productSlider-small').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	asNavFor: '.productSlider-big',
  	dots: false,
  	infinite: false,
    // centerMode: true,
    focusOnSelect: true
});



});


$(window).scroll(function() {
	if ($(this).scrollTop() > 30) {
		$('#header').addClass('fixed');
	} else if ($(this).scrollTop() < 30) {
		$('#header').removeClass('fixed');
	}
});


$(window).scroll(function() {
	if ($(this).scrollTop() > 30) {
		$('#headerInner').addClass('fixedInner');
	} else if ($(this).scrollTop() < 30) {
		$('#headerInner').removeClass('fixedInner');
	}
});



// FORMS 
$("#feedbackForm").validate({

	rules: {
		name: "required",
		email: {
			required: true,
			email: true,
		},
		phone: {
			required: true,
		}

	},
	messages: {
		name: "Введите как минимум два символа",
		email: "Проверьте правильность ввода",
		phone: "Введите корректный номер телефона",
		message: "Поле для сообщения не может быть пустым"
	},

	submitHandler: function() {
		var th = $("#feedbackForm");

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {

      // window.location = 'thank.html';

      setTimeout(function() {
      	th.trigger("reset");
      }, 1000);
  });

		return false;
	}
});


$("#ServicesForm").validate({

	rules: {
		name: "required",
		email: {
			required: true,
			email: true,
		},
		phone: {
			required: true,
		},
		typeEvents: {
			required: true,
		}
	},

	messages: {
		name: "Введите как минимум два символа",
		email: "Проверьте правильность ввода",
		phone: "Введите корректный номер телефона",
		typeEvents: "Выберите вид мероприятия",
		guest: "Введите количество гостей",
		budget: "Введите сумму Вашего бюджета"
	},

	submitHandler: function() {
		var th = $("#feedbackForm");

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {

      // window.location = 'thank.html';

      setTimeout(function() {
      	th.trigger("reset");
      }, 1000);
  });

		return false;
	}
});



// $(window).load(function() {

//   $(window).on('resize orientationchange', function() {
//     $('.slider').slick('resize');
//   });

// });

// SELECT FUNCTION
var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];

	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);

	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {

		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function(e) {

			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {

		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {

	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}

document.addEventListener("click", closeAllSelect);
// END  SELECT FUNCTION


window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');