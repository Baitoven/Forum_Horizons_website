var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var url = require('url');
var session = require('express-session');
var cookie = require('cookie-session');
var querystring = require('querystring');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//setup
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

//GET

app.get('/', function(req, res) {
    res.render('index', {
      title: "Forum Horizons"
    })
  });

app.get('/entreprises', function(req, res) {
  entreprises = JSON.parse(fs.readFileSync('./public/data/entreprises.json', 'utf8'));
  res.render('entreprises', {
    title: "Forum Horizons | Entreprises",
    entreprises: entreprises
  })
});

app.get('/ecoles', function(req, res) {
  res.render('ecoles', {
    title: "Forum Horizons | Écoles"
  })
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    title: "Forum Horizons | Contact"
  })
});

app.get('/jour_j', function(req, res) {
  res.render('jour_j', {
    title: "Forum Horizons | Le Jour J"
  })
});


app.listen(80);