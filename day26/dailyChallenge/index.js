//!connection to the database
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
//const database = client.db('mydb'); // Your database name

async function addUsers() {
  
  try {
    await client.connect();

    const database = client.db('mydb'); // Your database name
    const collection = database.collection('users'); // Your collection name
    const result = await collection
        .insertMany([{ name: "hi", age: "26" },{ name: "hello", age: "17" },{ name: "hihello", age: "20" }])
        .then((user) => console.log("User Created Successfully: ", user))
        .catch((error) => console.log("Error: ", error));
    return result;

  } finally {
    await client.close();
  }
}
//addUsers().catch(console.error);

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
