const reveal = () => {
  // Select all elements with the class "reveal"
  const reveals = document.querySelectorAll(".reveal");

  // Loop over each element with the "reveal" class
  reveals.forEach(reveal => {
    // Get the height of the viewport
    const windowHeight = window.innerHeight;

    // Get the distance from the top of the document to the top of the current "reveal" element
    const elementTop = reveal.getBoundingClientRect().top;

    // Define a threshold for when the element should become visible (10 pixels from the viewport bottom in this case)
    const elementVisible = 10;

    // Check if the element has scrolled into view within the threshold
    if (elementTop < windowHeight - elementVisible) {
      // If the element is within the threshold, add the "active" class to it
      reveal.classList.add("active");
    } else {
      // If the element is outside the threshold, remove the "active" class
      reveal.classList.remove("active");
    }
  })
}

// Add a scroll event listener to the window, so the 'reveal' function is called every time the user scrolls
window.addEventListener('scroll', reveal);
