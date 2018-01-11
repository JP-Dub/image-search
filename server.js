'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    express = require('express'),
    mongo = require('./mongo'),
    search = require('./searchEngine'),
    app = express();
   
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// destination for search and search results
app.get("/search/*", function(req, res) {
  var query = req.params[0],
      offset = req.query.offset || 0, 
      options = "&exactTerms=" + query + "&num=10&c2coff=1&imgSize=large&imgType=photo&searchType=image&imgColorType=color&fields=items&startPage=";  
  // options = "&exactTerms=" + query + "&num=10&c2coff=1&imgColorType=color&client=google-csbe&fields=items&start="; 
      var url = "https://www.googleapis.com/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG; 
  
  // function for http request
  search.engine(url, function complete(err, results) {
    if (err) return res.json(err);
      res.json(results);     
  }),// saves search results
     mongo.store(query, function(err, results) {
      if(err) return console.error(err);
      console.log(results)
    });
  
});

// post results of last 10 searches
app.get("/history", function (req, res) {
  //var results;
  mongo.store(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.json(results);
  });     
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});