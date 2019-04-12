$(document).ready(() => {
  const config = {
    apiKey: 'AIzaSyBiZI8F7hHMaxIdiE35dtF2zcyg2pecbSM',
    authDomain: 'eventualities-c1d22.firebaseapp.com',
    databaseURL: 'https://eventualities-c1d22.firebaseio.com',
    projectId: 'eventualities-c1d22',
    storageBucket: 'eventualities-c1d22.appspot.com',
    messagingSenderId: '612928900643',
  };
  firebase.initializeApp(config);

  let map;
  function initMap() {
    const mapOptions = {
      zoom: 10,
      center: { lat: -34.397, lng: 150.644 },
    };
    map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

    const marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng(-34.397, 150.644)
      position: { lat: -34.397, lng: 150.644 },
      map,
    });
  }
});
