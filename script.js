const reveal = () => {
  // Select all elements with the class "reveal"
  const reveals = document.querySelectorAll(".reveal");
  const elements = document.querySelectorAll(".S14-Container");
  const elementimgs = document.querySelectorAll(".img1-S19-set");
  const x = document.getElementsByTagName("BODY")[0]

  // Loop over each element with the "reveal" class
  reveals.forEach(reveal => {
    // Get the height of the viewport
    const windowHeight = window.innerHeight;

    // Get the distance from the top of the document to the top of the current "reveal" element
    const elementTop = reveal.getBoundingClientRect().top;

    // Define a threshold for when the element should become visible (10 pixels from the viewport bottom in this case)
    const elementVisible = 10;

    // Check if the element has scrolled into view within the threshold
    if (elementTop <= windowHeight - elementVisible) {
      // If the element is within the threshold, add the "active" class to it
      reveal.classList.add("active");
    } else {
      // If the element is outside the threshold, remove the "active" class
      reveal.classList.remove("active");
    }
  })
  elements.forEach(element1 => {
    // Get the height of the viewport
    const windowHeight = window.innerHeight;

    // Get the distance from the top of the document to the top of the current "reveal" element
    const elementTop = element1.getBoundingClientRect().top;

    // Check if the element has scrolled into view within the threshold
    if (elementTop <= 220) {
      // x.style.overflowY = "hidden";
      // If the element is within the threshold, add the "active" class to it
      element1.classList.remove("scorllingIN");
      element1.classList.add("scorllingAC");
    } else {
      // If the element is outside the threshold, remove the "active" class
      element1.classList.remove("scorllingAC");
      element1.classList.add("scorllingIN");
    }
  })
}

const listenContainer = () =>{
  const elementimgs = document.querySelectorAll(".img1-S19-set");
  elementimgs.forEach(elementimg => {
    const elementTop = elementimg.offsetLeft;
    console.log(elementTop);

  })
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`The viewport's width is ${width} and the height is ${height}.`);
  document.getElementsByTagName('body')[0].style.setProperty('--vh1', `${width}px`);
  document.getElementsByTagName('body')[0].style.setProperty('--vh2', `${width}px`);
});
window.addEventListener('scroll', reveal);
