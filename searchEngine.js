var fetch = require('node-fetch');


exports.engine = function(url, baloney) {
  fetch(url) 
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      baloney(json);
    });
}