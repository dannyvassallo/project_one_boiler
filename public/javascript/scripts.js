
/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// global variables
const { $ } = window;
/* eslint-disable */

  // Initialize Firebase //ifelse,,, firebase push instead of acnt,
  const config = {
    apiKey: "AIzaSyAuYurRhlpUCigwzBy1q4ear58FUZox8OA",
    authDomain: "showspotter-10b13.firebaseapp.com",
    databaseURL: "https://showspotter-10b13.firebaseio.com",
    projectId: "showspotter-10b13",
    storageBucket: "showspotter-10b13.appspot.com",
    messagingSenderId: "846813024835"
  };

  firebase.initializeApp(config);

  let eventName;
  let userLocation;
  let userRange;
  let formBlock = [];
  let eventVenueLong;
  let eventVenueLati;
  let venueDistance;
  let venueTravelTime;
  let map;
  let marker;
  let position;

$(document).ready(function() {

  // Get elements and define buttons
  const txtEmail = $("#txtEmail");
  console.log(txtEmail);
  const txtPassword = $("#txtPassword");
  const btnLogin = $("#btnLogin");
  const btnSignUp = $("#btnSignUp");
  const btnLogout = $("#btnLogout");

  //add login event
  btnLogin.on("click", function(event) {
    event.preventDefault();
    // get email and pass
    const email = txtEmail.val().trim();
    console.log(email);
    const pass = txtPassword.val().trim();
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  })

  // add sign up event
  btnSignUp.on("click", function(event) {
    event.preventDefault();
    // get email and pass
    const email = txtEmail.val().toString().trim();
    console.log(email);
    const pass = txtPassword.val().trim();
    const auth = firebase.auth();
    // create user
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  })

  // log out current user
  btnLogout.on("click", function(){
    firebase.auth().signOut();
  })

 // realtime listener, checks for signin
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
     // btnLogout.classList.remove('hide');
    } else {
      console.log('user not logged in');
     // btnLogout.classList.add('hide');
    }
  })
});

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
  console.log("Input: ", eventName);
  userLocation = $('#userLocation').val().trim();
  console.log("Input: ", userLocation);
  userRange = $('#userRange').val().trim();
  console.log("Input: ", userRange);

  formBlock = [eventName, userLocation, userRange];

  requestTicketmaster();
  /* eslint-enable */
}
/* eslint-disable */
function requestTicketmaster() {
  $("#cardZone").empty();
  let myUrl = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=IOLEuwOBaextS3XP3HR0L3NUcF3eaFqf&keyword=${eventName}&postalCode=${userLocation}&radius=${userRange}&unit=miles`;
  console.log("API URL, Notice its broken if inout is spaced: ", myUrl);

  $.ajax({
    url: myUrl,
    method: 'GET',
  }).then(function (response) {
    let responseX = response['_embedded'];

//if else statements added
    if (responseX === undefined) {
      console.log("Try Again");
      var noResults = $("<div class='card' id='errorMessage'>");
      noResults.text("Try Again! There's no results for this in your area.")
      $("#cardZone").append(noResults);
    } else {
      if (responseX.length === 0) {
        var noResults = $("<div class='card' id='errorMessage'>");
        noResults.text("Try Again!")
        $("#cardZone").append(noResults);
    } else {

        console.log(response);
        console.log("responseX: ", responseX);
        const events = responseX.events

        $.each(events, function (index, event) {
          let eventTitle = event.name;
          console.log("eventTitle: ", eventTitle);
          let eventImg = event.images;
          console.log("eventImg: ", eventImg);
          let eventDate = event.dates.start.localDate;
          console.log("eventDate: ", eventDate);
          let eventTime = event.dates.start.localTime;
          console.log("eventTime: ", eventTime);
          let eventUrl = event.url;
          console.log("eventUrl: ", eventUrl);
          let eventVenueName = event['_embedded'].venues[0].name;
          console.log("eventVenueName: ", eventVenueName);
          let eventVenueLong = event['_embedded'].venues[0].location.longitude;
          console.log("eventVenueLong: ", eventVenueLong);
          let eventVenueLati = event['_embedded'].venues[0].location.latitude;
          console.log("eventVenueLati", eventVenueLati);

          let newCard = $("<div class='card'>");
          $("#cardZone").append(newCard);

          let cardHeader = $("<div class='card-header'>");
          newCard.append(cardHeader);
          cardHeader.text(eventTitle);

          let cardBody = $("<div class='card-body'>");
          newCard.append(cardBody);

          let modalInfo = $("<div>");
          modalInfo.attr("data-title", eventTitle);
          modalInfo.attr("data-date", eventDate);
          modalInfo.attr("data-time", eventTime);
          modalInfo.attr("data-url", eventUrl);
          modalInfo.attr("data-venue", eventVenueName);
          modalInfo.attr("data-long", eventVenueLong);
          modalInfo.attr("data-lat", eventVenueLati);
          cardBody.append(modalInfo);

          let button = $("<button>");
          button.attr("type", "button");
          button.attr("class", "btn btn-dark modal-btn");
          button.attr("id", "modal-btn");
          button.attr("data-toggle", "modal");
          button.attr("data-target", "#exampleModal");
          button.text("More Info");
          button.attr("data-url", eventUrl);
          button.attr("data-title", eventTitle);
          button.attr("data-name", eventVenueName);
          button.attr("data-map-info", JSON.stringify({
            lat: eventVenueLati,
            lng: eventVenueLong
          }));

          let info = $("<div>").append(

            $("<p>").text(eventDate),
            $("<p>").text(eventTime),
            $("<p>").text(eventVenueName),
            $("<div>").append(button),
          );
          cardBody.append(info);

          let br = $("<br>");
          $("#cardZone").append(br);
        })
      }
    }
  })
};

function findDistance() {
  let myUrl = 'http://maps.googleapis.com/maps/api/distancematrix/json?key=AIzaSyBix0KNYLf70SQQTX8ghmRR59vDqArz2Wk&units=imperial&origins=' + eventVenueLong
    + ',' + eventVenueLati + '&destinations=' + userLocation

  $.ajax({
    url: myUrl,
    method: 'GET'
  }).then(function (response) {
    venueDistance = response.rows.elements.distance.text;
    venueTravelTime = reponse.rows.elements.duration.text;
  })
}

$('#submit-btn').on('click', retrieveForm);
$('#modal-btn').on('click', findDistance);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: position
  });

  marker = new google.maps.Marker({
    position: position,
    map: map,
  });
}

$(document).on("click", ".modal-btn", function(){
  findDistance();
  var eventShowName = $(this).data("title");
  $(".modal-title").text(eventShowName);

  var modalDiv = $("<div>")

  var venueName = $(this).data("name")

  modalDiv.append($("<p>").text(venueName))

  modalDiv.append($("<p>").text("Distance: " + venueDistance))

  var link = $(this).data("url");
  var pLink = $("<p>").text("Tickets Here!");
  pLink.attr("href", link);
  modalDiv.append(pLink);

  $(".modal-body").append(modalDiv)

  var eventLocation = $(this).data("map-info")
  position = {
    lat: parseFloat(eventLocation.lat),
    lng: parseFloat(eventLocation.lng)
  }
  console.warn(position)
  var venueName = $(this).data("name")
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: position
  });

  marker = new google.maps.Marker({
    position: position,
    map: map,
  });
})
