const Sequelize = require('sequelize');

const sequelize = new Sequelize ('Expense', 'root', 'Pgoen201gssbr$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;