//*  This creates, in effect, a "virtual object database" for our App. *//

var connection = require("./connection.js"); //* connection from (connect.js)
//* for (orm.all) method that collectes all the data from our database. //* connection query that selects everything from whatever the table input is.  Then uses a callback to pass the result into our next file in the file system.
var orm = {
	all: function(tableInput, cb){
		connection.query("SELECT * FROM "+tableInput+";", function(err,result){
			if(err) throw err;
			cb(result)
		})
	},
//*update method/function that includes our connection query to the database. We are referencing our databse and it's (burger) table.  We are UPDATING (tableInput) and setting the (devoured) column to TRUE where the (id) is equal to the value we are sending to (routes.js)
	update: function(tableInput, condition, cb){
		connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err,result){
			if(err)throw err;
			cb(result);
		})
	},

	create: function(tableInput,val,cb){
		connection.query('INSERT INTO '+tableInput+'"(burger_name) VALUES ('"+val+"');', function(err,result){
			if(err)throw err;
				cb(result);
		})
	}
}

module.exports = orm;