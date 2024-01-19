const Todo = require('../models/todo');

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['id', 'ASC']],
    });
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

const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated, [updatedTodo]] = await Todo.update(
      { title: req.body.title },
      { where: { id }, returning: true }
    );

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    return res
      .status(200)
      .json({ message: 'Todo updated successfully', todo: updatedTodo });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a todo by ID
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.destroy({ where: { id } });

    if (deletedTodo === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
