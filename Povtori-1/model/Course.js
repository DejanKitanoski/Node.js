const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  field: String,
});

module.exports = mongoose.model('Course', CourseSchema);
