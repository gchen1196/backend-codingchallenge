const Sequelize = require('sequelize');

const sequelize = new Sequelize('backend_codingchallenge', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;