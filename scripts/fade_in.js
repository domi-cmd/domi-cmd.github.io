document.addEventListener("DOMContentLoaded", () => {
    // Select the main container
    const mainContainer = document.querySelector('.main_container');

    // Add a slight delay before adding fade-in class to prevent flash
    setTimeout(() => {
        document.body.classList.add("fade-in");  // Fade in content after a short delay
      }, 100);  // 100ms delay, adjust if needed
    
    // Add the fade-in class to it once the content has loaded
    mainContainer.classList.add('fade-in');
});