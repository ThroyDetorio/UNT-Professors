const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

// Connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db("university_database"); // Connect to your database
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Close the database connection
async function closeConnection() {
  try {
    await client.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error closing database connection:", error);
  }
}

// Fetch all professors
async function getProfessorList() {
  try {
    const professors = await db.collection("professors").find({}).toArray();
    return professors;
  } catch (error) {
    console.error("Error fetching professor list:", error);
    throw error;
  }
}

// Fetch a single professor by ID with detailed data
async function getProfessorById(professorId) {
  try {
    const professor = await db.collection("professors").findOne({ _id: new ObjectId(professorId) });
    return professor;
  } catch (error) {
    console.error("Error fetching professor:", error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
  closeConnection,
  getProfessorList,
  getProfessorById,
};
