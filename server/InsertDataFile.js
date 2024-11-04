// InsertDataFile.js
const { connectToDatabase, closeConnection, addProfessor, addRating, getProfessorWithRatings } = require('./database');

async function main() {
  await connectToDatabase();

  // Step 1: Add a professor
  const professorData = { name: "Dr. Alice Smith", department: "Computer Science", email: "alice.smith@university.edu" };
  const professorId = await addProfessor(professorData);

  if (professorId) {
    const professorIdStr = professorId.toString();

    // Step 2: Add a rating for the professor
    const ratingData = { rating: 5, comment: "Excellent professor, explains clearly!" };
    await addRating(professorIdStr, ratingData);

    // Step 3: Retrieve the professor with ratings
    const professorWithRatings = await getProfessorWithRatings(professorIdStr);
    console.log("Professor with ratings:", professorWithRatings);
  }

  // Close the database connection
  await closeConnection();
}

main().catch(console.error);
