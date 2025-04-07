const { getConnection } = require("./connection");
const initTodoModal = require("../models/todo");

const initModals = () => {
  try {
    const connection = getConnection("todo_api");
    return {
      Todo: initTodoModal(connection),
    };
  } catch (error) {
    console.error("Error initializing models:", error.message);
    throw error;
  }
};

module.exports = initModals();
