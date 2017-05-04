//* These are all of our 'routes' used in our application. *//

var express = require("express");//* reference to express
var router = express.Router(); 
var burger = require("../models/burger.js");//* reference to the burger.js in the models folder.

router.get("/", function(req,res){//* basic route
	burger.all(function(burger_data){// calling (burger.all - located within the burger.js file which calls the ORM.all located within the orm.js file) and passing (burger data) into the function
		console.log(burger_data);
		res.render('index',{burger_data});//renders idex.handlebars which receives (burger data) that was passed in.
	})
})
//*put route to complete the function of removing the ('devoured') burgers from the webpage.
router.put('/burgers/update', function(req,res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.post('/burgers/create', function(req,res){
	console.log(req.body);
	burger.create(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/');
	})
})

module.exports = router;//* exporting the routes - this completes the connection between routes.js and sever.js
