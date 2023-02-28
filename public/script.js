const entireBody = document.getElementById("allBody");
const principalLogo = document.getElementById("principalLogo");
const lightMode = document.getElementById("lightMode");
const navMenu = document.getElementById("navMenu");
const btnNavMenu = document.getElementById("btnNavMenu")

let lightModeActive = true;
let iconNightMode = true;

lightMode.addEventListener("click", () => {
  if (lightModeActive === false && iconNightMode === false) {
    entireBody.style.backgroundColor = "#1F2029";
    entireBody.style.color = "#fff";
    principalLogo.src = "Assets/Original-Black-Logo.svg";

    navMenu.style.backgroundColor = "#1F2029";

    lightMode.classList.remove("fa-sun");
    lightMode.classList.add("fa-moon");

    lightModeActive = true;
  } else {
    entireBody.style.backgroundColor = "#fff";
    entireBody.style.color = "#1F2029";
    principalLogo.src = "Assets/Original-White-Logo.svg";

    navMenu.style.backgroundColor = "#fff";

    lightMode.classList.remove("fa-moon");
    lightMode.classList.add("fa-sun");

    lightModeActive = false;
    iconNightMode = false;
  }
});

let navMenuActive = false;

btnNavMenu.addEventListener("click", () => {
  if (navMenuActive === false) {
    navMenu.classList.remove("hidden");
    navMenuActive = true;
  } else {
    navMenu.classList.add("hidden");
    navMenuActive = false;
  }
});
