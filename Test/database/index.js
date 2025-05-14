const mongoose = require('mongoose');

exports.connectToDataBase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://supbro606:raQ6aoV3E0hBX8Bk@cluster0.msczx.mongodb.net/DataBase-DB1?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Successfully connected to database!');
  } catch (err) {
    console.log(err.message);
  }
};