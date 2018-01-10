var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  fetch(url) 
    .then(function(res) {
    console.log(res.statusCode)
      return res.json();
    }).then(function(json) {
    
    var comp = [];
    for(var i = 0; i < json.items.length; i++) {
      var arr = json.items[i],
          obj = { altText: json.snippet, 
                  pageURL: json.link, 
                  imageURL : json.pagemap.cse_image[0].src
                };
      comp.push(obj);
    }
    
      complete(comp);
    });
}