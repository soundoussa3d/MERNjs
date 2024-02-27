//!connection to the database
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
const database = client.db('mydb'); // Your database name

//addusers
      const collection = database.collection('users'); // Your collection name
   
      /*collection
        .insertMany([{ name: "Arkadian8", age: "26" },{ name: "Arkadian9", age: "17" },{ name: "Arkadian10", age: "20" }])
        .then((user) => console.log("User Created Successfully: ", user))
        .catch((error) => console.log("Error: ", error));*/

async function getUsers() {
  
    try {
      await client.connect();
  
      const database = client.db('mydb'); // Your database name
      const collection = database.collection('users'); // Your collection name
  
      const users = await collection.find().toArray();
      console.log(users);
    } finally {
      await client.close();
    }
  }
  
  getUsers().catch(console.error);
