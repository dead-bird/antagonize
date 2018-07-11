const Words = require('./model.js');
const express = require('express');
const router = express.Router();

/* List */
router.get('/', (req, res, next) => {
  Words[word(req)].find((err, nouns) => {
    if (err) return next(err);

    res.json(nouns);
  });
});

/* Show */
router.get('/:id', (req, res, next) => {
  Words[word(req)].findById(req.params.id, (err, noun) => {
    if (err) return next(err);

    res.json(noun);
  });
});

/* Create */
router.post('/', (req, res, next) => {
  Words[word(req)].create(req.body, (err, noun) => {
    if (err) return next(err);

    res.json(noun);
  });
});

/* Update */
router.put('/:id', (req, res, next) => {
  Words[word(req)].findByIdAndUpdate(
    req.params.id,
    req.body,
    { upsert: true },
    (err, noun) => {
      if (err) return next(err);

      return res.json(noun);
    }
  );
});

/* Delete */
router.delete('/:id', (req, res, next) => {
  Words[word(req)].remove({ _id: req.params.id }, (err, noun) => {
    if (err) return next(err);

    return res.json(noun);
  });
});

function word(route) {
  return route.baseUrl.replace('/', '');
}

module.exports = router;
