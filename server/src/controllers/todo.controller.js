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
        name: req.body?.name,
        priority: req.body?.priority,
        deadline: req.body?.deadline,
        done: req.body?.done,
      });
      res.status(200).json({ status: "success", data: { todo } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }

  async updateTodo(req, res) {
    const id = req.params.todo_id;
    console.log(req.body, "body");
    try {
      const updatedTodo = await Todo.update(
        {
          name: req.body?.name,
          priority: req.body?.priority,
          deadline: req.body?.deadline,
          done: req.body?.done,
        },
        { where: { id } }
      );
      console.log(updatedTodo, "111111111111111");
      if (updatedTodo[0] !== 1) {
        return res.status(404).json({
          status: "fail",
        });
      }
      return res.status(200).json({
        status: "success",
        data: updatedTodo,
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
      const id = req.params.todo_id;
      const deletedTodo = await Todo.destroy({ where: { id } });
      if (!deletedTodo) {
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
