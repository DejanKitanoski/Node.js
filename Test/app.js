
const express = require('express')
const app = express()
const database = require('./pkg/dataBase/index')
database.connectToDataBase();
const studentController = require('./controller/controller')


const port = 100000
app.listen(port,(err)=>{
    if(err)return console.log(err)
        console.log('Serverot Startuva')
})