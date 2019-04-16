const jwt = require('jsonwebtoken');
const Users = require('./model.js');
const auth = require('../auth.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const md5 = require('md5');
const secret = 'secret';
const salt = 10;

/* Get All Users */
router.get('/', (req, res, next) => {
  auth(req.headers.authorization)
    .then(() => {
      Users.find((err, users) => {
        if (err) return next(err);

        let data = users.map(user => {
          user = user.toObject();
          delete user.password;

          user.avatar = gravatar(user.email);

          return user;
        });

        res.json(data);
      });
    })
    .catch(msg => res.status(401).send(msg || null));
});

/* Create New User */
router.post('/', (req, res, next) => {
  auth(req.headers.authorization)
    .then(() => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return next(err);

        let user = { username: req.body.username, password: hash };

        Users.create(user, (err, user) => {
          if (err) return next(err);

          user.avatar = gravatar(user.email);

          res.json(user);
        });
      });
    })
    .catch(msg => res.status(401).send(msg || null));
});

/* Login */
router.post('/login', (req, res, next) => {
  Users.findOne({ username: { $eq: req.body.username } }, (err, user) => {
    if (err) return next(err);

    if (!user) return res.status(404).send('User not found');

    bcrypt.compare(req.body.password, user.password, (err, match) => {
      if (err) return next(err);

      if (!match) return res.status(403).send('Incorrect username or password');

      jwt.sign({ id: user._id }, secret, { expiresIn: '1h' }, (err, token) => {
        if (err) return error.handle(res, err);

        user = user.toObject();

        delete user.password;
        user.token = token;
        user.avatar = gravatar(user.email);

        res.json(user);
      });
    });
  });
});

/* Authenticate Token */
router.post('/auth', (req, res, next) => {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) return next(err);

    Users.findOne({ _id: { $eq: decoded.id } }, (err, user) => {
      if (err) return next(err);

      if (!user) return res.status(404).send('User not found');

      user = user.toObject();

      user.avatar = gravatar(user.email);

      delete user.password;

      res.json(user);
    });
  });
});

function gravatar(email) {
  if (!email) return '';

  return `https://www.gravatar.com/avatar/${md5(email)}?s=400`;
}

module.exports = router;
