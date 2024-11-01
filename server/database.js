// database.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');
require('dotenv').config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Function to insert users from a JSON file
async function insertUsersFromFile(filePath) {
  try {
    await client.connect();
    const database = client.db("your_database_name"); // replace with your database name
    const users = database.collection("users");

    // Read and parse the JSON file
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const usersArray = JSON.parse(fileData);

    // Insert users into MongoDB
    const result = await users.insertMany(usersArray);
    console.log(`${result.insertedCount} users inserted.`);
  } catch (error) {
    console.error("Error inserting users from file:", error);
  } finally {
    await client.close();
  }
}

module.exports = { connectToDatabase, insertUsersFromFile };
