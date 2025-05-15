const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'It must have a title'],
    minlength: 1,
    maxlength: [255, 'Title is too long.'],
    unique: [true, 'it must have unique title every channel'],
  },
  category: {
    name: {
      type: String,
      required: [true, "Category name is required"],
      minlength: 2,
      maxlength: 50
    }
  }
  
});

const channel = mongoose.model('channel', channelSchema);

module.exports = channel;