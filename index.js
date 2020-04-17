let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0b7b4d516b1b4fa3af287bc8d2c964a4';

let jumbotronOutput = "";
let altOutput = "";
let articles = []
let req = new Request(url);
fetch(req) //getting the url
    .then((response) => response.json()) //transforms the retrieved data in JSON
    
    .then(function(data){
        console.log(data);
        articles = data.articles;
       // for(let [index, artcle] of articles.entries()){
          displayStories(articles[1]);
            document.querySelector('.headliner').innerHTML = jumbotronOutput;
        //}

        //for(let [index, article] of articles.entries()){
            displayAltStories(articles[5] , articles[6]);
            document.querySelector('.container').innerHTML = altOutput;
              
        //}
    })

//Bootstrap inspo link: https://getbootstrap.com/docs/4.4/examples/blog/
    function displayStories(story){
        let title = story.title;
        let author = story.author;
        let img = story.urlToImage;
        let descript = story.description;
        let url = story.url;

        jumbotronOutput += 
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
</div>        `
        
    }

    function displayAltStories(firstStory, secondStory){
        let first_story_title = firstStory.title;
        let second_story_title = secondStory.title;
       // let third_story_title = thirdStory.title;
        let first_story_img = firstStory.urlToImage;
        let second_story_img = secondStory.urlToImage;
        let first_story_descript = firstStory.description;
        let second_story_descript = secondStory.description;
       // let third_story_descript = thirdStory.description;
        let first_story_url = firstStory.url;

        altOutput += 
        `
        <div class="container">
            <div class="row">
              <div class="col-sm">
                <div class = "card">
                <div class = "card-body">
                <h1 class = "card-title"> ${first_story_title}</h1>
                <p class = "card-text"> ${first_story_descript}</p>
                <img src="${first_story_img}" class="img-fluid" alt="Responsive image" style = "height:auto; width:540px; float:left; padding-right:20px;">
              </div>
              </div>
            </div>
              <div class="col-sm">
                <div class = "card">
                  <div class = "card-body">
                  <img src="${second_story_img}" class="img-fluid" alt="Responsive image" style = "height:auto; width:540px; float:left; padding-right:20px;">
                <h1 class = "card-title">${second_story_title}</h1>
                <p class = "card-text">${second_story_descript}</p>
              </div>
              </div>
              </div>
            </div>
        
        `
    }