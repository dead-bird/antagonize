const Nouns = require('./model.js');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const salt = 10;

const pass = 'test';

// bcrypt.hash(pass, salt, (err, hash) => {
//   console.log(pass);
//   console.log(hash);
// });

// Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//   // res == true
// });

router.get('/auth', (req, res, next) => {
  Nouns.find({ username: { $eq: req.params.username } }, (err, user) => {
    if (err) return next(err);

    res.json(user);
  });
});


// module.exports = router;
