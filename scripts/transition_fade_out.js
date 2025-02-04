document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".transition-overlay");

    // Forcefully reset overlay on page load (including back navigation)
    overlay.style.clipPath = "circle(0% at bottom right)";

    // Add a slight delay before adding fade-in class to prevent flash
    setTimeout(() => {
        document.body.classList.add("fade-in");  // Fade in content after a short delay
    }, 100);  // 100ms delay, adjust if needed

    // On page load, remove transition effect
    setTimeout(() => {
        overlay.style.clipPath = "circle(0% at bottom right)";
    }, 100);  // Keep initial transition from being visible immediately

    // Handle link clicks
    document.querySelectorAll(".transition-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            const href = this.href;

            // Get the overlay class to apply based on the data attribute or default
            const overlayClass = this.getAttribute("data-overlay-class") || "sport_bot";

            // Remove any existing overlay classes
            overlay.classList.remove("sport_bot", "solo_baila", "dashboard_cov", "ludo", "default_menu"); // Add more overlay classes if needed

            // Add the selected overlay class
            overlay.classList.add(overlayClass);

            // Trigger the transition by adjusting the clipPath
            overlay.style.clipPath = "circle(150% at bottom right)"; // Example transition start

            setTimeout(() => {
                window.location.href = href; // Navigate after animation
            }, 1000); // Adjust based on animation duration
        });
    });
});
