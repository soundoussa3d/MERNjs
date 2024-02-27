//!connection to the database
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));

//!reference the table
const db = client.db('mydb');
const collection = db.collection('users');

//!insert in the collection
collection
  .insertOne({ name: "Arkadian", age: "25" })
  .then((user) => console.log("User Created Successfully: ", user))
  .catch((error) => console.log("Error: ", error));
  