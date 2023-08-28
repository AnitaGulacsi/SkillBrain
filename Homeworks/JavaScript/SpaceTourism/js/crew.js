const background = document.getElementById("crew-page-background");

function setBackground() {
    if (window.innerWidth > 1200) {
        background.style.backgroundImage = "url('../assets/crew/background-crew-desktop.jpg')"
       //  console.log(true);
       } else if (window.innerWidth > 500 ) {
        background.style.backgroundImage =  "url('../assets/crew/background-crew-tablet.jpg')"
       //  console.log(true);
       } else {
        background.style.backgroundImage = "url('../assets/crew/background-crew-mobile.jpg')"
       //  console.log(true);
    }
}

setBackground();
window.addEventListener("resize" , setBackground);

//set crew information , and image change
const profession = document.getElementById("crew-profession");
const crewName = document.getElementById("crew-name");
const description = document.getElementById("crew-description");
const crewPhoto = document.getElementById("member")

//navigation 
const button1 = document.getElementById("page1");
const button2 = document.getElementById("page2");
const button3 = document.getElementById("page3");
const button4 = document.getElementById("page4");

let data = {};

async function information() {

    // const selectedCrew =  localStorage.getItem('electedCrew');
  
    // if (selectedCrew !== null) {
        const url = "http://127.0.0.1:5500/Space-Tourism-Website/secret_data/data/data.json";

        try {
            const response = await fetch(url);
            data = await response.json();
            crewInformationSwitch(0);
    //        crewInformationSwitch(selectedCrew);
        } catch (error) {
            console.log(error);
        }
    // }else {
    //     crewInformationSwitch(0);
    // }
}

information();

function crewInformationSwitch(index) {
    const {name , bio , role} = data.crew[index];
    const {webp} = data.crew[index].images;

   crewName.textContent = name;
   profession.textContent = role;
   description.textContent = bio;
   crewPhoto.src = webp;
}

// Select all the buttons
const buttons = [button1, button2, button3, button4];

// Store the initial background color , and the hover;
const initialButtonColor = "grey"; // Replace this with the actual initial color value

// Helper function to reset button colors
function resetButtonColors() {
    for (const button of buttons) {
        button.style.backgroundColor = initialButtonColor;
    }
}

button1.addEventListener('click' , () => {
    crewInformationSwitch(0);
    resetButtonColors();
    button1.style.backgroundColor = "white";
})

button2.addEventListener('click' , () => {
    crewInformationSwitch(1);
    resetButtonColors();
    button2.style.backgroundColor = "white";
})

button3.addEventListener('click' , () => {
    crewInformationSwitch(2);
    resetButtonColors();
    button3.style.backgroundColor = "white";
})

button4.addEventListener('click' , () => {
    crewInformationSwitch(3);
    resetButtonColors();
    button4.style.backgroundColor = "white";
})
