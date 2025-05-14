const express = require('express')
const app = express()

const database = require('./DataBase/index')
database.connectToDataBase();

const Controller = require('./controller/controllerStudent')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/studenti',Controller.getAllStudents)
app.get('/studenti/:id',Controller.getStudnet)
app.post('/studenti',Controller.addCreateStudent)
app.patch('/studenti/:id',Controller.updateStudent)
app.delete('/studenti/:id',Controller.deleteStudent)




const port = 10000
app.listen(port,(err)=>{
    if(err)return console.log(err)
        console.log('Serverot Startuva')
})