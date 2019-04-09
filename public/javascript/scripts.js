
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


function musixmatch() {
  let trackId;
  let trackSearch = $("#song-title-input").val().trim();
  let artistSearch = $("#song-artist-input").val().trim();
  let hasLyrics = true;
  const matchApiKey = "601f04e0a4bfae6c0d2125b377f1b935";
  const matchURL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=" + artistSearch + " " + trackSearch + "&apikey=" + matchApiKey + "&has_lyrics=" + hasLyrics;
  const lyricsURL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=95443255&apikey=601f04e0a4bfae6c0d2125b377f1b935"
  console.log(trackSearch);

  // THIS IS FOR ARTSIT SEARCH and track
  $.ajax({
    url: matchURL,
    method: "GET",
  }).then((response) => {
     response = JSON.parse(response)
     var songDiv = $("<div>");
     songDiv.attr("class", "artist");
     songDiv.html(response.message.body.track_list[0].track.track_name);
     $("#song-name").append(songDiv);
     $(".artist").css("color", "red");

    });
     //THIS IS FOR lyrics
      $.ajax({
        url: lyricsURL,
        method: "GET"
      }).then(function(response){
        response = JSON.parse(response)
       var lyricsDiv = $("<div>");
       lyricsDiv.attr("class", "lyrics");
       lyricsDiv.html(response.message.body.lyrics.lyrics_body);
       $("#lyrics").append(lyricsDiv);
       $(".lyrics").css("color", "red");

      });
  }
