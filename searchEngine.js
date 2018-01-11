var fetch = require('node-fetch');


exports.engine = function(url, complete) {
  
  fetch(url) 
    .then(function(res) {
    var err = {status: res.staus, statusCode: res.statusCode};
    if(res.status !== 200) return complete(err);
    //console.log(res.status,"Status", res.json)
      return res.json();
    }).then(function(json) {
    var jsonp = json.items;
    console.log(jsonp.length, "length")
      var obj = [];
      for(var i = 0; i < jsonp.length; i++) {
        var arr = jsonp[i],
          items = {  imageURL : arr.pagemap.cse_image[0].src,
                     altText: arr.snippet, 
                     pageURL: arr.link                
                  };
          obj.push(items);
      }    
    if(obj.length === 0) {
      return complete(json)
    }
   return complete(null, obj);
  });
}