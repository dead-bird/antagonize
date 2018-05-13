const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    username: String,
    password: String,
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Users', schema);
