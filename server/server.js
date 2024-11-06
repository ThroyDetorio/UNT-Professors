// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb'); // Make sure MongoClient is imported
const { connectToDatabase, closeConnection, addProfessor, addRating, getProfessorWithRatings } = require('./database');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the database when the server starts
connectToDatabase();

// Endpoint to add a new professor
app.post('/professor', async (req, res) => {
    try {
        const professorData = req.body;
        const professorId = await addProfessor(professorData);
        res.status(201).json({ message: 'Professor added successfully', professorId });
    } catch (error) {
        console.error('Error adding professor:', error);
        res.status(500).json({ error: 'Failed to add professor' });
    }
});

// Endpoint to add a rating for a professor
app.post('/professor/:id/rating', async (req, res) => {
    try {
        const professorId = req.params.id;
        const ratingData = req.body;
        await addRating(professorId, ratingData);
        res.status(201).json({ message: 'Rating added successfully' });
    } catch (error) {
        console.error('Error adding rating:', error);
        res.status(500).json({ error: 'Failed to add rating' });
    }
});

// Endpoint to get a professor with ratings
app.get('/professor/:id', async (req, res) => {
    try {
        const professorId = req.params.id;
        const professor = await getProfessorWithRatings(professorId);
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).json({ error: 'Professor not found' });
        }
    } catch (error) {
        console.error('Error retrieving professor data:', error);
        res.status(500).json({ error: 'Failed to retrieve professor data' });
    }
});

// Endpoint to get a list of all professors
app.get('/professors', async (req, res) => {
  try {
      const database = client.db("your_database_name"); // Replace with your actual database name
      const professors = database.collection("professors");
      const professorList = await professors.find({}).toArray();
      res.json(professorList);
  } catch (error) {
      console.error('Error retrieving professor list:', error);
      res.status(500).json({ error: 'Failed to retrieve professor list' });
  }
});

// Gracefully close the database connection when the server stops
process.on('SIGINT', async () => {
    await closeConnection();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
