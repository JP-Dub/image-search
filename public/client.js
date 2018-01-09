//var server = require('./server.js');

//var results = server.history

var results = [{"Search":"people","Time":"Mon Jan 08 2018 21:54:57 (UTC)"},{"Search":"presidents","Time":"Mon Jan 08 2018 21:55:03 (UTC)"},{"Search":"banks","Time":"Mon Jan 08 2018 22:03:13 (UTC)"},{"Search":"fish","Time":"Mon Jan 08 2018 22:04:45 (UTC)"},{"Search":"mexican","Time":"Mon Jan 08 2018 22:05:30 (UTC)"},{"Search":"fish","Time":"Mon Jan 08 2018 22:05:49 (UTC)"},{"Search":"india","Time":"Mon Jan 08 2018 22:06:06 (UTC)"},{"Search":"football","Time":"Mon Jan 08 2018 22:17:59 (UTC)"},{"Search":"nascar","Time":"Mon Jan 08 2018 22:18:12 (UTC)"},{"Search":"cars","Time":"Mon Jan 08 2018 22:22:54 (UTC)"}];

$(document).ready(function() {

console.log(results);
  $('header').html("API Basejump: <em>Search History</em>");
  $('article').html("");
  $('article').attr("id", "history");
  $('footer').remove();
  
  for(var i = 0; i < results.length; i++) {
    $("article#history").append("<p>"+ JSON.stringify(results[i]) + "</p>");
    console.log("good to go");
  }
});

/*
$(function() {
  console.log('hello world :o');
  
  $.get('/search/*', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});
*/
