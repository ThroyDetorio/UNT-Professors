// server.js
const express = require("express");
const { connectToDatabase, closeConnection, getProfessorWithRatings } = require("./database");

const app = express();
const PORT = 3000;

// Connect to the database
app.use(async (req, res, next) => {
  await connectToDatabase();
  next();
});

// Endpoint to get professor by ID along with ratings
app.get("/professor/:id", async (req, res) => {
  const professorId = req.params.id;
  const professorData = await getProfessorWithRatings(professorId);
  if (professorData) {
    res.json(professorData);
  } else {
    res.status(404).json({ message: "Professor not found" });
  }
});

// Close database connection on exit
app.use(async (req, res, next) => {
  await closeConnection();
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
