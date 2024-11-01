document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon');
    const menu = document.querySelector('.menu');

    // Hamburger menu functionality
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            menu.style.display = 'block';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        });
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', () => {
            menu.style.display = 'none';
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        });
    }

    // Modal and login functionality
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    // Login form submission functionality
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const messageDiv = document.getElementById('loginMessage');

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            if (messageDiv) {
                messageDiv.innerHTML = result.success ? 'Login Successful!' : 'Login Failed!';
                messageDiv.style.color = result.success ? 'green' : 'red';
            }
        } catch (err) {
            console.error('Error during login:', err);
            if (messageDiv) {
                messageDiv.innerHTML = 'Login Error!';
            }
        }
    });

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (loginModal.style.display === 'flex' && event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    };

    // Dropdown functionality for all menu items with sub-menus
    document.querySelectorAll('.menuItem > a').forEach(item => {
        item.addEventListener('click', function(e) {
            const subMenu = this.nextElementSibling; // Get the next element (sub-menu)
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                e.preventDefault(); // Prevent the default link behavior
                subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block'; // Toggle display
            }
        });
    });

    // Specific handling for the College Majors link
    const collegeMajorsLink = document.querySelector('.college-majors-link');
    const subMenu = document.querySelector('.sub-menu');

    if (collegeMajorsLink) {
        collegeMajorsLink.addEventListener('mouseover', () => {
            subMenu.style.display = 'block'; // Show the sub-menu on hover
        });

        collegeMajorsLink.addEventListener('mouseout', () => {
            subMenu.style.display = 'none'; // Hide the sub-menu when not hovering
        });

        // Ensure the sub-menu stays open if hovering over it
        subMenu.addEventListener('mouseover', () => {
            subMenu.style.display = 'block';
        });

        subMenu.addEventListener('mouseout', () => {
            subMenu.style.display = 'none';
        });
    }
});
