const express=require('express');
const app=express();
// const { v4: uuidv4 } = require('uuid');
var bodyParser = require('body-parser')
// const { unlink } = require('fs');

// const nodemailer = require('nodemailer');
// const fileupload = require('express-fileupload')
// app.use(fileupload())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'))

const port=process.env.PORT | 5000;
app.listen(port,()=>{
    console.log("server started")
})

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://abhishek:abhishek@cluster0.gvwwg.mongodb.net/test?retryWrites=true&w=majority";
var dbo;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("db connected");
    dbo = db.db("test");
});

app.get("/list",(req,res)=>{
  
    dbo.collection("items").find({}).toArray( function(err, result) {
        if (err) {
            res.status(500).json({data:{},msg:"List not found"})
            // throw err;
        }else{
            if(result!=null){
                res.status(200).json({data:result,msg:"List found sucssesfully"})
            }else{
                res.status(500).json({data:{},msg:"List not found."})
            }
        };
      });

})


