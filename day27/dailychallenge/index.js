const mongoose = require('mongoose');

//connect to database
mongoose
.connect('mongodb://localhost:27017/mydb')
.then(()=>console.log('Connected to database'))
.catch((err)=>console.log('Error: ' + err));

//!1 - define a schema
const userSchema=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    createdAt: {type: Date, default:Date.now},
});
//set the model

const User=mongoose.model('User',userSchema);

//!2-create a new user

const newUser=new User ({
    name: "amina",
    email: "amina@arks.group",
    age:20,
})

async function addUsers(newUser) {
    try {
        const result = await newUser
        .save();
        console.log("User created successfully : " + result);
      } catch (err) {
        console.error('Error adding a user:', err);
      }
}
addUsers(newUser);


//! 3- fetch users
function fetchUsers() {
  return User.find({})
  .then((users) => console.log(users))
  .catch((error) => console.log("Error fetching users: ", error));
}
fetchUsers();

//! 3- fetch a user
function fetchUser(nom) {
    return User.findOne({ name: nom })
    .then((user) => {
      if (user) console.log(user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error fetching users: ", error));
}
//fetchUser("saad");

//!4-update user email
function updateEmailUser(nom,email) {
    return User.findOneAndUpdate(
        { name: nom },
        { $set: { email:email } }
      )
        .then((user) => {
          if (user) console.log("User updated successfully: ", user);
          else console.log("User not found");
        })
        .catch((error) => console.log("Error fetching users: ", error));
    
}
//updateEmailUser("saad","saad@arkx.com");
//fetchUsers();

//!5-delete users created before a certain date 
async function deleteUsers(date) {
    try {
        const result = await User.deleteMany({ createdAt: { $lt: date } });
        console.log(`${result.deletedCount} users deleted.`);
      } catch (err) {
        console.error('Error deleting users:', err);
      }
}
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//deleteUsers(oneWeekAgo).catch(console.error);
//fetchUsers();

