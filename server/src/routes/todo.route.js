const express = require("express");
const TodoController = require("../controllers/todo.controller");
const router = express.Router();
const errorHandler = require("../utils/errorHandler");

const { todoValidator } = require("../middlewares/validator");

const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } =
  TodoController;

router.get("/", getAllTodos);

router.post("/", createTodo);

router.get("/:todo_id", getTodo);

router.put("/:todo_id", todoValidator, updateTodo);

router.delete("/:todo_id", todoValidator, deleteTodo);

module.exports = router;
