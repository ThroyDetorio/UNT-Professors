// Hamburger menu functionality
// Get the elements for the hamburger menu, close icon, and the menu itself
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
const menu = document.querySelector('.menu');

// Show the menu when the hamburger icon is clicked, hide the hamburger icon and show the close icon
menuIcon.addEventListener('click', () => {
    menu.style.display = 'block';         // Display the menu
    menuIcon.style.display = 'none';      // Hide the hamburger icon
    closeIcon.style.display = 'block';    // Show the close icon
});

// Hide the menu when the close icon is clicked, hide the close icon and show the hamburger icon
closeIcon.addEventListener('click', () => {
    menu.style.display = 'none';          // Hide the menu
    closeIcon.style.display = 'none';     // Hide the close icon
    menuIcon.style.display = 'block';     // Show the hamburger icon
});

// Modal and login functionality
// Get the elements for the login button, login modal, and the close button inside the modal
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');

// Display the login modal when the login button is clicked
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex';    // Display the modal (set flexbox layout)
});

// Hide the login modal when the close button inside the modal is clicked
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';    // Hide the modal
});

// Login form submission functionality
// Get the form and add an event listener to handle form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();    // Prevent the form from refreshing the page

    // Get the username entered by the user
    const username = document.getElementById('username').value;

    try {
        // Send a POST request to the server with the username
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),    // Send the username as JSON
        });

        // Process the server's response
        const result = await response.json();
        const messageDiv = document.getElementById('loginMessage'); // Display message area

        if (result.success) {
            // If the server confirms successful login, display a success message
            messageDiv.innerHTML = 'Login Successful!';
            messageDiv.style.color = 'green';    // Set message color to green
        } else {
            // If the login fails, display a failure message
            messageDiv.innerHTML = 'Login Failed!';
        }
    } catch (err) {
        // Handle any errors during the login process
        console.error('Error during login:', err);
        document.getElementById('loginMessage').innerHTML = 'Login Error!';  // Show error message
    }
});

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';  // Hide the modal if clicked outside
    }
    
// Dropdown functionality for College Majors
const collegeMajorsLink = document.querySelector('.menuItem > a'); // Adjust selector if necessary
collegeMajorsLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    const subMenu = this.nextElementSibling; // Get the sub-menu
    if (subMenu) {
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block'; // Toggle display
    }
}    
};
