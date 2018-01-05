/*

var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    express = require('express'),
    assert = require('assert'),
    dbName = "urlDatabase",
    app = express();


function history() {
  
// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
      console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    //collection.deleteMany({Search:null});
           
      // returns search history and time from db     
      collection.find( {}, {
                 projection : 
                   {_id: 0, Search: 1, Time: 1}
                 }, { 
                 sort : 
                   {Time: -1}
                 }, {
                 limit : 10 }).toArray(function(err, history) {
        assert.equal(err, null); 
        //console.log("closing client");
        //storeHistory(history);
        client.close();        
          //console.log("return the history, b", history);
       
        return history;        
      });    
    
 });
}

module.exports.history = history;

*/