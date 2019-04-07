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

$('#submit-btn').on('click', retrieveForm);

function createTable() {
  $("#tableZone").empty();
 //tier 3
  var newCard = $("<div class='card'>");
  $("#tableZone").append(newCard);
 //tier 4
  var siteName = "Bands In Town"; //this will be grabbed from api
  var newCardHeader = $("<div class='card-header'>" + siteName + "</div>");
  $("#tableZone > .card").append(newCardHeader);
 //tier 4
  var newCardBody = $("<div class='card-body'>");
  $("#tableZone > .card").append(newCardBody);
 //tier 5
  var table = $("<table class='table'>");
  $(".card-body").append(newCardHeader);
 //tier 6
  var tableHead = $("<thead>");
  $(".table").append(tableHead);
 //tier 7
  var topRow = $("<tr>").append(
 //tier 8
  $("<td>").text("Date"),
  $("<td>").text("Event"),
  $("<td>").text("Venue Name"),
  $("<td>").text("City/Town"),
  $("<td>").text("Buttons")
    );
 //tier 6
  $("<thead>").append(topRow);
 //tier 5
  table.append(tableHead);
 //tier 6
  var tableBody = $("<tbody>");
  var button = $("<button>");
  button.attr ("type", "button");
  button.attr ("class", "btn btn-primary");
  button.attr ("data-toggle", "modal");
  button.attr ("data-target", "#exampleModal");
  button.text ("test");

 //tier 7
  var resultRow = $("<tr>").append(
 //tier 8
    $("<td>").text(date),
    $("<td>").text(mainInput),
    $("<td>").text(venue),
    $("<td>").text(cityState),
    $("<td>").text("Add-to-Profile Button"),
    $("<td>").html(button),


    );
 //tier 6
  tableBody.append(resultRow);
 //tier 5
  table.append(tableBody);
 //tier 4
  newCardBody.append(table);

});
