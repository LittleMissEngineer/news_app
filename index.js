let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0b7b4d516b1b4fa3af287bc8d2c964a4';

let output = "";
let articles = []
let req = new Request(url);
fetch(req) //getting the url
    .then((response) => response.json()) //transforms the retrieved data in JSON
    
    .then(function(data){
        console.log(data);
        articles = data.articles;
       // for(let [index, artcle] of articles.entries()){
          displayStories(articles[1]);
            document.querySelector('.headliner').innerHTML = output;
        //}
    })


    function displayStories(story){
        let title = story.title;
        let author = story.author;
        let img = story.urlToImage;
        let descript = story.description;
        let url = story.url;

        output += 
        `
        <div class="jumbotron" style = "padding-bottom:23px">
        <img src="${img}" class="img-fluid" alt="Responsive image" style = "height:auto; width:540px; float:left; padding-right:20px;">
        <div class = "headliner">
        <div class = "news_story_info">
        <h1 class="display-4"><a href = "${url}" target = "blank" style = "color: black">${title}</a></h1>
        <p class="lead">
        ${descript}</p>
        <hr class="my-4">
      </div>
</div>
</div>
        
        `
        
    }