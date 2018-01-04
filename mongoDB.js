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
       
      // checks for url in database     
      collection.find({original_url : url}).toArray(function(err, urlLib) {
        assert.equal(err, null);
      }                                                    
}