var MongoClient = require('mongodb').MongoClient,
    mongoURL = process.env.MONGOLAB_URI,
    assert = require('assert'),
    dbName = "urlDatabase";

exports.store = function(query, callback) {

// Use connect method to connect to the Server
  MongoClient.connect(mongoURL, function(err, client) {
    assert.equal(null, err);
      console.log('Mongo connection established...');
    
    var db = client.db(dbName);  
    var collection = db.collection('history');
    
    //collection.deleteMany();//{Search:null});
    
    if(query) {  
      // inserts the new query and current time into the db
      var t = new Date().toString(),
        reg = /^(.{4})(.*)(:\d{2}\s)(.*)$/g,
        date = t.replace(reg, "$2, $4");
      collection.insertOne({Search: query, Time: date}, function(err, results) {
        assert.equal(err, null);
        var dbLog= {Search: query, Time: date};
        return callback(null, results)
      }); 
      
    } else {
    
    collection.find({}).toArray(function(err, history) {
      assert.equal(err, null);
      return callback(null, history);
    });/*
    // returns search history and time from db     
    collection.find({}, { 
      sort: {Time: -1},
      limit: 10,
      projection : {_id: 0, Search: 1, Time: 1}
      }).toArray(function(err, history) {
        assert.equal(err, null);  
        return callback(null, history);
    });     */
    }
    console.log("client closed");
    client.close();
 });
  
}
//date = t.replace(/(GMT|UTC)(-|\+)\d{0,4}\s+/g, "");
//module.exports.search = search;