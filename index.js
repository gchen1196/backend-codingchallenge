const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;
const Repo = require('./models/repo.js');
const githubAPI = require('./util/api.js');
const fn = require('./controllers/repo.js');

app.use(bodyParser.urlencoded({extended: true}));

//make http request to github to grab list of repos
//iterate through the data and save each Repo to db


//create GET request endpoint to retrieve all Repos
app.get('/repos', async (req, res) => {
  try {
    let repos = await fn.getRepos();
    res.status(200).send(repos); 
  }
  catch (err) {
    res.status(400).send();
  }
})

//create GET request endpoint to retrieve filtered parameters (include a search paramater)



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
