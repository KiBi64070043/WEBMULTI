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
    Chatbox1.style.opacity = 0 + scrollTop1 / 350;
    Chatbox2.style.opacity = 0 + scrollTop2 / 350;
    Chatbox3.style.opacity = 0 + scrollTop3 / 350;



    const Chatbox1S1 = document.getElementById("Quote-S2_1");
    const Chatbox2S1 = document.getElementById("Quote-S2_2");
    const Chatbox3S1 = document.getElementById("Quote-S2_3");
    const Chatbox4S1 = document.getElementById("Quote-S2_4");
    const scrollTop1S1 = Chatbox1S1.getBoundingClientRect().y;
    const scrollTop2S1 = Chatbox2S1.getBoundingClientRect().y;
    const scrollTop3S1 = Chatbox3S1.getBoundingClientRect().y;
    const scrollTop4S1 = Chatbox4S1.getBoundingClientRect().y;
    Chatbox1S1.style.opacity = 1 - scrollTop1S1 / 1400;
    Chatbox2S1.style.opacity = 1 - scrollTop2S1 / 1400;
    Chatbox3S1.style.opacity = 1 - scrollTop3S1 / 1400;
    Chatbox4S1.style.opacity = 1 - scrollTop4S1 / 1400;


    const Text1S21 = document.getElementsByClassName("text1-S21");
    const scrollTopText1S21 = Text1S21[0].getBoundingClientRect().y;
    const Text2S21 = document.getElementsByClassName("text2-S21");
    const scrollTopText2S21 = Text2S21[0].getBoundingClientRect().y;
    const Text3S21 = document.getElementsByClassName("text3-S21");
    const scrollTopText3S21 = Text3S21[0].getBoundingClientRect().y;
    if (scrollTopText1S21 >= 100) {
        Text1S21[0].style.opacity = 1 - scrollTopText1S21 / 800;
    }
    if (scrollTopText2S21 >= 100) {
        Text2S21[0].style.opacity = 1 - scrollTopText2S21 / 800;
    }
    if (scrollTopText3S21 >= 100) {
        Text3S21[0].style.opacity = 1 - scrollTopText3S21 / 800;
    }

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

const listenContainer = () => {
    const elementimgs = document.querySelectorAll(".img1-S19-set");
    elementimgs.forEach(elementimg => {
        const elementTop = elementimg.offsetLeft;
        console.log(elementTop);
    })
}

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // console.log(`The viewport's width is ${width} and the height is ${height}.`);
    document.getElementsByTagName('body')[0].style.setProperty('--vh1', `${width}px`);
    document.getElementsByTagName('body')[0].style.setProperty('--vh2', `${width}px`);
    if (width <= 980) {
        document.getElementsByTagName('body')[0].style.setProperty('--vw1', `${width}px`);
    } else {
        document.getElementsByTagName('body')[0].style.setProperty('--vw1', 'auto');
    }
});

window.addEventListener('scroll', reveal);