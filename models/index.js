var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo.js");
