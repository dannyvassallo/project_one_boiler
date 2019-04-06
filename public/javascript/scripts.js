const yandexBaseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const yandexAPIKey =
  'trnsl.1.1.20190406T143223Z.056b981f8fc972d3.8e9576d91e670036aa4c8e89760c7acfa28805f4';
const translateLang = 'en-ru';
const rawTranslateText = 'hello this is the text I want to translate';
const translateText = rawTranslateText.replace (/ /g, '+');
const queryURL = `${yandexBaseUrl}?key=${yandexAPIKey}&lang=${translateLang}&text=${translateText}&format=plain`;

/* eslint-disable */
console.warn ('Project One JS Initialized');
/* eslint-enable */

// YANDEX TRANSLATE API
$.ajax ({
  url: queryURL,
  method: 'GET',
}).then (function (response) {
  const languageDisplay = 'Language: Russian';
  const originalTextDisplay = 'Original Text: English';
  const translatedTextDisplay = `Translated Text: ${response.text}`

  $("#translate-display").append(languageDisplay);
  $("#translate-display").append(originalTextDisplay);
  $("#translate-display").append(translatedTextDisplay);
});
