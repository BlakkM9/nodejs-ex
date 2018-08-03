var express	= require("express");
var app		= express();
var mysql = require("mysql");

app.engine('html', require('ejs').renderFile);
// app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
	console.log("redirected");
	res.send("TEST THE CLICKS");
});

var port = 8080;
var ip   = "0.0.0.0";

const con = mysql.createConnection({
    host: "db4free.net",
	port: "3306",
    user: "access",
    password: "nNojfhnk8v2AJIle",
    database: "website_users"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB");
});

app.listen(port, ip, function(){
    console.log("Listening on " + ip + ":" + port);
});