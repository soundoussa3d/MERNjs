//npm init
//npm i express

//framework backend de node js qui nous aide à travailler avec http requests
//middleware is a traitement between request and response (has 2 types)
//global middleware :used in all reoutes (router.use)
//local middleware : used in  a specific route 
//to go from a middleware to another we use 'next'
/*function dadfsafn(req,res,next) (next  to go to the next middleware)
or function dadfsafn(err,req,res,next)*/

const express = require('express');
const app = express();
const phones = require('./phones.json');
const fs=require()
//global middleware
app.use(express.json());
//get all the products
app.get('/phones', (req, res) =>{
     res.json(phones);
})
//add new phone
app.post('/phones', (req, res) =>{
    const newProduct = req.body;
    phones.push(newProduct);
    fs.writeFile('./phones.json',JSON.stringify(phones),(err)=>{
        if (err) {
            res.status(500).json({message:"An error has occurred"});
        } else {
            res.json(newProduct)
        }
        
    });

});
//parametre dynamique
app.put('/phond/:id', (req, res) =>{
    let target = phones.find((p)=>p.id == req.params.id);
    if (!target) {
        res.status(404).json({message:"Not Found"});
        return;
    } 
    let newPhone= {...target,...req.body };
    let index = phones.indexOf(target);
    phones[index]=newPhone ;
    fs.writeFile('./phones.json',JSON.stringify(phones),(err)=>{
        if (err) {
            res.status(500).json({message:"An error has occurred"});
        } else {
            res.json(phones)
        }
        
    });


});






app.listen(3000,()=>{
    console.log("Serveur listening on port 3000");
});

//to test we write node index.js

//status 100: informative
//status 200 : 
//status 300: redirection


//install nodemon : npm i nodemon
//devdependency : npm i -D nodemon 
//npm i --save-dev nodemon

//validation des champs
//architecture mvc
//