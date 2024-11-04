// database.js
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    if (!client.isConnected) {
      await client.connect();
      console.log("Successfully connected to MongoDB!");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Function to close the database connection
async function closeConnection() {
  try {
    await client.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
}


// Function to insert a professor
async function addProfessor(professorData) {
  try {
    const database = client.db("your_database_name"); // replace with your database name
    const professors = database.collection("professors");
    const result = await professors.insertOne(professorData);
    console.log(`Professor added with _id: ${result.insertedId}`);
    return result.insertedId;
  } catch (error) {
    console.error("Error adding professor:", error);
  }
}

// Function to add a rating for a professor
async function addRating(professorId, ratingData) {
  try {
    const database = client.db("your_database_name");
    const ratings = database.collection("ratings");
    const result = await ratings.insertOne({ professorId: new ObjectId(professorId), ...ratingData });
    console.log(`Rating added with _id: ${result.insertedId}`);
  } catch (error) {
    console.error("Error adding rating:", error);
  }
}

// Function to get a professor with all ratings
async function getProfessorWithRatings(professorId) {
  try {
    const database = client.db("your_database_name");
    const professors = database.collection("professors");
    const ratings = database.collection("ratings");

    // Fetch professor details using ObjectId
    const professor = await professors.findOne({ _id: new ObjectId(professorId) });
    if (!professor) {
      console.log("Professor not found");
      return null;
    }

    // Fetch ratings for the professor using ObjectId
    const professorRatings = await ratings.find({ professorId: new ObjectId(professorId) }).toArray();
    return { ...professor, ratings: professorRatings };
  } catch (error) {
    console.error("Error retrieving professor with ratings:", error);
  }
}

// Optional function to insert users from a file (if needed for testing)
async function insertUsersFromFile(filePath) {
  try {
    await client.connect();
    const database = client.db("your_database_name");
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

module.exports = { connectToDatabase, closeConnection, addProfessor, addRating, getProfessorWithRatings, insertUsersFromFile };
