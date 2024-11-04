const express = require("express");
const cors = require("cors"); // Import CORS
const { connectToDatabase, closeConnection, getProfessorWithRatings } = require("./database");

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get("/professor/:id", async (req, res) => {
  const professorId = req.params.id;
  try {
    const professorData = await getProfessorWithRatings(professorId);
    if (professorData) {
      res.json(professorData);
    } else {
      res.status(404).json({ message: "Professor not found" });
    }
  } catch (error) {
    console.error("Error fetching professor data:", error);
    res.status(500).json({ message: "Error fetching professor data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
