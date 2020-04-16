var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0b7b4d516b1b4fa3af287bc8d2c964a4';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    function displayStories(){
        
    }