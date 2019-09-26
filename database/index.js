const Sequelize = require('sequelize');

const sequelize = new Sequelize('backend-codingchallenge', 'root', '', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;