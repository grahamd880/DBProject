var User = require('../app/models/user');

module.exports = function(passport){

	passport.use('local-login', new LocalStrategy({
		usernameField : 'username',
		passwordField : 'password',
		passReqToCallback : true
	},
	function(req, username, password, done){
		return User.validLogin(username, password,done);
	}));
};