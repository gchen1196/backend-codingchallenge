const Repo = require('../models/repo.js');

const saveRepo = async (results) => {
  try {
    if (results.length === 0) throw new Error('no repos to save');
    await Repo.bulkCreate(results);
    console.log('saved to database');
  }

  catch (err) {
    console.log('failed to save to database');
  }

}

const searchOrGetAllRepos = async (queries) => {
  try {
    let repos = await Repo.findAll({
      where: queries
    })
    return repos;
  }
  catch (err) {
    console.log('failed to get repos from database');
  }
}

const updateRepo = async (id, data) => {
  try {
    await Repo.update(data, {where: id});
  }
  catch (err) {
    console.log('failed to update repo');
  }
}


module.exports = {saveRepo, searchOrGetAllRepos, updateRepo};