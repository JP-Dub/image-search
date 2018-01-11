var fetch = require('node-fetch');

// function for the https request and data return
exports.engine = function(url, complete) {
  
  fetch(url) 
    .then(function(res) {
    var err = {status: res.staus, statusText: res.statusText};
    if(res.status !== 200) return complete(err);
      return res.json();
    }).then(function(json) {
      // process json data for user  
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
};