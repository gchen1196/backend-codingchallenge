const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;
const Repo = require('./models/repo.js');

app.use(bodyParser.urlencoded({extended: true}));



Repo.sync()
  .then(result => {
    console.log(result);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch(err => {
    console.log(err)
  })