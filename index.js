var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var jsonConverter = require('./jsonConverter');

var port = 3000;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use('/converter',jsonConverter);

app.listen(port,function(){
	console.log("Server Started on port"+port);
})