var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;

var config ={
    user:'naveenkumars95',
    username:'naveenkumars95',
    host:'db.imad.hasura.io.app',
    port:'5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));


var counter = 0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new pool(config);
app.get('test-db',function(req,res){
    // make a select request
    // respose the resutlt
    pool.query('SELECT*From Testdb',function(err,result){
       if(err)
       {
           res.status(500).send(err.tostring());
       }else{
           res.send(JSON.tostrinfy(result));
       }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
