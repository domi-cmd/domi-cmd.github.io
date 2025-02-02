document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");
    const hiddenElements = document.querySelectorAll(".hidden_when_nav_drawer_open"); // Get all elements with the specified class
    const drawer = document.getElementById("navbar-drawer");
    const drawerOpenBtn = document.getElementById("drawer-open");
    const drawerCloseBtn = document.getElementById("drawer-close");

    // Function to hide elements
    function hideElements() {
      navbar.classList.add("hidden");
      hiddenElements.forEach(element => {
        element.classList.add("hidden");
      });
    }

    // Function to show elements
    function showElements() {
      navbar.classList.remove("hidden");
      hiddenElements.forEach(element => {
        element.classList.remove("hidden");
      });
    }

    // Open drawer and hide navbar + other elements
    drawerOpenBtn.addEventListener("click", () => {
      drawer.showModal();
      hideElements();  // Hide the navbar and other elements
    });

    // Close drawer and show navbar + other elements
    document.querySelectorAll("#drawer-close, #navbar-drawer a").forEach(element => {
      element.addEventListener("click", () => {
        drawer.close();
        showElements();  // Show the navbar and other elements again
      });
    });

    // Sticky navbar functionality (unchanged)
    const observer = new IntersectionObserver(entries => {
      if (entries[0].boundingClientRect.y < 0) {
        navbar.classList.add("navbar--sticky");
      } else {
        navbar.classList.remove("navbar--sticky");
      }
    });
    observer.observe(document.querySelector("#navbar-trigger"));
  });