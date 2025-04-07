var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name can not be empty",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

todoSchema.index({ name: 1 }, { unique: true });
todoSchema.index({ created_date: 1 });

module.exports = (dbConnection) => {
  return dbConnection.model("Todo", todoSchema);
};
