function toggleDarkMode() {
    var body = document.body;
    var sliderContainer = document.getElementById("sliderContainer");
    var sliderButton = document.getElementById("sliderButton");
    var formContainer = document.getElementById("formContainer");
    var headning = document.getElementById("heading");
    var footing = document.getElementById("footer");
    var image = document.getElementById("imgClickAndChange");
    var canvas = document.getElementById("offcanvasNavbar");
    var list = document.getElementById("lista");
    var list2 = document.getElementById("lista2");
    var logo = document.getElementById("logo");
    var navbut = document.getElementById("navbutton");
    
    body.classList.toggle("dark-mode");
    sliderContainer.classList.toggle("dark-mode");
    sliderButton.classList.toggle("dark-mode");
    formContainer.classList.toggle("dark-mode");
    headning.classList.toggle("dark-mode");
    footing.classList.toggle("dark-mode");
    canvas.classList.toggle("text-bg-dark")
    list.classList.toggle("text-white")
    list2.classList.toggle("text-white")
    logo.classList.toggle("text-white")
    navbut.classList.toggle("bg-white")
    
    if (body.classList.contains("dark-mode")) {
      image.src = "képek\\white.png";
      image.alt = "Dark mode image";
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      image.src = "képek\\black.png";
      image.alt = "Light mode image";
      localStorage.removeItem("darkModeEnabled");
    }
}
document.addEventListener("DOMContentLoaded", function() {
var darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
})
function checkDarkModeEnabled() {
    var darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled === "true") {
        toggleDarkMode();
    }
}
checkDarkModeEnabled()