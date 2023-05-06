const express = require("express");
const app = express();
const path = require("path");
const collectiondoc = require("./mongodb");
const port = process.env.PORT || 3000;
require("./mongodb");
const templatepath = path.join(__dirname,"../templates");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
// app.set("views",templatepath)


var index = require('../routes/index');
const { copyFileSync } = require('fs');
app.use('/', index);
app.get("/",(req,res)=>{
    res.render("signup");
})


app.post("/login",async(req,res)=>{

    res.render("login");

})

app.post("/signup",async(req,res)=>{

   const data ={
    name : req.body.name,
    password : req.body.password
   }

   await collectiondoc.insertMany([data]);
   res.render("succc");
    
})



app.listen(port,()=>{
    console.log("listen on port 3000")
})