var db = require("../models");

exports.getTodo = function (req, res) {
  db.Todo.find()
    .then(function (todos) {
      res.Json(todos);
    })
    .catch(function (error) {
      res.send(error);
    });
};

exports.postTodo = function (req, res) {
  console.log(req.body);
  db.Todo.create(req.body)
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.getTodoSingle = function (req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function (foundTodo) {
      res.json(foundTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.updateTodo = function (req, res) {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then(function (updatedTodo) {
      res.json(updatedTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.deleteTodo = function (req, res) {
  db.Todo.findByIdAndRemove(req.params.todoId)
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = exports;
