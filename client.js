var server = require('./server');

//var results = server.results


exports.loop =  function(results, success) {
console.log("client.js is read");
  for(var i = 0; i < results.length; i++) {
    $("#history").append("<p>"+ JSON.stringify(results[i]) + "</p>");
    console.log("good to go");
  }
  success();
}