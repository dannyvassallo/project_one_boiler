// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCiLgK-ruR_RYem27X328H3H9bGzujRjn8',
  authDomain: 'songlyrically.firebaseapp.com',
  databaseURL: 'https://songlyrically.firebaseio.com',
  projectId: 'songlyrically',
  storageBucket: 'songlyrically.appspot.com',
  messagingSenderId: '910125473880',
};

firebase.initializeApp (config);


const yandexBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const yandexAPIKey =
  'trnsl.1.1.20190406T143223Z.056b981f8fc972d3.8e9576d91e670036aa4c8e89760c7acfa28805f4';

// YANDEX TRANSLATE API

$('#submit-button').on ('click', function () {
  event.preventDefault ();

  const translateLang = $("#language-input").val();
  const rawTranslateText = $("#translate-text-input").val();
  const translateText = rawTranslateText.replace (/ /g, '+');
  const queryURL = `${yandexBaseUrl}?key=${yandexAPIKey}&lang=${translateLang}&text=${translateText}&format=plain`;


  $.ajax ({
    url: queryURL,
    method: 'GET',
  }).then (function (response) {
    const languageDisplay = 'Language: Russian';
    const originalTextDisplay = 'Original Text: English';
    const translatedTextDisplay = `Translated Text: ${response.text}`;

    $ ('#translate-display').append (languageDisplay);
    $ ('#translate-display').append (originalTextDisplay);
    $ ('#translate-display').append (translatedTextDisplay);
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
