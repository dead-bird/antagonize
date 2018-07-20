const Words = require('./model.js');
const express = require('express');
const router = express.Router();

/* List */
router.get('/', (req, res, next) => {
  Words[word(req)]
    .find()
    .populate('author', 'username')
    .exec((err, words) => {
      if (err) return next(err);

      res.json(words);
    });
});

/* Show */
router.get('/:id', (req, res, next) => {
  Words[word(req)]
    .findById(req.params.id)
    .populate('author', 'username')
    .exec((err, word) => {
      if (err) return next(err);

      res.json(word);
    });
});

/* Create */
router.post('/', (req, res, next) => {
  Words[word(req)].create(req.body, (err, word) => {
    if (err) return next(err);

    res.json(word);
  });
});

/* Update */
router.put('/:id', (req, res, next) => {
  Words[word(req)].findByIdAndUpdate(
    req.params.id,
    req.body,
    { upsert: true },
    (err, word) => {
      if (err) return next(err);

      return res.json(word);
    }
  );
});

/* Delete */
router.delete('/:id', (req, res, next) => {
  Words[word(req)].remove({ _id: req.params.id }, (err, word) => {
    if (err) return next(err);

    return res.json(word);
  });
});

function word(route) {
  return route.baseUrl.replace('/', '');
}

module.exports = router;
