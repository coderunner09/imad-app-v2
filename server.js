var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
    title: 'Article One - Sanjana',
    heading:'Article One',
    date:'12 February, 2017',
    content:
    ` <p>
            This is the content for my first article.
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>
        <p>
            This is the content for my first article.
        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
        </p>`
},
'article-two' : {
    title: 'Article Two - Sanjana',
    heading:'Article Two',
    date:'15 February, 2017',
    content:
    ` <p>
            This is the content for my second article.
       
        </p>
       
        <p>
            This is the content for my second article.
        This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
        </p>`
},
'article-three' : {
    title: 'Article Three - Sanjana',
    heading:'Article Three',
    date:'18 February, 2017',
    content:
    ` <p>
            This is the content for my third article.
       
        </p>
       
        <p>
            This is the content for my third article.
        This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
        </p>`
}
};

function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmlTemplate = 
    `<html>
    <head>
        
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
         <title>
         ${title};
         </title>
    </head>
    <body>
        <div class="container">
            
        
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        ${heading};
        <div>
            ${date};
        </div>
        <div>
            ${content};
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
    
}

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function (req, res){
   //Get the name from request object 

    var name;
    names.push(name);
    res.send(name);
    
    
});

app.get('/submit-name/:name', function(req,res){
var names = [];
    //Get the name from the request object
    var name = req.params.name;
    
    //JSON is JavaScript Object Notation
    names.push(name);
    res.send(JSON.stringify(name));

    
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
