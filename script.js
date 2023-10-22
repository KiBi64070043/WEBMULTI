const reveal = () => {
  // Select all elements with the class "reveal"
  const reveals = document.querySelectorAll(".reveal");
  const elements = document.querySelectorAll(".S14-Container");

  
  const Chatbox1 = document.getElementById("Quote-S11-1");
  const Chatbox2 = document.getElementById("Quote-S11-2");
  const Chatbox3 = document.getElementById("Quote-S11-3");
  const scrollTop1 = Chatbox1.getBoundingClientRect().y;
  const scrollTop2 = Chatbox2.getBoundingClientRect().y;
  const scrollTop3 = Chatbox3.getBoundingClientRect().y;
  Chatbox1.style.opacity = 0 + scrollTop1/350;
  Chatbox2.style.opacity = 0 + scrollTop2/350;
  Chatbox3.style.opacity = 0 + scrollTop3/350;

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
    const elementTop = element1.getBoundingClientRect().top;

    if (elementTop <= 220) {
      element1.classList.remove("scorllingIN");
      element1.classList.add("scorllingAC");
    } else {
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
  if (width <= 980){
    document.getElementsByTagName('body')[0].style.setProperty('--vw1', `${width}px`);
  }
  else{
    document.getElementsByTagName('body')[0].style.setProperty('--vw1', 'auto');
  }
});

window.addEventListener('scroll', reveal);
