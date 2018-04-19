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
  Modifiers.findById(req.params.id, (err, modifier) => {
    if (err) return next(err);

    res.json(modifier);
  });
});

/* Create a Modifier */
router.post('/', (req, res, next) => {
  Modifiers.create(req.body, (err, modifier) => {
    if (err) return next(err);

    res.json(modifier);
  });
});

/* Update a Modifier */
router.put('/:id', (req, res, next) => {
  Modifiers.findByIdAndUpdate(req.params.id, req.body, {upsert:true}, (err, modifier) => {
    if (err) return res.send(500, { error: err });

    return res.json(modifier);
  });
});

/* Delete a Modifier */
router.delete('/:id', (req, res, next) => {
  Modifiers.remove({ _id: req.params.id }, (err, modifier) => {
    if (err) return res.send(500, { error: err });

    return res.json(modifier);
  });
});

module.exports = router;
