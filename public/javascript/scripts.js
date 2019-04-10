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

$('#submit-button').on('click', () => {
  event.preventDefault();


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
      const song = $("#song-title-input").val();
      const artist = $("#song-artist-input").val();
      const youtubeQueryUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + song +' '+ artist + '&type=music&key=AIzaSyDm3Avv6gF5Xgw2YEm3GB5ILBO5-caJfwU';
      const watchVideoUrl = 'https://www.youtube.com/embed/'

      $.ajax({
        url:  youtubeQueryUrl,
        method: 'GET',
      }).then((response) => {
        $("#videos-go-here").empty();
        var results = response.items[0].id.videoId;
        var youTubeVid = watchVideoUrl + results;
        var videos = $("<iframe>");
        videos.attr('src', youTubeVid);
        $("#videos-go-here").append(videos);
      });
    }
  getSongs();
  musixmatch();
});


function musixmatch() {
  let trackId;
  const trackSearch = $('#song-title-input').val().trim();
  const artistSearch = $('#song-artist-input').val().trim();
  const hasLyrics = true;
  const matchApiKey = '601f04e0a4bfae6c0d2125b377f1b935';
  const matchURL = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${artistSearch} ${trackSearch}&apikey=${matchApiKey}&has_lyrics=${hasLyrics}`;

  // THIS IS FOR ARTSIT SEARCH and track
  $.ajax({
    url: matchURL,
    method: 'GET',
  }).then((response) => {
    $("#song-name").empty();
    response = JSON.parse(response);
    const songDiv = $('<div>');
    songDiv.attr('class', 'artist');
    songDiv.html(response.message.body.track_list[0].track.track_name);
    console.log(response);
    trackId = response.message.body.track_list[0].track.track_id;
    console.log(trackId);
    $('#song-name').append(songDiv);
    $('.artist').css('color', 'red');
    getLyrics(trackId);
  });

}
function getLyrics(trackId){
  // THIS IS FOR lyrics
  const lyricsURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + trackId + '&apikey=601f04e0a4bfae6c0d2125b377f1b935';


  $.ajax({
    url: lyricsURL,
    method: 'GET',
  }).then((response) => {
    $("#lyrics").empty();

    response = JSON.parse(response);
    const lyricsDiv = $('<div>');
    lyricsDiv.attr('class', 'lyrics');
    lyricsDiv.html(response.message.body.lyrics.lyrics_body);
    $('#lyrics').append(lyricsDiv);
    $('.lyrics').css('color', 'red');
  });

}
