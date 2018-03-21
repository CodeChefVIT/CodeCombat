const http=require('http');
const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const ocr=require('./ocr');
const tone=require('./tone');
const app=express();
app.set("views",'./views');
app.set("view engine ","ejs");
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',function(req,res,next){
res.end("helo");
console.log("");
});
app.use('/ ocr',ocr);
app.use('/tone',tone);

app.use(function(req,res,next){
  res.render('');
});
app.use(function(err,req,res,next){
console.log(err.message);

});

app.listen(3000,function(err,result){
  console.log("Connected to server ");
});
