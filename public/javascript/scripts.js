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


const yandexBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const yandexAPIKey = 'trnsl.1.1.20190406T143223Z.056b981f8fc972d3.8e9576d91e670036aa4c8e89760c7acfa28805f4';

// YANDEX TRANSLATE API

$('#submit-button').on ('click', function () {
  event.preventDefault ();


  const translateLang = $('#language-input').val();
  const rawTranslateText = $('#translate-text-input').val();
  const translateText = rawTranslateText.replace(/ /g, '+');
  const yandexQueryURL = `${yandexBaseUrl}?key=${yandexAPIKey}&lang=${translateLang}&text=${translateText}&format=plain`;


  $.ajax({
    url: yandexQueryURL,
    method: 'GET',
  }).then((response) => {
    const languageDisplay = 'Language: Russian';
    const originalTextDisplay = `Original Text:  ${rawTranslateText}`;
    const translatedTextDisplay = `Translated Text: ${response.text}`;

    console.log(response.text);

    $('#language-display').text(languageDisplay);
    $('#original-text-display').text(originalTextDisplay);
    $('#translated-text-display').text(translatedTextDisplay);
  });

    function getSongs(){
      var youtubeQueryUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=artist%7Csongs&safeSearch=moderate&type=video&key=AIzaSyDm3Avv6gF5Xgw2YEm3GB5ILBO5-caJfwU';
      $.ajax({
        url:  youtubeQueryUrl,
        method: 'GET',
      }).then((response) => {
        console.log(response);
      });
    }
  getSongs();
});


// http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=51725924&apikey=09856f0a7bc6623dc9e1a3c333f42318

let trackId;
let trackSearch;
let artistSearch;
const lyricsApiKey = '09856f0a7bc6623dc9e1a3c333f42318';
// var lyricsURL = "http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackId + "&track.search?q_track=" + trackSearch + "&track.search?q_artist=" + artistSearch + "&apikey=" + lyricsApiKey;
const lyricsURL = `http://api.musixmatch.com/ws/1.1/track.lyrics.get?q_artist=${artistSearch}&apikey=${lyricsApiKey}`;


// THIS IS FOR ARTSIT SEARCH and track
$.ajax({
  url: lyricsURL,
  method: 'GET',
}).then((response) => {
  console.log(response);

  // THIS IS FOR lyrics
  $.ajax({
    url: lyricsURL,
    method: 'GET',
  }).then((response) => {
    console.log(response);
    // THIS IS FOR LYRICS SEARCH
  });
});

// http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=123003777&apikey=09856f0a7bc6623dc9e1a3c333f42318
// gets lyrics with track id

// http://api.musixmatch.com/ws/1.1/track.search?q=justin%20bieber%20Sorry&apikey=09856f0a7bc6623dc9e1a3c333f42318&f_has_lyrics=true
// pulls artist and track name and if it has lyrics

// http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=51725924&apikey=09856f0a7bc6623dc9e1a3c333f42318

function getSongs() {
  const youtubeQueryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${song}&type=music&key=AIzaSyDm3Avv6gF5Xgw2YEm3GB5ILBO5-caJfwU`;
  var song = 'Ring of Fire';
  $.ajax({
    url: youtubeQueryUrl,
    method: 'GET',
  }).then((response) => {
    console.log(response);
  });
}
getSongs();

