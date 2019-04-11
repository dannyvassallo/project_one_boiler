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
const database = firebase.database();

$('#original-lyrics-display').hide();
$('#translated-lyrics-display').hide();

database.ref().on('value', (snapshot) => {
  $('#last-song-div').text(snapshot.val().lastSong);
});

// SUBMIT BUTTON ONCLICK FUNCTION
$('#submit-button').on('click', () => {
  event.preventDefault();

  const songQuery = $('#song-title-input').val().trim();
  const artistQuery = $('#song-artist-input').val().trim();

  songInfoSearch(songQuery, artistQuery);
  videoSearch(songQuery, artistQuery);
});

// VIDEO FUNCTION (YOUTUBE)
function videoSearch(song, artist) {
  const youtubeQueryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${song} ${artist}&type=music&key=AIzaSyDm3Avv6gF5Xgw2YEm3GB5ILBO5-caJfwU`;
  const watchVideoUrl = 'https://www.youtube.com/embed/';

  $.ajax({
    url: youtubeQueryUrl,
    method: 'GET',
  }).then((response) => {
    $('#videos-display').empty();
    const results = response.items[0].id.videoId;
    const youTubeVid = watchVideoUrl + results;
    const videos = $('<iframe>');
    videos.attr('src', youTubeVid);
    $('#videos-display').append(videos);
  });
}

// ARTIST, TRACK, AND TRACKID FUNCTION (MUSIXMATCH)
function songInfoSearch(song, artist) {
  let trackId;
  const trackSearch = song;
  const artistSearch = artist;
  const hasLyrics = true;
  const matchApiKey = '601f04e0a4bfae6c0d2125b377f1b935';
  const matchURL = `https://api.musixmatch.com/ws/1.1/track.search?q=${artistSearch} ${trackSearch}&apikey=${matchApiKey}&has_lyrics=${hasLyrics}`;

  $.ajax({
    type: 'GET',
    data: {
      apikey: '601f04e0a4bfae6c0d2125b377f1b935',
      q: `${song} ${artist}`,
      has_lyrics: true,
      format: 'jsonp',
      callback: 'jsonp_callback',
    },
    url: 'https://api.musixmatch.com/ws/1.1/track.search?q=',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success(response) {
      $('#song-name-display').empty();

      const songDiv = $('<div>');
      songDiv.attr('class', 'artist');
      songDiv.html(response.message.body.track_list[0].track.track_name);
      console.log(response);
      trackId = response.message.body.track_list[0].track.track_id;
      console.log(trackId);
      $('#song-name-display').append(songDiv);

      database.ref().set({
        lastSong: response.message.body.track_list[0].track.track_name,
      });

      lyricsSearch(trackId);
    },
  });
}

// LYRICS FUNCTION (MUSIXMATCH)
function lyricsSearch(trackId) {
  $.ajax({
    type: 'GET',
    data: {
      apikey: '601f04e0a4bfae6c0d2125b377f1b935',
      track_id: trackId,
      format: 'jsonp',
      callback: 'jsonp_callback',
    },
    url: 'https://api.musixmatch.com/ws/1.1/track.lyrics.get',
    dataType: 'jsonp',
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success(response) {
      $('#translated-lyrics-display').empty();

      const lyrics = response.message.body.lyrics.lyrics_body;

      console.log(lyrics);

      $('#original-lyrics-display').html(`Original Lyrics:<br> ${lyrics}`);

      translateLyrics(lyrics);
    },
    error(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    },
  });
}

// TRANSLATOR FUNCTION (YANDEX)
function translateLyrics(originalLyrics) {
  const yandexBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  const yandexAPIKey = 'trnsl.1.1.20190406T143223Z.056b981f8fc972d3.8e9576d91e670036aa4c8e89760c7acfa28805f4';
  const translateLang = $('#language-input option:selected').text();
  const translateLangCode = $('#language-input option:selected').val();
  const rawTranslateText = originalLyrics;
  const translateText = rawTranslateText.replace(/ /g, '+');
  const yandexQueryURL = `${yandexBaseUrl}?key=${yandexAPIKey}&lang=${translateLangCode}&text=${translateText}&format=plain`;

  $.ajax({
    url: yandexQueryURL,
    method: 'GET',
  }).then((response) => {
    $('#language-display').text(`Language: ${translateLang}`);
    $('#translated-lyrics-display').html(
      `Translated Lyrics:<br> ${response.text}`,
    );

    $('#original-lyrics-display').show();
    $('#translated-lyrics-display').show();
  });
}
