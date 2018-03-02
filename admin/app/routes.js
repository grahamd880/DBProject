// app/routes.js

module.exports = function(app){
	// HOME PAGE (with login links)
	app.get('/', function(req,res){
		res.render('index.ejs');
	});

	// LOGIN

	app.get('/login', function(req,res){
		res.render('login.ejs',{message: req.flash('loginMessage')})
	});
}