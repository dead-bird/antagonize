const Nouns     = require('../nouns/model.js');
const Modifiers = require('../modifiers/model.js');
const express  = require('express');
const router   = express.Router();

/* Get An Insult */
router.get('/', (req, res, next) => {
  let modifier = {};
  let noun = {};

  Promise.all([
    Modifiers.find(),
    Nouns.find(),
  ])
  
  .then(([ modifiers, nouns ]) => {
    modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    noun = nouns[Math.floor(Math.random() * nouns.length)];

    res.json({
      text: `${modifier.text} ${noun.text}`,
      modifier: modifier.text,
      noun: noun.text,
      nsfw: modifier.nsfw || noun.nsfw,
    });
  });
});

module.exports = router;
