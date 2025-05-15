const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  durationMinutes: {
    type: Number,
    min: [1, "Duration too short"],
    max: [600, "Duration too long"]
  }
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
