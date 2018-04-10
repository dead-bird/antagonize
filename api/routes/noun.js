const Noun     = require('../models/Noun.js');
const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();

/* Get All Nouns */
router.get('/', (req, res, next) => {
  Noun.find((err, nouns) => {
    console.log(nouns);
  });
});

/* Get a Noun by ID */
router.get('/:id', (req, res, next) => {
  Noun.find((err, noun) => {
    console.log(noun);
  });
});

/* Save a Noun */
router.post('/:id', (req, res, next) => {
  Noun.find((err, noun) => {
    console.log(noun);
  });
});

/* Update a Noun */
router.put('/:id', (req, res, next) => {
  Noun.find((err, noun) => {
    console.log(noun);
  });
});

/* Delete a Noun */
router.delete('/:id', (req, res, next) => {
  Noun.find((err, noun) => {
    console.log(noun);
  });
});
