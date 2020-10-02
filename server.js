const express = require('express');
const app = express();
const {v4: uuidv4 }= require('uuid');
// const server = require('http').Server(app);

app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    // res.status(200).send("hello world app")
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room',(req,res)=>{
    res.render('room',{roomId: req.params.room})
})







app.listen(3030);
// server.listen(3030);