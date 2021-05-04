const mysql = require("mysql");
const QUERY = "SELECT * FROM `air-quality-data-continuous (2)` where location = 'Temple Way' ";

var connection = mysql.createConnection({
    "host"     : "localhost",
    "user"     : "root",
    "password" : "@Angelo2010.",
    "database" : "isd"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

connection.query(QUERY, ["On street bike pump"], function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i] ['Date Time'], rows[i].NOx, rows[i].NO2);
    }
});

connection.end();
console.log("finished");
