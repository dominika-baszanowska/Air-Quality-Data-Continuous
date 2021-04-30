const express = require("express");
const mysql = require("mysql");
const conf = require(`./conf.json`);
process.env.NODE_ENV=process.env.NODE_ENV || `dev`;

//const QUERY = "SELECT * FROM `air-quality-data-continuous (2)`";
const QUERY = "SELECT * FROM `air-quality-data-continuous (2)` where location = ? ";

// configure express to use embedded javascript
var app = express();
app.set("view engine" , "ejs")

//serve static content from 'static' folder
app.use(express.static('static'));

//callback function for the splash page request handler
function splash(request, response) {
    connection.query(QUERY,[request.query.location], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        response.render("index", {'rows': rows });  
    });

}
//splash page (index.html) is served by default
app.get("/", splash);
app.get("/index.html" , splash);

app.get('/map.html' , function(request, response){
    response.render("Map" );
});

app.get('/search.html' , function(request, response){
    response.render("Search" );
});

//app.listen(conf [process.env.NODE_ENV] .port); 
//console.log("lISTENING ON PORT %S", conf[process.env.NODE_ENV] .port);

//var connection = mysql.createConnection(conf.db);
var connection = mysql.createConnection(conf[process.env.NODE_ENV].db);

connection.connect(function(err){
	if (err) {
        response.status(500);
        response.send(err);
    } else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

if (process.env.NODE_ENV!=`test`) {
    app.listen(conf [process.env.NODE_ENV] .port);
    console.log("listening on port %S", conf[process.env.NODE_ENV] .port);
}

//export for testing
exports.app = app;
exports.connection = connection;
exports.splash = splash;

// console.log("Server running on http://localhost:8080", conf[process.env.NODE_ENV] .port);