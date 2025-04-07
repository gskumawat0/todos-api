require("dotenv").config();
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

var todoroutes = require("./routes/todos.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send({ message: "hi from express" });
});

app.get("/health", function (req, res) {
  res.sendStatus(200).json({ message: "ok" });
});

app.use("/api/todos", todoroutes);

module.exports = app;
