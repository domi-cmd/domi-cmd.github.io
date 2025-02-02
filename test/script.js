document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".transition-overlay");

    // On page load, remove transition effect
    setTimeout(() => {
        overlay.style.clipPath = "circle(0% at bottom right)";
    }, 100);

    // Handle link clicks
    document.querySelectorAll(".transition-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            const href = this.href;
            overlay.style.clipPath = "circle(150% at bottom right)"; // Start animation

            setTimeout(() => {
                window.location.href = href; // Navigate after animation
            }, 1000); // Adjust based on animation duration
        });
    });
});
