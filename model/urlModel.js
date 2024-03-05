const mongoose = require('mongoose');

// Url Schema
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});

// model
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;