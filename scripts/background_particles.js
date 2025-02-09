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

// Check saved theme and apply the correct background and other styles
const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark mode if nothing saved
document.body.classList.toggle("dark-mode", savedTheme === "dark"); // Apply dark mode class

// Set initial icon based on the theme
toggleIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";

// Apply the correct CSS variables based on the saved theme
if (savedTheme === "dark") {
  // Dark Mode settings
  document.documentElement.style.setProperty("--text-primary-color", "white");
  document.documentElement.style.setProperty("--background-secondary-color", "black");
  document.documentElement.style.setProperty("--timeline-line-color", "white");
  // Color of the home page (Full name, subtitles)
  document.documentElement.style.setProperty("--title-page-text-color", "white");
} else {
  // Light Mode settings
  document.documentElement.style.setProperty("--text-primary-color", "white");
  document.documentElement.style.setProperty("--background-secondary-color", "white");
  document.documentElement.style.setProperty("--timeline-line-color", "black");
  // Color of the home page (Full name, subtitles)
  document.documentElement.style.setProperty("--title-page-text-color", "black");
}

// Load particles based on the saved theme
loadParticles(savedTheme === "dark" ? "#000" : "#fff");

// Toggle function (when button is clicked)
toggleButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Save the user's theme preference in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Update the icon based on the theme
  toggleIcon.textContent = isDarkMode ? "🌙" : "☀️";

  // Update the CSS variables depending on the theme
  if (isDarkMode) {
    // Dark Mode settings
    // Primary text color (white in dark mode, vice versa)
    document.documentElement.style.setProperty("--text-primary-color", "white");
    // Secondary background color, used henceforth for the content border of timeline UPDATE THIS
    document.documentElement.style.setProperty("--background-secondary-color", "black");
    // For setting the color of the timeline "line"
    document.documentElement.style.setProperty("--timeline-line-color", "white");
    // Color of the home page (Full name, subtitles)
    document.documentElement.style.setProperty("--title-page-text-color", "white");
  } else {
    // Light Mode settings
    // Primary text color (white in dark mode, vice versa)
    document.documentElement.style.setProperty("--text-primary-color", "white");
    // Secondary background color, used henceforth for the content border of timeline UPDATE THIS
    document.documentElement.style.setProperty("--background-secondary-color", "white");
    // For setting the color of the timeline "line"
    document.documentElement.style.setProperty("--timeline-line-color", "black");
    // Color of the home page (Full name, subtitles)
    document.documentElement.style.setProperty("--title-page-text-color", "black");
  }

  // Reload particles with the new background color
  loadParticles(isDarkMode ? "#000" : "#fff");
});
