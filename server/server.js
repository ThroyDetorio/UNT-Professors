const express = require("express");
const cors = require("cors");
const { connectToDatabase, closeConnection, getProfessorList, getProfessorById } = require("./database");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

(async () => {
  await connectToDatabase();
})();

// Route to get a list of all professors
app.get("/professors", async (req, res) => {
  try {
    const professors = await getProfessorList();
    res.json(professors);
  } catch (error) {
    console.error("Error retrieving professor list:", error);
    res.status(500).json({ error: "Failed to retrieve professor list" });
  }
});

// Route to get details of a professor by ID
app.get("/professor/:id", async (req, res) => {
  try {
    const professorId = req.params.id;
    const professor = await getProfessorById(professorId);
    if (professor) {
      res.json(professor);
    } else {
      res.status(404).json({ error: "Professor not found" });
    }
  } catch (error) {
    console.error("Error retrieving professor data:", error);
    res.status(500).json({ error: "Failed to retrieve professor data" });
  }
});

// Close the database connection when the server stops
process.on("SIGINT", async () => {
  await closeConnection();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
