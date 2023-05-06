

const mongoose = require("mongoose");
const { PassThrough } = require("stream");

mongoose.connect("mongodb://127.0.0.1:27017/login").then(()=>{
    console.log("db connected.....");
}).catch((err)=>{
    console.log(err);
})


const logindoc = new mongoose.Schema({
    unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String
})


const collectiondoc = new mongoose.model("collectiondoc",logindoc);

module.exports=collectiondoc;