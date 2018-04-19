const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    text: String,
    nsfw: Boolean,
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Modifiers', schema);
