$(document).ready(() => {
  var latitude;
  var longitude;
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   // console.log(position.coords.latitude, position.coords.longitude);
  //    var latitude = position.coords.latitude;
  //    var longitude = position.coords.longitude;
  // });
  function showPosition(position) {
  // console.log("Latitude: " + position.coords.latitude +"Longitude: " + position.coords.longitude)
    sessionStorage.setItem('latitude', position.coords.latitude);
    sessionStorage.setItem('longitude', position.coords.longitude);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
  var latitude = sessionStorage.getItem('latitude');
  var longitude = sessionStorage.getItem('longitude');

  function getWeatherAPI(latitude, longitude) {
    $('#weatherReport').empty();
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=6a7eccd734ea6cc33cc80c8d464a5eca`;
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then((response) => {
      console.log(response);
      console.log(response.weather[0].icon);
      console.log(response.main.temp_max);
      currentTemp = response.main.temp;
      MaxTemp = response.main.temp_max;
      weatherLogo = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
      $('#weatherReport').append(`<ul class='site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0' data-class='social'></ul> <li><a href='#' class='pl-0 pr-3 text-black'><img src="${weatherLogo}"><span style='font-size: 15px'>${currentTemp}&#176;F</span></li></ul>`);
    });
  }

  getWeatherAPI(latitude, longitude);
});
