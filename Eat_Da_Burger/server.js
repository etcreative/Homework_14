//* This is in charge of creating our express connection and running our node virtual server.


var express = require("express"); //* npm package (express) web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the de facto standard server framework
var bodyParser = require("body-parser"); //npm package (body-parser) is a piece of express middleware that reads a form's input and stores it as a javascript object 
var methodOverride = require("method-override");//* npm package (method-override) Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var exphbs = require("express-handlebars"); //* npm package (handlebars) that allows us to seperate our HTML from our dynamic content
var routes = require("./controllers/routes.js"); //* reference to import our (routes) from routes.js

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars",exphbs({
	defaultLayout: "main"
}));
app.set("view engine","handlebars");

app.use('/',routes); //* reference to import our (routes) from routes.js

var port = 3000;
app.listen(port);

