// Hamburger menu toggle functionality
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.style.display = 'block';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    menu.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});
