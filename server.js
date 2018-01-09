'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    mongo = require('./mongo'),
    express = require('express'),
    app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/search/*", function (req, res) {
  var query = req.params[0],
      offset = req.param('offset'),
      options = "&num=10&c2coff=1&start="; 
      if(!offset) {     
        offset = 10;
      }
  var https = "https://www.googleapis.com/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG; 
  //res.sendFile(__dirname + '/views/postsearch.html');
  mongo.search(query, function(err, results) {
    if(err) return console.error(err);
    console.log("saved: ", query);  
  });
  res.redirect(https);
});
    
// post results of last 10 searches
app.get("/history", function (req, res, next) {
  var results;
  mongo.search(null, function callback(err, results) { 
    if(err) return console.error(err);
    results = results.reverse();
    //exports.history = results;
    res.render('/views/index.html', '/public/client.js')
    //res.json(results.reverse());
  });     
  //res.sendFile(__dirname + '/views/index.html'); 
  //res.render(__dirname + '/views/index.html');doesn't work
    //res.json(results.reverse());
});



// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});