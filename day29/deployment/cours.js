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