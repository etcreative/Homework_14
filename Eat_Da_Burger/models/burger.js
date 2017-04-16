//* require the ORM from the configuration folder in order to collect data from the database.  
//* contains all the methods used to modify the ORM for use with the burgers database.
//* then sends that data to the controllers folder that has (routes.js)
var orm = require("../config/orm.js");


//* calling ORM.all, then insert (burgers) as our table input and run the function of response as a callback which in turn is sent into the routes.js file.
var burger = {
	all: function(cb){
		orm.all('burgers',function(res){
			cb(res);
		})
	},
	update: function(id,cb){
		orm.update('burgers',id,cb);
	},

	create: function(name,cb){
		form.create('burgers',name,cb);
	}
}

module.exports = burger;//* sent to routes.js file.

