'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    mongo = require('./mongo'),
    express = require('express'),
    http = require('https'),
    app = express();
    var https = require('https');
   
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


function fetch(url, baloney) {
  https.get(url, function(req, res) {
    var status = req.statusCode;
    console.log(status, "status", req);  
    baloney(status, req.header );  
  });
}

app.get("/search/*", function (req, res, next) {
  var query = req.params[0],
      offset = req.query.offset || 2, //10,//offset = req.param('offset'),
      options = "&num=1&c2coff=1&imgColorType=color&imgSize=medium&searchType=image&start=";
      
  var url = "https://www.googleapis.com/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG; 
  //var url = "/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG;
  mongo.search(query, function(err, results) {
    if(err) return console.error(err);
    console.log("saved: ", query);   
  });
  //res.redirect(https)
  fetch(url, function baloney(err, results) {
    if (err === 200) return console.error(err);
    console.log(results, 'results')
    res.sendStatus(err);
  });
  
  /*
  https.get(url, (res) => {
  console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);

   res.on('data', (d) => { 
    process.stdout.write(d);
  });

  }).on('error', (e) => {
  console.error(e);
  });*/
   
});

// post results of last 10 searches
app.get("/history", function (req, res, next) {
  var results;
  mongo.search(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.json(results.reverse());
  });     
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});