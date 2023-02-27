const entireBody = document.getElementById("allBody");
const principalLogo = document.getElementById("principalLogo");
const lightMode = document.getElementById("lightMode");

let lightModeActive = true;
let iconNightMode = true;

lightMode.addEventListener("click", () => {
  if (lightModeActive === false && iconNightMode === false) {
    entireBody.style.backgroundColor = "#1F2029";
    entireBody.style.color = "#fff";
    principalLogo.src = "Assets/Original-Black-Logo.svg";

    lightMode.classList.remove("fa-moon");
    lightMode.classList.add("fa-sun");

    lightModeActive = true;
  } else {
    entireBody.style.backgroundColor = "#fff";
    entireBody.style.color = "#1F2029";
    principalLogo.src = "Assets/Original-White-Logo.svg";

    lightMode.classList.remove("fa-sun");
    lightMode.classList.add("fa-moon");

    lightModeActive = false;
    iconNightMode = false;
  }
});
