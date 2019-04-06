
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

var trackId;
var trackSearch;
var artistSearch;
var lyricsApiKey = "09856f0a7bc6623dc9e1a3c333f42318";
//var lyricsURL = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackId + "&track.search?q_track=" + trackSearch + "&track.search?q_artist=" + artistSearch + "&apikey=" + lyricsApiKey;
var lyricsURL = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?q_artist=" + artistSearch + "&apikey=" + lyricsApiKey;



//THIS IS FOR ARTSIT SEARCH and track
$.ajax({
  url: lyricsURL,
  method: "GET"
}).then(function(response){
  console.log(response);

    //THIS IS FOR lyrics
    $.ajax({
      url: lyricsURL,
      method: "GET"
    }).then(function(response){
      console.log(response);
      //THIS IS FOR LYRICS SEARCH

    });

  });
  
//http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=123003777&apikey=09856f0a7bc6623dc9e1a3c333f42318
//gets lyrics with track id

//http://api.musixmatch.com/ws/1.1/track.search?q=justin%20bieber%20Sorry&apikey=09856f0a7bc6623dc9e1a3c333f42318&f_has_lyrics=true
//pulls artist and track name and if it has lyrics
