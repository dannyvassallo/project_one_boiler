// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAPzKFBHeXyKsllY9xg5aLTmWQTJ4W3yqI',
  authDomain: 'geostormstoreiplocation.firebaseapp.com',
  databaseURL: 'https://geostormstoreiplocation.firebaseio.com',
  projectId: 'geostormstoreiplocation',
  storageBucket: 'geostormstoreiplocation.appspot.com',
  messagingSenderId: '580257142780',
};
firebase.initializeApp(config);

// when user access website, location and public IP address will get stored in the database.
// can be used further to study which country used the site, freq. How many hits per day, per hour etc.

$(document).ready(() => {
  $.getJSON('http://ip-api.com/json?callback=?', (data) => {
    firebase.database().ref().push({
      ip: data.query,
      zip: data.zip,
      city: data.city,
      region: data.regionName,
      country: data.country,
      lat: data.lat,
      lon: data.lon,
    });
  });
});
