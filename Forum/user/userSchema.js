const mongoose = require("mongoose")

const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
name:{
    type: String,
    required:[true,'Korisnikot moda da ima ime']
},
email:{
    type: String,
    required:[true,'Korisnikot moda da ima email'],
    lowercase: true,
    unique: true,
    validate:[validator.isEmail,'Ve molime vnesete validen emaill'],
},
password:{
    type:String,
  required:[true,'Vnesi validna lozinka'],
    
  validate:[validator.isStrongPassword,'Korisnicka lozikna']
},
passwordResetToken:String,
passwordResetExpires:Date,
})

userSchema.pre('save',async function (next) {
    if(!this.isModified('password'))return next();
    this.password = await bcrypt.hash(this.password,8);
    next()
})

const User = mongoose.model("User",userSchema)

module.exports = User
// {
//     "name":"Dejan",
//     "email":"dejan@gmail.com",
//     "password":"Dejan12345!"
// }