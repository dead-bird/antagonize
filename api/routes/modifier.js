const Noun     = require('../models/Modifier.js');
const mongoose = require('mongoose');
const express  = require('express');
const router   = express.Router();

/* Get All Modifiers */
router.get('/', (req, res, next) => {
  Modifier.find((err, modifiers) => {
    console.log(modifiers);
  });
});

/* Get a Modifier by ID */
router.get('/:id', (req, res, next) => {
  Modifier.find((err, modifier) => {
    console.log(modifier);
  });
});

/* Save a Modifier */
router.post('/:id', (req, res, next) => {
  Modifier.find((err, modifier) => {
    console.log(modifier);
  });
});

/* Update a Modifier */
router.put('/:id', (req, res, next) => {
  Modifier.find((err, modifier) => {
    console.log(modifier);
  });
});

/* Delete a Modifier */
router.delete('/:id', (req, res, next) => {
  Modifier.find((err, modifier) => {
    console.log(modifier);
  });
});
