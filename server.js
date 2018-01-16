'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    options = process.env.OPTIONS,
    eng = process.env.ENG,
    search = require('./searchEngine'),
    express = require('express'),
    mongo = require('./mongo'),
    app = express();
   
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.set("json spaces", 2);

// destination for search and search results
app.get("/search/*", function(req, res) {
  var query = req.params[0],
      offset = req.query.offset || 0,
      url = eng + query + apiKEY + offset + options + query;
 
  //module for http request
  search.engine(url, function complete(err, results) {
    if (err) return res.json(err);
      res.json(results);     
  }),// saves search results to mongodb
    mongo.store(query, function(err, results) {
      if(err) return console.error(err);
      console.log(results.ops)
    });
});

// posts the last 10 search queries
app.get("/history", function (req, res) {
  mongo.store(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.send(results);
  });     
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});