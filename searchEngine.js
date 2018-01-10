var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  fetch(url) 
    .then(function(res) {
    console.log(res.statusCode)
      return res.json();
    }).then(function(json) {
    
    for(var i = 0; i < json
    
    
    
      complete(json);
    });
}