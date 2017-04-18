/**
 * Created by Valmir on 11.04.2017.
 */
var myLatlng = new google.maps.LatLng(49.12259,9.210834999999975);
var marker;

function initMap() {
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

