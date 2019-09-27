const Sequelize = require('sequelize');
const sequelize = require('../database/index.js');

const Repo = sequelize.define('repo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    notContains: ' ',
  },
  description: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.STRING
  },
  forks: {
    type: Sequelize.INTEGER
  }
})

module.exports = Repo;