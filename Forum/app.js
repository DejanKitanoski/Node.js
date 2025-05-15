const jwt = require('express-jwt')
const cookieParser = require('cookie-parser')

const express = require('express')

const app = express()
const dataBase = require('./DataBase/index')
dataBase.connectToDataBase()
require('dotenv').config();
const aut = require('./handler/autHandler')
const viewHandler = require('./controller/viewController')
const Controller = require('./controller/forumController')
const imgPost =  require('./handler/post')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.set('view engine','ejs')
app.use(express.static('public'))

app.post("/forgorPassword")







app.use(
    jwt.expressjwt({
    algorithms:['HS256'],
    secret: process.env.JWT_SECRET,
    getToken: (req) => {
        console.log(req.cookies);
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null;
      },
    })
    
)
app.post('/api/v1/signup',aut.signup)
app.post('/api/v1/login',aut.login)



app.get("/posts",Controller.getPosts);
app.get("/post/:id",Controller.getPost);
app.post("/posts",aut.protect,Controller.createPost,imgPost.uploadPhoto);
app.post("/createPostUser",aut.protect,Controller.createByUser,imgPost.uploadPhoto)
app.get("/madeByUser",aut.protect,Controller.getByUser,imgPost.uploadPhoto)


app.get('/login',viewHandler.getLoginForm)

app.get('/viewposts',viewHandler.forumView,imgPost.uploadPhoto)
app.post('/createPost',Controller.createPostPost)










const port = process.env.PORT
app.listen(port,(err)=>{
    if(err)return console.log(err)
        console.log('Serverot Startuva')
})
// {
//   "titele": "My First Post",
//   "content": "This is the content of my first post."
  
// }

// {
//     "name":"Dejan",
//     "email":"dejan@gmail.com",
//     "password":"Dejan12345!"
// }