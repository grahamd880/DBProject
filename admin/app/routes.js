// app/routes.js
var mysql = require('mysql');
var configDB = require('../config/database.js');
var con = mysql.createConnection(configDB);

con.connect(function(err){
		if(err) throw err;
		console.log("Connected to Database!");
	});

module.exports = function(app){
	// HOME PAGE (with login links)
	app.get('/', function(req,res){
		res.render('index.ejs');
	});

	// LOGIN
	app.get('/login', function(req,res){
		res.render('login.ejs',{message: req.flash('loginMessage')})
	});

	//I need to work with this
	app.post('/login', function(req,res){
		console.log("**************************************************************************");
		console.log("username: " + req.body.username);
		console.log("password:" + req.body.password);
		var query = "SELECT * FROM person WHERE username = '" + req.body.username + "' AND password = '" + req.body.password + "';";
		con.query(query, function (err, result) {
    		if (err) {throw err;}
    		if(result.length === 0){
    			req.flash('Incorrect username/password!!');
    			 res.redirect('/login');

    			}
    		else{
    			console.log("Result: " + result);
    			res.redirect('/admin');
    		}
  		});
		//res.redirect('/admin');
	});

	// ADMIN 
	app.get('/admin', function(req,res){
		res.render('admin.ejs', {
			user : req.user //gets the user in session
		});
	});

	// LOGOUT
	app.get('/logout', function(req,res){
		//req.logout();
		res.redirect('/');
	});

	/*function isLoggedIn(req, res, next){
		if (req.isAuthenticated())
			return next();

		res.redirect('/');
	}*/

};