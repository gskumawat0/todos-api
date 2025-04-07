const { Todo } = require("../db/todoModals");

exports.getTodo = async function (req, res) {
  Todo.find()
    .then(function (todos) {
      return res.json({ todos });
    })
    .catch(function (error) {
      res.send(error);
    });
};

exports.postTodo = async function (req, res) {
  Todo.create(req.body)
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.getTodoSingle = async function (req, res) {
  Todo.findById(req.params.todoId)
    .then(function (foundTodo) {
      res.json(foundTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.updateTodo = async function (req, res) {
  Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then(function (updatedTodo) {
      res.json(updatedTodo);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.deleteTodo = async function (req, res) {
  Todo.findByIdAndRemove(req.params.todoId)
    .then(function (todos) {
      res.json(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
};

module.exports = exports;
