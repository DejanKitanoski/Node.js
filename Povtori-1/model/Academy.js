const mongoose = require('mongoose');

const Academy = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String
});

module.exports = mongoose.model('Academy', Academy);
