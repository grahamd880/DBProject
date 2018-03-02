// server.js

// set up ==========================================
// get tools

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mysql = require('mysql');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookieParser');
var bodyParser = require('bodyParser');
var session = require('express-session');
var configDB = require('./config/database.js');

// configuration ==================================

// check to see if this is righ?????
mysql.connect(configDB.url);

// sets up express app
app.use(morgan('dev')) //logs requests to console
app.use(cookieParser()); // reads cookies
app.use(bodyParser()); // gets info from html forms

app.set('view engine', 'ejs'); //set up ejs for templating


// routes =================================================
app.listen(port);
console.log('listening on port ' + port);