var map;
var marker;


$(function () {
    google.maps.event.addDomListener(window, 'load', initMap);
});

function initMap() {
    /* default: Heilbronn center */
    var location = new google.maps.LatLng(49.142598, 9.218245);

    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: location,
        zoom: 18,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    /* Map wird generiert */
    map = new google.maps.Map(mapCanvas, mapOptions);
    /* Marker wird gesetzt */
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: location
    });

    google.maps.event.addDomListener(window, "resize", recenterMap);
}

/* Funktion zum Zentrieren des Markers, bei Skalierung des Fensters */
function recenterMap() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.panTo(center);
}

/* Standort Sontheim */
function hhnsontheim() {
    var location = new google.maps.LatLng(49.12259, 9.210834999999975);
    marker.setPosition(location);
    map.panTo(location);
    marker.setAnimation(google.maps.Animation.DROP);
    //Auskommentiert da sich der Standort verschiebt beim klicken
    // google.maps.event.addListener(marker, 'click', function() {
    //     var coordInfoWindow = new google.maps.InfoWindow();
    //     coordInfoWindow.setContent('Campus Heilbronn - Sontheim');
    //     coordInfoWindow.setPosition(location);
    //     coordInfoWindow.open(map);
    // });

};

/*Standort Künzelsau */
function hhnkun() {
    var location = new google.maps.LatLng(49.275552, 9.712164);
    marker.setPosition(location);
    map.panTo(location);
    marker.setAnimation(google.maps.Animation.DROP);
    //Auskommentiert da sich der Standort verschiebt beim klicken
    // google.maps.event.addListener(marker, 'click', function() {
    //     var coordInfoWindow = new google.maps.InfoWindow();
    //     coordInfoWindow.setContent('Canpus Künzelsau - Reinhold-Würth-Hochschule');
    //     coordInfoWindow.setPosition(location);
    //     coordInfoWindow.open(map);
    // });

};


/* Standort Schäbisch Hall */
function hhnsha() {
    var location = new google.maps.LatLng(49.112536, 9.743618);
    marker.setPosition(location);
    map.panTo(location);
    marker.setAnimation(google.maps.Animation.DROP);
    //Auskommentiert da sich der Standort verschiebt beim klicken
    // google.maps.event.addListener(marker, 'click', function() {
    //     var coordInfoWindow = new google.maps.InfoWindow();
    //     coordInfoWindow.setContent('Campus Schwäbisch Hall');
    //     coordInfoWindow.setPosition(location);
    //     coordInfoWindow.open(map);
    // });

};

/* Standort Europaplatz */
function campus() {
    var location = new google.maps.LatLng(49.148306, 9.21648);
    marker.setPosition(location);
    map.panTo(location);
    marker.setAnimation(google.maps.Animation.DROP);
    //Auskommentiert da sich der Standort verschiebt beim klicken
    // google.maps.event.addListener(marker, 'click', function() {
    //     var coordInfoWindow = new google.maps.InfoWindow();
    //     coordInfoWindow.setContent('Campus Heilbronn - Am Europaplatz');
    //     coordInfoWindow.setPosition(location);
    //     coordInfoWindow.open(map);
    // });

};