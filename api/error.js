module.exports = {
  handle(res, err) {
    res.status(500).send(err.message);
  },
};
