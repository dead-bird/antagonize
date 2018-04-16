// const Nouns     = require('../models.js');
// const modifiers = require('../models.js');
// const express  = require('express');
// const router   = express.Router();

// /* Get An Insult */
// router.get('/', (req, res, next) => {
//   let modifier = {};
//   let noun = {};

//   Modifiers.find((err, modifiers) => {
//     let r = Math.floor(Math.random() * modifiers.length)
    
//     modifier = modifiers[r];
//   });
  
//   Nouns.find((err, nouns) => {
//     let r = Math.floor(Math.random() * nouns.length)

//     noun = nouns[r];
//   });

//   res.send({
//     text: `${modifier.text} ${noun.text}`,
//     modifier: modifier.text,
//     noun: noun.text,
//     nsfw: modifier.nsfw || noun.nsfw,
//   });
// });

// module.exports = router;
