//
// var myLatlng = new google.maps.LatLng(49.12259, 9.210834999999975);
// var marker;
// var map;
// window.addEventListener("resize", rememberCenter);
// //HHN Sontheim
// function initMap() {
//      map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: {lat: 49.12259, lng: 9.210834999999975}
//     });
//
//     marker.addListener('click', toggleBounce);
//
//     google.maps.event.addDomListener(window, 'load', initialize);
//     google.maps.event.addDomListener(window, "resize", function () {
//         var center = map.getCenter();
//         google.maps.event.trigger(map, "resize");
//         map.setCenter(center);
//     });
// }
// //HHN Sontheim
// function hhnsontheim() {
//      map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: {lat: 49.12259, lng: 9.210834999999975}
//
//     });
// //Marker fällt auf Ziel!
//     marker = new google.maps.Marker({
//         map: map,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: {lat: 49.12259, lng: 9.210834999999975}
//     });
//     marker.addListener('click', toggleBounce);
// }
// // damit der Marker springt
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }
// //HHN Europacampus
// function campus() {
//      map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: {lat: 49.148306, lng: 9.21648}
//     });
// //Marker fällt auf Ziel!
//     marker = new google.maps.Marker({
//         map: map,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: {lat: 49.148306, lng: 9.21648}
//     });
//     marker.addListener('click', toggleBounce);
// }
// // damit der Marker springt
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }
// //HHN Schwäbisch Hall
// function hhnsha() {
//      map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 18,
//         center: {lat: 49.112536, lng: 9.743618}
//     });
// //Marker fällt auf Ziel!
//     marker = new google.maps.Marker({
//         map: map,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: {lat: 49.112536, lng: 9.743618}
//     });
//     marker.addListener('click', toggleBounce);
// }
// // damit der Marker springt
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }
// //HHN Künzelsau
// function hhnkun() {
//      map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 17,
//         center: {lat: 49.275552, lng: 9.712164}
//     });
// //Marker fällt auf Ziel!
//     marker = new google.maps.Marker({
//         map: map,
//         draggable: true,
//         animation: google.maps.Animation.DROP,
//         position: {lat: 49.275552, lng: 9.712164}
//     });
//     marker.addListener('click', toggleBounce);
// }
// // damit der Marker springt
// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }


var map;
var marker;

$(function () {
    google.maps.event.addDomListener(window, 'load', initMap);
});

function initMap() {
// default: Heilbronn center
    var location = new google.maps.LatLng(49.142598, 9.218245);

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 18,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
}
    map = new google.maps.Map(mapCanvas, mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: location
    });

    google.maps.event.addDomListener(window, "resize", recenterMap);
}

function recenterMap() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.panTo(center);
}

function hhnsontheim() {
    var location = new google.maps.LatLng(49.12259, 9.210834999999975);
    marker.setPosition(location);
    map.panTo(location);
};

function hhnkun() {
    var location = new google.maps.LatLng(49.275552, 9.712164);
    marker.setPosition(location);
    map.panTo(location);
};

function hhnsha() {
    var location = new google.maps.LatLng(49.112536, 9.743618);
    marker.setPosition(location);
    map.panTo(location);
};

function campus() {
    var location = new google.maps.LatLng(49.148306, 9.21648);
    marker.setPosition(location);
    map.panTo(location);
};