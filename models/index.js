var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(function (err) {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running."
    );
    console.log(err);
    process.exit(1);
  });
mongoose.Promise = Promise;

module.exports.Todo = require("./todo.js");
