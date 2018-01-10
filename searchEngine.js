var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  fetch(url) 
    .then(function(res) {
      return res.json();
    }).then(function(json) {
    var json = json[0];
    for(var key in json)
    
    
      complete(json);
    });
}