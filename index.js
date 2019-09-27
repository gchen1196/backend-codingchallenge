const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;
const Repo = require('./models/repo.js');
const githubAPI = require('./util/api.js');
const fn = require('./controllers/repo.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//GET request endpoint to retrieve all Repos or searched Repo
app.get('/', async (req, res) => {
  try {
    const searchParam = req.query;
    let repos = await fn.searchOrGetAllRepos(searchParam);
    res.status(200).send(repos); 
  }
  catch (err) {
    res.status(400).send(err);
  }
})

//dynamically update a repo 
app.put('/repo', async (req, res) => {
  try {
    const id = req.query;
    const updateData = req.body;
    await fn.updateRepo(id, updateData);
    res.redirect('/');

  }
  catch (err) {
    res.status(400).send(err)
  }
})


const main = async () => {
  try {
    await Repo.sync({force: true});
    await githubAPI;
    await app.listen(port, () => console.log(`Listening on port ${port}...`));
  }
  catch (err) {
    console.log(err);
  }
}

main();
