const Todo = require("../models/todo.model");

class TodoController {
  async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll();
      res.status(200).json({ status: "success", data: { todos } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }
  async getTodo(req, res) {
    try {
      const id = req.params.id;
      const todo = await Todo.findPk(id);
      res.status(200).json({ status: "success", data: { todo } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }

  async createTodo(req, res) {
    try {
      const todo = await Todo.create({
        work: req.body?.work,
        status: req.body?.status === true ? 1 : 0,
      });
      res.status(200).json({ status: "success", data: { todo } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }

  async updateTodo(req, res) {
    const id = req.params.id;
    console.log(req.body, "body");
    try {
      const result = await Todo.update(
        {
          work: req.body?.work,
          status: req.body?.status,
        },
        { where: { id } }
      );
      console.log(result, "111111111111111");
      if (result[0] !== 1) {
        return res.status(404).json({
          status: "fail",
        });
      }
      return res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        msg: error.message,
      });
    }
  }

  async deleteTodo(req, res) {
    try {
      const id = req.params.id;
      const result = await Todo.destroy({ where: { id } });
      if (!result) {
        res.status(404).json({ status: "fail", msg: "Todo not found by id" });
      } else {
        res.status(200).json({ status: "success" });
      }
    } catch (error) {
      res.status(400).json({ status: "fail", msg: error });
    }
  }
}

module.exports = new TodoController();
