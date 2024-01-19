const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todo.controllers.js');

router.get('/get-todo', todoControllers.getAllTodos);
router.post('/create-todo', todoControllers.createTodo);
router.patch('/update-todo/:id', todoControllers.updateTodo);
router.delete('/delete-todo/:id', todoControllers.deleteTodo);

module.exports = router;
