'use strict';
// init project
var apiKEY = "&key=" + process.env.API_KEY,
    cxENG = "&cx=" + process.env.CX_ENG,
    express = require('express'),
    mongo = require('./mongo'),
    search = require('./searchEngine'),
    //https = require('https'),  
    app = express();
    //var https = require('https');
   
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(process.cwd() + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

 /*
function wretch(url, baloney) {
  fetch(url) 
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      baloney(json);
    });
  // different code
  https.get(url, function(req, res) {
    var status = req.statusCode;
    console.log(status, "status", req);  
    baloney(status, req.header );  
  });

}  */

app.get("/search/*", function (req, res, next) {
  var query = req.params[0] + "&exactTerms=" + req.params[0],
      //exact = "&exactTerms=" + query,
      offset = req.query.offset || 10, //10,//offset = req.param('offset'),
      options = "&num=3&c2coff=1&imgColorType=color&client=google-csbe&start="; //&searchType=image
      
  var url = "https://www.googleapis.com/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG; 
  //var url = "/customsearch/v1?q=" + query + options + offset + apiKEY + cxENG;
  mongo.store(query, function(err, results) {
    if(err) return console.error(err);
    console.log("saved: ", query);   
  });
  //res.redirect(https)
  search.engine(url, function complete(results) {
    //if (err === 200) return console.error(err);
    //console.log(results, 'results')
    res.json(results);
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
  mongo.store(null, function callback(err, results) { 
    if(err) return console.error(err);
    res.json(results.reverse());
  });     
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});