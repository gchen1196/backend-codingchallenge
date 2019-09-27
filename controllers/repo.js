const Repo = require('../models/repo.js');

const saveRepo = async (results) => {
  if (results.length === 0) throw new Error('no repos to save');
  await Repo.bulkCreate(results);
  console.log('saved to database');

}

const searchOrGetAllRepos = async (queries) => {
  let repos = await Repo.findAll({
    where: queries
  })
  return repos;
}


module.exports = {saveRepo, searchOrGetAllRepos};