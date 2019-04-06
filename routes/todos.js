var express = require("express"),
    router  = express.Router();
var db     = require("../models");
var helper  = require("../helpers/todos.js"); 
    
router.route("/")
  .get(helper.getTodo)
  .post(helper.postTodo)
  
  router.route("/:todoId")
  .get(helper.getTodoSingle)
  .put(helper.updateTodo)
  .delete(helper.deleteTodo)



















module.exports= router;