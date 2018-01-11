var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  
  fetch(url) 
    .then(function(res) {
    console.log(res.status,"Status", res.json)
      return res.json();
    }).then(function(json) {
    console.log(json.items.length, "length", json)
      var obj = [];
      for(var i = 0; i < json.items.length; i++) {
        var arr = json.items[i],
          items = {  imageURL : arr.pagemap.cse_image[0].src,
                     altText: arr.snippet, 
                     pageURL: arr.link                
                  };
          obj.push(items);
      }    
    complete(obj);
  });
}