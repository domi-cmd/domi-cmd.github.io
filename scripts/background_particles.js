const toggleButton = document.getElementById("darkModeToggle");
const toggleIcon = document.getElementById("toggleIcon");

// Function to load tsParticles with a specific background color
function loadParticles(backgroundColor) {
    tsParticles.load("tsparticles", {
        preset: "links",
        background: {
            color: backgroundColor,
        },
        particles: {
            color: {
                value: backgroundColor === "#000" ? "#ffffff" : "#000", // Adjust particle color
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 55,
            },
            links: {
                color: backgroundColor === "#000" ? "#ffffff" : "#000", // Adjust link color
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
            },
        },
        retina_detect: true,
    });
}

// Check saved theme and apply the correct background
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.toggle("dark-mode", savedTheme === "dark");
toggleIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️"; // Set initial icon

// Load particles based on the theme
loadParticles(savedTheme === "dark" ? "#000" : "#fff");

// Toggle function
toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    
    // Save user preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the icon
    toggleIcon.textContent = isDarkMode ? "🌙" : "☀️";

    // Reload tsParticles with the new background color
    loadParticles(isDarkMode ? "#000" : "#fff");
});
