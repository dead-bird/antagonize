const express = require('express');
const app = express();
const modifiers = require('./routes/modifiers')
const nouns = require('./routes/nouns')
const bodyParser = require('body-parser');

// app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use('/modifiers', modifiers);
app.use('/nouns', nouns);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
