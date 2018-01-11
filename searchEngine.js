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
    
    //console.log(jsonp.length, "length")
      var obj = [];
      for(var i = 0; i < 10; i++) {
        var arr = json.items[i];
       
          var items = { Title : arr.title, 
                        PageURL : arr.link,
                        Image: arr.image                
                      };
          obj.push(items);   
      }   
   return complete(null, obj);
  });
}

//&orTerms=items%5B%5D.pagemap.(key)%5B%5D

