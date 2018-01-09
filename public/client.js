var server = require('./server');

var results = server.history

$(document).ready(function() {

console.log(results);
  $('article').html("");
  for(var i = 0; i < results.length; i++) {
    $("#history").append("<p>"+ JSON.stringify(results[i]) + "</p>");
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
