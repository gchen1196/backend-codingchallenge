const Repo = require('../models/repo.js');

const saveRepo = (results) => {
  console.log(results)
  for (var i = 0; i < results.length; i++) {
    let result = results[i];
    let parsedResult = {
      name: result.name,
      description: result.description,
      language: result.language,
      forks: result.forks
    }
    let repo = Repo.build(parsedResult);
    repo.save()
        .then(() => {
          console.log('new task saved');
        })
        .catch(() => {
          console.log('failed to save repos')
        })
  }
}

module.exports = {saveRepo};