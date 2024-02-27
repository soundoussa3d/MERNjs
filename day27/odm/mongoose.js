/*
*Mongoose is a prominent ODM library designed for mongoDB

?validation
?middlewares
?schema definition


*powerful oBject-document-mapping (ODM)

!1- npm install mongoose

!2-const mongoose = require('mongoose');

!3-mongoose
!  .connect("mongodb://localhost:27017/mydb")
!  .then(() => console.log("Connected to database"))
!  .catch((error) => console.log("Error: ", error));
*/
//require mongoose
const mongoose = require('mongoose');

//connect to database
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database 20"))
  .catch((error) => console.log("Error: ", error));

//define a schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number}
  });

//create a model
const User = mongoose.model('User', userSchema);


//create a new user 
const newUser = new User({
    name: "Arkadian2",
    email: "admin2@arkx.group",
    age: 25,
  });
  
  newUser
    .save()
    .then((user) => console.log("User created succesfully: ", user))
    .catch((error) => console.log("Error creating user: ", error));


//fetching users
User.find({})
  .then((users) => console.log(users))
  .catch((error) => console.log("Error fetching users: ", error));


//finding a user
User.findOne({ name: "Arkadian" })
  .then((user) => {
    if (user) console.log(user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error fetching users: ", error));


//updating a user
User.findOneAndUpdate(
    { email: "admin@arkx.group" },
    { $set: { email: "user@arkx.group", age: 20 } }
  )
    .then((user) => {
      if (user) console.log("User updated successfully: ", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error fetching users: ", error));



//deleting a user
User.findOneAndDelete({ email: "user@arkx.group" })
  .then((user) => {
    if (user) console.log("User deleted successfully: ", user);
    else console.log("User not found");
  })
  .catch((error) => console.log("Error deleting user: ", error));
