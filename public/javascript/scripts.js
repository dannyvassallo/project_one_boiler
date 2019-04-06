/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// global variables
const { $ } = window;

let eventName;
let userLocation;
let userRange;
let formBlock = [];

function loadVideoBackground() {
  const bv = new Bideo(); // eslint-disable-line no-undef
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: './static/images/thebots-blinded.mp4',
        type: 'video/mp4',
      },
      // {
      //   src: 'https://vjs.zencdn.net/v/oceans.webm',
      //   type: 'video/webm;codecs="vp8, vorbis"'
      // }
    ],

    // What to do once video loads (initial frame)
    onLoad() {
      document.querySelector('#video_cover').style.display = 'none';
    },
  });
}

loadVideoBackground();

function retrieveForm(event) {
  event.preventDefault();

  eventName = $('#eventName').val().trim();
  userLocation = $('#userLocation').val().trim();
  userRange = $('#userRange').val().trim();

  formBlock = [eventName, userLocation, userRange];


  // var queryURL = "https://api.eventful.com/rest/events/get?" + eventName + "&limit=10&lang=en";


  var API_KEY = "sVJJH5rghHKW4MpB";
  var queryURL = "http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future&api_key=" + API_KEY;
  //   // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  //After data comes back from the request
  .then(function (response) {
    // console.log(queryURL);
    // var results = response.data;
    console.log(response);
    console.log(event.url);
  })


}

$('#submit-btn').on('click', retrieveForm);
