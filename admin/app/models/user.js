var mysqlModel = require('mysql-model');

var MyAppModel = mysqlModel.createConnection({
  	host: "localhost",
	user: "darth",
	password: "deathstar921intheworks",
	database: "runnersGlobal"
});

var User = class{
	var Person = MyAppModel.extend({
		tableName: "person",
	});
	user = new Person();

	function validLogin(user, password, done){
		user.find('all', {where: 'username = ' + username + ' AND password = ' + password },function(err,user){
			if(err)
				return done(err);

			if(!user)
				return done(null, false, req.falsh('loginMessage', 'invalid username and/or password'));

			return done(null, user);
		});
	}
}



	
}

module.exports = new User();