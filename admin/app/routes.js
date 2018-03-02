// app/routes.js

module.exports = function(app, passport){
	// HOME PAGE (with login links)
	app.get('/', function(req,res){
		res.render('index.ejs');
	});

	// LOGIN
	app.get('/login', function(req,res){
		res.render('login.ejs',{message: req.flash('loginMessage')})
	});

	app.post('/login', passport.authenticate('local-login',{
		successRedirect : '/admin',
		failureRedirect : '/login',
		failureFlash : true
	}));

	// ADMIN 
	app.get('/admin', isLoggedIn, function(req,res){
		res.render('admin.ejs', {
			user : req.user //gets the user in session
		});
	});

	// LOGOUT
	app.get('/logout', function(req,res){
		req.logout();
		res.redirect('/');
	});

	function isLoggedIn(reg, res, next){
		if (req.isAuthenticated())
			return next();

		res.redirect('/');
	}

};