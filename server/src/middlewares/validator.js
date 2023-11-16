const User = require("../models/user.model");
const Todo = require("../models/todo.model");

exports.userValidator = async (req, res, next) => {
  const userId = req.params.user_id;

  const user = await User.findOne({
    where: {
      id: +userId,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User Not Found",
    });
  }

  if (+user.role === 1) {
    req.admin = user;
  } else if (+user.role === 0) {
    req.user = user;
  }

  next();
};

exports.todoValidator = async (req, res, next) => {
  const todoId = req.params.todo_id;

  if (!todoId) {
    return res.status(400).json({
      status: "fail",
      message: "Todo Not Found",
    });
  }

  const todo = await Todo.findOne({
    where: {
      id: +todoId,
    },
  });

  if (!todo) {
    return res.status(404).json({
      status: "fail",
      message: "Todo Not Found",
    });
  }

  req.todo = todo;
  next();
};
