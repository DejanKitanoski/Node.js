const express = require('express');
const database = require('./database/database')
const channelControler = require('./controler/channelControler')
const programControler = require('./controler/programControler')


const app = express()
app.use(express.urlencoded({extended:true})); 
app.use(express.json())
database.connectToDataBase();


app.get('/channels', channelControler.getAllChannel)
app.post('/channel', channelControler.createChannel);
app.delete('/channel/:id', channelControler.deleteChannel);
app.patch('/channel/:id', channelControler.updateChannel);

app.get('/programs', programControler.getAllProgram);
app.post('/program', programControler.createProgram);
app.delete('/program/:id', programControler.deleteProgram);
app.patch('/program/:id', programControler.updateProgram);


app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully started server");
}); 