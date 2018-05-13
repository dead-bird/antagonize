const Users   = require('./model.js');
const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const salt    = 10;

/* Create new User */
router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    let user = { username: req.body.username, password: hash };

    Users.create(user, (err, user) => {
      if (err) return next(err);
  
      res.json(user);
    });
  });
});

/* Login */ 
router.post('/auth', (req, res, next) => {
  Users.findOne({ username: { $eq: req.body.username } }, (err, user) => {
    if (err) return next(err);

    bcrypt.compare(req.body.password, user.password, (err, match) => {
      let ret = match ? user : false;

      res.json(ret);
    });
  });
});

module.exports = router;
