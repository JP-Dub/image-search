var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    assert = require('assert'),
    dbName = "urlDatabase";
    //express = require('express'),
    //app = express();

exports.search = function(query, callback) {

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
          //console.log("MongoDB log: {Search: " + query + " , Time: " + date);   
        console.log(results)
      }); 
    }
              
    // returns search history and time from db     
    collection.find({}, { 
      sort: {Time: -1},
      limit: 10,
      projection : {_id: 0, Search: 1, Time: 1}
      }).toArray(function(err, history) {
        assert.equal(err, null);  
        //console.log(history)
        callback(null, history);
    });     
  client.close();
 });
}

//module.exports.search = search;