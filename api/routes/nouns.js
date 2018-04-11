// const Nouns     = require('../models.js');
// const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();

/* Get All Nouns */
router.get('/', (req, res, next) => {
  res.send('Get All Nouns');
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Get a Noun by ID */
router.get('/:id', (req, res, next) => {
  res.send('Get a Noun by ID');
  // Nouns.find((err, nouns) => {
    // console.log(nouns);
  // });
});

/* Save a Noun */
router.post('/:id', (req, res, next) => {
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
