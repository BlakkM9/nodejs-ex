var path = require("path");
var express = require("express");
var partials = require("express-partials");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

configure();

app.get("/", function(req, res) {
	res.render("index.html");
}

//require("./router/main")(app);

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log("Listening on 3000");
});

function configure() {
    console.log("Configuring");
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/views");
    app.use(partials());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(session({secret:'XASDASDA'}));
    app.use(express.static(__dirname + "/website"));
}