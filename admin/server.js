// server.js

// set up ==========================================
// get tools

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mysql = require('mysql');
var mysqlModel = require('mysql-model');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

// configuration ==================================

// check to see if this is righ?????
var con = mysql.createConnection(configDB);

con.connect(function(err){
		if(err) throw err;
		console.log("Connected to Database!");
	});

// require('./config/passport')(passport);

// sets up express app
app.use(morgan('dev')) //logs requests to console
app.use(cookieParser()); // reads cookies
app.use(bodyParser()); // gets info from html forms

app.set('view engine', 'ejs'); //set up ejs for templating


// stuff for passport
app.use(session({ secret: 'theempirewillrulethegalaxy'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes =================================================
require('./app/routes.js')(app,passport); //load routes

// launch ===================================================
app.listen(port);
console.log('listening on port ' + port);