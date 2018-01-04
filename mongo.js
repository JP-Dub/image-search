var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    express = require('express'),
    assert = require('assert'),
    dbName = "urlDatabase",
    app = express();
//var seeHistory = {};



exports.search = function(query) {
// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
    console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    //collection.deleteMany();
    
    if(query !== "history") {
      var date = new Date().toString();
      // inserts the newly created short url with the queried url 
      collection.insertOne({Search: query, Time: date}, function(err, results) {
        assert.equal(err, null);
        console.log("Mongo has saved the search parameter");
        client.close();          
      }); 
    } else {       
      // checks for url in database     
      collection.find( {}, {
                 projection : 
                   {_id: 0, Search: 1, Time: 1}
                 }, { 
                 sort : 
                   {Time: -1}
                 }, {
                 limit : 10 }).toArray(function(err, history) {
        assert.equal(err, null);
        
        
        client.close();
        
      });     
    }
});
}

      exports.history = function(seeHistory) {
        console.log(seeHistory);
        return seeHistory;
        }