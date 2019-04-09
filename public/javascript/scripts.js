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
/* eslint-disable */
// function createBlocks (event) {
//  //tier 4
//   var newCardBody = $("<div class='card-body'>");
//   $("#tableZone > .card").append(newCardBody);
//  //tier 5
//   var table = $("<table class='table'>");
//   $(".card-body").append(newCardHeader);
//  //tier 6
//   var tableHead = $("<thead>");
//   $(".table").append(tableHead);
//  //tier 7
//   var topRow = $("<tr>").append(
//    //tier 8
//     $("<td>").text("Date"),
//     $("<td>").text("Event"),
//     $("<td>").text("Venue Name"),
//     $("<td>").text("City/Town"),
//     $("<td>").text("Buttons")
//       );
//    //tier 6
//     $("<thead>").append(topRow);
//    //tier 5
//     table.append(tableHead);
//    //tier 6
//     var tableBody = $("<tbody>");
//    //tier 7
//     var resultRow = $("<tr>").append(
//      //tier 8
//         $("<td>").text(this.eventDate),
//         $("<td>").text(this.eventName),
//         $("<td>").text(this.eventVenueName),
//         $("<td>").text("cityState"),
//         $("<td>").text("Add-to-Profile Button"),
//       );
//     //  $("#tableZone > .card").append(newCardHeader);
//  //tier 6
//   tableBody.append(resultRow);
//  //tier 5
//   table.append(tableBody);
//  //tier 4
//   newCardBody.append(table);

/* eslint-disable */

/* eslint-disable */
function requestTicketmaster() {
  let myUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=IOLEuwOBaextS3XP3HR0L3NUcF3eaFqf&keyword=${eventName}&postalCode=${userLocation}&radius=${userRange}&unit=miles`;
  console.log("API URL, Notice its broken if inout is spaced: ", myUrl);
  $.ajax({
    url: myUrl,
    method: 'GET',
  }).then(function(response) {
    let responseX = response['_embedded'];
    console.log("responseX: ", responseX);
  for (let i = 0; i < responseX.events.length; i += 1) {
    let eventTitle = responseX.events[i].name;
    console.log("eventTitle: ", eventTitle);
    let eventImg = responseX.events[i].images;
    console.log("eventImg: ", eventImg);
    let eventDate = responseX.events[i].dates.start.localDate;
    console.log("eventDate: ", eventDate);
    let eventTime = responseX.events[i].dates.start.localTime;
    console.log("eventTime: ", eventTime);
    let eventUrl = responseX.events[i].url;
    console.log("eventUrl: ", eventUrl);
    let eventVenueName = responseX.events[i]['_embedded'].venues[i].name;
    console.log("eventVenueName: ", eventVenueName);
    let eventVenueLong = responseX.events[i]['_embedded'].venues[i].location.longitude;
    console.log("eventVenueLong: ", eventVenueLong);
    let eventVenueLati = responseX.events[i]['_embedded'].venues[i].location.latitude;
    console.log("eventVenueLati", eventVenueLati);
    // let dynamicDiv = $('<div>').addClass('col-9');
    // let dynamicP
  }

  })

  //createBlocks();
  };


function retrieveForm(event) {
  event.preventDefault();

  /* eslint-disable */
  eventName = $('#eventName').val().trim();
  console.log("Input: ", eventName);
  userLocation = $('#userLocation').val().trim();
  console.log("Input: ", userLocation);
  userRange = $('#userRange').val().trim();
  console.log("Input: ", userRange);

  formBlock = [eventName, userLocation, userRange];
  console.log(formBlock);


  requestTicketmaster();
  /* eslint-enable */
}

$('#submit-btn').on('click', retrieveForm);
