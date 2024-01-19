// models/Todo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the Sequelize instance

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
