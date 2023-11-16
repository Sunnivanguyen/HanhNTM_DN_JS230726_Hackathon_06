const express = require("express");
const todoRouter = require("./todo.route");
const userRouter = require("./user.route");
const AppError = require("../utils/appError");
const errorHandler = require("../utils/errorHandler");
express.Router();

function Router(app) {
  app.use("/api/v1/todos", todoRouter);
  app.use("/api/v1/users", userRouter);

  app.use(errorHandler);

  app.get("/", (req, res) => {
    res.status(200).json("Welcom to my app");
  });

  app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
}

module.exports = Router;
