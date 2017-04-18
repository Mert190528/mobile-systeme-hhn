/**
 * Created by Valmir on 11.04.2017.
 */
var myLatlng = new google.maps.LatLng(49.12259,9.210834999999975);
var marker;
//HHN Sontheim
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 49.12259, lng: 9.210834999999975}
  });
//Marker fällt auf Ziel!
//   marker = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: {lat: 49.12259, lng: 9.210834999999975}
//   });
  marker.addListener('click', toggleBounce);
//}
// damit der Marker springt
// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
 }
//HHN Sontheim
function hhnsontheim() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 49.12259, lng: 9.210834999999975}
  });
//Marker fällt auf Ziel!
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.12259, lng: 9.210834999999975}
  });
  marker.addListener('click', toggleBounce);
}
// damit der Marker springt
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
//HHN Europacampus
function campus() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 49.148306, lng: 9.21648}
  });
//Marker fällt auf Ziel!
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.148306, lng: 9.21648}
  });
  marker.addListener('click', toggleBounce);
}
// damit der Marker springt
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
//HHN Schwäbisch Hall
function hhnsha() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 49.112536, lng: 9.743618}
  });
//Marker fällt auf Ziel!
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.112536, lng: 9.743618}
  });
  marker.addListener('click', toggleBounce);
}
// damit der Marker springt
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
//HHN Künzelsau
function hhnkun() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 49.275552, lng: 9.712164}
  });
//Marker fällt auf Ziel!
  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.275552, lng: 9.712164}
  });
  marker.addListener('click', toggleBounce);
}
// damit der Marker springt
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


