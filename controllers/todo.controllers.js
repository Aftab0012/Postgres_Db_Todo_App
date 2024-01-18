const Todo = require('../models/todo');

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Todo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ message: 'Todo created successfully', todo });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'internal server error' });
  }
};

module.exports = { getAllTodos, createTodo };
