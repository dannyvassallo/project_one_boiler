(function() {
  var cx = '002589851747781292632:otxq7bq4gda';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

var searchState = "new york";
var queryURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDP85R1SUKp95n37SnpP6L6DzfYrZttGto&cx=002589851747781292632:otxq7bq4gda&q=top 10 news in "+searchState;

var articleTitle = []
var articleUrl = []


// function grabjson(searchterm) {
  $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
      for (i=0; i<response.items.length; i++){
        //console.log(response.items[i]);
        console.log((i+1) + ": " +response.items[i].title);
        console.log(response.items[i].link);
        console.log("============================================================");

        var trRow = $("<tr>").append($("<td>").html(response.items[i].title));
        $('.articleTitle').append(trRow);
        var hlink=$("<a>").attr("href",response.items[i].link).text("click here")
        trRow = $("<tr>").append($("<td>").html(hlink));
        $('.articleTitle').append(trRow);
        trRow = $("<tr>").append($("<td>").html("============================================================"));
        $('.articleTitle').append(trRow);



      }

    })

// }
