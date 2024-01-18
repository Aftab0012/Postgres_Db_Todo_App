require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const todoRoutes = require('./routes/todo.routes');

const app = express();
app.use(bodyParser.json());
const PORT = 5000;

async function testDatabaseConnection() {
  try {
    await db.sync();
    console.log(
      'Connection to the database has been established successfully.'
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();

app.use('/api', todoRoutes);

app.listen(PORT, () => {
  console.log('Connected to PostgreSQL database successfully on port ' + PORT);
});
