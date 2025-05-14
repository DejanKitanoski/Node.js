const mongoose = require('mongoose')
const studentiShema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Mora da ima ime"],
        trim: true,
        minlength:1,
        maxlength:[20,"Imeto e pre dolgo"],
        unique:[title,"Vnesi validno ime"]
    },age: {
        type: Number,
        required: [true, "Mora da ima vozrast"],
        min: [18, "Premala vozrast"],
        max: [100, "Previsoka vozrast"]
    }, gender: {
        type: String,
        enum: ["male", "female"], 
        required: [true, "Mora da ima pol"]
    },
})
const student = mongoose.model("student",studentiShema)
module.exports = student