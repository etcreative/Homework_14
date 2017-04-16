//*This is our connection to Mysql - storeed inside our 'config' folder which is the home for all our MySQL connection data. *//

var mysql = require("mysql"); //* npm package requiring the Mysql 
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"Apple123",
	database:"burgers_db"
})

connection.connect(function(err){ //*basic myQL connection
	if(err)throw err;
	console.log("connection as id: " + connection.threadId);
});

module.exports = connection; //* we export this connection to the ORM