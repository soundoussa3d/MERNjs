//!connection to the database
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


  async function addUsers() {
  
    try {
      await client.connect();
  
      const database = client.db('mydb'); // Your database name
      const collection = database.collection('users'); // Your collection name
  
      collection
        .insertMany([{ name: "Arkadian4", age: "29" },{ name: "Arkadian5", age: "17" },{ name: "Arkadian6", age: "20" }])
        .then((user) => console.log("User Created Successfully: ", user))
        .catch((error) => console.log("Error: ", error));
    } finally {
      await client.close();
    }
  }
  
  //getUsers().catch(console.error);

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
