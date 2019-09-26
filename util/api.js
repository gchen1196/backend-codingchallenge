const axios = require('axios');
const TOKEN = require('./config.js');

const githubUsername = 'gchen1196';

const getGithubRepos = axios.get(`https://api.github.com/users/${githubUsername}/repos`, {
  headers: {
    'User-Agent': 'request',
    'Authorization': TOKEN
  }
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})

module.exports = getGithubRepos;
