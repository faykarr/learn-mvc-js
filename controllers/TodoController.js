const TodoModel = require("../models/TodoModel");

class TodoController {
  // Get all todos
  static async getAllTodos(req, res) {
    try {
      const allTodos = await TodoModel.getAllTodos();
      res.render("index", { todos: allTodos });
    } catch (err) {
      res.status(500).send(err);
    }
  }

  // Insert new todo
  static async insertNewTodo(req, res) {
    const events = req.body.events;
    const status = req.body.status;
    await TodoModel.insertNewTodo(events, status).then(() => {
      res.redirect("/");
    });
  }

  // getTodoById
  static async getTodoById(req, res) {
    const id = req.body.id;
    await TodoModel.getTodoById(id).then((result) => {
      res.json(result);
    });
  }

  // Update todo status
  static async updateTodoStatus(req, res) {
    const id = req.body.id;
    const status = req.body.status;
    await TodoModel.updateTodoStatus(id, status).then(() => {
      res.redirect("/");
    });
  }

  // Delete todo
  static async deleteTodoById(req, res) {
    const id = req.params.id;
    await TodoModel.deleteTodoById(id).then(() => {
      res.redirect("/");
    });
  }
}

module.exports = TodoController;
