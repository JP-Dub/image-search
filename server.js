'use strict';
// init project
var http = "https://www.googleapis.com/customsearch/v1?key=",
    offset = 10,
    options = "&num=10&c2coff=1&start=" + offset;//&hl=en&gl=us&cr=countryUS&searchType=image&siteSearch=items%5B%5D.title%2C%20items%5B%5D.link%2C%20items%5B%5D.imag";
var apiKEY = process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    mongo = require('./mongo'),
    express = require('express'),
    app = express();

//var url = require('url');
//var myURL = url.parse("https://imaginary-bank.glitch.me/search/cars?offset=2");
//console.log(myURL)

    
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/search/*", function (req, res) {
  var http = "https://www.googleapis.com/customsearch/v1?key=",
      offset = 10,
      options = "&num=10&c2coff=1&start=" + offset 
  var query = req.params[0];
      offset = req.param('offset');
  //res.sendFile(__dirname + '/views/postsearch.html');
  mongo.search(query, function(err, results) {
  if(err) return console.error(err);
    console.log("saved: ", query);  
  });
  var url = http + apiKEY + cxENG + "&q=" + query + options;
  //console.log("url" , url)
   //res.redirect(url)
});
    
// post results of last 10 searches
app.get("/history", function (req, res, next) {
  mongo.search(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.json(results.reverse());
  }); 
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});