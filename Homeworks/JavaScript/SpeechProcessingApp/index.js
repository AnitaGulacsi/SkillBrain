const jokeText = document.getElementById("joke-text");
const button = document.getElementById("btn-primary");
const appearedRobot = document.querySelectorAll(".appeared");

// I'm checking the GIF is supported by the browser.
const toggleMediaDisplay = () => {
    const isGifSupported = document.getElementById("gif").ariaAutoComplete;
    if(isGifSupported) {
        document.getElementById("gif").style.display = 'none';
    } else {
        document.getElementById("image").style.display = 'none';
    }
};  
toggleMediaDisplay();

// add a joke tailer api 
async function jokeTailer() {
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.type === 'twopart') {
            jokeText.textContent = `- ${data.setup}  - ${data.delivery}`;
        }else if (data.type === 'single'){
            jokeText.textContent = data.joke;
        }
        console.log(data);
    } catch(e) {
        console.log(e);
    }
    
};


// move image after 5s 
function toggleRobot() {
    for (let i = 0; i < appearedRobot.length; i++) {
        const robot = appearedRobot[i];
        robot.style.display = "none";
        setTimeout(() => {
            robot.style.display = "block"; // Toggle the emoji after 2 seconds
        }, 800); // 10000 milliseconds = 10 seconds
    }
}

button.addEventListener('click', () => {
    jokeTailer(); // Call the jokeTailer function
    toggleRobot(); // Call the fallingDown function
});



