window.addEventListener("load", () => {
    document.body.style.display = "none";
    requestAnimationFrame(() => {
      document.body.style.display = "block";
    });
  });