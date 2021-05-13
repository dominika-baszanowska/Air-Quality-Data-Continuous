const express = require("express");
const mysql = require("mysql");
const conf = require(`./conf.json`);
console.log(process.env.NODE_ENV);
process.env.NODE_ENV=process.env.NODE_ENV || `dev`;

const QUERY1 = "SELECT * FROM `air-quality-data-continuous (2)`";

//UC1- The below query allows users to see all pollution records, as well as filtering by location.
const QUERY2 = "SELECT * FROM `air-quality-data-continuous (2)` where location = ? ";
const QUERY3 = "SELECT * FROM `air-quality-data-continuous (2)` where location Like ? ";

//UC2 - The below query allows users to see NO2 pollution records that are >= 100.0, as well as filtering by location.
const QUERY4 = "SELECT * FROM `air-quality-data-continuous (2)` where NO2 >= 100.0 ";
const QUERY5 = "SELECT * FROM `air-quality-data-continuous (2)` where location = ? AND NO2 >= 100.0 ";

//UC3 - The below query allows users to see NO2 pollution records that are <= 8.0, as well as filtering by location.
const QUERY6 = "SELECT * FROM `air-quality-data-continuous (2)` where NO2 <= 8.0 "
const QUERY7 = "SELECT * FROM `air-quality-data-continuous (2)` where location = ? AND NO2 <= 8.0 ";

var app = express();

// configure express to use embedded javascript
app.set("view engine" , "ejs")

//serve static content from 'static' folder
app.use(express.static('static'));

//callback function for the splash page request handler - This request handler deals with UC1
function splash(request, response) {
    if (typeof request.query.location == `undefined`) {
        connection.query(QUERY1, function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`index`, { "rows": rows });
        });
    }
    else {
        connection.query(QUERY2, [request.query.location], function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`index`, { "rows": rows });
        });
    }
}
//splash page (index.html) is served by default
app.get("/", splash);
app.get("/index.html" , splash);

//Map
app.get('/map.html' , function(request, response){
    response.render("Map", request.query );
});

//Search 
app.get("/search.html", function(request, response) {
    connection.query(QUERY3, ["%"+request.query.search+"%"], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        else response.render("search", { 'rows': rows });
    });
});

//Higher levels of pollution - This request handler deals with UC2
app.get('/higher.html' , function(request, response){
    if (typeof request.query.location == `undefined`) {
        connection.query(QUERY4, function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`higher`, { "rows": rows });
        });
    }
    else {
        connection.query(QUERY5, [request.query.location], function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`higher`, { "rows": rows });
        });
    }
});

//Lower levels of pollution - This request handler deals with UC3
app.get('/lower.html' , function(request, response){
    if (typeof request.query.location == `undefined`) {
        connection.query(QUERY6, function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`lower`, { "rows": rows });
        });
    }
    else {
        connection.query(QUERY7, [request.query.location], function (err, rows, fields) {
            if (err) {
                response.status(500);
                response.send(err);
            }
            response.render(`lower`, { "rows": rows });
        });
    }
});

var connection = mysql.createConnection(conf[process.env.NODE_ENV].db);
connection.connect(function (err) {
    if (err) {
        console.error("Connection error: ", err.message);
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