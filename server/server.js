const express=require('express');
const bodyParse =require('body-parser'); // body-parser used to convert the date string into javascript

var {mongoose} = require('./db/mongoose');
var {Todo}= require('./model/smb');

var app=express();

app.use(bodyParse.json());

app.post('/smb',(req,res)=>{
  var todo= new Todo({
    text:req.body.text
  });
todo.save().then((doc)=>{
  res.send(doc)
},(err)=>{
  res.status(400).send(err)
});

});


app.listen(3000,()=>{
  console.log("server run the 3000 port");
})
