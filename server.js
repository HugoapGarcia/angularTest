var express  = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use('/', require('./route/route'));

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, function(){
  console.log(`API running on localhost:${port}`)
});
