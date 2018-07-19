const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    nsfw: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true },
  },
  { versionKey: false }
);

module.exports = {
  nouns: mongoose.model('Nouns', schema),
  modifiers: mongoose.model('Modifiers', schema),
};

// export const nouns = mongoose.model('Nouns', schema);
// export let modifiers = mongoose.model('Modifiers', schema);
