//set background
const background = document.getElementById("destination-page-background");

function setBackground() {
    if (window.innerWidth > 1200) {
        background.style.backgroundImage = "url('../assets/destination/background-destination-desktop.jpg')"
       //  console.log(true);
       } else if (window.innerWidth > 500 ) {
        background.style.backgroundImage =  "url('../assets/destination/background-destination-tablet.jpg')"
       //  console.log(true);
       } else {
        background.style.backgroundImage = "url('../assets/destination/background-destination-mobile.jpg')"
       //  console.log(true);
    }
}

setBackground();
window.addEventListener("resize" , setBackground);

//set planet information , and image change
const planetImage = document.getElementById("planets");
const planetName = document.getElementById("planet-name");
const planetDescription = document.getElementById("planet-description");
const planetDistance = document.getElementById("distance");
const travelTime = document.getElementById("travel-time");

// id for every planet type 
const moonLink = document.getElementById("moon");
const marsLink = document.getElementById("mars");
const europaLink = document.getElementById("europa");
const titanLink = document.getElementById("titan");

let data = {};

async function requestDataJson() {
    const selectedDestination = localStorage.getItem('selectedDestination');

    // Only call API if there is no selected destination already (page wasn't open before)
    if (selectedDestination !== null) {
        const url = "http://127.0.0.1:5500/secret_data/data/data.json";

        try {
            const response = await fetch(url);
            data = await response.json();
            // Switch to already selected destination
            destinationSwitch(selectedDestination);
        } catch (error) {
            console.log(error);
        }
    } else {
        // If there was no selected destination, switch to moon
        destinationSwitch(0);
    }
}

// Entry point after page open or refresh
requestDataJson();

function destinationSwitch(index) {
    const {name,  description, distance, travel } = data.destinations[index]; 
    const { webp } = data.destinations[index].images;

    planetName.textContent = name;
    planetImage.src = webp;
    planetDescription.textContent = description;
    planetDistance.textContent = distance;
    travelTime.textContent = travel;
}

moonLink.addEventListener('click' , () => {
    destinationSwitch(0);
    localStorage.setItem('selectedDestination', 0);
});

marsLink.addEventListener("click", () => {
    destinationSwitch(1);
    localStorage.setItem('selectedDestination', 1);
});

europaLink.addEventListener('click', () => {
    destinationSwitch(2);
    localStorage.setItem('selectedDestination', 2);
});
titanLink.addEventListener("click", () => {
    destinationSwitch(3);
    localStorage.setItem('selectedDestination', 3);
});


// function destinationSwitch(index) {
//     const data = requestDataJson();

//     const {name,  description, distance, travel } = data.destinations[index]; 
//     const { webp } = data.destinations[index].images;

//     planetName.textContent = name;
//     planetImage.src = webp;
//     planetDescription.textContent = description;
//     planetDistance.textContent = distance;
//     travelTime.textContent = travel;
// }

// moonLink.addEventListener('click' , () => {
//     destinationSwitch(0);
//     localStorage.setItem('selectedDestination', 0);
// });

// marsLink.addEventListener("click", () => {
//     destinationSwitch(1);
//     localStorage.setItem('selectedDestination', 1);
// });

// europaLink.addEventListener('click', () => {
//     destinationSwitch(2);
//     localStorage.setItem('selectedDestination', 2);
// });
// titanLink.addEventListener("click", () => {
//     destinationSwitch(3);
//     localStorage.setItem('selectedDestination', 3);
// });

// //set planet information , and image change

// const planetImage = document.getElementById("planets");
// const planetName = document.getElementById("planet-name");
// const planetDescription = document.getElementById("planet-description");
// const distance = document.getElementById("distance");
// const travelTime = document.getElementById("travel-time");

// // id for every planet type 
// const moonLink = document.getElementById("moon");
// const marsLink = document.getElementById("mars");
// const europaLink = document.getElementById("europa");
// const titanLink = document.getElementById("titan");


//  //----------------

// async function planetSwitch() {
//     const url = "http://127.0.0.1:5500/Space-Tourism-Website/secret_data/data/data.json";

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         planetImage.src = data.destinations[0].images.webp;
//         planetName.textContent = data.destinations[0].name;
//         planetDescription.textContent = data.destinations[0].description;
//         distance.textContent = data.destinations[0].distance;
//         travelTime.textContent = data.destinations[0].travel;
//     } catch (error) {
//         console.log(error);
//     }
// } 

// planetSwitch();

// async function planetSwitchMars() {
//     const url = "http://127.0.0.1:5500/Space-Tourism-Website/secret_data/data/data.json";

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         planetImage.src = data.destinations[1].images.webp;
//         planetName.textContent = data.destinations[1].name;
//         planetDescription.textContent = data.destinations[1].description;
//         distance.textContent = data.destinations[1].distance;
//         travelTime.textContent = data.destinations[1].travel;
//     } catch (error) {
//         console.log(error);
//     }
// } 

// function moonLinkSwitch() {
//     planetSwitch();
// }

// function marsLinkSwitch() {
//     planetSwitchMars();
// }

// moonLink.addEventListener("click" , moonLinkSwitch);
// marsLink.addEventListener("click" , marsLinkSwitch);