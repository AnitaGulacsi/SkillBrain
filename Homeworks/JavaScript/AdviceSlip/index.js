const idNumber = document.getElementById("title-number"); 
const text = document.getElementById("text-change"); 
const button = document.getElementById("btn-dice");

async function adviceSlip() {
    const url = "https://api.adviceslip.com/advice";

    try{
        const response = await fetch(url);
        const data = await response.json();
        idNumber.textContent = data.slip.id; 
        text.textContent = data.slip.advice;
    }catch(e) {
        console.log(e);
    }
};

button.addEventListener("click" , adviceSlip);
