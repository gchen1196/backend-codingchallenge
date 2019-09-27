const express = require('express');
const bodyParser = require('body-parser');
const Repo = require('./models/repo.js');
const githubAPI = require('./util/api.js');
const fn = require('./controllers/repo.js');

const app = express();

const port = 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
  try {
    const searchParam = req.query;
    let repos = await fn.searchOrGetAllRepos(searchParam);
    res.status(200).send(repos); 
  }
  catch (err) {
    res.status(404).send(console.log('failed to get repos'));
  }
})


app.put('/repo', async (req, res) => {
  try {
    const id = req.query;
    const updateData = req.body;
    await fn.updateRepo(id, updateData);
    let updatedRepo = await fn.searchOrGetAllRepos(id);
    res.status(201).send(updatedRepo);

  }
  catch (err) {
    res.status(400).send(console.log('failed to update repo'))
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
