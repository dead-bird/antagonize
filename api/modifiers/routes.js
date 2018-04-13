const Modifiers = require('./model.js');
const express   = require('express');
const router    = express.Router();

const eg = [
  { text: 'blah', nsfw: false, },
  { text: 'test', nsfw: false, },
  { text: 'what', nsfw: false, },
  { text: 'data', nsfw: false, },
  { text: 'words', nsfw: false, },
  { text: 'nice', nsfw: false, },
  { text: 'yeah', nsfw: false, },
  { text: 'zoop', nsfw: false, },
];

const test = {
  text: 'test data',
  nsfw: false,
}

/* Get All Modifiers */
router.get('/', (req, res, next) => {
  Modifiers.find((err, modifiers) => {
    res.json(modifiers);
  });
});

/* Get a Modifier by ID */
router.get('/:id', (req, res, next) => {
  res.send(eg[0]);
  // Modifiers.find((err, modifiers) => {
  //   console.log(modifiers);
  // });
});

/* Save a Modifier */
router.post('/:id', (req, res, next) => {
  res.send('Save a Modifier');

  console.log('post received');

  Modifiers.create(test, (err, post) => {
    if (err) return next(err);

    res.json(post);
  });
});

/* Update a Modifier */
router.put('/:id', (req, res, next) => {
  res.send('Update a Modifier');
  // Modifiers.find((err, modifiers) => {
  //   console.log(modifiers);
  // });
});

/* Delete a Modifier */
router.delete('/:id', (req, res, next) => {
  res.send('Delete a Modifier');
  // Modifiers.find((err, modifiers) => {
  //   console.log(modifiers);
  // });
});

module.exports = router;