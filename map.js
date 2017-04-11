/**
 * Created by Valmir on 11.04.2017.
 */
function initMap() {
  var uluru = {lat: 49.12259, lng: 9.210834999999975};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var HHN_eins = {lat: 49.27555220000001, lng: 9.71216359999994};
  var marker = new google.maps.Marker({
      position: HHN_eins,
      map:map,
  })
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

