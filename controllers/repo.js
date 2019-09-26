const Repo = require('../models/repo.js');

const saveRepo = async (results) => {
  if (results.length === 0) throw new Error('no repos to save');

  // for (var i = 0; i < results.length; i++) {
  //   let result = results[i];
  //   let parsedResult = {
  //     name: result.name,
  //     description: result.description,
  //     language: result.language,
  //     forks: result.forks
  //   }
  //   let repo = await Repo.build(parsedResult);
  //   await repo.save()
  //       .then(() => {
  //         console.log('new task saved');
  //       })
  //       .catch(() => {
  //         console.log('failed to save repos')
  //       })
  // }
  // let repo = await Repo.build(parsedResult);
  await Repo.bulkCreate(results);
  console.log('saved to database')

}

const getRepos = async () => {
  let repo = await Repo.findAll();
  console.log('ran')
  return repo; 
}

module.exports = {saveRepo, getRepos};