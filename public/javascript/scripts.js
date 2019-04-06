
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCiLgK-ruR_RYem27X328H3H9bGzujRjn8',
  authDomain: 'songlyrically.firebaseapp.com',
  databaseURL: 'https://songlyrically.firebaseio.com',
  projectId: 'songlyrically',
  storageBucket: 'songlyrically.appspot.com',
  messagingSenderId: '910125473880',
};
firebase.initializeApp(config);

// http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=51725924&apikey=09856f0a7bc6623dc9e1a3c333f42318

youtubeQueryUrl= "https://www.googleapis.com/youtube/v3/search?part=snippet&q=&type=music&key=AIzaSyDm3Avv6gF5Xgw2YEm3GB5ILBO5-caJfwU";

$.ajax({
  url: "youtubeQueryUrl",
  method: "GET"
}).then(function (response) {
  console.log(response);
  })
