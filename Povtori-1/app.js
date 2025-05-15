const express = require('express');
const database = require('./database/database')
const academyControler = require('./controler/academyControler')
const courseControler = require('./controler/courseControler')


const app = express()
app.use(express.urlencoded({extended:true})); 
// ZOS OVEEEEEEEEEEEEE
app.use(express.json());

database.connectToDataBase();

app.get('/course', courseControler.getAllCourse)
app.post('/course', courseControler.createCourse);
app.delete('/course/:id', courseControler.deleteCourse);
app.patch('/course/:id', courseControler.updateCourse);

app.get('/academies', academyControler.getAllAcademys);
app.post('/academy', academyControler.createAcademy);
app.delete('/academy/:id', academyControler.deleteAcademy);
app.patch('/academy/:id', academyControler.updateAcademy);

app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully started server");
}); 
// ZOS OVEEEE 