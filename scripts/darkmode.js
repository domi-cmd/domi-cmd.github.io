const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load the preferred theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}