// database.js
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Load environment variables

// Use the environment variable for the MongoDB password
const uri = 'mongodb+srv://serhaterdogmus1:byteme@cluster0.gsge9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    // Close the connection after verification
    await client.close();
  }
}

module.exports = connectToDatabase;
