var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    express = require('express'),
    assert = require('assert'),
    dbName = "urlDatabase",
    app = express();


exports.search = function(query) {
// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
    console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
      
    if(!"history") {
      var date = new Date().toString();
      // inserts the newly created short url with the queried url 
      collection.insertOne({search: query, time: date}, function(err, results) {
        assert.equal(err, null);
        console.log(results, "success");
        client.close();          
      }); 
    } else {       
      // checks for url in database     
      collection.find().select({_id: 0search: "", time: ""}, {limit: 10, sort: -1 ).toArray(function(err, history) {
        assert.equal(err, null);
        return history;
      });     
    }
});
}