const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    nsfw: { type: Boolean, required: true },
    author: String,
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Modifiers', schema);
