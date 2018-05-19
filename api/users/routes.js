const jwt     = require('jsonwebtoken');
const Users   = require('./model.js');
const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const secret  = 'secret'
const salt    = 10;

/* Create new User */
router.post('/', (req, res, next) => {
  if (err) return res.send({ success: false, error: err.message });
  
  bcrypt.hash(req.body.password, salt, (err, hash) => {
    if (err) return res.send({ success: false, error: err.message });
    
    let user = { username: req.body.username, password: hash };
    
    Users.create(user, (err, user) => {
      if (err) return res.send({ success: false, error: err.message });
  
      res.json({ success: true, user: user});
    });
  });
});

/* Login */
router.post('/login', (req, res, next) => {
  Users.findOne({ username: { $eq: req.body.username } }, (err, user) => {
    if (err) return res.send({ success: false, error: err.message });
    if (!user) return res.send({ success: false, error: 'Incorrect username or password' });

    bcrypt.compare(req.body.password, user.password, (err, match) => {
      if (err) return res.send({ success: false, error: err.message });
      if (!match) return res.send({ success: false, error: 'Incorrect username or password' });

      jwt.sign({ id: user._id }, secret, { expiresIn: '1h' }, (err, token) => {
        if (err) return res.send({ success: false, error: err.message });
        
        user = user.toObject();
        
        delete user.password;
        user.token = token;
        
        res.json({ success: true, user: user});
      });
    });
  });
});

/* Authenticate Token */
router.post('/auth', (req, res, next) => {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) return res.send({ success: false, error: err.message });

    console.log('decoded');

    // res.json(true);
  });
});

module.exports = router;
