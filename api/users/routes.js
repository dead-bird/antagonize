const jwt     = require('jsonwebtoken');
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
router.post('/login', (req, res, next) => {
  Users.findOne({ username: { $eq: req.body.username } }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.send(false);

    bcrypt.compare(req.body.password, user.password, (err, match) => {
      if (!match) return res.send(false);

      jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' }, (err, token) => {
        if (err) return res.send({ err });

        user = user.toObject();

        delete user.password;
        user.token = token;
        
        res.json(user);
      });
    });
  });
});

/* Authenticate Token */
router.post('/auth', (req, res, next) => {
  jwt.verify(req.body.token, 'secret', (err, decoded) => {
    if (err) return res.json({ err });

    res.json(true);
  });
});

module.exports = router;
