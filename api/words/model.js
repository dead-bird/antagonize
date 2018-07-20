const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let words = new Schema(
  {
    text: { type: String, required: true },
    nsfw: { type: Boolean, required: true },
    date: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
  },
  { versionKey: false }
);

module.exports = {
  nouns: mongoose.model('Nouns', words),
  modifiers: mongoose.model('Modifiers', words),
};
