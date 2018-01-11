var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  
  fetch(url) 
    .then(function(res) {
    //console.log(res)
    var err = {status: res.staus, statusText: res.statusText};
    if(res.status !== 200) return complete(err);
    //console.log(res.status,"Status", res.json)
      return res.json();
    }).then(function(json) {
    //var jsonp = json.items;
    //console.log(jsonp.length, "length")
    /*  var obj = [];
      for(var i = 0; i < 10; i++) {
        var arr = jsonp[i];
        if (jsonp[i] === arr.pagemap.cse_image[0].src) {
          var items = {  imageURL : arr.pagemap.cse_image[0].src,
                     altText: arr.snippet, 
                     pageURL: arr.link                
                  };
          obj.push(items);
          }
      } */   
   return complete(null, json);
  });
}

//&orTerms=items%5B%5D.pagemap.(key)%5B%5D

