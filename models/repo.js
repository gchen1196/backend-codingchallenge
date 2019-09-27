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
    allowNull: false 
  },
  description: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.STRING
  },
  forks: {
    type: Sequelize.INTEGER,
    isPositive(value) {
      if (value < 0) throw new Error('Only positive forks allowed');
    } 
  }
})

module.exports = Repo;