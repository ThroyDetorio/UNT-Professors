// Elements
const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeButton = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const emailInput = document.getElementById("email");
const userInfo = document.getElementById("userInfo");
const userNameDisplay = document.getElementById("userName");
const logoutButton = document.getElementById("logoutButton");

// Event Listeners
loginButton.onclick = () => {
    loginModal.style.display = "flex";
};

closeButton.onclick = () => {
    loginModal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};

loginForm.onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const email = emailInput.value.trim();

    // Email domain validation
    if (email.endsWith("@my.unt.edu")) {
        const username = email.split("@")[0];
        localStorage.setItem("loggedInUser", username); // Store username in localStorage
        displayUser(username);
    } else {
        loginMessage.textContent = "Please use a valid UNT email ending with '@my.unt.edu'";
        loginMessage.style.color = "red";
    }
};

logoutButton.onclick = () => {
    localStorage.removeItem("loggedInUser"); // Clear stored user
    hideUser();
};

// Check if user is already logged in
window.onload = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        displayUser(loggedInUser);
    }
};

// Functions to display/hide user info
function displayUser(username) {
    loginModal.style.display = "none"; // Close modal
    loginButton.style.display = "none"; // Hide login button
    userInfo.style.display = "flex"; // Show user info
    userNameDisplay.textContent = `Welcome, ${username}`; // Display username
}

function hideUser() {
    loginButton.style.display = "block";
    userInfo.style.display = "none";
}
