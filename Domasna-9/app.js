const jwt = require('express-jwt')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
require('dotenv').config();
const database = require('./DataBase/index')
database.connectToDataBase();
const aut = require('./handler/authHandler')
const Controller = require('./controller/controllerStudent')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use(jwt.expressjwt({
    algorithms:['HS256'],
    secret: process.env.JWT_SECRET
}).unless({
    path: ["/api/v1/singup",'/api/v1/login','/studenti']
}))

app.post('/api/v1/signup',aut.signup)
app.post('/api/v1/login',aut.login)


app.get('/studenti',Controller.getAllStudents)
app.get('/studenti/:id',Controller.getStudnet)
app.post('/studenti',Controller.addCreateStudent)
app.patch('/studenti/:id',Controller.updateStudent)
app.delete('/studenti/:id',Controller.deleteStudent)



const port = process.env.PORT
app.listen(port,(err)=>{
    if(err)return console.log(err)
        console.log('Serverot Startuva')
})