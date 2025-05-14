const mongoose = require("mongoose");
const studentiShema = new mongoose.Schema({
  Ime: {
    type: String,
    required: [true, "Mora da ima ime"],
    trim: true,
    minlength: 1,
    maxlength: [20, "Imeto e pre dolgo"],
    unique: [true, "Vnesi validno ime"],
  },
  age: {
    type: Number,
    required: [true, "Mora da ima vozrast"],
    min: [18, "Premala vozrast"],
    max: [100, "Previsoka vozrast"],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "Mora da ima pol"],
  },
});
const Student = mongoose.model("Student", studentiShema);
module.exports = Student;
