const TodoModel = require("../models/TodoModel");

class TodoController {
  static async getAllTodos(req, res) {
    try {
      const allTodos = await TodoModel.getAllTodos();
      res.render("index", { todos: allTodos });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async insertNewTodo(req, res) {
    const events = req.body.events;
    const status = req.body.status;
    await TodoModel.insertNewTodo(events, status);
    res.redirect("/");
  }
}

module.exports = TodoController;
