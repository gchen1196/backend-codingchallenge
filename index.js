const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, () => console.log(`App listening on ${port}!`))