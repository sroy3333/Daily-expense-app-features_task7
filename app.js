const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/Expense');
const User = require('./models/users');
const Expense = require('./models/Expense');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.expenseRoutes = require('./models/Expense');


app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);



app.use(express.static(path.join(__dirname, 'public')))

app.get('/login/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.get('/signup/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.get('/expense/Expense.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Expense.html'));
});

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });