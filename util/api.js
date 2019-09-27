const axios = require('axios');
const TOKEN = require('./config.js');
const fn = require('../controllers/repo.js');

const githubUsername = 'Facebook';

const githubAPI = axios.get(`https://api.github.com/users/${githubUsername}/repos`, {
  headers: {
    'User-Agent': 'request',
    'Authorization': TOKEN
  }
}).then(async result => {
  await fn.saveRepo(result.data);
}).catch(err => {
  console.log(err);
})

module.exports = githubAPI;
