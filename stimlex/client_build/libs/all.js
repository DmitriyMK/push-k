var language = 'ru';

$(document).ready(function() {

  if (document.documentElement.clientWidth > 1200) {

    $("body").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 60,
      smoothscroll: true,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#6b6c70',
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


  $('.pots__materials button').click(function() {

    if (!$(this).parents('.pots__btn').hasClass('pots__btn-active')) {
      $(this).parents('.pots__materials').find('.pots__btn').removeClass('pots__btn-active');
      $(this).addClass('pots__btn-active');

      $(this).parents('.pots__item').find(".pots__link.pots__link-active").removeClass("pots__link-active");
      $('#' + $(this).data('model')).addClass('pots__link-active');

      $(this).parents('.pots__item').find('.pricePots').html($(this).data('price-' + language));

      $('.form input[name="whatform2"]').val($(this).data('material'));
    }

    return false;
  });



  $('.phone-mask').mask('+39(999)999-99-99');



  $('.review__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: true,

    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: true,
        }
      },

    ]

  });


  $('[data-fancybox]').fancybox({
    loop: true,
    animationEffect: "zoom",
    transitionEffect: "tube",
    transitionDuration: 600,
    clickOutside: "close",
    protect: true,
    modal: false,

    touch: {
      vertical: true,
      momentum: true
    },
  });

});



$(window).on('resize orientationchange', function() {
  $('.slider').slick('resize');
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


function initMap() {

  var latlng = new google.maps.LatLng(48.462556, 34.943155);
  var settings = {
    zoom: 17,
    center: latlng,
    center: {
      lat: 48.462556,
      lng: 34.943155
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    scrollwheel: false,
    disableDoubleClickZoom: true,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    styles:

      [{
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#f8f8f8"
      }, {
        "visibility": "on"
      }, {
        "lightness": "67"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": "100"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": "-41"
      }, {
        "weight": "0.01"
      }, {
        "gamma": "4.10"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }, {
        "gamma": "0.00"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#131313"
      }, {
        "lightness": 17
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#252525"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": "17"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": "16"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": "22"
      }, {
        "saturation": "5"
      }, {
        "gamma": "0.00"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }]

  };

  var map = new google.maps.Map(document.getElementById("google-map"), settings);
  var myLatlng = new google.maps.LatLng(48.462556, 34.943155);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var image = 'images/marker.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 48.462556,
      lng: 34.943155
    },
    map: map,
    icon: image

  });
  initMap2();
};


function initMap2() {

  var latlng = new google.maps.LatLng(55.708056, 37.371586);
  var settings = {
    zoom: 14,
    center: latlng,
    center: {
      lat: 55.708056,
      lng: 37.371586
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    scrollwheel: false,
    disableDoubleClickZoom: true,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    styles:

      [{
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#f8f8f8"
      }, {
        "visibility": "on"
      }, {
        "lightness": "67"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": "100"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": "-41"
      }, {
        "weight": "0.01"
      }, {
        "gamma": "4.10"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }, {
        "gamma": "0.00"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#131313"
      }, {
        "lightness": 17
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#252525"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }, {
        "visibility": "on"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": "17"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": "16"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": "22"
      }, {
        "saturation": "5"
      }, {
        "gamma": "0.00"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }]

  };

  var map = new google.maps.Map(document.getElementById("google-map-ru"), settings);
  var myLatlng = new google.maps.LatLng(55.708056, 37.371586);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var image = 'images/marker.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 55.708056,
      lng: 37.371586
    },
    map: map,
    icon: image

  });

};



window.console.log('Made with fun and love ❤️ Push-K solutions ❤️');