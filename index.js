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
        for(let [index, artcle] of articles.entries()){
          displayStories(articles[index]);
            document.querySelector('.headliner').innerHTML = output;
        }
    })


    function displayStories(story){
        let title = story.title;
        let author = story.author;
        let img = story.urlToImage;
        let descript = story.description;

        output += `
        <div class = "headliner">
        <div class = "news_story_info">

           <span>${title}</span>
           <br>
           <span>${author}</span>
           <br>
           <img src = "${img}"/>
           <br>
           <span>${descript}</span>
       </div>
        </div>
           `

    }