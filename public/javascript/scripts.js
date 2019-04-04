/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// global variables
const { $ } = window;
/* eslint-disable *
let eventName;
let userLocation;
let userRange;
let formBlock = [];
/* eslint-enable */
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

  /* eslint-disable *
  eventName = $('#eventName').val().trim();
  userLocation = $('#userLocation').val().trim();
  userRange = $('#userRange').val().trim();

  formBlock = [eventName, userLocation, userRange];
  /* eslint-enable */
}

$('#submit-btn').on('click', retrieveForm());
