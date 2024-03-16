const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

// Define the routes
router.get('/', TodoController.getAllTodos);
router.post('/addTodo', TodoController.insertNewTodo);
router.get('/delete/:id', TodoController.deleteTodoById);
router.post('/edit', TodoController.getTodoById);
router.post('/update', TodoController.updateTodoStatus);

// Export the router
module.exports = router;