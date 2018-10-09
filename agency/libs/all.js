// document.getElementsByTagName("body")[0].oncontextmenu = function(e){ e.preventDefault();}




     $(document).ready(function() {    
        
        $("body").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 60,
            // smoothscroll: true,
            cursorwidth: 12,
            cursorborder: 0,
            cursorcolor: '#00a7e5',
            cursorborderradius: 2,
            autohidemode: true,
            horizrailenabled: false,
            cursoropacitymin: 1,
            background: false,
            zindex: "9999"
        });
        
        $('html').addClass('no-overflow-y');
    });

     
    if (document.documentElement.clientWidth > 1200) {
         new WOW().init();
    
    };  
    


    new TiltSlider( document.getElementById( 'slideshow' ) );
      $(function() {
        var clc = setInterval( function() { $('.slideshow nav span:nth-child(2)').click(); }, 5000);
        var clc = setInterval( function() { $('.slideshow nav span:nth-child(1)').click(); }, 10000);
    });



    $(function(){
       $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
            return false; 
       }); 
    });



        var position = $("#partners").offset();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y >= position.top) {
                    $(".up").fadeIn(300);
                } else {
                    $(".up").fadeOut(300);
                }
        });

        var position = $("#works").offset();
            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y >= position.top) {
                    $("#scroll-block").fadeIn(300);
                } else {
                    $("#scroll-block").fadeOut(300);
                }
        });






     $(function(){
            $('#menu').slicknav({

            closeOnClick: true
            // prependTo:'slicknav_menu'
            });

        });


        $(document).ready(function(){
            $(".scroll").on("click", function (event) {
              //отменяем стандартную обработку нажатия по ссылке
              event.preventDefault();

              //забираем идентификатор бока с атрибута href
              var id  = $(this).attr('href'),

              //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
              
              //анимируем переход на расстояние - top за 1500 мс
              $('body,html').animate({scrollTop: top}, 1000);
            });
          });









    $( ".btn-more-1" ).click(function() {
         
          $( ".more-1" ).css("height", "auto");
          // $( ".more-1" ).animate({ height: "auto" }, 1000 );
          // $(".more-1").animateAuto({ height: "auto" }, 1000); 
          $( ".btn-more-1" ).css("display", "none");
          $( ".btn-more-2" ).css("display", "block");
          $( ".more-1 .works-item" ).addClass('fadeInUp');
          
            
    });
    $( ".btn-more-2" ).click(function() {
         
          $( ".more-2" ).css("height", "auto");
          $( ".btn-more-2" ).css("display", "none");
          $( ".btn-more-3" ).css("display", "block");
          $( ".more-2 .works-item" ).addClass('fadeInUp');
       
            
    });
    $( ".btn-more-3" ).click(function() {
         
          $( ".more-3" ).css("height", "auto");
          $( ".btn-more-3" ).css("display", "none");
          $( ".btn-more-4" ).css("display", "block");
          $( ".more-3 .works-item" ).addClass('fadeInUp');
       
            
    });

    $( ".btn-more-4" ).click(function() {
         
          $( ".more-4" ).css("height", "auto");
          $( ".btn-more-4" ).css("display", "none");
          $( ".more-4 .works-item" ).addClass('fadeInUp');
       
            
    });


  

    $(document).ready(function(){
         $('.parallax').scrolly({bgParallax: true});
      });

    

    $( "#modal-recieve-form-1" ).validate({
            
            submitHandler: function() {
                var th = $(".main-form-1");
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    var inst = $('[data-remodal-id=modal-thanks]').remodal();
                    inst.open();

                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;       
            }
        });


     $( "#modal-recieve-form-2" ).validate({
            
            submitHandler: function() {
                var th = $(".main-form-2");
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    var inst = $('[data-remodal-id=modal-thanks]').remodal();
                    inst.open();

                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;       
            }
        });

     $( "#modal-recieve-form-3" ).validate({
            
            submitHandler: function() {
                var th = $(".main-form-3");
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    var inst = $('[data-remodal-id=modal-thanks]').remodal();
                    inst.open();

                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;       
            }
        });

     $( "#modal-recieve-form-4" ).validate({
            
            submitHandler: function() {
                var th = $(".main-form-4");
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    var inst = $('[data-remodal-id=modal-thanks]').remodal();
                    inst.open();

                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;       
            }
        });


     $( "#modal-recieve-form-5" ).validate({
            
            submitHandler: function() {
                var th = $(".main-form-5");
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function() {
                    var inst = $('[data-remodal-id=modal-thanks]').remodal();
                    inst.open();

                    setTimeout(function() {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;       
            }
        });





      jQuery(function($){     
         $("#phone-1").mask("+38(999) 999-99-99");  
         $("#phone-2").mask("+38(999) 999-99-99"); 
         $("#phone-3").mask("+38(999) 999-99-99"); 
         $("#phone-4").mask("+38(999) 999-99-99"); 
         $("#phone-5").mask("+38(999) 999-99-99"); 
       
        
        }); 




function initMap() {

  var latlng = new google.maps.LatLng(50.42975032,30.47450781);
        var settings = {
          zoom: 16,
          center: latlng,
          mapTypeControl: true,
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          scrollwheel: false,
          disableDoubleClickZoom: true,
          navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0079ff"
            },
            {
                "saturation": "70"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "2"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "100"
            },
            {
                "lightness": "100"
            },
            {
                "gamma": "6.53"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#050404"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00c3ff"
            },
            {
                "saturation": "0"
            },
            {
                "lightness": "0"
            }
        ]
    }
],
    
              
      };
    var map = new google.maps.Map(document.getElementById("google-map"), settings);
    var myLatlng = new google.maps.LatLng(50.42975032,30.47450781);
    
    var myOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
        var image = 'images/pointer.png';
      var beachMarker = new google.maps.Marker({
        position: {lat: 50.42975032, lng: 30.47450781},
        map: map,
        icon: image
        // title: 'Push-k Solutions'
      });

}



   