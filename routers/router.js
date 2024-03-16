const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

// router.get("/", (req, res) => {
//   res.send("Hello World from router.js!");
// });

router.get('/', TodoController.getAllTodos);
router.post('/addTodo', TodoController.insertNewTodo);

// Export the router
module.exports = router;