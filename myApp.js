var express = require('express');
var app = express();


app.use("/public", express.static(__dirname +"/public"));
console.log("Hello World");

app.get("/", (req, res) => {
 let path = __dirname + "/views/index.html";
 res.sendFile(path);
});

app.get("/json", (req, res) => {
 if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello World".toUpperCase();
 } else {
  response = "Hello World";
 }
 res.json({"message": response});
});


































 module.exports = app;
