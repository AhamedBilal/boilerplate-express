var express = require('express');
var app = express();


app.use("/public", express.static(__dirname +"/public"));
console.log("Hello World");

app.get("/", (req, res) => {
 let path = __dirname + "/views/index.html";
 res.sendFile(path);
});

app.get("/json", (req, res) => {
 res.json({"message": "Hello json"});
});


































 module.exports = app;
