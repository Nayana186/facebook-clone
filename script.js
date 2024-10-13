// script.js

// Toggle the settings menu
function settingsMenuToggle() {
    const settingsMenu = document.querySelector('.settings-menu');
    settingsMenu.classList.toggle('visible');
}

// Get dark button reference
const darkBtn = document.getElementById("dark-btn");

// Toggle dark mode button on click
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    
    // If you want to add more dark mode functionality, such as toggling dark mode styles, you can do it here.
    document.body.classList.toggle("dark-mode"); // Example: toggling a dark mode class on the body
}
