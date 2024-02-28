/*
1-show databases
2-use mydatabase
3-show collections
4-db.users.insertOne({ name: "Arkadian", age: 25 })
5-db.users.find()
6-db.users.findOne({age: 25})
7-db.users.updateOne({ name: "Arkadian" }, { $set: { age: 30 } })
8-db.users.deleteOne({ name: "Arkadian" })
*/
/*
mongodb is a database management system that manages the databases.
sql :standard for databases to manage databases (it's a language) mysql postgres oracle
nosql: not only sql (mongodb : document oriented database)
ORM: object relationnal mapper  or ODM(mongoose)
coolection => class
docs => object

schema structure de l'objet:
model : ou il y' a les fonctionnalites pour faire interaction entre base de donnee
*/

//!models/user.model.js
const mongoose = require('mongoose');
//schema

const userSchema = new mongoose.Schema({
    username:{type:String, required:true,unique : true}, //string type requierd
    email:{type:String, required:true,unique : true},
    password:{type:String, required:true},
    category_id:{type  : mongoose.Schema.Types.ObjectId , ref: "Category" }
    //Products.find().populate("category_id"); 
},{
    timestamps : true,
}
);

//model 
const User=mongoose.model("User",userSchema);

module.exports = User;


//!index.js
const express =require ('express') ;
const mongoose1=require('mongoose');
//const User = 
//const const connectDB =;

async function main() {
    await connectDB();
    app.post('/users',async (req,res)=>res.json())
}

