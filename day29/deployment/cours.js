/*
MongoDB+Atlas
*/
const mongoose = require('mongoose');
const uri = "mongodb+srv://arkadian:<password>@cluster0.npp7qf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });

 //!Store the MongoDB connection URI in an environment variable and then use it in Node.js app

 //*Create .env file
 MONGODB_URIURI="mongodb+srv://arkadian:<password>@cluster0.npp7qf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 //* install dotenv package
 //?npm install dotenv

 //*use dotenv
 require('dotenv').config();
 const uri1 = process.env.MONGODB_URI;



 //!express app will look like this 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;
const uri2 = process.env.MONGODB_URI;

mongoose
  .connect(uri2)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//!project structure
/*
project-root/
|-- node_modules/
|-- src/
|   |-- controllers/
|   |   |-- userController.js
|   |   |-- postController.js
|   |-- middleware/
|   |   |-- authentication.js
|   |-- models/
|   |   |-- User.js
|   |   |-- Post.js
|   |-- routes/
|   |   |-- userRoutes.js
|   |   |-- postRoutes.js
|   |-- app.js 
|-- .env
|-- package.json

*/ 