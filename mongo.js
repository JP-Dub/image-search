var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    express = require('express'),
    assert = require('assert'),
    dbName = "urlDatabase",
    app = express();

// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
    console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    app.get("/search/*", function (req, res, next) {
    var url = req.params[0];
    res.json(url);
    });
    
    var date = date.now();
            // inserts the newly created short url with the queried url 
    collection.insertOne({search: url, time: date}, function(err, results) {
      assert.equal(err, null);
      res.json(obj);
      client.close();          
    }); 
    
    // checks for url in database     
    collection.find({search : "cars" }).toArray(function(err, urlLib) {
        assert.equal(err, null);
    });                                                    
});