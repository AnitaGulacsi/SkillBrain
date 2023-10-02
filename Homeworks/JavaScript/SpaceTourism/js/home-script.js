//home page 
const background = document.getElementById("home-page-background");

function setBackground() {
  
   if (window.innerWidth > 1200) {
    background.style.backgroundImage = "url('../assets/home/background-home-desktop.jpg')"
   //  console.log(true);
   } else if (window.innerWidth > 500 ) {
    background.style.backgroundImage =  "url('../assets/home/background-home-tablet.jpg')"
   //  console.log(true);
   } else {
    background.style.backgroundImage = "url('../assets/home/background-home-mobile.jpg')"
   //  console.log(true);
   }
}

setBackground();
window.addEventListener("resize", setBackground);