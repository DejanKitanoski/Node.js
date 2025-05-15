const mongoose = require("mongoose");
const studentiShema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "Mora da ima ime"],
    trim: true,
    minlength: 1,
    maxlength: [20, "Imeto e pre dolgo"],
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
  grade: {
    type: Number,
    require: [true, "Mora da vnesete ocena"],
    minlength: 1,
    maxlength: [10, "Nemoze da imate pogolem prosek od 10 "],
  },
  city: {
    type: String,
    require:[true,"Vnesete mesto na ziveenje"]
    
  },
});
const Student = mongoose.model("Student", studentiShema);
module.exports = Student;
