document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const hiddenElements = document.querySelectorAll(".hidden_when_nav_drawer_open"); // Get all elements with the specified class
  const footer = document.querySelector(".site-footer");  // Select footer directly
  const drawer = document.getElementById("navbar-drawer");
  const drawerOpenBtn = document.getElementById("drawer-open");
  const drawerCloseBtn = document.getElementById("drawer-close");

  // Function to hide elements (including footer)
  function hideElements() {
    navbar.classList.add("hidden");
    hiddenElements.forEach(element => {
      element.classList.add("hidden");
    });
    if (footer) {
      footer.classList.add("hidden"); // Hide footer as well
    }
  }

  // Function to show elements (including footer)
  function showElements() {
    navbar.classList.remove("hidden");
    hiddenElements.forEach(element => {
      element.classList.remove("hidden");
    });
    if (footer) {
      footer.classList.remove("hidden"); // Show footer again
    }
  }

  // Open drawer and hide navbar + footer + other elements
  drawerOpenBtn.addEventListener("click", () => {
    drawer.showModal();
    hideElements();  // Hide the navbar, footer, and other elements
  });

  // Close drawer and show navbar + footer + other elements
  document.querySelectorAll("#drawer-close, #navbar-drawer a").forEach(element => {
    element.addEventListener("click", () => {
      drawer.close();
      showElements();  // Show the navbar, footer, and other elements again
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
