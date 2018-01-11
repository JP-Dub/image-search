'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    express = require('express'),
    mongo = require('./mongo'),
    search = require('./searchEngine'),
    app = express();
    //https = require('https'),  
    
    //var https = require('https');
   
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/search/*", function(req, res) {
  var query = req.params[0],
      offset = req.query.offset || 10, 
      options = "&exactTerms=" + query + "&num=10&c2coff=1&imgColorType=color&client=google-csbe&fields=items&start=";     
      var url = "https://www.googleapis.com/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG; 

  search.engine(url, function complete(err, results) {
    if (err) return console.log(err);
     return res.json(results);    
  }),
  mongo.store(query, function(err, results) {
      if(err) return console.error(err);      
    });
});

// post results of last 10 searches
app.get("/history", function (req, res) {
  //var results;
  mongo.store(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.json(results.reverse());
  });     
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});