// const Nouns     = require('../models.js');
// const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();

const eg = [
  {
    text: 'stupid idiot',
    modifier: 'stupid',
    noun: 'idiot',
    nsfw: false,
  },
];

/* Get An Insult */
router.get('/', (req, res, next) => {
  res.send(eg);
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

module.exports = router;
