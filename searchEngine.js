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

{
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - cats",
    "totalResults": "671000000",
    "searchTerms": "cats",
    "count": 10,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "003371433150986881230:vajkooqsy-y",
    "disableCnTwTranslation": "1",
    "exactTerms": "cats",
    "searchType": "image",
    "imgSize": "large"
   }
  ],
  "nextPage": [
   {
    "title": "Google Custom Search - cats",
    "totalResults": "671000000",
    "searchTerms": "cats",
    "count": 10,
    "startIndex": 11,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "003371433150986881230:vajkooqsy-y",
    "disableCnTwTranslation": "1",
    "exactTerms": "cats",
    "searchType": "image",
    "imgSize": "large"
   }
  ]
 },
 "context": {
  "title": "google"
 },
 "searchInformation": {
  "searchTime": 0.201469,
  "formattedSearchTime": "0.20",
  "totalResults": "671000000",
  "formattedTotalResults": "671,000,000"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Cats (@Cats) | Twitter",
   "htmlTitle": "\u003cb\u003eCats\u003c/b\u003e (@\u003cb\u003eCats\u003c/b\u003e) | Twitter",
   "link": "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
   "displayLink": "twitter.com",
   "snippet": "Cats (@Cats) | Twitter",
   "htmlSnippet": "\u003cb\u003eCats\u003c/b\u003e (@\u003cb\u003eCats\u003c/b\u003e) | Twitter",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://twitter.com/cats",
    "height": 640,
    "width": 638,
    "byteSize": 86406,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2G0B_Do-Yd6IXyx4cXZo0fxt8J_VgrF-kEY10z5PQPqnRbkwuPJDf1BB_g",
    "thumbnailHeight": 137,
    "thumbnailWidth": 137
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cat rehoming gallery | Battersea Dogs & Cats Home",
   "htmlTitle": "\u003cb\u003eCat\u003c/b\u003e rehoming gallery | Battersea Dogs &amp; \u003cb\u003eCats\u003c/b\u003e Home",
   "link": "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/10fdd9b802335615?w=400&h=400",
   "displayLink": "www.battersea.org.uk",
   "snippet": "Cat rehoming gallery | Battersea Dogs & Cats Home",
   "htmlSnippet": "\u003cb\u003eCat\u003c/b\u003e rehoming gallery | Battersea Dogs &amp; \u003cb\u003eCats\u003c/b\u003e Home",
   "mime": "image/",
   "image": {
    "contextLink": "https://www.battersea.org.uk/cats/cat-rehoming-gallery",
    "height": 400,
    "width": 400,
    "byteSize": 46011,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcg2e3XEsWJggLMbuPAQ1k_bsbMQNU-QIeGGzdT-b3Upsa3Ae8ClUNvI",
    "thumbnailHeight": 124,
    "thumbnailWidth": 124
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Aggression between cats | International Cat Care",
   "htmlTitle": "Aggression between \u003cb\u003ecats\u003c/b\u003e | International \u003cb\u003eCat\u003c/b\u003e Care",
   "link": "https://icatcare.org/sites/default/files/kcfinder/images/images/aggressive-red-cat.jpg",
   "displayLink": "icatcare.org",
   "snippet": "Aggression between cats | International Cat Care",
   "htmlSnippet": "Aggression between \u003cb\u003ecats\u003c/b\u003e | International \u003cb\u003eCat\u003c/b\u003e Care",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://icatcare.org/advice/problem-behaviour/aggression-between-cats",
    "height": 326,
    "width": 490,
    "byteSize": 35247,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKCHsUIAfwVFUXatK37OK_PR_GV-sgbcMrmQdg0CTLYUh-JB5YCp-qz8",
    "thumbnailHeight": 86,
    "thumbnailWidth": 130
   }
  },
  {
   "kind": "customsearch#result",
   "title": "The Top Cats for People with Allergies | Petfinder",
   "htmlTitle": "The Top \u003cb\u003eCats\u003c/b\u003e for People with Allergies | Petfinder",
   "link": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152962428-cats-for-allergy-sufferers-632x475.jpg",
   "displayLink": "www.petfinder.com",
   "snippet": "The Top Cats for People with Allergies | Petfinder",
   "htmlSnippet": "The Top \u003cb\u003eCats\u003c/b\u003e for People with Allergies | Petfinder",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.petfinder.com/cats/living-with-your-cat/cats-for-allergy-sufferers/",
    "height": 475,
    "width": 632,
    "byteSize": 60605,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8V8eynROuuZkIB2PSGgvIoT1_7TKi6SjSe-eWrhCCPHQNE2uSsnJNGQ",
    "thumbnailHeight": 103,
    "thumbnailWidth": 137
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Castle Cats: Epic Story Quests on the App Store",
   "htmlTitle": "Castle \u003cb\u003eCats\u003c/b\u003e: Epic Story Quests on the App Store",
   "link": "http://is2.mzstatic.com/image/thumb/Purple118/v4/85/b9/1b/85b91b1f-68a9-5f27-9a42-4f8a6eace4fd/source/520x293bb.jpg",
   "displayLink": "itunes.apple.com",
   "snippet": "Castle Cats: Epic Story Quests on the App Store",
   "htmlSnippet": "Castle \u003cb\u003eCats\u003c/b\u003e: Epic Story Quests on the App Store",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://itunes.apple.com/us/app/castle-cats-epic-story-quests/id1100213419?mt=8",
    "height": 293,
    "width": 520,
    "byteSize": 72770,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAMccjpauYlPxLnot8EbYeAPZvoOTEYAjtyXcV1UqAFlLjiS3iIvsjWY",
    "thumbnailHeight": 74,
    "thumbnailWidth": 131
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Cats: Adoption, Bringing A Cat Home and Care",
   "htmlTitle": "\u003cb\u003eCats\u003c/b\u003e: Adoption, Bringing A \u003cb\u003eCat\u003c/b\u003e Home and Care",
   "link": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg",
   "displayLink": "www.petfinder.com",
   "snippet": "Cats: Adoption, Bringing A Cat Home and Care",
   "htmlSnippet": "\u003cb\u003eCats\u003c/b\u003e: Adoption, Bringing A \u003cb\u003eCat\u003c/b\u003e Home and Care",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.petfinder.com/cats/",
    "height": 353,
    "width": 632,
    "byteSize": 45404,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeow2HuL0CC_pFEUO3XF-es_2x9_Fv4U9VAQjzO2JCR9jirF7yYsdGp2O",
    "thumbnailHeight": 77,
    "thumbnailWidth": 137
   }
  },
  {
   "kind": "customsearch#result",
   "title": "10+ Of The Most Beautiful Cats In The World | Bored Panda",
   "htmlTitle": "10+ Of The Most Beautiful \u003cb\u003eCats\u003c/b\u003e In The World | Bored Panda",
   "link": "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/worlds-most-beautiful-cats-101-57fe01577b72d__700.jpg",
   "displayLink": "www.boredpanda.com",
   "snippet": "10+ Of The Most Beautiful Cats In The World | Bored Panda",
   "htmlSnippet": "10+ Of The Most Beautiful \u003cb\u003eCats\u003c/b\u003e In The World | Bored Panda",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.boredpanda.com/worlds-most-beautiful-cats/",
    "height": 559,
    "width": 700,
    "byteSize": 98378,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4GNB52rrp5Nf1nw0eGIphP12yf9JNFErQiOIRoJaCX96zJd10YBp4NKR",
    "thumbnailHeight": 112,
    "thumbnailWidth": 140
   }
  },
  {
   "kind": "customsearch#result",
   "title": "The 25+ best Cute cats ideas on Pinterest | Kitty, Kittens and ...",
   "htmlTitle": "The 25+ best Cute \u003cb\u003ecats\u003c/b\u003e ideas on Pinterest | Kitty, Kittens and ...",
   "link": "https://i.pinimg.com/736x/1d/25/4c/1d254c426a84908d718fe566083c7583--cute-animals-cats-cute.jpg",
   "displayLink": "www.pinterest.com.au",
   "snippet": "The 25+ best Cute cats ideas on Pinterest | Kitty, Kittens and ...",
   "htmlSnippet": "The 25+ best Cute \u003cb\u003ecats\u003c/b\u003e ideas on Pinterest | Kitty, Kittens and ...",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.pinterest.com.au/explore/cute-cats/",
    "height": 768,
    "width": 512,
    "byteSize": 42265,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUGciX3AHrvhIphps3bl6ZGEHmQqtPhh9VpMOKfz-oKDjBrcTRE_ENqY",
    "thumbnailHeight": 142,
    "thumbnailWidth": 95
   }
  },
  {
   "kind": "customsearch#result",
   "title": "20+ Of The Most Famous Cats On The Internet | Bored Panda",
   "htmlTitle": "20+ Of The Most Famous \u003cb\u003eCats\u003c/b\u003e On The Internet | Bored Panda",
   "link": "https://static.boredpanda.com/blog/wp-content/uploads/2015/06/famous-internet-cats-fb__700.jpg",
   "displayLink": "www.boredpanda.com",
   "snippet": "20+ Of The Most Famous Cats On The Internet | Bored Panda",
   "htmlSnippet": "20+ Of The Most Famous \u003cb\u003eCats\u003c/b\u003e On The Internet | Bored Panda",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.boredpanda.com/famous-cats/",
    "height": 367,
    "width": 700,
    "byteSize": 251677,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLdaO-MVzS57InBE22yQo3V0IDKBqzWiiq2FY5MTvr7KjAqRD_OZrfLY",
    "thumbnailHeight": 73,
    "thumbnailWidth": 140
   }
  },
  {
   "kind": "customsearch#result",
   "title": "How to Be the Best Cat Foster Parent | Petfinder",
   "htmlTitle": "How to Be the Best \u003cb\u003eCat\u003c/b\u003e Foster Parent | Petfinder",
   "link": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/112809642-fostering-cats-kittens-632x475.jpg",
   "displayLink": "www.petfinder.com",
   "snippet": "How to Be the Best Cat Foster Parent | Petfinder",
   "htmlSnippet": "How to Be the Best \u003cb\u003eCat\u003c/b\u003e Foster Parent | Petfinder",
   "mime": "image/jpeg",
   "image": {
    "contextLink": "https://www.petfinder.com/animal-shelters-and-rescues/fostering-cats/fostering-cats-kittens/",
    "height": 475,
    "width": 632,
    "byteSize": 72897,
    "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIF-WXxvxtUC5nwfceDz7bd72yAoPbnu7OoEH7-RSibhL7yi3i5dR1LW4",
    "thumbnailHeight": 103,
    "thumbnailWidth": 137
   }
  }
 ]
}
