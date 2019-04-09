/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// global variables
const { $ } = window;
/* eslint-disable */
let eventName;
let userLocation;
let userRange;
let formBlock = [];
let eventVenueLong;
let eventVenueLati;
let venueDistance;
let venueTravelTime;
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

  /* eslint-disable */
  eventName = $('#eventName').val().trim();
  userLocation = $('#userLocation').val().trim();
  userRange = $('#userRange').val().trim();

  formBlock = [eventName, userLocation, userRange];
  
  requestTicketmaster();
  /* eslint-enable */
}

/* eslint-disable */
function requestTicketmaster() {
  let myUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=IOLEuwOBaextS3XP3HR0L3NUcF3eaFqf&keyword=${eventName}&postalCode=${userLocation}&radius=${userRange}&unit=miles`;

  $.ajax({
    url: myUrl,
    method: 'GET',
  }).then(function(response) {
    let responseX = response['_embedded'];
  for (let i = 0; i < responseX.events.length; i += 1) {
    let eventName = responseX.events[i].name;
    // let eventImg = responseX.events[i].images
    let eventDate = responseX.events[i].dates.start.localDate;
    let eventTime = responseX.events[i].dates.start.localTime;
    let eventUrl = responseX.events[i].url;
    let eventVenueName = responseX.events[i]['_embedded'].venues.name;
    eventVenueLong = responseX.events[i]['_embedded'].venues.location.longitude;
    eventVenueLati = responseX.events[i]['_embedded'].venues.location.latitude;
    // let dynamicDiv = $('<div>').addClass('col-9');
    // let dynamicP
    responseX.events[i].images.findIndex(x => x.ratio === '4_3')
  }
  });
}

function findDistance() {
  let myUrl = 'http://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyBix0KNYLf70SQQTX8ghmRR59vDqArz2Wk&units=imperial&origins=' + eventVenueLong 
  + ',' + eventVenueLati + '&destinations=' + userLocation

  $.ajax({
    url: myUrl,
    method: 'GET'
  }).then(function(response){
    venueDistance = response.rows.elements.distance.text;
    venueTravelTime = reponse.rows.elements.duration.text;
  })
}

$('#submit-btn').on('click', retrieveForm());
