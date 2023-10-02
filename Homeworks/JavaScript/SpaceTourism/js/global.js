//nav-bar-container - hamburger menu 

const openMenu = document.getElementById("open");
const listElements = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close");

function openNavBar() {
   if (listElements.style.display = "none"){
      listElements.style.display = "block";
      openMenu.style.display = "none";
      closeMenu.style.display = "block";
   }
}

function closeNavBar() {
   if (listElements.style.display = "block") {
      listElements.style.display = "none";
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
   }
}

// openMenu.addEventListener("click" , openNavBar);
// closeMenu.addEventListener("click" , closeNavBar);

function openClose(state){
   switch (state) { 
      case "open":
         openNavBar();
          break;
      case "close":
         closeNavBar();
          break;
      default:
          break;
   }
}

openMenu.addEventListener("click", () => openClose("open"));
closeMenu.addEventListener("click", () => openClose("close"));