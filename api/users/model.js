const mongoose = require('mongoose');

let schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Users', schema);
