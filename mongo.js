var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    express = require('express'),
    assert = require('assert'),
    dbName = "urlDatabase",
    app = express();


function search(query) {
var obj;
// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
      console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    //collection.deleteMany({Search:null});
    
    if(query) {  
      // inserts the new query and current time into the db
      var date = new Date().toString();
      collection.insertOne({Search: query, Time: date}, function(err, results) {
        assert.equal(err, null);
          console.log("Mongo has saved the search parameter");
        //client.close();          
      }); 
    }
              
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
        //console.log("return the history, b", history); 
        app.use('/history', function(res) {
          res.json(history)
        });
        obj = history; 
        if(obj.length === history.length) {
          console.log("same length dog");
          return obj;
        }
      });     
    
    console.log("closing the client db");
    client.close();
 });
  
  //return obj;
}



module.exports.search = search;



/*

exports.search = function(query) {
  
// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
    console.log('Mongo connection established...');
  
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    //collection.deleteMany();
    
    if(query !== "repoLog") {
      var date = new Date().toString();
      
      // inserts the new query and current time into the db
      collection.insertOne({Search: query, Time: date}, function(err, results) {
        assert.equal(err, null);
        console.log("Mongo has saved the search parameter");
        client.close();          
      }); 
      
    } else {       
         
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
        client.close();        
        //console.log("return the history, b", history[0]);
      
        //exports.history = "history";
        return history;        
      });    
    }
 });
}
*/