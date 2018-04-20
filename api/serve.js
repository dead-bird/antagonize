const mongoose = require('mongoose');
const express = require('express');
const app = express();
const modifiers = require('./modifiers/routes')
const nouns = require('./nouns/routes')
const insult = require('./insults/routes')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1/antagonize');
mongoose.Promise = global.Promise;

const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/modifiers', modifiers);
app.use('/nouns', nouns);
app.use('/insult', insult);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

