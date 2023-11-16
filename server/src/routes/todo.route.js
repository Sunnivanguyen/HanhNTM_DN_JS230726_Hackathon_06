const express = require("express");
const TodoController = require("../controllers/todo.controller");
const router = express.Router();
const errorHandler = require("../utils/errorHandler");

const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } =
  TodoController;

router.route("/").get(errorHandler, getAllTodos).post(errorHandler, createTodo);
router
  .route("/:id")
  .get(errorHandler, getTodo)
  .put(updateTodo)
  .delete(deleteTodo);
module.exports = router;
