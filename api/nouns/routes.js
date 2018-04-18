const Nouns   = require('./model.js');
const express = require('express');
const router  = express.Router();

const eg = [
  { text: 'blah', nsfw: false, },
  { text: 'test', nsfw: false, },
  { text: 'what', nsfw: false, },
  { text: 'data', nsfw: false, },
  { text: 'words', nsfw: false, },
  { text: 'nice', nsfw: false, },
  { text: 'yeah', nsfw: false, },
  { text: 'zoop', nsfw: false, },
];

/* Get All Nouns */
router.get('/', (req, res, next) => {
  res.send(eg);
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Get a Noun by ID */
router.get('/:id', (req, res, next) => {
  res.send(eg[0]);
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Save a Noun */
router.post('/', (req, res, next) => {
  res.send('Save a Noun');
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Update a Noun */
router.put('/:id', (req, res, next) => {
  res.send('Update a Noun');
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Delete a Noun */
router.delete('/:id', (req, res, next) => {
  res.send('Delete a Noun');
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

module.exports = router;
