'use strict';
// init project
var query;
var http = "https://www.googleapis.com/customsearch/v1?key=",
    options = "&num=10&start=40&linkSite=0&hl=en&c2coff=1&gl=us&cr=countryUS";//&searchType=image&siteSearch=items%5B%5D.title%2C%20items%5B%5D.link%2C%20items%5B%5D.imag";
var apiKEY = process.env.API_KEY,
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


//&num={count?}&start={startIndex?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
app.get("/search/*", function (req, res) {
  var query = req.params[0];
  console.log("query", query)
  mongo.search(query, function(err, results) {
  if(err) return console.error(err);
    console.log("saved: ", query);  
  });
  var url = http + apiKEY + cxENG + "&q=" + query + options;
  console.log("url" , url)
   res.redirect(url)
});
    

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

  
/*
app.get("/search/*", function (req, res, next) {
  var url = req.params[0];
  var reg = /(sho.rt\/)\w{6,}/gi;
  // checks if url query is a valid url and isn't a shortened url
  if(!validUrl.isUri(url) && !url.match(reg)) {
    var error = {};
    error.Error = url + " doesn't appear to be a valid URL";
    res.json(error);
    return;
  }
  
  // Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
    console.log('Mongo connection established...');
  
    var db = client.db(dbName);
    
    // function to check, create, log, and post url queries and results.     
    function process(url) {
      // Get the urlLib collection
      var collection = db.collection('history');
      var short ="sho.rt/";
        
      // checks for url in database     
      collection.find({original_url : url}).toArray(function(err, urlLib) {
        assert.equal(err, null);
        
        // no url databse results, will create and insert new object
        if (!urlLib.length) {  
          // produces a random 6 alpha-numeric string for the shortened url
          for (var i = 0; i < 6; i++) {
           // short += str[Math.floor(Math.random() * str.length)];
          }
          // if the url is found in the database it is posted
          var obj = {
            original_url : url,
            shortened_url : "https://glacier-feather.glitch.me/" + short
          };
        
        // inserts the newly created short url with the queried url 
        collection.insertOne({original_url: url, shortened_url: short}, function(err, results) {
          assert.equal(err, null);
          res.json(obj);
          client.close();          
        });                  
      } else {
        // if the url queried is found in the database the results are filtered and posted
        obj = {};
        var lib = urlLib[0];
        for(var key in lib) {
          var value = lib[key];
          if(key === "original_url") {
            obj.original_url = value;
          }         
          if(key === "shortened_url") {
            obj.shortened_url = "https://glacier-feather.glitch.me/" + value;
          }
        }  
        res.json(obj);
        client.close();
      }     
    });   
  }; 
   
  // redirects if the url is shortened
  if(url.match(reg)) {
    var shortUrl = db.collection('urlLib');
    shortUrl.find({shortened_url : url}).toArray(function(err, urlLib) {
      assert.equal(err, null);
      var lib = urlLib[0];
        for(var key in lib) {
          var value = lib[key];
          if(key === "original_url") {
            res.redirect(value);
          }
        }
      client.close();
    }) 
  } else {    
    // url is passed to the function for processing
    process(url);
  }
  });  
});


*/