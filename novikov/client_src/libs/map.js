var markersData = [{
    lat: 49.9935,
    lng: 36.230383,
    name: "",
    address: ""
}];

var map, infoWindow;

function initMap() {
    var centerLatLng = new google.maps.LatLng(49.9935, 36.230383);

    var mapOptions = {
        center: centerLatLng,
        zoom: 14,

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
            "elementType": "geometry",
            "stylers": [{
                "saturation": "0"
            }, {
                "lightness": "0"
            }, {
                "visibility": "on"
            }, {
                "gamma": "1"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#e0e9f2"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#000000"
            }, {
                "lightness": "0"
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
                "lightness": 20
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": 17
            }, {
                "weight": 1.2
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#454e57"
            }, {
                "lightness": "0"
            }, {
                "visibility": "on"
            }, {
                "weight": "1.00"
            }, {
                "gamma": "1"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#515a63"
            }, {
                "lightness": "0"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": "0"
            }, {
                "color": "#384147"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": "0"
            }, {
                "weight": 0.2
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#9c2020"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "0"
            }, {
                "visibility": "on"
            }, {
                "color": "#384147"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#384147"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#373f48"
            }, {
                "lightness": "0"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#6a737c"
            }, {
                "lightness": "0"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#1e2227"
            }, {
                "lightness": "0"
            }]
        }]

    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markersData.length; i++) {

        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;

        addMarker(latLng, name, address);

        bounds.extend(latLng);
    }

    // map.fitBounds(bounds);

}

function addMarker(latLng, name, address) {

    var image = 'images/marker.png';

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: image,
        title: name
    });


}