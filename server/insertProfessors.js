require('dotenv').config(); // Load environment variables
const fs = require('fs');
const { MongoClient } = require('mongodb');

// Use the MongoDB URI from the .env file
const uri = process.env.MONGO_URI;

// Database and Collection names
const dbName = "university_database";
const collectionName = "professors";

// Function to insert data from file into MongoDB
async function insertDataFromFile(filePath) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB.");

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Read and parse the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Insert data into the collection
    const result = await collection.insertMany(data);
    console.log(`Data inserted successfully! Inserted ${result.insertedCount} documents.`);

  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    // Close the MongoDB client
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Specify the path to your JSON file
const filePath = './EENG.json';
insertDataFromFile(filePath);
