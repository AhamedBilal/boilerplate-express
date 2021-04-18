var express = require('express');
require('dotenv').config()
var app = express();


app.use("/public", express.static(__dirname +"/public"));
app.use((req, res, next) => {
 console.log(`${req.method} ${req.path} - ${req.ip}`)
 next();
});
console.log("Hello World");

app.get("/", (req, res) => {
 let path = __dirname + "/views/index.html";
 res.sendFile(path);
});

app.get("/json", (req, res) => {
 let response;
 console.log(process.env.MESSAGE_STYLE === "uppercase");
 if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello World".toUpperCase();
 } else {
  response = "Hello World";
 }
 res.json({"message": response});
});


































 module.exports = app;
