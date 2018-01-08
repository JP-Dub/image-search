var query;
var http = "https://www.googleapis.com/customsearch/v1?key=",
    offset = 10,
    options = "&num=10&c2coff=1&start=" + offset;//&hl=en&gl=us&cr=countryUS&searchType=image&siteSearch=items%5B%5D.title%2C%20items%5B%5D.link%2C%20items%5B%5D.imag";
var apiKEY = process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    mongo = require('./mongo'),
    express = require('express'),
    app = express();

app.get("/search/*", function (req, res) {
  res.sendFile(__dirname + '/views/postsearch.html');
  var query = req.params[0];
  console.log("query", query)
  mongo.search(query, function(err, results) {
  if(err) return console.error(err);
    console.log("saved: ", query);  
  });
  var url = http + apiKEY + cxENG + "&q=" + query + options;
  console.log("url" , url)
   //res.redirect(url)
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
