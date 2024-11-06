// script.js

const apiUrl = "http://3.138.156.10:3000"; // Base URL for the API

async function loadProfessorList() {
    try {
        const response = await fetch(`${apiUrl}/professors`);
        console.log("Response from /professors:", response);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const professors = await response.json();
        console.log("Professor list:", professors);
        const professorSelect = document.getElementById("professorSelect");

        professors.forEach(prof => {
            const option = document.createElement("option");
            option.value = prof._id;
            option.textContent = prof.name;
            professorSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading professor list:", error);
    }
}

async function loadProfessorData() {
    const professorId = document.getElementById("professorSelect").value;
    if (!professorId) return;

    try {
        const response = await fetch(`${apiUrl}/professor/${professorId}`);
        console.log("Response from /professor/:id:", response);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        console.log("Selected professor data:", data);
        const professorContainer = document.getElementById("professor-data");

        professorContainer.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Department:</strong> ${data.department}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <h3>Ratings:</h3>
            <ul>
                ${data.ratings.map(rating => `
                    <li>
                        <strong>Rating:</strong> ${rating.rating} <br>
                        <strong>Comment:</strong> ${rating.comment}
                    </li>
                `).join('')}
            </ul>
        `;
    } catch (error) {
        console.error("Error fetching professor data:", error);
        document.getElementById("professor-data").innerHTML = `<p>Failed to load professor data.</p>`;
    }
}

// Load the professor list on page load
loadProfessorList();
