var markersData = [{
        lat: 50.4427651,
        lng: 30.5195291,
        name: "Great Power",
        address: "г. Киев, Крещатик, 45"
    },

    {
        lat: 49.9915345,
        lng: 36.2334419,
        name: "Great Power",
        address: "г. Харьков, ул. Пушкинская 1"
    }
];

var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(49.9915345, 36.2334419);

    var mapOptions = {
        center: centerLatLng,
        zoom: 17,

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
            "featureType": "landscape",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#9debff"
            }, {
                "weight": 0.1
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#ebebeb"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#51dbff"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#51dbff"
            }]
        }, {
            "featureType": "poi"
        }, {
            "featureType": "transit.line",
            "stylers": [{
                "color": "#ff4e80"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "weight": 1.5
            }, {
                "color": "#51dbff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#51dbNaN"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#51dbff"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "color": "#9debff"
            }, {
                "visibility": "off"
            }]
        }, {}, {
            "featureType": "poi.government",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.school",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#51dbff"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "off"
            }]
        }, {}, {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road"
        }]


    };



    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });

    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData.length; i++) {

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;

        addMarker(latLng, name, address);

        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }

    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    map.fitBounds(bounds);

}
google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, name, address) {

    var image = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
        title: name
    });

    google.maps.event.addListener(marker, "click", function() {

        var contentString = '<div class="infowindow">' +
            '<h3>' + name + '</h3>' +
            '<p>' + address + '</p>' +
            '</div>';

        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);

    });
}