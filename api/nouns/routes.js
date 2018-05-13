const Nouns   = require('./model.js');
const express = require('express');
const router  = express.Router();

/* Get All Nouns */
router.get('/', (req, res, next) => {
  Nouns.find((err, nouns) => {
    res.json(nouns);
  });
});

/* Get a Noun by ID */
router.get('/:id', (req, res, next) => {
  Nouns.findById(req.params.id, (err, noun) => {
    if (err) return next(err);

    res.json(noun);
  });
});

/* Create a Noun */
router.post('/', (req, res, next) => {
  Nouns.create(req.body, (err, noun) => {
    if (err) return next(err);

    res.json(noun);
  });
});

/* Update a Noun */
router.put('/:id', (req, res, next) => {
  Nouns.findByIdAndUpdate(req.params.id, req.body, {upsert:true}, (err, noun) => {
    if (err) return res.send(500, { error: err });

    return res.json(noun);
  });
});

/* Delete a Noun */
router.delete('/:id', (req, res, next) => {
  Nouns.remove({ _id: req.params.id }, (err, noun) => {
    if (err) return res.send(500, { error: err });

    return res.json(noun);
  });
});

module.exports = router;
