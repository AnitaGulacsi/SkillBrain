//set background
const background = document.getElementById("technology-background");

function setBackground() {
    if (window.innerWidth > 1200) {
        background.style.backgroundImage = "url('../assets/technology/background-technology-desktop.jpg')"
       } else if (window.innerWidth > 500 ) {
        background.style.backgroundImage =  "url('../assets/technology/background-technology-tablet.jpg')"
       } else {
        background.style.backgroundImage = "url('../assets/technology/background-technology-mobile.jpg')"
    }
}

setBackground();
window.addEventListener("resize" , setBackground);

const vehicleName = document.getElementById("vehicle-name");
const vehicleDescription = document.getElementById("vehicle-description");
const vehicleImage = document.getElementById("vehicle-img");

//button
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

let data = {};

async function getInformation() {
    const url = "http://127.0.0.1:5500/Space-Tourism-Website/secret_data/data/data.json";

    try {
        const response = await fetch(url);
        data = await response.json();
        console.log(data);
        technologyInformation(0);
    } catch (error) {
        console.log(error);
    }
}

getInformation();

function technologyInformation(index) {
    const {name ,description} = data.technology[index];
    const {portrait} = data.technology[index].images;
    
    vehicleName.textContent = name;
    vehicleDescription.textContent = description;
    vehicleImage.src = portrait;
}

const buttons = [button1 , button2, button3];


function resetButtonStyle() {
    for (const button of buttons) {
        button.style.backgroundColor = "transparent";
        button.style.color = 'white';
    }
}

button1.addEventListener('click' , () => {
    technologyInformation(0);
    resetButtonStyle() 
    button1.style.backgroundColor = "white";
    button1.style.color = "black";
});

button2.addEventListener('click' , () => {
    technologyInformation(1);
    resetButtonStyle() 
    button2.style.backgroundColor = "white";
    button2.style.color = "black";
});

button3.addEventListener('click' , () => {
    technologyInformation(2);
    resetButtonStyle() 
    button3.style.backgroundColor = "white";
    button3.style.color = "black";
});

